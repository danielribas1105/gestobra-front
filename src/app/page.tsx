"use client";
import Header from "@/components/ui/header";
import PageLayout from "@/components/ui/page-layout";
import TitlePage from "@/components/ui/title-page";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ApiStatus {
  status: string;
  timestamp: string;
}

export default function LandingPage() {
  const [status, setStatus] = useState<ApiStatus>({
    status: "Carregando...",
    timestamp: "",
  });

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch("http://127.0.0.1:8000/status");
        if (!res.ok) throw new Error("Erro ao buscar status");
        const data = await res.json();
        setStatus(data);
      } catch (error) {
        setStatus({
          status: "Offline",
          timestamp: new Date().toLocaleString("pt-BR"),
        });
      }
    }

    fetchStatus();
    const interval = setInterval(fetchStatus, 5000); // atualiza a cada 5s

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Header />
      <PageLayout>
        <section>
          {/* <div className="flex flex-col gap-3 md:gap-0">
						<div className="flex flex-col items-start justify-evenly text-xl">
							<div>
								Status:{" "}
								<span className={status.status === "online" ? "text-green-600" : "text-red-600"}>
									{status.status}
								</span>
							</div>
							<div className="mt-2 text-sm text-gray-400">Última atualização: {status.timestamp}</div>
						</div>
					</div> */}
          Criar landing page
        </section>
      </PageLayout>
    </>
  );
}
