export const MetricType = {
    visitSite: 'visit_site',
    makeSearch: 'make_search',
    visitCategory: 'visit_category',
    visitProduct: 'visit_product',
    interactGoToTop: 'interact_go_to_top',
    visitAboutUs: 'visit_about_us',
};

export const sendMetrics = (metrics: string): void => {
    console.log('Sending metrics:', metrics);
    try {
        const namespace = 'mdb-bis-cucumber-p-808';
        const url = `https://api.counterapi.dev/v1/${namespace}/${metrics}/up`;
        fetch(url).catch((error) => {
            console.error('Error sending metrics:', error);
        });
    } catch (error) {
        console.error('Error in sendMetrics function:', error);
    }
};
