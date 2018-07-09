import React from 'react';
import "./timecapsule.css"

import ProjectBackground from '../../../components/ProjectBackground/ProjectBackground'
import Projects from '../../../components/Projects/Projects'
import GithubShare from "../../../components/GithubShare/GithubShare"
import berkeley from '../../../images/berkeley.png'
import box from '../../../images/box.png'
import createbox from '../../../images/createbox.png'
import inmessage from '../../../images/inmessage.png'
import messages from '../../../images/messages.png'
import myboxes from '../../../images/myboxes.png'
import nearbyboxes from '../../../images/nearbyboxes.png'

import insidecomment from '../../../images/insidecomment.png'
import photogallery from '../../../images/photogallery.png'


export default class TimeCapsule extends React.Component {

    render() {
        return (
            <div className="DashClass">

                <ProjectBackground projectName={"Time Capsule"}
                                   backgroundColor={'linear-gradient(to top right, #FF512F, #F09819)'} languages={['Android']}/>
                <div className="TextBlock">
                    <h2>An app that allows users to digitally GeoCache memories and information as comments and photos,
                        stored privately or shared with the
                        world.
                    </h2>

                    <div className="AllAndroidImages">
                        <div className="AndroidImage">
                            <img className="AndroidImage" src={berkeley}/>
                            <h3>Main screen where you can view boxes around the world where people stored their
                                content that can be accessed by walking to them</h3>
                        </div>
                        <div className="AndroidImage"><img className="AndroidImage" src={createbox}/>
                            <h3>Box Creation</h3>
                        </div>
                        <div className="AndroidImage">
                            <img className="AndroidImage" src={box}/>
                            <h3>Inside a Box comments can be voted on</h3>
                        </div>
                        <div className="AndroidImage">
                            <img className="AndroidImage" src={insidecomment}/>
                            <h3>Comments can be tapped to open new threads</h3>
                        </div>

                        <div className="AndroidImage">
                            <img className="AndroidImage" src={photogallery}/>
                            <h3>A photo gallery can be opened to view all images inside a box</h3>
                        </div>

                        <div className="AndroidImage">
                            <img className="AndroidImage" src={inmessage}/>
                            <h3>Tap someone's name to privately message them</h3>
                        </div>
                        <div className="AndroidImage">
                            <img className="AndroidImage" src={messages}/>
                            <h3>All messages</h3>
                        </div>

                        <div className="AndroidImage">
                            <img className="AndroidImage" src={myboxes}/>
                            <h3>View of all boxes the user has created</h3>
                        </div>

                        <div className="AndroidImage">
                            <img className="AndroidImage" src={nearbyboxes}/>
                            <h3>All nearby boxes, their distances and how many photos and comments are contained inside
                                them</h3>
                        </div>

                    </div>


                </div>
                <GithubShare url={'https://github.com/cedricholz/TimeCapsule'}/>
                <Projects/>
            </div>
        )
    }
};