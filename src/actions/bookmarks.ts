"use server";

import { db } from "@/db";
import { bookmarks } from "@/db/schema";
import { count, desc, gt } from "drizzle-orm";

type BookmarksQuery = {
  cursor?: number;
  pageSize?: number;
};

export const getBookmarks = async ({
  cursor,
  pageSize = 10,
}: BookmarksQuery = {}) => {
  "use server";
  try {
    // Build query with cursor-based pagination
    let data;

    if (cursor) {
      data = await db
        .select()
        .from(bookmarks)
        .where(gt(bookmarks.id, cursor))
        .orderBy(desc(bookmarks.id))
        .limit(pageSize);
    } else {
      data = await db
        .select()
        .from(bookmarks)
        .orderBy(desc(bookmarks.id))
        .limit(pageSize);
    }

    // Get total count
    const totalResult = await db.select({ count: count() }).from(bookmarks);
    const total = totalResult[0]?.count || 0;

    // Check if there's more data
    const hasMoreData = data.length === pageSize;
    const nextCursor = hasMoreData ? data[data.length - 1]?.id : undefined;

    const response = {
      data: data,
      metadata: {
        total: total,
        cursor: nextCursor,
      },
    };

    return response;
  } catch (error: unknown) {
    console.error("Error in getBookmarks:", error);
    throw new Error(`An error occurred: ${error}`);
  }
};
