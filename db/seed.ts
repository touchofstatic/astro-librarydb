import { db, Author, Book } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Author).values([
		{
			name: "Person 1"
		},
		{
			name: "person 2"
		},
		{
			name: "Person 3"
		},
		{
			name: "Guy 1"
		}
	]);

	await db.insert(Book).values([
		{
			title: "Book 1",
			authorId: 1,
			isbn: "24375776",
		},

		{
			title: "Book 2",
			authorId: 1,
			isbn: "34567890"
		},

		{
			title: "book 3",
			authorId: 2,
			isbn: "64687"
		},

		{
			title: "Book 1",
			authorId: 2,
			isbn: "668509"
		},

		{
			title: "buk",
			authorId: 4,
			isbn: "654566"
		},

		{
			title: "guy",
			authorId: 4,
			isbn: "4645645"
		},

		{
			title: "guy",
			authorId: 2,
			isbn: "3456789"
		},
	]);

}
