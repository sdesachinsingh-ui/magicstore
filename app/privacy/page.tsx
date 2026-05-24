import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Privacy Policy | Magicstore",
  description: "Privacy policy for Magicstore - how we handle your data",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="mt-10 space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold">Information We Collect</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We collect minimal information to improve your experience. This includes 
                anonymous usage data such as pages visited and time spent on the site. 
                We do not collect personally identifiable information unless you explicitly 
                provide it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Affiliate Links</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                This website contains affiliate links to Amazon.com. When you click on these 
                links and make a purchase, we may earn a commission at no additional cost to 
                you. As an Amazon Associate, we earn from qualifying purchases. These affiliate 
                relationships help support the operation of this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Cookies</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We use cookies to enhance your browsing experience and analyze site traffic. 
                Amazon and other third-party services may also use cookies when you interact 
                with their services through our affiliate links. You can control cookie 
                preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Third-Party Services</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We use third-party services including Amazon Associates and analytics providers. 
                These services have their own privacy policies governing their use of your data. 
                We encourage you to review their policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Contact Us</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us through 
                our website.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
