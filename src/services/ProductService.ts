import { PRODUCTS } from '../storeCatalog/products'
import { CATEGORIES, BRANDS } from '../storeCatalog/catalogs'

class ProductService {
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
        console.log('getting data from db.... ')
        return await new Promise((resolve, reject) => {
            resolve([1, 2, 3, 4])
        })
    }

    getBrands(): any {
        return []
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

const productServiceObject = Object.freeze(new ProductService(PRODUCTS, CATEGORIES, BRANDS))
export default productServiceObject
