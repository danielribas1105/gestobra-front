import PageLayout from "@/components/ui/page-layout"
import TitlePage from "@/components/ui/title-page"

export default function SettingsPage() {
	return (
		<PageLayout>
			<section className="flex flex-col">
				<div className="flex flex-col">
					<TitlePage title="Configurações" />
				</div>
			</section>
		</PageLayout>
	)
}
