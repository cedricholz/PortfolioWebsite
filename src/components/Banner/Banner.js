import React from 'react';
import "./bannerstyles.css"
import bear from '../../images/smallbear.png';

export default class Banner extends React.Component {
    render() {
        return (
            <div className="Banner">
                <img src={bear} className="BannerLogo"/>
                <div className="BannerInfo">
                    <div className="BannerName">
                        Cedric Holz
                    </div>
                    <div className="BigText">
                        Full Stack Software Engineer
                    </div>
                    <div className="BigText">UC Berkeley Electrical Engineering and Computer Science</div>
                    <div className="SmallText">I love to code.</div>
                </div>
            </div>
        )
    }
}