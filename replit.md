# Fame & Style Creative Agency Website

## Overview

This is a full-stack web application for "Fame & Style," a premium creative agency specializing in social media marketing, reels editing, and website UI/UX design. The application features a modern, visually striking multi-page website with enhanced 3D animations, comprehensive service showcases, dedicated portfolio page, and advanced contact form system.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Premium gold and black theme, 3D animations, minimal and stunning look, professional appearance.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React-based single-page application built with Vite
- **Backend**: Express.js REST API server
- **Database**: PostgreSQL with Drizzle ORM (configurable)
- **Styling**: Tailwind CSS with shadcn/ui components
- **3D Graphics**: Three.js integration for interactive elements

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing with multi-page support
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme (gold/black theme)
- **3D Graphics**: Enhanced Three.js integration with multiple geometric shapes, particle systems, and mouse interaction
- **Build Tool**: Vite with custom configuration for development and production

### Recent Updates (January 2025)
- **AI Chatbot Integration**: Implemented OpenAI-powered chatbot for client queries, FAQs, portfolio showcase, and deal-making assistance
- **Creative Loading Animation**: Added stunning 3D loading screen with logo integration and particle effects
- **Enhanced 3D Animations**: Added Corner3D components on all pages with multiple animation types (float, fade-in, slide-in, bounce-in, pulse-glow)
- **Team Members Update**: Updated team with real members - Pratik Soni (Founder), Abhinav Joshi (Co-founder), Sneha (Co-founder), Rishi (Director), Mahi Patil (Creative Director & Brand Executive)
- **Contact Information Update**: Updated to Amravati Maharashtra location, +91 82799 44814 phone, fameinstyleofficial@gmail.com email
- **Logo Integration**: Added Fame & Style logo throughout the website including navigation and loading screen
- **Service Focus Refinement**: Prioritized social media marketing, reels editing, and website UI/UX design
- **Multi-page Architecture**: Dedicated Portfolio and Contact pages with full routing and enhanced 3D elements
- **Advanced Contact Form**: Comprehensive contact form with budget ranges, timeline options, and preferred contact methods
- **Enhanced Animations**: Added slide-in-left, slide-in-right, bounce-in, pulse-glow, and scale-in animations throughout

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Structure**: RESTful endpoints for contact management
- **Database**: Drizzle ORM with PostgreSQL support
- **Session Management**: Express sessions with PostgreSQL store
- **Error Handling**: Centralized error middleware

### Data Storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Defined in shared/schema.ts for type consistency
- **Migrations**: Drizzle Kit for database migrations
- **Fallback**: In-memory storage implementation for development

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Layer**: Express routes handle HTTP requests and validate data
3. **Data Validation**: Zod schemas ensure type safety across client/server boundary
4. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
5. **Response Handling**: JSON responses with consistent error handling

### Contact Form Flow
- User fills out contact form with validation
- Form data validated using Zod schemas
- POST request to `/api/contact` endpoint
- Data stored in PostgreSQL contacts table
- Success/error feedback via toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **three**: 3D graphics library for interactive elements
- **@radix-ui/***: Accessible UI component primitives

### Development Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for server development
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-***: Replit-specific development plugins

## Deployment Strategy

### Development
- **Server**: Node.js with tsx for TypeScript execution
- **Client**: Vite dev server with HMR
- **Database**: Environment-based DATABASE_URL configuration
- **Assets**: Served through Vite's static file handling

### Production
- **Build Process**: 
  - Client: Vite builds React app to `dist/public`
  - Server: esbuild bundles Express server to `dist/index.js`
- **Runtime**: Node.js serves both API and static files
- **Database**: PostgreSQL via connection string
- **Session Storage**: PostgreSQL-backed sessions for production

### Environment Configuration
- Development and production modes supported
- Environment variables for database connection
- Conditional plugin loading based on environment
- Replit-specific optimizations when deployed on Replit platform

The application is designed to be easily deployable on various platforms while maintaining development flexibility through environment-based configuration.