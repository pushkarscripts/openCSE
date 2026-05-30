export const Ch1Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        This chapter introduces the fundamental vector calculus operators used throughout
        electromagnetism: gradient, divergence, curl, and the integral theorems of Gauss and Stokes.
        These concepts form the mathematical backbone of Maxwell’s equations.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Gradient, Divergence, Curl */}
      <section>
        <h3 className="section-heading">Gradient, Divergence and Curl</h3>

        <p className="p-text">Lecture 1, 2 and 3</p>

        <ul className="section-list">
          <li>
            <strong>Gradient</strong>: Measures the rate and direction of maximum change of a scalar field.
            If <code className="inline-code">φ(x, y, z)</code> is a scalar field,  
            <code className="inline-code">{`∇φ`}</code> gives its directional variation.
          </li>

          <li>
            <strong>Divergence</strong>: Indicates the “outflow” from a point in a vector field.
            For vector field <code className="inline-code">{`𝐀`}</code>,
            <code className="inline-code">{`∇·𝐀`}</code> shows whether the point acts as a source or sink.
          </li>

          <li>
            <strong>Curl</strong>: Represents the rotation or swirling strength of a vector field.
            Curl of <code className="inline-code">{`𝐀`}</code> is 
            <code className="inline-code">{`∇×𝐀`}</code>.
          </li>

          <li>
            **Physical significance** (important for exams):
            <ul className="section-list pl-6 pt-1">
              <li>Gradient → direction of steepest change (heat flow, potential changes).</li>
              <li>Divergence → net flux outward (electric charge distribution, fluid outflow).</li>
              <li>Curl → rotational field strength (magnetic field around conductors).</li>
            </ul>
          </li>
        </ul>

        <img src="/sem1/ep/vector-operators.svg" alt="Vector operators diagram" className="w-full my-4" />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Gauss & Stokes */}
      <section>
        <h3 className="section-heading">Gauss’ Theorem & Stokes’ Theorem</h3>

        <p className="p-text">Lecture 4 and 5</p>

        <ul className="section-list">
          <li>
            <strong>Gauss’ Divergence Theorem</strong>:  
            Converts a surface integral into a volume integral:  
            <code className="inline-code">{`∭ (∇·𝐀) dV = ∬ 𝐀·n̂ dS`}</code>.
            Useful in electrostatics for deriving Gauss’ law.
          </li>

          <li>
            <strong>Applications</strong>:
            <ul className="section-list pl-6 pt-1">
              <li>Flux calculation for symmetric charge distributions.</li>
              <li>Simplifying electric field evaluation using closed surfaces.</li>
            </ul>
          </li>

          <li>
            <strong>Stokes’ Theorem</strong>:  
            Relates a line integral to a surface integral of the curl:  
            <code className="inline-code">{`∮ 𝐀·dl = ∬ (∇×𝐀)·n̂ dS`}</code>.
          </li>

          <li>
            <strong>Applications</strong>:
            <ul className="section-list pl-6 pt-1">
              <li>Used in magnetostatics: circulation of magnetic field.</li>
              <li>Provides basis for integral Maxwell–Faraday law.</li>
            </ul>
          </li>
        </ul>

        <img src="/sem1/ep/gauss-theorem.svg" alt="Gauss divergence theorem diagram" className="w-full my-4" />
        <img src="/sem1/ep/stokes-theorem.svg" alt="Stokes theorem diagram" className="w-full my-4" />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        This chapter establishes the vector calculus tools required to understand electrostatics,
        magnetostatics, and electromagnetic waves in later modules. For a rapid revision, ask:
        <strong>“Make Ch1 cheat sheet”</strong>.
      </p>
    </div>
  );
};
