"use server";

import { db } from "@/db";
import { bookmarks } from "@/db/schema";
import { count } from "drizzle-orm";

type BookmarksQuery = {
  cursor?: number;
  pageSize?: number;
};

export const getBookmarks = async ({
  cursor,
  pageSize = 20,
}: BookmarksQuery = {}) => {
  "use server";
  try {
    const data = await db.query.bookmarks.findMany({
      limit: pageSize,
      where: (bookmarks, { gt }) =>
        cursor ? gt(bookmarks.id, cursor) : undefined,
    });
    const total = await db.select({ count: count() }).from(bookmarks);

    const hasMoreData = data.length === pageSize; // if there is no more data, data length will be null but pageSize will be 3

    const nextCursor = hasMoreData ? data[data.length - 1]?.id : undefined;

    const response = {
      data: data,
      metadata: {
        total: total?.[0]?.count || 0,
        cursor: nextCursor,
      },
    };

    return response;
  } catch (error: unknown) {
    throw new Error(`An error occurred: ${error}`);
  }
};
