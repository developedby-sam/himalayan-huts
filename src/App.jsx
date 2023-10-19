import { Routes, Route } from "react-router-dom";

// Components
import Homepage from "./pages/homepage/homepage.component";
import Navbar from "./components/navbar/navbar.component";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" Component={Homepage} />
    </Routes>
  </>
);

export default App;
