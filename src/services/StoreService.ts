/* eslint-disable @typescript-eslint/no-unused-vars */
import { PRODUCTS } from '../storeCatalog/products'
import { CATEGORIES, BRANDS, TAGS } from '../storeCatalog/catalogs'
import { organiseProductsByCategory } from '../utils/productUtils'

class StoreService {
    allProducts: any[]
    brands: any
    categories: any
    tags: any

    constructor(products: any[], categories: any, brands: any, tags: any) {
        this.allProducts = products
        this.brands = brands
        this.categories = categories
        this.tags = tags
    }

    async getCategorisedProducts(): Promise<any> {
        return await new Promise((resolve, reject) => {
            const result = organiseProductsByCategory(this.allProducts)
            resolve(result)
        })
    }

    async getCategories(): Promise<any> {
        const categoriesPromise = new Promise((resolve, reject) => {
            try {
                resolve(CATEGORIES)
            } catch (error) {
                reject(error)
            }
        })

        return await categoriesPromise
    }

    async getBrands(): Promise<any> {
        const brandsPromise = new Promise((resolve, reject) => {
            try {
                resolve(BRANDS)
            } catch (error) {
                reject(error)
            }
        })

        return await brandsPromise
    }

    async getTags(): Promise<any> {
        const tagsPromise = new Promise((resolve, reject) => {
            try {
                resolve(TAGS)
            } catch (error) {
                reject(error)
            }
        })

        return await tagsPromise
    }

    async getByKeywords(keyword: string): Promise<any> {
        const itemsPromise = new Promise((resolve, reject) => {
            try {
                // todo: utils logic to find keyword from a string.
                // todo: filter products by keyword
                resolve(PRODUCTS)
            } catch (error) {
                reject(error)
            }
        })

        return await itemsPromise
    }
}

const storeServiceObject = Object.freeze(new StoreService(PRODUCTS, CATEGORIES, BRANDS, TAGS))
export default storeServiceObject
