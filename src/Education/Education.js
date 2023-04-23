import {ASSETS_BASE_URL} from "../constants"


import React from "react"

import Fade from "react-reveal/Fade"

const Education = () => {


    return (
        <Fade up>
            <div className="CenterText">
                <a href={"https://www.berkeley.edu/"} target="_blank" rel="noopener noreferrer">
                    <img alt="" src={`${ASSETS_BASE_URL}ucberkeleyseal.png`} className="BerkeleySeal"/>
                </a>

                <h2 className="School">University of California, Berkeley</h2>
                <h3>December 2018</h3>
                <h3 className="ListItem">B.S. Electrical Engineering and Computer Science</h3>
            </div>
        </Fade>
    )

}
export default Education

