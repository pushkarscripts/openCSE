export const Ch2Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module II: Linear Algebra</span>.
        This unit builds the foundations of matrix algebra, systems of equations, special matrices,
        eigen analysis and basic numerical techniques. Emphasis is on exam focused concepts.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Algebra of Matrices */}
      <section>
        <h3 className="section-heading">Algebra of Matrices</h3>
        <ul className="section-list">
          <li>Addition, scalar multiplication and matrix multiplication.</li>
          <li>Properties include associativity, distributivity and non-commutativity.</li>
          <li>Transpose and conjugate transpose operations.</li>
        </ul>
        <p className="p-text">Diagram: <strong>matrix-algebra.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Rank */}
      <section>
        <h3 className="section-heading">Rank and Inverse of a Matrix</h3>
        <ul className="section-list">
          <li>Rank is the maximum number of linearly independent rows or columns.</li>
          <li>Determined using row echelon form or determinant methods.</li>
          <li>Inverse exists only if det(A) ≠ 0.</li>
        </ul>
        <p className="p-text">Diagram: <strong>rank-echelon.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Special matrices */}
      <section>
        <h3 className="section-heading">Hermitian, Skew Hermitian and Unitary Matrices</h3>
        <ul className="section-list">
          <li>Hermitian: A = A†.</li>
          <li>Skew Hermitian: A = −A†.</li>
          <li>Unitary: A†A = I.</li>
          <li>Important for stability and orthogonality in linear systems.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Eigenvalues */}
      <section>
        <h3 className="section-heading">Eigenvalues and Eigenvectors</h3>
        <ul className="section-list">
          <li>Defined by A x = λ x.</li>
          <li>Obtained from characteristic equation det(A − λI) = 0.</li>
          <li>Used in system stability, diagonalization and modal analysis.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* System of equations */}
      <section>
        <h3 className="section-heading">Systems of Linear Equations and Consistency</h3>
        <ul className="section-list">
          <li>Ax = b form.</li>
          <li>Consistent if rank(A) = rank(A b).</li>
          <li>Unique solution if rank(A) = rank(A b) = n.</li>
          <li>Infinite solutions if rank(A) = rank(A b) &lt; n.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Numerical Methods */}
      <section>
        <h3 className="section-heading">Numerical Methods for Solving Systems</h3>
        <ul className="section-list">
          <li>Gauss elimination and Gauss Jordan elimination.</li>
          <li>Gauss Seidel iterative method.</li>
        </ul>
        <p className="p-text">Diagram: <strong>gauss-methods.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Vector Space */}
      <section>
        <h3 className="section-heading">Vector Spaces and Linear Transformations</h3>
        <ul className="section-list">
          <li>Vector space: set with vector addition and scalar multiplication.</li>
          <li>Basis: minimal set of linearly independent vectors that span the space.</li>
          <li>Linear transformations preserve vector addition and scalar multiplication.</li>
        </ul>
      </section>

    </div>
  );
};
