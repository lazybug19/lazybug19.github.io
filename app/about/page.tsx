"use client"
import { LinkedInIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function AboutPage() {
	return (
		<>
			<div>
				<h1 className={title()}>About</h1>
			</div>
			<div className="inline-block w-full text-center">
				<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-left">
					<div className="relative col-span-6 md:col-span-4">
						<Image src={"/img/me.jpeg"} height={150} width={150} alt="me" className="rounded-full" />
					</div>

					<div className="flex flex-col col-span-6 md:col-span-8 justify-between items-start gap-0">
						<div className="inline-block w-full text-center">
							<h4 className="text-right">hi </h4>
							<p></p>
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
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', textAlign: 'right' }}

					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="November 2012"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<LinkedInIcon />}
					visible={true}
				>
					<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
					<h4 className="vertical-timeline-element-subtitle">Certification</h4>
					<p>
						Creative Direction, User Experience, Visual Design
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', textAlign: 'left' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2002 - 2006"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<LinkedInIcon />}
					visible={true}
				>
					<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
					<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
					<p>
						Creative Direction, Visual Design
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</>
	);
}



