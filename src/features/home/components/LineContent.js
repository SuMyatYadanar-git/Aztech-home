import React from 'react'
import Fade from 'react-reveal/Fade'
import Mybtn from '../../../common/Mybtn'

const LineContent = props => {
    const { width } = props
    return (
        <div className="uk-container ">
            <Fade >
                <div className="uk-padding ">
                    <div className=" uk-text-bolder uk-text-italic uk-text-emphasis uk-text-center uk-margin-small-top" style={{ fontSize: `${width < 414 ? '1.4rem' : '1.8em'}` }}>
                        <span >Creating value. Designing success.</span>
                    </div>
                    <div className="uk-text-secondary  uk-width-4-5@l uk-text-left uk-margin-small-top uk-margin-auto" style={{ fontSize: `${width < 414 ? '1rem' : '1.4rem'}` }}>
                        <p>Our holistic, one-stop design-to-build manufacturing services help us create value for our clients, seamlessly, at every stage, from start to end.Our services include design and development,produce industrialization, manufacturing and supply chain management.</p>
                    </div>
                    <div className="uk-grid uk-grid-medium uk-text-italic uk-text-bolder uk-text-emphasis uk-text-large uk-text-center uk-padding-small uk-margin-medium-bottom" style={{ fontSize: `${width < 414 ? '1.2rem' : '1.4rem'}` }}>
                        <div className="uk-width-1-2@m uk-width-1-4@l">
                            <ContentInfo img="images/design.png" title="DESIGN AND DEVELOPMENT" />
                        </div>
                        <div className="uk-width-1-2@m uk-width-1-4@l">
                            <ContentInfo img="images/product.png" title="PRODUCT INDUSTRIALISATION" />
                        </div>
                        <div className="uk-width-1-2@m uk-width-1-4@l">
                            <ContentInfo img="images/manufacture.png" title="MANUFACTURING" />
                        </div>
                        <div className="uk-width-1-2@m uk-width-1-4@l">
                            <ContentInfo img="images/chain.png" title="SUPPLY CHAIN MANAGEMENT" />
                        </div>
                    </div>
                    <div className="uk-width-1-3@m uk-width-1-4@l uk-margin-auto"> <Mybtn text="See How It's Done" size={`${width > 330 ? 'large' : 'medium'}`} style={{ fontSize: '1rem' }} /></div>
                </div>
            </Fade>
        </div>
    )
}
const ContentInfo = ({ img, title }) => {
    return (
        <div>
            <div className="uk-margin-small"><img src={img} alt="design" className="uk-img" /> </div>
            <div className="uk-margin-small uk-text-uppercase" >{title}</div>
        </div>
    )
}
export default LineContent;