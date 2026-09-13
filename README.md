# spec-driven-methodology.github.io

Organization site for the SDM methodology (Spec-Driven Methodology). Built with GitHub Pages (Jekyll) automatically on push to `main`.

## Structure

- `index.md` — main page (English), from the methodology's `ONE_PAGER.md`
- `ru/index.md` — Russian version at `/ru/`
- `_config.yml` — Jekyll configuration
- `_includes/header.html` — header with `EN | RU` language switcher

## Local development

```bash
bundle install
bundle exec jekyll serve
```

## Related repositories

| Repository | Purpose |
|---|---|
| [`methodology`](https://github.com/spec-driven-methodology/methodology) | Methodology concept, ADRs, specification |
| [`sdm`](https://github.com/spec-driven-methodology/sdm) | Reference implementation: CLI, MCP server, npm `@spec-driven-methodology/sdm` |
| [`obsidian-sdm`](https://github.com/spec-driven-methodology/obsidian-sdm) | Obsidian plugin |