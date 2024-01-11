/* eslint-disable react/no-unescaped-entities */
import "./Footer.css"
import A1 from '../../assets/images/1A.png';
import B1 from '../../assets/images/1B.png';
import A2 from '../../assets/images/2A.png';
import B2 from '../../assets/images/2B.png';
import A3 from '../../assets/images/3A.png';


function Footer() {
    return <>
        <div className="footer">
            <div className="footer-heading">
                <h2>Cash or card, you earn Stars</h2>
                <p>No matter how you pay, you can earn Stars with yout morning coffee. Those Stars add up
                    to (really delicious) Rewards
                </p>
            </div>
            <div className="footer-main">
                {/* First */}

                <div className="footer-title">
                    <h2>1<span className="footer-star">★</span> per dollar</h2>
                    <p>Pay as you go</p>
                </div>

                <div className="footer-feature">
                    <img src={A1} alt="Mobile with QR" className="footer-img" />
                    <div className="footer-feature-subsection">
                        <h4>Scan and Pay separately</h4>
                        <p>Use cash or credit/debit card at the register
                        </p>
                    </div>
                </div>

                <div className="footer-feature">
                    <img src={B1} alt="Mobile with QR" className="footer-img credit" />
                    <div className="footer-feature-subsection">
                        <h4>Save payment in the app</h4>
                        <p>Check-out faster by saving a credit/debit card or Paypalto your
                            account. You'll be able to order ahead or scan and pay at the register
                            in ont step.
                        </p>
                    </div>
                </div>


                {/* Second */}


                <div className="footer-title">
                    <h2>2<span className="footer-star">★</span> per dollar</h2>
                    <p>Add funds in the app</p>
                </div>

                <div className="footer-feature">
                    <img src={A2} alt="Mobile with QR" className="footer-img wide" />
                    <div className="footer-feature-subsection">
                        <h4>Preload</h4>
                        <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card usding any
                            paymeny option. Scan and pay in one step or order ahead in the app.
                        </p>
                    </div>
                </div>

                <div className="footer-feature">
                    <img src={B2} alt="Mobile with QR" className="footer-img wide" />
                    <div className="footer-feature-subsection">
                        <h4>Register your gift card</h4>
                        <p>Then use it to pay through the app.
                            You can even consolidate balances from multiple
                            cards in one place.
                        </p>
                    </div>
                </div>

                {/* Third */}

                <div className="footer-title">
                    <h2>3<span className="footer-star">★</span> per dollar</h2>
                    <p>With Starbucks Rewards <br /> Visa Card</p>
                </div>
                <div className="footer-feature">
                    <img src={A3} alt="Mobile with QR" className="footer-img wide" />
                    <div className="footer-feature-subsection">
                        <h4>Earn Stars even faster</h4>
                        <p>Earn Stars on all purchases you make with our <a>credit card</a> in and outside
                            of Starbucks. Earn 1 Star per $1 when you Digitally preload your starbucks Card with you Starbucks
                            Rewards Visa Card, and earn 2 Stars per $1 when you pay with that preload Starbucks Card.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Footer;