import React from 'react';
import github from '../../images/github.png';
import linkedIn from '../../images/linked.png';
import "./navigationstyles.css"
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default class Navigation extends React.Component {

    render() {
        return (
            <div className="NavigationBar">

                <Fade left>
                    <Link to={"/"} className="Link">
                        <div className="Name">Cedric Holz</div>
                    </Link>

                    <a href={"https://github.com/cedricholz"} target="_blank" rel="noopener noreferrer">
                        <img alt="" src={github} className="NavigationButtons"/>
                    </a>
                    <a href={"https://www.linkedin.com/in/cedricholz/"} target="_blank" rel="noopener noreferrer">

                        <img alt="" src={linkedIn} className="NavigationButtons"/>
                    </a>
                </Fade>
            </div>
        )
    }
}