import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR,
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
