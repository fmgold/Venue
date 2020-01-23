import React from 'react'

const Location = () => {
    return(
        <div className="location_wrapper">
            <iframe
                src="http://www.google.com"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
        </div>
    )
}
export default Location;