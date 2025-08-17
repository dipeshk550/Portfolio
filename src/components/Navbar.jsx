import { useState, useEffect } from "react";
import "../App.css";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <h1 className="logo">Portfolio</h1>
        <div className="nav-links">
          {["Home", "About", "Education", "Projects", "Experience", "Contact"].map((item) => (
            <button key={item} onClick={() => scrollToSection(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;