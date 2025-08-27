# Project Plan: The "Studio in an Hour" Onboarding Demo

This document outlines the steps to create a React + TypeScript application that demonstrates a redesigned, user-centric onboarding flow.

## Phase 0: Project Initialization

**Goal:** Set up the project structure and dependencies.

### Step 0.1: Initialize the Project

Execute the following commands in the integrated terminal:

```sh
npm create vite@latest . -- --template react-ts
npm install
```

### Step 0.2: Clean Up Boilerplate

Delete the following files and folders:

  - `src/assets`
  - `src/App.css`

## Phase 1: Core Component & UI Shell

**Goal:** Create the main wizard component that will manage the state of the onboarding flow and render the correct step.

### Step 1.1: Create the OnboardingWizard Component

Create a new file at `src/OnboardingWizard.tsx` and populate it with the following code. This sets up the shell for all 5 steps of our flow.

```tsx
import React, { useState } from 'react';

// A simple progress tracker component
const ProgressTracker = ({ currentStep }: { currentStep: number }) => {
  const steps = ['Welcome', 'Template', 'Details', 'Preview', 'Done'];
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
      {steps.map((step, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: index + 1 <= currentStep ? '#007bff' : '#ccc',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            {index + 1}
          </div>
          <div style={{ marginLeft: '8px', color: index + 1 <= currentStep ? 'black' : '#aaa' }}>{step}</div>
          {index < steps.length - 1 && (
            <div style={{ width: '50px', height: '2px', backgroundColor: '#ccc', margin: '0 8px' }} />
          )}
        </div>
      ))}
    </div>
  );
};


export const OnboardingWizard = () => {
  const [step, setStep] = useState(1);

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '1rem' }}>
      <ProgressTracker currentStep={step} />

      {/* Step 1: Welcome */}
      {step === 1 && (
        <div>
          {/* We will build this in the next phase */}
        </div>
      )}

      {/* Step 2: Template Picker */}
      {step === 2 && (
        <div>
           {/* We will build this in the next phase */}
        </div>
      )}

      {/* Step 3: Service & Staff Form */}
      {step === 3 && (
        <div>
           {/* We will build this in the next phase */}
        </div>
      )}

      {/* Step 4: Preview */}
      {step === 4 && (
        <div>
           {/* We will build this in the next phase */}
        </div>
      )}

      {/* Step 5: Finish */}
      {step === 5 && (
        <div>
           {/* We will build this in the next phase */}
        </div>
      )}
    </div>
  );
};
```

### Step 1.2: Update App.tsx and index.css

1.  Replace the entire contents of `src/App.tsx` with the following to render our new wizard:

    ```tsx
    import { OnboardingWizard } from './OnboardingWizard';

    function App() {
      return (
        <OnboardingWizard />
      );
    }

    export default App;
    ```

2.  Replace the entire contents of `src/index.css` with these simple styles:

    ```css
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #f4f7f6;
    }

    .card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      text-align: center;
    }

    h1 {
      font-size: 2rem;
      margin-top: 0;
    }

    p {
      color: #555;
      line-height: 1.6;
    }

    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    button:hover {
      background-color: #0056b3;
    }
    ```

## Phase 2: Building the Steps

**Goal:** Implement the UI and logic for each step of the onboarding flow.

### Step 2.1: Update the Wizard State

In `src/OnboardingWizard.tsx`, add the following `useState` hooks inside the `OnboardingWizard` component, right below the `const [step, setStep] = useState(1);` line. This will hold all our user data.

```tsx
  const [template, setTemplate] = useState('');
  const [serviceName, setServiceName] = useState('60-Minute Signature Facial');
  const [servicePrice, setServicePrice] = useState('95');
  const [serviceDuration, setServiceDuration] = useState('60');
```

### Step 2.2: Implement Step 1 (Welcome)

In `src/OnboardingWizard.tsx`, replace the `  {/* Step 1... */} ` block with this code:

```tsx
      {step === 1 && (
        <div className="card">
          <h1>Welcome to Your New Studio Setup!</h1>
          <p>Let's get your business online in minutes. We'll guide you through the essentials to get your first booking page live.</p>
          <button onClick={() => setStep(2)}>Get Started</button>
        </div>
      )}
```

### Step 2.3: Implement Step 2 (Template Picker)

In `src/OnboardingWizard.tsx`, replace the `  {/* Step 2... */} ` block with this code:

```tsx
      {step === 2 && (
        <div className="card">
          <h1>First, what type of business are you?</h1>
          <p>This will help us preload some sensible defaults for you.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <button onClick={() => { setTemplate('Salon'); setStep(3); }}>Salon</button>
            <button onClick={() => { setTemplate('Spa'); setStep(3); }}>Spa</button>
            <button onClick={() => { setTemplate('Fitness'); setStep(3); }}>Fitness</button>
          </div>
        </div>
      )}
```

### Step 2.4: Implement Step 3 (Service & Staff Form)

In `src/OnboardingWizard.tsx`, replace the `  {/* Step 3... */} ` block with this code:

```tsx
      {step === 3 && (
        <div className="card">
          <h1>Add Your First Service</h1>
          <p>Let's add your most popular service. You can add more later.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'stretch', textAlign: 'left', marginTop: '2rem' }}>
            <label>Service Name:
              <input type="text" value={serviceName} onChange={(e) => setServiceName(e.target.value)} style={{width: '95%', padding: '8px'}}/>
            </label>
            <label>Price ($):
              <input type="number" value={servicePrice} onChange={(e) => setServicePrice(e.target.value)} style={{width: '95%', padding: '8px'}}/>
            </label>
            <label>Duration (mins):
              <input type="number" value={serviceDuration} onChange={(e) => setServiceDuration(e.target.value)} style={{width: '95%', padding: '8px'}}/>
            </label>
          </div>
          <button onClick={() => setStep(4)} style={{marginTop: '2rem'}}>Next</button>
        </div>
      )}
```

