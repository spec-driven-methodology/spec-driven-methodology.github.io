# spec-driven-methodology.github.io

Organization site for the SDM methodology (Spec-Driven Methodology). GitHub Pages site (static HTML, no Jekyll — `.nojekyll`).

## Structure

- `index.html` — landing page (SDM theme: IntelliJ/Darcula palette, Agent Orb brand)
- `ru/index.html` — Russian landing page
- `examples/` — live examples (Java Developer → Senior, AI Course Program, Tech Conference Program)
- `ru/examples/` — Russian versions of the live examples
- `sdm-theme/` — SDM theme reference (palette, cards, icons, brand)

## Local development

Serve the static files with any static server, e.g.:

```bash
python3 -m http.server 8000
```

## Related repositories

| Repository | Purpose |
|---|---|
| [`methodology`](https://github.com/spec-driven-methodology/methodology) | Methodology concept, ADRs, specification |
| [`sdm`](https://github.com/spec-driven-methodology/sdm) | Reference implementation: CLI, MCP server, npm `@spec-driven-methodology/sdm` |
| [`obsidian-sdm`](https://github.com/spec-driven-methodology/obsidian-sdm) | Obsidian plugin |