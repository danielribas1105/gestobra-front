import users from "@/data/constants/Users"
import { User, UserSchema } from "@/schemas/user"

// Função para validar um array de usuários
export function validateUsers(usersData: unknown[]): User[] {
	return usersData.map((userData, index) => {
		try {
			return UserSchema.parse(userData)
		} catch (error) {
			throw new Error(`Erro na validação do usuário ${index}: ${error}`)
		}
	})
}

// Função para validar um único usuário
export function validateUser(userData: unknown): User {
	return UserSchema.parse(userData)
}

// Função para validação "segura" (retorna sucesso/erro)
export function safeValidateUser(userData: unknown) {
	return UserSchema.safeParse(userData)
}

// Validar os usuários ao exportar (opcional)
const validatedUsers = validateUsers(users)

export default validatedUsers