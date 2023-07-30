import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul className="navigation">
			<li className='nav'>
				<NavLink exact to="/">Home</NavLink>
				<NavLink exact to="/categories/clothing">Clothing</NavLink>
				<NavLink exact to="/categories/home_decor">Home Decor</NavLink>
				<NavLink exact to="/categories/accessories">Accessories</NavLink>
				<NavLink exact to="/categories/computer">Computer</NavLink>
				<NavLink exact to="/categories/waifu_body_pillows">Waifu Body Pillows</NavLink>
				<NavLink exact to="/categories/books">Books</NavLink>
				<NavLink exact to="/categories/music">Music</NavLink>
				<NavLink exact to="/categories/figurines">Figurines</NavLink>
			</li>
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>
	);
}

export default Navigation;
