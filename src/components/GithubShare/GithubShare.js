import React from "react"
import "./githubsharestyles.css"
import {ASSETS_BASE_URL} from "../../constants"

const GithubShare = (
    {customTitle, url}
) => {

    return (
        <div className="GithubShare">
            <a href={url} className="Link" target="_blank" rel="noopener noreferrer">
                <h2>{customTitle ? customTitle : "Project Code On Github"}</h2>
                <img alt="" src={`${ASSETS_BASE_URL}largegithub.png`}/>
            </a>
        </div>
    )

}
export default GithubShare