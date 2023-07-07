import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/index";
import Home from "./pages/home";
import Courses from "./pages/courses";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/Footer/index";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { CourseProvider } from "./context/fetch-context";

function App() {
  return (
    <>
      <CourseProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </CourseProvider>
    </>
  );
}

export default App;
