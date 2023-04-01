import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Repos from "../pages/Repos";
import Contacts from "../pages/Contacts";
import Resume from '../pages/Resume';

function Header() {
    return (
        <div>Jacob Nollen's Profile
            <Router>
                
            <Link to='/'>About</Link>
            <Link to='/repos'>Portfolio</Link>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/resume'>Resume</Link>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/repos' element={<Repos />}/>
                    <Route path='/contacts' element={<Contacts />}/>
                    <Route path='/resume' element={<Resume />}/>
                </Routes>
            </Router>
        </div>
    );
};

export default Header;