export const Ch3Content = () => (
  <div className="course-content">
    <p className="p-text">
      Great startups begin with great ideas. This unit covers the science and art
      of generating, refining, and incubating ideas — along with proven techniques
      like SCAMPER, Brainstorming, and Prototyping.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch3-concept">Concept of Ideation</h3>
      <p className="p-text">
        <span className="font-semibold">Ideation</span> is the creative process of
        generating, developing, and communicating new ideas. In entrepreneurship,
        it is the first and most critical step in identifying a business opportunity.
      </p>
      <div className="p-3 my-3 rounded border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
        <p className="font-semibold">What makes a good idea?</p>
        <ul className="section-list text-sm mt-1">
          <li>Solves a real problem people face</li>
          <li>Has a target market willing to pay</li>
          <li>Is feasible to execute with available resources</li>
          <li>Is differentiated from existing solutions</li>
        </ul>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch3-process">Process of Ideation</h3>
      <div className="mt-4 space-y-3">
        {[
          { step: "1", title: "Problem Identification", desc: "Observe pain points, inefficiencies, or unmet needs in everyday life." },
          { step: "2", title: "Research & Inspiration", desc: "Study existing solutions, competitors, trends, and user behaviour." },
          { step: "3", title: "Idea Generation", desc: "Use creative techniques to generate a wide range of possible solutions." },
          { step: "4", title: "Idea Screening", desc: "Filter ideas based on feasibility, market potential, and resources." },
          { step: "5", title: "Concept Development", desc: "Develop the best idea into a concrete concept with a value proposition." },
          { step: "6", title: "Validation", desc: "Test the concept with real potential users before building the full product." },
        ].map((item) => (
          <div
            key={item.step}
            className="flex gap-3 p-3 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]"
          >
            <div className="w-8 h-8 shrink-0 rounded-full bg-[#c7a669] text-[#1B0D00] font-bold flex items-center justify-center text-sm">
              {item.step}
            </div>
            <div>
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="text-sm mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch3-incubation">Idea Incubation</h3>
      <p className="p-text">
        <span className="font-semibold">Idea Incubation</span> is the phase where
        an idea is nurtured, refined, and developed into a viable business concept.
        Business incubators provide support infrastructure for early-stage startups.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]">
          <h4 className="font-bold text-base mb-2">What Incubators Provide</h4>
          <ul className="section-list text-sm">
            <li>Office space and infrastructure</li>
            <li>Mentorship and expert guidance</li>
            <li>Access to funding networks</li>
            <li>Legal, financial, and HR support</li>
            <li>Networking with other startups</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f3e7c2] text-[#3a2a14]">
          <h4 className="font-bold text-base mb-2">Famous Indian Incubators</h4>
          <ul className="section-list text-sm">
            <li>NSRCEL — IIM Bangalore</li>
            <li>CIIE.CO — IIM Ahmedabad</li>
            <li>T-Hub — Hyderabad</li>
            <li>Startup India Seed Fund</li>
            <li>SINE — IIT Bombay</li>
          </ul>
        </div>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading" id="ch3-techniques">Ideation Techniques</h3>

      <h4 className="font-bold text-lg mt-4 mb-2 text-[#e2d1c1]">SCAMPER</h4>
      <p className="p-text">
        SCAMPER is a structured creative thinking tool where each letter prompts
        a different way to think about improving or reinventing a product or idea.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        {[
          { letter: "S", word: "Substitute", desc: "Replace a component with something else. (e.g. plastic → biodegradable material)" },
          { letter: "C", word: "Combine", desc: "Merge two ideas or products together. (e.g. phone + camera)" },
          { letter: "A", word: "Adapt", desc: "Adjust the idea to work in a new context. (e.g. Uber model for healthcare)" },
          { letter: "M", word: "Modify / Magnify", desc: "Change the size, shape, or attributes. (e.g. supersizing fast food)" },
          { letter: "P", word: "Put to other use", desc: "Use the product for a different purpose. (e.g. post-it notes → sticky labels)" },
          { letter: "E", word: "Eliminate", desc: "Remove a feature to simplify. (e.g. AirBnB removes hotel staff)" },
          { letter: "R", word: "Reverse / Rearrange", desc: "Flip or reorder the process. (e.g. drive-through restaurants)" },
        ].map((item) => (
          <div key={item.letter} className="flex gap-3 p-3 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]">
            <div className="w-8 h-8 shrink-0 rounded bg-[#c7a669] text-[#1B0D00] font-bold flex items-center justify-center text-base">
              {item.letter}
            </div>
            <div>
              <p className="font-semibold text-sm">{item.word}</p>
              <p className="text-sm mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h4 className="font-bold text-lg mt-6 mb-2 text-[#e2d1c1]">Brainstorming</h4>
      <p className="p-text">
        Brainstorming is a group creativity technique where participants freely
        share ideas without judgement to generate a large number of ideas quickly.
      </p>
      <div className="p-3 my-3 rounded border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
        <p className="font-semibold">Rules of Brainstorming</p>
        <ul className="section-list text-sm mt-1">
          <li>No criticism or judgement during idea generation</li>
          <li>Quantity over quality — more ideas is better</li>
          <li>Wild and unusual ideas are welcome</li>
          <li>Build on others' ideas (piggyback)</li>
        </ul>
      </div>

      <h4 className="font-bold text-lg mt-6 mb-2 text-[#e2d1c1]">Prototyping</h4>
      <p className="p-text">
        A <span className="font-semibold">prototype</span> is an early sample or
        model built to test a concept before full development. It helps validate
        assumptions and gather user feedback cheaply.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
        {[
          { title: "Paper Prototype", desc: "Sketches or paper models for quick concept testing." },
          { title: "Digital Wireframe", desc: "Low-fidelity digital mockup of an app or website." },
          { title: "MVP", desc: "Minimum Viable Product — the simplest working version launched to real users." },
        ].map((item) => (
          <div key={item.title} className="p-3 rounded-lg border border-[#c7a669] bg-[#f3e7c2] text-[#3a2a14]">
            <p className="font-bold text-sm">{item.title}</p>
            <p className="text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);
