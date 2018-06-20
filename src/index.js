import React from "react";
import App from "./App";
import { render, } from "react-snapshot";

render(<App />, document.getElementById("root"));

//console.log("attempting to remove service workers...");
navigator &&
	navigator.serviceWorker &&
	navigator.serviceWorker.getRegistrations().then(registrations => {
		//console.log("service workers found:", registrations);
		registrations.forEach(reg => {
			reg.unregister();
		});
	});
