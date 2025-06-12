"use client";
import { createContext, useState } from "react";

export const LanguageContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(["", () => {}]);


export function Language({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [lang, setLang] = useState<string>("de");
  
    return (
      <LanguageContext.Provider value={[lang, setLang]}>
        {children}
      </LanguageContext.Provider>
    );
  }
  