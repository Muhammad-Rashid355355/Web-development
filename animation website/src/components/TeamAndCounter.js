import React from 'react'

const TeamAndCounter = () => {
    return (
        <div>
            <div id="team">
                <div className="title">
                    <div className="container">
                        <section className="cbp-so-section">
                            <div className="sixteen columns cbp-so-side cbp-so-side-left">
                                <h1><strong><span>Who's</span></strong></h1>
                                <div className="angle"><h1><strong>Behind Apollo?</strong></h1></div><div className="line-vert" />
                            </div>
                            <div className="sixteen columns cbp-so-side cbp-so-side-right">
                                <h6>We design <span>websites</span>, <span>applications</span>, <span>logo's</span> and other awesome digital media</h6>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="background-pat">
                    <div className="container">
                        <section className="cbp-so-section">
                            <div className="eight columns cbp-so-side cbp-so-side-left">
                                <div className="team1"><div className="team-name"><h6>Robert Doe</h6></div></div>
                            </div>
                            <div className="eight columns cbp-so-side cbp-so-side-right">
                                <div className="team2"><div className="team-name"><h6>Caroline Smith</h6></div></div>
                            </div>
                        </section>
                    </div>
                    <div className="container">
                        <section className="cbp-so-section">
                            <div className="eight columns team-list cbp-so-side cbp-so-side-left">
                                <h5>Head of Development</h5>
                                <ul className="list-team">
                                    <li className="check"><p>Brand Design</p></li>
                                    <li className="check"><p>Visual Identity</p></li>
                                    <li className="check"><p>Product Design</p></li>
                                    <li className="check"><p>Illustrations</p></li>
                                    <li className="check"><p>Brand Action</p></li>
                                </ul>
                                <div className="cl-effect-18-team">
                                    <a href="#" data-hover="facebook">facebook</a>
                                    <a href="#" data-hover="Twitter">Twitter</a>
                                    <a href="#" data-hover="Instagram">Instagram</a>
                                </div>
                            </div>
                            <div className="eight columns team-list cbp-so-side cbp-so-side-right">
                                <h5>Client Service Director</h5>
                                <ul className="list-team">
                                    <li className="check"><p>Interactive Experience</p></li>
                                    <li className="check"><p>User Interface</p></li>
                                    <li className="check"><p>Search Engine Marketing</p></li>
                                    <li className="check"><p>Social Media</p></li>
                                    <li className="check"><p>Digital Installations</p></li>
                                </ul>
                                <div className="cl-effect-18-team">
                                    <a href="#" data-hover="Twitter">Twitter</a>
                                    <a href="#" data-hover="Google+">Google+</a>
                                    <a href="#" data-hover="Linkedin">Linkedin</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>




                {/* <div class="grey-bg c-no container-fluid">
                        <div class="container">
                            <div class="row" id="counter">
                                <div class="col-sm-4 counter-Txt"> Customers <span class="counter-value" data-count="100">0</span> Million</div>
                                <div class="col-sm-4 counter-Txt"> Product <span class="counter-value" data-count="205">0</span> Thousand</div>
                                <div class="col-sm-4 counter-Txt margin-bot-35"> Team <span class="counter-value" data-count="450">0</span> Peoples</div>
                            </div>
                        </div>
                    </div> */}


                <div className="background-pat1-last">
                    <div className="container">
                        <section className="cbp-so-section" id="counter">
                            <h4>Team skills</h4>
                            {/* <div className="sixteen columns cbp-so-side cbp-so-side-left counter-value" data-count="100">0</div> */}
                            <div className="sixteen columns cbp-so-side cbp-so-side-right">
                                <p>Consectetur est quis mauris accumsan eleifend sit amet non neq. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur est quis mauris accumsan eleifend sit amet non neq. Vivamus vitae purus eros, nec ullamcorper risus.</p>
                            </div>
                            <div className="four columns cbp-so-side cbp-so-side-left1">
                                <h5>PHP</h5>
                                <div className="bar" id="counter">
                                    <h4 className="counter-value" data-count="200">0</h4>
                                </div>
                            </div>
                            <div className="four columns cbp-so-side cbp-so-side-left">
                                <h5>CSS3</h5>
                                <div className="bar" id="counter">
                                    <h4 className="counter-value" data-count="340">0</h4>
                                </div>
                            </div>
                            <div className="four columns cbp-so-side cbp-so-side-right">
                                <h5>HTML5</h5>
                                <div className="bar" id="counter">
                                    <h4 className="counter-value" data-count="520">0</h4>
                                </div>
                            </div>
                            <div className="four columns cbp-so-side cbp-so-side-right1">
                                <h5>JQUERY</h5>
                                {/* <div className="bar"> */}
                                <div className="bar" id="counter">
                                    <h4 className="counter-value" data-count="740">0</h4>
                                    {/* </div> */}
                                    {/* <input className="knob" data-width={172} data-skin="tron" data-fgcolor="#ffffff" data-thickness=".05" data-readonly="true" defaultValue={87} /> */}
                                    {/* <input className="knob" data-width={172} data-skin="tron" data-fgcolor="#ffffff" data-thickness=".05" data-readonly="true" defaultValue={87} /> */}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamAndCounter
