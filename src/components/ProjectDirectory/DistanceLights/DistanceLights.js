import React from 'react';
import "./distancelights.css"

import ProjectBackground from '../../../components/ProjectBackground/ProjectBackground'
import Projects from '../../../components/Projects/Projects'
import GithubShare from "../../../components/GithubShare/GithubShare"
import semiconnected from '../../../images/semiconnected.jpg'
import connectingbuttons from '../../../images/connectingbuttons.jpg'
import Firebase from '../../../images/Firebase.jpg'
import completed from '../../../images/completed.jpg'


export default class DistanceLights extends React.Component {

    render() {
        return (
            <div className="DistanceLights">

                <ProjectBackground projectName={"Raspberry Pi WIFI Distance Lights"}
                                   backgroundColor={'linear-gradient(to top right, #00b09b, #96c93d)'} languages={['Python']}/>
                <div className="TextBlock">

                    <h2>
                        LED plants that light up when up when the plant owners are thinking about each other
                    </h2>

                    <h3>
                        My family is often spread around around the world; I'm in California, my sister is in Minnesota,
                        and my parents
                        live in the Netherlands. To help stay connected I built these distance lights so where ever we
                        are in the world
                        .
                    </h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4xsF01WRymI"
                            frameBorder="0"
                            allow="autoplay; encrypted-media" allowFullScreen></iframe>

                    <h3>When a family member pushes the button of another family member, their plant will light up with
                        their own color,
                        and the person whose button has been pressed's plant will light up with the color of the button
                        presser for 3 hours. When all
                        the lights are on for someone, the white led lights up.</h3>


                    <h3>I'm blue, my sister is purple, and my mom and dad are orange and green.</h3>


                    <img src={semiconnected}/>
                    <h3>

                        Fitting the LED wires through a hole, I drilled through the bottom of the glass, to the
                        circuit
                        board.
                        Each LED or pair of LEDs are controlled by the GPIO pins on the Raspberry Pi Zero.
                    </h3>


                    <img src={connectingbuttons}/>
                    <h3>
                        Connecting the buttons to the board
                    </h3>


                    <img src={Firebase}/>
                    <h3>
                        The structure inside the Firebase Realtime Database to keep
                        track of whose lights have been turned on and when.
                    </h3>

                    <img src={completed}/>

                    <h3>
                        Completed Raspberry Pi WIFI Distance Lights
                    </h3>


                </div>
                <GithubShare url={'https://github.com/cedricholz/Pi-Wifi-Distance-Lights'}/>
                <Projects/>
            </div>
        )
    }
};