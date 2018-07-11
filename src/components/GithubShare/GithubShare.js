import React from 'react';
import "./githubsharestyles.css"
import github from "../../images/largegithub.png"

export default class GithubShare extends React.Component {

    render() {
        const {customTitle} = this.props;
        return (
            <div className="GithubShare">
                <a href={this.props.url} className="Link" target="_blank" rel="noopener noreferrer">
                    <h2>{customTitle?customTitle:'Project Code On Github'}</h2>
                    <img alt="" src={github}/>
                </a>
            </div>
        )
    }
}