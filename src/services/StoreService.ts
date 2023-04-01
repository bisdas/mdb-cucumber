/* eslint-disable @typescript-eslint/no-unused-vars */
import { PRODUCTS } from '../storeCatalog/products'
import { CATEGORIES, BRANDS, TAGS } from '../storeCatalog/catalogs'
import { organiseProductsByCategory } from '../utils/productUtils'

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
        return await new Promise((resolve, reject) => {
            try {
                const result = organiseProductsByCategory(this.products)

                // fake delay
                setTimeout(() => {
                    resolve(result)
                }, 500)
            } catch (error: any) {
                reject(error)
            }
        })
    }

    async getCategories(): Promise<any> {
        const categoriesPromise = new Promise((resolve, reject) => {
            try {
                resolve(this.categories)
            } catch (error: any) {
                reject(error)
            }
        })

        return await categoriesPromise
    }

    async getBrands(): Promise<any> {
        const brandsPromise = new Promise((resolve, reject) => {
            try {
                resolve(this.brands)
            } catch (error: any) {
                reject(error)
            }
        })

        return await brandsPromise
    }

    async getTags(): Promise<any> {
        const tagsPromise = new Promise((resolve, reject) => {
            try {
                resolve(this.tags)
            } catch (error: any) {
                reject(error)
            }
        })

        return await tagsPromise
    }

    async getByKeywords(keyword: string): Promise<any> {
        console.log('get by keywords', keyword)
        const itemsPromise = new Promise((resolve, reject) => {
            try {
                // todo: utils logic to find keyword from a string.
                // todo: filter products by keyword

                setTimeout(() => {
                    // todo: remove hard code error
                    if (keyword === 'error') {
                        reject(new Error('error keyword'))
                    } else {
                        resolve(this.products)
                    }
                }, 3000)
            } catch (error: any) {
                reject(error)
            }
        })

        return await itemsPromise
    }
}

const storeServiceObject = Object.freeze(new StoreService(PRODUCTS, CATEGORIES, BRANDS, TAGS))
export default storeServiceObject
