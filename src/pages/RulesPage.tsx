import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ruleFiles = {
  player: () => import("../../docs/player-rules.md?raw"),
  gm: () => import("../../docs/gm-rules.md?raw"),
};

export function RulesPage() {
  const [content, setContent] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState("player");

  useEffect(() => {
    async function load() {
      const [player, gm] = await Promise.all([
        ruleFiles.player(),
        ruleFiles.gm(),
      ]);
      setContent({
        player: player.default,
        gm: gm.default,
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
            &larr; Back
          </Link>
          <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
        </div>
        <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
          The <span className="text-cp-red-bright">Rules</span>
        </h2>
        <p className="mt-4 max-w-[680px] text-[1.05rem] leading-relaxed text-cp-off">
          Everything you need to run an operation — or run the city. Pick your
          side.
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
          <TabsTrigger
            value="player"
            className="border-l border-cp-border px-6 py-3 font-mono text-[0.65rem] tracking-[0.12em] uppercase text-cp-mid transition-colors data-[state=active]:text-cp-yellow data-active:text-cp-yellow hover:bg-cp-yellow/5 hover:text-cp-yellow first:border-l-0 rounded-none"
          >
            // Player Rules
          </TabsTrigger>
          <TabsTrigger
            value="gm"
            className="border-l border-cp-border px-6 py-3 font-mono text-[0.65rem] tracking-[0.12em] uppercase text-cp-mid transition-colors data-[state=active]:text-cp-yellow data-active:text-cp-yellow hover:bg-cp-yellow/5 hover:text-cp-yellow rounded-none"
          >
            // GM Rules
          </TabsTrigger>
        </TabsList>

        {(["player", "gm"] as const).map((key) => (
          <TabsContent key={key} value={key}>
            <div className="mx-auto max-w-[900px] rounded-none border border-cp-border bg-cp-dark p-8 md:p-12">
              <div className="prose-cyber">
                {content[key] ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content[key]}
                  </ReactMarkdown>
                ) : (
                  <p className="text-cp-mid font-mono text-sm">Loading...</p>
                )}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
