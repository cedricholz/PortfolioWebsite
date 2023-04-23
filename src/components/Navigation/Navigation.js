import React from "react"
import "./navigationstyles.css"
import {Link} from "react-router-dom"
import Fade from "react-reveal/Fade"
import {ASSETS_BASE_URL} from "../../constants"

export default class Navigation extends React.Component {

    render() {
        return (
            <div className="NavigationBar">

                <Fade left>
                    <Link to={"/"} className="Link">
                        <div className="Name Pad">Cedric Holz</div>
                    </Link>

                    <a href={"https://github.com/cedricholz"} target="_blank" rel="noopener noreferrer">
                        <img alt="" src={`${ASSETS_BASE_URL}github.png`} className="NavigationButtons Pad"/>
                    </a>
                    <a href={"https://www.linkedin.com/in/cedricholz/"} target="_blank" rel="noopener noreferrer">
                        <img alt="" src={`${ASSETS_BASE_URL}linked.png`} className="NavigationButtons Pad"/>
                    </a>

                    <a href={"https://docs.google.com/document/d/1ZAldDQejehmZ9KgPlc3DmpAhL6iX4H7Kc9O6YGz6Uas/edit?usp=sharing"}
                       target="_blank" rel="noopener noreferrer">
                        <div className="Resume Pad">[Resume]</div>
                    </a>
                </Fade>
            </div>
        )
    }
}