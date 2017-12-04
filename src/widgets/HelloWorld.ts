import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { inject } from '@dojo/widget-core/decorators/inject';

import * as css from './styles/HelloWorld.m.css';

/**
 * A themed "Hello World" widget that renders a spinning Dojo 2 logo and the text
 * "Hello, Dojo 2 World!".
 *
 * Refer to these tutorials for more help with creating a widget:
 * 	- Creating widgets, https://dojo.io/tutorials/003_creating_widgets/
 */
@inject({
	name: 'state',
	getProperties(state: any) {
		return {
			who: state.who
		};
	}
})
export class HelloWorld extends WidgetBase<any> {
	/**
	 * Override WidgetBase#render to produce a virtual DOM tree.
	 * @returns {HNode} Each time render() executes, it should build the entire virtual DOM tree.
	 */
	protected render() {
		const { who = 'Dojo 2' } = this.properties;
		// Use WidgetBase#classes() to assign CSS classnames from the theme to the virtual DOM nodes.
		return v('div', { classes: css.root }, [
			v('img', { src: './img/logo.svg', classes: css.logo }),
			v('div', { classes: css.label }, [ `Hello, ${who} World!` ])
		]);
	}
}

export class ExtendedHelloWorld extends HelloWorld {}

export default HelloWorld;
