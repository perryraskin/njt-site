import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/app/apple-icon.png"
              width={300}
              height={300}
              alt="ViaNJ app icon"
              className="rounded-[25%] shadow-lg"
              priority
            />
          </div>
          <div className="md:w-2/3 space-y-4 text-center md:text-left">
            <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              ViaNJ: Trains &amp; Tickets
            </h1>
            <p className="text-lg tracking-tight text-gray-700 md:text-xl max-w-[600px]">
              From departure board to ticket, faster. See live NJ Transit rail
              departures, stay ahead of service changes, and keep your tickets
              ready on iPhone and Apple Wallet.
            </p>
            <Link
              href="#vianj-features"
              className="inline-flex items-center text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-950"
            >
              Explore ViaNJ features
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </Link>
            <div className="flex justify-center md:justify-start">
              <Link
                href="https://apps.apple.com/us/app/vianj-trains-tickets/id6754224152"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="ios-badge.svg"
                  width={200}
                  height={60}
                  alt="Download on the App Store"
                  className="h-[60px] w-auto"
                />
              </Link>
            </div>
            <p className="max-w-[600px] text-xs leading-5 text-gray-500">
              ViaNJ is independent and is not affiliated with or endorsed by NJ
              Transit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
