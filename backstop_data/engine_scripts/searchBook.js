// Examples: https://github.com/garris/BackstopJS/tree/master/test/configs/backstop_data

// onBefore example (puppeteer engine)
module.exports = async (page, scenario, vp) => {
    //await require('./loadCookies')(page, scenario);

    // Example: set user agent
    // await page.setUserAgent('some user agent string here');

};

// onReady example (puppeteer engine)
module.exports = async (page, scenario, vp) => {
    console.log('SCENARIO SEARCH BOOK > ' + scenario.label);
    //await require('./clickAndHoverHelper')(page, scenario);

    // Example: changing behavior based on config values
    if (vp.label === 'phone') {
        console.log( 'doing stuff for just phone viewport here' );
    }

    page.wait("#searchBar.ui-focus").type("#searchBar.ui-focus", "java").wait("#productList .ui-li-has-thumb:not(.ui-screen-hidden)");
};
