import React from 'react'
import Mybtn from '../../common/Mybtn'
import MyLink from '../../common/MyLink'
import useWindowDimensions from '../../helper/window'


const Navbar = props => {
    const { width } = useWindowDimensions();
    return (
        <div className="uk-position-relative " >
            <div className="uk-cover-container uk-height-large uk-background-cover uk-background-blend-overlay" style={{ backgroundImage: `url(${"images/tech4-6.jpg"})` }} />
            {/* <div className="uk-card uk-card-default uk-card-body " style={{zIndex: 980}} uk-sticky="bottom: #offset">Stick 100px below the top</div> */}
            <div className="uk-position-top" uk-sticky>
           
                <nav className="uk-container uk-navbar uk-navbar-transparent uk-flex uk-flex-between uk-flex-wrap" uk-navbar="mode: click"  >
                    <div className="uk-navbar-item" >
                        <a className="uk-logo" href="#">
                            <img src="images/logo.png" alt="logo" className="uk-img" width="120px" />
                        </a>
                    </div>
                    {width < 1085 ?
                        <div className="uk-navbar-item " >
                            <div style={{ border: '2px solid #fff', borderRadius: 3, padding: 10 }}>
                                <span uk-icon="icon: menu;ratio:1.5" style={{ color: '#fff' }}></span>
                            </div>
                            <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000" style={{ backgroundColor: '#0D5670', borderRadius: 5 }}>
                                <ul className="uk-nav uk-dropdown-nav " style={{ fontSize: '1rem' }}>
                                    <li><MyLink text="About Us" /></li>
                                    <li className="uk-nav-divider uk-margin-small-top"><MyLink text="Expertise" /></li>
                                    <li className="uk-nav-divider uk-margin-small-top"><MyLink text="Design-To-Build" /></li>
                                    <li className="uk-nav-divider uk-margin-small-top"><MyLink text="Carrers" /></li>
                                    <li className="uk-nav-divider uk-margin-small-top"><MyLink text="Resources" /></li>
                                    <li className="uk-margin-small-top"><Mybtn text="Contact Us" size="small" /></li>
                                </ul>
                            </div>
                        </div>
                        :
                        //desktop view
                        <div className="uk-navbar-item ">
                            <ul className="uk-navbar-nav ">
                                <li><a href="#" style={{ color: '#fff', textTransform: 'none', fontSize: '1.2rem' }}>About Us</a></li>
                                <li><a href="#" style={{ color: '#fff', textTransform: 'none', fontSize: '1.2rem' }}>Expertise</a></li>
                                <li><a href="#" style={{ color: '#fff', textTransform: 'none', fontSize: '1.2rem' }}>Design-To-Build</a></li>
                                <li><a href="#" style={{ color: '#fff', textTransform: 'none', fontSize: '1.2rem' }}>Carrers</a></li>
                                <li><a href="#" style={{ color: '#fff', textTransform: 'none', fontSize: '1.2rem' }}>Resources</a></li>
                                <li><a href="#"><Mybtn text="Contact Us" size="large" /></a></li>
                            </ul>
                        </div>
                    }
                </nav>

                <div className="uk-container uk-text-lead uk-text-italic uk-text-left " style={{ color: '#fff',}}>
                    <div style={{fontSize: `${width < 414 ? '1.4rem' : '1.8em'}` }} className="uk-text-bolder uk-margin-medium-top">Aztech At <br />the Forefront.</div><br />
                    <div style={{fontSize: `${width < 414 ? '1rem' : '1.4rem'}`}}>On the up.</div>
                </div>



            </div>

        </div >

    );
}

export default Navbar;
