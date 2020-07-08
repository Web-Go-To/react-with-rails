// Top level component for simple client side only rendering
import React from 'react';

import EchoProps from '../components/EchoProps';

/*
 *  Export a function that takes the props and returns a ReactComponent.
 *  This is used for the client rendering hook after the page html is rendered.
 *  React will see that the state is the same and not do anything.
 *  Note, this is imported as "HelloWorldApp" by "clientRegistration.jsx"
 *
 *  Note, this is a fictional example, as you'd only use a Render-Function if you wanted to run
 *  some extra code, such as setting up Redux and React-Router.
 */

// This will not work:
// export default (props, _railsContext) => () => <EchoProps {...props} />;

// You may do either:
// export default (props, _railsContext) => () => <EchoProps {...props} />;
// or
export default (props) => <EchoProps {...props} />;
