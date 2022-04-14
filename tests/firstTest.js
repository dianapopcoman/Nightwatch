module.exports = {
    'My first test case' (browser){
        browser
        .url('http://barmer.dev03.zhp/x3/de/')
        .waitForElementVisible('.x3-login-welcome-text-bwrap')
        .assert.containsText(".x3-login-welcome-text-bwrap", "Willkommen bei ZHP-Online!");

    }
}