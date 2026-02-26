import { routes } from "@/data/path";
import Link from "next/link";

function formatCompanyName(slug: string): string {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Path() {
  return (
    <main className="min-h-screen flex items-start justify-center py-12 px-4">
      <div className="bg-white w-full max-w-4xl rounded-sm shadow-lg p-8 sm:p-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-medium text-primary leading-6 mb-3">Andrew Chen</h1>
          <p className="text-sm text-light-text">Resume Directory</p>
        </div>
        <hr className="mb-8" />

        <Link
          href="/"
          className="block bg-primary text-white rounded-sm p-6 mb-8 hover:bg-gray-800 transition-colors duration-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">Main Resume</p>
              <p className="text-sm text-gray-300 mt-1">Default version</p>
            </div>
            <span className="text-2xl">→</span>
          </div>
        </Link>

        <h2 className="uppercase text-primary">Tailored Resumes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {routes.map((route) => (
            <Link
              key={route.company}
              href={`/${route.company}`}
              className="block border border-gray-200 rounded-sm p-4 hover:border-primary hover:shadow-md transition-all duration-200 group"
            >
              <p className="font-medium text-primary text-sm group-hover:underline">
                {formatCompanyName(route.company)}
              </p>
              <p className="text-xs text-light-text mt-1">/{route.company}</p>
            </Link>
          ))}
        </div>

        <p className="text-xs text-light-text text-center mt-8">
          {routes.length} tailored versions
        </p>
      </div>
    </main>
  );
}
