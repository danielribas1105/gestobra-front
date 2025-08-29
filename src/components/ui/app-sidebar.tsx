import { itemsMenu } from "@/data/constants/ItensMenu"

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import logo from "@/../public/logo/logo-gestobra-512x512.png"
import Footer from "./footer"

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<div className="flex flex-col items-center">
					<Image src={logo} alt={"Logo GestObra"} width={150} height={150} />
					<h3 className="font-logo font-bold text-3xl text-logo-blue-dark">GestObra</h3>
					<p className="text-sm text-center text-logo-blue-dark/60">
						Plataforma de gestão de obras e transporte de entulho
					</p>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					{/* <SidebarGroupLabel></SidebarGroupLabel> */}
					<SidebarGroupContent>
						<SidebarMenu>
							{itemsMenu.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon color="#51a41e" />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<h3>User</h3>
			</SidebarFooter>
			<SidebarFooter>
				<Footer />
			</SidebarFooter>
		</Sidebar>
	)
}
