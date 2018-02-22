'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import {isServerSide} from 'metal';

import templates from './Demo.soy.js';

class Demo extends Component {
	attached() {
		if (isServerSide()) {
			return;
		}

		AlloyEditor.editable(this.divId, {imageScaleResize: 'scale'});
	}
};

Soy.register(Demo, templates);

export default Demo;