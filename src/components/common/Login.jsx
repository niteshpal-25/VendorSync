import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/Login.css';

function Login() {
    const [role, setRole] = useState('buyer');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (role === 'buyer') {
            navigate('/buyer');
        } else {
            navigate('/seller');
        }
    };
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
            <div className="row shadow-lg rounded-4 overflow-hidden w-100" style={{ maxWidth: '900px' }}>

                <div className="col-lg-6 d-none d-lg-block p-0">
                    <div className="image-side h-100 w-100"></div>
                </div>

                <div className="col-12 col-lg-6 bg-white p-4 p-sm-5">
                    <h3 className="mb-4 text-center">Sign In</h3>

                    <form onSubmit={handleSubmit}>
                        {/* Role Selection */}
                        <div className="mb-3">
                            <label htmlFor="role" className="form-label">Login As</label>
                            <select id="role" className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>

                        {/* Username */}
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter username" required />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="remember" />
                                <label className="form-check-label" htmlFor="remember">Remember Me</label>
                            </div>
                            <a href="#" className="text-decoration-none">Forgot Password?</a>
                        </div>

                        {/* Submit */}
                        <div className="d-grid mb-3">
                            <button className="btn btn-warning text-white" type="submit">Sign In</button>
                        </div>

                        {/* Sign Up Link */}
                        <p className="text-center mt-3">
                            Not a member? <a href="/signup" className="text-primary text-decoration-none">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;