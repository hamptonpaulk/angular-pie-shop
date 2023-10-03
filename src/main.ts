import 'zone.js/dist/zone'; // this is used to deal with stackblitz issues
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, appConfig)
.catch(err => console.error(err));
  