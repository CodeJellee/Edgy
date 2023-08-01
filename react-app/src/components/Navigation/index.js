import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<>
		<div className="navigations">
		<div className="edgy">
		<h1>Edgy</h1>
		<input type="search" placeholder='Search for anything'></input>
		{isLoaded && (
				<div className="user">
					<ProfileButton user={sessionUser} />
				</div>
		)}
		<i>cart</i>
		</div>

		<div className="navigation">
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
		</div>
		</div>
		<div className="border"></div>
		</>
	);
}

export default Navigation;
