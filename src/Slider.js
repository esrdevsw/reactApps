// import React, { useState } from 'react';
// import './style-Slider.css';


// const Slider = ({ handleSliderChange, sliderValue }) => {
//     const [value, setValue] = useState(sliderValue);

//     const handleChange = (event) => {
//         setValue(event.target.value);
//         handleSliderChange(event.target.value);
//     };

//     return (
//         <div className="slider-container">
//             <input
//                 type="range"
//                 min={0}
//                 max={10}
//                 step="0.1"
//                 value={value}
//                 className="slider"
//                 onChange={handleChange}
//             />
//             <span className="slider-value">{value}</span>
//         </div>
//     );
// };


// export default Slider;

import React, { useState } from 'react';
import './style-Slider.css';

function Slider() {
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = event => {
        setSliderValue(event.target.value);
    };

    const renderEmoji = value => {
        if (value >= 0 && value < 2.5) {
            return '😔';
        } else if (value >= 2.5 && value < 5) {
            return '😐';
        } else if (value >= 5 && value < 7.5) {
            return '😊';
        } else if (value >= 7.5 && value <= 10) {
            return '😁';
        }
    };


    return (
        <div className="slider-container">

            <input
                type="range"
                min="0"
                max="10"
                step="0.01"
                value={sliderValue}
                onChange={handleSliderChange}
            />
            <p className='emoji'>{renderEmoji(sliderValue)}  </p>

            <span className="value-display">{sliderValue}</span>
        </div>
    );
}

export default Slider;
