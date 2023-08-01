import "./Footer.css"
import { Link } from "react-router-dom"



function Footer(){
    return (
    <div className="foots">
        <div className="background">
            <div className="footer3">
                <div className="edgyQ">
                <h1>What is Edgy?</h1>
                <Link to="/">Read our wonderfully wierd story</Link>
                </div>
                <div className="edgyColumns">
                <div className="eC">
                <h3>A community doing good</h3>
                <p>Edgy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.</p>
                </div>
                <div className="eC">
                <h3>Support independent creators</h3>
                <p>There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
                </div>
                <div className="eC">
                <h3>Peace of mind</h3>
                <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                </div>
                </div>
                <div className="endFoot3">
                <h3>Have a question? Well we've got some answers.</h3>
                <button>Go to Help Center</button>
                </div>
            <div className="footer4">
                <p>Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Edgy.</p>
                <input type="email" placeholder="Enter your email"></input>
            </div>
            </div>
            <div className="footer5">
            <i>icon</i>
            <p>Edgy is powered by 100% renewable electricity.</p>
            </div>
        </div>
    <div className="footer2">
        <div className="shopFoot">
            <h3>Shop</h3>
            <p>Gift cards</p>
            <p>Edgy Registry</p>
            <p>Sitemap</p>
            <p>Edgy blog</p>
            <p>Edgy United Kingdom</p>
            <p>Edgy Germany</p>
            <p>Edgy Canada</p>
        </div>
        <div className="sellFoot">
            <h3>Sell</h3>
            <p>Sell on Edgy</p>
            <p>Teams</p>
            <p>Forums</p>
            <p>Affiliates & Creators</p>
        </div>
        <div className="aboutFoot">
            <h3>About</h3>
            <p>Edgy, Inc.</p>
            <p>Policies</p>
            <p>Investors</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Impact</p>
        </div>
        <div className="helpFoot">
            <h3>Help</h3>
            <p>Help Center</p>
            <p>Privacy settings</p>
            <div>Download the Edgy App</div>
            <div className="iconFoot">
                <i>icon 1</i>
                <i>icon 2</i>
                <i>icon 3</i>
                <i>icon 4</i>
                <i>icon 5</i>
            </div>
        </div>
    </div>
    <div className="footer1">
        <div className="foot1">
        <p>United States</p>
        <p>|</p>
        <p>English</p>
        <p>|</p>
        <p>$ (USD)</p>
        </div>
        <div className="foot2">
        <p>© 2023 Edgy, Inc.</p>
        <p>Terms of use</p>
        <p>Privacy</p>
        <p>Interest-based ads</p>
        <p>Local Shops</p>
        <p>Regions</p>
        </div>
    </div>
    </div>
    )
}

export default Footer
