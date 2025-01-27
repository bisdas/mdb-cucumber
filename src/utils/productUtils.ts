/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-debugger */

export const organiseProductsByCategory = (products: any[]): any => {
    const organisedItems: any[] = products.reduce((allOrganisedItems: any[], currentProduct: any) => {
        const allOrganisedItemsModified = [...allOrganisedItems];
        currentProduct.categories.forEach((category: any) => {
            const productDetails = {
                id: currentProduct.id,
                title: currentProduct.title,
                brand: currentProduct.brand,
                tags: currentProduct.tags,
                targetLink: currentProduct.targetLink,
                image: currentProduct.image,
            };

            const existingCategory = allOrganisedItemsModified.find((item) => item.category.id === category.id);
            if (existingCategory === undefined) {
                allOrganisedItemsModified.push({
                    category: {
                        title: category.title,
                        id: category.id,
                    },
                    products: [productDetails],
                });
            } else {
                existingCategory.products.push(productDetails);
            }
        });

        return allOrganisedItemsModified;
    }, []);

    return organisedItems;
};

export const getCollectionByKeywordMatch = (keyword: string, collection: any[]): any => {
    const sanitisedKeyword = keyword.toLowerCase().trim();

    const itemsInCollection = Object.keys(collection).map((key: any) => collection[key]);
    const matches = [];

    // step 1: check matches with the entire keyword text
    matches.push(...itemsInCollection.filter((item: any) => item.title.toLowerCase().includes(sanitisedKeyword)));

    // step 2: check matches of words in the keyword text
    const allTerms: any[] = sanitisedKeyword.split(' ');

    if (allTerms.length > 1) {
        /** need to check the lengto be > 1, because when the length is 1,
         * the matches are already added
         */
        const termMatches: any[] = allTerms.reduce((allMatches: any, currentTerm: string) => {
            const updatedMatches = [...allMatches];
            updatedMatches.push(
                ...itemsInCollection.filter((item: any) => item.title.toLowerCase().includes(currentTerm))
            );
            return updatedMatches;
        }, []);

        matches.push(...termMatches);
    }

    return matches;
};
