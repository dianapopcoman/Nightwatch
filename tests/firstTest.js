module.exports = {
'First Test Case Page Objects': function (browser) {

    const page = browser.page.firstTestPageObject();

    page
        .navigate()
        .maxWindow()
        .checkWelcomeMessage()
        .loginCheck()
        .removeFilters()
        .showOrders()
        .filterOrdersCreationDate()
}
};