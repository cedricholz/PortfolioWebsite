import React from 'react';
import "./radii.css"

import ProjectBackground from '../../../components/ProjectBackground/ProjectBackground'
import Projects from '../../../components/Projects/Projects'
import GithubShare from "../../../components/GithubShare/GithubShare"
import comments from '../../../images/RadiiImages/comments.PNG'
import menu from '../../../images/RadiiImages/menu.PNG'
import pulses from '../../../images/RadiiImages/pulses.PNG'
import radii from '../../../images/RadiiImages/radii.PNG'
import report from '../../../images/RadiiImages/report.PNG'
import saveimage from '../../../images/RadiiImages/saveimage.PNG'
import send from '../../../images/RadiiImages/send.PNG'
import sendcomment from '../../../images/RadiiImages/sendcomment.PNG'
import sendimage from '../../../images/RadiiImages/sendimage.PNG'
import settings from '../../../images/RadiiImages/settings.PNG'


export default class Radii extends React.Component {

    render() {
        return (
            <div className="DashClass">

                <ProjectBackground projectName={"Radii"}
                                   backgroundColor={'linear-gradient(to top right, #c0392b, #8e44ad)'}
                                   languages={['React-Native', 'HTML', 'CSS']}/>
                <div className="TextBlock">
                    <h2>An app to connect people to their neighborhood in real-time. Every message sends a pulse
                        notification
                        to those within the circle unless they have turned off those specific types of notifications.
                    </h2>

                    <div className="AllAndroidImages">
                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={radii}/>
                            <h3>The main screen of the App. The circle can be adjusted to choose who you want to send a
                                pulse to</h3>
                        </div>


                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={send}/>
                            <h3>When you send a pulse you can preview it and choose the pulse categories</h3>
                        </div>

                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={saveimage}/>
                            <h3>You can also take a photo to add to your pulse</h3>
                        </div>

                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={sendimage}/>
                            <h3>The photo preview</h3>
                        </div>

                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage" src={menu}/>
                            <h3>The menu that is displayed when you click the hamburger menu on the top left of the
                                app</h3>
                        </div>

                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={pulses}/>
                            <h3>All the pulses you have received, complete with vertical infinite scrolling</h3>
                        </div>


                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage" src={comments}/>
                            <h3>Pulses can be commented on</h3>
                        </div>



                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={report}/>
                            <h3>Each pulse and comment can be reported. If a user gets reported 5 times in a week they are banned</h3>
                        </div>


                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={sendcomment}/>
                            <h3>The modal that appears when you send a comment</h3>
                        </div>


                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={settings}/>
                            <h3>The robust settings that makes sure the notifications never become too much</h3>
                        </div>

                    </div>


                </div>
                <GithubShare url={'https://github.com/cedricholz/Radii'}/>
                <Projects mainPage={false}/>
            </div>
        )
    }
};
