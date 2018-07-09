import React from 'react';
import "./skillsstyles.css"
import Circle from 'react-circle';
import sublime from "../../images/sublime.png"
import androidstudio from "../../images/androidstudio.png"
import jira from "../../images/jira.png"
import largeblackgithub from "../../images/largegithub.png"
import ijsmall from "../../images/ijsmall.png"
import pycharm from "../../images/pycharm.png"
import webstorm from "../../images/webstorm.png"
import clion from "../../images/clion.png"
import bitbucket from "../../images/bitbucket.png"
import gimp from "../../images/gimp.png"
import gitbash from "../../images/gitbash.png"
import postman from "../../images/postman.png"

import arduino from "../../images/arduino.png"
import raspberry from "../../images/raspberry.png"
import aws from "../../images/aws.png"
import express from "../../images/express.png"
import firebase from "../../images/firebase.png"
import gcp from "../../images/gcp.png"
import nodejs from "../../images/nodejs.png"
import rest from "../../images/rest.png"
import Fade from 'react-reveal/Fade';

import BarGraph from './BarGraph'


export default class Skills extends React.Component {

    render() {


        return (
            <div className="AllSkills">
                <Fade up>
                    <BarGraph/>
                </Fade>
                <Fade up>
                    <div className="Technologies">

                        <a href="https://cloud.google.com/" target="_blank"><img src={gcp} className="Technology"/></a>
                        <a href="https://firebase.google.com/" target="_blank"><img src={firebase}
                                                                                    className="Technology"/></a>
                        <a href="https://aws.amazon.com/" target="_blank"><img src={aws} className="Technology"/></a>
                        <a href="https://www.sublimetext.com/" target="_blank"><img src={sublime}
                                                                                    className="Technology"/></a>
                        <a href="https://developer.android.com/studio/index.html" target="_blank"><img
                            src={androidstudio}
                            className="Technology"/></a>

                        <a href="https://www.atlassian.com/software/jira" target="_blank"><img src={jira}
                                                                                               className="Technology"/></a>
                        <a href="https://github.com" target="_blank"><img src={largeblackgithub}
                                                                          className="Technology"/></a>
                        <a href="https://bitbucket.org/product" target="_blank"><img src={bitbucket}
                                                                                     className="Technology"/></a>
                        <a href="https://www.jetbrains.com/idea/" target="_blank"><img src={ijsmall}
                                                                                       className="Technology"/></a>
                        <a href="https://www.jetbrains.com/pycharm/" target="_blank"><img src={pycharm}
                                                                                          className="Technology"/></a>

                        <a href="https://www.jetbrains.com/clion/" target="_blank"><img src={clion}
                                                                                        className="Technology"/></a>


                        <a href="https://www.gimp.org/" target="_blank"><img src={gimp} className="Technology"/></a>
                        <a href="https://git-for-windows.github.io/" target="_blank"><img src={gitbash}
                                                                                          className="Technology"/></a>
                        <a href="https://www.getpostman.com/" target="_blank"><img src={postman}
                                                                                   className="Technology"/></a>


                        <a href="https://www.arduino.cc/" target="_blank"><img src={arduino}
                                                                               className="Technology"/></a>
                        <a href="https://www.raspberrypi.org/" target="_blank"><img src={raspberry}
                                                                                    className="Technology"/></a>

                        <a href="https://www.jetbrains.com/webstorm/" target="_blank"><img src={webstorm}
                                                                                           className="Technology"/></a>
                        <a href="https://nodejs.org/en/" target="_blank"><img src={nodejs} className="Technology"/></a>
                        <a href="https://expressjs.com/" target="_blank"><img src={express} className="Technology"/></a>


                        <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank"><img
                            src={rest} className="Technology"/></a>

                    </div>
                </Fade>
            </div>

        )
    }
}