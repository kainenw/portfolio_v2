"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function usePageTracking() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: router.asPath,
        page_title: document.title,
      });
    }
  }, [router.asPath]);
}
