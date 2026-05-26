# Design System Project

## What this is
A configurable design system generator. Users input brand values via a web UI.
The system generates a token-based design system with light/dark mode and responsive layouts.

## Monorepo structure
packages/tokens/       Token definitions, generators, CSS output
packages/components/   React component library (Radix UI primitives)
apps/configurator/     Brand configurator web app (Vite + React + TypeScript)
apps/docs/             Storybook documentation

## Stack
React 18, TypeScript, Vite, Zustand, Style Dictionary, culori, Radix UI, CSS Modules

## Critical rules — always follow these
- CSS values in components must use CSS variables only — never hardcode hex, px, or font names
- Semantic tokens must reference primitive tokens — never raw values
- Component tokens must reference semantic tokens — never primitives directly
- All components need ARIA attributes, keyboard navigation, and focus management
- Tests must include axe accessibility checks

## Token naming convention
--color-{ramp}-{stop}       primitives    e.g. --color-brand-500
--color-{role}-{variant}    semantic      e.g. --color-background-primary
--{component}-{property}    component     e.g. --button-height-md

## Test command
npm run test (runs Vitest across all packages via Turborepo)

## Do not
- Install packages at the root unless they are shared devDependencies
- Use hardcoded values in component CSS
- Create new files outside the structure above without asking
