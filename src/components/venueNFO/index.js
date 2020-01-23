import React from 'react';
import Zoom from 'react-reveal/Zoom'





const VenueNfo = () => {
    return(
        <div className="bck_black">
          <div className="center_wrapper">
            <div className="vn_wrapper">
                <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon"></div>
                                    <div className="vn_title">
                                        Event Date & Time
                            </div>
                                    <div className="vn_desc">
                                        25 October 2019
                                        @12.00 pm
                            </div>
                                </div>
                            </div>
                        </div>
                </Zoom>
                
               <Zoom duration={500} delay={500}>
               <div className="vn_item">
                    <div className="vn_outer">
                        <div className="vn_inner">
                            <div className="vn_icon_square bck_yellow"></div>
                            <div className="vn_icon"></div>
                            <div className="vn_title">
                                Event Location
                            </div>
                            <div className="vn_desc">
                                P.O.Box C.A.C Chapel of Peace
                            </div>
                        </div>
                    </div>

                </div>
               </Zoom>
              

            </div>
          </div>
        </div>
    )
}
export default VenueNfo;