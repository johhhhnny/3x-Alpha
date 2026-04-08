import { getCollection } from "astro:content";

const authorsCollection = await getCollection("authors");

export const authorsHandler = {
  allAuthors: () => authorsCollection,
  limitAurhors: (limit: number) => authorsCollection.slice(0, limit),
  getAuthors: (authors: { collection: string; id: string }[]) => {
    return authors.map(({ id }) => {
      const author = authorsCollection.find((author) => author.id === id);
      return author || null;
    }).filter(author => author !== null);
  },
  findAuthor: (id: string) => {
    const author = authorsCollection.find((author) => author.id === id);
    return author || null;
  },
};
