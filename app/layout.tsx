import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ color: "white" },
		{ color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-8x8.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container bg-[url('/img/black.jpg')] mx-auto px-6 flex-grow w-full">
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}