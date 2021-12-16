import './styles.css';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Landing as LandingPage } from './pages';
import { Navbar, Sidebar } from './components';
import { useState } from 'react';

function App() {
	const [showSideBar, setShowSideBar] = useState(false);
	return (
		<div className="App">
			<Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
			<Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
		</div>
	);
}

export default App;
