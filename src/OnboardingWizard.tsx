import { useState } from 'react';

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
  const [template, setTemplate] = useState('');
  const [serviceName, setServiceName] = useState('60-Minute Signature Facial');
  const [servicePrice, setServicePrice] = useState('95');
  const [serviceDuration, setServiceDuration] = useState('60');

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '1rem' }}>
      <ProgressTracker currentStep={step} />

      {/* Step 1: Welcome */}
      {step === 1 && (
        <div className="card">
          <h1>Welcome to Your New Studio Setup!</h1>
          <p>Let's get your business online in minutes. We'll guide you through the essentials to get your first booking page live.</p>
          <button onClick={() => setStep(2)}>Get Started</button>
        </div>
      )}

      {/* Step 2: Template Picker */}
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

      {/* Step 3: Service & Staff Form */}
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

      {/* Step 4: Preview */}
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

      {/* Step 5: Finish */}
      {step === 5 && (
        <div className="card">
          <h1>Congratulations, you're live!</h1>
          <p>Your booking page is now available. Start sharing the link with your clients.</p>
          <div style={{ background: '#eee', padding: '1rem', borderRadius: '5px', marginTop: '2rem', fontFamily: 'monospace' }}>
            https://glow.mangomint.com/booking
          </div>
        </div>
      )}
    </div>
  );
};
