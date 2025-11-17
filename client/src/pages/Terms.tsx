import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Terms() {
  return (
    <>
      <SEOHead
        title="Terms of Use - BetterFriend"
        description="Read BetterFriend’s Terms of Use for our private audio and video calling platform, including eligibility, user obligations, payments, dispute resolution, and grievance redressal."
        canonical="https://www.betterfriend.live/terms"
      />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-16">
          <article className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">
                Last updated: November 15, 2025
              </p>
              <h1 className="text-4xl font-display font-bold mb-2">
                Terms of Use
              </h1>
              <p className="text-base text-muted-foreground">
                These Terms of Use (“Terms”) are designed to ensure that everyone
                has a safe, respectful, and smooth experience on{" "}
                <strong>BetterFriend</strong>. These Terms also incorporate, by
                reference, specific Terms of Use applicable to{" "}
                <strong>Hosts</strong>, which are accessible via the
                appropriate in-app link.
              </p>
              <p className="text-base text-muted-foreground mt-4">
                These Terms apply to your use of our website{" "}
                <span className="underline">www.betterfriend.live</span> and our
                mobile application (the “App”), together referred to as{" "}
                <strong>BetterFriend</strong>. The App is operated by{" "}
                <strong>Brewing Conversations Pvt Ltd</strong> (the “Company”),
                a company registered in India with its office at{" "}
                <strong>
                  48-B Ambamata Scheme, Udaipur, Rajasthan – 313003, India
                </strong>
                .
              </p>
              <p className="text-base text-muted-foreground mt-4">
                “We”, “our” or “us” refers to Brewing Conversations Pvt Ltd, and
                “you” or “your” refers to any user of BetterFriend.
              </p>
              <p className="text-base text-muted-foreground mt-4">
                These Terms must be read together with our{" "}
                <a href="/privacy" className="underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/guidelines" className="underline">
                  Community Guidelines
                </a>{" "}
                (collectively, the “Platform Policies”). By using BetterFriend
                and accepting the Platform Policies when signing up, you confirm
                that you have read and accepted them. If you do not agree to any
                of the Platform Policies, please do not use BetterFriend.
              </p>
              <p className="text-base text-muted-foreground mt-4">
                You are also responsible for ensuring that you are permitted to
                access and use BetterFriend under the laws of your jurisdiction.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* 1. About the App */}
              <section id="about-the-app" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  1. About the App
                </h2>
                <p className="text-muted-foreground">
                  BetterFriend is a platform that allows users to connect and
                  interact with others through one-on-one audio and video calls.
                  These interactions are entirely voluntary and initiated at
                  users’ discretion. Calls can be made using virtual coins
                  (“Coins”), which can be purchased within the App. Users also
                  have the option to buy and send virtual gifts to others on
                  BetterFriend (together, the “Services”).
                </p>
                <p className="text-muted-foreground mt-4">
                  While you are free to choose whom you interact with, certain
                  types of behaviour and interactions are strictly not allowed.
                  Please refer to our{" "}
                  <a href="/guidelines" className="underline">
                    Community Guidelines
                  </a>{" "}
                  to understand what is permitted and what is prohibited on
                  BetterFriend.
                </p>
                <p className="text-muted-foreground mt-4">
                  By starting a transaction to use any of the Services, you
                  agree that you are entering into a legally binding agreement
                  with us for the provision of those Services.
                </p>
              </section>

              {/* 2. Changes to the Terms */}
              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  2. Changes to the Terms
                </h2>
                <p className="text-muted-foreground">
                  We may update the Platform Policies from time to time,
                  including to reflect changes in the Services we offer or to
                  improve how BetterFriend operates. This may include modifying,
                  disabling, or removing certain features or services, either
                  temporarily or permanently, at our discretion.
                </p>
                <p className="text-muted-foreground mt-4">
                  Where any change is material or affects your rights or
                  obligations, we will take reasonable steps to notify you, for
                  example, by updating this page or showing an in-app
                  notification.
                </p>
                <p className="text-muted-foreground mt-4">
                  If any change requires your consent under applicable law, we
                  will obtain it before implementing the change.
                </p>
                <p className="text-muted-foreground mt-4">
                  By continuing to use BetterFriend after updated Platform
                  Policies take effect, you agree to be bound by them. We
                  encourage you to review this page periodically to stay
                  informed about any updates.
                </p>
              </section>

              {/* 3. Eligibility */}
              <section id="eligibility" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  3. Eligibility
                </h2>
                <p className="text-muted-foreground">
                  You may use BetterFriend and avail the Services only if you
                  are capable of forming a binding agreement with us. You must
                  be at least 18 years of age. You must also be legally
                  permitted to use BetterFriend and the Services under the laws
                  of your country.
                </p>
              </section>

              {/* 4. Signing Up */}
              <section id="signing-up" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  4. Signing Up
                </h2>
                <p className="text-muted-foreground">
                  To use BetterFriend, you need to create an account by
                  providing your username, mobile number, gender, and age. Once
                  your account is created, you can start using the Services.
                  Please refer to our{" "}
                  <a href="/privacy" className="underline">
                    Privacy Policy
                  </a>{" "}
                  for details on how we handle this information.
                </p>
                <p className="text-muted-foreground mt-4">
                  You agree to provide accurate and complete information during
                  registration and to keep it up to date. You are responsible
                  for all activity that takes place through your account, so
                  please keep your login credentials secure. If you notice any
                  unauthorised use of your account, contact our support team
                  immediately.
                </p>
                <p className="text-muted-foreground mt-4">
                  You agree and consent to receive communication on your
                  registered mobile number, even if it is listed under the
                  DND/NCPR list under TRAI regulations. You also authorise us to
                  share or disclose information to third-party service
                  providers, affiliates, group companies, and their authorised
                  agents as reasonably required to provide the Services.
                </p>
                <p className="text-muted-foreground mt-4">
                  Your use of the App means you agree to how we handle your
                  personal data as described in our{" "}
                  <a href="/privacy" className="underline">
                    Privacy Policy
                  </a>
                  . Please review it to understand what data we collect and how
                  we use it.
                </p>
                <p className="text-muted-foreground mt-4">
                  Subject to the Platform Policies, we grant you a limited,
                  non-exclusive, non-transferable, and revocable licence to use
                  the App and Services. This includes any software we provide as
                  part of the App, which may be updated automatically from time
                  to time.
                </p>
              </section>

              {/* 5. Account Suspension, Blocking, or Deletion */}
              <section id="account-actions" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  5. Account Suspension, Blocking, or Deletion
                </h2>
                <p className="text-muted-foreground">
                  We may suspend, block, or delete your account in the following
                  circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                  <li>
                    If your account remains inactive for a prolonged period, as
                    defined in our internal policies;
                  </li>
                  <li>
                    If we are directed to do so by a competent authority under
                    applicable law; or
                  </li>
                  <li>If you violate any of our Platform Policies.</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Where possible, we will notify you before taking such action.
                  However, we reserve the right to act without notice in cases
                  involving legal obligations, serious violations, or risk to
                  the safety of other users or the platform.
                </p>
              </section>

              {/* 6. User Obligations */}
              <section id="user-obligations" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  6. User Obligations
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Use BetterFriend Lawfully and Respectfully
                </h3>
                <p className="text-muted-foreground">
                  You agree not to use BetterFriend in any way that:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                  <li>violates any law (in India or elsewhere);</li>
                  <li>
                    attempts to bypass technical protections, or interferes
                    with, disrupts, or overloads our systems (for example, by
                    spamming features, introducing malicious code, scraping
                    data, attempting unauthorised access, or using automated
                    tools or scripts to misuse the App);
                  </li>
                  <li>interferes with other users’ experience; or</li>
                  <li>
                    infringes any intellectual property rights (ours or those of
                    others).
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Provide Accurate Information
                </h3>
                <p className="text-muted-foreground">
                  You must use your correct phone number and gender to access
                  our Services. Do not provide false information or impersonate
                  anyone while using BetterFriend.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Keep Your Account Secure
                </h3>
                <p className="text-muted-foreground">
                  You are responsible for all activity on your account. Do not
                  share your login credentials, phone number, OTPs, or payment
                  details with anyone. We are not liable if you choose to share
                  such information with other users.
                </p>
                <p className="text-muted-foreground mt-2">
                  Do not allow anyone else to access or use your account. Each
                  account is tied to a single phone number and must only be used
                  by the individual who registered it. If another user asks you
                  for sensitive information, report them to us immediately.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Follow Our Community Guidelines
                </h3>
                <p className="text-muted-foreground">
                  All interactions on BetterFriend must follow our{" "}
                  <a href="/guidelines" className="underline">
                    Community Guidelines
                  </a>
                  . If you violate them, we may take action such as suspending
                  or permanently terminating your account. You may write to us
                  at{" "}
                  <a
                    href="mailto:support@betterfriend.live"
                    className="underline"
                  >
                    support@betterfriend.live
                  </a>{" "}
                  if you wish to appeal any action taken.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Do Not Share Prohibited Content
                </h3>
                <p className="text-muted-foreground">
                  You must not use BetterFriend to share any content that is
                  illegal, harmful, or violates our Community Guidelines. This
                  includes, but is not limited to, content that is obscene,
                  discriminatory, promotes hate or violence, or is harmful to
                  minors.
                </p>
                <p className="text-muted-foreground mt-2">
                  For a complete list of what is and is not allowed on
                  BetterFriend, please read our Community Guidelines. We reserve
                  the right to remove any content that violates these policies
                  and to take appropriate action against your account.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Legal Disclosures and Our Liability
                </h3>
                <p className="text-muted-foreground">
                  We may share your information with law enforcement or other
                  authorities if required to do so by law, or if we believe it
                  is reasonably necessary to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                  <li>respond to a valid legal request;</li>
                  <li>
                    protect the rights, safety, or property of BetterFriend, its
                    users, or the public; or
                  </li>
                  <li>prevent fraud, misuse, or security risks.</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  While we work to keep BetterFriend safe, we are not
                  responsible for the actions of other users, whether on or off
                  the App.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Respect Intellectual Property
                </h3>
                <p className="text-muted-foreground">
                  You retain ownership of any content you create and share.
                  However, you must not use BetterFriend to violate anyone
                  else’s intellectual property rights, including ours.
                </p>
                <p className="text-muted-foreground mt-2">
                  We retain ownership of all intellectual property rights in
                  BetterFriend, including our name, logo, content, design,
                  features, and software. Any unauthorised use may result in
                  suspension or termination of your account or other action in
                  accordance with the Platform Policies.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Deleting Your Account and Data Retention
                </h3>
                <p className="text-muted-foreground">
                  You can delete your account at any time. If you do, we may
                  retain some of your data for a limited period in case you
                  choose to reactivate your account and as described in our{" "}
                  <a href="/privacy" className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </section>

              {/* 7. Our Responsibility and Limitations */}
              <section id="responsibility" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  7. Our Responsibility and Limitations
                </h2>
                <p className="text-muted-foreground">
                  BetterFriend provides a platform for users to connect through
                  one-on-one audio and video calls. We act as an intermediary
                  under applicable Indian law and do not create, control, or
                  endorse the content or interactions shared by users.
                </p>
                <p className="text-muted-foreground mt-4">
                  We may assign or transfer our rights and obligations under
                  these Terms, in whole or in part, to any third party,
                  including in connection with a merger, acquisition, sale of
                  assets, or by operation of law. You may not assign or transfer
                  your rights or obligations under these Terms without our prior
                  written consent.
                </p>
              </section>

              {/* 8. Third-Party Links and Tools */}
              <section id="third-party" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  8. Third-Party Links and Tools
                </h2>
                <p className="text-muted-foreground">
                  BetterFriend may contain links to external websites or include
                  third-party features, such as AI tools or social sharing
                  options. These are operated independently and are not
                  controlled by us.
                </p>
                <p className="text-muted-foreground mt-4">
                  We are not responsible for the content, accuracy, or practices
                  of any third-party site or service. Your use of such features
                  is at your own discretion and will be governed by their own
                  terms and policies.
                </p>
              </section>

              {/* 9. Intellectual Property */}
              <section id="intellectual-property" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  9. Intellectual Property
                </h2>
                <p className="text-muted-foreground">
                  Your use of BetterFriend must comply with all applicable laws
                  on copyright, trademarks, patents, and other intellectual
                  property rights. You are responsible for ensuring that
                  anything you do on BetterFriend does not violate someone
                  else’s rights.
                </p>
                <p className="text-muted-foreground mt-4">
                  We own all intellectual property rights in the content,
                  design, features, and trademarks made available by
                  BetterFriend, including our name, logo, and software. You may
                  not copy, use, or distribute any of this without our
                  permission.
                </p>
                <p className="text-muted-foreground mt-4">
                  If any third-party content or tools appear on BetterFriend,
                  the rights in that material remain with the respective owners.
                  You may need to obtain their permission if you wish to use it
                  outside the App.
                </p>
                <p className="text-muted-foreground mt-4">
                  We respect the intellectual property rights of others and
                  expect users to do the same. If you infringe someone’s rights,
                  you may be held directly responsible.
                </p>
              </section>

              {/* 10. Payment Terms */}
              <section id="payments" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  10. Payment Terms (Coins &amp; Virtual Gifts)
                </h2>
                <p className="text-muted-foreground">
                  Virtual coins (“Coins”) and virtual gifts are digital items
                  made available on BetterFriend as part of our Services. They
                  are not sold to you as physical or tangible goods. When you
                  purchase Coins or use Coins to send a virtual gift, you
                  receive a limited, revocable, non-transferable licence to
                  access and use those digital features within BetterFriend in
                  accordance with these Terms.
                </p>
                <p className="text-muted-foreground mt-4">
                  You can purchase Coins using the payment methods made
                  available by us, including payment gateways, app store billing
                  systems (such as Google Play or the Apple App Store), and
                  other authorised channels. Purchases are processed by
                  third-party payment providers and are subject to their terms,
                  fees, and any applicable currency conversion charges. We are
                  not responsible for delays, failures, or errors caused by
                  these providers.
                </p>
                <p className="text-muted-foreground mt-4">
                  The price of Coins will be displayed at the point of sale and
                  will include applicable taxes unless stated otherwise. You are
                  responsible for paying all taxes, fees, and charges imposed by
                  your payment provider. Once payment is successfully processed,
                  your account will be credited with the corresponding number of
                  Coins. All purchases are final and non-refundable to the
                  maximum extent permitted by law.
                </p>
                <p className="text-muted-foreground mt-4">
                  Coins can be used only on BetterFriend to access permitted
                  features, including making audio or video calls and sending
                  virtual gifts to other users. Coins cannot be exchanged for
                  cash, legal tender, credit, or any item of value, and cannot
                  be used for trading on or off BetterFriend. They may not be
                  combined with promotions, coupons, or discounts except where
                  we allow this.
                </p>
                <p className="text-muted-foreground mt-4">
                  Coins will expire automatically if not used within six (6)
                  months (182 days) from the date of purchase. Expired Coins are
                  forfeited without notice, refund, or compensation. Coins are
                  non-transferable and cannot be assigned, sold, bartered, or
                  otherwise disposed of except by us. Coins do not constitute
                  property and are not transferable upon death or by operation
                  of law. If your account is suspended or terminated for breach
                  of these Terms or applicable law, all Coins in your account
                  will be forfeited without refund or compensation.
                </p>
                <p className="text-muted-foreground mt-4">
                  Virtual gifts purchased using Coins are a form of digital
                  content provided on BetterFriend. They have no real-world
                  monetary value, cannot be converted back into Coins, and are
                  non-refundable. We may, at our discretion, replace a virtual
                  gift if it is corrupted or fails to function as intended.
                </p>
                <p className="text-muted-foreground mt-4">
                  The price of Coins may change from time to time due to
                  promotional offers, bundle variations, or other factors
                  determined by us. We may also change expiry periods or usage
                  rules at any time. Continued purchase or use of Coins after
                  such changes constitutes your acceptance of the revised terms.
                </p>
                <p className="text-muted-foreground mt-4">
                  We may revoke your eligibility to purchase Coins, cancel a
                  transaction, delay or block payment, or restrict payment
                  methods if we believe it is necessary to prevent fraud,
                  comply with applicable law, or address unauthorised or
                  suspicious activity. We may also report suspected fraudulent
                  or unlawful conduct to the relevant authorities.
                </p>
                <p className="text-muted-foreground mt-4">
                  Coins, virtual gifts, and related features are provided on an
                  “as is where is” basis without warranties, guarantees, or
                  representations of any kind, to the fullest extent permitted
                  by law. You are responsible for ensuring that your purchase,
                  possession, and use of Coins and virtual gifts is permitted
                  under the laws of your jurisdiction.
                </p>
              </section>

              {/* 11. Disclaimers and Limitation of Liability */}
              <section id="disclaimers" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  11. Disclaimers and Limitation of Liability
                </h2>
                <p className="text-muted-foreground">
                  BetterFriend is provided to you on an “as is where is” basis.
                  We make no representations or warranties, express or implied,
                  about BetterFriend, the Services, or the content shared on it.
                  This includes any warranties regarding fitness for a
                  particular purpose, accuracy, reliability, or
                  non-infringement. We do not guarantee that BetterFriend will
                  be uninterrupted or error-free, or that the information
                  provided through the App will be accurate.
                </p>
                <p className="text-muted-foreground mt-4">
                  You use BetterFriend and the Services at your own risk. We do
                  not monitor user behaviour or conduct background checks and
                  are not responsible for the actions or conduct of other users,
                  whether on or off the App.
                </p>
                <p className="text-muted-foreground mt-4">
                  To the fullest extent permitted by law, we are not liable for
                  any loss or damage arising from your use of BetterFriend or
                  the Services. This includes direct, indirect, incidental,
                  special, or consequential losses, including loss of data,
                  revenue, profits, reputation, or claims made by third parties.
                  If we are held liable under applicable law, our total
                  liability will be limited to the amount you paid (if any) for
                  Services on BetterFriend in the six (6) months prior to the
                  event giving rise to the claim.
                </p>
              </section>

              {/* 12. Indemnity */}
              <section id="indemnity" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  12. Indemnity
                </h2>
                <p className="text-muted-foreground">
                  By using BetterFriend, you agree to take full responsibility
                  for your actions. You agree to indemnify and hold harmless the
                  Company, its affiliates, officers, directors, employees,
                  agents, successors, and assigns from and against any claims,
                  demands, proceedings, losses, damages, liabilities, costs, or
                  expenses (including reasonable legal fees) arising out of or
                  in connection with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                  <li>your access to or use of BetterFriend or the Services;</li>
                  <li>any breach of these Terms by you;</li>
                  <li>
                    any violation by you of another person’s rights, including
                    intellectual property, privacy, or consumer protection
                    rights;
                  </li>
                  <li>
                    any violation of law or contractual obligations by you; or
                  </li>
                  <li>your negligence or wilful misconduct.</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  This obligation will continue to apply even after these Terms
                  have ended. We reserve the sole right to manage, settle, or
                  resolve any claims brought against us, without requiring your
                  prior approval. You agree to cooperate with us, at our
                  request, in defending or settling any such claims.
                </p>
              </section>

              {/* 13. Dispute Resolution */}
              <section id="dispute-resolution" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  13. Dispute Resolution
                </h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by the laws of India. Any
                  disputes or claims arising from or in connection with these
                  Terms, BetterFriend, or the Services shall be subject to the
                  exclusive jurisdiction of the courts at{" "}
                  <strong>Udaipur, Rajasthan</strong>.
                </p>
              </section>

              {/* 14. Termination and Remedies */}
              <section id="termination" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  14. Termination and Remedies
                </h2>
                <p className="text-muted-foreground">
                  These Terms take effect from the date you accept them and
                  continue until terminated.
                </p>
                <p className="text-muted-foreground mt-4">
                  We may suspend or terminate your account or restrict access to
                  BetterFriend or specific features, at any time, with or
                  without notice, if we believe you have violated these Terms,
                  misused the platform, or engaged in unlawful or inappropriate
                  conduct (on or off the App). This may include cancelling
                  subscriptions without refund and reporting your conduct to law
                  enforcement.
                </p>
                <p className="text-muted-foreground mt-4">
                  Termination includes removal of access to your account and
                  deletion of related information, in accordance with our{" "}
                  <a href="/privacy" className="underline">
                    Privacy Policy
                  </a>
                  . We are not liable to you or any third party for any such
                  action.
                </p>
                <p className="text-muted-foreground mt-4">
                  Provisions that by their nature should survive, such as those
                  relating to dispute resolution, disclaimers, limitations of
                  liability, and indemnity, will remain in effect even after
                  termination. Unauthorised use of BetterFriend or the Services
                  may lead to action under these Terms or applicable law.
                </p>
              </section>

              {/* 15. Grievance Redressal Mechanism */}
              <section id="grievance" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  15. Grievance Redressal Mechanism
                </h2>
                <p className="text-muted-foreground">
                  If you have any complaints, concerns, or grievances regarding
                  your rights under these Terms or the Services provided to you,
                  you can contact us through the following channels. We may
                  require the phone number linked to your account in order to
                  process and resolve any grievance.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  In-App Reporting
                </h3>
                <p className="text-muted-foreground">
                  You can report complaints directly within BetterFriend using
                  the in-app Help &amp; Support section.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Email Support
                </h3>
                <p className="text-muted-foreground">
                  For service-related issues such as app performance, please
                  contact our support team at{" "}
                  <a
                    href="mailto:support@betterfriend.live"
                    className="underline"
                  >
                    support@betterfriend.live
                  </a>
                  .
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Grievance Officer
                </h3>
                <address className="not-italic text-muted-foreground">
                  Email:{" "}
                  <a
                    href="mailto:support@betterfriend.live"
                    className="underline"
                  >
                    support@betterfriend.live
                  </a>
                  <br />
                  Address: 48-B Ambamata Scheme, Udaipur, Rajasthan, 313003,
                  India
                </address>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Nodal Contact Person (Law Enforcement Only)
                </h3>
                <p className="text-muted-foreground">
                  The Nodal Contact Person is designated exclusively for
                  communication with law enforcement authorities. This contact
                  should not be used for user support, general inquiries, or
                  complaints.
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:support@betterfriend.live"
                    className="underline"
                  >
                    support@betterfriend.live
                  </a>
                </p>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
