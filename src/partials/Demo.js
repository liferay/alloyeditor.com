'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './Demo.soy';

class Demo extends Component {
	attached() {
		AlloyEditor.editable(this.divId, {imageScaleResize: 'scale'});
	}
};

Soy.register(Demo, templates);

export default Demo;