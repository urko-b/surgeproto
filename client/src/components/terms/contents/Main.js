import React from 'react'

import { Link } from 'react-router-dom'

function Main() {
    return (
        <div>
            <div id="intro" className="mb-4">
                <div className="border-bottom pb-5 mb-5">
                    <h1 className="text-primary font-weight-light"><span className="font-weight-bold">Olink</span> Terms &amp; conditions</h1>
                    <p className="mb-0">Effective date: 1 January 2020</p>
                </div>
                <div className="mb-3">
                    <h2 className="h5">Welcome to Olink</h2>
                </div>
                <p>Thanks for using our products and services ("Services"). The Services are provided by Pixeel Ltd. ("Olink"), located at 153 Williamson Plaza, Maggieberg, MT 09514, England, United Kingdom.
                </p>
                <p>By using our Services, you are agreeing to these terms. Please read them carefully.</p>
                <p>Our Services are very diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional terms will be available with the relevant Services, and those additional terms become part of your agreement with us if you use those Services.</p>
            </div>
            <div id="services" className="mb-4">
                <div className="mb-3">
                    <h3 className="h5">1. Using our services</h3>
                </div>
                <p>You must follow any policies made available to you within the Services.</p>
                <p>Don't misuse our Services. For example, don't interfere with our Services or try to access them using a method other than the interface and the instructions that we provide. You may use our Services only as permitted by law, including applicable export and re-export control laws and regulations. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.</p>
                <p>Using our Services does not give you ownership of any intellectual property rights in our Services or the content you access. You may not use content from our Services unless you obtain permission from its owner or are otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our Services. Don't remove, obscure, or alter any legal notices displayed in or along with our Services.</p>
                <div id="personal-data" className="mb-3 active">
                    <h4 className="h6">A. Personal Data that we collect about you.</h4>
                </div>
                <p>Personal Data is any information that relates to an identified or identifiable individual. The Personal Data that you provide directly to us through our Sites will be apparent from the context in which you provide the data. In particular:</p>
                <ul className="text-secondary">
                    <li className="pb-2">When you register for a Olink account we collect your full name, email address, and account log-in credentials.</li>
                    <li className="pb-2">When you fill-in our online form to contact our sales team, we collect your full name, work email, country, and anything else you tell us about your project, needs and timeline.</li>
                    <li className="pb-2">When you use the "Remember Me" feature of Olink Checkout, we collect your email address, payment card number, CVC code and expiration date.</li>
                </ul>
                <p>When you respond to Olink emails or surveys we collect your email address, name and any other information you choose to include in the body of your email or responses. If you contact us by phone, we will collect the phone number you use to call Olink. If you contact us by phone as a Olink User, we may collect additional information in order to verify your identity.</p>
                <div id="information" className="mb-3 active">
                    <h4 className="h6">B. Information that we collect automatically on our Sites.</h4>
                </div>
                <p>We also may collect information about your online activities on websites and connected devices over time and across third-party websites, devices, apps and other online features and services. We use Google Analytics on our Sites to help us analyze Your use of our Sites and diagnose technical issues.</p>
                <p>To learn more about the cookies that may be served through our Sites and how You can control our use of cookies and third-party analytics, please see our Cookie Policy.</p>
            </div>
            <div id="privacy" className="mb-4">
                <div className="mb-3">
                    <h3 className="h5">2. Privacy and copyright protection</h3>
                </div>
                <p>Olink's privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Olink can use such data in accordance with our privacy policies.</p>
                <p>We respond to notices of alleged copyright infringement and terminate accounts of repeat infringers according to the process set out in the U.S. Digital Millennium Copyright Act.</p>
                <p>We provide information to help copyright holders manage their intellectual property online. If you think somebody is violating your copyrights and want to notify us, you can find information about submitting notices and Olink's policy about responding to notices in <Link to="help.html">our Help Center</Link>.</p>
            </div>
            <div id="yourContent" className="active">
                <div className="mb-3">
                    <h3 className="h5">3. Your content in our services</h3>
                </div>
                <p>Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.</p>
                <p>When you upload, submit, store, send or receive content to or through our Services, you give Olink (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works (such as those resulting from translations, adaptations or other changes we make so that your content works better with our Services), communicate, publish, publicly perform, publicly display and distribute such content. The rights you grant in this license are for the limited purpose of operating, promoting, and improving our Services, and to develop new ones. This license continues even if you stop using our Services (for example, for a business listing you have added to Olink Maps). Some Services may offer you ways to access and remove content that has been provided to that Service. Also, in some of our Services, there are terms or settings that narrow the scope of our use of the content submitted in those Services. Make sure you have the necessary rights to grant us this license for any content that you submit to our Services.</p>
            </div>
        </div>);
}

export default Main;