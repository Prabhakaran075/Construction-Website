import React from 'react';
import { ShieldCheck, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: '4rem 0', borderBottom: '4px solid var(--color-safety-orange)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 800 }}>Privacy Policy</h1>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Learn how GPR Construction collects, uses, and safeguards your contact and project files.
          </p>
        </div>
      </section>

      {/* Policy Details */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '8px', border: '1px solid var(--color-concrete-dark)', boxShadow: 'var(--shadow-sm)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', borderBottom: '2px solid var(--color-concrete-base)', paddingBottom: '1rem' }}>
              <ShieldCheck size={28} style={{ color: 'var(--color-safety-orange)' }} />
              <h2 style={{ fontSize: '1.5rem', margin: 0, textTransform: 'uppercase', fontWeight: 800 }}>Data Collection & Usage Policy</h2>
            </div>

            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Effective Date: July 18, 2026. At GPR Construction, we respect your privacy. This policy outlines how we handle data collected when you request project estimates, upload blueprints, or contact us.
            </p>

            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>1. Information We Collect</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              When you submit a quote request on our Contact form, we collect the following details:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
              <li><strong>Contact Information:</strong> Your name, email address, and phone number.</li>
              <li><strong>Project Details:</strong> Chosen plan package (Basic/Standard/Premium), estimated built-up square footage, and project site location.</li>
              <li><strong>Attachments:</strong> Architectural blueprints, 2D designs, site layout plans, or site photos you choose to upload.</li>
            </ul>

            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>2. File Security & Hosting</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              We offer two secure methods of file attachments depending on site configuration:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
              <li><strong>Temporary Public Hosting (tmpfiles.org):</strong> Files uploaded under this mode are sent as secure temporary download links inside your quote email. They are temporarily hosted and expire or delete from the hosting servers after a set time.</li>
              <li><strong>Cloudinary:</strong> If Cloudinary is connected, your documents are uploaded directly to our private, secure Cloudinary media repository. Only authorized GPR estimators have access to review these files.</li>
            </ul>

            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>3. How We Use Your Data</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              We use the details you submit solely to review building parameters, calculate project costs, and call you back to discuss estimate quotes. We do not sell, rent, or lease your contact information or files to any third-party marketing companies.
            </p>

            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>4. Email & Communication (EmailJS)</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Your form details are securely emailed to our administration team at <strong>gprconstruction2@gmail.com</strong> using EmailJS. Your parameters are transmitted via encrypted pipelines.
            </p>

            <div style={{ marginTop: '3rem', borderTop: '2px solid var(--color-concrete-base)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--color-concrete-base)', padding: '1.5rem', borderRadius: '6px' }}>
              <Mail size={36} style={{ color: 'var(--color-steel-blue)', flexShrink: 0 }} />
              <div>
                <h4 style={{ margin: 0, textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 700 }}>Contact Privacy Deck</h4>
                <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                  If you wish to request deletion of your submitted estimate files or contact logs, email us at <a href="mailto:gprconstruction2@gmail.com" style={{ color: 'var(--color-steel-blue)', fontWeight: 600 }}>gprconstruction2@gmail.com</a>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
