const { SpecReporter } = require('jasmine-spec-reporter');
const { Eyes, Target, ClassicRunner, Configuration, BatchInfo } = require('@applitools/eyes-protractor');

exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./src/**/*.e2e-spec.ts'],
  capabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--headless', '--disable-gpu', '--window-size=1024x768'] // Updated to use 'goog:chromeOptions'
    },
    // Specify the path to your chromedriver executable
    chromeDriver: '../chrome-win64/chrome-win64/chrome.exe', // Replace with the actual path
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare: async function() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    // Initialize Applitools Eyes
    global.eyes = new Eyes(new ClassicRunner());
    const conf = new Configuration();
    conf.setApiKey(process.env.APPLITOOLS_API_KEY || 'sUPVUcdksKoJIMhtuKwarj9gbyOnWERzkUc9HvGjzMk110'); // Replace 'your_api_key' with your actual Applitools API key
    conf.setBatch(new BatchInfo('Niner_Test')); // Replace 'Your Batch Name' with your desired batch name
    global.eyes.setConfiguration(conf);

    // Full page screenshot with Applitools
    Eyes.setForceFullPageScreenshot(true);
  },
  afterLaunch: async function() {
    // Ensure that the Eyes instance is closed properly
    const results = await global.eyes.getRunner().getAllTestResults(false);
    console.log(results);
  }
};
