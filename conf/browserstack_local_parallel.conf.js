var browserstack = require('browserstack-local');

exports.config = {

    runner: 'local',
    
    hostname: 'hub.browserstack.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    
    specs: [
        './test/specs/local_env_check.js'
    ],
    
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
        'os': 'Windows',
        'os_version': '10',
        'browser': 'Chrome',
        'browser_version': 'latest',
        'resolution': '1280x800',
        'browserstack.local': true,

        'project': 'WebdriverIO Samples',
        'build': 'Sample Build'
    }, {
        'os': 'Windows',
        'os_version': '10',
        'browser': 'IE',
        'browser_version': '11.0',
        'resolution': '1280x800',
        'browserstack.local': true,

        'project': 'WebdriverIO Samples',
        'build': 'Sample Build'
    }, {
        'os': 'Windows',
        'os_version': '10',
        'browser': 'Firefox',
        'browser_version': 'latest',
        'resolution': '1280x800',
        'browserstack.local': true,

        'project': 'WebdriverIO Samples',
        'build': 'Sample Build'
    }, {
        'os': 'Windows',
        'os_version': '10',
        'browser': 'Edge',
        'browser_version': 'latest',
        'resolution': '1280x800',
        'browserstack.local': true,
        'browserstack.use_w3c': true,

        'project': 'WebdriverIO Samples',
        'build': 'Sample Build'
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
    
    reporters: ['spec'],

    // Code to start browserstack local before start of test
    onPrepare: function (config, capabilities) {
        console.log("Connecting local");
        return new Promise(function (resolve, reject) {
            exports.bs_local = new browserstack.Local();
            exports.bs_local.start({ 'key': exports.config.key }, function (error) {
                if (error) return reject(error);
                console.log('Connected. Now testing...');
                resolve();
            });
        });
    },

    // Code to stop browserstack local after end of test
    onComplete: function (exitCode, config, capabilities, results) {
        console.log('Stopping local');
        return new Promise(function(resolve, reject){
            exports.bs_local.stop(function() {
                console.log("Local Testing disconnected");
            });
        });
    },
}
