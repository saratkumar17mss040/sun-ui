import './styles.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
	Home,
	Avatar,
	Badge,
	Button,
	Banners,
	Cards,
	Image,
	Input,
	List,
	Modal,
	Navigation,
	TextUtils,
	Toast,
	PageNotFound,
} from './pages';
import { Navbar, Sidebar } from './components';
import { useState } from 'react';

function App() {
	const [showSideBar, setShowSideBar] = useState(false);
	return (
		<div className="App">
			<Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
			<Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
			<div className={showSideBar ? 'wrapper shade' : 'wrapper'}>
				<Routes>
					<Route path="/" element={<Navigate to="/home" replace />} />
					<Route path="/home" element={<Home />} />
					<Route path="/avatar" element={<Avatar />} />
					<Route path="/badge" element={<Badge />} />
					<Route path="/banners" element={<Banners />} />
					<Route path="/button" element={<Button />} />
					<Route path="/cards" element={<Cards />} />
					<Route path="/image" element={<Image />} />
					<Route path="/input" element={<Input />} />
					<Route path="/list" element={<List />} />
					<Route path="/modal" element={<Modal />} />
					<Route path="/navigation" element={<Navigation />} />
					<Route path="/text-utils" element={<TextUtils />} />
					<Route path="/toast" element={<Toast />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
