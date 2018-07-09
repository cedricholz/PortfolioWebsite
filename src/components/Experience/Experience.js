import React from 'react';
import "./experiencestyles.css"

import TooLow from "./TooLow"
import Scoutible from "./Scoutible"


export default class Experience extends React.Component {

    render() {
        return (
            <div className="Experience">

                <Scoutible/>
                <TooLow/>

            </div>
        )
    }
}