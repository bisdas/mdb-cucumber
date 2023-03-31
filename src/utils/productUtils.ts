export const organiseProductsByCategory = (products: any[]): any => {
    const organisedItems: any[] = products.reduce((allOrganisedItems: any[], currentProduct: any) => {
        const allOrganisedItemsModified = [...allOrganisedItems]
        currentProduct.categories.forEach((category: any) => {
            const productDetails = {
                id: currentProduct.id,
                title: currentProduct.title,
                brand: currentProduct.brand,
                tags: currentProduct.tags,
                targetLink: currentProduct.targetLink,
                thumbnail: currentProduct.thumbnail,
            }

            const existingCategory = allOrganisedItemsModified.find(item => item.category.id === category.id)
            if (existingCategory === undefined) {
                allOrganisedItemsModified.push({
                    category: {
                        title: category.title,
                        id: category.id,
                    },
                    products: [productDetails],
                })
            } else {
                existingCategory.products.push(productDetails)
            }
        })

        return allOrganisedItemsModified
    }, [])

    console.log(organisedItems)
    return organisedItems
}
