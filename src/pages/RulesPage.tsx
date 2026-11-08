import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ruleFiles = {
  player: () => import("../../docs/player-rules.md?raw"),
  gm: () => import("../../docs/gm-rules.md?raw"),
  design: () => import("../../docs/design.md?raw"),
};

const tabs = [
  { key: "player", label: "// Spillerregler" },
  { key: "gm", label: "// ORACLE (GM)" },
  { key: "design", label: "// Design v0.6" },
] as const;

export function RulesPage() {
  const [content, setContent] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState("player");

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
    <section className="relative min-h-screen bg-cp-panel pt-[52px]">
      <div className="px-8 pt-16 pb-8 md:px-16">
        <div className="mb-2 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-red">
          <Link
            to="/"
            className="text-cp-mid no-underline hover:text-cp-yellow transition-colors"
          >
            &larr; Tilbage
          </Link>
          <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
        </div>
        <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
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
          className="mb-8 flex w-full gap-0 border-b border-cp-border bg-transparent p-0"
        >
          {tabs.map((t) => (
            <TabsTrigger
              key={t.key}
              value={t.key}
              className="border-l border-cp-border px-6 py-3 font-mono text-[0.65rem] tracking-[0.12em] uppercase text-cp-mid transition-colors data-[state=active]:text-cp-yellow data-active:text-cp-yellow hover:bg-cp-yellow/5 hover:text-cp-yellow first:border-l-0 rounded-none"
            >
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(({ key }) => (
          <TabsContent key={key} value={key}>
            <div className="mx-auto max-w-[900px] rounded-none border border-cp-border bg-cp-dark p-8 md:p-12">
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
