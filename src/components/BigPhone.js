import React from "react";
import { Slide } from "react-slideshow-image";
const slideImages = [
	"img/Slider/2.jpg",
	"img/Slider/1.jpg",
	"img/Slider/3.jpg",
	"img/Slider/4.jpg",
	"img/Slider/5.jpg",
	"img/Slider/6.jpg"
];

const properties = {
	duration: 3000,
	transitionDuration: 500,
	infinite: true,
	indicators: false,
	arrows: false,
	pauseOnHover: false
};

const BigPhone = () => {
	return (
		<span>
			{/* <img
				src="/img/bigMobile.jpg"
				width="80%"
				style={{ borderRadius: 10 }}
			/> */}
			{/* <SimpleImageSlider width={896} height={504} images={images} /> */}
			<div className="slide-container">
				<Slide {...properties}>
					{slideImages.map(img => (
						<div key={img} className="each-slide">
							<div
								style={{
									backgroundImage: `url(${img})`
								}}></div>
						</div>
					))}
				</Slide>
			</div>
		</span>
	);
};

export default BigPhone;
