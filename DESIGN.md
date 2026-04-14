# Design Brief – Campus Connect

## Purpose & Tone
Modern campus services app for student convenience — food ordering, book printing, event booking. Energetic yet focused; trust-building with accessibility at core.

## Differentiation
Campus-specific modular card layout mirrors institutional service silos. Vibrant blue/green accents signal vitality without feeling chaotic. Playful animations on state transitions (floating cart, pulse badges) humanize the experience while maintaining focus.

## Color Palette
| Name | OKLCH | Usage |
|------|-------|-------|
| Primary (Teal) | 0.42 0.13 198 | Actions, headers, selection states |
| Secondary (Green) | 0.54 0.15 155 | Success badges, availability |
| Accent (Bright Green) | 0.56 0.18 142 | Floating cart, CTA emphasis |
| Destructive (Red) | 0.54 0.22 25 | Unavailable, errors, sold-out |
| Neutral (Grey) | 0.92 0.02 0 | Cards, borders, muted text |
| Background | 0.98 0.01 0 | Page bg (light); 0.12 0.01 240 (dark) |

## Typography
| Layer | Font | Usage |
|-------|------|-------|
| Display | General Sans | Headers, app name, service titles |
| Body | DM Sans | List items, descriptions, body text |
| Mono | Geist Mono | Order IDs, QR codes, technical labels |

Type scale: 12px (caption), 14px (body), 16px (subheading), 18px (heading), 24px (display), 32px (hero).

## Shape Language
Border radius: `rounded-lg` (12px) for cards, `rounded-md` (10px) for buttons, `rounded-full` for badges and icon containers. No sharp corners.

## Structural Zones
| Zone | Treatment | Usage |
|------|-----------|-------|
| Header | Card bg with bottom border (1px primary/primary-foreground) | App title, navigation active state |
| Content | Background with card overlays | Main content sections, food items |
| Bottom Nav | Elevated shadow, primary accent on active link | Dashboard, Notifications, Queue, Profile |
| Floating Elements | Elevated shadow, scale animation on interaction | Cart icon, badges, action sheets |
| CTA Buttons | Primary/accent gradient, shadow-elevated | Add to cart, checkout, submit |

## Spacing & Rhythm
Density: compact (mobile-first). Gap: 12px between cards, 16px sections, 24px major sections. Padding: 16px card interior, 8px icon padding. Line height: 1.5 for body, 1.3 for headings.

## Component Patterns
- **Cards**: rounded-lg shadow-card, 16px padding, clear data hierarchy
- **Buttons**: Primary (blue bg, white text), Secondary (green accent, white text), Ghost (transparent, text-only)
- **Badges**: Availability (green), unavailable (red), neutral (grey) – rounded-full
- **List Items**: Card-like with left accent bar (4px primary color)
- **Seat Grid**: 6 columns, gaps 8px; available (green), selected (blue), unavailable (grey), transitions via scale-110

## Motion & Animation
Default transition: `transition-smooth` (0.3s cubic-bezier). Floating animation on cart badge (translateY -8px, 3s loop). Pulse soft on notification badges (2s). Scale up on seat selection (0.1s). No bounce or spring — easing only.

## Constraints
- Max 3 colors per screen (primary + accent + destructive)
- No more than 2 font families in use
- Card shadows consistent (shadow-card, shadow-elevated only)
- Animations under 400ms for interactions, under 3s for ambient motion
- Mobile-first: all components functional at 320px, optimized for 375px–414px

## Signature Detail
Floating cart icon with pulse badge + count. Smooth scale animation on availability state change in food court. Green-to-blue gradient underlay on selected seats.

## Dark Mode
Inverted lightness values maintain contrast; primary becomes brighter (0.68 L), background darker (0.12 L), borders remain visible (0.28 L). No additional color adjustments — same palette, same semantics.
