// src/contexts/AS.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ASContextType {
  value: string;
  setValue: (v: string) => void;
}

const ASContext = createContext<ASContextType | undefined>(undefined);

export const ASProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string>("");

  return (
    <ASContext.Provider value={{ value, setValue }}>
      {children}
    </ASContext.Provider>
  );
};

export const useAS = () => {
  const context = useContext(ASContext);
  if (!context) throw new Error("useAS must be used within ASProvider");
  return context;
};
