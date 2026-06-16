import { DottedSurface } from "@/components/ui/dotted-surface";
import { DialogProvider } from "@/components/site/dialog-provider";
import { Nav } from "@/components/site/nav";
import { Actions } from "@/components/site/actions";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Experience } from "@/components/site/experience";
import { Projects } from "@/components/site/projects";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      {/* Animated Three.js dot-grid background — fixed behind all content. */}
      <DottedSurface />

      <DialogProvider>
        <Nav />
        <Actions />

        <main>
          <Hero />
          <Marquee />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </DialogProvider>
    </>
  );
}
