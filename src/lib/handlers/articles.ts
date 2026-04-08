import { getCollection } from "astro:content";

const articlesCollection = (
  await getCollection("articles", ({ data }) => {
    return data.isDraft !== true && new Date(data.publishedTime) < new Date();
  })
).sort((a, b) =>
  new Date(b.data.publishedTime)
    .toISOString()
    .localeCompare(new Date(a.data.publishedTime).toISOString())
);

export const articlesHandler = {
  allArticles: () => articlesCollection,

  mainHeadline: () => {
    const article = articlesCollection.filter(
      (article) => article.data.isMainHeadline === true
    )[0];
    if (!article) return articlesCollection[0] || null;
    return article;
  },

  subHeadlines: () => {
    const mainHeadline = articlesHandler.mainHeadline();
    const subHeadlines = articlesCollection
      .filter(
        (article) =>
          article.data.isSubHeadline === true &&
          (mainHeadline ? mainHeadline.id !== article.id : true)
      )
      .slice(0, 4);

    if (subHeadlines.length === 0) {
      return articlesCollection
        .filter((article) => (mainHeadline ? mainHeadline.id !== article.id : true))
        .slice(0, 4);
    }
    return subHeadlines;
  },
};
