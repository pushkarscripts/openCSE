export const Ch3Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Unit III: Introduction to Electrodynamics</span>.
        This unit explains the behaviour of time varying electromagnetic fields, Faraday's law,
        displacement current, the generalized Ampere law and the complete set of Maxwell's equations.
        It concludes with electromagnetic wave formation and propagation in free space.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Time-Varying Fields */}
      <section>
        <h3 className="section-heading">Time Varying Fields</h3>

        <ul className="section-list">
          <li>
            A field that changes with time produces coupling between electric and magnetic fields.
          </li>

          <li>
            A time varying magnetic field produces an induced electric field and a time varying
            electric field produces a magnetic field.
          </li>

          <li>
            These interactions form the basis of electromagnetic wave propagation.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>time-varying-field.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Faraday’s Laws */}
      <section>
        <h3 className="section-heading">Faraday's Laws of Electromagnetic Induction</h3>

        <ul className="section-list">

          <li>
            <strong>Integral form</strong>:  
            <code className="inline-code">
              {`∮ E · dl = - dΦ_B/dt`}
            </code>  
            The induced EMF equals the negative rate of change of magnetic flux.
          </li>

          <li>
            <strong>Differential form</strong>:  
            <code className="inline-code">
              {`∇ × E = - ∂B/∂t`}
            </code>  
            Changing magnetic field induces a non conservative electric field.
          </li>

          <li>
            Physical significance: induction without physical contact, rotational electric fields,
            basis of transformers and electric generators.
          </li>

        </ul>

        <p className="p-text">Diagram to paste: <strong>faraday-law.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Displacement Current */}
      <section>
        <h3 className="section-heading">Displacement Current Density</h3>

        <ul className="section-list">
          <li>
            Proposed by Maxwell to maintain continuity in Ampere's law for time varying fields.
          </li>
          <li>
            Defined as  
            <code className="inline-code">{`J_d = ε0 ∂E/∂t`}</code>.
          </li>
          <li>
            Arises in regions where no conduction current exists such as the gap of a capacitor.
          </li>
          <li>
            Essential for forming a consistent framework for electromagnetic waves.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>displacement-current.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Generalized Ampere’s Law */}
      <section>
        <h3 className="section-heading">Generalized Ampere Law</h3>

        <ul className="section-list">
          <li>
            Classical Ampere law applies only to steady currents. Maxwell added displacement current.
          </li>

          <li>
            <strong>Integral form</strong>:  
            <code className="inline-code">
              {`∮ B · dl = μ0 (I + ε0 dΦ_E/dt)`}
            </code>.
          </li>

          <li>
            <strong>Differential form</strong>:  
            <code className="inline-code">
              {`∇ × B = μ0 J + μ0 ε0 ∂E/∂t`}
            </code>.
          </li>

          <li>
            Shows that time varying electric fields generate magnetic fields.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>generalized-ampere.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Maxwell’s Equations */}
      <section>
        <h3 className="section-heading">Maxwell's Equations</h3>

        <ul className="section-list">

          <li>
            <strong>Gauss Law for Electricity</strong>:  
            <code className="inline-code">{`∇·E = ρ/ε0`}</code>.
          </li>

          <li>
            <strong>Gauss Law for Magnetism</strong>:  
            <code className="inline-code">{`∇·B = 0`}</code>.
          </li>

          <li>
            <strong>Faraday's Law</strong>:  
            <code className="inline-code">{`∇ × E = - ∂B/∂t`}</code>.
          </li>

          <li>
            <strong>Ampere Maxwell Law</strong>:  
            <code className="inline-code">{`∇ × B = μ0 J + μ0 ε0 ∂E/∂t`}</code>.
          </li>

          <li>
            Integral forms represent flux and circulation relationships. Differential forms express
            point-wise local field behaviour.
          </li>

        </ul>

        <p className="p-text">Diagram to paste: <strong>maxwell-set.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* EM Waves */}
      <section>
        <h3 className="section-heading">Electromagnetic Waves in Free Space</h3>

        <ul className="section-list">
          <li>
            Combining Maxwell equations results in the electromagnetic wave equation.
          </li>

          <li>
            Wave equation for electric field:  
            <code className="inline-code">{`∇²E = μ0 ε0 ∂²E/∂t²`}</code>.
          </li>

          <li>
            Wave equation for magnetic field:  
            <code className="inline-code">{`∇²B = μ0 ε0 ∂²B/∂t²`}</code>.
          </li>

          <li>
            Plane waves propagate with speed  
            <code className="inline-code">{`c = 1/√(μ0 ε0)`}</code>.
          </li>

          <li>
            Electric field and magnetic field are mutually perpendicular and also perpendicular to
            the direction of propagation.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>em-plane-wave.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        This unit builds the complete foundation for understanding electromagnetic wave behaviour,
        antennas and communication theory. If you want a short revision sheet, ask for the Unit III
        cheat sheet.
      </p>

    </div>
  );
};
