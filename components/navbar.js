import ToggleButton from "./togglebutton";

export default function Navbar() {
    
    return (
        <div id="header">
            <div className="container">
                <nav>
                    <p><a href="#">Tu Tran</a></p>
                    <ul>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#about" >About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><ToggleButton /></li>
                    </ul>

                </nav>
            </div>
        </div>
    );
}
