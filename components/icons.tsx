import * as React from "react";
import { IconSvgProps } from "@/types";

export const AwardIcon: React.FC<IconSvgProps> = ({
	size,
	width = 512,
	height = 512,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			color="#fff"
			{...props}
		>
			<path d="M18,3V2H6V3a4,4,0,1,0,0,8h.81A6,6,0,0,0,11,13.91V16H7.22l-1.5,6H18.28l-1.5-6H13V13.91A6,6,0,0,0,17.19,11H18a4,4,0,0,0,0-8ZM6,9A2,2,0,0,1,4,7,2,2,0,0,1,6,5V8a5.47,5.47,0,0,0,.09,1Zm13.41-.59A2,2,0,0,1,18,9h-.09A5.47,5.47,0,0,0,18,8V5a2,2,0,0,1,2,2A2,2,0,0,1,19.41,8.41Z" data-name="Layer 2" fill="#ffffff" className="color000000 svgShape" /></svg>
	);
};

export const DownloadIcon: React.FC<IconSvgProps> = ({
	className = "mt-4",
	size,
	width = 512,
	height = 512,
	...props
}) => {
	return (
		<svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Download"><path d="M15.43,24.82l-10-7,1.14-1.64L15,22.08V2h2V22.08l8.43-5.9,1.14,1.64-10,7a1,1,0,0,1-1.14,0ZM28,23v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V23H2v4a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V23Z" fill="#d660d5" className="color000000 svgShape"></path></svg>
	);
};

export const StarIcon: React.FC<IconSvgProps> = ({
	size,
	width = 512,
	height = 512,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 16 16"
			width={size || width}
			color="#fff"
			{...props}
		>
			<path fill="#ffffff" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" className="colorf8b84e svgShape"></path></svg>
	);
};

export const EduIcon: React.FC<IconSvgProps> = ({
	size,
	width = 512,
	height = 512,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 512 512"
			width={size || width}
			color="#fff"
			{...props}
		>
			<path d="M256 64L32 176.295l32 21.072V400l32 16V217.849L255.852 320l132.144-85.451L480 174.727z" fill="#ffffff" className="color000000 svgShape" /><path d="M390.13 256L256 343.768 120.531 256 112 337.529C128 349.984 224 416 256.002 448 288 416 384 350.031 400 337.561L390.13 256z" fill="#ffffff" className="color000000 svgShape" />
		</svg>
	);
};

export const WorkIcon: React.FC<IconSvgProps> = ({
	size,
	width = 512,
	height = 512,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 512 512"
			width={size || width}
			color="#fff"
			{...props}
		>
			<path d="M452 120h-76C376 53.726 322.274 0 256 0S136 53.726 136 120H60c-33.137 0-60 26.863-60 60v272c0 33.137 26.863 60 60 60h392c33.137 0 60-26.863 60-60V180c0-33.137-26.863-60-60-60zM256 60c33.137 0 60 26.863 60 60H196c0-33.137 26.863-60 60-60zm146 200v20c0 16.569-13.431 30-30 30-16.569 0-30-13.431-30-30v-20H170v20c0 16.569-13.431 30-30 30-16.569 0-30-13.431-30-30v-20c-16.569 0-30-13.431-30-30s13.431-30 30-30h292c16.569 0 30 13.431 30 30s-13.431 30-30 30z" fill="#ffffff" className="color000000 svgShape" />
		</svg>
	);
};

