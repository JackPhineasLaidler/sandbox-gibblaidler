import Link from 'next/link';

const terms = () => {
    return (
        <div className="stripe">
            <div className="stripe__inner">
            <h1>Terms & Conditions</h1>
                <h2 className="heading--medium">1. Introduction</h2>
                <ol type="A">
                    <li>This site (<Link href="/">www.GibbsLaidler.co.uk</Link>) is owned by Gibbs Laidler Consulting LLP. This page sets out the terms and conditions under which visitors can use this site. </li>
                    <li>The words &#39;we&#39;, &#39;us&#39; or &#39;our&#39; refer to Gibbs Laidler. The term “site” refers to <Link href='/'><a>www.GibbsLaidler.co.uk</a></Link>. </li>
                    <li>Gibbs Laidler is a trading name of Gibbs Laidler Consulting LLP. Gibbs Laidler Consulting LLP is directly authorized and regulated by the Financial Conduct Authority (FCA), under registration 489233. You can verify our status by visiting the FCA website www.fca.org.uk or by telephoning them on 0800 111 6768.</li>
                    <li><strong>Through the utilization of this site, you confirm that you have read, understood, and, therefore, agree to these terms. If you are unable or unwilling to agree to or act by these terms, your access to this site will be suspended.</strong></li>
                </ol>

                <h2 className="heading--medium">2. Site access</h2>
                <ol type="A">
                    <li>You may access the content on this site for both professional and personal use in accordance with the restrictions set out within these terms and conditions and UK law.</li>
                    <li>If you choose to access this site from outside the UK, you must adhere to local laws associated with site use if relevant.</li>
                    <li>Our services are not targeted towards individuals under the age of 18. If you are under 18, please leave this site.</li>
                    <li>You may not represent yourself as someone else, nor pretend to represent any other business or entity.</li>
                    <li>We intend to ensure this site is as accessible as possible. If you are having issues using the site, please contact <a href="mailto:info@gibbslaidler.co.uk">info@gibbslaidler.co.uk</a>.</li>
                    <li>You shall not access, copy, or monitor any part of this site that has not been made available to you intentionally by Gibbs Laidler LLP.</li>
                </ol>

                <h2 className="heading--medium">3. Our services</h2>
                <ol type="A">
                    <li>This site has been created to enable visitors to view the services that Gibbs Laidler offers, provide contact information for staff members of Gibbs Laidler, as well as notify users of upcoming events. </li>
                    <li>The services Gibbs Laidler offers are not conducted through this site and the content shown is for informational purposes only.</li>
                    <li>Gibbs Laidler is not liable for any damages associated with the use of, or the inability to use this site. These potential damages include loss of goodwill, profits, use, data, business, contracts, savings, personal injury, or any other intangible, or tangible losses. </li>
                    <li>Gibbs Laidler LLP is also not liable for any mistakes, errors, or inaccuracies of content and we are able to update and change the content on our site freely and without notice. </li>
                    <li>Gibbs Laidler LLP is able to make adaptations to these terms and conditions without notifying visitors. We recommend periodically checking this page for changes. If you do not accept these, or any future terms, do not continue to access this site.</li>
                </ol>

                <h2 className="heading--medium">4. Intellectual property rights</h2>
                <ol type="A">
                    <li>All copyright, intellectual property rights, database rights, trademarks, and other material on this site is and remains the property of Gibbs Laidler LLP. </li>
                    <li>You may not copy or use any images, photos, logos, text, or illustrations that exist on this site without written permission from Gibbs Laidler LLP.</li>
                </ol>

                <h2 className="heading--medium">5. Indemnity</h2>
                <ol type="A">
                    <li>You agree to indemnify Gibbs Laidler LLP, keeping us free from any losses, liabilities, fees (including legal fees), or expenses as a result of, or connection with your use of this site, or any services offered by this site.</li>
                </ol>

                <h2 className="heading--medium">6. Complaints</h2>
                <ol type="A">
                    <li>To raise a complaint, please contact us in the first instance, using the contact details above. All persons about whom we hold or process personal data (data subjects) also have the right to lodge a complaint with the Information Commissioner in respect of our processing of their personal data. Information can be found at <a href="https://ico.org.uk/your-data-matters/">https://ico.org.uk/your-data-matters/</a></li>
                </ol>

                <h2 className="heading--medium">7. Your privacy</h2>
                <ol type="A">
                    <li>For details pertaining to your privacy, please visit our <Link href="'/privacy'"><a>privacy policy</a></Link> page.</li>
                </ol>

                <h2 className="heading--medium">8. Hyperlinks</h2>
                <ol type="A">
                    <li>This site contains links to third-party websites in the form of hyperlinks. These links have been provided for your convenience and Gibbs Laidler LLP has no legal responsibility for any third-party website or its content. </li>
                    <li>Links to third-party websites are not an endorsement for the website, website owner, or for their services. </li>
                    <li>If you are a third-party company wishing to hyperlink to our website, you must inform us via <a href="mailto:info@gibbslaidler.co.uk">info@gibbslaidler.co.uk</a> with your business name, a URL to your website, contact information, and intent. </li>
                </ol>

                <h2 className="heading--medium">9. Contact information</h2>
                <ol type="A">
                    <li>You are able to contact us regarding any of these terms and conditions via <a href="mailto:info@gibbslaidler.co.uk">info@gibbslaidler.co.uk</a>.</li>
                </ol>

            </div>
        </div>
    )
}

export default terms;