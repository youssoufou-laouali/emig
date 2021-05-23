import React, {useEffect} from 'react'
import M from "materialize-css";

const Slider = () => {

useEffect(() => {
    let elems = document.querySelectorAll('.slider');
    M.Slider.init(elems, {indicators: false});
}, [])

    return (
        <div className="slider" style={{marginTop: 65}}>
        <ul className="slides">
          <li>
            <img src="https://cdn.pixabay.com/photo/2017/03/13/13/18/crocus-2139771_960_720.jpg" alt='alt' /> 
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="https://cdn.pixabay.com/photo/2017/03/15/09/00/crocus-2145539__340.jpg" alt='alt' /> 
            <div className="caption left-align">
              <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="https://cdn.pixabay.com/photo/2016/05/15/15/12/hepatica-1393813__340.jpg" alt='alt'/> 
            <div className="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="https://cdn.pixabay.com/photo/2017/03/15/15/34/crocus-2146535__340.jpg" alt='alt'/> 
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
        </ul>
      </div>
    )
}

export default Slider
