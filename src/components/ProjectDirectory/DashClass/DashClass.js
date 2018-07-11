import React from 'react';
import "./dashclass.css"

import ProjectBackground from '../../../components/ProjectBackground/ProjectBackground'
import Projects from '../../../components/Projects/Projects'
import GithubShare from "../../../components/GithubShare/GithubShare"
import dashthumb from '../../../images/dashthumb.png'

export default class DashClass extends React.Component {

    render() {

        const deviceWidth = window.innerWidth;
        return (
            <div className="DashClass">

                <ProjectBackground projectName={"Dash Class"}
                                   backgroundColor={'linear-gradient(to top right,#34e89e, #0f3443)'}
                                   languages={['React.js']}/>
                <div className="TextBlock">
                    <h2>A student professor dashboard to be used in class to keep students engaged and the
                        professor more effective</h2>

                    <h3>Instructors create a room with a unique room code that is shared with the class,
                        once inside they can easily create several multiple choice polls, and keep an eye on student
                        comprehension.</h3>

                    <h3>The studentscan join the room using the code to; answer polls, chat together to
                        answer each
                        other's
                        questions, and anonymously ask professors for more clarity on certain topics.
                    </h3>


                    {deviceWidth > 600 ?
                        <div>
                            <img alt="" src={dashthumb} className="WideImage Image"/>
                            <iframe title="DashClass" className="DashClassExample"
                                    src="http://cedricholz.com/dashclass.html#/" height="600px" width="800px"></iframe>
                        </div> : <div>
                            <h2>Tap the image below to try it out! </h2>
                            <a href="http://cedricholz.com/dashclass.html#/"
                               className="LinkText">
                                <img alt="" src={dashthumb} className="WideImage Image"/>
                            </a>
                        </div>


                    }


                    {/*<script async src="https://snack.expo.io/embed.js"></script>*/}

                </div>
                <GithubShare url={'https://github.com/cedricholz/Dash-Class'}/>
                <Projects mainPage={false}/>
            </div>
        )
    }
};