
import React from 'react';

import '../stylesheets/switch.scss';

class Switch extends React.Component
{
	constructor (props)
	{
		super (props);
		
		var s = false;
		
		if (props.state != null)
		{
			if (props.state === "on")
				s = true;
		}
		
		this.state = {
			status: s,
		}
		
		this.handleClick = this.handleClick.bind (this);
	}
	
	handleClick (e)
	{
		this.setState ({status: !this.state.status});
	}
	
	toggled ()
	{
		return this.state.status;
	}
	
	render ()
	{
		var bulbClass = "SwitchBulb " + (this.state.status ? "SwitchBulbOn" : "SwitchBulbOff");
		
		
		return (
			<div className="Switch" onClick={this.handleClick}>
				<div className="SwitchBackground"></div>
				<div className={bulbClass}></div>
			</div>
		);
	}
}

export {Switch};
