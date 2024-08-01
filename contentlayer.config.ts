import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
  },
  readingTime: {
    type: "json",
    resolve: (doc) => {
      return readingTime(doc.body.raw);
    },
  },
  slugAsParams: {
    type: "string",
    // resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    resolve: (doc) => {
      console.log(doc._raw.flattenedPath);
      return doc._raw.flattenedPath.split("/").join("/");
    },
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    published: { type: "boolean", required: true },
    // exerpt: { type: 'string', required: true },
    metadata: { type: "string", required: false },
    metadescription: { type: "string", required: true },
    metakeywords: { type: "string", required: false },
    cover_image: { type: "string", required: true },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields,
}));

const options = {
  keepBackground: false,
  // theme: "github",
};

export default makeSource({
  contentDirPath: "src/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        // @ts-ignore
        rehypePrettyCode,
        options,
      ],
    ],
  },
});
