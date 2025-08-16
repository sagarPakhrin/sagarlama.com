"use client";
import { InView } from "react-intersection-observer";
import { getBookmarks } from "@/actions/bookmarks";
import Link from "next/link";
import { useState } from "react";
import { IoIosLink } from "react-icons/io";
import { Spinner } from "@/components/spinner/spinner";

export const VaultList = ({
  bookmarks: initialData,
}: {
  bookmarks: Awaited<ReturnType<typeof getBookmarks>>;
}) => {
  const [data, setData] = useState(initialData);

  const getMore = async () => {
    const newBookmarks = await getBookmarks({
      cursor: data.metadata.cursor,
    });
    setData({
      data: [...data.data, ...newBookmarks.data],
      metadata: newBookmarks.metadata,
    });
  };

  const { metadata, data: bookmarks } = data;

  return (
    <>
      {bookmarks.map((bookmark, idx) => (
        <div
          key={idx}
          className="flex flex-col border-b border-border dark:border-border py-3 px-3.5 text-sm lg:rounded-lg lg:border-none lg:py-2 sm:hover:bg-accent dark:sm:hover:bg-accent rounded-md transition-colors"
        >
          <Link
            href={bookmark.link}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <h2 className="font-medium truncate text-foreground py-1">
              {bookmark.name}
            </h2>
            <div className="flex items-center gap-2">
              <IoIosLink className="w-4 h-4 fill-current text-muted-foreground" />
              <span className="text-sm text-muted-foreground truncate">
                {bookmark.link}
              </span>
            </div>
          </Link>
        </div>
      ))}
      {metadata.cursor && (
        <InView
          onChange={(inView) => {
            if (inView && metadata.cursor) {
              getMore();
            }
          }}
          triggerOnce={false}
          threshold={0}
        >
          <div className="mt-4 flex justify-center">
            <div className="mt-5 flex justify-center">
              <Spinner />
            </div>
          </div>
        </InView>
      )}
    </>
  );
};
