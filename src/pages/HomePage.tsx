import { Hero } from "@/components/sections/Hero";
import { RoleSelector } from "@/components/RoleSelector";
import { Briefing } from "@/components/sections/Briefing";
import { Victory } from "@/components/sections/Victory";
import { Systems } from "@/components/sections/Systems";
import { ShipMap } from "@/components/sections/ShipMap";
import { WeekCycle } from "@/components/sections/WeekCycle";
import { Hunt } from "@/components/sections/Hunt";
import { Information } from "@/components/sections/Information";
import { Roles } from "@/components/sections/Roles";
import { Campaign } from "@/components/sections/Campaign";
import { Balance } from "@/components/sections/Balance";
import { Example } from "@/components/sections/Example";
import { DesignNotes } from "@/components/sections/DesignNotes";
import { Bulkhead } from "@/components/Bulkhead";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HomePage() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <RoleSelector />
      <Bulkhead frame="031" deck="A-01" />
      <Briefing />
      <Bulkhead frame="055" deck="A-02" />
      <Victory />
      <Bulkhead frame="067" deck="A-03" />
      <Systems />
      <Bulkhead frame="079" deck="B-03" />
      <ShipMap />
      <Bulkhead frame="103" deck="B-04" />
      <WeekCycle />
      <Bulkhead frame="127" deck="C-05" />
      <Hunt />
      <Bulkhead frame="151" deck="C-06" />
      <Information />
      <Bulkhead frame="175" deck="C-07" />
      <Roles />
      <Bulkhead frame="199" deck="D-08" />
      <Campaign />
      <Bulkhead frame="223" deck="D-09" />
      <Balance />
      <Bulkhead frame="247" deck="E-10" />
      <Example />
      <Bulkhead frame="271" deck="E-11" />
      <DesignNotes />
    </>
  );
}
