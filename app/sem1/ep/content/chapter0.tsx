export const Ch0Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        Welcome to <span className="font-semibold">Engineering Physics for Computer Science</span>.
        This course focuses on the essential physics behind computing, communication systems,
        semiconductor devices, electromagnetic theory, and modern photonic technologies — all
        explained with applications relevant to Computer Science and Engineering.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module I */}
      <section>
        <h3 className="section-heading">
          Module I: <span className="section-subheading">Vector Algebra & Fields</span>
        </h3>
        <ul className="section-list">
          <li>Gradient, divergence and curl — definitions and physical significance</li>
          <li>Gauss’ Divergence Theorem with applications</li>
          <li>Stokes’ Theorem and applications to field circulation</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module II */}
      <section>
        <h3 className="section-heading">
          Module II: <span className="section-subheading">Electrostatics & Magnetostatics</span>
        </h3>
        <ul className="section-list">
          <li>Coulomb’s law and electric field due to charge distributions</li>
          <li>Electrostatic potential and potential energy of charge systems</li>
          <li>Gauss’ law in electrostatics and its applications</li>
          <li>Magnetic fields due to currents (Biot–Savart, Ampère’s law, Gauss’ law for magnetism)</li>
          <li>Equation of continuity and conservation of charge</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module III */}
      <section>
        <h3 className="section-heading">
          Module III: <span className="section-subheading">Electrodynamics & Maxwell’s Equations</span>
        </h3>
        <ul className="section-list">
          <li>Faraday’s laws of electromagnetic induction</li>
          <li>Displacement current and generalized Ampère-Maxwell law</li>
          <li>Maxwell’s equations — differential and integral forms</li>
          <li>Electromagnetic wave equation and EM wave propagation in free space</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module IV */}
      <section>
        <h3 className="section-heading">
          Module IV: <span className="section-subheading">Semiconductors & Superconductivity</span>
        </h3>
        <ul className="section-list">
          <li>Basics of semiconductors: bands, carriers, conductivity</li>
          <li>PN junctions, diodes, transistor action (qualitative)</li>
          <li>Superconductivity — phenomena, properties, types</li>
          <li>Meissner effect and critical parameters</li>
          <li>Applications in quantum computing and cryoelectronics</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module V */}
      <section>
        <h3 className="section-heading">
          Module V: <span className="section-subheading">LASERs & Optical Fibers</span>
        </h3>
        <ul className="section-list">
          <li>LASER fundamentals and electronic transitions</li>
          <li>Population inversion and properties of LASER light</li>
          <li>Ruby LASER and He–Ne LASER — basic working principles</li>
          <li>Optical fiber structure, modes and propagation mechanism</li>
          <li>Fiber-optic communication systems and applications</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        By the end of this course, you will understand the physics that enables computers,
        semiconductor devices, communication networks, optical systems, and advanced
        technologies like quantum computing.
      </p>

    </div>
  );
};
