export const Ch0Content = () => {
  return (
    <div className="space-y-6" style={{ fontFamily: 'Rockwell, serif' }}>

      <p className="text-2xl font-normal mb-8">
        Welcome to <span className="font-semibold">Engineering Physics for Computer Science</span>!<br /> This course focuses on the physics that really matters for computing and communication, covering semiconductors, superconductivity, electromagnetism, and networks while skipping unnecessary details.
      </p>

      {/* Module I */}
      <section>
        <h3 className="text-3xl font-bold">Module I: <span className="italic font-semibold">Vector Algebra & Fields</span></h3>
        <ul className="list-disc text-2xl pt-1 pl-8 font-normal">
          <li>Gradient, Divergence, Curl & their significance</li>
          <li>Gauss’ & Stokes’ Theorems with applications</li>
        </ul>
      </section>

      {/* Module II */}
      <section>
        <h3 className="text-3xl font-bold">Module II: <span className="italic font-semibold">Electrostatics & Magnetostatics</span></h3>
        <ul className="list-disc text-2xl pt-1 pl-8 font-normal">
          <li>Coulomb’s Law & Electric Fields</li>
          <li>Electrostatic Potential, Energy of Charges</li>
          <li>Gauss’ Law & Applications</li>
          <li>Magnetic Fields & Laws (Biot–Savart, Ampere, Gauss)</li>
          <li>Equation of Continuity</li>
        </ul>
      </section>

      {/* Module III */}
      <section>
        <h3 className="text-3xl font-bold">Module III: <span className="italic font-semibold">Electrodynamics & Maxwell’s Equations</span></h3>
        <ul className="list-disc text-2xl pt-1 pl-8 font-normal">
          <li>Faraday’s Laws of Electromagnetic Induction</li>
          <li>Displacement Current & Generalized Ampere’s Law</li>
          <li>Maxwell’s Equations (Integral & Differential)</li>
          <li>Electromagnetic Waves in Free Space</li>
        </ul>
      </section>

      {/* Module IV */}
      <section>
        <h3 className="text-3xl font-bold">Module IV: <span className="italic font-semibold">Semiconductors & Superconductivity</span></h3>
        <ul className="list-disc text-2xl pt-1 pl-8 font-normal">
          <li>Semiconductor Basics (PN Junctions, Diodes, Transistors)</li>
          <li>Superconductivity Phenomena & Properties</li>
          <li>Meissner Effect & Critical Parameters</li>
          <li>Applications in Quantum Computing</li>
        </ul>
      </section>

      {/* Module V */}
      <section>
        <h3 className="text-3xl font-bold">Module V: <span className="italic font-semibold">LASERs & Optical Fiber</span></h3>
        <ul className="list-disc text-2xl pt-1 pl-8 font-normal">
          <li>LASER Basics, Electronic Transitions</li>
          <li>Population Inversion & Properties</li>
          <li>Ruby & He-Ne LASER Systems</li>
          <li>Optical Fiber Structure & Propagation</li>
          <li>Fiber Optic Communication Systems</li>
        </ul>
      </section>

      <p className="text-2xl font-normal mb-8">
        By the end of this course, you’ll have a solid grasp of the physics that drives computers, communication systems, and digital technology.
      </p>
      
    </div>
  );
};
