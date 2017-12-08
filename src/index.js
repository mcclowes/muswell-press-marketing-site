import React from "react";
//import ReactDOM from "react-dom";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import { render, } from "react-snapshot";

render(<App />, document.getElementById("root"));
// registerServiceWorker();

//console.log("attempting to remove service workers...");
navigator && navigator.serviceWorker && navigator.serviceWorker.getRegistrations().then(registrations => {
	//console.log("service workers found:", registrations);
	registrations.forEach(reg => {
		reg.unregister();
	});
});
