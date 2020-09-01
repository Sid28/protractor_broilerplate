var jar = require('selenium-server-standalone-jar');

exports.config = {
  chromeDriver: './chromedriver',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumServerJar: jar.path,
  // directConnet:true,
  specs: ['spec.js'],
  capabilities : {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    'chromeOptions': {
        'args': ['start-minimized', 'window-size=1920,1080','--headless']
    }
}
};