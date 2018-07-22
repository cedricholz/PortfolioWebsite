import React from 'react';
import "./contactstyles.css"
import github from '../../images/github.png';
import linkedIn from '../../images/linked.png';
import SectionHeader from "../SectionHeader/SectionHeader";

export default class Contact extends React.Component {


    render() {
        return (

            <div className="Contact">
                <SectionHeader title={"CONTACT"}/>
                <h2>cedricholz@gmail.com</h2>
                <div>
                    <div className="Info">
                        <a className="ContactLinks" href={"https://github.com/cedricholz"}>
                            <img alt="" src={github}  target="_blank"
                                 rel="noopener noreferrer"/>
                        </a>
                        <a className="ContactLinks" href={"https://www.linkedin.com/in/cedricholz/"}>
                            <img alt="" src={linkedIn}  target="_blank"
                                 rel="noopener noreferrer"/>
                        </a>

                        <a className="Resume" href={"https://docs.google.com/document/d/1ZAldDQejehmZ9KgPlc3DmpAhL6iX4H7Kc9O6YGz6Uas/edit?usp=sharing"}>
                            <div >
                                [Resume]
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}