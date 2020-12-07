import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div id="contact">
                <div className="title">
                    <div className="container">
                        <section className="cbp-so-section">
                            <div className="sixteen columns cbp-so-side cbp-so-side-left">
                                <h1><strong><span>LET'S</span></strong></h1>
                                <div className="angle"><h1><strong>HAVE A CHAT</strong></h1></div><div className="line-vert" />
                            </div>
                            <div className="sixteen columns cbp-so-side cbp-so-side-right">
                                <h6><span>WE CAN HELP YOU</span> PROMOTE YOUR BUSINESS</h6>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="background-pat">
                    <div className="container">
                        <section className="cbp-so-section">
                            <div className="sixteen columns cbp-so-side cbp-so-side-right">
                                <form name="ajax-form" id="ajax-form" action="http://ivang-design.com/apollo/style4/mail-it.php" method="post">
                                    <h4>Say Hello</h4>
                                    <label htmlFor="name">Name: *
                  <span className="error" id="err-name">please enter name</span>
                                    </label>
                                    <input name="name" id="name" type="text" />
                                    <label htmlFor="email">E-Mail: *
                  <span className="error" id="err-email">please enter e-mail</span>
                                        <span className="error" id="err-emailvld">e-mail is not a valid format</span>
                                    </label>
                                    <input name="email" id="email" type="text" />
                                    <label htmlFor="message">Message:</label>
                                    <textarea name="message" id="message" defaultValue={""} />
                                    <button className="send_message" id="send">Submit</button>
                                    <div className="error" id="err-form">There was a problem validating the form please check!</div>
                                    <div className="error" id="err-timedout">The connection to the server timed out!</div>
                                    <div className="error" id="err-state" />
                                </form>
                                <div id="ajaxsuccess">Successfully sent!!</div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="background-pat1-last">
                    <div className="contact-info">
                        <div className="container">
                            <section className="cbp-so-section">
                                <div className="one-third column cbp-so-side cbp-so-side-left1">
                                    <h5>Address:</h5>
                                    <p>Home and Office: Brace Spasojevic 27, Trstenik,
                  Serbia</p>
                                </div>
                                <div className="one-third column cbp-so-side cbp-so-side-left">
                                    <h5>Phone:</h5>
                                    <p>Support: +381 (100) 1234 (09am - 05pm)</p>
                                    <p>Director: +381 (100) 1243 (08am - 06pm)</p>
                                </div>
                                <div className="one-third column cbp-so-side cbp-so-side-right">
                                    <h5>Email:</h5>
                                    <p>Support: <a href="mailto:support@example.com" title="mailto:support@example.com">support@example.com</a></p>
                                    <p>Director: <a href="mailto:chief@example.com" title="mailto:chief@example.com">chief@example.com</a></p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
