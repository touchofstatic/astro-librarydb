import { defineDb, defineTable, column, NOW } from 'astro:db';

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    // firstName: column.text(),
    // lastName: column.text()
    name: column.text(),
  },
  // virutal url?
});

const Genre = defineTable({
  columns: {
    name: column.text()
  }
  // virutal url?
});

const Book = defineTable({
  columns: {
    title: column.text(),
    isbn: column.text(),
    authorId: column.number({ references: () => Author.columns.id }),
    // authorFirstName: column.text({ references: () => Author.columns.firstName }),
    // authorLastName: column.text({ references: () => Author.columns.lastName }),
    // genre: column.text({ references: () => Genre.columns.name }),
    // summary: column.text(),


    // my extras
    timeAdded: column.date({ default: NOW }),
    // format: column.text(),
    // download link?

    // virutal url?
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Author, Book }
});

