import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { jobs, SITE_DOMAIN } from "@/lib/jobs";

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
      <main className="flex-1 py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="mb-3 text-3xl font-bold">{job.title}</h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            <span className="font-medium">Standorte:</span>{" "}
            {job.locations.map((l) => l.addressLocality).join(", ")}
          </p>

          <div
            className="prose prose-lg dark:prose-invert mb-10"
            dangerouslySetInnerHTML={{ __html: job.descriptionHtml }}
          />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-[#1ebe5d]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.123 1.523 5.858L.057 23.886a.5.5 0 0 0 .611.61l6.101-1.437A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 0 1-5.073-1.38l-.364-.215-3.763.886.914-3.669-.235-.377A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Jetzt per WhatsApp bewerben
          </a>
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
