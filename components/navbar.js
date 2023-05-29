import ToggleButton from "./togglebutton";

export default function Navbar() {

  return (
    <div id="navbar">
      <div className="container">
        <nav>
          <p>
            <a href="#">Tu Tran</a>
          </p>
          <div>
            <ul>
              <li>
                <a href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about">
                  About
                </a>
              </li>
              <li>
                <a href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <ToggleButton />  
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
