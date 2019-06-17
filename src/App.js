import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Contact name="Phil" email="phil@email.com" number="555-555-5555" />
			</div>
		</div>
	);
}

export default App;
