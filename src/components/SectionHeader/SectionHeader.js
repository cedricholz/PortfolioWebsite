import React from 'react';
import "./sectionheaderstyles.css"

export default class SectionHeader extends React.Component {

    render() {
        return (
            <div className="header-section">
                <h2><strong><span></span>{this.props.title}<span></span></strong></h2>
            </div>
        )
    }
}