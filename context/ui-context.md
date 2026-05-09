# UI Context

## Theme

Dark only. The design language is a dark technical
workspace with near-black backgrounds, layered neutral
surfaces, subtle borders, and high-contrast text.

## Colors

All shared UI components use CSS custom properties
defined in `app/globals.css`; avoid hardcoded hex values.

| Role            | CSS Variable          | Value |
| --------------- | --------------------- | ----- |
| Page background | `--background`        | `oklch(0.145 0 0)` |
| Surface         | `--card`              | `oklch(0.205 0 0)` |
| Primary text    | `--foreground`        | `oklch(0.985 0 0)` |
| Muted text      | `--muted-foreground`  | `oklch(0.708 0 0)` |
| Primary accent  | `--primary`           | `oklch(0.922 0 0)` |
| Border          | `--border`            | `oklch(1 0 0 / 10%)` |
| Error           | `--destructive`       | `oklch(0.704 0.191 22.216)` |
| Input           | `--input`             | `oklch(1 0 0 / 15%)` |

## Typography

| Role      | Font       | Variable |
| --------- | ---------- | -------- |
| UI text   | Geist Sans | `--font-geist-sans` |
| Code/mono | Geist Mono | `--font-geist-mono` |

## Border Radius

| Context           | Class |
| ----------------- | ----- |
| Inline / small UI | `rounded-md` |
| Cards / panels    | `rounded-lg` |
| Modals / overlays | `rounded-lg` |

## Component Library

shadcn/ui on top of Tailwind CSS v4. Components live in
`components/ui/`. Use the shadcn CLI to add generated
components, and do not manually edit generated UI files.

## Layout Patterns

- Editor: full-viewport work surface with clear content
  regions.
- Panels: bordered dark surfaces using shared card,
  border, and muted tokens.
- Modals: centered overlays using dialog primitives and
  dark popover tokens.
- Navigation: restrained bars or side regions with border
  separators.

## Icons

Lucide React. Use stroke-based icons sized `h-4 w-4` for
inline UI and `h-5 w-5` for larger button controls.
