"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * The gtag `config` call reports the first page view on its own, so this only
 * covers client-side navigations after it.
 */
const AnalyticsPageView = ({ gaId }: { gaId: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (typeof window.gtag !== "function") return;

    const query = searchParams.toString();

    window.gtag("event", "page_view", {
      page_path: query ? `${pathname}?${query}` : pathname,
      page_location: window.location.href,
      page_title: document.title,
      send_to: gaId,
    });
  }, [gaId, pathname, searchParams]);

  return null;
};

export default AnalyticsPageView;
