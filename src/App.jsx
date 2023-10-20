import { Routes, Route } from "react-router-dom";

// Components
import Homepage from "./pages/homepage/homepage.component";
import Rentpage from "./pages/rentpage/rentpage.component";
import Advertising from "./pages/advertising/advertising.component";
import Salepage from "./pages/salepage/salepage.component";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

const App = () => (
	<>
		<Navbar />
		<Routes>
			<Route path='/' Component={Homepage} />
			<Route path='/rent' Component={Rentpage} />
			<Route path='/sale' Component={Salepage} />
			<Route path='/advertise' Component={Advertising} />
		</Routes>
		<Footer />
	</>
);

export default App;
