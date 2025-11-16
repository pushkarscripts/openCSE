export const Ch4Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module IV: Integral Calculus</span>.  
        This chapter covers definite and improper integrals, convergence tests,
        reduction formulae, Beta and Gamma functions, differentiation under the
        integral sign, and multiple integrals with Jacobians and applications.
        These tools are extremely important in engineering mathematics and appear
        frequently in university examinations.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* FUNDAMENTAL THEOREM */}
      <section>
        <h3 className="section-heading">1. Fundamental Theorem of Integral Calculus</h3>

        <p className="p-text">
          The Fundamental Theorem establishes the connection between derivatives
          and definite integrals:
        </p>

        <ul className="section-list">
          <li>
            If F(x) is an antiderivative of f(x), then  
            <code className="inline-code">{`∫ₐᵇ f(x) dx = F(b) - F(a)`}</code>.
          </li>

          <li>
            If F(x) = <code className="inline-code">{`∫ₐˣ f(t) dt`}</code>, then  
            <code className="inline-code">{`dF/dx = f(x)`}</code>.
          </li>

          <li>
            The theorem allows evaluation of definite integrals using primitive functions.
          </li>
        </ul>

        <p className="p-text mt-3">
          Diagram: <strong>fundamental-theorem-integral.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* MEAN VALUE THEOREMS */}
      <section>
        <h3 className="section-heading">2. Mean Value Theorems for Integrals</h3>

        <p className="p-text">
          If f is continuous on [a, b], then there exists c in (a, b) such that:
        </p>

        <div className="example-box bg-[#f0ddb6] p-3 rounded-lg border border-[#c7a669]">
          <code className="inline-code">
            {`∫ₐᵇ f(x) dx = f(c) (b - a)`}
          </code>
        </div>

        <p className="p-text">
          This states the area under the curve equals the area of a rectangle of width (b - a)
          and height f(c).
        </p>

        <p className="p-text mt-3">
          Diagram: <strong>integral-mean-value.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* IMPROPER INTEGRALS */}
      <section>
        <h3 className="section-heading">3. Improper Integrals and Convergence Tests</h3>

        <p className="p-text">
          An improper integral involves infinite limits or infinite discontinuities.
        </p>

        <ul className="section-list">
          <li>
            <strong>Type I:</strong> Infinite limits  
            <code className="inline-code">{`∫ₐ^∞ f(x) dx = lim (b→∞) ∫ₐᵇ f(x) dx`}</code>.
          </li>
          <li>
            <strong>Type II:</strong> Discontinuity at a point.  
            <code className="inline-code">{`∫ₐᶜ f(x) dx = lim (t→c) ∫ₐᵗ f(x) dx`}</code>.
          </li>
        </ul>

        <h4 className="text-xl font-semibold mt-4">Tests of Convergence</h4>
        <ul className="section-list">
          <li><strong>Comparison Test:</strong> compare with known integrable functions.</li>
          <li><strong>Limit Comparison Test:</strong> use limits to compare growth rates.</li>
          <li><strong>p-integral:</strong> <code>{`∫₁^∞ 1/x^p dx`}</code> converges if p greater than 1.</li>
        </ul>

        <p className="p-text mt-3">Diagram: <strong>improper-integral-types.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* REDUCTION FORMULAE */}
      <section>
        <h3 className="section-heading">4. Reduction Formulae</h3>

        <p className="p-text">
          Reduction formulae express integrals of higher powers in terms of lower powers.
          They greatly simplify repeated integration in exams.
        </p>

        <ul className="section-list">
          <li>
            <strong>{`∫ (sin^n x) dx`}</strong> reduces to  
            <code className="inline-code">{`(n-1)/n ∫ (sin^(n-2) x) dx`}</code>
          </li>

          <li>
            <strong>{`∫ (cos^n x) dx`}</strong> follows the same pattern.
          </li>

          <li>
            <strong>{`I_n = ∫ (x^n e^x dx)`}</strong> reduces using integration by parts:
            <br />
            <code className="inline-code">{`I_n = x^n e^x - n I_(n-1)`}</code>
          </li>
        </ul>

        <p className="p-text mt-3">Diagram: <strong>reduction-formula.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* BETA & GAMMA */}
      <section>
        <h3 className="section-heading">5. Beta and Gamma Functions</h3>

        <p className="p-text">
          Beta and Gamma functions appear widely in definite integrals, probability
          distributions and Fourier analysis.
        </p>

        <h4 className="text-xl font-semibold mt-4">Gamma Function</h4>
        <ul className="section-list">
          <li>
            <code className="inline-code">{`Γ(n) = ∫₀^∞ x^(n-1) e^(-x) dx`}</code>
          </li>
          <li>Γ(n+1) = n Γ(n)</li>
          <li>Γ(1) = 1, Γ(1/2) = √π</li>
        </ul>

        <h4 className="text-xl font-semibold mt-4">Beta Function</h4>
        <ul className="section-list">
          <li>
            <code className="inline-code">{`B(m, n) = ∫₀¹ x^(m-1) (1-x)^(n-1) dx`}</code>
          </li>
          <li>
            Relation with Gamma:
            <code className="inline-code">{`B(m, n) = Γ(m) Γ(n) / Γ(m + n)`}</code>
          </li>
        </ul>

        <p className="p-text mt-3">Diagram: <strong>beta-gamma-plot.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* DIFFERENTIATION UNDER INTEGRAL SIGN */}
      <section>
        <h3 className="section-heading">6. Differentiation Under the Integral Sign</h3>

        <p className="p-text">
          Also known as <strong>Leibniz Rule</strong>. Helpful in solving integrals
          that are otherwise difficult.
        </p>

        <div className="example-box bg-[#f0ddb6] border-[#c7a669] p-3 rounded-lg">
          <code className="inline-code">
            {`d/dα ∫ₐᵇ f(x, α) dx = ∫ₐᵇ ∂f/∂α dx`}
          </code>
        </div>

        <p className="p-text mt-3">
          Example and diagram are easily asked in exams.
        </p>

        <p className="p-text mt-3">Diagram: <strong>leibniz-rule-visual.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* MULTIPLE INTEGRALS */}
      <section>
        <h3 className="section-heading">7. Double and Triple Integrals</h3>

        <p className="p-text">
          These represent area, volume and mass distributions. Their evaluation often
          involves change of variables and Jacobians.
        </p>

        <h4 className="text-xl font-semibold mt-4">Double Integrals</h4>
        <p className="p-text">
          <code className="inline-code">{`∬_R f(x, y) dA`}</code>  
          evaluated as iterated integrals.
        </p>

        <h4 className="text-xl font-semibold mt-4">Triple Integrals</h4>
        <p className="p-text">
          Used for computing volumes and mass distributions:  
          <code className="inline-code">{`∭_V f(x, y, z) dV`}</code>.
        </p>

        <p className="p-text mt-3">Diagram: <strong>double-integral-region.png</strong></p>

        <h4 className="text-xl font-semibold mt-4">Jacobian for Change of Variables</h4>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] p-4 rounded-lg">
          <code className="inline-code">
            {`∬ f(x, y) dx dy = ∬ f(x(u, v), y(u, v)) |J| du dv`}
          </code>
        </div>

        <p className="p-text">
          |J| is the absolute value of the Jacobian determinant.
        </p>

        <p className="p-text mt-3">Diagram: <strong>jacobian-transformation.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

    </div>
  );
};
