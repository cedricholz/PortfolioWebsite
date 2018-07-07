import React from 'react';
import "./experiencestyles.css"

import toolowlogo from "../../images/toolowlogo.png"
import toolow1 from "../../images/toolow.png"
import toolow2 from "../../images/toolow2.png"

export default class TooLow extends React.Component {

    render() {
        return (

            <div className="TooLow">
                <a href={'http://toolowapp.com/'} target="_blank" className="Link">
                    <img src={toolowlogo} className="ToolowLogo"/>
                    <h1>TooLow</h1>
                </a>


                <h1>Android Software Engineer Intern - Summer 2017</h1>
                <h1>[Android]</h1>

                <div className="TextBlock">

                    <p>Being put in charge of a start-up company (Toolow) focusing on food waste reduction's Android
                        application, provided a great opportunity to work with, fix and write code. It allowed me to
                        become proficient in building Android applications that communicate through Socket.io and a
                        RESTful backend.
                    </p>
                    <p>
                        Professional freedom allowed me to make adjustments for the betterment of the app;
                        therefore, I cached much of the app to make it faster incrementally, In addition, I reworked
                        the calendar and notification system and implemented the transaction history and ledger,
                        including the functionality for depositing and withdrawing of funds and adding bank
                        accounts.
                    </p>

                    <p>Meticulously working on the code details, I trained myself to find mistakes and to develop
                        ways to increase the speed, flow, and overall performance of the app. I learned proper development
                    techniques and that it pays in the long run to spend extre time to write modular, maintainable, and readable code.</p>

                    {/*<p>Meticulously working on the code details, I trained myself to find mistakes and to develop*/}
                        {/*ways to increase the speed, flow, and overall performance of the app. For example, once I*/}
                        {/*had to make a text field for an EIN number that looked like "xx-xxxxx." After discovering*/}
                        {/*that no built-in function for anchoring a hyphen existed and it had to be done manually, I*/}
                        {/*took extra steps to assure that only numbers could be input, and the hyphen was dynamically*/}
                        {/*added, deleted, and shifted accounting for every possibility of user correction using a*/}
                        {/*switch of regular expressions.</p>*/}
                </div>

                <div className="MobileImages">
                    <img src={toolow1} className="TooLowMobile"/>
                    <img src={toolow2} className="TooLowMobile"/>
                </div>
            </div>
        )
    }
}



