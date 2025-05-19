import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const Impressum = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow px-6 py-8 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

        <p><strong>Stand:</strong> Mai 2025</p>
        <p className="mt-4">
          Wir freuen uns über Ihren Besuch auf unserer Website <strong>www.nachhilfelight.de</strong> und Ihr Interesse an unserem Nachhilfeangebot. Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie gemäß Art. 13 DSGVO über Art, Umfang und Zweck der Datenverarbeitung.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Verantwortlicher gemäß Art. 4 Abs. 7 DSGVO</h2>
        <p>
          Mustafa Alhantawi<br />
          NachhilfeLight – Anbieter für Lernförderung<br />
          Podbielskistraße 274<br />
          30655 Hannover<br />
          Deutschland<br />
          Telefon: 0176 84711406<br />
          E-Mail: info@nachhilfeleight.de<br />
          Web: www.nachhilfelight.de
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Erhebung und Speicherung personenbezogener Daten beim Besuch der Website</h2>
        <p>Beim Besuch unserer Website übermittelt Ihr Browser automatisch folgende Daten:</p>
        <ul className="list-disc pl-6">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugrufs</li>
          <li>aufgerufene Seite/Datei</li>
          <li>Browsertyp und -version</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer-URL</li>
        </ul>
        <p>Diese Daten dienen der technischen Überwachung und Sicherheit und werden nach 7 Tagen gelöscht.</p>

        <h2 className="text-xl font-semibold mt-6">3. Kontakt per E-Mail, WhatsApp oder Kontaktformular</h2>
        <p>
          Wenn Sie uns kontaktieren, speichern wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage:
        </p>
        <ul className="list-disc pl-6">
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer (falls angegeben)</li>
          <li>Ihre Nachricht / Anfrage</li>
        </ul>
        <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO</p>

        <h2 className="text-xl font-semibold mt-6">4. WhatsApp-Nutzung</h2>
        <p>
          Wenn Sie uns über WhatsApp kontaktieren, gelten die Datenschutzbedingungen von WhatsApp. Wir speichern Ihre Daten nur zur Bearbeitung Ihrer Anfrage.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Ihre Rechte</h2>
        <p>Sie haben das Recht auf:</p>
        <ul className="list-disc pl-6">
          <li>Auskunft über Ihre gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung Ihrer Daten</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
          <li>Widerspruch gegen die Verarbeitung</li>
        </ul>
        <p>Schreiben Sie dafür an: info@nachhilfeleight.de</p>

        <h2 className="text-xl font-semibold mt-6">6. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
          Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
          Prinzenstraße 5, 30159 Hannover<br />
          Web: <a href="https://www.lfd.niedersachsen.de" className="text-blue-600 underline">www.lfd.niedersachsen.de</a>
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Änderungen dieser Datenschutzerklärung</h2>
        <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Die aktuelle Version finden Sie immer auf unserer Website.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;