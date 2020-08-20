import React from 'react'
import Fade from 'react-reveal/Fade'


const MapMaker = props => {
    const { width } = props
    return (
        <div>
            <Fade>
                <div className=" uk-text-center uk-padding-small" style={{ backgroundColor: '#0A5673', color: 'whitesmoke', }}>
                    <div className="uk-margin-medium-top" style={{ fontSize: `${width < 414 ? '1.4rem' : '1.8rem'}`, }}> <span className="uk-text-italic uk-text-bolder ">We're right  where you need us</span></div>
                    <div className="uk-width-1-2@l uk-margin-auto uk-margin-small-top" style={{ fontSize: `${width < 414 ? '1rem' : '1.4rem'}` }}>
                        <p>
                            We’re headquartered in Singapore, with strategic presence throughout our distribution network across over 40 countries, all ready to deliver products and solutions wherever you are.
                    </p>
                    </div>
                </div>
            </Fade>

            <div className="uk-position-relative ">
                <div className="uk-inline uk-width-1-1 ">
                    <img src="images/map.jpg" alt="map" className="uk-width-1-1" />
                </div>

                <div className="uk-position-absolute uk-transform-center  " style={{ right: "20%", top: '32%', background: 'none', cursor: 'pointer' }} >
                    <div uk-toggle="target: .mark-info-1;animation: uk-animation-fade" >
                        <span className="uk-icon uk-animation-toggle uk-animation-scale-down " uk-icon={`icon: location;ratio:1.9`} style={{ color: '#F6EF5C' }}></span>
                    </div>
                    <div className="mark-info-1 uk-position-absolute uk-overlay uk-flex uk-flex-center" hidden style={{ backgroundColor: '#007ca2', padding: 15, borderRadius: 5, opacity: '0.9' }}>
                        <MarkerInfo title="factory,R&D Centres" subtitle="China (Shenzhen, Dong Guan)" />
                    </div>
                </div>

                <div className="uk-position-absolute uk-transform-center uk-marker" style={{ right: "17%", top: '36%', background: 'none', cursor: 'pointer' }}>
                    <div uk-toggle="target: .mark-info-2;animation: uk-animation-fade" >
                        <span className="uk-icon uk-animation-toggle uk-animation-scale-down " uk-icon="icon: location;ratio:1.9" style={{ color: '#F6EF5C' }}></span>
                    </div>
                    <div className="mark-info-2 uk-position-absolute uk-overlay uk-flex uk-flex-center" hidden style={{ backgroundColor: '#007ca2', padding: 15, borderRadius: 5, opacity: '0.9' }}>
                        <MarkerInfo title="Aztech @ Shenzhen" subtitle="Room 1805 - 06, Building B of Bojin International, No.7 Tairan Road, Futian District" id="mark1" />
                    </div>
                </div>

                <div className="uk-position-absolute uk-transform-center uk-marker" style={{ right: "19%", top: '49%', background: 'none', cursor: 'pointer' }}>
                    <div uk-toggle="target: .mark-info-3;animation: uk-animation-fade" >
                        <span className="uk-icon uk-animation-toggle uk-animation-scale-down" uk-icon="icon: location;ratio:1.9" style={{ color: '#F6EF5C' }}></span>
                    </div>
                    <div className="mark-info-3 uk-position-absolute uk-overlay uk-flex uk-flex-center" hidden style={{ backgroundColor: '#007ca2', padding: 15, borderRadius: 5, opacity: '0.9' }}>
                        <div className="uk-inline uk-width-large uk-text-medium" style={{ color: '#fff', maxWidth: 250 }}>
                            <MarkerInfo title="Aztech @ Malaysia" subtitle="8 & 10, Setia Business Park,Jalan Laman Setia 7/4,Taman Laman Setia 81550,Johor Bahru, Johor" />
                        </div>
                    </div>
                </div>

                <div className="uk-position-absolute uk-transform-center uk-marker" style={{ right: "18%", top: '55%', background: 'none', cursor: 'pointer' }}>
                    <div uk-toggle="target: .mark-info-4;animation: uk-animation-fade" >
                        <span className="uk-icon uk-animation-toggle uk-animation-scale-down" uk-icon="icon: location;ratio:1.9" style={{ color: '#F6EF5C' }}></span>
                    </div>
                    <div className="mark-info-4 uk-position-absolute uk-overlay uk-flex uk-flex-center" hidden style={{ backgroundColor: '#007ca2', padding: 15, borderRadius: 5, opacity: '0.9' }}>
                        <div className="uk-inline uk-width-large uk-text-medium" style={{ color: '#fff', maxWidth: 250 }}>
                            <MarkerInfo title=" Aztech @Singapore" subtitle="31 Ubi Road 1, #01 - 05,Singapore 408694" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const MarkerInfo = ({ title, subtitle }) => {
    return (
        <div className="uk-inline uk-width-large uk-text-medium" style={{ color: '#fff', maxWidth: 250 }}>
            <div> <span className="uk-text-uppercase uk-margin-small-bottom">{title}</span></div>
            <div><span >{subtitle}</span>   </div>
        </div>
    )
}
export default MapMaker;