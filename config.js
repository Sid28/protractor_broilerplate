exports.config = {
  chromeDriver: './chromedriver',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumServerJar: 'selenium-server-3.141.59.jar',
  directConnet:true,
  specs: ['spec.js'],
  capabilities = {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    'chromeOptions': {
        'args': ['start-minimized', 'window-size=1920,1080']
    }
}
};