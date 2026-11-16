export default function PrivacyPage() {
  return (
    <main className="legal-page min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-4 pt-6 pb-10 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: February 27, 2026</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Recaply (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is operated by John Abercromby. This privacy policy explains how we collect, use, and protect your information when you use the Recaply mobile app and website.
          </p>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-base font-semibold text-foreground">1. Information We Collect</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">Account information:</span> When you create an account, we collect your name, email address, and authentication credentials. You can sign in using email and password, Google Sign-In, or Apple Sign-In.
              </li>
              <li>
                <span className="font-medium text-foreground">Content you save:</span> We collect the links, notes, photos, and text you choose to save in Recaply. This content is used to generate your personalised audio recaps.
              </li>
              <li>
                <span className="font-medium text-foreground">Voice input:</span> If you use the voice-to-text feature, audio is processed on-device using Apple&apos;s Speech Recognition framework to convert speech to text. We do not store audio recordings.
              </li>
              <li>
                <span className="font-medium text-foreground">Usage data:</span> We collect basic app usage information to improve the service, such as the number of recaps generated and items saved.
              </li>
              <li>
                <span className="font-medium text-foreground">Payment information:</span> Subscriptions are processed through Apple In-App Purchases. We do not collect or store your payment card details. Apple handles all payment processing.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">2. How We Use Your Information</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>To provide the service: generating personalised audio recaps from your saved content.</li>
              <li>To create and manage your account.</li>
              <li>To process subscriptions via Apple In-App Purchases.</li>
              <li>To improve and develop the app.</li>
              <li>To communicate with you about service updates if necessary.</li>
              <li>We may use anonymised, aggregated data — such as content category trends and usage patterns across our user base — to improve the product and for internal business purposes. This data cannot be used to identify individual users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">3. Third-Party Services</h2>
            <p className="mt-2">
              We use the following third-party services to operate Recaply:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">Supabase:</span> Database hosting, user authentication, and file storage. Data is stored on Supabase servers. Privacy policy:{" "}
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">https://supabase.com/privacy</a>
              </li>
              <li>
                <span className="font-medium text-foreground">OpenAI:</span> Content summarisation and text-to-speech audio generation. Your saved content is sent to OpenAI&apos;s API to generate recap summaries and audio. Privacy policy:{" "}
                <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">https://openai.com/privacy</a>
              </li>
              <li>
                <span className="font-medium text-foreground">Google:</span> Authentication for Google Sign-In. Privacy policy:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">https://policies.google.com/privacy</a>
              </li>
              <li>
                <span className="font-medium text-foreground">Apple:</span> Authentication for Sign In with Apple and payment processing for subscriptions. Privacy policy:{" "}
                <a href="https://www.apple.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">https://www.apple.com/legal/privacy</a>
              </li>
            </ul>
            <p className="mt-2">
              We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">4. Data Storage and Security</h2>
            <p className="mt-2">
              Your data is stored securely on Supabase servers. We use industry-standard security measures including encrypted connections (HTTPS/TLS) and secure authentication protocols. Audio recap files are stored in Supabase Storage.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">5. Your Rights</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><span className="font-medium text-foreground">Access:</span> You can view your saved content and account information within the app.</li>
              <li><span className="font-medium text-foreground">Deletion:</span> You can delete individual saved items within the app. You can delete your entire account from Settings, which permanently removes your profile, saved content, and generated recaps.</li>
              <li><span className="font-medium text-foreground">Data portability:</span> You can contact us to request a copy of your data.</li>
            </ul>
            <p className="mt-2">
              If you are in the EU/EEA, you have additional rights under GDPR including the right to restrict processing and the right to object to processing.
            </p>
            <p className="mt-2">
              If you are in California, you have additional rights under CCPA including the right to know what data is collected and the right to opt out of data sales (we do not sell data).
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">6. Camera, Microphone, and Photo Library</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li><span className="font-medium text-foreground">Camera:</span> Used to capture photos of content for your recaps. Photos are saved to your Recaply account only.</li>
              <li><span className="font-medium text-foreground">Photo Library:</span> Used to select existing images to add to your recaps.</li>
              <li><span className="font-medium text-foreground">Microphone:</span> Used for voice-to-text input when creating notes. Audio is processed on-device and is not stored or transmitted.</li>
              <li><span className="font-medium text-foreground">Speech Recognition:</span> Used to convert voice input to text using Apple&apos;s on-device speech recognition.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">7. Children&apos;s Privacy</h2>
            <p className="mt-2">
              Recaply is not directed at children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">8. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this privacy policy from time to time. We will notify you of material changes by updating the &quot;Last updated&quot; date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">9. Contact Us</h2>
            <p className="mt-2">
              If you have any questions about this privacy policy or your data, contact us at:
            </p>
            <p className="mt-2">
              Email: <span className="font-medium text-foreground">john@recaply.app</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
