import React from 'react'
import MyLink from '../../common/MyLink'

const Footer = props => {
    return (
        <div className="uk-container">
             {/* <hr className="uk-grid-divider" /> */}
            <div className=" uk-grid uk-grid-medium  uk-flex-center uk-flex-wrap uk-margin-medium-bottom uk-text-medium uk-text-muted">

                <div className="uk-flex-column uk-width-1-2@m uk-width-1-5@l uk-margin-medium-top" >
                    <div className="uk-margin"><MyLink text="About Us"/></div>
                    <div className="uk-margin"><MyLink text="about" /></div>
                    <div className="uk-margin"><MyLink text="Investor Relations"/></div>
                    <div className="uk-margin"><MyLink text="Contact Us"/></div>
                </div>
               
                <div className="uk-flex-column uk-width-1-2@m uk-width-1-5@l uk-margin-medium-top">
                    <div className="uk-margin"><MyLink text="Expertises"/></div>
                    <div className="uk-margin"><MyLink text="Automotive"/></div>
                    <div className="uk-margin"><MyLink text="Consumer,home and lifestyle"/></div>
                    <div className="uk-margin"><MyLink text="Lighting"/></div>
                    <div className="uk-margin"><MyLink text="Medical"/></div>
                    <div className="uk-margin"><MyLink text="Communications"/></div>
                </div>
                <div className="uk-flex-column uk-width-1-2@m uk-width-1-5@l uk-margin-medium-top">
                    <div className="uk-margin"><MyLink text="Build-to-design"/></div>
                    <div className="uk-margin"><MyLink text="Design and development"/></div>
                    <div className="uk-margin"><MyLink text="Product Industrialisation"/></div>
                    <div className="uk-margin"><MyLink text="Manufacturing"/></div>
                    <div className="uk-margin"><MyLink text="Supply chain management"/></div>
                </div>
                
                <div className="uk-flex-column uk-width-1-2@m uk-width-2-5@l uk-margin-medium-top ">
                    <div className="uk-margin">Subscribe to our newsletter</div>
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <a className="uk-form-icon uk-form-icon-flip" href="#" onClick={()=>alert(JSON.stringify(null,2))}><span style={{border:'1px solid grey',borderRadius:20,height:20,width:20}}  uk-icon="icon: arrow-right"> </span></a>
                            <input className="uk-input " type="text" placeholder="E-mail" style={{ borderRadius: 5, color: '#000', }} />
                        </div>
                    </div>
                    <div className="uk-margin-large-top">  Connect with us</div>
                    <div className="uk-margin" style={{cursor:'pointer'}}>
                    <span uk-icon="icon: facebook;ratio: 1.5"  ></span>
                    <span uk-icon="icon: instagram;ratio: 1.5" className="uk-margin-medium-left"></span>
                    <span uk-icon="icon: youtube;ratio: 1.7" className="uk-margin-medium-left"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;