# Graph Report - Bhushan.Ravikumar.github.io  (2026-06-16)

## Corpus Check
- 37 files · ~98,558 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 282 nodes · 358 edges · 18 communities (15 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4ca79259`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `DesignSystemGenerator` - 11 edges
3. `cn()` - 10 edges
4. `ui-ux-pro-max` - 9 edges
5. `Bhushan Ravikumar — Portfolio` - 9 edges
6. `_search_csv()` - 8 edges
7. `BM25` - 7 edges
8. `search()` - 7 edges
9. `generate_design_system()` - 7 edges
10. `tailwind` - 6 edges

## Surprising Connections (you probably didn't know these)
- `DisplayCard()` --calls--> `cn()`  [EXTRACTED]
  components/ui/display-cards.tsx → lib/utils.ts
- `DemoOne()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dotted-surface-demo.tsx → lib/utils.ts
- `_generate_intelligent_overrides()` --calls--> `search()`  [INFERRED]
  .cursor/skills/ui-ux-pro-max/scripts/design_system.py → .cursor/skills/ui-ux-pro-max/scripts/core.py
- `DottedSurface()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dotted-surface.tsx → lib/utils.ts
- `Projects()` --calls--> `useDialog()`  [EXTRACTED]
  components/site/projects.tsx → components/site/dialog-provider.tsx

## Import Cycles
- None detected.

## Communities (18 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.20
Nodes (9): Bhushan Ravikumar — Portfolio, Deployment, Editing content, License, Local development, Prerequisites, Project structure, Stack (+1 more)

### Community 1 - "Community 1"
Cohesion: 0.09
Nodes (20): experiences, Actions(), Contact(), DialogContext, DialogContextValue, DialogProvider(), useDialog(), Experience() (+12 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (29): Accessibility, Available Domains, Available Stacks, Common Rules for Professional UI, Example Workflow, How to Use This Skill, Icons & Visual Elements, Interaction (+21 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (19): Button, ButtonProps, buttonVariants, Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps (+11 more)

### Community 4 - "Community 4"
Cohesion: 0.09
Nodes (22): dependencies, class-variance-authority, clsx, embla-carousel-react, framer-motion, lucide-react, next, next-themes (+14 more)

### Community 5 - "Community 5"
Cohesion: 0.13
Nodes (14): cn(), Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, defaultCards (+6 more)

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (16): Experience, featuredProjects, otherProjects, Project, Carousel(), Chips(), DialogHeadLogo(), DialogHeadThumb() (+8 more)

### Community 7 - "Community 7"
Cohesion: 0.15
Nodes (15): BM25, detect_domain(), _load_csv(), Lowercase, split, remove punctuation, filter short words, Build BM25 index from documents, Score all documents against query, Load CSV and return list of dicts, Core search function using BM25 (+7 more)

### Community 8 - "Community 8"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 9 - "Community 9"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 10 - "Community 10"
Cohesion: 0.17
Nodes (16): _detect_page_type(), format_ascii_box(), format_markdown(), format_master_md(), format_page_override_md(), generate_design_system(), _generate_intelligent_overrides(), persist_design_system() (+8 more)

### Community 11 - "Community 11"
Cohesion: 0.16
Nodes (9): DesignSystemGenerator, Select best matching result based on priority keywords., Extract results list from search result dict., Generate complete design system recommendation., Generates design system recommendations from aggregated searches., Load reasoning rules from CSV., Execute searches across multiple domains., Find matching reasoning rule for a category. (+1 more)

### Community 12 - "Community 12"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+2 more)

### Community 13 - "Community 13"
Cohesion: 0.29
Nodes (5): inter, metadata, spaceGrotesk, viewport, ThemeProvider()

## Knowledge Gaps
- **132 isolated node(s):** `inter`, `spaceGrotesk`, `metadata`, `viewport`, `$schema` (+127 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 5` to `Community 3`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `search()` connect `Community 7` to `Community 10`, `Community 11`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `BM25 ranking algorithm for text search`, `Lowercase, split, remove punctuation, filter short words`, `Build BM25 index from documents` to the rest of the system?**
  _158 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.0928030303030303 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._