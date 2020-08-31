exports.config = {

    runner: 'local',
    
    hostname: 'hub.browserstack.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    
    specs: [
        './test/specs/e2e-login.js'
    ],
    
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 1,
    
    capabilities: [{
        'browserName' : 'iPhone',
        'device' : 'iPhone 11',
        'realMobile' : 'true',
        'os_version' : '13',

        'project': 'WebdriverIO Samples',
        'build': 'Build v2'
    }, {
        'browserName' : 'android',
        'device' : 'Google Pixel 4 XL',
        'realMobile' : 'true',
        'os_version' : '10.0',
        'browserstack.appium_version': '1.16.0',

        'project': 'WebdriverIO Samples',
        'build': 'Build v2'
    }],
    
    logLevel: 'info',

    bail: 0,

    baseUrl: 'http://localhost',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['browserstack'],
    
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    reporters: ['spec']
}
