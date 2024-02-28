import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstraped = () => bootstrapApplication(AppComponent, config);

export default bootstraped;

// This is test is not working test test test
// Test test
// Test change boostrape to bootstraped