import { PRODUCTS } from '../storeCatalog/products'
import { CATEGORIES, BRANDS, TAGS } from '../storeCatalog/catalogs'

class StoreService {
    allProducts: any[]
    categorisedProducts: any[]
    brands: any[]

    constructor(products: any[], categories: any, brands: any) {
        this.allProducts = []
        this.categorisedProducts = []
        this.brands = []
    }

    initialise(): null {
        this.allProducts = PRODUCTS
        return null
    }

    async getCategorisedProducts(): Promise<any> {
        return await new Promise((resolve, reject) => {
            resolve([1, 2, 3, 4])
        })
    }

    async getCategories(): Promise<any> {
        const categoriesPromise = new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(CATEGORIES)
                }, 1000)
            } catch (error) {
                reject(error)
            }
        })

        return await categoriesPromise
    }

    async getBrands(): Promise<any> {
        const brandsPromise = new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(BRANDS)
                }, 5000)
            } catch (error) {
                reject(error)
            }
        })

        return await brandsPromise
    }

    async getTags(): Promise<any> {
        const tagsPromise = new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(TAGS)
                }, 10000)
            } catch (error) {
                reject(error)
            }
        })

        return await tagsPromise
    }

    async getByKeywords(keyword: string): Promise<any> {
        const itemsPromise = new Promise((resolve, reject) => {
            try {
                console.log(keyword)

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

const storeServiceObject = Object.freeze(new StoreService(PRODUCTS, CATEGORIES, BRANDS))
export default storeServiceObject