export const ResIcon: React.FC<IconSvgProps> = ({
	size,
	width = 64,
	height = 32,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 64 64"
			width={size || width}
			color="#fff"
			{...props}
		>
			<path d="M54.5,41.8H36.3c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h2.3c-0.6,0.4-1.2,0.6-1.8,0.9c-1.4-1.2-3.1-1.9-5-1.9
	c-2,0-3.9,0.8-5.3,2.2c-5.6-2-9.4-7.3-9.4-13.3c0-5.7,3.5-10.9,8.7-13.1c0.5,0.2,1.1,0.4,1.7,0.4c1.1,0,2.1-0.4,2.9-1l9.3,13.5
	c0.2,0.2,0.4,0.4,0.6,0.4c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2l0.4-0.3c0.3,0.3,0.7,0.6,1.1,0.8l-0.2,1.3
	c-0.1,0.5,0.3,1.1,0.8,1.2c0.1,0,0.1,0,0.2,0c0.5,0,0.9-0.3,1-0.8l0.2-1.2c0.5,0,1-0.1,1.5-0.3l0.5,0.9c0.2,0.3,0.5,0.5,0.9,0.5
	c0.2,0,0.3,0,0.5-0.1c0.5-0.3,0.6-0.9,0.4-1.4l-0.7-1.1c0.3-0.4,0.5-0.9,0.7-1.4h1.2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-1.2
	c-0.1-0.2-0.1-0.5-0.2-0.7l0.5-0.4c0.2-0.2,0.4-0.4,0.4-0.6c0-0.3,0-0.5-0.2-0.7L33.8,6.3c-0.2-0.2-0.4-0.4-0.6-0.4
	c-0.3,0-0.5,0-0.7,0.2l-1.9,1.3l-3.4-4.9c-0.3-0.5-0.9-0.6-1.4-0.3l-3.3,2.3C22.2,4.6,22,4.8,22,5.1c0,0.3,0,0.5,0.2,0.7l3.4,4.9
	l-0.6,0.4c-0.2,0.2-0.4,0.4-0.4,0.6c0,0.3,0,0.5,0.2,0.7l0.7,1c-0.5,0.3-1,0.7-1.3,1.2c-8.4,3-14,11-14,19.9
	c0,8.4,4.8,15.8,12.3,19.2H11.5c-0.6,0-1,0.4-1,1v2.7l-1.9,2.8c-0.2,0.3-0.2,0.7,0,1C8.8,61.8,9.1,62,9.5,62h35.4
	c0.4,0,0.7-0.2,0.9-0.5c0.2-0.3,0.2-0.7,0-1l-1.9-2.8v-2.7c0-0.6-0.4-1-1-1h-2.6c3.4-1.6,6.3-4.1,8.4-7.1h5.8c0.6,0,1-0.4,1-1v-3
	C55.5,42.2,55.1,41.8,54.5,41.8z M31.7,47.8c1.6,0,3,0.6,4.1,1.8c1,1,1.5,2.4,1.5,3.8c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1
	c0,0.1,0,0.2,0,0.3H26.2c0,0,0,0,0,0c0-0.2,0-0.3,0-0.5c0-0.7,0.1-1.3,0.3-1.9c0.2-0.6,0.5-1.2,1-1.7c0,0,0,0,0,0
	C28.6,48.6,30.1,47.8,31.7,47.8z M26.3,19.7c-0.8-0.4-1.3-1.3-1.3-2.2c0-0.5,0.1-1,0.4-1.4c0.4-0.6,0.9-1,1.6-1.1c0.2,0,0.3,0,0.5,0
	c1.4,0,2.5,1.1,2.5,2.5c0,0.5-0.1,0.9-0.4,1.3L29.5,19C28.8,20,27.4,20.3,26.3,19.7z M46.3,31.2L46.3,31.2c0.1,0.2,0.1,0.3,0.1,0.5
	c0,1.1-0.9,2-2,2c-0.4,0-0.9-0.1-1.2-0.4l1.2-0.8L46.3,31.2z M32.7,8.3l13.9,20.3l-5.8,4l-9.1-13.3c0,0,0,0,0-0.1
	c0.1-0.2,0.2-0.5,0.2-0.7c0-0.1,0-0.1,0-0.2C32,18,32,17.8,32,17.5c0-0.3,0-0.6-0.1-0.9c0,0,0,0,0-0.1c-0.4-1.8-1.8-3.1-3.6-3.4
	c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4-0.1-0.6-0.1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0l-0.5-0.7l0.6-0.4c0,0,0,0,0,0l3.3-2.3c0,0,0,0,0,0
	L32.7,8.3z M24.3,5.5L26,4.4l2.8,4.1l-1.7,1.2L24.3,5.5z M12,34.7c0-7.5,4.3-14.2,11-17.4c0,0.1,0,0.1,0,0.2c0,0.2,0,0.5,0.1,0.7
	c0,0.1,0,0.1,0,0.2c0,0.2,0.1,0.3,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0.1,0.2,0.1,0.3,0.2,0.5c0,0.1,0.1,0.1,0.1,0.2
	c0.1,0.2,0.2,0.4,0.4,0.6c-5.4,2.7-8.9,8.3-8.9,14.4c0,6.7,4,12.5,10.1,15c0,0,0,0.1,0,0.1c-0.1,0.2-0.2,0.4-0.3,0.5
	c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.1-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0.1-0.1,0.2-0.1,0.4c0,0.1-0.1,0.2-0.1,0.3
	c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.2,0,0.3C16.9,49.7,12,42.7,12,34.7z M11.4,60l0.7-1h30.3l0.7,1H11.4z M41.9,57H12.5v-1h12.8h12.8
	h3.7V57z M53.5,44.8h-5.4c-0.3,0-0.7,0.2-0.8,0.5c-2,3-4.8,5.4-8.1,6.9c0,0,0-0.1,0-0.1c0-0.1-0.1-0.3-0.1-0.4c0-0.1,0-0.2-0.1-0.3
	c0-0.2-0.1-0.3-0.1-0.5c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.2-0.1-0.3-0.2-0.5c0-0.1,0-0.1-0.1-0.2c-0.1-0.2-0.2-0.4-0.4-0.6c0,0,0,0,0,0
	c1.5-0.7,2.9-1.6,4.1-2.8c0.3-0.3,0.4-0.7,0.3-1.1c-0.2-0.4-0.5-0.6-0.9-0.6h-4.2v-1h16.2V44.8z" fill="#ffffff" className="color000000 svgShape"></path></svg>
	);
};

