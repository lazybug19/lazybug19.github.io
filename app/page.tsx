"use client"
import { title } from "@/components/primitives";
import { useEffect, useRef } from "react";
import Typed from "typed.js";


export default function Home() {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Innovator", "Dancer", "Writer", "ECE Junior @ BITS Pilani"],
			startDelay: 300,
			typeSpeed: 80,
			backSpeed: 80,
			backDelay: 80,
			smartBackspace: true,
			loop: true,
			showCursor: false
		});

		// Destroying
		return () => {
			typed.destroy();
		};
	}, []);


	return (
		<section className="flex flex-col items-center justify-center gap-3 py-8 md:py-2">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>I'm&nbsp;</h1>
				<h1 className={title({ color: "violet" })} >Santrupti&nbsp;</h1>
				<br />
				<h1 className={title()} ref={el}></h1>
			</div>
			<div className="flex items-center justify-center">
				<img
					src="https://illustrations.popsy.co/fuchsia/meditation-girl.svg"
					alt="girl"
					className="overflow-hidden h-56 transform-rotate-180 bg-gray-200 rounded-full"
				/>
			</div>
		</section >
	);
}
