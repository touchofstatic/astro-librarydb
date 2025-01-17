import { db, Author, Book } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Author).values([
		{
			name: "Plastiboo"
		},
		{
			name: "Kentaro Miura"
		}
	]);

	await db.insert(Book).values([
		{
			title: "Vermis I",
			authorId: 1,
			isbn: "24375776",
		},

		{
			title: "Vermis II",
			authorId: 1,
			isbn: "34567890"
		},

		{
			title: "Berserk",
			authorId: 2,
			isbn: "3456789"
		}
	]);

}
