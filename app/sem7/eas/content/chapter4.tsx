export const Ch4Content = () => (
  <div className="course-content">
    <p className="p-text">
      Every startup needs fuel to grow. This unit covers how startups raise money,
      how ownership is structured, what causes most startups to fail, and the
      different funding options available at each stage of growth.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch4-angel">Angel Funding</h3>
      <p className="p-text">
        <span className="font-semibold">Angel investors</span> are wealthy
        individuals who provide capital to startups in their earliest stages in
        exchange for equity ownership or convertible debt.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]">
          <h4 className="font-bold text-base mb-2">Characteristics</h4>
          <ul className="section-list text-sm">
            <li>Invest their own personal funds</li>
            <li>Typical investment: ₹25 lakh – ₹5 crore</li>
            <li>Invest at idea or early revenue stage</li>
            <li>Often provide mentorship along with money</li>
            <li>Take 10–30% equity stake</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f3e7c2] text-[#3a2a14]">
          <h4 className="font-bold text-base mb-2">Notable Indian Angel Networks</h4>
          <ul className="section-list text-sm">
            <li>Indian Angel Network (IAN)</li>
            <li>Mumbai Angels</li>
            <li>Chennai Angels</li>
            <li>Lead Angels</li>
            <li>Angel List India</li>
          </ul>
        </div>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch4-venture">Venture Funding</h3>
      <p className="p-text">
        <span className="font-semibold">Venture Capital (VC)</span> is a form of
        private equity financing provided by firms or funds to startups with high
        growth potential in exchange for equity.
      </p>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#c7a669] text-[#1B0D00]">
              <th className="px-4 py-2 border border-[#b8925d]">Stage</th>
              <th className="px-4 py-2 border border-[#b8925d]">Round</th>
              <th className="px-4 py-2 border border-[#b8925d]">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {[
              { stage: "Pre-Seed", round: "Bootstrapping / Friends", purpose: "Build prototype, validate idea" },
              { stage: "Seed", round: "Angel / Seed VC", purpose: "Product development, initial hiring" },
              { stage: "Series A", round: "Venture Capital", purpose: "Scale product-market fit" },
              { stage: "Series B", round: "Venture Capital", purpose: "Expand market, grow team" },
              { stage: "Series C+", round: "PE / Late-stage VC", purpose: "Dominate market, prepare for IPO" },
              { stage: "IPO", round: "Public Market", purpose: "List on stock exchange" },
            ].map((row, i) => (
              <tr
                key={row.stage}
                className={i % 2 === 0 ? "bg-[#f0ddb6] text-[#3a2a14]" : "bg-[#f3e7c2] text-[#3a2a14]"}
              >
                <td className="px-4 py-2 border border-[#c7a669] font-semibold">{row.stage}</td>
                <td className="px-4 py-2 border border-[#c7a669]">{row.round}</td>
                <td className="px-4 py-2 border border-[#c7a669]">{row.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-3 my-4 rounded border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
        <p className="font-semibold">Top Indian VC Firms</p>
        <p className="text-sm mt-1">
          Sequoia Capital India (Peak XV), Accel, Blume Ventures, Nexus Venture
          Partners, Kalaari Capital, Matrix Partners India
        </p>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch4-ownership">Ownership of Startups</h3>
      <p className="p-text">
        Startup ownership is divided into <span className="font-semibold">equity shares</span>.
        As a startup raises more funding, founders dilute their ownership percentage
        but gain capital to grow.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { title: "Founders", desc: "Original creators; hold majority equity in early stages." },
          { title: "Co-founders", desc: "Partners who join at inception; equity split by agreement." },
          { title: "Employees (ESOP)", desc: "Stock options given to employees as incentive." },
          { title: "Investors", desc: "Receive equity proportional to their investment amount." },
          { title: "Advisors", desc: "Receive small equity (0.1–1%) for strategic guidance." },
          { title: "Vesting", desc: "Equity earned over time (e.g. 4-year vest, 1-year cliff)." },
        ].map((item) => (
          <div key={item.title} className="p-3 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]">
            <p className="font-bold text-sm">{item.title}</p>
            <p className="text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch4-failure">Causes of Startup Failure</h3>
      <div className="mt-4 space-y-3">
        {[
          { rank: "1", cause: "No Market Need", desc: "Building a product nobody wants. 42% of startups fail for this reason." },
          { rank: "2", cause: "Running Out of Cash", desc: "Poor financial planning leads to inability to pay salaries and expenses." },
          { rank: "3", cause: "Wrong Team", desc: "Lack of complementary skills or conflict among co-founders." },
          { rank: "4", cause: "Outcompeted", desc: "Larger players copy the idea with more resources." },
          { rank: "5", cause: "Pricing Issues", desc: "Price too high loses customers; too low makes the business unsustainable." },
          { rank: "6", cause: "Poor Marketing", desc: "Great product with no visibility or customer acquisition strategy." },
          { rank: "7", cause: "Scaling Too Fast", desc: "Expanding before achieving product-market fit." },
        ].map((item) => (
          <div
            key={item.rank}
            className="flex gap-3 p-3 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]"
          >
            <div className="w-8 h-8 shrink-0 rounded-full bg-[#c7a669] text-[#1B0D00] font-bold flex items-center justify-center text-sm">
              {item.rank}
            </div>
            <div>
              <p className="font-semibold text-sm">{item.cause}</p>
              <p className="text-sm mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch4-funding">Funding for Startups — All Options</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {[
          {
            title: "Bootstrapping",
            desc: "Using personal savings or revenue to fund the startup. Full control, no dilution.",
            bg: "bg-[#f0ddb6]",
          },
          {
            title: "Friends & Family",
            desc: "Early informal funding from personal network. Low interest, high trust required.",
            bg: "bg-[#f3e7c2]",
          },
          {
            title: "Angel Investment",
            desc: "HNI individuals invest early-stage capital in exchange for equity.",
            bg: "bg-[#f0ddb6]",
          },
          {
            title: "Venture Capital",
            desc: "Institutional funds invest large amounts for significant equity stakes.",
            bg: "bg-[#f3e7c2]",
          },
          {
            title: "Crowdfunding",
            desc: "Raise small amounts from many people via platforms like Kickstarter, Milaap.",
            bg: "bg-[#f0ddb6]",
          },
          {
            title: "Government Grants",
            desc: "Non-dilutive funding via schemes like Startup India, BIRAC, MSME grants.",
            bg: "bg-[#f3e7c2]",
          },
          {
            title: "Bank Loans",
            desc: "Traditional debt financing; requires collateral but no equity dilution.",
            bg: "bg-[#f0ddb6]",
          },
          {
            title: "Incubator / Accelerator",
            desc: "Provide seed funding + mentorship + network in exchange for small equity.",
            bg: "bg-[#f3e7c2]",
          },
        ].map((item) => (
          <div
            key={item.title}
            className={`p-4 rounded-lg border border-[#c7a669] ${item.bg} text-[#3a2a14]`}
          >
            <h4 className="font-bold text-base mb-1">{item.title}</h4>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);
