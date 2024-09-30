import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';

const Signin = () => {
    const [email, setEmail] = useState('');  // For email input
    const [password, setPassword] = useState('');  // For password input
    const [error, setError] = useState('');  // For error messages

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/landing');
            } else {
                console.log("Not authenticated");
            }
        });
        return () => unsubscribe();  // Cleanup subscription on unmount
    }, [navigate]);  // Include navigate in dependency array to avoid stale closures

    const signupfunc = (e) => {
        e.preventDefault(); // Prevent default form submission
        setError(''); // Clear previous error messages

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("Registered successfully");
                navigate('/landing');
            })
            .catch((error) => {
                setError(error.message); // Set error message if signup fails
                console.error("Signup failed:", error.message);
            });
    };

    return (
        <div className='p-5'>
            <h1 className='text-center'>Welcome to my Website <span className="badge text-bg-secondary">Blog</span></h1>
            <h3 className='mb-5'>Signup:</h3>
            <form onSubmit={signupfunc}>
                <div>
                    <label htmlFor="inputemail" className='form-label'>Email id:</label>
                    <input 
                        type="email" 
                        id="inputemail" 
                        className="form-control" 
                        aria-describedby="emailHelpBlock" 
                        onChange={(e) => setEmail(e.target.value)}  
                    />
                </div>
                <div>
                    <label htmlFor="inputpasswords" className='form-label'>Password:</label>
                    <input 
                        type="password" 
                        id="inputpasswords" 
                        className="form-control" 
                        aria-describedby="passwordHelpBlock" 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be more than 6 characters long.
                    </div>
                </div>
                {error && <div className="text-danger mt-2">{error}</div>} {/* Display error message */}
                <p className="mt-5">
                    Already have an account? Please login here <Link to={'/login'}>Login</Link>
                </p>
                <button type="submit" className="btn btn-success">
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signin; // Exporting the Signin component
