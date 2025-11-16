export const Ch4Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Unit IV: Superconductivity</span>.
        This unit covers the essential physics of superconductors, key properties,
        the Meissner effect, critical parameters and the classification and applications
        of superconducting materials used in modern technology.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Phenomenon */}
      <section>
        <h3 className="section-heading">Phenomenon of Superconductivity</h3>

        <ul className="section-list">
          <li>
            Superconductivity is the state of certain materials in which electrical resistance
            drops to zero when cooled below a characteristic transition temperature Tc.
          </li>

          <li>
            Perfect conductivity results in persistent currents that can flow indefinitely
            without power loss.
          </li>

          <li>
            Transition to superconducting state is a phase change involving electron pairing
            (Cooper pairs).
          </li>

          <li>
            Occurs in metals, alloys and certain ceramics depending on material structure.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>superconductivity-transition.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Properties */}
      <section>
        <h3 className="section-heading">Properties of Superconductors</h3>

        <ul className="section-list">
          <li><strong>Zero electrical resistance</strong> below Tc.</li>

          <li>
            <strong>Perfect diamagnetism</strong> indicating expulsion of magnetic flux
            from the interior.
          </li>

          <li>
            <strong>Persistent currents</strong> in closed loops with extremely long lifetimes.
          </li>

          <li>
            <strong>Energy gap</strong> in electronic density of states due to Cooper pairing.
          </li>

          <li>
            <strong>Isotopic effect</strong> showing dependence of Tc on atomic mass.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>superconductor-properties.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Meissner effect */}
      <section>
        <h3 className="section-heading">Meissner Effect and Critical Parameters</h3>

        <ul className="section-list">
          <li>
            <strong>Meissner effect</strong> is the complete expulsion of magnetic flux from a
            superconductor below Tc, demonstrating perfect diamagnetism.
          </li>

          <li>
            <strong>Critical magnetic field Hc</strong> is the maximum field below which
            superconductivity can exist. Above Hc the material returns to the normal state.
          </li>

          <li>
            <strong>Temperature dependence</strong>:  
            <code className="inline-code">{`Hc(T) = Hc(0) [1 - (T/Tc)^2]`}</code>.
          </li>

          <li>
            <strong>Critical current density Jc</strong> is the highest current per unit area the
            material can carry in superconducting state.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>meissner-effect.png</strong>, <strong>critical-field.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Types */}
      <section>
        <h3 className="section-heading">Types of Superconductors</h3>

        <ul className="section-list">
          <li>
            <strong>Type I Superconductors</strong>  
            <ul className="section-list pl-6 pt-1">
              <li>Show perfect Meissner effect.</li>
              <li>Single critical field Hc.</li>
              <li>Found mainly in pure metals like Pb, Hg, Al.</li>
            </ul>
          </li>

          <li>
            <strong>Type II Superconductors</strong>  
            <ul className="section-list pl-6 pt-1">
              <li>Characterized by two critical fields Hc1 and Hc2.</li>
              <li>Allow partial flux penetration in mixed state.</li>
              <li>Found in alloys and high Tc superconductors.</li>
            </ul>
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>type1-type2.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Applications */}
      <section>
        <h3 className="section-heading">Applications of Superconductors</h3>

        <ul className="section-list">
          <li>Magnetic levitation and high speed maglev trains.</li>
          <li>Superconducting magnets for MRI and NMR systems.</li>
          <li>Josephson junctions and SQUIDs for precision measurement.</li>
          <li>Cryogenic power cables and lossless energy transmission.</li>
          <li>Quantum computing components based on superconducting qubits.</li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>superconductor-applications.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        This unit provides the essential concepts behind superconducting materials and their
        technological importance. If you need a one page revision sheet, ask for the Unit IV
        cheat sheet.
      </p>
    </div>
  );
};
