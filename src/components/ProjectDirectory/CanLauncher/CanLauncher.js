import React from "react"
import "./canlauncher.css"

import ProjectBackground from "../../../components/ProjectBackground/ProjectBackground"
import Projects from "../../../components/Projects/Projects"
import {ASSETS_BASE_URL} from "../../../constants"


export default class CanLauncher extends React.Component {

    render() {

        const deviceWidth = window.innerWidth
        let vidWidth = "560"
        let vidHeight = "315"

        if (deviceWidth < 600) {
            vidWidth = "280"
            vidHeight = "auto"
        }

        return (
            <div className="DashClass">

                <ProjectBackground projectName={"Can Launching Mini Fridge"}
                                   backgroundColor={"linear-gradient(to top right, #FF416C, #FF4B2B)"}
                                   languages={["Android", "Arduino"]}/>
                <div className="TextBlock">
                    <h2>A machine that launches high velocity cans from the fridge to you face</h2>
                    <br/>
                    <h3>
                        It was to be a marvel of modern engineering. Imagine you're on the couch, you've just maneuvered
                        your way into a perfect and irreproducible position, but you're thirsty and the fridge is 10
                        miles
                        away. With the can launching mini fridge, all you'd have to do is get out your phone, aim the
                        cannon at your face, press the button, and hopefully catch the can without much injury. It was
                        never
                        completed because I prioritized my schoolwork, but I had a lot of fun making it and I learned a
                        lot
                        about electronics and programming along the way. I wired it myself from a computer power supply
                        and
                        controlled it with an Arduino that was in turn controlled by an Android app I made.

                        The video below is at an early stage using a pre-made app as I didn't document the build as well
                        as
                        I should have and this is the only video I took.
                    </h3>


                    <iframe title="CanLauncher" width={vidWidth} height={vidHeight}
                            src="https://www.youtube.com/embed/7Qjovu8pz1Q" frameborder="0"
                            allowfullscreen/>

                    <h3>The app would dispense a can from a mini fridge on top (not pictured) to the barrel, move the
                        cannon
                        left, right, up, or down, and then fill up the expansion chamber. When it was sufficiently
                        pressurized, it waited for confirmation from the app, and then fired the can from the
                        barrel.</h3>

                    <img alt="" className="Image" src={`${ASSETS_BASE_URL}resizedfridge.png`}/>

                    <div className="BlackText">* Alex helped a little</div>
                </div>
                <Projects mainPage={false}/>
            </div>
        )
    }
};