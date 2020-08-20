import React from 'react';
import Fade from 'react-reveal/Fade'
import Carousel from './Carousel';

const SmartSolution = props => {
    const { width } = props
    return (
        <Fade>
            <div className="uk-cover-container uk-background-cover uk-flex uk-flex-center uk-height-large" style={{ backgroundImage: `url(${"images/line2.jpg"})`, minHeight: '38vh' }} >
                <div className="uk-container">
                    <div className="uk-flex uk-flex-stretch uk-flex-middle uk-padding uk-padding-remove-horizontal uk-flex-wrap uk-grid uk-grid-medium uk-margin-small-top">
                        <div className="uk-width-1-3@m  uk-width-1-4@l ">
                            <span className="uk-text-bolder uk-text-italic" style={{ fontSize: `${width < 616 ? '1.4rem' : '1.8em'}`, color: '#fff' }}>Smart Solutions. Better living.</span>
                        </div>
                        <div className="uk-width-2-3@m uk-width-3-4@l  uk-margin-small-top">
                            <p className="uk-text-left " style={{ fontSize: `${width < 616 ? '1rem' : '1.4rem'}`, color: '#fff' }}>{"Expertise and experience. Our dual driving force to producing results for our clients. From conceptualisation to productisation, we have what it takes to support our clients – at every step of the journey. Our expertise transcends across categories like automotive, consumer lifestyle, healthcare, communications and industrial."}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel width={width} />
        </Fade>
    )
}
export default SmartSolution;