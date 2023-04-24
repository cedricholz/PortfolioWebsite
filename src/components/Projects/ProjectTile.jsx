import React from "react"
import "./projectsstyles.css"
import {Link} from "react-router-dom"
import Fade from "react-reveal/Fade"
import {ASSETS_BASE_URL} from "../../constants"

const ProjectTile = (
    {
        languages,
        url,
        imageName,
        projectName,
    }
) => {



        const languagesJsx = languages.map((language) => {
            let name = language
            if (name === "pi") {
                name = "Raspberry Pi"
            }
            return <div key={language} className={`${language} Lang`}>[{name}]</div>
        })


        return (
            <div className="ProjectTile">
                <Fade up>
                    <Link to={url} className="Link">
                        <img alt="" src={`${ASSETS_BASE_URL}${imageName}`} className="ProjectImage"/>
                        <div className="ImageName">
                            <div>{projectName}</div>
                            <div className="Languages">
                                {languagesJsx}
                            </div>
                        </div>
                    </Link>
                </Fade>
            </div>
        )

}
export  default ProjectTile