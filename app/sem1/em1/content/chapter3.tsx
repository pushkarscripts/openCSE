export const Ch3Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module III: Ordinary Differential Equations</span>.
        This unit introduces essential first and second order ODE techniques used in engineering.
        Each method includes formulas and short examples for quick revision.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* First Order Exact */}
      <section>
        <h3 className="section-heading">First Order Exact Equations</h3>

        <ul className="section-list">
          <li>
            General form:  
            <code className="inline-code">{`M(x,y) dx + N(x,y) dy = 0`}</code>.
          </li>

          <li>
            Exact if  
            <code className="inline-code">{`∂M/∂y = ∂N/∂x`}</code>.
          </li>

          <li>
            Solution obtained from the potential function  
            <code className="inline-code">{`φ(x,y) = C`}</code>.
          </li>

          <li>
            <strong>Example:</strong>  
            <code className="inline-code">{`(2x + y) dx + (x + 2y) dy = 0`}</code>  
            is exact since both mixed derivatives are 1.
          </li>
        </ul>

        <p className="p-text">Diagram: <strong>exact-ode-flow.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* First Order Linear */}
      <section>
        <h3 className="section-heading">First Order Linear Equations</h3>

        <ul className="section-list">
          <li>
            Standard form:  
            <code className="inline-code">{`dy/dx + P(x) y = Q(x)`}</code>.
          </li>

          <li>
            Integrating factor:  
            <code className="inline-code">{`IF = e^(∫P(x) dx)`}</code>.
          </li>

          <li>
            Solution:  
            <code className="inline-code">{`y IF = ∫Q(x) IF dx + C`}</code>.
          </li>

          <li>
            <strong>Example:</strong>  
            <code className="inline-code">{`dy/dx + y = e^x`} → IF = e^x</code>.
          </li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Bernoulli */}
      <section>
        <h3 className="section-heading">Bernoulli Equations</h3>

        <ul className="section-list">
          <li>
            Form:  
            <code className="inline-code">{`dy/dx + P(x) y = Q(x) y^n`}</code>.
          </li>

          <li>
            Converted to linear using  
            <code className="inline-code">{`v = y^(1-n)`}</code>.
          </li>

          <li>
            <strong>Example:</strong>  
            <code className="inline-code">{`dy/dx + y = y^2`} → v = y⁻¹</code>.
          </li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Second Order Constant Coefficients */}
      <section>
        <h3 className="section-heading">Second Order Linear Equations with Constant Coefficients</h3>

        <ul className="section-list">
          <li>
            Standard form:  
            <code className="inline-code">{`a y'' + b y' + c y = 0`}</code>.
          </li>

          <li>
            Characteristic equation:  
            <code className="inline-code">{`a m^2 + b m + c = 0`}</code>.
          </li>

          <li>Solution based on roots:</li>

          <li>
            Real and distinct:  
            <code className="inline-code">{`y = C1 e^(m1 x) + C2 e^(m2 x)`}</code>.
          </li>

          <li>
            Real and equal:  
            <code className="inline-code">{`y = (C1 + C2 x) e^(mx)`}</code>.
          </li>

          <li>
            Complex:  
            <code className="inline-code">{`y = e^(αx)(C1 cos βx + C2 sin βx)`}</code>.
          </li>

          <li>
            <strong>Example:</strong>  
            <code className="inline-code">{`y'' - 3y' + 2y = 0`} → roots 1 and 2</code>.
          </li>
        </ul>

        <p className="p-text">Diagram: <strong>characteristic-roots.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Variation of parameters */}
      <section>
        <h3 className="section-heading">Method of Variation of Parameters</h3>

        <ul className="section-list">
          <li>
            Used for non homogeneous equations  
            <code className="inline-code">{`y'' + P y' + Q y = R`}</code>.
          </li>

          <li>
            Requires complementary function (CF) from the homogeneous part.
          </li>

          <li>
            Particular integral (PI) obtained by varying constants in CF.
          </li>

          <li>
            <strong>Example:</strong>  
            <code className="inline-code">{`y'' + y = sin x`}</code>.
          </li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Euler (Cauchy) Equation */}
      <section>
        <h3 className="section-heading">Euler (Cauchy) Equations</h3>

        <ul className="section-list">
          <li>
            Form:  
            <code className="inline-code">{`x^2 y'' + a x y' + b y = 0`}</code>.
          </li>

          <li>
            Substitution  
            <code className="inline-code">{`x = e^t`}</code>  
            converts it to constant coefficient form.
          </li>

          <li>
            <strong>Example:</strong>  
            <code className="inline-code">{`x^2 y'' - 3x y' + 3y = 0`}</code>.
          </li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Systems of ODE */}
      <section>
        <h3 className="section-heading">Systems of Differential Equations</h3>

        <ul className="section-list">
          <li>Linear systems can be solved by elimination or matrix methods.</li>

          <li>
            <strong>Example:</strong>  
            <code className="inline-code">{`dx/dt = x + y , dy/dt = x - y`}</code>.
          </li>
        </ul>

      </section>

    </div>
  );
};
