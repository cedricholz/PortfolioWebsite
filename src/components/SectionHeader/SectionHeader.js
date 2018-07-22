import React from 'react';
import "./sectionheaderstyles.css"

export default class SectionHeader extends React.Component {

    render() {
        return (
            <div className="SectionHeader">
                <h2 className="head"><strong>{this.props.title}</strong></h2>
                {/*<div className="Underline"></div>*/}
            </div>
        )
    }
}