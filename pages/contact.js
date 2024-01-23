import { useState, useRef } from "react";
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const form = useRef();
    const captchaRef = useRef();

    const [fieldErrors, setFieldErrors] = useState([]);
    const [optionSelected, setOptionSelected] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [emailDeclined, setEmailDeclined] = useState(false);
    const [serverIssue, setServerIssue] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const [ subject, housing, first, last, email, phone, message] = e.target.elements;

        const errors = [];

        if (!subject.value || optionSelected === false) {
            errors.push('contact-subject');
        }
        if (first.value.trim() === '') {
            errors.push('contact-first');
        }
        if (last.value.trim() === '') {
            errors.push('contact-last');
        }
        if (phone.value.trim() === '') {
            errors.push('contact-phone');
        }
        if (housing.value.trim() === '') {
            errors.push('contact-ha');
        }
        const re = /.+@.+\..+/
        if (!re.test(email.value) || email.value.trim() === '') {
            errors.push('contact-email');
        }

        if (message.value.trim() === '') {
            errors.push('contact-message');
        }

        if (errors.length) {
            return setFieldErrors(errors);
        } else {
            checkIfHuman(e);
        }
    }


    const handleChange = (e) => {
        if (e.target.id === 'contact-subject' && optionSelected === false) {
            setOptionSelected(true);
        }

        const index = fieldErrors.indexOf(e.target.id);
        if (index === -1) return;

        const filteredErrors = fieldErrors.filter(item => item !== e.target.id);
        setFieldErrors(filteredErrors);
    }



    const submitForm = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zk2udes', 'template_2kuejcb', form.current, 'xYUHKpRrQ00yPuVHG')
        .then((result) => {
            setEmailSent(true);
            setIsLoading(false);
        }, (error) => {
            setServerIssue(true);
        });

    }

    const checkIfHuman = async (e) =>{

        setIsLoading(true);

        const token = await captchaRef.current.executeAsync();
        captchaRef.current.reset();
        if (token) {
            try {
                const response = await fetch("https://www.gibbslaidler.co.uk/api/auth", {
                // const response = await fetch("http://localhost:3000/api/auth", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token,
                    }),
                })
                .then((res) => res.json())
                .then((res) => {
                    if (res.recaptchaJson.success) {
                        submitForm(e);
                    } else {
                        setEmailDeclined(true)
                    }
                });
            } catch (error) {
                setEmailDeclined(true)
            }
        } 
    }
    

    return (
        <div className="stripe">
            <div className="stripe__inner container container--flexed container--flexed-desktop">
                <div className="contact-form">
                    <h1>Contact Form</h1>
                    <p>Fill in the below form and our team will get back to you as soon as possible, or contact our office directly on <a href="tel:01959562242">01959 562242</a> or via <a href="mailto:info@gibbslaidler.co.uk">info@gibbslaidler.co.uk</a>.</p>
                    <form ref={form} className={emailSent || emailDeclined || serverIssue ? 'hidden' : null} onSubmit={handleSubmit} id="GL-contact-form">
                        <div className="form-group">
                            <div className={fieldErrors.length && fieldErrors.includes('contact-subject') ? "input-field input-field--error" : "input-field"}>
                                <label htmlFor="contact-subject">How can we help?</label>
                                <div className="error-message">
                                    <div>Please provide a subject</div>
                                </div>
                                <select onChange={handleChange} type="text" data-is-selected={optionSelected} name="contact-subject" id="contact-subject" aria-invalid={fieldErrors.includes('contact-subject')}>
                                    <option value="" hidden={true}>--Choose an option--</option>
                                    <option value="general enquiries">General Enquiries</option>
                                    <option value="annual conference">Annual Conference</option>
                                    <option value="strategic direction">Strategic direction</option>
                                    <option value="tender management service">Tender Management Service</option>
                                    <option value="section-20">Section 20</option>
                                    <option value="Complaints">Complaints</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className={fieldErrors.length && fieldErrors.includes('contact-ha') ? "input-field input-field--error" : "input-field"}>
                                <label htmlFor="contact-ha">Housing Association</label>
                                <div className="error-message">
                                    <div>Enter the HA you work for</div>
                                </div>
                                <input onChange={handleChange} autoComplete="false" type="text" name="contact-ha" id="contact-ha" placeholder="Housing Association" aria-invalid={fieldErrors.includes('contact-ha')}></input>
                            </div>

                            <div className={fieldErrors.length && fieldErrors.includes('contact-first') ? "input-field input-field--error" : "input-field"}>
                                <label htmlFor="contact-first">First Name</label>
                                <div className="error-message">
                                    <div>Please enter your first name</div>
                                </div>
                                <input onChange={handleChange} autoComplete="false" type="text" name="contact-first" id="contact-first" placeholder="First Name" aria-invalid={fieldErrors.includes('contact-first')}></input>
                            </div>

                            <div className={fieldErrors.length && fieldErrors.includes('contact-last') ? "input-field input-field--error" : "input-field"}>
                                <label htmlFor="contact-last">Last Name</label>
                                <div className="error-message">
                                    <div>Please enter your surname</div>
                                </div>
                                <input onChange={handleChange} autoComplete="false" type="text" name="contact-last" id="contact-last" placeholder="Last Name" aria-invalid={fieldErrors.includes('contact-last')}></input>
                            </div>

                            <div className={fieldErrors.length && fieldErrors.includes('contact-email') ? "input-field input-field--error" : "input-field"}>
                                <label htmlFor="contact-email">Email Address</label>
                                <div className="error-message">
                                    <div>Invalid email address </div>
                                </div>
                                <input onChange={handleChange} type="text" name="contact-email" id="contact-email" placeholder="Name@company.com" aria-invalid={fieldErrors.includes('contact-email')}></input>
                            </div>

                            <div className={fieldErrors.length && fieldErrors.includes('contact-phone') ? "input-field input-field--error" : "input-field"}>
                                <label htmlFor="contact-phone" className="required">Phone Number</label>
                                <div className="error-message">
                                    <div>Enter your phone number</div>
                                </div>
                                <input onChange={handleChange} type="text" name="contact-phone" id="contact-phone" placeholder="07777 000 000" aria-invalid={fieldErrors.includes('contact-phone')}></input>
                            </div>

                            <div className={fieldErrors.length && fieldErrors.includes('contact-message') ? "input-field input-field--error" : "input-field"}>
                                <label htmlFor="contact-message">Your Message</label>
                                <div className="error-message">
                                    <div>Please enter a mesage</div>
                                </div>
                                <textarea onChange={handleChange} type="text" name="contact-message" id="contact-message" placeholder="Enter your message" rows="6" aria-invalid={fieldErrors.includes('contact-message')}></textarea>
                            </div>
                        </div>
                        <ReCAPTCHA
                            sitekey={process.env.APP_SECRET_KEY}
                            size="invisible"
                            ref={captchaRef}
                        />
                        <button type="submit" disabled={fieldErrors.length} className={isLoading ? 'bttn--loading bttn' : 'bttn'}><span>Submit form</span></button>
                    </form>

                    <div className={ emailSent ? 'contact-form__response' : 'contact-form__response hidden'}>
                        <h3>Thank you for your message.</h3>
                        <p>We will aim to respond to your query as soon as possible. If your request is urgent, you can contact our main office on <a href="tel:">01959562242</a>, or individual team members directly via their <Link href="/our-team"><a>team pages</a></Link>.
                        <br/><br/>Kind regards,
                        <br/>The Gibbs Laidler Team</p>
                    </div>

                    <div className={ emailDeclined ? 'contact-form__response' : 'contact-form__response hidden'}>
                        <h3>We have declined your email</h3>
                        <p>Our contact form thinks you&#39;re a bot! If this is a mistake, please refresh the page and retry, or you can contact our main office on <a href="tel:01959562242">01959562242</a>.
                        <br/><br/>Kind regards,
                        <br/>The Gibbs Laidler Team</p>
                    </div>

                    <div className={ serverIssue ? 'contact-form__response' : 'contact-form__response hidden'}>
                        <h3>There was an issue with the server</h3>
                        <p>We were unable to receive your message. Please contact our main office directly on <a href="tel:01959562242">01959562242</a>.
                        <br/><br/>Kind regards,
                        <br/>The Gibbs Laidler Team</p>
                    </div>
                </div>
                <div className="map__container">
                    <iframe className="map" title="Gibbs Laidler Address" src="https://maps.google.com/maps?q=gibbs%20laidler%20consulting&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;