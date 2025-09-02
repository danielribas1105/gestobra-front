export default interface User {
	id: string
	nome: string
	cpf: string
	email: string
	telefone: number
	status: "ativo" | "inativo"
	imagemURL: string
}
