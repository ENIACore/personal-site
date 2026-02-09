This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Code Style Guide

### Tailwind CSS Class Ordering

All className attributes should follow this order for consistency and readability:

1. **Layout** - position, display, float, clear, isolation, z-index
2. **Flexbox/Grid** - flex, grid, justify, align, gap, place, order
3. **Spacing** - margin (m-*), padding (p-*)
4. **Sizing** - width, height, max-width, min-width, etc.
5. **Typography** - font-family, font-size, font-weight, line-height, text-align, text-color, text-decoration
6. **Visual** - background, border, border-radius, box-shadow
7. **Effects** - opacity, transform, transition, animation
8. **Miscellaneous** - cursor, pointer-events, overflow, select, appearance
9. **State Variants** - hover:, focus:, active:, disabled:, group-hover:
10. **Responsive Variants** - sm:, md:, lg:, xl:, 2xl:

**Standard Comment (add to all component files):**
```tsx
// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
```

**Example:**
```tsx
<div className="relative flex justify-center items-center p-4 w-full h-20 text-lg font-bold text-white bg-blue-500 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 md:w-1/2">
  Content
</div>
```

## Component Organization

  layout/ - Structural components that define page/section organization
  - Examples: Section, SectionWrapper
  - These handle the overall layout structure of your pages

  shared/ - App-specific reusable components used across multiple pages
  - Examples: Navbar, Gradient
  - These are components specific to your app that get reused in multiple places

  ui/ - Generic, reusable UI primitives and interactive widgets
  - Currently empty in your project
  - Best for components like buttons, tooltips, inputs, cards, etc.