### Step 2.5: Implement Step 4 (Preview)

In `src/OnboardingWizard.tsx`, replace the `  {/* Step 4... */} ` block with this code:

```tsx
      {step === 4 && (
        <div className="card">
          <h1>Here's a Preview!</h1>
          <p>This is what clients will see. You can customize it later.</p>
          <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', marginTop: '2rem', textAlign: 'left' }}>
            <h2>Spokane Glow Studio</h2>
            <p>Your chosen template: {template}</p>
            <hr />
            <h3>Our Services</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#f9f9f9', borderRadius: '5px' }}>
              <div>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{serviceName}</p>
                <p style={{ margin: 0, color: '#777' }}>{serviceDuration} minutes</p>
              </div>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>${servicePrice}</div>
            </div>
          </div>
          <button onClick={() => setStep(5)} style={{marginTop: '2rem'}}>Looks Great! Go Live</button>
        </div>
      )}
```

### Step 2.6: Implement Step 5 (Finish)

In `src/OnboardingWizard.tsx`, replace the `  {/* Step 5... */} ` block with this code:

```tsx
      {step === 5 && (
        <div className="card">
          <h1>Congratulations, you're live!</h1>
          <p>Your booking page is now available. Start sharing the link with your clients.</p>
          <div style={{ background: '#eee', padding: '1rem', borderRadius: '5px', marginTop: '2rem', fontFamily: 'monospace' }}>
            https://glow.mangomint.com/booking
          </div>
        </div>
      )}
```

-----

### ⚠️ YOUR TURN: MANUAL STEP 1 (Create the README)

**Goal:** Create the `README.md` file that tells the story of your project.

1.  Create a new file in the root of your project named `README.md`.
2.  Copy the entire block of text below and paste it into the new `README.md` file.

-----

*(Start copying here)*

# Onboarding Redesign: The "Studio in an Hour" Demo

**LIVE DEMO LINK: [You will add your Vercel link here later]**

This project is a high-fidelity prototype that proves a complex, friction-filled SaaS onboarding process can be redesigned into a fast, intuitive, and value-driven user experience.

## The Problem: Mindbody's Onboarding Friction

My analysis of Mindbody's new user journey, based on their public sign-up flow and video demos, revealed three major points of friction that delay a new business owner's "Time-to-First-Value."

### Teardown: "Where the Minutes (and Days) Go"

**1. The Hard Gate to Entry**

  * **Friction:** The self-service sign-up process ends at a "Let's Talk" CTA, requiring a sales call to proceed.
  * **Result:** This creates a **total blockage**, extending the time to get started from minutes to days and killing user momentum.

**2. Configuration Overload**

  * **Friction:** When adding a simple service, a new user is immediately confronted with expert-level fields like "Revenue Category" and "Back Bar Charge."
  * **Result:** This causes **decision fatigue** and adds cognitive load, making a simple task feel complex and intimidating.

**3. Disjointed Workflow**

  * **Friction:** To make a staff member available for a service, a user must navigate between three separate top-level screens (Services, Staff, and Staff Appointment Setup).
  * **Result:** The process is **inefficient and unintuitive**, requiring the user to learn the software's structure instead of being guided linearly.

## The Solution: A Product-Led Redesign

This project implements a redesigned flow based on core principles of modern, user-centric onboarding.

### Product Brief

  * **Persona:** "Sasha," a time-poor solo esthetician opening her first studio.
  * **Primary Goal:** Enable Sasha to get a live booking page in under 60 minutes, with zero human intervention.
  * **Core Principles:** Self-Service First, Value First (Configure Later), and a Linear & Guided Flow.

### My AI-Augmented Process

I built this prototype rapidly using Cursor AI. This allowed me to focus on the UX and product strategy. For example, to create the state management for the wizard, I used a prompt like this:

> "In my OnboardingWizard component, add the necessary useState hooks to manage the following data points through the flow: `template` (string), `serviceName` (string), `servicePrice` (string), and `serviceDuration` (string). Initialize them with sensible defaults."

This AI-augmented workflow allowed me to build this entire functional prototype in under two hours.

## *(Stop copying here)*

-----

### ⚠️ YOUR TURN: MANUAL STEP 2 (Deploy the Project)

**Goal:** Get your project live on the web and finalize your documentation.

1.  **Commit Your Code:** In your terminal, run the following commands:
    ```sh
    git add .
    git commit -m "feat: build initial onboarding prototype"
    git push -u origin main
    ```
2.  **Create GitHub Repo:** Go to GitHub.com, create a new public repository (DO NOT initialize it with a README), and follow the instructions to push your existing local repository.
3.  **Deploy with Vercel:**
      - Go to [Vercel.com](https://vercel.com) and sign up using your GitHub account.
      - Click "Add New... \> Project".
      - Import your new GitHub repository.
      - Vercel will auto-detect that it's a Vite project. Click "Deploy".
4.  **Finalize README:**
      - Once deployment is complete, Vercel will give you a live URL (e.g., `your-project.vercel.app`).
      - Go back to your `README.md` file on GitHub, click "Edit".
      - Replace the `[You will add your Vercel link here later]` placeholder with your actual live URL.
      - Also, add the live URL to your GitHub repository's "Website" field in the right-hand sidebar.

You are now finished.