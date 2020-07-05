// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:5000/games-graphic/us-central1',
  firebase: {
    apiKey: 'AIzaSyDmRlfgiPpd3UUV7naTAnSeAFUOizoAmXQ',
    authDomain: 'games-graphic.firebaseapp.com',
    databaseURL: 'https://games-graphic.firebaseio.com',
    projectId: 'games-graphic',
    storageBucket: 'games-graphic.appspot.com',
    messagingSenderId: '791316691205',
    appId: '1:791316691205:web:260d3e8af135810f705f6c'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
