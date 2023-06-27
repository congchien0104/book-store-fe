import { NgxLoggerLevel } from 'ngx-logger';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  logLevel: NgxLoggerLevel.TRACE,
  serverLogLevel: NgxLoggerLevel.OFF,
  firebase: {
    apiKey: "AIzaSyCRLoPVSZEQy4UiBs0QUN5MLD6WyqQuRdw",
    authDomain: "book-store-16450.firebaseapp.com",
    projectId: "book-store-16450",
    storageBucket: "book-store-16450.appspot.com",
    messagingSenderId: "586860347579",
    appId: "1:586860347579:web:e867f6ca563cc28ed6299e",
    measurementId: "G-J42V75QKSK"
  }
};
