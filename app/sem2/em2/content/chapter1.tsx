export const Ch1Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module I: Sequences and Series</span>.
        This chapter develops the fundamental concepts of limits, convergence,
        monotonicity, infinite series, convergence tests and standard power series.
        These ideas form the backbone of mathematical analysis and approximation methods.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Sequences */}
      <section>
        <h3 className="section-heading">1. Sequences</h3>

        <p className="p-text">
          A sequence is a function whose domain is the set of natural numbers.
          It is written as {`{a_n}`} or more commonly as a1, a2, a3 and so on.
        </p>

        <ul className="section-list">
          <li>
            <strong>Limit of a sequence:</strong>  
            A sequence {`{a_n}`} has limit L if the terms get arbitrarily close to L
            as n increases. Symbolically:  
            <code className="inline-code">{`lim (n→∞) a_n = L`}</code>.
          </li>

          <li>
            <strong>Convergent sequence:</strong> has a finite limit.
          </li>

          <li>
            <strong>Divergent sequence:</strong> does not approach a fixed number.
          </li>

          <li>
            <strong>Bounded sequence:</strong> if  
            <code>{`m ≤ a_n ≤ M`}</code>.
          </li>

          <li>
            <strong>Monotonic sequences:</strong> always increasing or always decreasing.  
            A monotone and bounded sequence is always convergent.
          </li>
        </ul>

        <div className="example-box bg-[#f0ddb6] p-3 rounded-lg border border-[#c7a669] mt-4">
          <div className="font-semibold text-[#3a2a14]">Example</div>
          <p>
            {`a_n = 1/n`} is positive, decreasing and bounded below by 0.
            Hence it converges to 0.
          </p>
        </div>

        <p className="p-text mt-4">Diagram: <strong>sequence-limit.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Infinite Series */}
      <section>
        <h3 className="section-heading">2. Infinite Series</h3>

        <p className="p-text">
          A series is the sum of the terms of a sequence.  
          <code className="inline-code">{`S = a1 + a2 + a3 + ...`}</code>.  
          Convergence depends on the behavior of partial sums.
        </p>

        <ul className="section-list">
          <li>
            <strong>Partial sum:</strong>  
            <code className="inline-code">{`S_n = a1 + a2 + ... + a_n`}</code>.
          </li>
          <li>
            The series converges if {`S_n`} approaches a finite limit.
          </li>
          <li>
            Necessary condition:  
            <code className="inline-code">{`lim (n→∞) a_n = 0`}</code>.
          </li>
        </ul>

        <h4 className="text-xl font-semibold mt-4">Standard Convergence Tests</h4>
        <ul className="section-list">
          <li>
            <strong>Comparison Test:</strong> compare with known convergent or divergent series.
          </li>
          <li>
            <strong>Ratio Test:</strong>  
            <code className="inline-code">{`L = lim |a_(n+1)/a_n|`}</code>.  
            L less than 1 implies convergence.
          </li>
          <li>
            <strong>Root Test:</strong>  
            <code className="inline-code">{`L = lim (|a_n|)^(1/n)`}</code>.
          </li>
          <li>
            <strong>Alternating Series Test:</strong> decreasing terms with limit 0 converge.
          </li>
        </ul>

        <p className="p-text">Diagram: <strong>series-tests.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Power series */}
      <section>
        <h3 className="section-heading">3. Power Series</h3>

        <p className="p-text">
          A power series is of the form  
          <code className="inline-code">{`Σ a_n (x - c)^n`}</code>.
        </p>

        <ul className="section-list">
          <li>Converges within radius R around x = c.</li>
          <li>Diverges outside R.</li>
          <li>Convergence at boundary points tested separately.</li>
        </ul>

        <h4 className="text-xl font-semibold mt-4">Standard Series Expansions</h4>

        <div className="example-box bg-[#f0ddb6] p-4 rounded-lg border border-[#c7a669]">
          <ul className="section-list text-[#2b1d0f]">
            <li><code>e^x = 1 + x + x^2/2! + ...</code></li>
            <li><code>sin x = x - x^3/6 + ...</code></li>
            <li><code>cos x = 1 - x^2/2! + ...</code></li>
            <li><code>ln(1+x) = x - x^2/2 + ...</code></li>
            <li><code>1/(1-x) = 1 + x + x^2 + ...</code> for |x| less than 1</li>
          </ul>
        </div>

        <p className="p-text mt-4">Diagram: <strong>taylor-series.png</strong></p>
      </section>
    </div>
  );
};
