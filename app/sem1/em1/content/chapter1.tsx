export const Ch1Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module I: Differential Calculus</span>.
        This unit covers fundamental theorems, series expansions, curve behaviour and curvature
        analysis for functions of a single variable. Concepts are essential for both theory and
        problem solving in engineering mathematics.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Rolle’s and Mean Value Theorem */}
      <section>
        <h3 className="section-heading">Rolle's Theorem and Mean Value Theorems</h3>

        <ul className="section-list">
          <li>Applicable to functions continuous on [a, b] and differentiable on (a, b).</li>

          <li>
            <strong>Rolle's Theorem</strong>  
            If f(a) = f(b), then there exists c in (a, b) such that  
            <code className="inline-code">{`f'(c) = 0`}</code>.
          </li>

          <li>
            <strong>Cauchy's Mean Value Theorem</strong>  
            For functions f and g:  
            <code className="inline-code">{`(f'(c))/ (g'(c)) = (f(b)-f(a))/(g(b)-g(a))`}</code>.
          </li>

          <li>
            <strong>Lagrange's Mean Value Theorem</strong> (special case):  
            <code className="inline-code">{`f'(c) = (f(b)-f(a))/(b-a)`}</code>.
          </li>
        </ul>

        <p className="p-text">Diagram: <strong>mvt-graph.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Taylor and Maclaurin */}
      <section>
        <h3 className="section-heading">Taylor and Maclaurin Theorems</h3>

        <ul className="section-list">

          <li>
            <strong>Taylor Series</strong> for f(x) about a:  
            <code className="inline-code">
              {`f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)^2/2! + ... + Rn`}
            </code>
          </li>

          <li>
            <strong>Maclaurin Series</strong> is Taylor expansion at a = 0.
          </li>

          <li>
            Remainder term ensures accuracy:  
            <code className="inline-code">{`Rn = f^(n+1)(ξ)(x-a)^(n+1)/(n+1)!`}</code>.
          </li>

          <li>Used for approximations in engineering computations.</li>

        </ul>

        <p className="p-text">Diagram: <strong>taylor-expansion.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Indeterminate forms */}
      <section>
        <h3 className="section-heading">Indeterminate Forms</h3>

        <ul className="section-list">
          <li>Forms: 0/0, ∞/∞, 0 × ∞, ∞ − ∞, 1^∞, 0^0 and ∞^0.</li>

          <li>
            Usually resolved using L Hospital rule:  
            <code className="inline-code">{`lim f/g = lim f'/g'`}</code>  
            when both numerator and denominator approach 0 or ∞.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Concavity, inflexion */}
      <section>
        <h3 className="section-heading">Concavity, Convexity and Points of Inflexion</h3>

        <ul className="section-list">
          <li>If f''(x) &rt; 0 the curve is convex. If f''(x) &lt; 0 the curve is concave.</li>
          <li>
            Point of inflexion occurs where f''(x) = 0 and concavity changes.
          </li>
          <li>Used to classify graph behaviour and optimization.</li>
        </ul>

        <p className="p-text">Diagram: <strong>concavity-inflexion.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Asymptotes and Curvature */}
      <section>
        <h3 className="section-heading">Asymptotes and Curvature</h3>

        <ul className="section-list">
          <li>
            Asymptotes are straight lines approached by the curve at large values of x.
          </li>

          <li>
            Curvature k:  
            <code className="inline-code">
              {`k = |f''(x)| / [1 + (f'(x))^2]^(3/2)`}
            </code>
          </li>

          <li>
            Radius of curvature R:  
            <code className="inline-code">{`R = 1/k`}</code>.
          </li>
        </ul>

        <p className="p-text">Diagram: <strong>curvature-graph.png</strong></p>
      </section>

    </div>
  );
};
