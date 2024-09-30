import React from 'react';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';

const Landing = () => {
    const navigate = useNavigate();

    const logoutfunc = () => {
        signOut(auth)
            .then(() => {
                // Optional: You can add any additional logic after logout here
                navigate('/');
            })
            .catch((error) => {
                // Handle any errors here
                console.error("Logout error:", error);
            });
    };

    return (
        <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center position-relative">
            <button className="btn btn-danger position-absolute top-0 end-0 m-3" onClick={logoutfunc}>
                Logout
            </button>

            <div className="w-100 text-center">
                <h1 className="mb-4 w-100">
                    <Link to={'/todo'} className="btn btn-success w-50 p-3 text-white">
                        Todo List Website
                    </Link>
                </h1>
                <h1 className="mb-4 w-100">
                    <Link to={'/weather'} className="btn btn-info w-50 p-3 text-white">
                        Weather Website
                    </Link>
                </h1>
                <h1 className="mb-4 w-100">
                    <Link to={'/news'} className="btn btn-success w-50 p-3 text-white">
                        News Website
                    </Link>
                </h1>
            </div>
        </div>
    );
}

export default Landing;
