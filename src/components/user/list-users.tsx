import User from "@/data/models/User"
import users from "@/data/constants/Users"
import UserCard from "./user-card"

export default function ListUsers() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
			{users.map((user: User) => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	)
}
