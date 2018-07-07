import React from 'react';
import github from '../../images/github.png';
import linkedIn from '../../images/linked.png';
import "./navigationstyles.css"
import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {


    render() {
        const itemList = ["EXPERIENCE", "PROJECTS", "EDUCATION", "COURSES", "SKILLS", "CONTACT"];
        const {isProjectNav} = this.props;

        return (
            <div className="NavigationBar">
                <Link to={"/"} className="Link">
                    <div className="Name">Cedric Holz</div>
                </Link>
                <div className="AllButtons">
                    {!isProjectNav ? <div className="NaviationItems">
                        {itemList.map((item, i) =>
                            <div className="NavigationButtons" onClick={this.props.scrollFunctions[i]}
                                 key={i}>{`${itemList[i]}`}</div>
                        )}
                    </div> : ''}

                    <div>
                        <a href={"https://github.com/cedricholz"}>
                            <img src={github} className="NavigationButtons" target="_blank"/>
                        </a>
                        <a href={"https://www.linkedin.com/in/cedricholz/"}>

                            <img src={linkedIn} className="NavigationButtons" target="_blank"/>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}