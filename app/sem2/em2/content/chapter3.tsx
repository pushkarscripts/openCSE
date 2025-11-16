export const Ch3Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module III: Complex Variables</span>.
        This chapter introduces analytic functions, Cauchy Riemann equations,
        complex line integrals, Cauchy's theorems, series representations and
        the residue theorem. These ideas form the foundation of complex analysis
        and are widely used in signal processing, electrical engineering and
        mathematical modelling.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* COMPLEX FUNCTIONS */}
      <section>
        <h3 className="section-heading">1. Complex Functions</h3>

        <p className="p-text">
          A complex function maps complex numbers to complex numbers:
          <code className="inline-code">{`f(z) = u(x, y) + i v(x, y)`}</code>,
          where z = x + i y.
          Here u and v are real-valued functions of two variables.
        </p>

        <ul className="section-list">
          <li>
            <strong>Limit and continuity:</strong> defined analogously to real
            functions, but must be independent of the path of approach.
          </li>

          <li>
            <strong>Differentiability:</strong> f is differentiable at z₀ if  
            <code className="inline-code">
              {`lim (Δz→0) [f(z₀ + Δz) - f(z₀)] / Δz`}
            </code>  
            exists and has the same value for all directions Δz.
          </li>

          <li>
            <strong>Analytic function:</strong> differentiable in a neighborhood.
            Also called holomorphic.
          </li>

          <li>
            <strong>Entire function:</strong> analytic everywhere (examples:  
            <code>e^z</code>, <code>sin z</code>, <code>cos z</code>).
          </li>
        </ul>

        <p className="p-text mt-3">Diagram: <strong>complex-plane-mapping.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />


      {/* CAUCHY RIEMANN EQUATIONS */}
      <section>
        <h3 className="section-heading">2. Cauchy Riemann (CR) Equations</h3>

        <p className="p-text">
          CR equations are necessary conditions for differentiability.
          For <code>f(z) = u(x, y) + i v(x, y)</code>:
        </p>

        <div className="example-box p-3 bg-[#f0ddb6] border-[#c7a669] rounded-lg">
          <code className="inline-code">{`u_x = v_y`}</code>  
          and  
          <code className="inline-code">{`u_y = -v_x`}</code>
        </div>

        <p className="p-text mt-3">
          If u and v have continuous partial derivatives and satisfy CR equations
          in a neighborhood, then f is analytic there.
        </p>

        <div className="example-box bg-[#f0ddb6] p-4 rounded-lg border border-[#c7a669] mt-2">
          <div className="font-semibold text-[#3a2a14]">Example</div>
          <p>
            Let f(z) = z² = (x² − y²) + i(2xy).  
            u = x² − y², v = 2xy.  
            Then u_x = 2x, v_y = 2x, and u_y = -2y, v_x = 2y.
          </p>
          <p>CR equations satisfied hence f(z) is analytic everywhere.</p>
        </div>

        <p className="p-text mt-3">Diagram: <strong>cr-equations-visual.png</strong></p>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />


      {/* LINE INTEGRALS */}
      <section>
        <h3 className="section-heading">3. Line Integrals in the Complex Plane</h3>

        <p className="p-text">
          A line integral of f(z) along a curve C is defined as:
        </p>

        <div className="example-box bg-[#f0ddb6] border-[#c7a669] p-3 rounded-lg">
          <code className="inline-code">{`∫_C f(z) dz = ∫ (u dx - v dy) + i ∫ (v dx + u dy)`}</code>
        </div>

        <ul className="section-list mt-3">
          <li>Computed by parametrizing the curve z(t).</li>
          <li>Value depends on the path unless f is analytic everywhere inside C.</li>
        </ul>

        <p className="p-text mt-3">Diagram: <strong>complex-path-integral.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />


      {/* CAUCHY THEOREM */}
      <section>
        <h3 className="section-heading">4. Cauchy's Integral Theorem</h3>

        <p className="p-text">
          A landmark result:  
          If f is analytic and C is a closed curve in a simply connected region,
          then the line integral is zero.
        </p>

        <div className="example-box p-3 bg-[#f0ddb6] rounded-lg border border-[#c7a669]">
          <code className="inline-code">{`∮_C f(z) dz = 0`}</code>
        </div>

        <ul className="section-list mt-3">
          <li>Independence of path.</li>
          <li>Exists a primitive F such that F'(z) = f(z).</li>
        </ul>

        <div className="example-box bg-[#f3e7c2] p-4 rounded-lg border border-[#c7a669] mt-2">
          <div className="font-semibold">Example</div>
          <p>
            ∮ z³ dz around |z| = 1 is 0 since z³ is analytic everywhere.
          </p>
        </div>

        <p className="p-text mt-3">Diagram: <strong>cauchy-theorem.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />


      {/* CAUCHY INTEGRAL FORMULA */}
      <section>
        <h3 className="section-heading">5. Cauchy's Integral Formula</h3>

        <p className="p-text">
          Provides the value of an analytic function inside a curve using boundary values:
        </p>

        <div className="example-box p-3 bg-[#f0ddb6] rounded-lg border border-[#c7a669]">
          <code className="inline-code">
            {`f(a) = 1/(2πi) ∮ (f(z)/(z-a)) dz`}
          </code>
        </div>

        <ul className="section-list mt-3">
          <li>
            Higher derivatives:
            <code className="inline-code">
              {`f^(n)(a) = n!/(2πi) ∮ f(z)/(z-a)^(n+1) dz`}
            </code>
          </li>
        </ul>

        <p className="p-text mt-3">Diagram: <strong>cif-geometry.png</strong></p>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />


      {/* TAYLOR/LAURENT */}
      <section>
        <h3 className="section-heading">6. Taylor and Laurent Series</h3>

        <p className="p-text">
          Analytic functions behave like power series.  
          Taylor series is valid inside a disk where the function is analytic.
        </p>

        <ul className="section-list">
          <li>
            <strong>Taylor series:</strong>  
            <code className="inline-code">{`f(z) = Σ f^(n)(a)/n! * (z-a)^n`}</code>
          </li>
          <li>
            <strong>Laurent series:</strong> includes negative powers; valid in annular regions.
          </li>
        </ul>

        <div className="example-box bg-[#f0ddb6] p-4 rounded-lg border border-[#c7a669] mt-2">
          <div className="font-semibold">Example</div>
          <p>
            For f(z) = 1/(z (z-1)), a Laurent expansion around z = 0 gives:  
            <code className="inline-code">{`f(z) = -1/z + 1/(z-1)`}</code>.
          </p>
        </div>

        <p className="p-text mt-3">Diagram: <strong>taylor-laurent-region.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />


      {/* SINGULARITIES & ZEROS */}
      <section>
        <h3 className="section-heading">7. Zeros, Singularities and Residues</h3>

        <p className="p-text">
          A point z = a is a <strong>zero</strong> of f if f(a) = 0.  
          A point where f fails to be analytic is a <strong>singularity</strong>.
        </p>

        <ul className="section-list">
          <li><strong>Removable singularity</strong>: function can be redefined to become analytic.</li>
          <li><strong>Pole</strong>: behaves like (z - a)^(-n).</li>
          <li><strong>Essential singularity</strong>: extremely unstable behavior (Casorati theorem).</li>
        </ul>

        <h4 className="text-xl font-semibold mt-4">Residue</h4>

        <p className="p-text">
          Residue is the coefficient of 1/(z - a) in the Laurent series of f.
        </p>

        <div className="example-box bg-[#f3e7c2] border-[#c7a669] p-4 rounded-lg mt-2">
          <div className="font-semibold">Example</div>
          <p>
            Residue of f(z) = 1/(z² + 1) at z = i is  
            <code className="inline-code">{`1/(2i)`}</code>.
          </p>
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />


      {/* RESIDUE THEOREM */}
      <section>
        <h3 className="section-heading">8. Residue Theorem</h3>

        <p className="p-text">
          One of the most powerful tools in complex analysis:
        </p>

        <div className="example-box bg-[#f0ddb6] border-[#c7a669] p-3 rounded-lg">
          <code className="inline-code">
            {`∮ f(z) dz = 2πi * Σ residues inside the contour`}
          </code>
        </div>

        <p className="p-text mt-3">
          Used extensively to evaluate real integrals that are difficult using real-variable calculus.
        </p>

        <div className="example-box bg-[#f3e7c2] border-[#c7a669] p-4 rounded-lg mt-2">
          <div className="font-semibold">Example</div>
          <p>
            Evaluate  
            <code className="inline-code">{`∮ dz/(z² + 1)`}</code>  
            around a contour containing z = i and z = -i.  
            Total residue = 1/(2i) + (-1/(2i)) = 0.  
            Integral = 0.
          </p>
        </div>

        <p className="p-text mt-3">Diagram: <strong>residue-theorem-contour.png</strong></p>

      </section>

    </div>
  );
};
