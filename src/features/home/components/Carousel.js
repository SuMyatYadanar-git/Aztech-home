import React from 'react'
import CardImage from './CardImage'

const Carousel = props => {
    const { width } = props
    return (
            <div className="uk-container" style={{ marginTop: -120 }}>
                <div uk-slider="autoplay:true" uk-slideshow="animation:slide" className="uk-margin-top uk-slider"  >
                    <div className="uk-position-relative uk-slider-container uk-slider" tabIndex="-1" >
                        <div className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid uk-grid-match">
                            <div >
                                <CardImage img={"/images/automotive.jpg"} title="automotive" width={width} />
                            </div>
                            <div >
                                <CardImage img={"/images/Healthcare.jpg"} title="Healthcare" width={width} />
                            </div>
                            <div >
                                <CardImage img={"/images/industrial.jpg"} title="Industrial" width={width} />
                            </div>
                            <div >
                                <CardImage img={"/images/consumer.jpg"} title="Consumers, home and lifestyle" width={width} />
                            </div>
                            <div >
                                <CardImage img={"/images/lighting.jpg"} title="Lighting" width={width} />
                            </div>
                            <div >
                                <CardImage img={"/images/communications.jpg"} title="Communications" width={width} />
                            </div>

                        </div>

                        {/* navigation arrow */}
                        <div className="uk-visible@s uk-light">
                            <a className="uk-position-center-left uk-position-small uk-slidenav" href="#" uk-slidenav-previous="true" uk-slider-item="previous"> </a>
                            <a className="uk-position-center-right uk-position-small uk-slidenav" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>
                        </div>
                    </div>

                </div>
            </div>
    )
}
export default Carousel;