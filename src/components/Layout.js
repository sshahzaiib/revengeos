import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import "./layout.css";
import config from "../utils/config";
import Menu from "./Menu";
import FooterMenu from "./FooterMenu";

import TelegramBanner from "./TelegramBanner";

const Container = styled.div``;

const IndexLayout = ({ children }) => (
	<div>
		<Helmet>
			{/* <title>{config.siteName}</title> */}
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta description={config.description} />
		</Helmet>
		<Menu />
		<Container>{children}</Container>
		<FooterMenu />
		<TelegramBanner />
	</div>
);

IndexLayout.propTypes = {
	children: PropTypes.array.isRequired
};

export default IndexLayout;
