import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/Login.css';

const Signup = () => {
    const [role, setRole] = useState('buyer');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Signed up as: ${role}`);
        navigate('/'); // Redirect to login
    };

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="row w-100 shadow-lg rounded overflow-hidden" style={{ maxWidth: '900px' }}>
                {/* Left Image Panel (hidden on small screens) */}
                <div className="col-lg-6 d-none d-lg-block p-0">
                    <div className="image-side h-100 w-100"></div>
                </div>

                {/* Right Form Panel */}
                <div className="col-12 col-md-12 col-lg-6 bg-white p-4 p-sm-5">
                    <h3 className="mb-4 text-center">Sign Up</h3>

                    <form onSubmit={handleSubmit}>
                        {/* Role */}
                        <div className="mb-3">
                            <label htmlFor="role" className="form-label">Register As</label>
                            <select id="role" className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>

                        {/* Full Name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter full name" required />
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                        </div>

                        {/* Username */}
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Choose username" required />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                        </div>

                        {/* Submit */}
                        <div className="d-grid mb-3">
                            <button className="btn btn-primary" type="submit">Create Account</button>
                        </div>

                        <p className="mt-3 text-center">
                            Already a member? <a href="/Login" className="text-primary text-decoration-none">Sign In</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup