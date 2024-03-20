"use client"
import { title } from "@/components/primitives";
import Image from "next/image";
import { AwardIcon, EduIcon, LinkedInIcon, ResIcon, WorkIcon } from "@/components/icons";
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
			<div className="py-16">
				<div className="flex items-center justify-center" id="home">
					<Image src={"https://illustrations.popsy.co/fuchsia/meditation-girl.svg"} height={270} width={270} alt="me" className="overflow-hidden transform-rotate-180 bg-gray-200 rounded-full" />
				</div>
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>I&apos;m&nbsp;</h1>
					<h1 className={title({ color: "violet" })} >Santrupti&nbsp;</h1>
					<br />
					<div className={title()} ref={el}></div>
				</div>
			</div>
			<div>
				{/* About Section */}
				<div className="mt-10 w-full py-32 text-center justify-center" id="about">
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
									<div className="inline-block w-full text-left">
										<h1 className={title({ color: "violet", size: "sm" })}>Hi,&nbsp;</h1>
										<h1 className="inline-block text-1xl">I am Santrupti, currently an ECE junior&nbsp;</h1>
										at BITS Pilani, Hyderabad Campus. I am an <br />  avid tech enthusiast and a quick learner with a niche for innovation. Also, a strong advocate <br />of women in technology and have a knack for swiftly grasping new tech frameworks. <br /><br />
										Hailing from Bhubaneswar, I am also a trained western and classical dancer. You can find me <br /> reading books or writing poems in my free time. You can travel down my memory lane below, <br /> to check my small and big achievements!
									</div>
								</div>
							</div>
						</div>
					</div>
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
								Creative Direction, User Experience, Visual Design, Project Management, Team Leading
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
							<h4 className="vertical-timeline-element-subtitle">Analyst Intern - Operations Domain</h4>
							<p>
								Creative Direction, User Experience, Visual Design, SEO, Online Marketing
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
								Secretary - ARC, Automation and Robotics Club<br />
								Slam Poetry Head - ELAS, Literary Club<br />
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
				{/*Contact*/}
			</div>
		</section >
	);
}
