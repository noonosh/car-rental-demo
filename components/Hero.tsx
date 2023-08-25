"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Hero = () => {
	const handleScroll = () => {};
	const scrolltoHash = function (element_id: string) {
		const element = document.getElementById(element_id);
		element?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
	};
	return (
		<div className='hero'>
			<div className='flex-1 pt-36 padding-x'>
				<h1 className='hero__title'>
					Find, book, or rent a car – quick and easy!
				</h1>
				<p className='hero__subtitle'>
					Streamline your car rental experience with our effortless booking
					process.
				</p>
				<CustomButton
					title='Explore cars'
					containerStyles='bg-primary-blue text-white rounded-full mt-10'
					handleClick={() => scrolltoHash("discover")}
				/>
			</div>
			<div className='hero__image-container'>
				<div className='hero__image'>
					<Image src='/hero.png' alt='hero' fill className='object-contain' />
				</div>
				<div className='hero__image-overlay' />
			</div>
		</div>
	);
};

export default Hero;
