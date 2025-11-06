# KRNL - Roblox Script Executor

## Overview

KRNL is a marketing website for a Roblox script executor with a gaming-focused aesthetic. The application features a dark-themed, neon-accented design inspired by Discord, Riot Games, and modern gaming platforms. It's built as a single-page application with smooth scroll navigation, multilingual support (English, Turkish, German, French, Spanish), and a key generation system.

The project uses a modern React + TypeScript frontend with Express backend, positioned to serve static content and potentially handle API requests. The design emphasizes a cyber gaming aesthetic with purple/pink/violet neon gradients and professional polish.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Client-side routing using Wouter (lightweight alternative to React Router)
- Single-page application (SPA) architecture with smooth scroll navigation

**UI Component System**
- Shadcn/ui component library (New York style variant)
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom gaming theme
- Class Variance Authority (CVA) for component variant management
- Custom design system with neon purple/pink/violet color palette

**State Management**
- React Context API for language/internationalization (LanguageContext)
- TanStack React Query for server state management and caching
- Local component state with React hooks

**Styling Approach**
- Dark mode by default (class-based dark mode)
- Custom CSS variables for theming (HSL color format)
- Gaming aesthetic: neon accents, gradient overlays, glow effects
- Responsive design with mobile-first approach
- Custom fonts: Inter/Sora for body, Rajdhani/Orbitron for headers

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- Development mode with Vite middleware for HMR
- Production mode serving pre-built static assets
- Custom request logging middleware

**Data Layer**
- Drizzle ORM configured for PostgreSQL
- Schema-first approach with Zod validation integration
- Connection to Neon serverless PostgreSQL (via @neondatabase/serverless)
- Current implementation uses in-memory storage (MemStorage) as placeholder
- Database migrations managed in `/migrations` directory

**Session Management**
- Configured for connect-pg-simple (PostgreSQL session store)
- Session persistence prepared but not yet implemented

### Key Technical Decisions

**Why Vite over Create React App**
- Faster build times and HMR performance
- Native ESM support for modern development
- Better TypeScript integration
- More flexible plugin system

**Why Wouter over React Router**
- Lightweight (~1.5KB) for simple routing needs
- Sufficient for single-page scroll navigation
- Hooks-based API aligns with modern React patterns

**Why Drizzle ORM**
- Type-safe queries with TypeScript inference
- Lightweight compared to Prisma or TypeORM
- Direct SQL access when needed
- Better performance for serverless environments (Neon)

**Component Strategy**
- Shadcn/ui provides copy-paste components for full customization
- Radix UI primitives ensure accessibility compliance
- Allows complete design control while maintaining standards

**Internationalization Approach**
- Simple context-based i18n without heavy libraries
- Translation objects in TypeScript for type safety
- Supports 5 languages: EN, TR, DE, FR, ES
- Client-side only (no server-side rendering needed)

### Application Structure

**Directory Organization**
```
client/          # Frontend React application
  src/
    components/  # Reusable UI components
    pages/       # Route-level components (Home, KeySystem, NotFound)
    contexts/    # React Context providers
    lib/         # Utilities, query client, translations
    hooks/       # Custom React hooks
server/          # Backend Express application
  routes.ts      # API route registration
  storage.ts     # Data layer interface
  vite.ts        # Vite integration utilities
shared/          # Code shared between frontend/backend
  schema.ts      # Database schema and types
```

**Build Process**
- Client builds to `dist/public`
- Server bundles to `dist/index.js` using esbuild
- Single production artifact serves both static assets and API

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: react, react-dom, @tanstack/react-query
- **Backend**: express, @neondatabase/serverless
- **Build Tools**: vite, typescript, esbuild, tsx

### UI & Styling
- **Component Libraries**: @radix-ui/* (20+ primitive components)
- **Styling**: tailwindcss, autoprefixer, postcss
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Icons**: lucide-react, react-icons

### Data & Validation
- **ORM**: drizzle-orm, drizzle-kit
- **Validation**: zod, @hookform/resolvers, drizzle-zod
- **Forms**: react-hook-form

### Additional Libraries
- **Routing**: wouter
- **Date Handling**: date-fns
- **Command Palette**: cmdk
- **Carousel**: embla-carousel-react
- **Session Store**: connect-pg-simple (configured but not active)
- **Dev Tools**: @replit/vite-plugin-* (cartographer, dev-banner, runtime-error-modal)

### Database
- **Provider**: Neon Serverless PostgreSQL
- **Connection**: Via DATABASE_URL environment variable
- **ORM**: Drizzle with PostgreSQL dialect
- **Migration Strategy**: Push-based (drizzle-kit push)

### Asset Management
- Static assets stored in `attached_assets/` directory
- Alias configured: `@assets` points to attached_assets
- Generated images for screenshots/gallery features

### Development Environment
- Replit-specific plugins for enhanced DX
- Source maps via @jridgewell/trace-mapping
- Hot module replacement in development
- Runtime error overlays