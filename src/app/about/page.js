import Container from "../UI/Container";

import AboutTextContent from "../components/AboutTextContent";

export const metadata = {
  title: "About Moosa Raheel | Full Stack Developer & AI Enthusiast",
  description:
    "Learn about Moosa Raheel, a full stack developer and educator from Karachi, Pakistan. Skilled in Next.js, MongoDB, and AI, with a passion for building real-world applications.",

  keywords: [
    "Moosa Raheel",
    "About Moosa Raheel",
    "Full Stack Developer Pakistan",
    "Next.js Developer",
    "AI Developer",
    "Karachi Developer",
  ],

  openGraph: {
    title: "About Moosa Raheel",
    description:
      "Discover the journey, skills, and goals of Moosa Raheel, a passionate developer and AI enthusiast.",
    url: "https://moosaraheel.com/about",
    siteName: "Moosa Raheel",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "About Moosa Raheel",
      },
    ],
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Moosa Raheel",
    description: "Full Stack Developer & AI Enthusiast",
    images: ["/og.png"],
  },
};

const page = () => {
  return (
    <>
      <Container>
        <h1 className="lg:pt-42 pt-28 lg:text-6xl text-4xl font-extrabold lg:after:w-[25%] after:w-44 after:h-1 after:bg-white after:block after:my-3">
          About Me
        </h1>
        <h2 className="font-bold lg:text-2xl text-xl lg:my-6 my-3 text-gray-500">
          I'm Moosa Raheel — a Full Stack Developer, Educator, and AI
          Enthusiast.
        </h2>
        <div className="grid gap-5 xl:grid-cols-2 grid-cols-1">
          <AboutTextContent />
          <div className="bg-[url('/img/about.jpg')] bg-cover bg-center xl:h-full lg:h-200 md:h-140 h-120 relative after:content-[''] after:block after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.5)]"></div>
        </div>
      </Container>
    </>
  );
};

export default page;
