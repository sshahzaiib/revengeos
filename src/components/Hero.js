import React from "react";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import { Link } from "gatsby";

const Hero = () => {
	const mixpanel = useMixpanel();

	return (
		<section className="hero">
			<span className="columnText">
				<span className="leftContentText">
					{/* <h1 className="sectionTitle animatedTitle">
						RevengeOS Android
					</h1> */}
					<h2 className="sectionSub animatedSubitle">
						Free and open source for various devices with official
						support.
					</h2>

					<span className="storeButtonContainer">
						<div className="storebutton">
							<Link className="downloadbutton" to="/download">
								Download
							</Link>
						</div>

						<div className="storebutton telegramButtonMobile">
							<a
								onClick={() => {
									mixpanel.track("Mobile");
								}}
								className="storebutton"
								href="https://t.me/revengeOT">
								<img
									src="/img/telegram.svg"
									alt="telegram"
									border="0"
									style={{ marginRight: 4 }}
								/>
								<span style={{ paddingBottom: 4 }}>
									Join Telegram
								</span>
							</a>
						</div>
					</span>
				</span>
			</span>
		</section>
	);
};

export default Hero;
