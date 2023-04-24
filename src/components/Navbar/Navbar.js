import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../../context/user.context';
import { Menu } from '@headlessui/react';

function LoggedIn ({ handleLogout }) {

	return (
		<Menu>
			<Menu.Button className='menu-button'>
				<FontAwesomeIcon icon={ faUser } />
			</Menu.Button>
			<Menu.Items className='menu-items-container'>
				<Menu.Item>
					<Link to='/profile' className='navbar-link'>profile</Link>
				</Menu.Item>
				<Menu.Item>
					<button className='secondary' style={ {
						textAlign: 'center'
					} } onClick={ handleLogout }>logout</button>
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}

function MobileLoggedIn ({ handleLogout }) {
	return (
		<div>
			<Link to='/profile' className='navbar-link'>Profile</Link>
			<button className='secondary' style={ {
				textAlign: 'center',
				marginTop: 12 + 'px'
			} } onClick={ handleLogout }>logout</button>
		</div>
	);
}

function MobileNav ({ currentUser, setUser, handleLogout }) {
	return (<div className="mobile-nav">
		<Menu >
			<Menu.Button className={ 'mobile-nav-button' }>
				<FontAwesomeIcon icon={ faBars } size='xl' />
			</Menu.Button>
			<Menu.Items className='menu-items-container'>
				<Menu.Item>
					{ currentUser ?
						<Link to="/projects" className="navbar-link">
							Projects
						</Link> :
						<Link to="/" className="navbar-link">
							Home
						</Link> }
				</Menu.Item>
				<Menu.Item>
					<Link to="/about" className="navbar-link">
						About Us
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/contact" className="navbar-link">
						Contact Us
					</Link>
				</Menu.Item>
				<Menu.Item>
					{ currentUser ? <MobileLoggedIn role={ currentUser.role } setUser={ setUser } handleLogout={ handleLogout } /> : <Link to="/login" className="navbar-link">
						Login
					</Link> }
				</Menu.Item>
			</Menu.Items>
		</Menu>
	</div>)
}

function DefaultNavbar ({ handleLogout, currentUser, setUser }) {
	return (
		<div className="navbar-links">
			{ currentUser ?
				<Link to="/projects" className="navbar-link">
					Projects
				</Link> :
				<Link to="/" className="navbar-link">
					Home
				</Link> }
			<Link to="/about" className="navbar-link">
				About Us
			</Link>
			<Link to="/contact" className="navbar-link">
				Contact Us
			</Link>
			{ currentUser ? <LoggedIn role={ currentUser.role } setUser={ setUser } handleLogout={ handleLogout } /> : <Link to="/login" className="navbar-link">
				Login
			</Link> }
		</div>

	);
};

function Navbar () {
	const { currentUser, setUser } = useUser();
	const currentLocation = useLocation();
	const redirect = useNavigate();

	function isInLocation (locationArr) {
		let result = false;

		for (let location of locationArr) {
			if (location === currentLocation.pathname) {
				result = true;
				break;
			}
		}

		return result;
	}

	function handleLogout () {
		if (window.confirm('Are you sure you want to logout?')) {
			setUser(undefined)
			redirect('/', { replace: true });
		}

	}

	useEffect(() => {
		let bodyContainer = document.querySelector('#body-container'),
			sidebar = document.querySelector('#sidebar');

		if (isInLocation(['/cohorts', '/projects', '/add-project'])) {
			sidebar.classList.remove('hidden');
			bodyContainer.classList.add('hasSidebar');
		} else {
			bodyContainer.classList.remove('hasSidebar');
			sidebar.classList.add('hidden');
		};

		return;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentLocation.pathname]);

	return (
		<div className='navbar-container'>
			<Link to={ `${currentUser ? '/projects' : '/'}` } className="navbar-logo">
				P-BANK
			</Link>
			<MobileNav currentUser={ currentUser } setUser={ setUser } handleLogout={ handleLogout } />
			<DefaultNavbar currentUser={ currentUser } setUser={ setUser } handleLogout={ handleLogout } />
		</div>
	)
}

export default Navbar;
