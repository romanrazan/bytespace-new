import { SectionContainer } from "@/components/ui/SectionContainer";

const logoMarks = [
  <svg key="waves" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22" fill="currentColor" /><path d="M4 15c9-4 17-2 24 2 6 3 11 4 16 3M3 21c9-3 17-1 24 3 6 3 12 4 18 2M3 28c8-2 16 0 23 4 6 3 11 4 16 3" fill="none" stroke="white" strokeWidth="3.2" /></svg>,
  <svg key="sun" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="8" fill="currentColor" /><path d="M24 2v12M24 34v12M2 24h12M34 24h12M8.4 8.4l8.5 8.5M31.1 31.1l8.5 8.5M39.6 8.4l-8.5 8.5M16.9 31.1l-8.5 8.5M14.8 4.1l4.6 11.1M28.6 32.8l4.6 11.1M4.1 33.2l11.1-4.6M32.8 19.4l11.1-4.6M33.2 4.1l-4.6 11.1M19.4 32.8l-4.6 11.1M4.1 14.8l11.1 4.6M32.8 28.6l11.1 4.6" fill="none" stroke="currentColor" strokeWidth="3.5" /></svg>,
  <svg key="bolt" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22" fill="currentColor" /><path d="m27.5 8-14 18h10l-3 14 14-19h-10z" fill="white" /></svg>,
  <svg key="petals" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22" fill="currentColor" /><circle cx="24" cy="15" r="5.5" fill="white" /><circle cx="33" cy="24" r="5.5" fill="white" /><circle cx="24" cy="33" r="5.5" fill="white" /><circle cx="15" cy="24" r="5.5" fill="white" /></svg>,
  <svg key="rings" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" /><path d="M24 4a20 20 0 1 1-20 20M24 7a17 17 0 1 1-17 17M24 10a14 14 0 1 1-14 14M24 13a11 11 0 1 1-11 11M24 16a8 8 0 1 1-8 8M24 19a5 5 0 1 1-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>,
];

export function PartnerLogos() {
  return (
    <section className="partners" aria-label="Partner logos">
      <SectionContainer>
        <div className="partners__list">
          {logoMarks.map((mark) => (
            <div className="partners__item" key={mark.key}>
              {mark}
              <span>Logoipsum</span>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
