import Encryption from "@/components/main/Encryption";
import FallingStars from "@/components/main/FallingStars";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import SkillsOne from "@/components/main/SkillsOne";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <FallingStars  count={600}/>
        <SkillsOne />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
