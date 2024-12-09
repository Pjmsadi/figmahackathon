import Hero from "@/components/hero";
import Mid from "@/components/mid";
import Forth from "@/components/forth";
import { RoomInspiration } from "@/components/fifth";
import Last from "@/components/last";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mid />
      <Forth />
      <RoomInspiration />
      <Last />
      <div className="relative w-full h-[270px]">
        <Image
          src="/fr.png"
          alt="footer banner"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>
    </main>
  );
}