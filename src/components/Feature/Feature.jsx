/* eslint-disable react/no-unescaped-entities */
import './Feature.css'
import coffeeImage from '../../assets/images/01.png';
import funFreebies from '../../assets/images/funFreebies.png';
import orderPay from '../../assets/images/orderPay.png';
import getFree from '../../assets/images/getFree.png';

function Feature(){
    return <><div className="feature-main">
        {/* First Part */}
        <div className='first-section-feature'>
            <h2 className='first-section-heading'>Getting started is easy</h2>
            <p className='first-section-content'> Earn Stars and get rewarded in a few easy steps.</p>
            <div className='first-section-steps'>
                <div className='step'>
                    <p className='step-circle'>1</p>
                    <h4>Create an account</h4>
                    <p className='step-content'>To get started, <a>join now</a>. You can also <a>join in the app</a> to get
                        access to the full range of Starbucks Rewards benefits
                    </p>
                </div>
                <div className='step'>
                    <p className='step-circle'>2</p>
                    <h4>Order and pay how you'd like</h4>
                    <p className='step-content'>Use cash, credit/debit card or save some time and pay right through
                        the app. You'll collect Stars all ways. <a>Learn how</a>
                    </p>
                </div>
                <div className='step'>
                    <p className='step-circle'>3</p>
                    <h4>Earn Stars, get Rewards</h4>
                    <p className='step-content'>As you earn Stars, you can redeem them for rewards - like free food, frinks, and more. 
                        Start redeeming with as little as 25 Stars!
                    </p>
                </div>
            </div>
        </div>
        {/* Second Part */}
        <div className='second-feature-background'>
            <div className='second-section-feature'>
                <h2 className='second-section-heading'>Get your favourites for free</h2>
                <div className='second-section-types'>
                    <h3>25 <span className="star">★</span></h3>
                    <h3>50 <span className="star">★</span></h3> 
                    <h3>150 <span className="star">★</span></h3> 
                    <h3>200 <span className="star">★</span></h3> 
                    <h3>400 <span className="star">★</span></h3> 
                </div>
            </div>
        </div>
        {/* Third Part */}
        <div className='third-feature-background'>
            <div className='third-section-feature'>
                <img src={coffeeImage} alt="coffee" className='third-section-image'/>
                <div className='third-section-text'>
                    <h2>Customize your drink</h2>
                    <p>Make your drink just right with an extra espresso shot,
                        dairy substitute or a dash of your favourite syrup.
                    </p>
                </div>
            </div>
        </div>
    </div>
    {/* Second Section fof Feature */}
    <div className='feature-secondary'>
        <h2 className='feature-secondary-title'>Endless Extras</h2>
        <p className='feature-secondary-content'>Joining Starbucks Rewards means unlocking access to exclusive benefits. Say hello to
            easy ordering, tasty Rewards and -- yes, free coffee.
        </p>
        <div className='feature-secondary-steps'>
            <div className='feature-secondary-step'>
                <img src={funFreebies} alt="Fun Freebies"/>
                <h4>Fun freebies</h4>
                <p>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                <a>Learn more</a>
            </div>
            <div className='feature-secondary-step'>
                <img src={orderPay} alt="Fun Freebies"/>
                <h4>Order & Pay ahead</h4>
                <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
                <a>Learn more</a>
            </div>
            <div className='feature-secondary-step'>
                <img src={getFree} alt="Fun Freebies"/>
                <h4>Get to free faster</h4>
                <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
                <a>Learn more</a>
            </div>
        </div>
    </div>
    </>
}

export default Feature;