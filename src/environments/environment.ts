// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	apiUrl: "http://localhost:4200/assets/data/",
	firebase: {
		apiKey: "AIzaSyBbS3pEN2RqR35UtS26lzykMvuWJ2jwUEg",
		authDomain: "tool-builder.firebaseapp.com",
		databaseURL: "https://tool-builder.firebaseio.com",
		projectId: "tool-builder",
		storageBucket: "mosh-599d5.appspot.com",
		messagingSenderId: "1062012551888",
		appId: "1:1062012551888:web:aba769cf1164b5ae"
	}
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
