# ByteSpace New

A polished, responsive course-marketplace frontend recreated from the supplied [ByteSpace Figma design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f). The implementation focuses on clear component boundaries, reusable typed data, visual fidelity, and reliable behavior from desktop to mobile.

## Live Demo

[https://bytespace-new-inky-gamma.vercel.app](https://bytespace-new-inky-gamma.vercel.app)

## Routes

- `/` — complete landing page
- `/login` — bonus sign-in experience
- `/signup` — bonus account-creation experience

## Features

- Responsive blue-grid hero with search, decorative artwork, and floating learning cards
- Partner strip, category filters, and reusable data-driven course cards
- Learning-path grid, professional-growth composition, and creator benefits
- Creator call-to-action, testimonial cards, newsletter, and responsive footer
- Shared authentication layout and form architecture for login and signup
- Keyboard-accessible controls, semantic page structure, and optimized local imagery

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript
- Custom responsive CSS
- Lucide React icons

## Project structure

```text
src/
  app/                 # routes and global styles
  components/
    auth/              # shared login/signup UI
    course/            # course cards and category pills
    home/              # landing-page sections
    layout/            # navigation and footer
    ui/                # shared primitives
  data/                # typed course and testimonial content
  types/               # shared TypeScript models
public/images/         # local visual assets
```

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

The layouts have been checked at 1440px, 1024px, 768px, and 390px widths, including horizontal-overflow checks.

## Git workflow

Development is performed on `feature/bytespace-landing-page` and is intended to merge into `main` through a pull request.
