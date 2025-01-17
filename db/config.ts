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
    isbn: column.text(),
    authorId: column.number({ references: () => Author.columns.id }),
    // summary: column.text(),


    // my extras
    timeAdded: column.date({ default: NOW }),
    // format: column.text(),
    // download link?
    // language
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Author, Book }
});

