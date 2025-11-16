export const Ch2Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Unit II: Electrostatics and Magnetostatics</span>.
        This chapter summarises the essential physical laws that describe electric and magnetic
        fields, electric potential, flux, and the governing integral and differential relations
        used throughout electromagnetic theory.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Electrostatics */}
      <section>
        <h3 className="section-heading">Electrostatics: Electric Field and Charge Interaction</h3>

        <ul className="section-list">
          <li>
            <strong>Coulomb&apos;s Law</strong> gives force between two point charges.  
            <code className="inline-code">{`F = (1/(4πε0)) * q1*q2 / r^2 * r̂`}</code>.
          </li>

          <li>
            <strong>Principle of Superposition</strong> states that the net electric field is the
            vector sum of fields produced by all charges.
          </li>

          <li>
            <strong>Electric Field</strong> at a point is the force per unit positive test charge:
            <code className="inline-code">{`E = F/q`}</code>.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>electric-field.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Potential */}
      <section>
        <h3 className="section-heading">Electrostatic Potential and Potential Energy</h3>

        <ul className="section-list">
          <li>
            <strong>Electrostatic Potential V</strong> is the work done per unit charge in bringing
            a test charge from infinity to a point in the field.
          </li>

          <li>
            <strong>Relation between potential and field</strong>:  
            <code className="inline-code">{`E = -∇V`}</code>.
          </li>

          <li>
            <strong>Potential Energy</strong> of a charge system equals the work needed to assemble
            charges from infinity.
          </li>

          <li>
            <strong>Potential Gradient</strong> gives the spatial rate of change of potential and
            points in the direction of maximum decrease of potential.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>potential-surface.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Flux + Gauss Law */}
      <section>
        <h3 className="section-heading">Electric Flux, Displacement Vector and Gauss&apos; Law</h3>

        <ul className="section-list">
          <li>
            <strong>Electric Flux</strong>:  
            <code className="inline-code">{`Φ = ∬ E·dS`}</code>.  
            Represents the number of field lines passing through a surface.
          </li>

          <li>
            <strong>Electric Displacement Vector D</strong> relates to free charge in materials
            and helps simplify field calculations in dielectrics.
          </li>

          <li>
            <strong>Gauss&apos; Law in integral form</strong>:  
            <code className="inline-code">{`∮ E·dS = Q_enclosed / ε0`}</code>.
          </li>

          <li>
            <strong>Gauss&apos; Law in differential form</strong>:  
            <code className="inline-code">{`∇·E = ρ / ε0`}</code>.
          </li>

          <li>
            <strong>Derivation of Coulomb&apos;s Law from Gauss&apos; Law</strong> uses spherical symmetry
            around a point charge to obtain the inverse square relationship.
          </li>
        </ul>

        <p className="p-text">Diagrams to paste: <strong>gauss-law.png</strong>, <strong>flux-surface.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Magnetostatics */}
      <section>
        <h3 className="section-heading">Magnetostatics: Magnetic Field and Force</h3>

        <ul className="section-list">
          <li>
            <strong>Magnetic Field B</strong> describes the magnetic influence at a point in space.
          </li>

          <li>
            <strong>Magnetic Flux</strong>:  
            <code className="inline-code">{`Φ_B = ∬ B·dS`}</code>.
          </li>

          <li>
            <strong>Magnetic Flux Density</strong> is another name for B, measured in Tesla.
          </li>

          <li>
            <strong>Lorentz Force</strong> on a moving charge:  
            <code className="inline-code">{`F = q(E + v × B)`}</code>.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>lorentz-force.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Biot Savart */}
      <section>
        <h3 className="section-heading">Biot Savart Law</h3>

        <ul className="section-list">
          <li>
            Gives magnetic field produced by a steady current element.  
            Common applications include long straight conductors and circular current loops.
          </li>
          <li>
            Basis for deriving magnetic fields in symmetric current distributions.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>biot-savart.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Ampere */}
      <section>
        <h3 className="section-heading">Ampere&apos;s Circuital Law</h3>

        <ul className="section-list">
          <li>
            Integral form:  
            <code className="inline-code">{`∮ B·dl = μ0 I_enclosed`}</code>.
          </li>

          <li>
            Used for finding B in systems with high symmetry such as solenoids, toroids and
            long straight conductors.
          </li>

          <li>
            Complements Biot Savart Law in steady current situations.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>ampere-law.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Gauss for magnetism */}
      <section>
        <h3 className="section-heading">Gauss&apos; Law for Magnetism</h3>

        <ul className="section-list">
          <li>
            States that the net magnetic flux through any closed surface is zero:
            <code className="inline-code">{`∮ B·dS = 0`}</code>.
          </li>

          <li>
            Differential form: <code className="inline-code">{`∇·B = 0`}</code>.
          </li>

          <li>
            Implies that magnetic monopoles do not exist.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Continuity Equation */}
      <section>
        <h3 className="section-heading">Equation of Continuity</h3>

        <ul className="section-list">
          <li>
            Expresses conservation of charge:  
            <code className="inline-code">{`∂ρ/∂t + ∇·J = 0`}</code>.
          </li>

          <li>
            Links time variation of charge density with divergence of current density.
          </li>
        </ul>

        <p className="p-text">Diagram to paste: <strong>continuity-equation.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        This unit forms the foundation for studying electromagnetic waves and Maxwell&apos;s equations.
        If you want a compact revision sheet, ask for the Unit II cheat sheet.
      </p>
    </div>
  );
};
