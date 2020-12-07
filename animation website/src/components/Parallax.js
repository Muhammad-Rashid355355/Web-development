import React from 'react'

const Parallax = () => {
    return (
        <div>
            <div id="parallax-2" className="parallax" style={{ backgroundImage: 'url(images/parallax-2.jpg)' }}>
                <div className="parallax-wrap">
                    <div className="container">
                        <div className="sixteen columns">
                            <h5><span>Client Testimonials</span></h5>
                        </div>
                        <div className="sixteen columns">
                            <div className="slider1">
                                <div className="slide">
                                    <div className="testimonial">
                                        <h6>Duis in nibh id lorem pulvinar adipiscing. Nulla odio elit, rutrum at convallis in, rhoncus ac urna. Curabitur justo urna, congue quis volutpat sed.</h6>
                                        <p>Sarah, GraphicRiver</p>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="testimonial">
                                        <h6>Curabitur justo urna, congue quis volutpat sed. Duis in nibh id lorem pulvinar adipiscing. Nulla odio elit, rutrum at convallis in, rhoncus ac urna.</h6>
                                        <p>John Doe, ThemeForest</p>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="testimonial">
                                        <h6>Nulla odio elit, rutrum at convallis in, rhoncus ac urna. Curabitur justo urna, congue quis volutpat sed. Duis in nibh id lorem pulvinar adipiscing.</h6>
                                        <p>Mike Smith, CodeCanyon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clouds" />
                </div>
            </div>
        </div>
    )
}

export default Parallax
