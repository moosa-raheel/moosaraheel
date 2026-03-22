import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import Container from "../UI/Container";

export const metadata = {
  title: "Contact Moosa Raheel | Get in Touch",
  description:
    "Contact Moosa Raheel, a full stack developer and AI enthusiast. Reach out for projects, collaborations, or inquiries via email or WhatsApp.",

  keywords: [
    "Contact Moosa Raheel",
    "Hire Developer Pakistan",
    "Full Stack Developer Contact",
    "Next.js Developer Hire",
  ],

  openGraph: {
    title: "Contact Moosa Raheel",
    description:
      "Get in touch with Moosa Raheel for web development and AI projects.",
    url: "https://moosaraheel.com/contact",
    siteName: "Moosa Raheel",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <ContactHero />
      <Container>
        <div className="flex lg:flex-row flex-col w-full gap-7 py-12">
          <div className=" h-full w-full lg:w-[65%]">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="my-3">
              Fill out the form I will get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
          <div className=" h-full w-full lg:w-[35%]">
            <h2 className="text-3xl font-bold">Contact Information</h2>
            <ContactInfo />
          </div>
        </div>
      </Container>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Moosa Raheel",
          url: "https://moosaraheel.com/contact",
          contactPoint: {
            "@type": "ContactPoint",
            email: "contact@moosaraheel.com",
            contactType: "customer support",
            areaServed: "PK",
          },
        })}
      </script>
    </>
  );
};

export default page;
