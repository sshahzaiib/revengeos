import React from "react";

import config from "../utils/config";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import BigX from "../components/BigX";
import BigPhone from "../components/BigPhone";
import Integrations from "../components/Integrations";
import PreFooter from "../components/PreFooter";
import TeamMember from "../components/TeamMember";

export default class IndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<Seo
					title={config.siteName}
					description={config.description}
					url={`${config.siteUrl}`}
					image={config.image}
					keywords={config.keywords}
				/>
				<BigX />
				<Hero />
				<BigPhone />
				<Integrations />
				<TeamMember
					name="Michael Dunworth - CEO Wyre"
					description={
						"DexWallet gets it. The product is beautiful and isn't just a wallet. It's a lens into your financial machine that's working for you. Returns, loans, exchanging, if it's not the UI for the next 100M, then whatever will be is going to be damn close."
					}
					url="/img/michael.jpg"
					alt="Michael Dunworth"
				/>
				<TeamMember
					name="Kain Warwick - Founder Synthetix"
					description="A mobile native integration of defi protocols is critical to increasing accessibility of DeFi."
					url="/img/kain.jpg"
					alt="Kain Warwick"
				/>
				<PreFooter />
			</Layout>
		);
	}
}
