import { Bell, Clock3, Ticket, WalletCards } from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Live departures",
    description:
      "See boarding status, service alerts, favorite stations, and track predictions in one clear rail departure view.",
  },
  {
    icon: Ticket,
    title: "Tickets together",
    description:
      "Organize issued tickets, control activation, and recover a ticket from an NJ Transit receipt when you need to.",
  },
  {
    icon: WalletCards,
    title: "Ready in Wallet",
    description:
      "Add an activated ticket to Apple Wallet and keep it close on your iPhone when it is time to board.",
  },
  {
    icon: Bell,
    title: "Fewer surprises",
    description:
      "Check live service information before the platform fills and confirm final tracks on official station boards.",
  },
];

export function FeatureOverview() {
  return (
    <section
      id="vianj-features"
      aria-labelledby="vianj-features-heading"
      className="w-full scroll-mt-8 border-y border-slate-200/80 bg-white/70 py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
            Built for NJ Transit rail riders
          </p>
          <h2
            id="vianj-features-heading"
            className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl"
          >
            Plan the train. Keep the ticket. Get moving.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-[#f8faff] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                >
                  <Icon aria-hidden="true" className="h-7 w-7 text-blue-600" />
                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-7 text-gray-700">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
