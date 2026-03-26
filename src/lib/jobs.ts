export const SITE_DOMAIN = "https://www.nachhilfelight.de";

export type EmploymentType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACTOR"
  | "TEMPORARY"
  | "INTERN";

export type JobLocation = {
  streetAddress?: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry: string;
};

export type Job = {
  id: string;
  slug: string;
  title: string;
  descriptionHtml: string;
  datePosted: string; // YYYY-MM-DD
  validThrough: string; // YYYY-MM-DD
  employmentType: EmploymentType;
  hiringOrganization: {
    name: string;
    sameAs?: string;
    logo?: string;
  };
  locations: JobLocation[];
  isRemote?: boolean;
  applicantLocationRequirements?: string; // e.g. "Germany"
  whatsappNumber: string; // international format without +, e.g. "491741545975"
  whatsappMessage: string;
};

export const jobs: Job[] = [
  {
    id: "nachhilfelehrer-deutsch-multi-city-001",
    slug: "nachhilfelehrer-deutsch",
    title:
      "Nachhilfelehrer Deutsch (m/w/d) \u2013 ideal f\u00fcr Abiturient/innen, Studierende & junge Talente",
    descriptionHtml: `
      <h2>Über uns</h2>
      <p>Nachhilfe Light unterstützt Kinder und Jugendliche mit individueller und alltagsnaher Lernförderung. Für den Bereich Deutsch suchen wir engagierte Verstärkung in Schwerin, Hagenow, Nordhorn und Hannover.</p>

      <h2>Deine Aufgaben</h2>
      <ul>
        <li>Nachhilfe und Lernbegleitung im Fach Deutsch und Mathe</li>
        <li>Unterstützung bei Rechtschreibung, Lesen, Textverständnis und Ausdruck</li>
        <li>Geduldige Begleitung von Kindern und Jugendlichen</li>
        <li>Motivierende und verständliche Erklärung von Lerninhalten</li>
      </ul>

      <h2>Dein Profil</h2>
      <ul>
        <li>Sehr gute Deutschkenntnisse</li>
        <li>Freude an der Arbeit mit Kindern</li>
        <li>Zuverlässigkeit und Geduld</li>
        <li>Sympathisches Auftreten</li>
        <li>Erste Erfahrung in Nachhilfe, Betreuung oder pädagogischem Bereich von Vorteil, aber nicht zwingend erforderlich</li>
      </ul>

      <h2>Ideal für dich, wenn du</h2>
      <ul>
        <li>Abi oder Fachabi machst oder abgeschlossen hast</li>
        <li>Studierst</li>
        <li>Lehramt interessant findest</li>
        <li>Einen sinnvollen Nebenjob suchst</li>
      </ul>

      <h2>Wir bieten</h2>
      <ul>
        <li>Flexible Arbeitszeiten</li>
        <li>Sinnvolle Tätigkeit</li>
        <li>Freundliche Zusammenarbeit</li>
        <li>Praktische Erfahrung im Bildungsbereich</li>
      </ul>

      <p>Wir freuen uns auf deine Bewerbung.</p>
    `,
    datePosted: "2026-03-26",
    validThrough: "2026-06-30",
    employmentType: "PART_TIME",
    hiringOrganization: {
      name: "Nachhilfe Light",
      sameAs: SITE_DOMAIN,
      logo: `${SITE_DOMAIN}/logo.png`,
    },
    locations: [
      { addressLocality: "Schwerin", addressCountry: "DE" },
      { addressLocality: "Hagenow", addressCountry: "DE" },
      { addressLocality: "Nordhorn", addressCountry: "DE" },
      { addressLocality: "Hannover", addressCountry: "DE" },
    ],
    applicantLocationRequirements: "Germany",
    whatsappNumber: "491741545975",
    whatsappMessage:
      "Hallo, ich möchte mich als Nachhilfelehrer Deutsch bewerben.",
  },
];
