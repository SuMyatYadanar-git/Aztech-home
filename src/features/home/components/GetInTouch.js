import React from 'react'
import Fade from 'react-reveal/Fade'
import Mybtn from '../../../common/Mybtn'

const GetInTouch = props => {
    const { width } = props
    return (
        <Fade>
            <div className="uk-container" >
                <div className="uk-text-italic uk-text-bolder  uk-text-emphasis uk-margin-large-top uk-margin-small-bottom"
                    style={{ fontSize: `${width < 414 ? '1.4rem' : '1.8rem'}` }}>
                    {"Ready for you."}
                </div>
                <div className="uk-grid uk-grid-small uk-margin-large-bottom" >
                    <div className="uk-width-3-4@m uk-width-3-4@l uk-margin-auto" style={{ fontSize: `${width < 414 ? '1rem' : '1.4rem'}` }}>
                        <div className="uk-width-3-4@m uk-width-3-5@l  uk-text-emphasis uk-text-left" >
                            <p>{"Let’s get to work. Our people, our resources and our infrastructure are waiting for you. Contact us today to see how we can get your business to the head of the curve."}</p>
                        </div>
                    </div>
                    <div className="uk-width-1-4@m uk-width-1-4@l uk-padding-top uk-text-center" >
                        <Mybtn text="Get In Touch" size="large" style={{ fontSize: '1rem' }} />
                    </div>
                </div>
                <hr className="uk-grid-divider" />
            </div>
        </Fade>
    )
}
export default GetInTouch;