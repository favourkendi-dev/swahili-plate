import logo from '../assets/logo.svg';

export default function Navbar() {
  return <header className="navbar"><a href="#home"><img src={logo} alt="Swahili Plate" /></a><nav><a href="#home">Home</a><a href="#menu">Menu</a><a href="#about">Our story</a><a href="#branches">Branches</a><a href="#contact">Contact</a><a className="reserve-link" href="#reservation">Reserve a table</a></nav></header>;
}
