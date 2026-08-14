import Head from "next/head";
import { Footer } from "../components/Footer";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
      {title}
    </h2>
    {children}
  </section>
);

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | ViaNJ</title>
        <meta
          name="description"
          content="Learn how ViaNJ handles information in the ViaNJ app and on vianj.app."
        />
        <link rel="canonical" href="https://www.vianj.app/privacy-policy" />
      </Head>

      <div className="relative flex min-h-screen flex-col overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[#f8faff]" />
          <div className="absolute left-[5%] top-[10%] h-[40%] w-[40%] rounded-full bg-navy-50 opacity-10 blur-[100px]" />
          <div className="absolute bottom-[20%] right-[10%] h-[30%] w-[30%] rounded-full bg-navy-100 opacity-10 blur-[80px]" />
        </div>

        <main className="relative z-10 flex-1">
          <div className="container mx-auto px-4 py-12 md:py-24">
            <article className="mx-auto max-w-4xl space-y-10 text-gray-700">
              <header className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-gray-900">
                  Privacy Policy
                </h1>
                <p className="text-gray-600">Last updated: August 13, 2026</p>
                <p className="text-lg leading-8">
                  This policy explains how ViaNJ handles information when you
                  use the ViaNJ iOS app or visit vianj.app. ViaNJ is an
                  independent app and is not affiliated with or endorsed by NJ
                  Transit.
                </p>
              </header>

              <Section title="Information the app handles">
                <p>
                  ViaNJ handles only the information needed to provide train,
                  ticket, subscription, recovery, security, and support
                  features. Depending on which features you use, this may
                  include:
                </p>
                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    <strong>Contact information:</strong> your name, email
                    address, and phone number when you sign in to an NJ Transit
                    account, use integrated checkout, or recover a receipt.
                  </li>
                  <li>
                    <strong>NJ Transit account information:</strong> your NJ
                    Transit account identifier, profile, session information,
                    and credentials when you choose to sign in. Credentials are
                    stored in your iPhone Keychain and sent to NJ Transit for
                    authentication; ViaNJ does not store them on ViaNJ servers.
                  </li>
                  <li>
                    <strong>Ticket and purchase information:</strong> selected
                    stations, fare type, ticket quantity, price, confirmation
                    and receipt identifiers, ticket status, and subscription
                    status.
                  </li>
                  <li>
                    <strong>Installation identifier:</strong> a random token
                    stored in your iPhone Keychain. It secures ViaNJ&apos;s
                    receipt-routing, recovery, and diagnostic services. It is
                    not an advertising identifier.
                  </li>
                  <li>
                    <strong>Product interaction and diagnostics:</strong> app
                    version and build, iOS version, a temporary session ID,
                    feature events such as app launch, checkout progress,
                    subscription actions, and ticket recovery outcomes, plus
                    limited technical attributes. Diagnostic events are
                    designed not to contain names, contact information, payment
                    details, ticket barcodes, or full receipt contents.
                  </li>
                </ul>
              </Section>

              <Section title="How ViaNJ uses information">
                <p>ViaNJ uses information to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>show departures, service alerts, fares, and tickets;</li>
                  <li>
                    authenticate with NJ Transit and complete actions you
                    request;
                  </li>
                  <li>
                    route and recover NJ Transit ticket receipts;
                  </li>
                  <li>
                    provide ViaNJ Pro, restore purchases, and determine whether
                    subscription features are available;
                  </li>
                  <li>
                    protect the service, prevent misuse, diagnose failures, and
                    improve reliability; and
                  </li>
                  <li>respond to support and privacy requests.</li>
                </ul>
                <p>
                  ViaNJ does not sell personal information, show third-party
                  advertising, use collected information for advertising, or
                  track you across other companies&apos; apps and websites.
                </p>
              </Section>

              <Section title="Ticket checkout and receipt recovery">
                <p>
                  When you start ticket checkout, ViaNJ sends your delivery
                  email to a ViaNJ-operated routing service hosted by
                  Cloudflare. The service creates a private purchase address so
                  ViaNJ can receive the NJ Transit receipt, associate it with
                  your installation, and make the ticket available for
                  recovery. The service may process the private purchase
                  address, your delivery email, confirmation number, receipt
                  timing, and installation token for these purposes.
                </p>
                <p>
                  Your phone number, trip, fare, and other checkout details are
                  submitted to NJ Transit as part of the ticket purchase. If
                  you manually import a receipt, the email address and
                  confirmation number you provide are sent to NJ Transit to
                  retrieve it.
                </p>
              </Section>

              <Section title="Payments and subscriptions">
                <p>
                  ViaNJ Pro is an optional auto-renewable subscription sold and
                  billed by Apple through StoreKit. Apple processes the
                  purchase and makes subscription status available to the app.
                  ViaNJ does not receive your Apple Account password or full
                  payment-card details from Apple.
                </p>
                <p>
                  NJ Transit fares are separate from ViaNJ Pro. NJ Transit and
                  its payment provider, TrustCommerce, process fare payments.
                  Payment information entered on their secure checkout is
                  governed by their policies. ViaNJ does not store payment-card
                  details on ViaNJ servers.
                </p>
                <p>
                  If you choose to save a ticket payment method in ViaNJ, it is
                  stored locally in your iPhone Keychain. When a linked
                  companion checkout is used, ViaNJ encrypts the payment data
                  to that linked device for the requested transaction. The
                  relay cannot decrypt it, and the companion is designed to use
                  it in memory and clear it after checkout.
                </p>
              </Section>

              <Section title="Information stored on your device">
                <p>
                  ViaNJ stores app preferences, saved stations, tickets,
                  activation state, and recovery state on your device. Contact
                  information, optional NJ Transit credentials, optional saved
                  payment information, installation credentials, and linked
                  companion credentials are stored in the iPhone Keychain.
                  Apple Wallet passes are stored and managed by Apple Wallet.
                </p>
                <p>
                  Local notifications may include trip, departure, ticket, and
                  expiration details. Notification permission is optional and
                  controlled in iOS Settings.
                </p>
              </Section>

              <Section title="Anonymous diagnostics choice">
                <p>
                  Sharing anonymous diagnostics is enabled by default. You can
                  turn it off at any time in ViaNJ Settings. Turning it off
                  clears queued diagnostic events and stops new events from
                  being uploaded. Diagnostics are used for app analytics,
                  security, and reliability, not advertising or cross-app
                  tracking.
                </p>
              </Section>

              <Section title="Service providers and other recipients">
                <p>Information may be processed by:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Apple:</strong> App Store subscriptions, purchase
                    status, Apple Wallet, notifications, and platform services;
                  </li>
                  <li>
                    <strong>NJ Transit:</strong> schedules, alerts, account
                    authentication, fare quotes, ticket purchases, tickets,
                    and receipt recovery;
                  </li>
                  <li>
                    <strong>TrustCommerce:</strong> NJ Transit fare payment
                    processing;
                  </li>
                  <li>
                    <strong>Cloudflare:</strong> hosting and security for
                    ViaNJ&apos;s receipt-routing, recovery, and diagnostic
                    services;
                  </li>
                  <li>
                    <strong>Supabase:</strong> app data services used for train
                    and prediction information; and
                  </li>
                  <li>
                    <strong>Vercel:</strong> website hosting and privacy-focused
                    Web Analytics for vianj.app.
                  </li>
                </ul>
                <p>
                  ViaNJ may also disclose information when required by law, to
                  protect users or the service, or in connection with a merger,
                  acquisition, financing, or sale of the business, subject to
                  applicable law.
                </p>
              </Section>

              <Section title="Website analytics">
                <p>
                  vianj.app uses Vercel Web Analytics to measure page views and
                  understand aggregate website usage. Vercel Web Analytics is
                  designed not to use cookies and uses a daily rotating hash
                  rather than a persistent cross-site identifier. It may
                  process page path, referrer, coarse location, browser, device
                  type, operating system, and event time for aggregate
                  reporting.
                </p>
              </Section>

              <Section title="Retention and security">
                <p>
                  ViaNJ retains server-side information only for as long as
                  reasonably necessary to provide receipt recovery,
                  diagnostics, security, support, and legal compliance. The
                  exact period may vary with the type of information and the
                  reason it is held. Information stored locally remains until
                  you remove it in the app, sign out, clear the applicable
                  setting, or delete the app, subject to iOS and Keychain
                  behavior.
                </p>
                <p>
                  ViaNJ uses transport encryption, device Keychain storage,
                  scoped installation credentials, and limited diagnostic
                  fields. No security measure is perfect, but ViaNJ works to
                  limit collection and protect the information it handles.
                </p>
              </Section>

              <Section title="Your choices and rights">
                <ul className="list-disc space-y-2 pl-6">
                  <li>Disable anonymous diagnostics in ViaNJ Settings.</li>
                  <li>
                    Manage or cancel ViaNJ Pro in your Apple subscription
                    settings.
                  </li>
                  <li>
                    Remove saved ticket-payment information and linked
                    companion access in ViaNJ Settings.
                  </li>
                  <li>
                    Sign out to clear the local NJ Transit session, or delete
                    the app to remove app data subject to iOS and Keychain
                    behavior.
                  </li>
                  <li>
                    Contact us to request access to, correction of, or deletion
                    of information controlled by ViaNJ. We may need to retain
                    limited information when legally required or necessary for
                    security.
                  </li>
                </ul>
                <p>
                  NJ Transit, Apple, TrustCommerce, and other providers control
                  information in their own systems. Requests concerning those
                  systems should be directed to the applicable provider.
                </p>
              </Section>

              <Section title="Children">
                <p>
                  ViaNJ is not directed to children under 13, and ViaNJ does not
                  knowingly collect personal information from children under
                  13. If you believe a child has provided information to ViaNJ,
                  please contact us so we can review and address it.
                </p>
              </Section>

              <Section title="Changes to this policy">
                <p>
                  This policy may be updated as ViaNJ changes. The revised
                  policy will be posted here with a new “Last updated” date.
                  Material changes will be communicated when required by law.
                </p>
              </Section>

              <Section title="Contact">
                <p>
                  For privacy questions or requests, email{" "}
                  <a
                    className="font-medium text-navy-700 underline underline-offset-4"
                    href="mailto:hi@njt.app"
                  >
                    hi@njt.app
                  </a>
                  .
                </p>
              </Section>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
