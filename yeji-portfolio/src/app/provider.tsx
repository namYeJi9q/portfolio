"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const ThemeProviders = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <>{children}</>
        </ThemeProvider>
    );
};
export default ThemeProviders;
