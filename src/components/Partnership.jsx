import SectionTitle from "./SectionTitle";

const partners = [
  {
    name: "Accenture",
    logo: "https://pyramidci.com/wp-content/uploads/2024/08/Accenture-2.svg",
  },
  {
    name: "Kelly",
    logo: "https://pyramidci.com/wp-content/uploads/2024/06/p-2.svg",
  },
  {
    name: "Pontoon",
    logo: "https://pyramidci.com/wp-content/uploads/2024/06/p-3.svg",
  },
  {
    name: "Guidant Global",
    logo: "https://pyramidci.com/wp-content/uploads/2024/06/p-4.svg",
  },
  {
    name: "SIA",
    logo: "https://pyramidci.com/wp-content/uploads/2024/08/SIA_YS-2.svg",
  },
  {
    name: "Allegis",
    logo: "https://pyramidci.com/wp-content/uploads/2024/06/p-6.svg",
  },
  {
    name: "Beeline Supplier Network",
    logo: "https://pyramidci.com/wp-content/uploads/2024/06/p-7.svg",
  },
  {
    name: "Randstad",
    logo: "https://pyramidci.com/wp-content/uploads/2024/08/Randstad.svg",
  },
  {
    name: "USPAACC",
    logo: "https://pyramidci.com/wp-content/uploads/2024/08/USPAAC.svg",
  },
  {
    name: "National MSDC",
    logo: "https://pyramidci.com/wp-content/uploads/2024/06/p-10.svg",
  },
  {
    name: "Mobument Staffing",
    logo: "https://pyramidci.com/wp-content/uploads/2024/06/p-11.svg",
  },
  {
    name: "HTEC",
    logo: "https://pyramidci.com/wp-content/uploads/2024/08/HTEC.svg",
  },
  {
    name: "Georgia MSDC",
    logo: "https://pyramidci.com/wp-content/uploads/2024/06/p-13.svg",
  },
  {
    name: "Hays",
    logo: "https://pyramidci.com/wp-content/uploads/2024/06/p-14.svg",
  },
  {
    name: "Talent Solutions",
    logo: "https://pyramidci.com/wp-content/uploads/2024/08/Manpower.svg",
  },
];

export default function Partnership() {
  const logos = [...partners, ...partners];

  return (
    <section
      id="partnerships"
      className="overflow-hidden bg-[#080d1f] px-6 py-20 text-white sm:px-8 md:py-24 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
         <SectionTitle>Our Industry Partnerships</SectionTitle>

        <div className="partner-marquee mt-10" aria-label="Industry partner logos">
          <div className="partner-track">
            {logos.map((partner, index) => (
              <div className="partner-logo" key={`${partner.name}-${index}`}>
                <img src={partner.logo} alt={partner.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}