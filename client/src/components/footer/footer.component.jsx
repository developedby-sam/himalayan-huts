import "./footer.styles.scss";
import { Link } from "react-router-dom";
const Footer = () => (
	<section className='footer'>
		<div className='footer__component'>
			<Link className='footer__component-text footer__component-text-header' to='/'>
				<span className='bold-text'>himalayan</span>
				<span className='normal-text'>huts</span>
			</Link>
			<Link className='footer__component-text' to='/aboutus'>
				About Us
			</Link>
			<Link className='footer__component-text' to='/advertise'>
				Advertise
			</Link>
			<Link className='footer__component-text' to='/outteam'>
				Team Members
			</Link>
			<Link className='footer__component-text' to='/funding'>
				Fund Us
			</Link>
		</div>
		<div className='footer__component'>
			<Link className='footer__component-text footer__component-text-header' to='/'>
				<span className='bold-text'>Our Services</span>
			</Link>
			<Link className='footer__component-text' to='/advertise'>
				Add a listing
			</Link>
			<Link className='footer__component-text' to='/paidadvertise'>
				Get on Featured List
			</Link>
			<Link className='footer__component-text' to='/contactlandlord'>
				Contact landlord
			</Link>
		</div>
		<div className='footer__component'>
			<Link className='footer__component-text footer__component-text-header' to='/'>
				<span className='bold-text'>Other</span>
			</Link>
			<Link className='footer__component-text' to='/postingrules'>
				Posting rules
			</Link>
			<Link className='footer__component-text' to='/termsandconditions'>
				Terms of use
			</Link>
			<Link className='footer__component-text' to='/cookiepolicy'>
				Cookies
			</Link>
			<Link className='footer__component-text' to='/landlordapolicy'>
				Landlord agreement policy
			</Link>
			<Link className='footer__component-text' to='/renterspolicy'>
				Renters agreeement policy
			</Link>
			<Link className='footer__component-text' to='/contactus'>
				Contact Us
			</Link>
		</div>
	</section>
);

export default Footer;
