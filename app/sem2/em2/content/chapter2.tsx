export const Ch2Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module II: Numerical Analysis</span>.
        This module introduces numerical techniques for solving equations,
        interpolation, integration and differential equations. These methods
        approximate exact mathematical results when analytical solutions are
        difficult or impossible to obtain. Numerical methods form the core of
        scientific computing and simulation.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />


      {/* ROOT FINDING */}
      <section>
        <h3 className="section-heading">1. Solution of Equations (Root Finding)</h3>

        <p className="p-text">
          Many engineering problems require solving nonlinear equations of the form  
          <code className="inline-code">f(x) = 0</code>.
          When an exact solution is not available, iterative numerical methods
          provide approximations.
        </p>

        <h4 className="text-xl font-semibold mt-4">1.1 Bisection Method</h4>
        <ul className="section-list">
          <li>Based on the Intermediate Value Theorem.</li>
          <li>If f(a) and f(b) have opposite signs, a root lies in the interval.</li>
          <li>The interval is repeatedly halved to narrow down the root.</li>
        </ul>

        <div className="example-box bg-[#f0ddb6] p-4 rounded-lg border border-[#c7a669] mt-2">
          <div className="font-semibold text-[#3a2a14]">Example</div>
          <p>Find the root of f(x) = x³ - x - 2 in [1, 2] using one iteration.</p>
          <p>Midpoint <code>m = (1 + 2) / 2 = 1.5</code>.</p>
          <p>Since f(1) &lt; 0 and f(1.5) &rt; 0, new interval is [1, 1.5].</p>
        </div>

        <p className="p-text mt-3">Diagram: <strong>bisection-method.png</strong></p>


        <h4 className="text-xl font-semibold mt-6">1.2 Regula Falsi (False Position)</h4>

        <p className="p-text">
          An improved version of bisection that uses a secant line to estimate the root.
        </p>

        <ul className="section-list">
          <li>Iteration formula:  
            <code className="inline-code">
              {`x_new = (a*f(b) - b*f(a)) / (f(b) - f(a))`}
            </code>
          </li>
          <li>Converges faster than bisection for many problems.</li>
        </ul>

        <p className="p-text mt-3">Diagram: <strong>regula-falsi.png</strong></p>


        <h4 className="text-xl font-semibold mt-6">1.3 Newton Raphson Method</h4>

        <p className="p-text">
          Uses tangent lines to converge very quickly to a root when the initial guess is close.
        </p>

        <ul className="section-list">
          <li>Formula:  
            <code className="inline-code">{`x_(n+1) = x_n - f(x_n)/f'(x_n)`}</code>
          </li>
          <li>Quadratic convergence (very fast).</li>
          <li>Requires derivative computation.</li>
        </ul>

        <div className="example-box bg-[#f0ddb6] p-4 rounded-lg border border-[#c7a669] mt-2">
          <div className="font-semibold text-[#3a2a14]">Example</div>
          <p>Find root of f(x) = x² − 2 with x₀ = 1.5.</p>
          <p>
            <code>f(x) = x² - 2</code>,
            <code>f'(x) = 2x</code>.
          </p>
          <p>
            <code>x₁ = 1.5 - (1.5² - 2)/(3) = 1.4167</code>.
          </p>
        </div>

        <p className="p-text mt-3">Diagram: <strong>newton-raphson-geometry.png</strong></p>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />


      {/* FINITE DIFFERENCES */}
      <section>
        <h3 className="section-heading">2. Finite Differences</h3>

        <p className="p-text">
          Finite differences approximate derivatives and form the foundation for
          interpolation formulas.
        </p>

        <ul className="section-list">
          <li>Forward difference:
            <code className="inline-code">{`Δf(x) = f(x+h) - f(x)`}</code>
          </li>
          <li>Backward difference:
            <code className="inline-code">{`∇f(x) = f(x) - f(x-h)`}</code>
          </li>
          <li>Central difference:
            <code className="inline-code">{`δf(x) = f(x+h/2) - f(x-h/2)`}</code>
          </li>
          <li>Difference tables help visualize polynomial data patterns.</li>
        </ul>

        <p className="p-text mt-3">Diagram: <strong>difference-table.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />


      {/* INTERPOLATION */}
      <section>
        <h3 className="section-heading">3. Interpolation</h3>

        <p className="p-text">
          Interpolation constructs a polynomial that passes through given data points,
          allowing estimation at intermediate values.
        </p>

        <h4 className="text-xl font-semibold mt-4">3.1 Lagrange Interpolation</h4>
        <ul className="section-list">
          <li>
            Polynomial of degree (n - 1) for n data points.
          </li>
          <li>
            Formula:
            <code className="inline-code">
              {`P(x) = Σ y_i * Π (x - x_j)/(x_i - x_j)`}
            </code>
          </li>
        </ul>

        <h4 className="text-xl font-semibold mt-4">3.2 Newton Forward Interpolation</h4>
        <ul className="section-list">
          <li>Used when x values are equally spaced.</li>
          <li>Forward difference table required.</li>
        </ul>

        <h4 className="text-xl font-semibold mt-4">3.3 Newton Backward Interpolation</h4>
        <ul className="section-list">
          <li>Used for estimating values near the end of the table.</li>
        </ul>

        <h4 className="text-xl font-semibold mt-4">3.4 Gauss Central Interpolation</h4>
        <ul className="section-list">
          <li>Useful when x = 0 lies near the middle of the data set.</li>
        </ul>

        <p className="p-text mt-3">Diagram: <strong>interpolation-cartoon.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />


      {/* NUMERICAL INTEGRATION */}
      <section>
        <h3 className="section-heading">4. Numerical Integration</h3>

        <p className="p-text">
          When exact integrals cannot be computed, numerical rules approximate
          the area under a curve.
        </p>

        <h4 className="text-xl font-semibold mt-4">4.1 Trapezoidal Rule</h4>
        <ul className="section-list">
          <li>
            Approximates the region under a curve using trapeziums.
          </li>
          <li>
            Formula:
            <code className="inline-code">
              {`I ≈ h/2 * [f(x0) + 2(f(x1)+...+f(x(n-1))) + f(xn)]`}
            </code>
          </li>
        </ul>

        <h4 className="text-xl font-semibold mt-4">4.2 Simpson's One Third Rule</h4>
        <ul className="section-list">
          <li>
            Uses parabolic arcs to approximate the curve.
          </li>
          <li>Number of intervals must be even.</li>
          <li>
            Formula:
            <code className="inline-code">
              {`I ≈ h/3 [f(x0) + 4Σf(odd) + 2Σf(even) + f(xn)]`}
            </code>
          </li>
        </ul>

        <p className="p-text mt-3">Diagram: <strong>simpson-rule-illustration.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />


      {/* NUMERICAL ODE SOLUTION */}
      <section>
        <h3 className="section-heading">5. Numerical Solution of Differential Equations</h3>

        <p className="p-text">
          Initial value problems (IVP) of the form  
          <code className="inline-code">{`dy/dx = f(x, y)`}</code>  
          often require numerical solutions. Two commonly used methods are Euler
          and Runge Kutta.
        </p>

        <h4 className="text-xl font-semibold mt-4">5.1 Euler's Method</h4>
        <ul className="section-list">
          <li>Simplest numerical method.</li>
          <li>
            Formula:
            <code className="inline-code">
              {`y_(n+1) = y_n + h * f(x_n, y_n)`}
            </code>
          </li>
          <li>Accuracy is low but easy to compute.</li>
        </ul>

        <h4 className="text-xl font-semibold mt-4">5.2 Runge Kutta Methods</h4>
        <p className="p-text">
          RK methods provide higher accuracy by evaluating slopes multiple times
          within each interval.
        </p>

        <ul className="section-list">
          <li>
            <strong>RK2:</strong> midpoint method.
          </li>
          <li>
            <strong>RK4:</strong> most widely used, very accurate for small h.
          </li>
        </ul>

        <p className="p-text mt-3">Diagram: <strong>rk4-flowchart.png</strong></p>
      </section>

    </div>
  );
};
