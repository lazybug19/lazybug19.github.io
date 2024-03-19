"use client"
import { title } from "@/components/primitives";
import Image from "next/image";
import { LinkedInIcon } from "@/components/icons";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Card, CardBody } from "@nextui-org/card";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { siteConfig } from "@/config/site";


export default function Home() {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Innovator", "Dancer", "Writer", "Tinkerer", "ECE@ BITS Pilani"],
			startDelay: 300,
			typeSpeed: 70,
			backSpeed: 70,
			backDelay: 70,
			smartBackspace: true,
			loop: true,
			showCursor: true,
			cursorChar: "|"
		});

		// Destroying
		return () => {
			typed.destroy();
		};
	});


	return (
		<section className="flex flex-col items-center justify-center gap-3 py-8 md:py-2">

			{/* Home Section */}
			<div className="flex items-center justify-center" id="home">
				<Image src={"https://illustrations.popsy.co/fuchsia/meditation-girl.svg"} height={270} width={270} alt="me" className="overflow-hidden transform-rotate-180 bg-gray-200 rounded-full" />
			</div>
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>I&apos;m&nbsp;</h1>
				<h1 className={title({ color: "violet" })} >Santrupti&nbsp;</h1>
				<br />
				<div className={title()} ref={el}></div>
			</div>
			{/* About Section */}
			<div className="mt-10 w-full py-14 text-center justify-center" id="about">
				<h1 className={title()}>About</h1>
				<div className="flex flex-col items-center justify-center gap-4 py-8 md:py-7">
					<div className="inline-block text-center py-8">
						<div className="grid grid-cols-6 md:grid-cols-12 items-center justify-evenly">
							<div className="flex col-span-8 md:col-span-4 row-span-full">
								<Image
									alt="me"
									className="rounded-full"
									height={100}
									src="/img/me.jpeg"
									width={270}
								/>
							</div>

							<div className="flex col-span-3 md:col-span-8">
								{/* <div className="flex justify-between items-start">
									<div className="flex flex-col gap-0"> */}
								<div className="inline-block w-full text-left">
									<h1 className={title({ color: "violet", size: "sm" })}>Hi,&nbsp;</h1>
									<h1 className="inline-block text-1xl">I am Santrupti, currently an ECE junior&nbsp;</h1>
									at BITS Pilani, Hyderabad Campus. I am an <br />  avid tech enthusiast and a quick learner with a niche for innovation. Also, a strong advocate <br />of women in technology and have a knack for swiftly grasping new tech frameworks. <br /><br />
									Plus, I am a trained western and classical dancer. You can find me reading books or writing <br /> poems in my free time. You can travel down my memory lane below!
								</div>
								{/* </div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
				<VerticalTimeline
					lineColor="#ddd"
					layout="2-columns">
					<VerticalTimelineElement
						className="vertical-timeline-element-work"
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', textAlign: 'left' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						date="2011 - present"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<LinkedInIcon />}
						visible={true}
						position="right"
					>
						<h3 className="vertical-timeline-element-title">Creative Director</h3>
						<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
						<p>
							Creative Direction, User Experience, Visual Design, Project Management, Team Leading
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element-work"
						date="2010 - 2011"
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', textAlign: 'right' }}
						position="left"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						icon={<LinkedInIcon />}
						visible={true}
					>
						<h3 className="vertical-timeline-element-title">Art Director</h3>
						<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
						<p>
							Creative Direction, User Experience, Visual Design, SEO, Online Marketing
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element-work"
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', textAlign: 'left' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						date="2008 - 2010"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<LinkedInIcon />}
						visible={true}
						position="right"
					>
						<h3 className="vertical-timeline-element-title">Web Designer</h3>
						<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
						<p>
							User Experience, Visual Design
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element-work"
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', textAlign: 'right' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						date="2006 - 2008"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<LinkedInIcon />}
						visible={true}
						position="left"
					>
						<h3 className="vertical-timeline-element-title">Web Designer</h3>
						<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
						<p>
							User Experience, Visual Design
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', textAlign: 'left' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						date="April 2013"
						iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
						icon={<LinkedInIcon />}
						visible={true}
						position="right"
					>
						<h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
						<h4 className="vertical-timeline-element-subtitle">Online Course</h4>
						<p>
							Strategy, Social Media
						</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
				{/* Skills Section */}
				<div className="mt-10 w-full py-14">
					<h1 className={title()}>Skills</h1>
				</div>
				<div className="w-full flex items-center justify-center">
					<div className="flex flex-wrap justify-center gap-4 max-w-xl">
						{siteConfig.skills.map((item, index) => (
							<Image
								alt="logo"
								className={`${item.invert && "dark:invert"} h-12 w-12 m-3 transform transition-transform hover:scale-150`}
								src={item.href}
								key={index}
								width={0}
								height={0}
							/>
						))}
					</div>
				</div>
			</div >

			{/* Projects Section */}

		</section >
	);
}
