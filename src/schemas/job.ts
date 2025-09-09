import z from "zod"
   
export const CarSchema = z.object({
   id: z.uuid(),
   origin_id: z.uuid(),
   destiny_id: z.uuid(),
   car_id: z.uuid(),
   user_id: z.uuid(),
   statement_id: z.uuid(),
   m3: z.float32(),
   status: z.string(),
   created_at: z.string(),
   updated_at: z.string()
})

export type Job = z.infer<typeof CarSchema>
