import React from 'react';
import "./skillsstyles.css"

import Fade from 'react-reveal/Fade';

import BarGraph from './BarGraph'
import Technologies from "./Technologies";


export default class Skills extends React.Component {

    render() {


        return (
            <div className="AllSkills">
                <Fade up>
                    <BarGraph/>
                </Fade>

                <Fade up>
                    <Technologies/>
                </Fade>
            </div>
        )
    }
}