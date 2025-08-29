export default interface Work {
	id: number
	nome: string
	descricao: string
	endereco: string
	bairro: string
	cidade: string
	estado: string
	orcamento: number
	status: "ativa" | "inativa" | "paralisada"
	imagemURL: string
}
