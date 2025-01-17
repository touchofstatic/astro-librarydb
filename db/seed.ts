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
			authorId: 1,
			title: "Vermis I",
			isbn: "24375776",
		},

		{
			authorId: 1,
			title: "Vermis II",
			isbn: "34567890"
		},

		{
			authorId: 2,
			title: "Berserk",
			isbn: "3456789"
		}
	]);
	
}
