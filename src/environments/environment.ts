// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	apiUrl: "http://localhost:4200/assets/data/",
	firebase: {
		apiKey: "AIzaSyCGGglBuxoBKJCfy5CXV8Tmy3R6k_SzU0g",
		authDomain: "mosh-599d5.firebaseapp.com",
		databaseURL: "https://mosh-599d5.firebaseio.com",
		projectId: "mosh-599d5",
		storageBucket: "mosh-599d5.appspot.com",
		messagingSenderId: "907191462853",
		appId: "1:907191462853:web:946c218799ad4f59"
	}
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
