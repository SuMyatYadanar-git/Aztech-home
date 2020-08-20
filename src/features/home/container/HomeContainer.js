import React from 'react'
import useWindowDimensions from '../../../helper/window'

import Navbar from '../../app/Navbar'
import PreContent from '../components/PreContent'
import SmartSolution from '../components/SmartSolution'
import GetInTouch from '../components/GetInTouch'
import Footer from '../../app/Footer'
import MapMaker from '../components/MapMaker'
import LineContent from '../components/LineContent'


const HomeContainer = props => {
    const { width } = useWindowDimensions();
    return (
        <div className="uk-width-* " >
            <Navbar />
            
            <PreContent width={width} />
            <SmartSolution width={width} />
            <LineContent width={width} />
            <MapMaker />
            <GetInTouch width={width} />

            <Footer />
        </div>
    )
}
export default HomeContainer;