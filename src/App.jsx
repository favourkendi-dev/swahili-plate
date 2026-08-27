import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Branches from './pages/Branches.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Reviews from './components/Reviews.jsx';
import Gallery from './components/Gallery.jsx';

export default function App() {
  return <><Navbar /><main><Home /><About /><Menu /><Branches /><Reviews /><Gallery /><Contact /></main><Footer /></>;
}
