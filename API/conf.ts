import { Config } from 'protractor';

export let config: Config = {
    directConnect: true,
    framework: 'jasmine2',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--test-type', '--window-size=800,600', '--disable-extensions']
        }
    },
    specs: ['./specs/API-Test.js'],

    // suites: {
    //     all: ['./specs/API-Test.js'],
    // },
    beforeLaunch: () => {
        var rmdir = require("rimraf");
        rmdir('.reports/', function (err) { })
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 3000000
    },
    noGlobals: false
}