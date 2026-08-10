import type { Screenshot } from "../types/screenshots";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Hero } from "../components/Hero";
import { Screenshots } from "../components/screenshots/Screenshots";
import { Description } from "../components/Description";
import { TrackPredictorGuide } from "../components/TrackPredictorGuide";
import { Footer } from "../components/Footer";

const title = "Penn Station Track Predictor for NJ Transit | VIA NJ";
const description =
  "Predict your NJ Transit track at New York Penn Station before it is announced. View live departures and prepare to board with the VIA NJ iPhone app.";

export default function LandingPage() {
  const screenshots: Screenshot[] = [
    { src: "/screenshots/1.png" },
    { src: "/screenshots/2.png" },
    { src: "/screenshots/3.png" },
    { src: "/screenshots/4.png" },
    { src: "/screenshots/5.png" },
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
          content="https://www.vianj.app/app/apple-icon.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "VIA NJ: NJ Transit Departures & Track Predictions",
              operatingSystem: "iOS",
              applicationCategory: "TravelApplication",
              url: "https://www.vianj.app/",
              downloadUrl:
                "https://apps.apple.com/us/app/njt-departures-predict-tracks/id6742149117",
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
          <TrackPredictorGuide />
          <Screenshots screenshots={screenshots} />
          <Description />
        </main>

        <Footer />
      </div>
    </>
  );
}
