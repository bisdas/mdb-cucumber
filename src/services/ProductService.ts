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

    getCategorisedProducts(): any[] {
        return []
    }

    getBrands(): any[] {
        return []
    }

    getByKeywords(): any[] {
        return []
    }
}

const productServiceObject = Object.freeze(new ProductService(PRODUCTS, CATEGORIES, BRANDS))
export default productServiceObject
