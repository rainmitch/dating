import React from 'react';
import './home.scss';

import {Contents, Card, Block} from './scripts/contents.js'
import {TagSelector} from './scripts/tagSelector.js';
import {Switch} from './scripts/switch.js';
import {Button} from './scripts/button.js';
import {Pushline} from './scripts/pushline.js'
import {TextInput} from './scripts/textInput.js'

const Home = () =>
	
		<Contents>
			<Card width="100px" title="Set your interests">
				<TagSelector tagName="interests">Select Your Interests</TagSelector>
				
				<Button style={{float: 'right'}}>Save</Button>
				<Pushline />
				<Switch />
				<Pushline />
				<TextInput />
			</Card>
		</Contents>

export default Home;
