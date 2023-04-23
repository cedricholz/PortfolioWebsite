import React from "react"
import "./experiencestyles.css"

import TooLow from "./TooLow"
import Scoutible from "./Scoutible"


const Experience = React.forwardRef(({title}, ref) => {
    return (
        <div className="Experience">

            <Scoutible/>
            <TooLow/>

        </div>
    )
})

export default Experience