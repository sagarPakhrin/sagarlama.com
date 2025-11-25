"use client";
import { getProjects } from "@/actions/projects";
import { Spinner } from "@/components/spinner/spinner";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { InView } from "react-intersection-observer";

// Helper function to extract actual image URL from Next.js optimized URLs
const getImageUrl = (url: string | null | undefined): string | null => {
  if (!url) return null;
  try {
    const urlObj = new URL(url);
    // If it's a Next.js optimized image URL, extract the actual image URL
    if (urlObj.pathname.includes("/_next/image")) {
      const imageUrlParam = urlObj.searchParams.get("url");
      if (imageUrlParam) {
        // Decode the URL and construct the full path
        const decodedUrl = decodeURIComponent(imageUrlParam);
        // If it's a relative path, prepend the origin
        if (decodedUrl.startsWith("/")) {
          return `${urlObj.origin}${decodedUrl}`;
        }
        return decodedUrl;
      }
      return null;
    }
    return url;
  } catch {
    return null;
  }
};

// Helper function to check if URL is a valid image URL
const isValidImageUrl = (url: string | null | undefined): boolean => {
  return getImageUrl(url) !== null;
};

export const ProjectsList = ({
  projects: initialData,
}: {
  projects: Awaited<ReturnType<typeof getProjects>>;
}) => {
  const [data, setData] = useState(initialData);

  const getMore = async () => {
    const newProjects = await getProjects({
      cursor: data.metadata.cursor,
    });
    setData({
      data: [...data.data, ...newProjects.data],
      metadata: newProjects.metadata,
    });
  };

  const { metadata, data: projects } = data;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => {
          const imageUrl = getImageUrl(project.preview_image_url);
          const hasValidImage = imageUrl !== null;

          const CardContent = (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
              {hasValidImage && (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      // Hide image on error
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                {project.description && (
                  <CardDescription>{project.description}</CardDescription>
                )}
              </CardHeader>
            </Card>
          );

          return project.url ? (
            <Link
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {CardContent}
            </Link>
          ) : (
            <div key={idx} className="block">
              {CardContent}
            </div>
          );
        })}
      </div>
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

