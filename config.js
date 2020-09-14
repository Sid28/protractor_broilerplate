exports.config = {
  chromeDriver: 'chromedriver',
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   seleniumServerJar: './selenium-server-3.141.59.jar',
  directConnect: true,
  specs: ['spec.js'],
  capabilities : {
    browserName: 'chrome',
    'chromeOptions': {
        'args': ['window-size=1920,1080','--headless','--disble-gpu']
    }
}
};
