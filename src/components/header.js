import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Repos from "../pages/Repos";
import Contacts from "../pages/Contacts";
import Resume from '../pages/Resume';

function Header() {
    return (
        <div>
            <span className='brand'>Jacob Nollen's Profile</span>
            <Router>
                <Link to='/' className="navlink">About</Link>
                <Link to='/repos' className="navlink">Portfolio</Link>
                <Link to='/contacts' className="navlink">Contact</Link>
                <Link to='/resume' className="navlink">Resume</Link>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/repos' element={<Repos />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/resume' element={<Resume />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Header;