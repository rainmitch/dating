import React from 'react';

import * as Cookie from './cookie';

import '../stylesheets/navbar.scss';


class Navbar extends React.Component
{
	constructor (props)
	{
		super (props);
		
		this.menuWidth = 45;
		
		this.state = {
			barState: "RegularBar"
		}
		
		var today = new Date ();
		var dd = today.getDate ();
		var mm = today.getMonth () + 1; //January is 0!
		
		
		if (mm === 6 && dd === 28)
		{
			this.state.barState = "GayBar";
		}
		else if (mm === 9 && dd === 23)
		{
			this.state.barState = "BiBar";
		}
		else if (mm === 5 && dd === 24)
		{
			this.state.barState = "PanBar";
		}
		else if (mm === 10 && dd === 22)
		{
			this.state.barState = "AceBar";
		}
		else if ((mm === 11 && dd === 20) || (mm === 3 && dd === 31))
		{
			this.state.barState = "TransBar";
		}
		else if (mm === 10 && dd === 8)
		{
			this.state.barState = "LesBar";
		}
		
		// todo: implement proper dates
		
		Cookie.deleteCookie ('username12');
	}
	
	componentDidMount ()
	{
		
	}
	
	render ()
	{
		
		var classname = "Navbar " + this.state.barState + " noselect"
		return (
			<div className={classname}>
				<div style={{marginRight: 'auto'}}>
					<a href="./" className="Navbar-Title">Dating!</a>
					{this.props.children}
				</div>
				<ProfileIcon />
			</div>
		)
	}
}

class NavbarEntry extends React.Component
{
	constructor (props)
	{
		super (props);
	}
	
	render ()
	{
		return (
			<a className="NavbarEntry" href={this.props.link}>{this.props.children}</a>
		)
	}
}

class ProfileIcon extends React.Component
{
	constructor (props)
	{
		super (props);
		
		this.state = {
			showMenu: false
		}
		this.handleClick = this.handleClick.bind (this);
	}
	
	handleClick (e)
	{
		e.preventDefault ();
		this.setState ({showMenu: !this.state.showMenu});
	}
	
	render ()
	{
		var classname = "NoRenderProfileMenu";
		if (this.state.showMenu)
		{
			classname = "RenderProfileMenu";
		}
		return (
			<div style={{width: '32px',}}>
				<div className="Profile" onClick={this.handleClick}></div>
				
				<ul className={classname}>
					<a href="./profile">My Account</a>
					<a href="./settings">Settings</a>
					<a href="./logout">Log Out</a>
				</ul>
			</div>
		)
	}
}


export {Navbar, NavbarEntry, ProfileIcon};
