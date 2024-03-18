import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviders from "./provider";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "남예지 포트폴리오",
    description: "정리하는 개발자 남예지입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <div className="flex flex-col justify-between min-h-screen">
                    <ThemeProviders>
                        <Header />
                        <div>{children}</div>
                        <Footer />
                    </ThemeProviders>
                    {/* <ThemeProvider attribute="class">{children}</ThemeProvider> */}
                </div>
            </body>
        </html>
    );
}
