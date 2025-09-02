import validateCPF from "@/functions/validate-cpf"
import { z } from "zod"

export const CarSchema = z.object({
   id: z.uuid(),
   modelo: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
   placa: z.string()
      .regex(/^\d{3}-\d{4}$/, "A placa deve estar no formato XXX-XXXX")
      .refine(validateCPF, "Placa inválida"),
   motorista: z.string(),
   ano_fabricacao: z.number(),
   km: z.number(),
   combustivel: z.string(),
   robustez: z.boolean(),
   capacidade_carga: z.string(),
   versatilidade: z.string(),
   status: z.enum(["ativo", "inativo", "pendente"]),
   imagemURL: z.string(),
   /* imagemURL: z.url().optional(), */
})

// Gerar o tipo TypeScript automaticamente
export type Car = z.infer<typeof CarSchema>
