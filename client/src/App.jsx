import { Routes, Route } from "react-router-dom";

// Components
import Homepage from "./pages/homepage/homepage.component";
import Rentpage from "./pages/rentpage/rentpage.component";
import Advertising from "./pages/advertising/advertising.component";
import Salepage from "./pages/salepage/salepage.component";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import Auth from "./pages/auth/auth.component";
import DailyRental from "./pages/daily-rental/daily-rental.component";
import ListingDescriptionPage from "./pages/listing-description-page/listing-description-page.component";
import Profilepage from "./pages/profilepage/profilepage.component";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" Component={Homepage} />
      <Route path="/rent" Component={Rentpage} />
      <Route path="/sale" Component={Salepage} />
      <Route path="/dailyRental" Component={DailyRental} />
      <Route path="/description" Component={ListingDescriptionPage} />
      <Route path="/advertise" Component={Advertising} />
      <Route path="/auth" Component={Auth} />
      <Route path="/profile" Component={Profilepage} />
    </Routes>
    <Footer />
  </>
);

export default App;
