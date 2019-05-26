
import React from 'react';

import '../stylesheets/contents.scss';


class Contents extends React.Component
{
	constructor (props)
	{
		super (props);
	}
	
	render ()
	{
		return (
			<div className="Contents">
				{this.props.children}
			</div>
		)
	}
}

class Card extends React.Component
{
	constructor (props)
	{
		super (props);
	}
	
	render ()
	{
		return (
			<div className="ContentsCard" style={{width: this.props.width + "%"}}>
				<div className="ContentsCardTitle">{this.props.title}</div>
				{this.props.children}
			</div>
		)
	}
}

class Block extends React.Component
{
	constructor (props)
	{
		super (props);
	}
	
	render ()
	{
		return (
			<div className="Block" style={this.props.style}>
				{this.props.children.map ((child, index) =>
					{
						return <div style={{float: this.props.float}} key={index}>{child}</div>;
						})}
			</div>
		);
	}
};

export {Contents, Card, Block};