export const LinkedInIcon: React.FC<IconSvgProps> = ({
	size = 20,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				fill="currentColor"
				d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
		</svg>
	);
};

export const GmailIcon: React.FC<IconSvgProps> = ({
	size = 20,
	width,
	height,
	...props
}) => {
	return (
		<svg width="25px" height="25px" viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z" fill="#ea4435" /><path d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" fill="#00ac47" transform="translate(53.0001 32.0007) rotate(180)" /><path d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z" fill="#ffba00" /><path d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z" fill="#4285f4" /><path d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z" fill="#c52528" /></svg>
	);
};

export const InstagramIcon: React.FC<IconSvgProps> = ({
	size = 20,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 16 16"
			width={size || width}
			{...props}
		>
			<path
				fill="currentColor"
				d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
		</svg>
	);
};

export const GithubIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const MoonFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
			fill="currentColor"
		/>
	</svg>
);

export const SunFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<g fill="currentColor">
			<path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
			<path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
		</g>
	</svg>
);

export const HeartFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
			fill="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
	</svg>
);

export const SearchIcon = (props: IconSvgProps) => (
	<svg
		aria-hidden="true"
		fill="none"
		focusable="false"
		height="1em"
		role="presentation"
		viewBox="0 0 24 24"
		width="1em"
		{...props}
	>
		<path
			d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
		<path
			d="M22 22L20 20"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
	const { width, height = 40 } = props;

	return (
		<svg
			fill="none"
			height={height}
			viewBox="0 0 161 32"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				className="fill-black dark:fill-white"
				d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
			/>
			<path
				className="fill-black dark:fill-white"
				d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
			/>
			<path
				className="fill-white dark:fill-black"
				d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
			/>
		</svg>
	);
};
