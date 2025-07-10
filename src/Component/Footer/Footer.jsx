import "./Footer.css";
import logoFooter from '../Footer/Images/logo-footer.png';
import facebook from '../Footer/Images/facebook.png';
import twitter from '../Footer/Images/twitter.png';
import instagram from '../Footer/Images/instagram.png';
import youtube from '../Footer/Images/youtube.webp';

function Footer(){
    return(
        <div className="footer">
            <div className="logo-footer">
                <img src={logoFooter} alt="Logo Footer" /> 
            </div>
            <div className="list-footer">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="social-media">
                <div className="fb">
                    <a href="https://www.facebook.com/">
                        <img src={facebook} alt="Facebook" />
                    </a>
                </div>
                <div className="x">
                    <a href="https://x.com/?lang=en">
                        <img src={twitter} alt="Twitter" />
                    </a>    
                </div>
                <div className="instagram">
                    <a href="https://www.instagram.com/">
                        <img src={instagram} alt="Instagram" />
                    </a>    
                </div>
                <div className="youtube">
                    <a href="https://www.youtube.com/">
                        <img src={youtube} alt="Youtube" />
                    </a>
                </div>
            </div>
            <div className="copyright">
                <p>© 2025 MyApp. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;

