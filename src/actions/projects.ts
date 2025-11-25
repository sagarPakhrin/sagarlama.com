"use server";

import { db } from "@/db";
import { projects } from "@/db/schema";
import { count, desc, gt } from "drizzle-orm";

type ProjectsQuery = {
  cursor?: number;
  pageSize?: number;
};

export const getProjects = async ({
  cursor,
  pageSize = 10,
}: ProjectsQuery = {}) => {
  "use server";
  try {
    // Build query with cursor-based pagination
    let data;

    if (cursor) {
      data = await db
        .select()
        .from(projects)
        .where(gt(projects.id, cursor))
        .orderBy(desc(projects.id))
        .limit(pageSize);
    } else {
      data = await db
        .select()
        .from(projects)
        .orderBy(desc(projects.id))
        .limit(pageSize);
    }

    // Get total count
    const totalResult = await db.select({ count: count() }).from(projects);
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
    console.error("Error in getProjects:", error);
    throw new Error(`An error occurred: ${error}`);
  }
};

