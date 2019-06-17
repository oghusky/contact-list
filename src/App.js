import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Contact name="Phil" email="phil@email.com" number="555-555-5555" />
		</div>
	);
}

export default App;
