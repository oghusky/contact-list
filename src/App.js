import React from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Contacts />
		</div>
	);
}

export default App;
