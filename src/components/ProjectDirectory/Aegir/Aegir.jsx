import React from "react"
import "./aegir.css"

import ProjectBackground from "../../ProjectBackground/ProjectBackground"
import Projects from "../../Projects/Projects"
import GithubShare from "../../GithubShare/GithubShare"
import {ASSETS_BASE_URL} from "../../../constants"


const Aegir = () => {


    return (
        <div>

            <ProjectBackground projectName={"Aegir"}
                               backgroundColor={"linear-gradient(to top right, #c0392b, #8e44ad)"}
                               languages={["React-Native", "HTML", "CSS"]}/>
            <div className="TextBlock">
                <h2>AI Beer Identifier
                    Take a photo of beers, a menu, or bar taps.
                    Receive a list of the beers in the photo.
                    Sort by Rating, ABV, Calories, and IBUs.
                    Learn more about each beer.
                </h2>

                <div className="AllAndroidImages">
                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}scanslight.png`}/>
                        <h3>Recent scans light mode (iOS)</h3>
                    </div>


                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}scansdark.png`}/>
                        <h3>Recent scans dark mode (Android)</h3>
                    </div>

                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}scanner.png`}/>
                        <h3>Take a photo</h3>
                    </div>

                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage Image" src={`${ASSETS_BASE_URL}aegirbeersfound.png`}/>
                        <h3>Beers found in the scan</h3>
                    </div>

                    <div className="AndroidImage">
                        <img alt="" className="AndroidImage" src={`${ASSETS_BASE_URL}info_dark.36b99fed.png`}/>
                        <h3>Description of a selected beer</h3>
                    </div>

                </div>


            </div>
            <Projects mainPage={false}/>
        </div>
    )

}

export default Aegir