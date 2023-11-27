// e2e/src/app.po.ts
import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateToHome() {
    return browser.get('https://ninerbank.netlify.app/homepage');
  }

  async navigateToLogin() {
    return browser.get('https://ninerbank.netlify.app/login');
  }

  async navigateToRegistration() {
    return browser.get('https://ninerbank.netlify.app/registration');
  }

}
