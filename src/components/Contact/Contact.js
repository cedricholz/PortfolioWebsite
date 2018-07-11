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
                    <a href={"https://github.com/cedricholz"}>
                        <img alt="" src={github} className="ContactLinks" target="_blank" rel="noopener noreferrer"/>
                    </a>
                    <a href={"https://www.linkedin.com/in/cedricholz/"}>
                        <img alt="" src={linkedIn} className="ContactLinks" target="_blank" rel="noopener noreferrer"/>
                    </a>
                </div>
            </div>

        )
    }
}