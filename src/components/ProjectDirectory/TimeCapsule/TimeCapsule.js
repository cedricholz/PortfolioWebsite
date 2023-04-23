import React from "react"
import "./timecapsule.css"

import ProjectBackground from "../../../components/ProjectBackground/ProjectBackground"
import Projects from "../../../components/Projects/Projects"
import GithubShare from "../../../components/GithubShare/GithubShare"
import {ASSETS_BASE_URL} from "../../../constants"


export default class TimeCapsule extends React.Component {

    render() {
        return (
            <div className="DashClass">

                <ProjectBackground projectName={"Time Capsule"}
                                   backgroundColor={"linear-gradient(to top right, #FF512F, #F09819)"}
                                   languages={["Android"]}/>
                <div className="TextBlock">
                    <h2>An app that allows users to digitally GeoCache memories and information as comments and photos,
                        stored privately or shared with the
                        world.
                    </h2>

                    <div className="AllAndroidImages">
                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}berkeley.png`}/>
                            <h3>Main screen where you can view boxes around the world where people stored their
                                content that can be accessed by walking to them</h3>
                        </div>
                        <div className="AndroidImage"><img alt="" className="AndroidImage Image"
                                                           src={`${ASSETS_BASE_URL}createbox.png`}/>
                            <h3>Box Creation</h3>
                        </div>
                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}box.png`}/>
                            <h3>Inside a Box comments can be voted on</h3>
                        </div>
                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage" src={`${ASSETS_BASE_URL}insidecomment.png`}/>
                            <h3>Comments can be tapped to open new threads</h3>
                        </div>

                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}photogallery.png`}/>
                            <h3>A photo gallery can be opened to view all images inside a box</h3>
                        </div>

                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}inmessage.png`}/>
                            <h3>Tap someone's name to privately message them</h3>
                        </div>
                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}messages.png`}/>
                            <h3>All messages</h3>
                        </div>

                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}myboxes.png`}/>
                            <h3>View of all boxes the user has created</h3>
                        </div>

                        <div className="AndroidImage">
                            <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}nearbyboxes.png`}/>
                            <h3>All nearby boxes, their distances and how many photos and comments are contained inside
                                them</h3>
                        </div>

                    </div>


                </div>
                <GithubShare url={"https://github.com/cedricholz/TimeCapsule"}/>
                <Projects mainPage={false}/>
            </div>
        )
    }
};