import React from 'react';

import '../stylesheets/button.scss';

class Button extends React.Component
{
	constructor (props)
	{
		super (props);
		
		this.handleClick = this.handleClick.bind (this);
	}
	
	handleClick (e)
	{
		if (this.props.onClick != null)
			this.props.onClick ();
		else
			console.error ("Button has no onClick event assigned to it!");
	}
	
	render ()
	{
		return (
			<div className="Button noselect" style={this.props.style} onClick={this.handleClick}>{this.props.children}</div>
		);
	}
}

export {Button};
