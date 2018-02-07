import React from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

export const Home = (props) => {

    console.log("Entering Home - props: ", props); //debug

    return (
            <div className="columns small-12 padding-vert-medium">                
                <h1>Home</h1>
                <h3>Final Users Todo Assignment</h3>
                <p>Click the Users and Todos options at the top to be able to add and view users and todos.</p>
            </div>
    );
}