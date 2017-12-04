import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { ExtendedHelloWorld } from './widgets/HelloWorld';
import { Registry } from '@dojo/widget-core/Registry';
import { Injector } from '@dojo/widget-core/Injector';
import * as faker from 'faker';

// Create a projector to convert the virtual DOM produced by the application into the rendered page.
// For more information on starting up a Dojo 2 application, take a look at
// https://dojo.io/tutorials/002_creating_an_application/
const registry = new Registry();
const injector = new Injector({ who: 'anthony' });
registry.defineInjector('state', injector);

const Projector = ProjectorMixin(ExtendedHelloWorld);
const projector = new Projector();
projector.setProperties({ registry });

setInterval(() => {
	injector.set({ who: faker.name.findName() });
}, 1000);

// By default, append() will attach the rendered content to document.body.  To insert this application
// into existing HTML content, pass the desired root node to append().
projector.append();
