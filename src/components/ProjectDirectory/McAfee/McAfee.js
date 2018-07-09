import React from 'react';
import "./mcafee.css"

import ProjectBackground from '../../../components/ProjectBackground/ProjectBackground'
import Projects from '../../../components/Projects/Projects'
import GithubShare from "../../../components/GithubShare/GithubShare"
import burst from '../../../images/burst.jpg'
import tron from '../../../images/tron.jpg'

export default class McAfee extends React.Component {

    render() {
        return (
            <div className="DashClass">

                <ProjectBackground projectName={"McAfee Twitter Cryptocurrency Trading Bot"}
                                   backgroundColor={'linear-gradient(to top right,#cb2d3e, #ef473a)'} languages={['Python']}/>
                <div className="TextBlock">
                    <h2><b>A Python bot that buys Cryptocurrencies as soon as John McAfee tweets his coin of the
                        day/week, and sells them minutes later as they reach their >100% peaks</b>
                    </h2>

                    <h3>
                        When John McAfee began tweeting his coin of the day, I noticed (along with many others) that the
                        coins he tweeted would
                        rise dramatically very quickly, within a time frame of about 10-15 minutes. Their increases
                        were anywhere from 80-300%, so I decided to build a Python program to take advantage of the
                        "McAfee
                        bump."
                    </h3>

                    <img className="BurstImage" src={burst}/>

                    <h3>
                        McAfee soon caught on that people were building bots to
                        profit on his tweets, so he began posting pictures, instead of easily parsable text, to try to
                        fool
                        the bots.
                    </h3>


                    <img src={tron}/>

                    <h3>
                        I quickly modified the bot to also parse each image's text through a free OCR
                        API, <i>https://ocr.space/ocrapi</i>, but
                        unfortunately, the images appear to have killed the McAfee bump.
                    </h3>
                </div>
                <GithubShare url={'https://github.com/cedricholz/Mcafee-Twitter-Crypto-Bot'}/>
                <Projects/>
            </div>
        )
    }
};