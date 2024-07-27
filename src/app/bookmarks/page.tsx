import { getBookmarks } from "@/actions/bookmarks";
import { BookmarksList } from "@/components/bookmarks/list";
import { db } from "@/db";
import { DefaultLayout } from "@/layouts/page.layout";
import Link from "next/link";
import { use } from "react";
import { IoIosLink } from "react-icons/io";

export const metadata = {
  title: "Bookmarks",
  description: "Bookmarks of my favorite websites and apps.",
  openGraph: {
    title: "Bookmarks",
    description: "Bookmarks of my favorite websites and apps.",
  },
  twitter: {
    title: "Bookmarks",
    description: "Bookmarks of my favorite websites and apps.",
  },
};

const Bookmarks = async () => {
  const bookmarks = await getBookmarks();

  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold text-gray-800">Bookmarks</h1>
      <p className="text-gray-500">{metadata.description}</p>
      <div className="mt-3">
        <BookmarksList bookmarks={bookmarks} />
      </div>
    </DefaultLayout>
  );
};

export default Bookmarks;
