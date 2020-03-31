import React from "react";
import PropTypes from "prop-types";
import { MixpanelProvider } from "gatsby-plugin-mixpanel";

export default class HTML extends React.Component {
	render() {
		return (
			<MixpanelProvider>
				<html {...this.props.htmlAttributes} lang="en">
					<head>
						<meta charSet="utf-8" />
						<meta httpEquiv="x-ua-compatible" content="ie=edge" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1, shrink-to-fit=no"
						/>
						<meta httpEquiv="cache-control" content="no-cache" />
						<meta httpEquiv="expires" content="0" />
						<meta httpEquiv="pragma" content="no-cache" />
						<title>Revenge OS</title>

						{/* Add custom css or scripts here */}
						<script src="https://medium-widget.pixelpoint.io/widget.js" />
						{/* Add custom css or scripts here */}

						{this.props.headComponents}
					</head>
					<body {...this.props.bodyAttributes}>
						{this.props.preBodyComponents}
						<div
							key="body"
							id="___gatsby"
							dangerouslySetInnerHTML={{
								__html: this.props.body
							}}
						/>
						{this.props.postBodyComponents}
					</body>
				</html>
			</MixpanelProvider>
		);
	}
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array
};
