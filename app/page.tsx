"use client"
import { title } from "@/components/primitives";
import Image from "next/image";
import { AwardIcon, EduIcon, GmailIcon, ResIcon, WorkIcon, InstagramIcon, LinkedInIcon, GithubIcon, DownloadIcon } from "@/components/icons";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { useInView } from "react-intersection-observer";

export default function Home() {
	const el = useRef(null);
	const el2 = useRef(null);
	const { ref, inView } = useInView({
		triggerOnce: true
	});

	useEffect(() => {
		const typed = new Typed(el2.current, {
			strings: ["Hi, "],
			startDelay: 300,
			typeSpeed: 300,
			loop: false,
			showCursor: true,
			cursorChar: "|"
		});

		// Destroying
		return () => {
			typed.destroy();
		};
	});

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Innovator", "Dancer", "Writer", "Tinkerer", "ECE @ BITS Pilani"],
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
										src="/img/me.jpeg"
										width={270}
									/>
								</div>

								<div className="flex col-span-6 md:col-span-8">
									<div className="inline-block w-full text-left py-3 px-9">
										<div className="inline-block text-md text-white">
											<span className={title({ color: "violet", size: "sm" })} ref={el2}></span>
											I am Santrupti, currently an ECE senior, at BITS Pilani, Hyderabad Campus. I am an avid tech enthusiast and a quick learner with a niche for innovation. Also, a strong advocate of women in technology and have a knack for swiftly grasping new tech frameworks.
											<br />
											<br />
											Hailing from Bhubaneswar, I am also a trained western and classical dancer. You can find me  reading books or writing poems in my free time. You can travel down my memory lane below, to check my academia, experiences, and small and big achievements!
											<br />
											<br />
										</div>
										<Button
											className="text-fuchsia-500 text-lg"
											href="https://drive.google.com/file/d/1ignXpjscNcd4YliPhg3xfr0cHPudAcB-/view?usp=sharing"
											as={Link}
											showAnchorIcon
											variant="ghost"
										>
											Resume
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
						<div className="py-16 w-full" ref={ref}>
							<VerticalTimeline
								lineColor="#ddd"
								layout="2-columns"
								animate={inView}>
								<VerticalTimelineElement
									className="vertical-timeline-element-work"
									date="2024"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'start' }}
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									icon={<WorkIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">Oxiton, GSSoC&apos;24</h3>
									<h4 className="vertical-timeline-element-subtitle">Open Source Developer</h4>
									<br />
									<h3 className="vertical-timeline-element-title text-xl">Codess.Cafe OSS Cohort-5</h3>
									<h4 className="vertical-timeline-element-subtitle">One of Top 60 Open Source Software Mentees</h4>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element-work"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'start' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									date="2023-24"
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									icon={<ResIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">Undergraduate Research Assistant</h3>
									<h4 className="vertical-timeline-element-subtitle">CSIS and EEE Department, BITS Pilani</h4>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element-work"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'left' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									date="2023"
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									icon={<WorkIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">Yashoda Healthcare</h3>
									<h4 className="vertical-timeline-element-subtitle">Summer Intern, Software and ML</h4>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element-work"
									date="2022"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'start' }}
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									icon={<WorkIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">Caarya</h3>
									<h4 className="vertical-timeline-element-subtitle">Analyst Intern, Operations Domain</h4>
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
										Slam Poetry Head - ELAS (Literary Club)<br />
										Secretary - Utkal Samaj (Regional Associaton)<br />
										Member - CYPHER (Dance Club), Innovation Cell
									</p>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									className="vertical-timeline-element--education"
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'start' }}
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
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'start' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									date="2019 - 2020"
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									icon={<ResIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">NISER Bhubaneswar</h3>
									<h4 className="vertical-timeline-element-subtitle">Student Research Volunteer</h4>
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
									contentStyle={{ background: 'rgb(218, 112, 214)', color: '#fff', textAlign: 'start' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(218, 112, 214)' }}
									date="2008 - 2019"
									iconStyle={{ background: 'rgb(191, 64, 191)', color: '#fff' }}
									icon={< EduIcon />}
									visible={true}
								>
									<h3 className="vertical-timeline-element-title text-xl">St. Xaviers High School</h3>
									<h4 className="vertical-timeline-element-subtitle">General Science, 95%</h4>
									<p>
										School Literary Secretary 2018-19<br />
										SilverZone Science Olympiad 2017 : Rank 1 in Regionals
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
				<div className="w-full flex items-center justify-center py-12">
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
			<div className="py-20 px-10 mt-10 w-full text-center justify-center" id="projects">
				<h1 className={title()}>Projects</h1>
			</div>
			<div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
				<Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-black/50 uppercase font-bold"> Java Springboot, JPA+h2</p>
						<h4 className="text-black font-medium text-large">Twitter Clone backend</h4>
					</CardHeader>
					<Image
						alt="Card background"
						className="z-0 w-full h-full object-cover hover:scale-150 transition-transform duration-300 ease-in-out"
						src="/img/twit.jpg"
						height={100}
						width={270}
					/>
					<CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
						<div>
							<p className="text-white/100 text-tiny">RESTful web services.</p>
							<p className="text-white/100 text-tiny">In-memory h2 database.</p>
						</div>
						<Link isExternal href={siteConfig.links.twitter} aria-label="Github">
							<GithubIcon className="text-default-600" />
						</Link>
					</CardFooter>
				</Card>
				<Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-black/60 uppercase font-bold">ML, NLP, Django REST, NextUI </p>
						<h4 className="text-black font-medium text-large">Fake News Detection App</h4>
					</CardHeader>
					<Image
						alt="Card background"
						className="z-0  w-full h-full object-cover hover:scale-150 transition-transform duration-300 ease-in-out"
						src="/img/news.jpg"
						height={100}
						width={270}
					/>
					<CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
						<div>
							<p className="text-white/100 text-tiny">ML and NLP-based detection.</p>
							<p className="text-white/100 text-tiny">Django backend + Next.js frontend.</p>
						</div>
						<Link isExternal href={siteConfig.links.fake} aria-label="Github">
							<GithubIcon className="text-default-700" />
						</Link>
					</CardFooter>
				</Card>
				<Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-black/60 uppercase font-bold">POSIX-compliant, C-based</p>
						<h4 className="text-black font-medium text-large"> Hotel Management System</h4>
					</CardHeader>
					<Image
						alt="Card background"
						className="z-0 w-full h-full object-cover hover:scale-150 transition-transform duration-300 ease-in-out"
						src="/img/restro.png"
						height={100}
						width={270}
					/>
					<CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
						<div>
							<p className="text-white/100 text-tiny">Supports concurrent requests.</p>
							<p className="text-white/100 text-tiny">Shared memory and IPC management.</p>
						</div>
						<Link isExternal href={siteConfig.links.hotel} aria-label="Github">
							<GithubIcon className="text-default-700" />
						</Link>
					</CardFooter>
				</Card>
				<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
					<CardHeader className="absolute z-10 top-1 flex-col items-start">
						<p className="text-tiny text-black/60 uppercase font-bold">Vite, TailwindCSS, Node.js, MongoDB</p>
						<h4 className="text-black font-medium text-large">URL Shortener Clone</h4>
					</CardHeader>
					<Image
						alt="Card example background"
						className="z-0 w-full h-full scale-125 -translate-y-6 object-cover hover:scale-150 transition-transform duration-300 ease-in-out"
						src="/img/url.jpg"
						height={100}
						width={270}
					/>
					<CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
						<div>
							<p className="text-white/100 text-tiny">Frontend based on Vite framework.</p>
							<p className="text-white/100 text-tiny">Node.js, Express and MongoDB for backend.</p>
						</div>
						<Link isExternal href={siteConfig.links.bitly} aria-label="Github">
							<GithubIcon className="text-default-600" />
						</Link>
					</CardFooter>
				</Card>
				<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
					<CardHeader className="absolute z-10 top-1 flex-col items-start">
						<p className="text-tiny text-black/60 uppercase font-bold">Predictive Modelling, Decision Tree</p>
						<h4 className="text-black font-medium text-large">Remote Early Arrhythmia Diagnosis System</h4>
					</CardHeader>
					<Image
						alt="Relaxing app background"
						className="z-0 w-full h-full object-cover hover:scale-150 transition-transform duration-300 ease-in-out"
						src="/img/cardiac.png"
						height={100}
						width={270}
					/>
					<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
						<div className="flex flex-grow gap-2 items-center">
							<div className="flex flex-col">
								<p className="text-white/100 text-tiny">ECG-based Data-Acquisition (DAQ) system.</p>
								<p className="text-white/100 text-tiny">Decision Tree + CART based prediction.</p>
							</div>
						</div>
						<Link isExternal href={siteConfig.links.arrhythmia} aria-label="Github">
							<GithubIcon className="text-default-700" />
						</Link>
					</CardFooter>
				</Card>
				<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
					<CardHeader className="absolute z-10 top-1 flex-col items-start">
						<p className="text-tiny text-black/60 uppercase font-bold">Ensemble Model, Python</p>
						<h4 className="text-black font-medium text-large">Attestation Framework for IoT</h4>
					</CardHeader>
					<Image
						alt="Relaxing app background"
						className="z-0 w-full h-full object-cover hover:scale-150 transition-transform duration-300 ease-in-out"
						src="/img/mal.png"
						height={100}
						width={270}
					/>
					<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
						<div className="flex flex-grow gap-2 items-center">
							<div className="flex flex-col">
								<p className="text-tiny text-white/100">Stack Model and Max Voting Classification for IoT malware detection.</p>
								<p className="text-tiny text-white/100">Neural Network based multilabel detection.</p>
							</div>
						</div>
						<Link isExternal href={siteConfig.links.malware} aria-label="Github">
							<GithubIcon className="text-default-700" />
						</Link>
					</CardFooter>
				</Card>
				<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
					<CardHeader className="absolute z-10 top-1 flex-col items-start">
						<p className="text-tiny text-black/60 uppercase font-bold">C++, Arduino</p>
						<h4 className="text-black font-medium text-large">Potentiostat-based Sweat Biomarkers Detector</h4>
					</CardHeader>
					<Image
						alt="Card example background"
						className="z-0 w-full h-full scale-125 -translate-y-6 object-cover hover:scale-150 transition-transform duration-300 ease-in-out"
						src="/img/cv.png"
						height={100}
						width={270}
					/>
					<CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
						<div>
							<p className="text-tiny text-white/100">IoT-enabled remote potentiostat.</p>
							<p className="text-tiny text-white/100">Conveys CV results via Bluetooth.</p>
						</div>
						<Link isExternal href={siteConfig.links.iot} aria-label="Github">
							<GithubIcon className="text-default-700" />
						</Link>
					</CardFooter>
				</Card>
			</div>

			{/*Bye*/}	
			<div className="py-24 mt-10 w-full" id="contact">
				<div className="flex flex-col items-center justify-center gap-4 py-8 md:py-7">
					<div className="inline-block text-center py-8">
						<div className="grid grid-cols-6 md:grid-cols-12 items-center justify-evenly">
							<div className="flex col-span-6 md:col-span-4 sm:col-span-6 row-span-full px-4">
								<Image src={"https://illustrations.popsy.co/fuchsia/woman-holding-a-heart.svg"} height={270} width={270} alt="me" className="overflow-hidden transform-rotate-180 bg-gray-200 rounded-full" />
							</div>

							<div className="flex col-span-6 md:col-span-8 sm:col-span-10">
								<div className="inline-block w-full text-left py-3 px-9">
									<div className="inline-block text-md text-white">
										<h1 className={title({ size: "sm" })}> Hope you liked the tour, <i>if yes get<br />
											in touch!</i><br />
										</h1>
										<div className="flex gap-5 py-7">
											<Link isExternal href={siteConfig.links.mail} aria-label="Gmail">
												<GmailIcon className="text-default-500" />
											</Link>
											<Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
												<LinkedInIcon className="text-default-500" />
											</Link>
											<Link isExternal href={siteConfig.links.github} aria-label="Github">
												<GithubIcon className="text-default-500" />
											</Link>
											<Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
												<InstagramIcon className="text-default-500" />
											</Link>
										</div>
										<h1 className="text-medium text-slate-400">Made with 💜
											&#169; 2024 Santrupti Behera.
										</h1>
									</div>
								</div>

							</div>

						</div>
					</div>
				</div>
			</div>
		</section >

	);
}
