import React from 'react';
import "./bannerstyles.css"
import bear from '../../images/smallbear.png';
import Typist from 'react-typist';
import ReactRevealText from "react-reveal-text";


export default class Banner extends React.Component {


    done = () => {
        this.setState({typing: false}, () => {
            this.setState({typing: true})
        });
    };

    constructor() {
        super();
        this.state = {show: false, typing: true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({show: true});
        }, 5000);
    }

    render() {
        return (
            <div className="Banner">


                {/*<img src={bear} className="BannerLogo"/>*/}
                <div className="BannerInfo">


                    <div className="BannerName">

                        <span className="MyName">
                            Cedric Holz
                        </span>
                    </div>
                    <div className="TypedText">
                        Software Engineer: &nbsp;
                        <Typist cursor={{
                            show: true,
                            blink: true,
                            element: '|',
                            hideWhenDone: true,
                            hideWhenDoneDelay: 0,
                        }}>
                            <span>Front-End</span>
                            <Typist.Backspace count={9} delay={1000}/>
                            <span>Back-End</span>
                            <Typist.Backspace count={8} delay={1000}/>
                            <span>Full-Stack</span>
                        </Typist>

                    </div>
                    <h2 className="BigText">
                        <div>University of California, Berkeley</div>
                        <div>Electrical Engineering &</div>
                        <div>Computer Science</div>
                    </h2>

                    <div className="SmallText">
                        <ReactRevealText show={this.state.show}>I love to code.
                        </ReactRevealText>
                    </div>
                </div>
            </div>
        )
    }
}