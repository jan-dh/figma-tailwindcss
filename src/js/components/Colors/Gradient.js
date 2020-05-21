import React from 'react';

function Gradient(color) {
    // Return
    return (
        <div className="flex mt-4 justify-start items-center">
            <div style={{ backgroundColor: color.hex }} className={`color shadow`}></div>
            <div>{ color.hex }</div>
        </div>
    );
}

export default Gradient;
