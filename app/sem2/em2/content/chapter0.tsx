export const Ch0Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        Welcome to <span className="font-semibold">Engineering Mathematics II</span>.  
        This course covers sequences and series, numerical analysis, complex variables
        and integral calculus with applications. These concepts form the analytic
        foundation necessary for advanced engineering courses.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module I: <span className="section-subheading">Sequences and Series</span>
        </h3>
        <ul className="section-list">
          <li>Limits of sequences</li>
          <li>Convergence, boundedness and monotonicity</li>
          <li>Infinite series and tests of convergence</li>
          <li>Alternating series</li>
          <li>Power series</li>
          <li>Taylor expansions</li>
          <li>Series for exponential, logarithmic and trigonometric functions</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module II: <span className="section-subheading">Numerical Analysis</span>
        </h3>
        <ul className="section-list">
          <li>Root finding: Bisection, Newton Raphson, Regula Falsi</li>
          <li>Finite differences</li>
          <li>Interpolation: Lagrange, Newton forward, backward and central</li>
          <li>Numerical integration: Trapezoidal and Simpson's 13 rules</li>
          <li>Euler and Runge Kutta methods (first order IVPs)</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module III: <span className="section-subheading">Complex Variables</span>
        </h3>
        <ul className="section-list">
          <li>Limits, continuity and analyticity</li>
          <li>Cauchy Riemann equations</li>
          <li>Line integrals and Cauchy's theorem</li>
          <li>Cauchy's integral formula</li>
          <li>Taylor and Laurent series</li>
          <li>Zeros and singularities</li>
          <li>Residue theorem and real integral evaluation</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module IV: <span className="section-subheading">Integral Calculus</span>
        </h3>
        <ul className="section-list">
          <li>Fundamental theorem and mean value theorems</li>
          <li>Reduction formulae for definite integrals</li>
          <li>Improper integrals and convergence tests</li>
          <li>Beta and Gamma functions</li>
          <li>Differentiation under the integral sign (Leibnitz rule)</li>
          <li>Double and triple integrals</li>
          <li>Area, volume computation and Jacobians</li>
        </ul>
      </section>

    </div>
  );
};
