import React from 'react';
import "./experiencestyles.css"

import scoutiblelogo from "../../images/scoutiblelogo.jpg"

export default class Scoutible extends React.Component {

    render() {
        return (

            <div className="Scoutible">
                <a href={'http://www.scoutible.com/'} target="_blank" className="Link">
                    <img src={scoutiblelogo} className="ScoutibleLogo"/>
                    <h1>Scoutible</h1>
                </a>


                <h1>Full Stack Engineer Intern - Summer 2018</h1>
                <h1>[React.js] [Node.js] [Express.js] [Python] [HTML/CSS] [Google Cloud Platform]</h1>

                <div className="TextBlock">
                    <p></p>
                </div>

            </div>
        )
    }
}



