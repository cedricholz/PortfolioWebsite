import React from "react"
import "./experiencestyles.css"

import Fade from "react-reveal/Fade"
import {ASSETS_BASE_URL} from "../../constants"

const Scoutible = (
    {
        mainPage
    }
) => {


    return (

        <div className="Scoutible">
            <Fade left>
                <div>
                    <a href={"http://www.scoutible.com/"} target="_blank" rel="noopener noreferrer"
                       className="Link">
                        <img alt="" src={`${ASSETS_BASE_URL}scout.png`} className="ScoutibleLogo"/>
                    </a>
                    <h2 className="BigText">Scoutible</h2>

                    <h1>Summer 2018</h1>
                    <h1>Full-Stack Engineer Intern</h1>
                    <h1 className="React Pad">[React.js]</h1>
                    <h1 className="Python Pad">[Python]</h1>
                    <div>
                        <h1 className="Pad" style={{display: "inline-block"}}>[Node.js]</h1>
                        <h1 className="Pad" style={{display: "inline-block"}}>[Express.js]</h1>
                        <h1 className="Pad" style={{display: "inline-block"}}>[HTML/CSS]</h1>
                        <h1 className="Pad" style={{display: "inline-block"}}>[Google Cloud Platform]</h1>
                    </div>

                </div>
            </Fade>

            <Fade up>
                <div className="TextBlock">

                    <h3>I quickly became a competent Full-Stack engineer, taking on the responsibilities of a full
                        time engineer within a month.
                        I built python scripts to edit Google Cloud Datastore data, as well as created a fully local
                        testing environment emulator, reducing the previous 3 minutes to test to moments along with
                        allowing use of the debugger.
                        A full end-to-end project I put together was a Nightmare.js server to take screenshots of
                        dynamically stylized user data for sharing on Facebook and Twitter.
                        I also
                        fixed security holes to tighten users’ allowed data access, made app responsive and added
                        many features that required front-end and backend changes.
                    </h3>
                </div>
            </Fade>

        </div>
    )

}
export default Scoutible


