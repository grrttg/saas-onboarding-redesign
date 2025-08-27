Onboarding Redesign: The "Studio in an Hour" Demo
LIVE DEMO LINK: https://saas-onboarding-redesign-riak.vercel.app/

This project is a high-fidelity prototype that proves a complex, friction-filled SaaS onboarding process can be redesigned into a fast, intuitive, and value-driven user experience.

The Problem: Mindbody's Onboarding Friction
My analysis of Mindbody's new user journey, based on their public sign-up flow and video demos, revealed three major points of friction that delay a new business owner's "Time-to-First-Value."

Teardown: "Where the Minutes (and Days) Go"
1. The Hard Gate to Entry

Friction: The self-service sign-up process ends at a "Let's Talk" CTA, requiring a sales call to proceed.

Result: This creates a total blockage, extending the time to get started from minutes to days and killing user momentum.

2. Configuration Overload

Friction: When adding a simple service, a new user is immediately confronted with expert-level fields like "Revenue Category" and "Back Bar Charge."

Result: This causes decision fatigue and adds cognitive load, making a simple task feel complex and intimidating.

3. Disjointed Workflow

Friction: To make a staff member available for a service, a user must navigate between three separate top-level screens (Services, Staff, and Staff Appointment Setup).

Result: The process is inefficient and unintuitive, requiring the user to learn the software's structure instead of being guided linearly.

The Solution: A Product-Led Redesign
This project implements a redesigned flow based on core principles of modern, user-centric onboarding.

Product Brief
Persona: "Sasha," a time-poor solo esthetician opening her first studio.

Primary Goal: Enable Sasha to get a live booking page in under 60 minutes, with zero human intervention.

Core Principles: Self-Service First, Value First (Configure Later), and a Linear & Guided Flow.

My AI-Augmented Process
I built this prototype rapidly using Cursor AI. This allowed me to focus on the UX and product strategy. For example, to create the state management for the wizard, I used a prompt like this:

"In my OnboardingWizard component, add the necessary useState hooks to manage the following data points through the flow: template (string), serviceName (string), servicePrice (string), and serviceDuration (string). Initialize them with sensible defaults."

This AI-augmented workflow allowed me to build this entire functional prototype in under two hours.
