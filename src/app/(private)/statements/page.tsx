import PageLayout from "@/components/ui/page-layout"
import TitlePage from "@/components/ui/title-page"

export default function StatementsPage() {
   return (
      <PageLayout>
         <section className="flex flex-col gap-7">
            <TitlePage title="Manifestos" placeholder="Procure pelo nome" textButton="Adicionar Manifesto" />
            <div className="flex justify-center">
            </div>
         </section>
      </PageLayout>
   )
}
