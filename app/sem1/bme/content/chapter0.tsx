export function Ch0Content() {
  return (
    <div className="space-y-6 text-[#e2d1c1]">
      <p className="text-lg leading-relaxed opacity-90">
        Basics of Mechanical Engineering (BME) is a core first-year subject that
        bridges fundamental mechanical concepts with their engineering applications.
        This course covers thermodynamics, steam properties, engine cycles, IC engines,
        engineering materials, manufacturing processes, and solid mechanics — all
        explained in a beginner-friendly, exam-oriented style.
      </p>

      <div className="bg-[#2a1500] rounded-xl p-5 border border-[#fccc7e]/30 space-y-3">
        <h3 className="text-xl font-semibold text-[#fccc7e]">Chapters at a Glance</h3>
        <ul className="list-disc list-inside space-y-1 opacity-90">
          <li><strong>Ch 1</strong> — Thermodynamics: Laws, systems, heat &amp; work</li>
          <li><strong>Ch 2</strong> — Steam Properties &amp; Steam Tables</li>
          <li><strong>Ch 3</strong> — Otto, Diesel &amp; Carnot Cycles with P-V diagrams</li>
          <li><strong>Ch 4</strong> — IC Engines: 2-stroke, 4-stroke, CRDI, MPFI</li>
          <li><strong>Ch 5</strong> — Engineering Materials: metals, alloys, composites</li>
          <li><strong>Ch 6</strong> — Manufacturing Processes: casting, welding, machining</li>
          <li><strong>Ch 7</strong> — Stress-Strain, SFD, BMD, Bending &amp; Torsion equations</li>
        </ul>
      </div>

      <div className="bg-[#2a1500] rounded-xl p-5 border border-[#fccc7e]/30 space-y-3">
        <h3 className="text-xl font-semibold text-[#fccc7e]">Key Formulas Quick Reference</h3>
        <ul className="space-y-1 font-mono text-sm opacity-90">
          <li>Carnot Efficiency: η = 1 − T₂/T₁</li>
          <li>Otto Cycle Efficiency: η = 1 − 1/r^(γ−1)</li>
          <li>Diesel Cycle Efficiency: η = 1 − (1/r^(γ−1)) × [(ρᵞ−1) / γ(ρ−1)]</li>
          <li>Dryness Fraction: x = m_s / (m_s + m_w)</li>
          <li>Hooke&apos;s Law: σ = E × ε</li>
          <li>Bending Equation: M/I = σ/y = E/R</li>
          <li>Torsion Equation: T/J = τ/r = Gθ/L</li>
        </ul>
      </div>
    </div>
  );
}