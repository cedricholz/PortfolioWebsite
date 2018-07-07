import React from 'react';
import "./projectbackgroundstyles.css"
import Navigation from '../../components/Navigation/Navigation'

export default class ProjectBackground extends React.Component {

    render() {
        return (
            <div className="ProjectBackground" style={{background: this.props.backgroundColor}}>
                <div className="Nav">
                    <Navigation isProjectNav={true}/>
                </div>
                <div className="ProjectTitle">
                    {this.props.projectName}
                </div>

            </div>
        )
    }
}