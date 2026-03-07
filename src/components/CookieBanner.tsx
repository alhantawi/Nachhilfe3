"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  decided: boolean;
};

const STORAGE_KEY = "cookie_consent";

function loadConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsent;
  } catch {
    return null;
  }
}

function saveConsent(consent: CookieConsent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export default function CookieBanner() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  // Track whether user has previously decided (controls the re-open button)
  const [decided, setDecided] = useState(false);

  useEffect(() => {
    const consent = loadConsent();
    if (consent?.decided) {
      setDecided(true);
      setAnalytics(consent.analytics);
      setMarketing(consent.marketing);
    } else {
      setVisible(true);
    }
  }, []);

  function applyConsent(consent: CookieConsent) {
    saveConsent(consent);
    setAnalytics(consent.analytics);
    setMarketing(consent.marketing);
    setDecided(true);
    setVisible(false);
    setShowPreferences(false);
    // NOTE: Integrate with actual analytics/marketing libraries here.
    // For example, conditionally load Google Analytics, Meta Pixel, etc.
    // based on consent.analytics and consent.marketing values.
  }

  function handleAcceptAll() {
    applyConsent({ necessary: true, analytics: true, marketing: true, decided: true });
  }

  function handleRejectNonEssential() {
    applyConsent({ necessary: true, analytics: false, marketing: false, decided: true });
  }

  function handleSavePreferences() {
    applyConsent({ necessary: true, analytics, marketing, decided: true });
  }

  function handleReopen() {
    setShowPreferences(false);
    setVisible(true);
  }

  return (
    <>
      {/* Cookie consent banner */}
      <div
        role="dialog"
        aria-label={t("cookie.banner.title")}
        dir={isRtl ? "rtl" : "ltr"}
        className={[
          "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-lg",
          "transition-all duration-300 ease-out",
          visible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-8 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-5">
          {/* Header */}
          <div className={`flex items-start gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
            <span className="text-2xl leading-none mt-0.5" aria-hidden="true">🍪</span>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-gray-900 text-base leading-snug">
                {t("cookie.banner.title")}
              </h2>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                {t("cookie.banner.description")}
                {" "}
                <a
                  href="/Impressum"
                  className="underline text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {t("cookie.banner.learnMore")}
                </a>
              </p>
            </div>
          </div>

          {/* Expandable preferences panel */}
          <div
            className={[
              "overflow-hidden transition-all duration-300",
              showPreferences ? "max-h-96 mt-4" : "max-h-0",
            ].join(" ")}
          >
            <div className="space-y-3">
              {/* Necessary – always on */}
              <PreferenceRow
                label={t("cookie.banner.necessary")}
                description={t("cookie.banner.necessary.description")}
                checked={true}
                disabled={true}
                isRtl={isRtl}
                id="cookie-necessary"
              />
              {/* Analytics */}
              <PreferenceRow
                label={t("cookie.banner.analytics")}
                description={t("cookie.banner.analytics.description")}
                checked={analytics}
                disabled={false}
                isRtl={isRtl}
                id="cookie-analytics"
                onChange={setAnalytics}
              />
              {/* Marketing */}
              <PreferenceRow
                label={t("cookie.banner.marketing")}
                description={t("cookie.banner.marketing.description")}
                checked={marketing}
                disabled={false}
                isRtl={isRtl}
                id="cookie-marketing"
                onChange={setMarketing}
              />
            </div>
          </div>

          {/* Action buttons */}
          <div
            className={[
              "mt-4 flex flex-wrap gap-2",
              isRtl ? "flex-row-reverse" : "",
            ].join(" ")}
          >
            <Button
              variant="modern"
              size="sm"
              onClick={handleAcceptAll}
              className="flex-1 min-w-[120px]"
            >
              {t("cookie.banner.acceptAll")}
            </Button>

            {showPreferences ? (
              <Button
                variant="default"
                size="sm"
                onClick={handleSavePreferences}
                className="flex-1 min-w-[120px]"
              >
                {t("cookie.banner.savePreferences")}
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreferences(true)}
                className="flex-1 min-w-[120px]"
              >
                {t("cookie.banner.managePreferences")}
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={handleRejectNonEssential}
              className="flex-1 min-w-[120px]"
            >
              {t("cookie.banner.rejectNonEssential")}
            </Button>
          </div>
        </div>
      </div>

      {/* Re-open button – shown after user has decided */}
      {decided && !visible && (
        <button
          type="button"
          aria-label={t("cookie.settings.button")}
          onClick={handleReopen}
          className="fixed bottom-4 right-4 z-40 bg-white border border-gray-200 rounded-full shadow-md p-2 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <Cookie className="w-5 h-5 text-gray-600" aria-hidden="true" />
        </button>
      )}
    </>
  );
}

// ─── Sub-component: individual preference toggle row ───────────────────────

type PreferenceRowProps = {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  disabled: boolean;
  isRtl: boolean;
  onChange?: (value: boolean) => void;
};

function PreferenceRow({
  id,
  label,
  description,
  checked,
  disabled,
  isRtl,
  onChange,
}: PreferenceRowProps) {
  return (
    <div
      className={[
        "flex items-start gap-3 py-2 px-3 rounded-lg bg-gray-50",
        isRtl ? "flex-row-reverse" : "",
      ].join(" ")}
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800">{label}</p>
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{description}</p>
      </div>
      <div className="flex-shrink-0 mt-0.5">
        <label htmlFor={id} className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            role="switch"
            id={id}
            checked={checked}
            disabled={disabled}
            aria-checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            className="sr-only peer"
          />
          <div
            className={[
              "w-9 h-5 rounded-full border-2 transition-colors duration-200",
              "peer-focus:ring-2 peer-focus:ring-offset-1 peer-focus:ring-blue-500",
              checked ? "bg-blue-600 border-blue-600" : "bg-gray-200 border-gray-300",
              disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
            ].join(" ")}
          />
          <div
            className={[
              "absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200",
              checked ? "translate-x-4" : "translate-x-0",
            ].join(" ")}
          />
        </label>
      </div>
    </div>
  );
}
