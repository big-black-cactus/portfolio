import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Manrope({ subsets: ["latin"] });


const Macan = localFont({
  src: [
    {
      path: "./font/Thunder-HC.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Thunder-MediumHC.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./font/Thunder-SemiBoldHC.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/Thunder-BoldHC.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./font/Thunder-ExtraBoldHC.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./font/Thunder-BlackHC.ttf",
      weight: "1000",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Artyom Antonenko - Full Stack Developer and UX/UI Designer",
  description: "As a Full Stack Web Developer and UX/UI Designer based in Germany, I specialize in creating seamless digital experiences using Next.js. I&apos;m passionate about bringing innovative web applications to life, focusing on user-centric design. I&apos;ve worked on various projects and startups, excelling both independently and in teams. Whether working on a startup or a larger project, I am committed to crafting solutions that resonate with users.",
  keywords: "Full Stack Developer, UX/UI Designer, Next.js, Web Development, Digital Products, Germany",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" }, // Optional
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
