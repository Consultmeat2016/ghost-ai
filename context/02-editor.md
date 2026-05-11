We need the base chrome components that frame every editor screen- the top navbar and left sidebar shell. These will be reused and extended in every chapter that follows.


### Editor Navbar

create `components/editor/editor-navbar.tsx`.

Requirements:

- fixed-height top navbar
- left,center and right sections
- left section contains sidebar toggle button
- use `PanelLeftOpen` / `PanelLeftClose` icons based on sidebar state
- right section stays empty for now
- dark background with subtle bottom border


### Project Sidebar

create `components/editor/project-sidebar.tsx`.

Requirements:
- sidebar should float above the editor canvas
- opening it should not push page content
- slides in from left
- accepts `isOpen` prop
- header with `projects` title +close button
- shadcn `Tabs` :
  - My Projects
  - Shared
-both tabs show empty placeholder state
- full-width `New Project` button at the bottom with `Plus` icon

### Dialog Pattern
 - use the existing color tokens from global.css for dialog styling.

 Support:
 - title
 - description
 - footer action

 Do not build actual dialog yet.

 Check when done
 - new components compile without TypeScript errors
 - no lint errors
 - dialog pattern is ready for future use
