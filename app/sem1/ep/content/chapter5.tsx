export const Ch5Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Unit V: LASER and Fibre Optics</span>.
        This unit presents the fundamental principles of LASER operation, electronic transitions,
        population inversion, LASER systems and common LASER types. It also covers optical fibres,
        their classification, propagation mechanism and the basis of fibre optic communication.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Electronic Transitions + Basic Principle */}
      <section>
        <h3 className="section-heading">Electronic Transitions and Basic Principle of LASER</h3>

        <ul className="section-list">
          <li>
            LASER stands for Light Amplification by Stimulated Emission of Radiation.
          </li>

          <li>
            Electronic transitions occur when electrons move between discrete energy levels,
            absorbing or releasing photons of specific energy.
          </li>

          <li>
            Stimulated emission is the key mechanism that produces coherent and monochromatic
            radiation.
          </li>

          <li>
            A LASER system requires an active medium, external energy source and an optical
            resonator.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>laser-transition.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Population Inversion */}
      <section>
        <h3 className="section-heading">Population Inversion and Properties of LASER</h3>

        <ul className="section-list">
          <li>
            Population inversion occurs when the number of atoms in an excited state exceeds the
            number in the ground state. This condition is required for sustained stimulated emission.
          </li>

          <li>
            <strong>Properties of LASER light</strong> include high coherence, monochromaticity,
            low divergence and high intensity.
          </li>

          <li>
            Achieved through continuous pumping and optical feedback.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>population-inversion.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Components + Lasing Action */}
      <section>
        <h3 className="section-heading">Components of LASER System and Lasing Action</h3>

        <ul className="section-list">
          <li><strong>Active medium</strong> provides atoms or molecules for stimulated emission.</li>
          <li><strong>Pumping source</strong> supplies external energy (optical, electrical or chemical).</li>
          <li><strong>Optical resonator</strong> consists of mirrors that provide amplification by feedback.</li>
          <li>
            <strong>Lasing action</strong> occurs when stimulated emission dominates over losses,
            producing a stable coherent beam.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>lasing-action.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Ruby LASER */}
      <section>
        <h3 className="section-heading">Ruby LASER</h3>

        <ul className="section-list">
          <li>Solid state LASER using chromium doped ruby (Al₂O₃:Cr³⁺) as the active medium.</li>
          <li>Three level LASER pumped by flash lamps.</li>
          <li>Produces a red beam of wavelength 694.3 nm.</li>
          <li>Used in holography, alignment, surgery and ranging.</li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>ruby-laser.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* He-Ne LASER */}
      <section>
        <h3 className="section-heading">He Ne Gas LASER</h3>

        <ul className="section-list">
          <li>Uses a mixture of helium and neon gases in a discharge tube.</li>
          <li>Helium atoms transfer energy to neon atoms producing population inversion.</li>
          <li>Produces a stable output at 632.8 nm.</li>
          <li>Used in laboratory demonstrations, optical alignment and barcode scanners.</li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>he-ne-laser.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Fibre Optics Structure */}
      <section>
        <h3 className="section-heading">Structure of Optical Fibre and Principle of Propagation</h3>

        <ul className="section-list">
          <li>
            Optical fibre consists of a <strong>core</strong>, <strong>cladding</strong> and
            protective coating.
          </li>

          <li>
            Light propagates through the core by total internal reflection at the core cladding
            interface.
          </li>

          <li>
            Requires core refractive index to be greater than cladding refractive index.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>fiber-structure.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Classification + NA */}
      <section>
        <h3 className="section-heading">Classification of Optical Fibres and Numerical Aperture</h3>

        <ul className="section-list">
          <li><strong>Step index fibres</strong> and <strong>graded index fibres</strong>.</li>
          <li>
            <strong>Single mode</strong> and <strong>multimode</strong> fibres depending on
            core diameter and propagation.
          </li>
          <li>
            <strong>Numerical aperture</strong>  
            <code className="inline-code">{`NA = √(n₁² - n₂²)`}</code>  
            determines light gathering capability.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>fiber-classification.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Fibre Optic Communication */}
      <section>
        <h3 className="section-heading">Fibre Optic Communication Link</h3>

        <ul className="section-list">
          <li>Consists of transmitter, optical fibre channel and receiver.</li>
          <li>Provides high bandwidth, immunity to electromagnetic interference and low loss.</li>
          <li>Disadvantages include alignment difficulty, connector loss and high installation cost.</li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>fiber-communication.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        This unit explains the physics behind LASER systems and the operation of optical fibres
        used in modern communication networks. If you want a quick revision page, ask for the
        Unit V cheat sheet.
      </p>

    </div>
  );
};
