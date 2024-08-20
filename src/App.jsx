
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader.jsx";
import Category from "./pages/Category.jsx";
import Homepage from "./pages/Homepage.jsx";
import ReviewDetails from "./pages/ReviewDetails.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Homepage />} />

          <Route path="/reviews/:id" element={<ReviewDetails />} />

          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
