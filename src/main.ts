import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { enableProdMode } from '@angular/core';

import { environment } from '../src/app/environment/environment';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

if (environment.production) {
  enableProdMode();
}

const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
