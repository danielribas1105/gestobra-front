import { z } from "zod"

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
	cpf: z.string(),
  email: z.string().email("E-mail inválido"),
	telefone: z.number(),
	status: z.string(),
	imagemURL: z.string()
})

// Gerar o tipo TypeScript automaticamente
export type User = z.infer<typeof UserSchema>
