
import React from 'react';

import {Contents, Card} from './scripts/contents.js'

const Error = () =>
	
		<Contents>
			<Card width="80">
				<div style={{
					fontSize: '32px',
					textAlign: 'center',
				}}>
					We're Sorry, But This Page Doesn't Exist.
				</div>
			</Card>
		</Contents>

export default Error;

