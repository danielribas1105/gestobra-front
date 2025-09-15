import ColumnsChart from "@/components/reports/columns-chart"
import PageLayout from "@/components/ui/page-layout"
import TitlePage from "@/components/ui/title-page"

export default function ReportsPage() {
	return (
		<PageLayout>
			<section>
				<div className="flex flex-col gap-5">
					<TitlePage title="Relatórios" />
					<ColumnsChart/>
				</div>
			</section>
		</PageLayout>
	)
}
