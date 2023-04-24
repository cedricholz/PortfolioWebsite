import React from "react"
import "./radii.css"

import ProjectBackground from "../../ProjectBackground/ProjectBackground"
import Projects from "../../Projects/Projects"
import GithubShare from "../../GithubShare/GithubShare"
import {ASSETS_BASE_URL} from "../../../constants"


const Radii = () => {


    return (
        <div>

            <ProjectBackground projectName={"Radii"}
                               backgroundColor={"linear-gradient(to top right, #c0392b, #8e44ad)"}
                               languages={["React-Native", "HTML", "CSS"]}/>
            <div className="TextBlock">
                <h2>An app to connect people to their neighborhood in real-time. Every message sends a pulse
                    notification
                    to those within the circle unless they have turned off those specific types of notifications.
                </h2>

                <div className="AllAndroidImages">
                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}radii.PNG`}/>
                        <h3>The main screen of the App. The circle can be adjusted to choose who you want to send a
                            pulse to</h3>
                    </div>


                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}send.PNG`}/>
                        <h3>When you send a pulse you can preview it and choose the pulse categories</h3>
                    </div>

                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}saveimage.PNG`}/>
                        <h3>You can also take a photo to add to your pulse</h3>
                    </div>

                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}sendimage.PNG`}/>
                        <h3>The photo preview</h3>
                    </div>

                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage" src={`${ASSETS_BASE_URL}menu.PNG`}/>
                        <h3>The menu that is displayed when you click the hamburger menu on the top left of the
                            app</h3>
                    </div>

                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}pulses.PNG`}/>
                        <h3>All the pulses you have received, complete with vertical infinite scrolling</h3>
                    </div>


                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage" src={`${ASSETS_BASE_URL}comments.PNG`}/>
                        <h3>Pulses can be commented on</h3>
                    </div>


                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}report.PNG`}/>
                        <h3>Each pulse and comment can be reported. If a user gets reported 5 times in a week they
                            are banned</h3>
                    </div>


                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}sendcomment.PNG`}/>
                        <h3>The modal that appears when you send a comment</h3>
                    </div>


                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}settings.PNG`}/>
                        <h3>The robust settings that makes sure the notifications never become too much</h3>
                    </div>

                </div>


            </div>
            <GithubShare url={"https://github.com/cedricholz/Radii"}/>
            <Projects mainPage={false}/>
        </div>
    )

}

export default Radii