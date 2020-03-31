import React from "react";
import { FaStumbleupon } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { GiAbacus } from "react-icons/gi";
import { IoLogoAndroid } from "react-icons/io";

const Integrations = () => {
	return (
		<span className="integrations">
			<span className="protocol bZx">
				<span className="companyLogo">
					<FaStumbleupon
						style={{ fontSize: "3em", color: "white" }}
					/>
				</span>
				<h2>Fast</h2>
				<h5>The minimal and fast experience.</h5>
			</span>
			<span className="protocol compound">
				<span className="companyLogo">
					<MdSecurity style={{ fontSize: "3em", color: "white" }} />
				</span>
				<h2>Secure</h2>
				<h5>Frequent Security updates.</h5>
			</span>

			<span className="protocol maker">
				<span className="companyLogo">
					<GiAbacus style={{ fontSize: "3em", color: "white" }} />
				</span>
				<h2>Customization</h2>
				<h5>Customized android experience</h5>
			</span>

			<span className="protocol uniswap">
				<span className="companyLogo">
					<IoLogoAndroid
						style={{ fontSize: "3em", color: "white" }}
					/>
				</span>
				<h2>AOSP Stock</h2>
				<h5>Nearly stock AOSP android experience with no bloatware.</h5>
			</span>
		</span>
	);
};

export default Integrations;
