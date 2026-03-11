import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { DesignPhilosophy } from "@/components/sections/DesignPhilosophy";
import { NightCity } from "@/components/sections/NightCity";
import { RoleSelector } from "@/components/RoleSelector";
import { Channels } from "@/components/sections/Channels";
import { Mission } from "@/components/sections/Mission";
import { CrewCreation } from "@/components/sections/CrewCreation";
import { OpGrid } from "@/components/sections/OpGrid";
import { Columns } from "@/components/sections/Columns";
import { Phases } from "@/components/sections/Phases";
import { Actions } from "@/components/sections/Actions";
import { Protocol } from "@/components/sections/Protocol";
import { Resolution } from "@/components/sections/Resolution";
import { Heat } from "@/components/sections/Heat";
import { Orders } from "@/components/sections/Orders";
import { Manifesto } from "@/components/sections/Manifesto";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HomePage() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <RoleSelector />
      <Introduction />
      <DesignPhilosophy />
      <NightCity />
      <Channels />
      <Mission />
      <CrewCreation />
      <OpGrid />
      <Columns />
      <Phases />
      <Actions />
      <Protocol />
      <Resolution />
      <Heat />
      <Orders />
      <Manifesto />
    </>
  );
}
