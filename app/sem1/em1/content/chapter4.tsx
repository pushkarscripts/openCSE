export const Ch4Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module IV: Laplace Transforms</span>.
        This unit introduces the Laplace transform, inverse transform, properties and its use in
        solving ordinary differential equations. Short examples are included for quick learning.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Definition */}
      <section>
        <h3 className="section-heading">Definition of Laplace Transform</h3>

        <ul className="section-list">
          <li>
            Laplace transform of f(t):  
            <code className="inline-code">
              {`F(s) = ∫₀^∞ e^(-st) f(t) dt`}
            </code>.
          </li>

          <li>
            Exists if f(t) is of exponential order.
          </li>

          <li>
            <strong>Example:</strong>  
            <code className="inline-code">{`L{1} = 1/s , L{e^(at)} = 1/(s-a)`}</code>.
          </li>
        </ul>

        <p className="p-text">Diagram: <strong>laplace-transform-idea.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Properties */}
      <section>
        <h3 className="section-heading">Properties of Laplace Transform</h3>

        <ul className="section-list">

          <li>
            Linearity:  
            <code className="inline-code">{`L{af + bg} = aF + bG`}</code>.
          </li>

          <li>
            First Shifting:  
            <code className="inline-code">{`L{e^(at) f(t)} = F(s-a)`}</code>.
          </li>

          <li>
            Differentiation in time:  
            <code className="inline-code">{`L{f'(t)} = sF(s) - f(0)`}</code>.
          </li>

          <li>
            Integration in time:  
            <code className="inline-code">{`L{∫ f(t) dt} = F(s)/s`}</code>.
          </li>

          <li>
            <strong>Example:</strong>  
            <code className="inline-code">{`L{t} = 1/s^2`}</code>.
          </li>

        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Inverse Laplace */}
      <section>
        <h3 className="section-heading">Inverse Laplace Transform</h3>

        <ul className="section-list">
          <li>
            Obtained using partial fractions or standard transform pairs.
          </li>

          <li>
            <strong>Example:</strong>  
            <code className="inline-code">
              {`L⁻¹{1/(s^2 + 4)} = (1/2) sin(2t)`}
            </code>.
          </li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* ODE via Laplace */}
      <section>
        <h3 className="section-heading">Solving ODEs Using Laplace Transform</h3>

        <ul className="section-list">

          <li>
            Steps:
            <ul className="section-list pl-6 pt-1">
              <li>Apply Laplace transform on both sides.</li>
              <li>Use initial conditions.</li>
              <li>Solve algebraic equation for F(s).</li>
              <li>Take inverse Laplace transform.</li>
            </ul>
          </li>

          <li>
            <strong>Example:</strong>  
            <code className="inline-code">{`y' + 2y = 4 , y(0)=1`}</code>  
            gives  
            <code className="inline-code">{`Y(s) = (1 + 4/s)/(s+2)`}</code>.
          </li>

        </ul>

        <p className="p-text">Diagram: <strong>laplace-solve-ode.png</strong></p>
      </section>

    </div>
  );
};
