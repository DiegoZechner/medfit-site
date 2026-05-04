"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function UtmCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined" || !searchParams) return;

    const utmParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid",
    ];

    utmParams.forEach((param) => {
      const val = searchParams.get(param);
      if (val) {
        sessionStorage.setItem(`medfit_${param}`, val);
      }
    });

    if (!sessionStorage.getItem("medfit_referrer")) {
      sessionStorage.setItem("medfit_referrer", document.referrer || "direct");
    }
    
    if (!sessionStorage.getItem("medfit_landing_page")) {
      sessionStorage.setItem("medfit_landing_page", window.location.href);
    }
  }, [searchParams]);

  return null;
}
