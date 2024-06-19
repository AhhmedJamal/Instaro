import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.scss";
import CustomThemeProvider from "@/components/ThemeMode/CustomThemeProvider";
import ThemeMode from "@/components/ThemeMode/ThemeMode";

const myFont = localFont({
  src: "../../public/fonts/Merich.otf",
  display: "swap",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Instaro",
  description: "social media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={myFont.className}>
        <ThemeMode>
          <CustomThemeProvider>{children}</CustomThemeProvider>
        </ThemeMode>
      </body>
    </html>
  );
}
