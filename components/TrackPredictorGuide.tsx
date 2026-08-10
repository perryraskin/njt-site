const steps = [
  {
    number: "01",
    title: "Check your departure",
    description:
      "Open VIA NJ to see current NJ Transit departures from New York Penn Station in one clear list.",
  },
  {
    number: "02",
    title: "See the predicted track",
    description:
      "Review the track prediction before the official assignment appears, so you can move closer to the likely boarding area.",
  },
  {
    number: "03",
    title: "Confirm before boarding",
    description:
      "Predictions are estimates. Always confirm the final track on official station boards and announcements.",
  },
];

export function TrackPredictorGuide() {
  return (
    <section
      id="penn-station-track-predictor"
      aria-labelledby="track-predictor-heading"
      className="w-full scroll-mt-8 border-y border-slate-200/80 bg-white/70 py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-600">
              Built for New York Penn
            </p>
            <h2
              id="track-predictor-heading"
              className="text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl"
            >
              A Penn Station track predictor for NJ Transit commuters
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-700 md:text-lg">
              VIA NJ combines live departure information with track predictions
              for NJ Transit trains at New York Penn Station. It gives commuters
              an early signal before the track is officially posted, making the
              wait for boarding calmer and more informed.
            </p>
          </div>

          <ol className="grid gap-4">
            {steps.map((step) => (
              <li
                key={step.number}
                className="grid grid-cols-[3rem_1fr] gap-4 rounded-2xl border border-slate-200 bg-[#f8faff] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] md:grid-cols-[4rem_1fr] md:p-6"
              >
                <span className="font-mono text-sm font-bold tracking-widest text-slate-500">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 leading-6 text-gray-700">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
