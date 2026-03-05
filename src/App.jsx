import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import TopBar from "./components/TopBar"
import About from "./pages/About"
import TestimonialPage from "./pages/TestimonialPage"
import Contact from "./pages/Contact"
import SpillKits from "./components/SpillKits"
import Oil from "./pages/spillkits/Oil"
import Chemical from "./pages/spillkits/Chemical"
import Universal from "./pages/spillkits/Universal"

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="about" element={<About />} />
        <Route path="spillkits" element={<SpillKits />} />
        <Route path="spillkits/oil" element={<Oil />} />
        <Route path="spillkits/chemical" element={<Chemical />} />
        <Route path="spillkits/universal" element={<Universal />} />
        <Route index path="testimonial" element={<TestimonialPage />} />
        <Route index path="contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
