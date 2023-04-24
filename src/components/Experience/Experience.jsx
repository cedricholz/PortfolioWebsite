import React from "react"
import "./experiencestyles.css"

import TooLow from "./TooLow"
import Scoutible from "./Scoutible"
import Dreamship from "./Dreamship"


const Experience = React.forwardRef(({title}, ref) => {
    return (
        <div className="Experience">
            <Dreamship/>
            <div ref={ref} className="divider"/>
            <Scoutible/>
            <div ref={ref} className="divider"/>
            <TooLow/>
        </div>
    )
})

export default Experience