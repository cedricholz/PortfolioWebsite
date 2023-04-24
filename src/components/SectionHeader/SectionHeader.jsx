import React from "react"
import "./sectionheaderstyles.css"


const SectionHeader = React.forwardRef(({title}, ref) => {
    return (
        <div ref={ref} className="SectionHeader">
            <h2 className="head"><strong>{title}</strong></h2>
            {/*<div className="Underline"></div>*/}
        </div>
    )
})

export default SectionHeader