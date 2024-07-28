import { getBookmarks } from "@/actions/bookmarks";
import { VaultList } from "@/components/bookmarks/list";
import { DefaultLayout } from "@/layouts/page.layout";

const description =
  "A collection of my favorite websites, apps, articles, and more.";
const title = "Vault";

const og = {
  title,
  description,
};

export const metadata = {
  title,
  description,
  openGraph: og,
  twitter: og,
};

const Vault = async () => {
  const data = await getBookmarks();

  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold text-gray-800">Vault</h1>
      <p className="text-gray-500">{metadata.description}</p>
      <div className="mt-3">
        <VaultList bookmarks={data} />
      </div>
    </DefaultLayout>
  );
};

export default Vault;
