import "./Footer.css"
import { Link } from "react-router-dom"
import { useState } from "react";



function FooterTwo(){
    const [inputValue, setInputValue] = useState('');


    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.type == "click") {
            e.preventDefault(); // Prevent the default Enter key behavior (form submission)
            setInputValue('');
        }
      };


    return (
    <div className="foots">
        <div className="background2">
            <div className="footer3">
            <div className="footer4">
                <p>Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Edgy.</p>
                <div className="e">
                <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                type="email"
                placeholder="Enter your email"></input>
                <span onClick={handleKeyPress}>Subscribe</span>
                </div>
            </div>
            </div>
            <div className="footer5">
            <i class="fa-solid fa-globe"></i>
            <p>Edgy is powered by 100% renewable electricity.</p>
            </div>
        </div>
    <div className="footer2">
        <div onClick={((e) => window.alert("Feature coming soon"))} className="shopFoot">
            <h3>Shop</h3>
            <p>Gift cards</p>
            <p>Edgy Registry</p>
            <p>Sitemap</p>
            <p>Edgy blog</p>
            <p>Edgy United Kingdom</p>
            <p>Edgy Germany</p>
            <p>Edgy Canada</p>
        </div>
        <div onClick={((e) => window.alert("Feature coming soon"))} className="sellFoot">
            <h3>Sell</h3>
            <p>Sell on Edgy</p>
            <p>Teams</p>
            <p>Forums</p>
            <p>Affiliates & Creators</p>
        </div>
        <div onClick={((e) => window.alert("Feature coming soon"))} className="aboutFoot">
            <h3>About</h3>
            <p>Edgy, Inc.</p>
            <p>Policies</p>
            <p>Investors</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Impact</p>
        </div>
        <div onClick={((e) => window.alert("Feature coming soon"))} className="helpFoot">
            <h3>Help</h3>
            <p>Help Center</p>
            <p>Privacy settings</p>
            <div className="app"><i class="fa-solid fa-e"></i>Download the Edgy App</div>
            <div className="iconFoot">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
    </div>
    <div className="footer1">
        <div className="foot1">
        <img src="https://m.media-amazon.com/images/I/51froJYdRmL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="meaningful text"></img>
        <p>United States</p>
        <p>|</p>
        <p>English (US)</p>
        <p>|</p>
        <p>$ (USD)</p>
        </div>
        <div className="foot2">
        <p >© 2023 Edgy, Inc.</p>
        <p onClick={((e) => window.alert("Feature coming soon"))} className="line">Terms of use</p>
        <p onClick={((e) => window.alert("Feature coming soon"))} className="line">Privacy</p>
        <p onClick={((e) => window.alert("Feature coming soon"))} className="line">Interest-based ads</p>
        <p onClick={((e) => window.alert("Feature coming soon"))} className="line">Local Shops</p>
        <p onClick={((e) => window.alert("Feature coming soon"))} className="line">Regions</p>
        </div>
    </div>
    </div>
    )
}

export default FooterTwo
