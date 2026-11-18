# Agents Demo Repo

A Turborepo-powered monorepo containing the Next.js website and its shared packages.

## Structure

```
agents-demo-repo/
├── apps/
│   └── web/          # Main website - port 3000
├── packages/
│   └── i18n/         # Shared i18n utilities and UI message catalogs (next-intl)
```

The main web app (`apps/web`) uses **Next.js App Router** with all pages under
`src/app/[locale]/`. Learn articles are MDX files in `apps/web/content/learn/<locale>/`.

## Internationalization

UI strings live in `packages/i18n/messages/web/<locale>/common.json`, one catalog per
locale, loaded by `next-intl`. English (`en`) is the source; the German catalog (`de`)
is maintained by the team. Locales are registered in `packages/i18n/src/config.ts`.
Missing translations fall back to English.

## Development

```bash
pnpm install
pnpm dev:web
```
