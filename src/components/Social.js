import React from "react";

const Social = () => {
	return (
		<section className="social">
			<a
				className="socialIcons"
				target="_blank"
				href="https://twitter.com/itsrevengeos">
				<img
					className="supportPicture"
					src="/img/twitter.svg"
					alt="twitter"
					border="0"
					height="20"
					style={{ marginRight: 20 }}
				/>
			</a>
			<a
				className="socialIcons"
				target="_blank"
				href="https://t.me/revengeOSNews">
				<img
					className="supportPicture"
					src="/img/telegram.svg"
					alt="telegram"
					border="0"
					height="20"
					style={{ marginRight: 30 }}
				/>
			</a>
			<a
				className="socialIcons"
				target="_blank"
				href="https://github.com/revengeOS">
				<img
					className="supportPicture"
					src="/img/github.svg"
					alt="telegram"
					border="0"
					height="20"
				/>
			</a>
		</section>
	);
};

export default Social;
