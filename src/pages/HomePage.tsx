import { Hero } from "@/components/sections/Hero";
import { RoleSelector } from "@/components/RoleSelector";
import { Briefing } from "@/components/sections/Briefing";
import { Victory } from "@/components/sections/Victory";
import { ShipMap } from "@/components/sections/ShipMap";
import { WeekCycle } from "@/components/sections/WeekCycle";
import { Hunt } from "@/components/sections/Hunt";
import { Information } from "@/components/sections/Information";
import { Roles } from "@/components/sections/Roles";
import { Campaign } from "@/components/sections/Campaign";
import { Balance } from "@/components/sections/Balance";
import { Example } from "@/components/sections/Example";
import { DesignNotes } from "@/components/sections/DesignNotes";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HomePage() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <RoleSelector />
      <Briefing />
      <Victory />
      <ShipMap />
      <WeekCycle />
      <Hunt />
      <Information />
      <Roles />
      <Campaign />
      <Balance />
      <Example />
      <DesignNotes />
    </>
  );
}
