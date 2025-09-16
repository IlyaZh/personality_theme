# Changelog

## 1.0.0

### URL Architecture (Routing)
- Home: `/` (static `index.hbs`)
- Blog: `/blog/` (channel on `home.hbs`)
- Categories: `/blog/<category>/` (e.g., `mainstream`, `growth`, `projects`, `thoughts`)
- Posts: `/{slug}/` (all posts except microblog)
- Thoughts microblog:
  - Feed: `/blog/thoughts/` (template `thoughts`)
  - Posts: `/thoughts/{slug}/`
- Taxonomies: `tag: /tag/{slug}/`, `author: /author/{slug}/`

### Features
- Unified navigation via `{{> navigation}}` with proper active states on blog and categories
- Hero sections with consistent gradient styling and clear CTAs (incl. “Get in Touch”)
- Native Ghost Search via `data-ghost-search` trigger
- Error page (`error.hbs`) with helpful actions, search, and recent posts
- Thoughts microblog layout: vertical list, no images, full content, clean `.prose` typography
- Polished cards and UI: hover effects, badges, improved post and recommendations cards
- Subscription: Ghost Members form with success/error messaging
- Recommendations block with fallback avatars
- Theme toggle with persistence via `localStorage`
- Single source of truth for resume links via `@custom.resume_link`
- “Back to top” button positioned to avoid overlap with Subscribe
- Theme customization exposed via `custom.*` in `package.json` for Admin control
- SEO/OG/Twitter dynamic meta in `default.hbs`
- Styling: Tailwind + daisyUI, consolidated utilities, built `assets/css/screen.css`

## 1.0.1

### Responsive and UX fixes
- Aligned stats block with About text; improved spacing and layout
- Increased stats card width and padding for readability, while preserving compact mobile layout
- Fixed horizontal overflow on mobile

## 1.0.2

- Just add screenshots