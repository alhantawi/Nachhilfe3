import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { jobs, SITE_DOMAIN, type EmploymentType } from "@/lib/jobs";

const employmentTypeLabels: Record<EmploymentType, string> = {
  FULL_TIME: "Vollzeit",
  PART_TIME: "Teilzeit",
  CONTRACTOR: "Freiberuflich",
  TEMPORARY: "Befristet",
  INTERN: "Praktikum",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: `${job.title} | Nachhilfe Light`,
    description: `Stelle bei Nachhilfe Light: ${job.title}. Standorte: ${job.locations.map((l) => l.addressLocality).join(", ")}.`,
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return notFound();

  const pageUrl = `${SITE_DOMAIN}/careers/${job.slug}`;
  const whatsappUrl = `https://wa.me/${job.whatsappNumber}?text=${encodeURIComponent(job.whatsappMessage)}`;

  const jobPostingStructuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.descriptionHtml,
    datePosted: job.datePosted,
    validThrough: `${job.validThrough}T23:59`,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: job.hiringOrganization.name,
      sameAs: job.hiringOrganization.sameAs,
      logo: job.hiringOrganization.logo,
    },
    jobLocation: job.locations.map((loc) => ({
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.streetAddress,
        addressLocality: loc.addressLocality,
        addressRegion: loc.addressRegion,
        postalCode: loc.postalCode,
        addressCountry: loc.addressCountry,
      },
    })),
    ...(job.isRemote ? { jobLocationType: "TELECOMMUTE" } : {}),
    ...(job.applicantLocationRequirements
      ? {
          applicantLocationRequirements: {
            "@type": "Country",
            name: job.applicantLocationRequirements,
          },
        }
      : {}),
    directApply: true,
    identifier: {
      "@type": "PropertyValue",
      name: job.hiringOrganization.name,
      value: job.id,
    },
    url: pageUrl,
    applicantInstructions: whatsappUrl,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero banner */}
      <section className="bg-gradient-to-br from-primary/20 via-background to-background pt-10 pb-8">
        <div className="container mx-auto max-w-3xl px-4">
          <Link
            href="/careers"
            className="mb-6 inline-flex items-center gap-1.5 rounded text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                clipRule="evenodd"
              />
            </svg>
            Alle Stellen
          </Link>

          <h1 className="mb-4 text-3xl font-bold leading-snug sm:text-4xl">
            {job.title}
          </h1>

          {/* Meta row */}
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-sm font-medium">
              {employmentTypeLabels[job.employmentType]}
            </Badge>
            <span className="text-sm text-muted-foreground">
              Veröffentlicht: {job.datePosted}
            </span>
          </div>

          {/* Location badges */}
          <div className="flex flex-wrap items-center gap-2" aria-label="Standorte">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Standorte:
            </span>
            {job.locations.map((l) => (
              <Badge
                key={l.addressLocality}
                variant="outline"
                className="rounded-full px-3 py-1 text-sm"
              >
                {l.addressLocality}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1 py-10">
        <div className="container mx-auto max-w-3xl px-4">
          {/* Job description in a card */}
          <Card className="mb-8 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div
                className="prose prose-lg dark:prose-invert max-w-none prose-h2:mb-3 prose-h2:mt-6 prose-h2:text-xl prose-h2:font-semibold prose-ul:my-3 prose-li:my-1"
                dangerouslySetInnerHTML={{ __html: job.descriptionHtml }}
              />
            </CardContent>
          </Card>

          {/* CTA section */}
          <Card className="border-[#25D366]/40 bg-[#f0fdf4] dark:bg-[#052e16]/40 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <p className="mb-4 text-base font-medium text-gray-700 dark:text-gray-300">
                Interesse geweckt? Schreib uns direkt auf WhatsApp – wir melden
                uns schnell zurück!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-md transition hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.123 1.523 5.858L.057 23.886a.5.5 0 0 0 .611.61l6.101-1.437A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 0 1-5.073-1.38l-.364-.215-3.763.886.914-3.669-.235-.377A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Jetzt per WhatsApp bewerben
              </a>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingStructuredData) }}
      />
    </div>
  );
}
