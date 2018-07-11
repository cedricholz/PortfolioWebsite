import React from 'react';
import "./experiencestyles.css"

import scoutiblelogo from "../../images/scout.png"
import Fade from 'react-reveal/Fade';

export default class Scoutible extends React.Component {

    render() {
        return (

            <div className="Scoutible">
                <Fade left>
                    <div>
                        <a href={'http://www.scoutible.com/'} target="_blank" rel="noopener noreferrer" className="Link">
                            <img alt="" src={scoutiblelogo} className="ScoutibleLogo"/>
                        </a>
                        <h2 className="BigText">Scoutible</h2>

                        <h1>Summer 2018</h1>
                        <h1>Full Stack Engineer Intern</h1>
                        <h1 className="React Pad">[React.js]</h1>
                        <h1 className="Python Pad">[Python]</h1>
                        <div>
                            <h1 className="Pad" style={{display: 'inline-block'}}>[Node.js]</h1>
                            <h1 className="Pad" style={{display: 'inline-block'}}>[Express.js]</h1>
                            <h1 className="Pad" style={{display: 'inline-block'}}>[HTML/CSS]</h1>
                            <h1 className="Pad" style={{display: 'inline-block'}}>[Google Cloud Platform]</h1>
                        </div>

                        {/*<h1>[React.js] [Node.js] [Express.js] [Python] [HTML/CSS] [Google Cloud Platform]</h1>*/}
                    </div>
                </Fade>

                <Fade up>
                    <div className="TextBlock">

                    </div>
                </Fade>

            </div>
        )
    }
}



