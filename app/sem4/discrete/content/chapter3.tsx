export function Ch3Content() {
  return (
    <div className="course-content">
      <p className="p-text">
        This chapter covers three core fields of discrete mathematics: <span className="font-semibold">Combinatorics</span> (the science of counting and configurations), <span className="font-semibold">Number Theory</span> (the study of integers, divisibility, and modular equations), and <span className="font-semibold">Recurrence Relations</span> (the mathematical framework used to evaluate recursive functions and algorithmic complexity bounds).
      </p>

      <hr className="my-8 border-[#8b5e47]" />

      {/* SECTION 1: COMBINATORICS & PROBABILITY */}
      <section>
        <h2 className="section-heading">1. Advanced Combinatorics & Basic Probability</h2>
        <p className="p-text">
          Combinatorics provides the structural tools needed to calculate configuration bounds without explicitly enumerating every possible outcome.
        </p>

        <h4 className="text-2xl font-bold mt-4 mb-2">Fundamental Counting Rules</h4>
        <ul className="section-list">
          <li><strong>The Sum Rule:</strong> If a task can be performed in $m$ ways, and a second independent task can be performed in $n$ ways, then performing **either** the first task **or** the second task can be accomplished in $m + n$ ways.</li>
          <li><strong>The Product Rule:</strong> If a procedure can be broken down into two successive stages where stage one has $m$ outcomes and stage two has $n$ outcomes, the complete sequence of tasks can be done in $m \times n$ ways.</li>
        </ul>

        <h4 className="text-2xl font-bold mt-6 mb-2">Basic Probability & Inclusion-Exclusion for Probability</h4>
        <p className="p-text">
          The **Probability** of an event $E$ within a finite, equally likely sample space $S$ is defined as $P(E) = |E| / |S|$. 
          When dealing with compound events that are not mutually exclusive, the **Principle of Inclusion-Exclusion for Probability** ensures shared outcomes are not double-counted:
        </p>
        <div className="bg-[#f3e7c2] text-[#1B0D00] p-4 rounded-lg border border-[#c7a669] font-mono text-center my-3 text-base">
          P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
          <br />
          <span className="text-xs font-sans text-gray-700 block mt-2">
            For three events: P(A ∪ B ∪ C) = P(A) + P(B) + P(C) − P(A ∩ B) − P(A ∩ C) − P(B ∩ C) + P(A ∩ B ∩ C)
          </span>
        </div>

        <h4 className="text-2xl font-bold mt-6 mb-2">The Pigeonhole Principle & Applications</h4>
        <ul className="section-list">
          <li><strong>Basic Principle:</strong> If $k + 1$ or more pigeons are placed into $k$ holes, then at least one hole must contain two or more pigeons.</li>
          <li><strong>Generalized Pigeonhole Principle:</strong> If $N$ objects are placed into $k$ boxes, then at least one box must contain at least $\lceil N / k \rceil$ objects (where $\lceil \dots \rceil$ denotes the ceiling function).</li>
        </ul>
        <div className="bg-[#f3e7c2] text-[#1B0D00] p-5 rounded-lg border border-[#c7a669] mt-3">
          <p className="font-bold text-sm font-sans text-brown-900">Concrete Application Examples & Edge Cases:</p>
          <p className="text-sm mt-1">
            1. **Card Deck Edge Case:** How many cards must be drawn from a standard 52-card deck to guarantee that at least three cards of the same suit are chosen?
            <br />
            <span className="font-mono text-xs block pl-4 mt-1">
              Holes (k) = 4 suits. We want ⌈N / 4⌉ = 3. The worst-case scenario before achieving this is drawing 2 cards of each suit (2 × 4 = 8 cards). The next drawn card (the 9th card) guarantees a triplet. Thus, N = 9.
            </span>
          </p>
          <p className="text-sm mt-2">
            2. **Birthday Match:** In any group of 367 people, at least two individuals must share a birthday, because there are at most 366 possible birthdays (including leap years).
          </p>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* SECTION 2: NUMBER THEORY */}
      <section>
        <h2 className="section-heading">2. Number Theory & Linear Diophantine Equations</h2>
        <p className="p-text">
          Number theory forms the mathematical core of modern cryptography and data hashing systems.
        </p>

        <h4 className="text-2xl font-bold mt-4 mb-2">GCD, LCM, and Their Fundamental Relationship</h4>
        <p className="p-text">
          The Greatest Common Divisor ($\text{gcd}(a, b)$) is the largest positive integer that divides both $a$ and $b$. The Least Common Multiple ($\text{lcm}(a, b)$) is the smallest positive integer that is a multiple of both $a$ and $b$. Their core relationship is defined by the following theorem:
        </p>
        <div className="bg-[#f3e7c2] text-[#1B0D00] p-3 rounded-lg border border-[#c7a669] font-mono text-center my-2 text-base">
          gcd(a, b) × lcm(a, b) = |a × b|
        </div>

        <h4 className="text-2xl font-bold mt-6 mb-2">Bézout's Identity & The Extended Euclidean Algorithm</h4>
        <p className="p-text">
          <strong>Bézout's Identity:</strong> For any non-zero integers $a$ and $b$, there exist integers $x$ and $y$ such that:
          <br />
          <span className="font-mono text-center block my-1 font-bold">ax + by = gcd(a, b)</span>
          The coefficients $x$ and $y$ are computed efficiently using the **Extended Euclidean Algorithm**, which tracks the quotient steps of divisibility in reverse.
        </p>

        <div className="bg-[#f3e7c2] text-[#1B0D00] p-5 rounded-lg border border-[#c7a669] mt-3">
          <p className="font-bold text-sm font-sans text-brown-900">Step-by-Step Example: Compute gcd(252, 198) and express it as ax + by</p>
          <div className="font-mono text-xs space-y-1 mt-2">
            <p className="text-blue-900 font-sans font-bold">Step 1: Forward Euclidean Algorithm (Find GCD)</p>
            <p>252 = 1 × 198 + 54  (Remainder = 54)</p>
            <p>198 = 3 × 54 + 36   (Remainder = 36)</p>
            <p>54  = 1 × 36 + 18   (Remainder = 18)  ← Last non-zero remainder is the GCD</p>
            <p>36  = 2 × 18 + 0    (Remainder = 0)</p>
            <p className="font-sans text-gray-800 mt-1">Thus, gcd(252, 198) = 18.</p>
            
            <p className="text-blue-900 font-sans font-bold mt-3">Step 2: Back-Substitution (Find Bézout Coefficients x and y)</p>
            <p>From the last non-zero equation: 18 = 54 − 1 × 36</p>
            <p>Substitute 36 from the equation above it (36 = 198 − 3 × 54):</p>
            <p>18 = 54 − 1 × (198 − 3 × 54) = 4 × 54 − 1 × 198</p>
            <p>Substitute 54 from the first equation (54 = 252 − 1 × 198):</p>
            <p>18 = 4 × (252 − 1 × 198) − 1 × 198</p>
            <p className="font-bold text-green-800 text-sm">18 = 4 × (252) − 5 × (198)</p>
            <p className="font-sans text-gray-800 mt-1">Therefore, the Bézout coefficients are x = 4 and y = -5.</p>
          </div>
        </div>

        <h4 className="text-2xl font-bold mt-6 mb-2">Linear Diophantine Equations</h4>
        <p className="p-text">
          A **Linear Diophantine Equation** is an equation of the form $ax + by = c$, where $a, b, c$ are given integers, and we solve only for integer values of $x$ and $y$.
        </p>
        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 border border-[#c7a669]">
          <h5 className="font-bold text-sm text-red-800">⚠️ Solvability Existence Theorem & General Solution:</h5>
          <p className="text-sm mt-1">
            The Diophantine equation $ax + by = c$ has an integer solution if and only if **$\text{gcd}(a, b)$ divides $c$** ($gcd(a,b) \mid c$). If this condition is met and an initial particular solution $(x_0, y_0)$ is found, the infinite set of all solutions is given by:
          </p>
          <p className="font-mono text-center text-sm my-2 font-bold">
            x = x_0 + t × (b / d), &nbsp;&nbsp;&nbsp;&nbsp; y = y_0 − t × (a / d)
          </p>
          <p className="text-xs text-gray-700 font-sans">Where $d = \text{gcd}(a, b)$ and $t$ is any arbitrary integer ($t \in \mathbb{Z}$).</p>
        </div>

        <h4 className="text-2xl font-bold mt-6 mb-2">The Chinese Remainder Theorem (CRT)</h4>
        <p className="p-text">
          Let $m_1, m_2, \dots, m_n$ be pairwise coprime positive integers ($\text{gcd}(m_i, m_j) = 1$ for $i \neq j$). Then, the following system of simultaneous modular congruence relations has a unique solution modulo $M = m_1 \times m_2 \times \dots \times m_n$:
        </p>
        <div className="font-mono text-sm text-center my-2">
          x ≡ a_1 (mod m_1), &nbsp;&nbsp; x ≡ a_2 (mod m_2), &nbsp;&nbsp; \dots, &nbsp;&nbsp; x ≡ a_n (mod m_n)
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* SECTION 3: RECURRENCE RELATIONS */}
      <section>
        <h2 className="section-heading">3. Recurrence Relations & Resolution Methods</h2>
        <p className="p-text">
          A <span className="font-semibold">Recurrence Relation</span> defines a mathematical sequence where individual terms $a_n$ are expressed as a function of one or more of their preceding terms.
        </p>

        <h4 className="text-2xl font-bold mt-4 mb-2">Structural Classifications</h4>
        <ul className="section-list">
          <li><strong>Linear Homogeneous:</strong> Terms depend linearly on past elements with no trailing isolated constants or functions of $n$. Example: $a_n = c_1a_{n-1} + c_2a_{n-2}$.</li>
          <li><strong>Linear Non-Homogeneous:</strong> Contains an added trailing function component $F(n)$ not tied to sequence terms. Example: $a_n = c_1a_{n-1} + F(n)$.</li>
        </ul>

        {/* METHOD 1 */}
        <h4 className="text-2xl font-bold mt-6 mb-2">Method I: Repeated Substitution (Iterative Method)</h4>
        <p className="p-text">
          This strategy involves repeatedly expanding the recursive term until a clear algebraic pattern emerges as a function of $n$ and the base cases.
        </p>
        <div className="bg-[#f3e7c2] text-[#1B0D00] p-5 rounded-lg border border-[#c7a669]">
          <p className="font-bold text-sm">Example: Solve $a_n = a_{n-1} + 3$ with base case $a_0 = 2$.</p>
          <div className="font-mono text-xs space-y-1 mt-2">
            <p>a_n = a_{n-1} + 3</p>
            <p>Substitute $a_{n-1} = a_{n-2} + 3$ into the equation:</p>
            <p>a_n = (a_{n-2} + 3) + 3 = a_{n-2} + 2(3)</p>
            <p>Substitute $a_{n-2} = a_{n-3} + 3$ into the equation:</p>
            <p>a_n = (a_{n-3} + 3) + 2(3) = a_{n-3} + 3(3)</p>
            <p>Following this pattern down to the $n$-th iteration step:</p>
            <p>a_n = a_{n-n} + n(3) = a_0 + 3n</p>
            <p>Substitute the base case value $a_0 = 2$:</p>
            <p className="font-bold text-green-800 text-sm">a_n = 2 + 3n</p>
          </div>
        </div>

        {/* METHOD 2 */}
        <h4 className="text-2xl font-bold mt-8 mb-2">Method II: The Characteristic Root Method</h4>
        <p className="p-text">
          Used to solve linear homogeneous relations by converting them into equivalent polynomial equations.
        </p>

        <h5 className="text-xl font-bold mt-4 mb-2">1. Second-Order Homogeneous Relations</h5>
        <p className="p-text">
          For the relation $a_n + c_1a_{n-1} + c_2a_{n-2} = 0$, construct the **Characteristic Equation**: $r^2 + c_1r + c_2 = 0$.
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border border-[#c7a669]">
            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">Root Condition</th>
                <th className="border border-[#c7a669] p-3 text-left">Explicit Solution Formula Structure ($a_n$)</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#1B0D00] font-mono text-sm md:text-base">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Distinct Real Roots ($r_1 \neq r_2$)</td>
                <td className="border border-[#c7a669] p-3">a_n = α_1(r_1)^n + α_2(r_2)^n</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Repeated Real Roots ($r_1 = r_2 = r$)</td>
                <td className="border border-[#c7a669] p-3">a_n = (α_1 + α_2 n)(r)^n</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] p-5 rounded-lg border border-[#c7a669] mt-4">
          <p className="font-bold text-sm">Concrete Example (Distinct Roots): Solve $a_n = 5a_{n-1} − 6a_{n-2}$ given $a_0 = 1, a_1 = 5$.</p>
          <div className="font-mono text-xs space-y-1 mt-2">
            <p>1. Rewrite equation: a_n − 5a_{n-1} + 6a_{n-2} = 0</p>
            <p>2. Form characteristic polynomial: r² − 5r + 6 = 0</p>
            <p>3. Factor equation: (r − 2)(r − 3) = 0 → Roots are r₁ = 2, r₂ = 3</p>
            <p>4. State general structure: a_n = α_1(2)^n + α_2(3)^n</p>
            <p>5. Substitute base cases to solve for coefficients:</p>
            <p>&nbsp;&nbsp;&nbsp;For n = 0: α_1 + α_2 = 1</p>
            <p>&nbsp;&nbsp;&nbsp;For n = 1: 2α_1 + 3α_2 = 5</p>
            <p>6. Solving this system gives α_1 = -2 and α_2 = 3.</p>
            <p className="font-bold text-green-800 text-sm">Final Solution: a_n = −2(2)^n + 3(3)^n = −2^{n+1} + 3^{n+1}</p>
          </div>
        </div>

        <h5 className="text-xl font-bold mt-6 mb-2">2. Higher-Order Homogeneous Relations</h5>
        <p className="p-text">
          If the characteristic equation has a root $r$ repeated $m$ times, the terms corresponding to this root in the general solution have the form:
          <br />
          <span className="font-mono block text-center my-2 text-base">(\alpha_0 + \alpha_1 n + \alpha_2 n^2 + \dots + \alpha_{m-1} n^{m-1})r^n</span>
        </p>

        <h5 className="text-xl font-bold mt-6 mb-2">3. Non-Homogeneous Relations with Constant Coefficients</h5>
        <p className="p-text">
          The complete general solution to $a_n + c_1a_{n-1} + c_2a_{n-2} = F(n)$ is a combination of two parts:
          <br />
          <span className="font-mono block text-center my-1 text-base">a_n = a_n^{(h)} + a_n^{(p)}</span>
          Where $a_n^{(h)}$ is the homogeneous solution matching $F(n)=0$, and $a_n^{(p)}$ is the **particular solution** chosen to match the functional format of $F(n)$.
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border border-[#c7a669]">
            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">Trailing Function Form $F(n)$</th>
                <th className="border border-[#c7a669] p-3 text-left">Assumed Particular Solution Form $a_n^{(p)}$</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#1B0D00] font-mono text-sm">
              <tr>
                <td className="border border-[#c7a669] p-3">Linear Polynomial (c . n + d)</td>
                <td className="border border-[#c7a669] p-3">A . n + B</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3">Exponential (c . s^n)</td>
                <td className="border border-[#c7a669] p-3">A . s^n &nbsp;&nbsp; (if s is not a homogeneous root)</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 text-red-800 font-sans font-semibold">⚠️ Critical Clash Case</td>
                <td className="border border-[#c7a669] p-3">A . n^m . s^n &nbsp;&nbsp; (if s is a homogeneous root of multiplicity m)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* METHOD 3 */}
        <h4 className="text-2xl font-bold mt-8 mb-2">Method III: Generating Functions</h4>
        <p className="p-text">
          A **Generating Function** $G(x)$ translates an infinite discrete sequence $(a_0, a_1, a_2, \dots)$ into the formal coefficients of a continuous power series expansion:
          <br />
          <span className="font-mono block text-center my-2 text-base">G(x) = \sum_{n=0}^{\infty} a_n x^n = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \dots</span>
        </p>

        <h5 className="text-xl font-bold mt-4 mb-2">The Extended Binomial Theorem</h5>
        <p className="p-text">
          To extract sequence terms from algebraic fractional generating functions, use the **Extended Binomial Theorem** for negative integer powers:
        </p>
        <div className="bg-[#f3e7c2] text-[#1B0D00] p-4 rounded-lg border border-[#c7a669] font-mono text-base block my-3">
          (1 − x)^{-n} = \sum_{r=0}^{\infty} \binom{n + r − 1}{r} x^r
          <br />
          <span className="text-xs font-sans text-gray-700 block mt-2 font-bold">
            Expanding explicitly: (1 − x)^{-1} = 1 + x + x^2 + x^3 + \dots &nbsp;&nbsp; and &nbsp;&nbsp; (1 − x)^{-2} = 1 + 2x + 3x^2 + 4x^3 + \dots
          </span>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] p-5 rounded-lg border border-[#c7a669] mt-4">
          <p className="font-bold text-sm">Step-by-Step Example: Solve $a_n = 2a_{n-1}$ with $a_0 = 3$ using Generating Functions.</p>
          <div className="font-mono text-xs space-y-1 mt-2">
            <p>1. Multiply the relation by x^n and sum over all n ≥ 1:</p>
            <p>&nbsp;&nbsp;&nbsp;\sum_{n=1}^{\infty} a_n x^n = \sum_{n=1}^{\infty} 2a_{n-1} x^n</p>
            <p>2. Express the terms in relation to the generating function G(x) = \sum_{n=0}^{\infty} a_n x^n:</p>
            <p>&nbsp;&nbsp;&nbsp;Left side: G(x) − a_0</p>
            <p>&nbsp;&nbsp;&nbsp;Right side: 2x \sum_{n=1}^{\infty} a_{n-1} x^{n-1} = 2x G(x)</p>
            <p>3. Substitute these components back into the equation:</p>
            <p>&nbsp;&nbsp;&nbsp;G(x) − a_0 = 2x G(x)</p>
            <p>4. Substitute the base case a_0 = 3 and isolate G(x):</p>
            <p>&nbsp;&nbsp;&nbsp;G(x) − 3 = 2x G(x) → G(x)(1 − 2x) = 3 → G(x) = \frac{3}{1 − 2x}</p>
            <p>5. Apply the geometric series expansion structure (\frac{1}{1-u} = \sum u^n):</p>
            <p>&nbsp;&nbsp;&nbsp;G(x) = 3 \sum_{n=0}^{\infty} (2x)^n = \sum_{n=0}^{\infty} [3 \cdot 2^n] x^n</p>
            <p>6. Extract the coefficient of x^n to find the closed-form equation:</p>
            <p className="font-bold text-green-800 text-sm">Final Solution: a_n = 3 \cdot 2^n</p>
          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* SUMMARY */}
      <section>
        <h2 className="section-heading">Summary</h2>
        <p className="p-text">
          In this chapter, we studied combinatorics, number theory, and recurrence relations. We analyzed basic counting, probability rules, and the Pigeonhole Principle. Next, we explored integer divisibility using Bézout's identity, the Extended Euclidean Algorithm, and Diophantine systems. Finally, we solved linear homogeneous and non-homogeneous recurrence relations using repeated substitution, characteristic roots, and generating functions combined with the Extended Binomial Theorem.
        </p>
      </section>
    </div>
  );
}