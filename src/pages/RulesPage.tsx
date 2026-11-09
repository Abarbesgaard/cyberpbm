import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link, useSearchParams } from "react-router-dom";
import { useRole } from "@/context/RoleContext";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ruleFiles = {
  player: () => import("../../docs/player-rules.md?raw"),
  gm: () => import("../../docs/gm-rules.md?raw"),
  design: () => import("../../docs/design.md?raw"),
};

const tabs = [
  { key: "player", label: "// Spillerregler" },
  { key: "gm", label: "// ORACLE (GM)" },
  { key: "design", label: "// Design v0.12" },
] as const;

export function RulesPage() {
  const [content, setContent] = useState<Record<string, string>>({});
  const [params] = useSearchParams();
  const { role } = useRole();
  const requested = params.get("tab");
  const [activeTab, setActiveTab] = useState(
    tabs.some((t) => t.key === requested) ? requested! : role === "gm" ? "gm" : "player",
  );

  useEffect(() => {
    async function load() {
      const [player, gm, design] = await Promise.all([
        ruleFiles.player(),
        ruleFiles.gm(),
        ruleFiles.design(),
      ]);
      setContent({
        player: player.default,
        gm: gm.default,
        design: design.default,
      });
    }
    load();
  }, []);

  return (
    <section className="hull relative min-h-screen pt-[60px]">
      <div className="px-8 pt-16 pb-8 md:px-16">
        <div className="mb-6 flex items-center gap-3">
          <Link to="/" className="key px-3 py-1.5 font-mono text-[0.62rem] tracking-[0.25em] uppercase text-cp-off no-underline">
            &larr; Tilbage
          </Link>
          <span className="plate">Arkiv // Protokoller</span>
          <span className="h-[2px] flex-1 bg-[linear-gradient(to_bottom,var(--hull-shadow)_50%,var(--hull-light)_50%)]" />
          <span className="lamp lamp-green" aria-hidden />
        </div>
        <h2 className="glow-amber font-head text-[clamp(1.5rem,3.2vw,2.6rem)] uppercase leading-[1.15] tracking-[0.08em]">
          Regler <span className="text-cp-yellow">&amp; Design</span>
        </h2>
        <p className="mt-4 max-w-[680px] text-[1.05rem] leading-relaxed text-cp-off">
          Alt du skal bruge for at overleve ombord — eller for at være ORACLE.
        </p>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as string)}
        className="px-8 pb-16 md:px-16"
      >
        <TabsList
          variant="line"
          className="mb-10 flex !h-auto w-full flex-wrap gap-3 bg-transparent p-0"
        >
          {tabs.map((t) => (
            <TabsTrigger
              key={t.key}
              value={t.key}
              className="key !h-auto min-w-[160px] !rounded-[3px] !border-0 !bg-[linear-gradient(to_bottom,#F1F0EB,#D3D1C9)] px-6 py-3 font-mono text-[0.65rem] tracking-[0.12em] uppercase !text-cp-off after:hidden data-active:translate-y-[2px] data-active:!bg-[linear-gradient(to_bottom,#CFCDC5,#E2E0D9)] data-active:!text-cp-yellow data-active:!shadow-[inset_0_2px_6px_rgba(0,0,0,0.25),0_1px_0_#8E8C84]"
            >
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(({ key }) => (
          <TabsContent key={key} value={key}>
            <div className="bezel bezel-screws mx-auto max-w-[900px] p-6 sm:p-8 md:p-12 [--chamfer:20px]">
              <div className="prose-cyber">
                {content[key] ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content[key]}
                  </ReactMarkdown>
                ) : (
                  <p className="text-cp-mid font-mono text-sm">Indlæser...</p>
                )}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
