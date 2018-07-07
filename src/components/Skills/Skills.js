import React from 'react';
import "./skillsstyles.css"
import Circle from 'react-circle';
import sublime from "../../images/sublime.png"
import androidstudio from "../../images/androidstudio.png"
import jira from "../../images/jira.png"
import largeblackgithub from "../../images/largeblackgithub.png"
import ijsmall from "../../images/ijsmall.png"
import pycharm from "../../images/pycharm.png"
import webstorm from "../../images/webstorm.png"
import clion from "../../images/clion.png"
import bitbucket from "../../images/bitbucket.png"
import gimp from "../../images/gimp.png"
import gitbash from "../../images/gitbash.png"
import postman from "../../images/postman.png"


export default class Skills extends React.Component {

    render() {

        const skills = [
                {
                    Name: "React.js",
                    BarColor: "#00d8ff",
                    percentage: 90
                },
                {
                    Name: "Java",
                    BarColor: "#F8981D",
                    percentage: 90
                },

                {
                    Name: "Android",
                    BarColor: "#A4C639",
                    percentage: 90
                },
                {
                    Name: "Python",
                    BarColor: "#366E9D",
                    percentage: 90
                },
                {
                    Name: "C/C++",
                    BarColor: "#68227B",
                    percentage: 65
                },
                {
                    Name: "Linux",
                    BarColor: "#FCB713",
                    percentage: 70
                },
                {
                    Name: "HTML/CSS",
                    BarColor: "#A01D21",
                    percentage: 80
                },
                {
                    Name: "SQL",
                    BarColor: "#333333",
                    percentage: 65
                },

            ]
        ;

        const backgroundColor = "#DCDCDC";

        return (
            <div className="Skills">
                {skills.map((skill, i) => <div className="Skill" key={i}>
                    <Circle
                        animate={true}
                        progress={skill.percentage}
                        bgColor={backgroundColor}
                        progressColor={skill.BarColor}
                        textColor={"black"}
                        lineWidth={35}
                        size={110}
                        textStyle={{
                            font: '5rem Lato, Arial, sans-serif'
                        }}
                    />
                    <h3>{skill.Name}</h3>
                </div>)}
                <div className="Technologies">

                    <a href="https://www.sublimetext.com/"><img src={sublime}/></a>
                    <a href="https://developer.android.com/studio/index.html"><img src={androidstudio}/></a>

                    <a href="https://www.atlassian.com/software/jira"><img src={jira}/></a>
                    <a href="https://github.com"><img src={largeblackgithub}/></a>
                    <a href="https://www.jetbrains.com/idea/"><img src={ijsmall}/></a>
                    <a href="https://www.jetbrains.com/pycharm/"><img src={pycharm}/></a>
                    <a href="https://www.jetbrains.com/webstorm/"><img src={webstorm}/></a>
                    <a href="https://www.jetbrains.com/clion/"><img src={clion}/></a>
                    <a href="https://bitbucket.org/product"><img src={bitbucket}/></a>

                    <a href="https://www.gimp.org/"><img src={gimp}/></a>
                    <a href="https://git-for-windows.github.io/"><img src={gitbash}/></a>
                    <a href="https://www.getpostman.com/"><img src={postman}/></a>


                </div>
            </div>
        )
    }
}