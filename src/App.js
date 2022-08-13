import './App.css';
import {
  Link,
  NavLink,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Expenses from "./Expenses"
import Vorso from "./Vorso"

function DropDownItem(props) {
  return <li><a className="dropdown-item" href={ props.href }>
    { props.children }
    </a></li>
}
function DropDownDivider() {
  return <li><hr className="dropdown-divider" /></li>
}

function NavItem({href, children}) {  
  return <li><NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link") } to={ href }>{ children }</NavLink></li>
}

function NavBar() {
  return <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Kame</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavItem href="/expenses"> expenses </NavItem>
        <li className="nav-item dropdown">
          <a className={ "nav-link dropdown-toggle" + (window.location.pathname.startsWith("/Isole/") ? " active" : "")} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Isole
          </a>
          <ul className="dropdown-menu">
            <DropDownItem href="/Isole/Vorso">Vorso</DropDownItem>
            <DropDownItem href="/Isole/Torno">Torno</DropDownItem>
            <DropDownItem href="/Isole/Sloto">Sloto</DropDownItem>
            <DropDownDivider />
            <DropDownItem href="/Isole/Corresant">Corresant</DropDownItem>
            <DropDownItem href="/Isole/Nord">Nord</DropDownItem>
            <DropDownItem href="/Isole/Bocca di Erebus">Bocca di Erebus</DropDownItem>
            <DropDownItem href="/Isole/Lipari">Lipari</DropDownItem>
            <DropDownItem href="/Isole/Zagros">Zagros</DropDownItem>
            <DropDownDivider />
            <DropDownItem href="/Isole/Chibetto">Chibetto</DropDownItem>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
}

function Home() {
  return <p>Home!</p>
}

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="Isole/Vorso" element={<Vorso />} />
        </Routes>
    </div>
  );
}

export default App;
