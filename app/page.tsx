"use client"
import { title } from "@/components/primitives";
import Image from "next/image";
import { AwardIcon, EduIcon, ResIcon, WorkIcon } from "@/components/icons";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";


export default function Home() {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Innovator", "Dancer", "Writer", "Tinkerer", "ECE @BITS Pilani"],
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
		<section className="flex flex-col items-center justify-center gap-3 py-8 md:py-2 w-full">
			{/* Home Section */}
			<div className="flex flex-col py-3 h-screen -translate-y-14 justify-around ">
				<div>
					<div className="flex items-center justify-center" id="home">
						<Image src={"https://illustrations.popsy.co/fuchsia/meditation-girl.svg"} height={270} width={270} alt="me" className="overflow-hidden transform-rotate-180 bg-gray-200 rounded-full" />
					</div>
					<div className="inline-block w-full text-center justify-center">
						<h1 className={title({ color: "white" })}>I&apos;m&nbsp;</h1>
						<h1 className={title({ color: "violet" })} >Santrupti&nbsp;</h1>
						<br />
						<div className={title({ color: "white" })} ref={el}></div>
					</div>
				</div>
			</div>

			{/* About Section */}
			<div className="mt-10 px-10 w-full text-center justify-center" id="about">
				<div className="py-20 w-full">
					<h1 className={title()}>About</h1>
					<div className="flex flex-col items-center justify-center gap-4 py-8 md:py-7">
						<div className="inline-block text-center py-8">
							<div className="grid grid-cols-6 md:grid-cols-12 items-center justify-evenly">
								<div className="flex col-span-6 md:col-span-4 row-span-full px-4">
									<Image
										alt="me"
										className="rounded-full w-full h-full object-cover m-2"
										height={100}
										src="/Image/me.jpeg"
										width={270}
									/>
								</div>

								<div className="flex col-span-6 md:col-span-8">
									<div className="inline-block w-full text-left py-3 px-9">
										<div className="inline-block text-md text-white">
											<span className={title({ color: "violet", size: "sm" })}>Hi, </span>
											I am Santrupti, currently an ECE junior, at BITS Pilani, Hyderabad Campus. I am an avid tech enthusiast and a quick learner with a niche for innovation. Also, a strong advocate of women in technology and have a knack for swiftly grasping new tech frameworks.
											<br />
											<br />
											Hailing from Bhubaneswar, I am also a trained western and classical dancer. You can find me  reading books or writing poems in my free time. You can travel down my memory lane below, to check my small and big achievements!
										</div>
										<Button className="bg-fuchsia-400 my-4">
											<a href={siteConfig.links.mail} className="text-semibold">Get in touch!</a>
										</Button>
									</div>

								</div>

							</div>
						</div>
					</div>
				</div>
				{/* Exp Section */}
				<div className="mt-10 w-full text-center justify-center" id="exp">
					<div className="py-20 w-full">
						<h1 className={title()}>Experiences &amp; Achievements</h1>
						<div className="py-16 w-full">
							<VerticalTimeline
								lineColor="#ddd"
								layout="2-columns">

								<VerticalTimelineElement
									className="vertical-timeline-element-work"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'left' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									date="2023"
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									icon={<WorkIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">Yashoda</h3>
									<h4 className="vertical-timeline-element-subtitle">Summer Intern, Software and ML</h4>
									<p>
										Remote cardiac monitoring system designed for arrhythmia diagnosis with 98% accuracy
									</p>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element-work"
									date="2021"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'right' }}
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									icon={<WorkIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">Caarya</h3>
									<h4 className="vertical-timeline-element-subtitle">Analyst Intern, Operations Domain</h4>
									<p>
										Organizational innovation implemented for Student Entrepreneurship Programs comprising of 100+ students
									</p>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element-work"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'left' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									date="2021 - present"
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									icon={<EduIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">BITS Pilani, Hyderabad Campus</h3>
									<h4 className="vertical-timeline-element-subtitle">BE, Electronics and Communication</h4>
									<p>
										Secretary - Automation and Robotics Club<br />
										Slam Poetry Head - Literary Club<br />
										Secretary - Odisha Regional Associaton<br />
										Member - Dance Club, Innovation Cell
									</p>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element--education"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'right' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									date="2020"
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									icon={< AwardIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">District Child Scientist Award</h3>
									<h4 className="vertical-timeline-element-subtitle">State Government of Odisha</h4>
									<br />
									<h3 className="vertical-timeline-element-title text-xl">National Childrens&apos; Science Congress</h3>
									<h4 className="vertical-timeline-element-subtitle">Fellow Child Scientist</h4>

								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element-work"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'left' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									date="2019 - 2021"
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									icon={<EduIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">DAV Public School</h3>
									<h4 className="vertical-timeline-element-subtitle">General Biology, 95.2%</h4>
									<p>
										All rounder of the Year - 2021<br />
										Innovation of the Year - 2020<br />
										Winner of Physics Colloquium - 2019
									</p>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element-work"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'right' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									date="2019 - 2020"
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									icon={<ResIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">NISER Bhubaneswar</h3>
									<h4 className="vertical-timeline-element-subtitle">TEM Laboratory and Animal House</h4>
									<p>
										Animal testing on self-devised anxiety models - 2020<br />
										Characterization of self-made nanoparticles - 2019
									</p>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element--education"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'left' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									date="2018"
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									icon={< AwardIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">Intel IRIS National Science Fair</h3>
									<h4 className="vertical-timeline-element-subtitle">Top 80 National Finalist</h4>
									<br />
									<h3 className="vertical-timeline-element-title text-xl">Benett Hatchery Innovation LaunchPad</h3>
									<h4 className="vertical-timeline-element-subtitle">1st runner up, National Level</h4>

								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element--education"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'right' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									date="2008 - 2019"
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									icon={< EduIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">St. Xaviers High School</h3>
									<h4 className="vertical-timeline-element-subtitle">95%</h4>
									<p>
										School Literary Secretary<br />
										SilverZone Science Olympiad 2017 - 1st Rank Regional
									</p>
								</VerticalTimelineElement>
							</VerticalTimeline>
						</div>
					</div>
				</div>
				{/* Skills Section */}
				<div className="mt-10 w-full">
					<h1 className={title()}>Skills</h1>
				</div>
				<div className="w-full flex items-center justify-center py-14">
					<div className="flex flex-wrap justify-center gap-4 max-w-xl">
						{siteConfig.skills.map((item, index) => (
							<Image
								alt="logo"
								className={`${item.invert && "dark:invert"} h-12 w-12 m-2 transform transition-transform hover:scale-150`}
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
			<div className="py-3 px-10">
				<div className="mt-10 w-full text-center justify-center" id="projects">
					<h1 className={title()}>Projects</h1>
				</div>
				<div className="w-full flex items-center justify-center">
					<div className="flex flex-wrap justify-center gap-4 max-w-xl py-7">
						<Button className="bg-fuchsia-500">
							<a href={siteConfig.links.github} className="text-semibold">GitHub</a>
						</Button>
					</div>
				</div>
			</div>
			{/*Bye*/}
			<div className="py-3 text-center justify-center">
				<h1 className="font-extralight py-1">Made with 💜</h1>
				<h1 className="text-xs text-slate-400 py-1 justify-center">&#169; 2024 Santrupti Behera.</h1>
			</div>
		</section >

	);
}