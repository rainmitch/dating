
import React from 'react';

import '../stylesheets/tagSelector.scss';

class TagSelector extends React.Component
{
	constructor (props)
	{
		super (props);
		
		this.state = {
			
		}
		
		this.tags = [];
		this.lastRenderedTagCount = 0;
		
		this.boxRef = 0;
		this.inputRef = 0;
		
		this.handleKey = this.handleKey.bind (this);
		this.handleFocus = this.handleFocus.bind (this);
		this.handleFocusOut = this.handleFocusOut.bind (this);
	}
	
	handleKey (event)
	{
		if (event.key === 'Enter')
		{
			event.preventDefault ();
			var tagName = this.inputRef.value.toLowerCase ();
			tagName = tagName[0].toUpperCase () +  tagName.slice (1, tagName.length);
			if (!this.tags.includes (tagName))
				this.tags.push (tagName);
			this.inputRef.value = "";
			
			this.forceUpdate ();
		}
	}
	
	getTags ()
	{
		return this.tags;
	}
	
	handleFocus ()
	{
		this.setState ({focused: true});
	}
	
	handleFocusOut ()
	{
		this.setState ({focused: false});
	}
	
	removeTag (tag)
	{  
		var index = this.tags.indexOf (tag);
		if (index > -1)
		{
			this.tags.splice (index, 1);
		}
		
		this.forceUpdate ();
	}
	
	render ()
	{
		var tagName = "tags";
		if (this.props.tagName != null)
			tagName = this.props.tagName;
		
		var width = "400px";
		if (this.props.width != null)
		{
			width = this.props.width;
		}
		
		var titleClasses = "TagSelectorTitle noselect " + (this.state.focused ? "TagSelectorTitleSelectedAnimation" : "TagSelectorTitleUnselectedAnimation");
		
		return (
			<div className="TagSelectorBox" style={{width: width}}>
				<div className={titleClasses}>{this.props.children}</div>
				<div className="TagSelector" ref={(r) => {this.boxRef = r}}>
					<div className="TagSelectorTags">
						{this.tags.map ((el, index) => {
							return <div className="TagSelectorBubble" key={index}
								onClick={() => {this.removeTag (el)}}
								>{el}</div>
							})}
					</div>
					<input type="text" className="TagSelectorInput" onKeyPress={this.handleKey} onFocus={this.handleFocus} onBlur={this.handleFocusOut} ref={(r) => {this.inputRef = r}} />
				</div>
				<div className="TagSelectorText noselect">Press Enter to separate your {tagName}</div>
			</div>
		);
	}
};

export {TagSelector};
