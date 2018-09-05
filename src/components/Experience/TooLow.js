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
                        <a href={'http://toolowapp.com/'} target="_blank" rel="noopener noreferrer" className="Link">
                            <img alt="" src={toolowlogo} className="ToolowLogo"/>
                        </a>
                        <h2 className="BigText">TooLow</h2>

                        <h1>Summer 2017</h1>
                        <h1>Android Software Engineer Intern</h1>

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

                        </div>

                        <div className="MobileImages">
                            <img alt="" src={toolow1} className="TooLowMobile Image"/>
                            <img alt="" src={toolow2} className="TooLowMobile Image"/>
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
}



