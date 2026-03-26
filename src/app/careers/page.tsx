import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { jobs, type EmploymentType } from "@/lib/jobs";

const employmentTypeLabels: Record<EmploymentType, string> = {
  FULL_TIME: "Vollzeit",
  PART_TIME: "Teilzeit",
  CONTRACTOR: "Freiberuflich",
  TEMPORARY: "Befristet",
  INTERN: "Praktikum",
};

export const metadata = {
  title: "Karriere | Nachhilfe Light",
  description: "Offene Stellen bei Nachhilfe Light – werde Teil unseres Teams.",
};

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="mb-4 text-4xl font-bold">Karriere</h1>
          <p className="mb-10 text-lg text-gray-600 dark:text-gray-400">
            Offene Stellen bei Nachhilfe Light
          </p>

          <ul className="space-y-6">
            {jobs.map((job) => (
              <li
                key={job.id}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <h2 className="mb-2 text-xl font-semibold">{job.title}</h2>
                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Standorte:</span>{" "}
                  {job.locations.map((l) => l.addressLocality).join(", ")}
                </p>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Beschäftigungsart:</span>{" "}
                  {employmentTypeLabels[job.employmentType]}
                </p>
                <Link
                  href={`/careers/${job.slug}`}
                  className="btn-modern inline-block rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Zur Stellenanzeige →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
