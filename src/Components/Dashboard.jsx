import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard=()=>{
    return(
        <div>
            <h1>Dashboard</h1>
            <ul>
                <Link to="newblog"><li>Add new Blog</li></Link>
                <Link to="Show"><li>Show blog</li></Link>
            </ul>
        </div>
    );
};

export default Dashboard;