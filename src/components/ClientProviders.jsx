"use client";

import { LanguageProvider } from "@/context/LanguageProvider";

export default function ClientProviders({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
