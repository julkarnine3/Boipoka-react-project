import React from 'react';
import { Link } from 'react-router';

const About = () => {
    return (
        <div>
            <div className="card card-border bg-base-100 w-11/12 mx-auto m-4">
                <div className="card-body">
                    <h2 className="card-title">Boipoka</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <Link to='/'>                        
                        <button className="btn btn-primary">Back Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;