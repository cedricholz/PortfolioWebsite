import React from 'react';
import "./projectsstyles.css"
import {Link} from 'react-router-dom';

export default class ProjectTile extends React.Component {

    render() {
        return (
            <div className="ProjectTile">
                <Link to={this.props.url} className="Link">
                    <img src={require('../../images/' + this.props.imageName)} className='ProjectImage'/>
                    <div className="ImageName">{this.props.projectName}</div>
                </Link>
            </div>
        )
    }
}