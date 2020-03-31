import React from "react";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import { Link } from "gatsby";

const footerMenu = () => {
	const mixpanel = useMixpanel();

	return (
		<section className="footerMenu">
			<Link
				onClick={() => {
					mixpanel.track("Footerlink Terms and Conditions");
				}}
				className="menuItem desktop"
				to="/download">
				Download
			</Link>
		</section>
	);
};

export default footerMenu;
