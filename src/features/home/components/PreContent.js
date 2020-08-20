import React from 'react'
import Fade from 'react-reveal/Fade'

const PreContent = props => {
    const {width} = props
    return (
        <div className="uk-container">
            <Fade >
            <div className="uk-grid uk-child-width-expand@s  uk-flex uk-flex-center uk-flex-wrap-reverse " >
                <div className="uk-card  uk-card-body uk-width-expand@m ">
                    <p className="uk-text-bold uk-text-italic uk-text-left" style={{ fontSize: `${width < 414 ? '1.4rem': '1.8em'}`,color:'#0D5670' }}>
                        {"As one of Singapore’s leading design and electronics manufacturer,our mission has always been succinctly singular: To deliver value beyond expectations."}</p>
                </div>
                <div  >
                    <div className="uk-card uk-margin-large" style={{top:140}}>
                        <div className="uk-inline uk-position-bottom-right ">
                            <img src="images/180V.png" alt="v" className="uk-img "   />
                        </div>
                    </div>
                        <div className="uk-card uk-card-body uk-margin-large uk-width-2-4 uk-margin-auto" style={{paddingTop:'7rem',fontSize: `${width < 414 ? '1rem': '1.4rem'}`}}>
                            <p className=" uk-text-secondary uk-text-left ">
                                {"Being a turnkey, one-stop integrated solutions provider, Aztech is equipped with state-of-the-art equipment, driven by 4 R&D centres, with expertise in design, manufacturing and packaging to deliver a seamless, unified experience. Each and every time."}</p>
                        </div>
                   
                </div>
            </div>
            </Fade>
        </div>
    )
}
export default PreContent;
