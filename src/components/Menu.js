import React from "react";
import { Link } from "gatsby";
import { withMixpanel } from "gatsby-plugin-mixpanel";

import "./Menu.css";

class Menu extends React.Component {
	state = {
		mobileMenuVisible: false
	};

	componentDidMount() {
		// /* eslint-disable */
		// if (typeof window !== 'undefined') {
		//   console.log('document', document);
		//   var triggerBttn = window.document.getElementById('trigger-overlay'),
		//     overlay = window.document.querySelector('div.overlay'),
		//     closeBttn = overlay.querySelector('button.overlay-close');
		//   (transEndEventNames = {
		//     WebkitTransition: 'webkitTransitionEnd',
		//     MozTransition: 'transitionend',
		//     OTransition: 'oTransitionEnd',
		//     msTransition: 'MSTransitionEnd',
		//     transition: 'transitionend',
		//   }),
		//     (transEndEventName =
		//       transEndEventNames[Modernizr.prefixed('transition')]),
		//     (support = { transitions: Modernizr.csstransitions });
		//   function toggleOverlay() {
		//     if (classie.has(overlay, 'open')) {
		//       classie.remove(overlay, 'open');
		//       classie.add(overlay, 'close');
		//       var onEndTransitionFn = function(ev) {
		//         if (support.transitions) {
		//           if (ev.propertyName !== 'visibility') return;
		//           this.removeEventListener(transEndEventName, onEndTransitionFn);
		//         }
		//         classie.remove(overlay, 'close');
		//       };
		//       if (support.transitions) {
		//         overlay.addEventListener(transEndEventName, onEndTransitionFn);
		//       } else {
		//         onEndTransitionFn();
		//       }
		//     } else if (!classie.has(overlay, 'close')) {
		//       classie.add(overlay, 'open');
		//     }
		//   }
		//   triggerBttn.addEventListener('click', toggleOverlay);
		//   closeBttn.addEventListener('click', toggleOverlay);
		// }
		// /* eslint-enable */
	}

	render() {
		const { mobileMenuVisible } = this.state;
		const { mixpanel } = this.props;
		return (
			<React.Fragment>
				<section className="header" style={{ flexGrow: 1 }}>
					<section className="menuLogo">
						<Link
							onClick={() => {
								mixpanel.track("Logo back Home");
							}}
							to="./">
							<img
								src="https://revengeos.com/media/svg/ros_white.svg"
								alt="logo"
								height="26"
							/>
						</Link>
					</section>
					<section className="menu">
						{/* <Link
							onClick={() => {
								mixpanel.track("menu link");
							}}
							className="menuItem desktop"
							to="/whitelabel/">
							About
						</Link> */}
						<Link
							onClick={() => {
								mixpanel.track("menu link BuyCrypto");
							}}
							className="buyCryptoButton desktop"
							to="/download"
							rel="noopener noreferrer">
							Download
						</Link>
						{/* <Link className="desktop headerButton" to="/pro/">
              Pro
            </Link> */}
						<button
							className="menuItem mobile"
							id="trigger-overlay"
							type="button"
							onClick={() =>
								this.setState({
									mobileMenuVisible: !mobileMenuVisible
								})
							}>
							<img
								src="/img/hamburgerIcon.svg"
								height="19"
								alt="hamburger icon"
							/>
						</button>
					</section>
				</section>
				{mobileMenuVisible && (
					<div className="overlay overlay-hugeinc open">
						{/* <button type="button" className="overlay-close">
              Close
            </button> */}
						<nav>
							<ul>
								<li>
									<a
										onClick={() => {
											mixpanel.track(
												"menu link DeFiTracker"
											);
										}}
										rel="noopener noreferrer"
										target="_blank"
										href="https://defitracker.io/">
										About
									</a>
								</li>
								<li>
									<a
										onClick={() => {
											mixpanel.track(
												"menu link DeFiTracker"
											);
										}}
										rel="noopener noreferrer"
										target="_blank"
										href="https://defitracker.io/">
										Download
									</a>
								</li>
							</ul>
						</nav>
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default withMixpanel()(Menu);
