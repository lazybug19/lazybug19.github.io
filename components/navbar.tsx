import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {
	InstagramIcon,
	GithubIcon,
	LinkedInIcon,
} from "@/components/icons";


export const Navbar = () => {

	return (
		<NextUINavbar className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-800" maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2 w-full">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-bold"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-5">
					<Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
						<InstagramIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
						<LinkedInIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
				</NavbarItem>

			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
					<InstagramIcon className="text-default-500" />
				</Link>
				<Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
					<LinkedInIcon className="text-default-500" />
				</Link>
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									"foreground"
								}
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
