import type { Screenshot } from "../types/screenshots";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Hero } from "../components/Hero";
import { Screenshots } from "../components/screenshots/Screenshots";
import { Description } from "../components/Description";
import { FeatureOverview } from "../components/FeatureOverview";
import { Footer } from "../components/Footer";

const title = "ViaNJ: NJ Transit Trains & Tickets | Official App";
const description =
  "See live NJ Transit rail departures, track predictions, service alerts, tickets, checkout, recovery, and Apple Wallet tools in ViaNJ for iPhone.";

export default function LandingPage() {
  const screenshots: Screenshot[] = [
    {
      src: "/screenshots/1.jpg",
      alt: "ViaNJ live departures with boarding status and track predictions",
    },
    {
      src: "/screenshots/2.jpg",
      alt: "ViaNJ My Tickets screen with an active NJ Transit ticket",
    },
    {
      src: "/screenshots/3.jpg",
      alt: "An activated NJ Transit ticket ready to add to Apple Wallet",
    },
    {
      src: "/screenshots/4.jpg",
      alt: "ViaNJ integrated ticket checkout route selection",
    },
    {
      src: "/screenshots/5.jpg",
      alt: "An NJ Transit ticket available from the iPhone Lock Screen",
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.vianj.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vianj.app/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://www.vianj.app/og.jpg"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="672" />
        <meta
          property="og:image:alt"
          content="ViaNJ: Trains & Tickets"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.vianj.app/og.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "ViaNJ: Trains & Tickets",
              operatingSystem: "iOS",
              applicationCategory: "TravelApplication",
              url: "https://www.vianj.app/",
              downloadUrl:
                "https://apps.apple.com/us/app/vianj-trains-tickets/id6754224152",
              description,
            }),
          }}
        />
      </Head>
      <div className="flex min-h-screen flex-col relative overflow-hidden">
        {/* TestFlight Banner */}
        <Banner />

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[#f8faff]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] rounded-full bg-navy-50 blur-[100px] animate-float-slow"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-navy-100 blur-[80px] animate-float-medium"></div>
            <div className="absolute top-[60%] left-[30%] w-[25%] h-[25%] rounded-full bg-navy-200 blur-[60px] animate-float-fast"></div>
          </div>
        </div>

        <main className="flex-1 relative z-10">
          <Hero />
          <FeatureOverview />
          <Screenshots screenshots={screenshots} />
          <Description />
        </main>

        <Footer />
      </div>
    </>
  );
}
