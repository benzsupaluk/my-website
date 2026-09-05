import { Suspense } from "react";
import Script from "next/script";

import AnalyticsPageView from "./AnalyticsPageView";

const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

/**
 * Renders nothing when NEXT_PUBLIC_GOOGLE_ANALYTICS_ID is unset, so local and
 * preview runs stay out of the property.
 */
const Analytics = () => {
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
      {/* useSearchParams needs a boundary so pages can still render statically. */}
      <Suspense fallback={null}>
        <AnalyticsPageView gaId={gaId} />
      </Suspense>
    </>
  );
};

export default Analytics;
