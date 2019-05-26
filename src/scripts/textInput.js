import React from 'react';

import '../stylesheets/textInput.scss';

class TextInput extends React.Component
{
	constructor (props)
	{
		super (props);
	}
	
	render ()
	{
		return (
			<div style={{width: this.props.width, display: 'inline-block', margin: '10px'}}><input type="text" style={{width: this.props.width,}} placeholder={this.props.children} className="TextInput" /></div>
		);
	}
}

export {TextInput};


