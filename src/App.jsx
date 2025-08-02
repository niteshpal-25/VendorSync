import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/common/Home';
import About from './components/common/About';
import Footer from './components/common/Footer';
import Contact from './components/common/Contact';
import FAQ from './components/common/FAQ';
import Documents from './components/common/Documents';
import Process from './components/common/Process';
import Login from '../src/components/features/auth/Login'
import Signup from '../src/components/features/auth/Signup'

function App() {
    return (
        <Router>
            <div>
                {/* Horizontal Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">VendorSync</NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/process">Process</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/documents">Documents</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink className="btn btn-outline-light me-2" to="/Login">Login</NavLink>
                                </li>
                                <li className="nav-item">                                    
                                    <NavLink className="btn btn-primary" to="/Signup">Sign up</NavLink>                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Hero Section and Routes */}
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <section className="hero-section">
                                    <div className="container text-center">
                                        <h1 className="display-4 text-white mb-4">Welcome to VendorSync</h1>
                                        <p className="lead text-white mb-5">Transform your vendor onboarding with our innovative software solutions.</p>
                                        <button className="btn btn-light btn-lg">Get Started</button>
                                    </div>
                                </section>
                                <Home />
                            </>
                        }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/process" element={<Process />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={ <Signup/>}/>
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
