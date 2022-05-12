module.exports = {
    url:'https://check-barmer.zhp-online.de/x3/de/',
    elements: {
         welcomeMessageSelector: '[class="x3-login-welcome-text-bwrap"]',
         usernameInputSelector: '[name="username"]',
         //usernameBarmer: 'barmer.sb2.223.26',
         passwordInputSelector: '[name="password"]',
         //passwordBarmer: 'barmer.1',
         selectLogin: '#ext-gen90',
         usernameAndVersion: '[class=" x3-viewport-header-loggedin-label"]',
         removeAllFilters: '[class=" x-btn-text btn-application_form_delete"]',
         //searchAgainManuallyMessage: 'Die Suche muss manuell gestartet werden nachdem alle Filter entfernt wurden.',
         visibleOrdersTable: '[class="x-grid3-body"]',
         refreshOrdersButton: '[class=" x-btn-text x-tbar-loading"]',
         visibleOrdersTableFirstRow: '[class="x-grid3-row-table"]',
         creationDateSelector: '[class="x-grid3-hd x-grid3-cell x-grid3-td-creationdate sort-asc"]',
        infoMessageWindowRefresh: '[class="x-window-header-text"]'
    },
    commands: [{
         maxWindow: function() {
            return this
                .maximizeWindow();   
        },

        checkWelcomeMessage: function () {
            return this
            .waitForElementVisible('@welcomeMessageSelector')
            .assert.containsText('@welcomeMessageSelector', "Willkommen bei ZHP-Online!")
        },
        loginCheck: function() {
            return this
            .waitForElementVisible('@usernameInputSelector')
            .setValue('@usernameInputSelector', 'barmer.sb2.223.26')
            .saveScreenshot('tests_output/Screenshots/myFirstTest/username.png')
            .setValue('@passwordInputSelector', 'barmer.1')
            .saveScreenshot('tests_output/Screenshots/myFirstTest/password.png')
            .click('@selectLogin')
            .waitForElementVisible('@usernameAndVersion')
            .saveScreenshot('tests_output/Screenshots/myFirstTest/homepage.png')
        },
        removeFilters: function () {
            return this
            .waitForElementVisible('@visibleOrdersTable')
            .waitForElementVisible('@removeAllFilters')
            .click('@removeAllFilters')
            .waitForElementVisible('@visibleOrdersTable')
            .assert.containsText('@visibleOrdersTable', 'Die Suche muss manuell gestartet werden nachdem alle Filter entfernt wurden.')
            .saveScreenshot('tests_output/Screenshots/myFirstTest/allefilterentfernen.png')
        },
        showOrders: function () {
            return this
            .waitForElementVisible('@refreshOrdersButton')
            .click('@refreshOrdersButton')
            .waitForElementVisible('@visibleOrdersTableFirstRow')
            .saveScreenshot('tests_output/Screenshots/myFirstTest/allevorgange.png')
        },
        filterOrdersCreationDate: function () {
            return this
            .click('@creationDateSelector')
            .waitForElementVisible('@infoMessageWindowRefresh')
            .saveScreenshot('tests_output/Screenshots/myFirstTest/allevorgangeinfofentser.png')    
        }
    }]
};