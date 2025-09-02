import validateCPF from "@/functions/validate-cpf"
import { z } from "zod"

export const UserSchema = z.object({
	id: z.uuid(),
	nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
	cpf: z.string()
		.regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF deve estar no formato XXX.XXX.XXX-XX")
		.refine(validateCPF, "CPF inválido"),
	email: z.email(),
	telefone: z.string()
		.regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Telefone deve estar no formato (XX) XXXXX-XXXX"),
	status: z.enum(["ativo", "inativo", "pendente"]),
	imagemURL: z.string(),
	/* imagemURL: z.url().optional(), */
})

// Gerar o tipo TypeScript automaticamente
export type User = z.infer<typeof UserSchema>
