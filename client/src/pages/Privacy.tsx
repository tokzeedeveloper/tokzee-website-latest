import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy - Tokzee"
        description="How Tokzee collects, uses, stores, and shares your personal information, and the choices you have about your data."
        canonical="https://www.tokzee.live/privacy"
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
                Privacy Policy
              </h1>
              <p className="text-base text-muted-foreground">
                Welcome to Tokzee’s Privacy Policy. This document explains how
                <strong> VoicePe Technologies Pvt Ltd</strong> (“Tokzee”, “we”, “us”, or “our”)
                collects, uses, stores, and shares your personal information while you use
                Tokzee, and how you can manage your data and privacy choices while using the app.
              </p>
              <p className="text-base text-muted-foreground">
                We believe in being transparent about how your data is handled. This policy outlines
                the types of information we collect, the purposes for which we use it, and the tools
                we offer to help you control what you share and with whom.
                This Privacy Policy applies to all features, products, and services offered through Tokzee.
                Please read this Privacy Policy along with our{" "}
                <a href="/terms" className="underline">Terms and Conditions of Use</a>. In case of any conflict between the two,
                this Privacy Policy will override the Terms. If you have any questions, feel free to reach out at{" "}
                <a href="mailto:support@tokzee.live" className="underline">support@tokzee.live</a>.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* THE INFORMATION WE COLLECT AND HOW WE USE IT */}
              <section id="information-we-collect" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  The Information We Collect and How We Use It
                </h2>
                <p className="text-muted-foreground">
                  We collect personal information to help set up and operate your account, provide our services,
                  comply with legal requirements, and improve Tokzee. The table below outlines the categories
                  of data we collect, how we collect it, and how we use it.
                </p>

                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-left border border-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="p-3 border-b border-border">Category</th>
                        <th className="p-3 border-b border-border">Data We Collect</th>
                        <th className="p-3 border-b border-border">Purpose of Collection and Use</th>
                      </tr>
                    </thead>
                    <tbody className="align-top">
                      <tr>
                        <td className="p-3 border-b border-border">Account setup and log-in data</td>
                        <td className="p-3 border-b border-border">
                          User ID, name, age, mobile number, password, gender, voice sample, IP address
                        </td>
                        <td className="p-3 border-b border-border">
                          To create and manage your account; to send notifications (including policy updates);
                          to communicate with you and provide support; to personalise language, location, and experience;
                          to detect fraud and enforce platform Terms; for internal operations like troubleshooting and analytics;
                          to develop and improve services
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Profile information</td>
                        <td className="p-3 border-b border-border">Username, birth year, gender, language preference</td>
                        <td className="p-3 border-b border-border">To populate your user profile; to personalise your experience</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Moderation of audio/video call and chat</td>
                        <td className="p-3 border-b border-border">Voice and video data, call activity patterns</td>
                        <td className="p-3 border-b border-border">
                          To detect and prevent violations of community guidelines; to support real-time and post-call or post-chat
                          moderation for safety and compliance; to generate content suggestions or prompts based on user conversations;
                          to improve our automated safety tools and moderation systems including through model retraining
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">AI-generated interaction features</td>
                        <td className="p-3 border-b border-border">Audio, video, chat content, transcripts, usage patterns</td>
                        <td className="p-3 border-b border-border">
                          To generate real-time prompts, replies, or suggestions using AI models; to support chatbot-based
                          interactions with users; to improve interaction quality and responsiveness; some AI services are provided by
                          third-party tools and may involve data processing outside the app; to improve the accuracy, relevance, and
                          responsiveness of AI-driven features
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Device data</td>
                        <td className="p-3 border-b border-border">
                          Device model, OS version, app version, browser type, plugins, battery level, available storage,
                          signal strength, foreground/background status, language of the device as set by the user
                        </td>
                        <td className="p-3 border-b border-border">
                          To optimise app performance; to improve security and troubleshoot issues;
                          to customise the experience for your device
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Identifiers and signals</td>
                        <td className="p-3 border-b border-border">Device ID, advertising IDs, Bluetooth signals, nearby Wi-Fi and cell towers</td>
                        <td className="p-3 border-b border-border">To personalise content and advertising; to enhance security and app functionality</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Location and media access</td>
                        <td className="p-3 border-b border-border">
                          GPS location, address, time zone; access to camera, microphone, image/audio/video files (only with your permission)
                        </td>
                        <td className="p-3 border-b border-border">
                          To enable app features that require media or camera/mic access (e.g., calling, uploading content);
                          to personalise content based on location; to detect suspicious activity, prevent unauthorised access,
                          and maintain the overall security and integrity of the platform
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Network and connection info</td>
                        <td className="p-3 border-b border-border">Mobile carrier, ISP, IP address, time zone, connection speed, language</td>
                        <td className="p-3 border-b border-border">
                          To ensure service availability and optimise performance; to detect suspicious activity, prevent unauthorised access,
                          and maintain the overall security and integrity of the platform
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Call, chat and interaction data</td>
                        <td className="p-3 border-b border-border">
                          List of users (including Hosts) you interact with, call/chat timestamps, duration of communication, call pick-up rate
                        </td>
                        <td className="p-3 border-b border-border">
                          To enable audio/video calls and the chat feature; for safety monitoring and moderation; to enforce community guidelines;
                          to detect suspicious activity, prevent unauthorised access, and maintain the overall security and integrity of the platform
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Log data and technical info</td>
                        <td className="p-3 border-b border-border">Cookies, beacons, scripts, logs, crash reports, referral URLs</td>
                        <td className="p-3 border-b border-border">For diagnostics, usage tracking, and performance optimisation</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Information from other sources</td>
                        <td className="p-3 border-b border-border">
                          Data from service providers, technical subcontractors, analytics providers.
                          This may include your name, profile image, email address, phone number, country, device details,
                          and information about advertising campaigns you interacted with to install the app
                        </td>
                        <td className="p-3 border-b border-border">
                          To perform analytics, and detect abuse or fraud; to provide AI-generated features such as interaction
                          suggestions or moderation outcomes; to enable login through an existing account on a different platform
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Marketing metadata</td>
                        <td className="p-3 border-b border-border">Source of traffic, marketing medium, campaign details, type of ad or content</td>
                        <td className="p-3 border-b border-border">
                          To understand how users discover and reach our platform, including when an interest form is submitted via the website;
                          to enhance the effectiveness of our marketing and user engagement efforts
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Account security</td>
                        <td className="p-3 border-b border-border">Phone number, access to SMS for OTPs</td>
                        <td className="p-3 border-b border-border">To verify your identity; to protect account access and prevent misuse</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Customer support</td>
                        <td className="p-3 border-b border-border">Any data you share with our support team</td>
                        <td className="p-3 border-b border-border">To investigate and resolve your issue; to improve support quality</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Transactional and financial data</td>
                        <td className="p-3 border-b border-border">
                          Purchase records (e.g., coins or in-app features), biller name/ID, amount, transaction ID,
                          average order value, lifetime spends
                        </td>
                        <td className="p-3 border-b border-border">
                          To process payments; to maintain transaction records; to comply with applicable legal and tax requirements;
                          to show you offers relevant to you
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Verification and banking details</td>
                        <td className="p-3 border-b border-border">
                          PAN Card, Aadhaar card and number, PAN–Aadhaar link status, PAN and Aadhaar details such as name, date of birth and gender,
                          UPI ID, bank account details, name associated with bank account
                        </td>
                        <td className="p-3 border-b border-border">
                          To verify your identity for payment-related purposes; to process payments securely; to comply with our obligations under applicable laws
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Information from other users and third parties</td>
                        <td className="p-3">Reports or data from other users, affiliates, third-party providers, and authorities</td>
                        <td className="p-3">
                          To investigate complaints or suspected policy violations; to identify and prevent abusive or fraudulent behaviour;
                          to comply with legal obligations
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-muted-foreground mt-6">
                  In addition to the above, we may also use your personal data to perform analytics and usage analysis
                  (including through aggregated or pseudonymised data) to understand how users interact with the platform
                  and improve the performance, design, and safety of Tokzee.
                </p>
              </section>

              {/* HOW WE SHARE YOUR INFORMATION */}
              <section id="sharing" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">How We Share Your Information</h2>

                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  We do not share your personal information publicly or make it visible to other users outside of private,
                  user-initiated interactions such as audio or video calls. However, we may share your information in the following circumstances:
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">With other users you interact with</h3>
                <p className="text-muted-foreground">
                  When you participate in an audio or video call, or chat with other users (including Hosts), limited profile information—such as
                  your username, profile picture (if applicable), and call status—may be visible to the person you are speaking with.
                  We do not share your phone number or any sensitive personal information unless you choose to disclose it during the interaction.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">With your consent</h3>
                <p className="text-muted-foreground">
                  We may share your information with third-party services or platforms only when you explicitly allow us to do so.
                  For example, if you choose to send a call invitation via WhatsApp or SMS, those platforms’ privacy policies will apply to the shared data.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">With our service providers</h3>
                <p className="text-muted-foreground">
                  We engage trusted third-party service providers to help operate and maintain Tokzee. These may include cloud storage and hosting,
                  call infrastructure providers, analytics and diagnostics partners, customer support tools, security and fraud detection services,
                  user engagement and notification platforms, and AI service providers (including content moderation tools, chatbot infrastructure,
                  and prompt generation systems). These providers only process your information on our behalf and under strict confidentiality
                  and data protection obligations.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">For legal and safety reasons</h3>
                <p className="text-muted-foreground">
                  We may disclose your information if necessary to comply with applicable laws, legal proceedings, or valid government requests;
                  respond to law enforcement inquiries; enforce our Terms and Conditions of Use or investigate policy violations;
                  detect or prevent fraud, abuse, or technical issues; or protect the rights, safety, and property of Tokzee, our users, or the public.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">With our group entities</h3>
                <p className="text-muted-foreground">
                  We may share your information with our parent company, subsidiaries, and affiliated entities to support the provision,
                  improvement, and security of Tokzee.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">In case of a business transfer</h3>
                <p className="text-muted-foreground">
                  If Tokzee is involved in a merger, acquisition, restructuring, or sale of assets, your data may be transferred
                  to the relevant third party as part of that transaction. If such a transfer affects your rights, we will notify you as required by law.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Aggregated or de-identified information</h3>
                <p className="text-muted-foreground">
                  We may share aggregated or de-identified data (which cannot be used to personally identify you) with partners or third parties
                  for analytics, research, or service improvement purposes.
                </p>
              </section>

              {/* HOW WE PROTECT */}
              <section id="security" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">How We Protect Your Personal Information</h2>
                <p className="text-muted-foreground">
                  We use a combination of technical, physical, and administrative measures to help keep your personal information safe from loss,
                  misuse, unauthorised access, disclosure, alteration, or destruction. These safeguards are designed based on the type of information
                  we collect and the risks involved.
                </p>
                <p className="text-muted-foreground">
                  However, your account security also depends on you. Please keep your login details, especially your password, confidential and do not
                  share them with anyone. While we take reasonable steps to protect your information, no system is completely secure. Information shared
                  over the internet always carries some risk. We cannot guarantee that our safeguards will stop every unauthorized attempt to access or misuse
                  your personal data.
                </p>
                <p className="text-muted-foreground">
                  If we ever identify a suspected breach of your personal information, we have procedures in place to respond. Where required by law,
                  we will notify you and the relevant authorities as soon as possible.
                </p>
              </section>

              {/* CHANGES */}
              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. For material changes that affect your rights or how we use your data,
                  we may reach out to you directly, such as through an in-app notification or SMS. We encourage you to review this Privacy Policy
                  periodically to stay informed about how your information is protected.
                </p>
              </section>

              {/* DATA RETENTION */}
              <section id="retention" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information only for as long as it is needed to provide our services and for other lawful purposes.
                  If you request deletion of your account or content, we will remove your data from our active systems. However, copies of certain
                  information may continue to exist in backup storage or archived versions of the platform.
                </p>
                <p className="text-muted-foreground">
                  Also, because of the way the internet works, content that has been shared or saved by other users may continue to exist outside our control,
                  even after deletion. This includes screenshots or downloads shared through other platforms.
                </p>
              </section>

              {/* YOUR RIGHTS */}
              <section id="your-rights" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Your Rights</h2>
                <p className="text-muted-foreground">
                  Under applicable Indian data protection laws, you have certain rights in relation to your personal data. These include:
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Review and correction</h3>
                <p className="text-muted-foreground">
                  You have the right to review the personal data you have provided and request correction of any incomplete or inaccurate information we hold.
                  We may need to verify the accuracy of the updated data before making the change.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Withdraw consent</h3>
                <p className="text-muted-foreground">
                  Where we rely on your consent to process your personal data, you may withdraw that consent at any time.
                  This will not affect the lawfulness of processing carried out prior to your withdrawal. Additionally, if you withdraw your consent,
                  object to processing, or choose not to provide certain personal information, some or all services may become unavailable.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">How to exercise your rights</h3>
                <p className="text-muted-foreground">
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:support@tokzee.live" className="underline">support@tokzee.live</a>.
                  For your safety, we may ask you to verify your identity before we process your request.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Marketing communications</h3>
                <p className="text-muted-foreground">
                  You can opt out of receiving marketing communications from us at any time by emailing{" "}
                  <a href="mailto:support@tokzee.live" className="underline">support@tokzee.live</a>.
                  Please note that even if you opt out of marketing, we may still contact you with important service-related or administrative messages,
                  as permitted by law.
                </p>
              </section>

              {/* GRIEVANCE */}
              <section id="grievance" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Grievance Redressal Mechanism</h2>
                <p className="text-muted-foreground">
                  If you have any complaints, concerns, or grievances regarding your personal data or this Privacy Policy, you can contact us through the following channels.
                  We will require the phone number linked to your account in order to process and resolve any grievance.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">In-App Reporting</h3>
                <p className="text-muted-foreground">
                  You can report user profiles or make complaints directly within the Tokzee app using the Help &amp; Support section.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Email Support</h3>
                <p className="text-muted-foreground">
                  For service-related issues such as app performance, please contact our support team at{" "}
                  <a href="mailto:support@tokzee.live" className="underline">support@tokzee.live</a>.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Grievance Officer (designation only)</h3>
                <address className="not-italic text-muted-foreground">
                  Email: <a href="mailto:support@tokzee.live" className="underline">support@tokzee.live</a>
                  <br />
                  Address: 48-B Ambamata Scheme, Udaipur, Rajasthan, 313003
                </address>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
