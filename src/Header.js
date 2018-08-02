import React, { PureComponent } from "react";
import "./Header.css";

class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        Search for a cat breed
        <img
          src="https://png.icons8.com/metro/1600/black-cat.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
export default Header;
