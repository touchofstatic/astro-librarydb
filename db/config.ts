import { defineDb, defineTable, column, NOW } from 'astro:db';

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});


const Book = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    authorId: column.number({ optional: true, references: () => Author.columns.id }),
    // language
    // year
    // publisher
    isbn: column.text({ optional: true }),
    // format: column.text(),
    timeAdded: column.date({ default: NOW }),
    // summary: column.text(),

    // download link?
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Author, Book }
});

