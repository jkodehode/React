import reactLogo from "./assets/react.svg";
import iconDoNot01 from "./assets/icons/do_not_inhale.svg";
import iconDoNot02 from "./assets/icons/do_not_insert.svg";
import iconDoNot03 from "./assets/icons/do_not_mix.svg";
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
        <p>Hei igjen</p>
        <p>Enda hei</p>
      </Main>
      <div className="footerClass">
        <Footer alt="Go back" link="#" text="Return" />
        <Footer alt="Go back" link="#" text="Return" />
        <Footer alt="Go back" link="#" text="Return" />
      </div>
    </div>
  );
}

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
              <img className="menuItem" src={iconDoNot01} alt="" />
              <p>IKKE</p>
            </li>
          </a>
          <a href="">
            <li>
              <img className="menuItem" src={iconDoNot02} alt="" />
              <p>IKKE</p>
            </li>
          </a>
          <a href="">
            <li>
              <img className="menuItem" src={iconDoNot03} alt="" />
              <p>IKKE</p>
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
  const { alt, text, link } = props;
  return (
    <li>
      <a href={link} alt={alt}>
        {text}
      </a>
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
