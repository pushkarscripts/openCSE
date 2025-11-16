export const Ch0Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        Welcome to <span className="font-semibold">Engineering Mathematics I</span>.
        This course introduces foundational mathematical tools required throughout
        engineering: differential calculus, linear algebra, differential equations,
        and Laplace transforms.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module I */}
      <section>
        <h3 className="section-heading">
          Module I: <span className="section-subheading">Differential Calculus (One Variable)</span>
        </h3>
        <ul className="section-list">
          <li>Rolle's theorem and Cauchy's mean value theorem</li>
          <li>Taylor's and Maclaurin's theorems with remainders</li>
          <li>Indeterminate forms</li>
          <li>Concavity, convexity, and points of inflexion</li>
          <li>Asymptotes and curvature</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module II */}
      <section>
        <h3 className="section-heading">
          Module II: <span className="section-subheading">Linear Algebra (Matrix Theory)</span>
        </h3>
        <ul className="section-list">
          <li>Algebra of matrices, rank and inverse</li>
          <li>Hermitian, skew Hermitian and unitary matrices</li>
          <li>Eigenvalues and eigenvectors</li>
          <li>Systems of linear equations and consistency</li>
          <li>Homogeneous systems and linear dependence of vectors</li>
          <li>Numerical solutions: Gauss, Gauss Jordan and Gauss Seidel</li>
          <li>Vector spaces, basis and linear transformations</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module III */}
      <section>
        <h3 className="section-heading">
          Module III: <span className="section-subheading">Ordinary Differential Equations</span>
        </h3>
        <ul className="section-list">
          <li>First order equations: exact, linear and Bernoulli</li>
          <li>Second order equations with constant coefficients</li>
          <li>Method of variation of parameters</li>
          <li>General linear ODE with constant coefficients</li>
          <li>Euler equations and systems of differential equations</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module IV */}
      <section>
        <h3 className="section-heading">
          Module IV: <span className="section-subheading">Laplace Transforms</span>
        </h3>
        <ul className="section-list">
          <li>Laplace transforms and inverse transforms</li>
          <li>Properties of Laplace transform</li>
          <li>Solution of ODEs using Laplace transform</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        This course builds the essential mathematical foundation for advanced engineering subjects.
        Each module includes clearly structured concepts suited for exam preparation.
      </p>

    </div>
  );
};
