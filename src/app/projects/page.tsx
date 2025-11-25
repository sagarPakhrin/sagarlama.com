import { getProjects } from "@/actions/projects";
import { ProjectsList } from "@/components/projects/list";
import { DefaultLayout } from "@/layouts/page.layout";

const description = "A collection of my projects and work.";
const title = "Projects";

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

const Projects = async () => {
  const data = await getProjects();

  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold text-foreground">Projects</h1>
      <p className="text-muted-foreground">{metadata.description}</p>
      <div className="mt-6">
        <ProjectsList projects={data} />
      </div>
    </DefaultLayout>
  );
};

export default Projects;

