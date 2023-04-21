/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-debugger */
import { PRODUCTS } from '../storeCatalog/products'
import { CATEGORIES, BRANDS, TAGS } from '../storeCatalog/catalogs'
import { organiseProductsByCategory, getCollectionByKeywordMatch } from '../utils/productUtils'
import { getRandomNumber } from '../utils/utils'
import { KEYWORD_MIN_LENGTH } from '../configuration/constants'

class StoreService {
    products: any[]
    brands: any
    categories: any
    tags: any

    constructor(products: any[], categories: any, brands: any, tags: any) {
        this.products = products
        this.brands = brands
        this.categories = categories
        this.tags = tags
    }

    async getCategorisedProducts(): Promise<any> {
        // due to the fact that the context is not immediately
        // updated after data is fetched from the store service,
        // the service is recalled.
        // todo: check why the service is called multiple times
        return await new Promise((resolve, reject) => {
            try {
                const result = organiseProductsByCategory(this.products)

                // fake delay
                const ramdomDelay = getRandomNumber(200, 1000)
                setTimeout(() => {
                    resolve(result)
                }, ramdomDelay)
            } catch (error: any) {
                reject(error)
            }
        })
    }

    async getAllCategories(): Promise<any> {
        const promiseCategories = new Promise((resolve, reject) => {
            try {
                resolve(this.categories)
            } catch (error: any) {
                reject(error)
            }
        })

        return await promiseCategories
    }

    async getAllBrands(): Promise<any> {
        const promiseBrands = new Promise((resolve, reject) => {
            try {
                resolve(this.brands)
            } catch (error: any) {
                reject(error)
            }
        })

        return await promiseBrands
    }

    async getAllTags(): Promise<any> {
        const promiseTags = new Promise((resolve, reject) => {
            try {
                resolve(this.tags)
            } catch (error: any) {
                reject(error)
            }
        })

        return await promiseTags
    }

    getProductsByCategories(categories: any[]): any {
        const productsList: any[] = this.products.reduce((collectedProducts: any[], currentProduct: any) => {
            const updatedList = [...collectedProducts]
            currentProduct.categories.forEach((category: any) => {
                const catIndex = categories.findIndex((cat) => {
                    return cat.title.toLowerCase().trim() === category.title.toLowerCase().trim()
                })

                if (catIndex !== -1) {
                    updatedList.push(currentProduct)
                }
            })

            return updatedList
        }, [])

        return productsList
    }

    getProductsByBrands(brands: any[]): any {
        const productsList: any[] = this.products.reduce((collectedProducts: any[], currentProduct: any) => {
            const updatedList = [...collectedProducts]
            const brandIndex = brands.findIndex(
                (brand) => brand.title.toLowerCase().trim() === currentProduct.brand.title.toLowerCase().trim()
            )

            if (brandIndex !== -1) {
                updatedList.push(currentProduct)
            }

            return updatedList
        }, [])

        return productsList
    }

    getProductsByTags(tags: any[]): any {
        const productsList: any[] = this.products.reduce((collectedProducts: any[], currentProduct: any) => {
            const updatedList = [...collectedProducts]
            currentProduct.tags.forEach((productCurrentTag: any) => {
                const tagIndex = tags.findIndex(
                    (tag) => tag.title.toLowerCase().trim() === productCurrentTag.title.toLowerCase().trim()
                )

                if (tagIndex !== -1) {
                    updatedList.push(currentProduct)
                }
            })

            return updatedList
        }, [])

        return productsList
    }

    getProductsByTitle(title: string): any {
        // todo: search partial of titles
        return [...this.products.filter((prod) => prod.title.toLowerCase().includes(title.trim()))]
    }

    async getProductsByKeyword(keyword: string): Promise<any> {
        const itemsPromise = new Promise((resolve, reject) => {
            try {
                /** resolve with empty array if effective keyword length is less than minimum */
                const sanitisedKeyword = keyword.toLowerCase().trim()
                if (sanitisedKeyword.length < KEYWORD_MIN_LENGTH) {
                    resolve([])
                    return
                }

                const matchedCategories = getCollectionByKeywordMatch(sanitisedKeyword, this.categories)
                const matchedBrands = getCollectionByKeywordMatch(sanitisedKeyword, this.brands)
                const getMatchedTags = getCollectionByKeywordMatch(sanitisedKeyword, this.tags)

                const matchedProducts: any[] = []
                matchedProducts.push(...this.getProductsByCategories(matchedCategories))
                matchedProducts.push(...this.getProductsByBrands(matchedBrands))
                matchedProducts.push(...this.getProductsByTags(getMatchedTags))
                matchedProducts.push(...this.getProductsByTitle(sanitisedKeyword))

                if (sanitisedKeyword === 'error') {
                    reject(new Error('error keyword'))
                } else {
                    resolve(matchedProducts)
                }
            } catch (error: any) {
                reject(error)
            }
        })

        return await itemsPromise
    }
}

const storeServiceObject = Object.freeze(new StoreService(PRODUCTS, CATEGORIES, BRANDS, TAGS))
export default storeServiceObject
