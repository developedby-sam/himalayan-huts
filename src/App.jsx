import { Routes, Route } from "react-router-dom";

// Components
import Homepage from "./pages/homepage/homepage.component";
import Rentpage from "./pages/rentpage/rentpage.component";
import Salepage from "./pages/salepage/salepage.component";
import Navbar from "./components/navbar/navbar.component";

const App = () => (
	<>
		<Navbar />
		<Routes>
			<Route path='/' Component={Homepage} />
			<Route path='/rent' Component={Rentpage} />
			<Route path='/sale' Component={Salepage} />
		</Routes>
	</>
);

export default App;
