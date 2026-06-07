export const Ch1Content = () => (
  <div className="course-content">
    <p className="p-text">
      Entrepreneurship is the backbone of economic growth and innovation.
      This unit covers the core concepts, characteristics, and types of
      entrepreneurship, including the growing role of women entrepreneurs in India.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch1-concept">Concept of Entrepreneurship</h3>
      <p className="p-text">
        Entrepreneurship is the process of designing, launching, and running a new
        business, typically starting as a small business and scaling it into
        something larger. It involves taking on financial risks in the hope of profit.
      </p>
      <div className="p-3 my-3 rounded border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
        <p className="font-semibold">Key Definition</p>
        <p className="text-sm mt-1">
          An <span className="font-semibold">Entrepreneur</span> is a person who
          organises and manages a business undertaking, assuming the risk for the
          sake of profit. — <em>J.B. Say</em>
        </p>
      </div>
      <p className="p-text">
        Entrepreneurship combines innovation, risk-taking, and management to create
        value. It is not just about starting a business — it is about identifying
        opportunities and mobilising resources to exploit them effectively.
      </p>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch1-characteristics">Characteristics of an Entrepreneur</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { title: "Risk-Taking", desc: "Willingness to take calculated financial and personal risks." },
          { title: "Innovation", desc: "Ability to introduce new ideas, products, or methods." },
          { title: "Vision", desc: "Clear long-term goals and the ability to foresee opportunities." },
          { title: "Leadership", desc: "Skill to inspire and lead a team toward a common goal." },
          { title: "Decision Making", desc: "Capacity to make quick, effective decisions under pressure." },
          { title: "Persistence", desc: "Determination to continue despite failures and setbacks." },
          { title: "Adaptability", desc: "Flexibility to adjust plans according to changing conditions." },
          { title: "Self-Confidence", desc: "Belief in one's own abilities and judgement." },
        ].map((item) => (
          <div
            key={item.title}
            className="p-3 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]"
          >
            <p className="font-bold text-sm">{item.title}</p>
            <p className="text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch1-types">Types of Entrepreneur</h3>
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
              { type: "Innovative", desc: "Introduces new products or methods.", ex: "Elon Musk, Steve Jobs" },
              { type: "Imitative", desc: "Copies successful existing ideas in new markets.", ex: "Local franchise owners" },
              { type: "Fabian", desc: "Very cautious, adopts change only when necessary.", ex: "Traditional family businesses" },
              { type: "Drone", desc: "Refuses to change even at the cost of losses.", ex: "Businesses stuck in old methods" },
              { type: "Social", desc: "Creates ventures to solve social problems.", ex: "NGOs, social enterprises" },
              { type: "Serial", desc: "Starts multiple businesses one after another.", ex: "Richard Branson" },
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
      <h3 className="section-heading" id="ch1-functions">Functions of Entrepreneur</h3>
      <ul className="section-list mt-3">
        <li><span className="font-semibold">Idea Generation:</span> Identifying viable business opportunities from the environment.</li>
        <li><span className="font-semibold">Resource Mobilisation:</span> Arranging capital, labour, and raw materials.</li>
        <li><span className="font-semibold">Risk Bearing:</span> Accepting uncertainty and financial risk of the venture.</li>
        <li><span className="font-semibold">Organisation Building:</span> Setting up business structure, teams, and processes.</li>
        <li><span className="font-semibold">Innovation:</span> Continuously improving products, services, and processes.</li>
        <li><span className="font-semibold">Decision Making:</span> Making key strategic and operational decisions.</li>
        <li><span className="font-semibold">Marketing:</span> Promoting and selling the product or service to customers.</li>
      </ul>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch1-women">Women Entrepreneurship in India</h3>
      <p className="p-text">
        Women entrepreneurship refers to businesses owned, managed, and controlled
        by women. In India, this sector has grown significantly with government
        initiatives and changing social attitudes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]">
          <h4 className="font-bold text-base mb-2">Challenges Faced</h4>
          <ul className="section-list text-sm">
            <li>Limited access to finance and credit</li>
            <li>Societal and family pressure</li>
            <li>Lack of business education and training</li>
            <li>Work-life balance difficulties</li>
            <li>Limited networking opportunities</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f3e7c2] text-[#3a2a14]">
          <h4 className="font-bold text-base mb-2">Government Support Schemes</h4>
          <ul className="section-list text-sm">
            <li>Mahila Udyam Nidhi Scheme</li>
            <li>MUDRA Yojana (Women category)</li>
            <li>Stree Shakti Package by SBI</li>
            <li>Annapurna Scheme</li>
            <li>Stand-Up India Scheme</li>
          </ul>
        </div>
      </div>
      <div className="p-3 my-4 rounded border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
        <p className="font-semibold">Notable Indian Women Entrepreneurs</p>
        <p className="text-sm mt-1">
          Kiran Mazumdar-Shaw (Biocon), Falguni Nayar (Nykaa),
          Indra Nooyi (PepsiCo), Vandana Luthra (VLCC)
        </p>
      </div>
    </section>
  </div>
);
