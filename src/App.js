import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { ThemeContext } from "./ThemeContext";
import "./app.css";



function App() {
	const [isDark,setDark] = useState(false);
	const toggle=()=>{
		setDark(!isDark);
	}

	return (
		<ThemeContext.Provider value={{isDark,toggle}}>

<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact />} />
			
				<Route path="*" element={<Notfound />} />
				
			
			</Routes>
		</div>
		</ThemeContext.Provider>
	);
}

export default App;
