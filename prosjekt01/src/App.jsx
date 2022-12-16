import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faMagic } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import wifiLogo from "./assets/wifiLogo.png";

import iconDocu from "./assets/icons/document.svg";
import iconDonate from "./assets/icons/donate.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <h1>Velkommen</h1>
        <p>Hei</p>
        <p>Hei igjen!</p>
        <p>Det var alt</p>
      </Main>
      <div className="footerClass">
        <Footer alt="Go back" link="#" text="LINK" icon={faGift} />
        <Footer alt="Go back" link="#" text="LINK" icon={faMagic} />
        <Footer alt="Go back" link="#" text="LINK" icon={faTable} />
      </div>
      <UnderFooter text="A" icon={wifiLogo}>
        Bonus Footer
      </UnderFooter>
    </div>
  );
}

const UnderFooter = (props) => {
  const { icon, text, thing } = props;
  return (
    <div className="underFooter">
      <p>{text}</p> <h3>{props.children}</h3> {thing}{" "}
      <img src={icon} className="underFootIcon" alt="" />
    </div>
  );
};

function Header() {
  return (
    <div className="header">
      <div className="titleBar">
        <input type="text" className="inputSearch" />
        <h2>Logo</h2>
        <ul className="titleMenu">
          <HeaderItem text="les" icon={iconDocu} link="#" />
          <HeaderItem text="betal" icon={iconDonate} link="#" />
        </ul>
      </div>
      <nav>
        <ul className="mainMenu">
          <a href="">
            <li>
              <FontAwesomeIcon className="menuItem" icon={faGoogle} />
              <p>LINK</p>
            </li>
          </a>
          <a href="">
            <li>
              <FontAwesomeIcon className="menuItem" icon={faReact} />
              <p>LINK</p>
            </li>
          </a>
          <a href="">
            <li>
              <FontAwesomeIcon className="menuItem" icon={faGithub} />
              <p>LINK</p>
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

function Main(props) {
  return <div className="Main">{props.children}</div>;
}

export default App;

function Footer(props) {
  const { alt, text, link, icon } = props;
  return (
    <li>
      <a className="footerItem" href={link} alt={alt}>
        <p className="footerTxtItem">{text}</p>
        <FontAwesomeIcon className="footerIcons" icon={icon} />
      </a>{" "}
    </li>
  );
}

function HeaderItem(props) {
  const { link, text, icon } = props;
  return (
    <a href={link}>
      <li className="titleMenuItem">
        <img className="titleMenuItemImg" src={icon} alt="" />
        <p>{text}</p>
      </li>
    </a>
  );
}
