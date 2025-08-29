import PageLayout from "@/components/ui/page-layout"
import TitlePage from "@/components/ui/title-page"
import ListUsers from "@/components/user/list-users"

export default function UsersPage() {
	return (
		<PageLayout>
			<section className="flex flex-col gap-7">
				<TitlePage title="Usuários" placeholder="Procure pelo nome" textButton="Adicionar usuário" />
				<div className="flex justify-center">
					<ListUsers />
				</div>
			</section>
		</PageLayout>
	)
}
