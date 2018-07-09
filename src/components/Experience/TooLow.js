import React from 'react';
import "./experiencestyles.css"

import toolowlogo from "../../images/toolowlogo.png"
import toolow1 from "../../images/toolow.png"
import toolow2 from "../../images/toolow2.png"
import Fade from 'react-reveal/Fade';

export default class TooLow extends React.Component {

    render() {
        return (

            <div className="TooLow">

                <Fade right>
                    <div>
                        <a href={'http://toolowapp.com/'} target="_blank" className="Link">
                            <img src={toolowlogo} className="ToolowLogo"/>
                        </a>
                        <h1>TooLow</h1>


                        <h1>Android Software Engineer Intern - Summer 2017</h1>

                        <h1 className="Android">[Android]</h1>

                    </div>

                </Fade>
                <Fade up>
                    <div>
                        <div className="TextBlock">

                            <h3>Being put in charge of a start-up company (Toolow) focusing on food waste reduction's
                                Android
                                application, provided a great opportunity to work with, fix, and write code. It allowed
                                me to
                                become proficient in building Android applications that communicate through Socket.io
                                and a
                                RESTful backend.
                            </h3>
                            <h3>
                                Professional freedom allowed me to make adjustments for the betterment of the app;
                                therefore, I cached much of the app to make it faster, In addition, I
                                reworked
                                the calendar and notification system and implemented the transaction history and ledger,
                                including the functionality for depositing and withdrawing of funds and adding bank
                                accounts.
                            </h3>

                            <h3>Meticulously working on the code details, I trained myself to find mistakes and to
                                develop
                                ways to increase the speed, flow, and overall performance of the app. I learned proper
                                development
                                techniques and that it pays in the long run to spend extra time to write modular,
                                maintainable,
                                and readable code.</h3>

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
                </Fade>
            </div>
        )
    }
}



