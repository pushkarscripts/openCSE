export const Ch4Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Unit IV: Semiconductors &amp; Superconductivity</span>.
        This unit covers semiconductor band theory, charge carriers, PN junctions, diode and
        transistor action, followed by the essential physics of superconductors, key properties,
        the Meissner effect, critical parameters and the classification and applications
        of superconducting materials used in modern technology.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* ── SEMICONDUCTOR SECTIONS ── */}

      {/* Basics of Semiconductors */}
      <section>
        <h3 className="section-heading">Basics of Semiconductors: Bands and Carriers</h3>

        <ul className="section-list">
          <li>
            Semiconductors have a narrow <strong>forbidden energy gap</strong> (≈ 1 eV) between
            the valence band and conduction band, unlike insulators (wide gap) or metals (overlapping bands).
          </li>

          <li>
            At absolute zero, the valence band is full and the conduction band is empty; thermal
            excitation promotes electrons across the gap at room temperature.
          </li>

          <li>
            <strong>Intrinsic semiconductors</strong> (e.g. Si, Ge) have equal electron and hole
            concentrations; <strong>extrinsic semiconductors</strong> are doped with donor (n-type)
            or acceptor (p-type) impurities to control carrier density.
          </li>

          <li>
            <strong>Conductivity</strong> σ = n e μ<sub>e</sub> + p e μ<sub>h</sub>, where n and p
            are electron and hole densities, and μ are their respective mobilities.
          </li>
        </ul>

        
        <img src="/sem1/ep/sc-bands.jpg" alt="Semiconductor band diagram" className="w-full my-4" />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* PN Junctions & Diodes */}
      <section>
        <h3 className="section-heading">PN Junctions and Diodes</h3>

        <ul className="section-list">
          <li>
            A <strong>PN junction</strong> is formed when p-type and n-type semiconductors are
            brought together; diffusion of carriers creates a depletion region with a built-in
            electric field opposing further diffusion.
          </li>

          <li>
            <strong>Forward bias</strong> reduces the potential barrier, allowing significant
            current flow; <strong>reverse bias</strong> widens the depletion region, allowing
            only a tiny leakage current.
          </li>

          <li>
            The ideal diode equation is{" "}
            <code className="inline-code">{`I = I₀ [exp(eV/kT) - 1]`}</code>, where I₀ is the
            reverse saturation current.
          </li>

          <li>
            Diodes are used as rectifiers, signal clippers, voltage references (Zener diodes)
            and light emitters (LEDs).
          </li>
        </ul>

        
        <img src="/sem1/ep/pn-junction.png" alt="PN junction and diode diagram" className="w-full my-4" />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Transistor Action */}
      <section>
        <h3 className="section-heading">Transistor Action (Qualitative)</h3>

        <ul className="section-list">
          <li>
            A <strong>bipolar junction transistor (BJT)</strong> consists of two back-to-back PN
            junctions (NPN or PNP) with three regions: emitter, base and collector.
          </li>

          <li>
            The thin, lightly doped base allows most injected minority carriers to diffuse through
            and be swept into the collector, producing current amplification.
          </li>

          <li>
            <strong>Current gain</strong> β = I<sub>C</sub> / I<sub>B</sub>; a small base
            current controls a much larger collector current, enabling amplification and switching.
          </li>

          <li>
            <strong>FETs</strong> (Field Effect Transistors) control current via an electric field
            at the gate; MOSFETs are the fundamental switching element in all modern integrated
            circuits.
          </li>
        </ul>

        
        <img src="/sem1/ep/transistor.png" alt="Transistor action diagram" className="w-full my-4" />
      </section>

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

        <img src="/sem1/ep/superc.png" alt="Superconductivity diagram" className="w-full my-4" />
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

        <img src="/sem1/ep/super-properties.png" alt="Superconductivity properties diagram" className="w-full my-4" />
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

        <img src="/sem1/ep/s-m-dia.png" alt="Meissner Effect  & Critical Parametersdiagram" className="w-full my-4" />
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

        <img src="/sem1/ep/type.png" alt="Type I and Type II Superconductors diagram" className="w-full my-4" />
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

        <img src="/sem1/ep/app.png" alt="Applications of Superconductors diagram" className="w-full my-4" />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        This unit covers semiconductor physics and superconducting materials together with their
        technological importance. If you need a one page revision sheet, ask for the Unit IV
        cheat sheet.
      </p>
    </div>
  );
};