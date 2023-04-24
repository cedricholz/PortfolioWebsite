import React, {useEffect, useState} from "react"
import "./bannerstyles.css"
import Typist from "react-typist"
import ReactRevealText from "react-reveal-text"


const Banner = () => {

    const [show, setShow] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 5000)
    }, [])


    return (
        <div>
            <div className="Banner">

                <div className="BigText">
                    <div className="BannerName">

                        <span className="MyName">
                            Cedric Holz
                        </span>
                    </div>
                    <div className="BigText TypedText">
                        Software Engineer: &nbsp;
                        <Typist cursor={{
                            show: true,
                            blink: true,
                            element: "|",
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
                    <div>
                        <div>University of California, Berkeley</div>
                        <div>Electrical Engineering &</div>
                        <div>Computer Science</div>
                    </div>

                    <div className="SmallText">
                        <ReactRevealText show={show}>I love to code.
                        </ReactRevealText>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Banner