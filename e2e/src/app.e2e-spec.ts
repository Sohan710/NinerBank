import { browser, by, element, ExpectedConditions as EC } from 'protractor';
import { Eyes, ClassicRunner, Target, RectangleSize, Configuration, BatchInfo } from '@applitools/eyes-protractor';

describe('Niners Bank App', () => {
  let runner: ClassicRunner;
  let eyes: Eyes;

  beforeAll(() => {
    browser.waitForAngularEnabled(false);
  });

  beforeEach(async () => {
    runner = new ClassicRunner();
    eyes = new Eyes(runner);

    const conf = new Configuration();
    conf.setApiKey('sUPVUcdksKoJIMhtuKwarj9gbyOnWERzkUc9HvGjzMk110');
    conf.setBatch(new BatchInfo("Niners Bank Test"));
    eyes.setConfiguration(conf);
  });

  it('should display the homepage correctly', async () => {
    await eyes.open(browser, 'Niners Bank', 'Homepage Test', new RectangleSize(1024, 768));
    await browser.get('https://ninerbank.netlify.app/homepage');
    await eyes.check("Homepage View", Target.window().fully());
    await eyes.close();
  });

  it('should navigate to login page and display correctly', async () => {
    await eyes.open(browser, 'Niners Bank', 'Login Page Test', new RectangleSize(1024, 768));
    await browser.get('https://ninerbank.netlify.app/login');
    await eyes.check("Login Page View", Target.window().fully());
    await eyes.close();
  });

  it('should navigate to registration page and display correctly', async () => {
    await eyes.open(browser, 'Niners Bank', 'Registration Page Test', new RectangleSize(1024, 768));
    await browser.get('https://ninerbank.netlify.app/registration');
    await eyes.check("Registration Page View", Target.window().fully());
    await eyes.close();
  });

  afterEach(async () => {
    try {
      await eyes.abort();
    } catch (e) {
      console.error('Error aborting Eyes:', e);
    }
  });

  afterAll(async () => {
    try {
      const allTestResults = await runner.getAllTestResults(false);
      console.log(allTestResults);
    } catch (e) {
      console.error('Error getting test results:', e);
    }
  });
});
