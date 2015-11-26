import React from 'react';

import Plugins from './settings/plugins/plugins.js';
import Settings from './settings/settings.js';
import stores from '../stores/stores.js';

var Content = React.createClass({
	getInitialState: function() {
		return {
			path: stores.routing.path
		};
	},
	componentDidMount: function() {
		stores.routing.addChangeListener(this.routeChanged);
	},
	componentWillUnmount: function() {
		stores.routing.removeChangeListener(this.routeChanged);
	},
	routeChanged: function() {
		this.setState({
			path: stores.routing.path
		});
	},
	getContentComponent: function() {
		switch (this.state.path) {
			case 'settings':
				return <Settings />;
			case 'settings/plugins':
				return <Plugins />
			default:
				return null;
		}
	},
	render: function() {
		const contentComponent = this.getContentComponent();
		return (
			<div className="content">{contentComponent}</div>
		);
	}
});

export default Content;