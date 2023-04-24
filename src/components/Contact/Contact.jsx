import React from "react"
import "./contactstyles.css"
import SectionHeader from "../SectionHeader/SectionHeader"
import {ASSETS_BASE_URL} from "../../constants"

const Contact = React.forwardRef(({mainPage}, ref) => {


    return (

        <div className="Contact" ref={ref}>
            <SectionHeader title={"CONTACT"}/>
            <h2>cedricholz@gmail.com</h2>
            <div>
                <div className="Info">
                    <a className="ContactLinks" href={"https://github.com/cedricholz"}>
                        <img alt="" src={`${ASSETS_BASE_URL}github.png`} target="_blank"
                             rel="noopener noreferrer"/>
                    </a>
                    <a className="ContactLinks" href={"https://www.linkedin.com/in/cedricholz/"}>
                        <img alt="" src={`${ASSETS_BASE_URL}linked.png`} target="_blank"
                             rel="noopener noreferrer"/>
                    </a>

                    <a className="Resume"
                       href={"https://docs.google.com/document/d/1ZAldDQejehmZ9KgPlc3DmpAhL6iX4H7Kc9O6YGz6Uas/edit?usp=sharing"}>
                        <div>
                            [Resume]
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
})

export default Contact