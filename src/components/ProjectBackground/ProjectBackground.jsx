import React from "react"
import "./projectbackgroundstyles.css"
import Navigation from "../Navigation/Navigation"
import Fade from "react-reveal/Fade"
import TextLoop from "react-text-loop"

const ProjectBackground = (
    {
        languages,
        projectName,
        backgroundColor,
    }
) => {


        const languageJsx = languages.map((language) =>
            <span>{language}</span>
        )

        return (
            <div>

                <div className="ProjectBackground" style={{background: backgroundColor}}>
                    <div className="Nav">
                        <Navigation/>
                    </div>
                    <Fade up>
                        <div className="ProjectTitle">
                            {`${projectName}: `}
                            {languages.length > 1 ? <TextLoop speed={1000} springConfig={{stiffness: 180, damping: 8}}>
                                {languageJsx}
                            </TextLoop> : languages[0]}

                        </div>
                    </Fade>
                </div>
                <div className="MovingText">

                </div>
            </div>

        )

}

export default  ProjectBackground