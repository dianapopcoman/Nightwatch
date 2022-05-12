//
// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//
//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/
//

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["tests"],

  // See https://nightwatchjs.org/guide/working-with-page-objects/using-page-objects.html
  page_objects_path: ["page-objects"],

  // See https://nightwatchjs.org/guide/extending-nightwatch/custom-commands.html
  custom_commands_path: ['node_modules/nightwatch/examples/custom-commands/'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/custom-assertions.html
  custom_assertions_path: '',

  // See https://nightwatchjs.org/guide/extending-nightwatch/plugin-api.html
  plugins: [],
  
  // See https://nightwatchjs.org/guide/#external-globals
  globals_path : '',

  webdriver: {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://nightwatchjs.org',

      screenshots: {
        enabled: true,
        path: "./Screenshots/myFirstTest/",
        on_failure: true
      },

      desiredCapabilities: {
        browserName : 'chrome'
      },

      webdriver: {
        start_process: true,
        server_path: ''
      }
    },

    

    chrome: {
      desiredCapabilities : {
        browserName : 'chrome',
        'goog:chromeOptions' : {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },

    edge: {
      desiredCapabilities : {
        browserName : 'MicrosoftEdge',
        'ms:edgeOptions' : {
          w3c: true,
          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
          args: [
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        // Download msedgedriver from https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/
        //  and set the location below:
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the Selenium service, either locally or remote,  |
    //  like Selenium Grid                                                           |
    //////////////////////////////////////////////////////////////////////////////////
    selenium_server: {
      // Selenium Server is running locally and is managed by Nightwatch
      // Install the NPM package @nightwatch/selenium-server or download the selenium server jar file from https://github.com/SeleniumHQ/selenium/releases/, e.g.: selenium-server-4.1.1.jar
      selenium: {
        start_process: true,
        port: 4444,
        server_path: '', // Leave empty if @nightwatch/selenium-server is installed
        command: 'standalone', // Selenium 4 only
        cli_args: {
          //'webdriver.gecko.driver': '',
          //'webdriver.chrome.driver': ''
        }
      },
      webdriver: {
        start_process: false,
        default_path_prefix: '/wd/hub'
      }
    },

    'selenium.chrome': {
      extends: 'selenium_server',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: true
        }
      }
    },

    'selenium.firefox': {
      extends: 'selenium_server',
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ]
        }
      }
    }
  }
};
