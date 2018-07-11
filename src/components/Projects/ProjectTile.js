import React from 'react';
import "./projectsstyles.css"
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default class ProjectTile extends React.Component {

    render() {

        const {languages} = this.props;


        const languagesJsx = languages.map((language) => {
            let name = language
            if (name === 'pi') {
                name = 'Raspberry Pi'
            }
            return <div key={language} className={`${language} Lang`}>[{name}]</div>
        });


        return (
            <div className="ProjectTile">
                <Fade up>
                    <Link to={this.props.url} className="Link">
                        <img alt="" src={require('../../images/' + this.props.imageName)} className='ProjectImage'/>
                        <div className="ImageName">
                            <div>{this.props.projectName}</div>
                            <div className="Languages">
                                {languagesJsx}
                            </div>
                        </div>
                    </Link>
                </Fade>
            </div>
        )
    }
}