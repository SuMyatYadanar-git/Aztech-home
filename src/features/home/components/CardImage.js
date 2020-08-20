import React from 'react'

const CardImage = props => {
    const { img, title, width } = props

    return (
        <div className=" uk-flex uk-flex-column uk-flex-center uk-flex-wrap " >
            <div className="uk-card uk-inliine uk-height-1-1">
                <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                    <img class="uk-transition-scale-up uk-transition-opaque" src={img} alt="scale-img" />
                </div>
                <div className="uk-card-body uk-height-1-1 uk-padding-medium" style={{ backgroundColor: '#0D5670', color: '#fff', fontSize: `${width < 414 ? '1.2rem' : '1.4rem'}` }}>
                    <span className=" uk-text-italic uk-text-bolder uk-text-uppercase uk-text-left">{title}</span>
                    <div className="uk-flex uk-flex-right uk-flex-center uk-margin-top-medium">
                        <span style={{ border: '1px solid #4FC1A5', borderRadius: 30, height: 30, width: 30, cursor: 'pointer', color: '#4FC1A5' }}
                            uk-icon="icon: arrow-right;ratio:2" >
                        </span> </div>
                </div>
            </div>
        </div>
    )
}
export default CardImage;