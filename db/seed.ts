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
			name: "Guy"
		},
		{
			name: "person 1 formerly"
		}
	]);

	await db.insert(Book).values([
		{
			title: "Book 1",
			authorId: 1,
			isbn: "0001",
		},

		{
			title: "Book 2",
			authorId: 1,
			isbn: "0054"
		},

		{
			title: "book 3 - lowecase title",
			authorId: 2,
			isbn: "0067"
		},

		{
			title: "Book 1 - same title and diff author",
			authorId: 2,
			isbn: "0022"
		},

		{
			title: "buk",
			authorId: 4,
			isbn: "00354"
		},

		{
			title: "guy - word found in the title and the author",
			authorId: 4,
			isbn: "00458"
		},

		{
			title: "guy - word found in the title and other author",
			authorId: 2,
			isbn: "0057"
		},

		{
			title: "book - author case insensitive search. Deprecated: author names are unique and case insensitive",
			authorId: 5,
			isbn: "0065"
		},
	]);

}
