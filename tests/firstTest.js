module.exports = {
    '@tags':['barmer'],
    'My first test case' (browser){
        const welcomeMessageSelector='[class="x3-login-welcome-text-bwrap"]'
        const usernameInputSelector='[name="username"]';
        const usernameBarmer='barmer.sb2.223.26';
        const passwordInputSelector='[name="password"]';
        const passwordBarmer='barmer.1';
        const selectLogin='#ext-gen90';
        const usernameAndVersion='[class=" x3-viewport-header-loggedin-label"]';
        const removeAllFilters='[class=" x-btn-text btn-application_form_delete"]';
        const searchAgainManuallyMessage='Die Suche muss manuell gestartet werden nachdem alle Filter entfernt wurden.';
        const visibleOrdersTable='[class="x-grid3-body"]';
        const refreshOrdersButton='[class=" x-btn-text x-tbar-loading"]';
        const visibleOrdersTableFirstRow='[class="x-grid3-row-table"]';
        const creationDateSelector='[class="x-grid3-hd x-grid3-cell x-grid3-td-creationdate sort-asc"]';
        const infoMessageWindowRefresh='[class="x-window-header-text"]'
 

        browser
        .maximizeWindow()
        .url('https://check-barmer.zhp-online.de/x3/de/')
        .waitForElementVisible(welcomeMessageSelector)
        .assert.containsText(welcomeMessageSelector, "Willkommen bei ZHP-Online!")
        .waitForElementVisible(usernameInputSelector)
        .setValue(usernameInputSelector, usernameBarmer)
        .saveScreenshot('username.png')
        .setValue(passwordInputSelector, passwordBarmer)
        .saveScreenshot('password.png')
        .click(selectLogin)
        .waitForElementVisible(usernameAndVersion)
        .saveScreenshot('homepage.png')
        .waitForElementVisible(visibleOrdersTable)
        .waitForElementVisible(removeAllFilters)
        .click(removeAllFilters)
        .waitForElementVisible(visibleOrdersTable)
        .assert.containsText(visibleOrdersTable, searchAgainManuallyMessage)
        .saveScreenshot('tests_output/Screenshots/myFirstTest/allefilterentfernen.png')
        .waitForElementVisible(refreshOrdersButton)
        .click(refreshOrdersButton)
        .waitForElementVisible(visibleOrdersTableFirstRow)
        .saveScreenshot('tests_output/Screenshots/myFirstTest/allevorgange.png')
        .click(creationDateSelector)
        .waitForElementVisible(infoMessageWindowRefresh)
        .saveScreenshot('tests_output/Screenshots/myFirstTest/allevorgangeinfofentser.png')

    }
}