import React from "react"
import "./experiencestyles.css"

import Fade from "react-reveal/Fade"
import {ASSETS_BASE_URL} from "../../constants"

const Dreamship = (
    {}
) => {


    return (

        <div className="Scoutible">
            <Fade left>
                <div>
                    <a href={"https://dreamship.com/"} target="_blank" rel="noopener noreferrer"
                       className="Link">
                        <img alt="" src={`${ASSETS_BASE_URL}dreamship.png`} className="Dreamshiplogo"/>
                    </a>
                    <h2 className="BigText">Dreamship</h2>

                    <h1>January 2019 - Present</h1>
                    <h1>Full-Stack Engineer</h1>
                    <h1 className="React Pad">[React]</h1>
                    <h1 className="Python Pad">[Python/Django]</h1>
                    <h1 className="AWS Pad">[AWS]</h1>
                </div>
            </Fade>
        </div>
    )

}
export default Dreamship


