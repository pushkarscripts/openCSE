export const Ch2Content = () => (
  <div className="course-content">
    <p className="p-text">
      A startup is more than just a new business — it is a scalable venture built
      to grow rapidly. This unit explores what startups are, how they are classified,
      and the ecosystem that supports their growth.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch2-concept">Concept of Startup</h3>
      <p className="p-text">
        A <span className="font-semibold">startup</span> is a young company founded
        to develop a unique product or service, bring it to market, and scale it
        rapidly. Unlike traditional businesses, startups aim for disruptive growth.
      </p>
      <div className="p-3 my-3 rounded border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
        <p className="font-semibold">India's Definition (DPIIT)</p>
        <p className="text-sm mt-1">
          An entity is a startup if it is incorporated for less than 10 years,
          has an annual turnover not exceeding ₹100 crore, and works towards
          innovation, development or improvement of products, processes, or services.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        {[
          { title: "Innovation", desc: "Solves a problem in a new way." },
          { title: "Scalability", desc: "Designed to grow rapidly with limited resources." },
          { title: "Risk", desc: "High uncertainty; many startups fail in early stages." },
        ].map((item) => (
          <div
            key={item.title}
            className="p-3 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14] text-center"
          >
            <p className="font-bold">{item.title}</p>
            <p className="text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch2-types">Types of Startups</h3>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#c7a669] text-[#1B0D00]">
              <th className="px-4 py-2 border border-[#b8925d]">Type</th>
              <th className="px-4 py-2 border border-[#b8925d]">Description</th>
              <th className="px-4 py-2 border border-[#b8925d]">Example</th>
            </tr>
          </thead>
          <tbody>
            {[
              { type: "Small Business", desc: "Self-sustaining, local focus, not aiming for rapid scaling.", ex: "Local restaurant, shop" },
              { type: "Scalable", desc: "Designed to grow into large companies with external funding.", ex: "Google, Uber at inception" },
              { type: "Social", desc: "Focuses on solving social problems rather than maximising profit.", ex: "Khan Academy" },
              { type: "Buyable", desc: "Built to be acquired by a larger company.", ex: "Instagram (acquired by Facebook)" },
              { type: "Lifestyle", desc: "Built around founder's passion and lifestyle goals.", ex: "Travel blog, Etsy store" },
              { type: "Large Company", desc: "Innovates within an existing large corporation.", ex: "Google X, Amazon Lab126" },
            ].map((row, i) => (
              <tr
                key={row.type}
                className={i % 2 === 0 ? "bg-[#f0ddb6] text-[#3a2a14]" : "bg-[#f3e7c2] text-[#3a2a14]"}
              >
                <td className="px-4 py-2 border border-[#c7a669] font-semibold">{row.type}</td>
                <td className="px-4 py-2 border border-[#c7a669]">{row.desc}</td>
                <td className="px-4 py-2 border border-[#c7a669]">{row.ex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch2-ecosystem">Startup Ecosystems</h3>
      <p className="p-text">
        A <span className="font-semibold">startup ecosystem</span> is a community
        of startups, investors, mentors, institutions, and government bodies that
        interact to support the creation and growth of new ventures.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {[
          {
            title: "Key Players",
            items: ["Founders & Co-founders", "Angel Investors", "Venture Capitalists", "Incubators & Accelerators", "Mentors & Advisors", "Government Bodies"],
            bg: "bg-[#f0ddb6]",
          },
          {
            title: "Support Infrastructure",
            items: ["Co-working Spaces", "Research Institutions", "Universities", "Legal & Financial Services", "Media & PR", "Tech Communities"],
            bg: "bg-[#f3e7c2]",
          },
        ].map((col) => (
          <div key={col.title} className={`p-4 rounded-lg border border-[#c7a669] ${col.bg} text-[#3a2a14]`}>
            <h4 className="font-bold text-base mb-2">{col.title}</h4>
            <ul className="section-list text-sm">
              {col.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="p-3 my-4 rounded border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
        <p className="font-semibold">Top Indian Startup Hubs</p>
        <p className="text-sm mt-1">
          Bengaluru, Mumbai, Delhi NCR, Hyderabad, Pune — collectively called
          India's startup corridors. India is the world's 3rd largest startup ecosystem.
        </p>
      </div>
    </section>
  </div>
);
