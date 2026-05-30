export const Ch4Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module IV: Computer Arithmetic</span>
        . This module explores how numbers are structurally represented and mathematically
        manipulated at the hardware level. It covers two&apos;s complement signed integers, sign extension,
        overflow detection, multiplication/division hardware, and IEEE 754 floating-point representation.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">1. Number Representation & Two&apos;s Complement</h3>

        <p className="p-text">
          Modern processors use fixed bit-width systems (e.g., 32-bit MIPS words) to manipulate numbers.
        </p>

        <h4 className="font-semibold text-xl mt-4 mb-3">Unsigned Integers</h4>
        <p className="p-text">All 32 bits map directly to binary magnitude positions:</p>

        <div className="bg-[#7a523c] text-[#fff7ed] rounded-lg p-4 my-3 font-mono text-center">
          Value = ∑(d<sub>i</sub> × 2<sup>i</sup>), i=0 to 31
        </div>

        <p className="p-text text-sm opacity-90">
          Range: <strong>0</strong> to <strong>4,294,967,295</strong> (2<sup>32</sup> - 1)
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-3">Signed Integers (Two&apos;s Complement)</h4>
        <p className="p-text">
          To handle negative numbers efficiently, the most significant bit (bit 31, the <strong>Sign Bit</strong>)
          acts as a negative weight:
        </p>

        <div className="bg-[#f3e7c2] border border-[#c7a669] p-4 my-3 rounded-lg">
          <div className="font-mono text-center text-[#5b3a29]">
            Value = −d<sub>31</sub> × 2<sup>31</sup> + ∑(d<sub>i</sub> × 2<sup>i</sup>), i=0 to 30
          </div>
        </div>

        <ul className="section-list">
          <li><strong>Bit 31 = 0:</strong> Positive number or zero</li>
          <li><strong>Bit 31 = 1:</strong> Negative number</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-4">
            <div className="font-semibold text-[#5b3a29] mb-1">Minimum Value</div>
            <div className="font-mono text-lg text-[#5b3a29]">−2,147,483,648 (−2<sup>31</sup>)</div>
          </div>
          <div className="bg-[#fae8d7] border border-[#c7a669] rounded-lg p-4">
            <div className="font-semibold text-[#5b3a29] mb-1">Maximum Value</div>
            <div className="font-mono text-lg text-[#5b3a29]">+2,147,483,647 (+2<sup>31</sup> − 1)</div>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">2. Sign Extension & Overflow Detection</h3>

        <h4 className="font-semibold text-xl mb-3">Sign Extension Hardware</h4>
        <p className="p-text">
          When moving data between registers of different capacities (e.g., 16-bit immediate to 32-bit register),
          the hardware must preserve the numeric value:
        </p>

        <ul className="section-list">
          <li><strong>Positive Numbers:</strong> Upper bits filled with <code className="inline-code">0</code></li>
          <li><strong>Negative Numbers:</strong> Upper bits filled with <code className="inline-code">1</code></li>
        </ul>

        <p className="p-text italic opacity-90 mt-3">
          The sign bit is replicated across all newly created higher-order bit positions.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-3">Arithmetic Overflow Detection</h4>
        <p className="p-text">
          An <strong>Overflow Exception</strong> occurs when an arithmetic result falls outside the representable range.
        </p>

        <div className="bg-[#5b3a29] text-[#fff7ed] rounded-lg p-4 my-4 shadow-md border-l-4 border-[#c7a669]">
          <p className="font-semibold mb-2">Key Rules:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Overflow can only occur when adding two positive or two negative values</li>
            <li>Adding opposite signs never produces overflow</li>
            <li>Detection: if result sign conflicts with operand signs → overflow</li>
          </ul>
        </div>

        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse border border-[#c7a669] text-center text-[#2b1d0f]">
            <thead>
              <tr className="bg-[#5b3a29] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-2">Operand 1</th>
                <th className="border border-[#c7a669] p-2">Operand 2</th>
                <th className="border border-[#c7a669] p-2">Operation</th>
                <th className="border border-[#c7a669] p-2">Result Sign</th>
                <th className="border border-[#c7a669] p-2">Overflow?</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-sm">
              <tr>
                <td className="border border-[#c7a669] p-2">Positive</td>
                <td className="border border-[#c7a669] p-2">Positive</td>
                <td className="border border-[#c7a669] p-2">Add</td>
                <td className="border border-[#c7a669] p-2">Negative</td>
                <td className="border border-[#c7a669] p-2 font-bold text-red-700">YES</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-2">Negative</td>
                <td className="border border-[#c7a669] p-2">Negative</td>
                <td className="border border-[#c7a669] p-2">Add</td>
                <td className="border border-[#c7a669] p-2">Positive</td>
                <td className="border border-[#c7a669] p-2 font-bold text-red-700">YES</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2">Positive</td>
                <td className="border border-[#c7a669] p-2">Negative</td>
                <td className="border border-[#c7a669] p-2">Subtract</td>
                <td className="border border-[#c7a669] p-2">Negative</td>
                <td className="border border-[#c7a669] p-2 font-bold text-red-700">YES</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-2">Negative</td>
                <td className="border border-[#c7a669] p-2">Positive</td>
                <td className="border border-[#c7a669] p-2">Subtract</td>
                <td className="border border-[#c7a669] p-2">Positive</td>
                <td className="border border-[#c7a669] p-2 font-bold text-red-700">YES</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">3. Multiplication & Division Hardware</h3>

        <h4 className="font-semibold text-xl mb-3">Sequential Multiplication</h4>
        <p className="p-text">
          Multiplying two 32-bit integers produces a result up to <strong>64 bits wide</strong>.
        </p>

        <div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-4 my-4">
          <pre className="code-block">Multiplier Bit = 1  =&gt;  Shift Multiplicand Left, then Add to Product
Multiplier Bit = 0  =&gt;  Shift Multiplicand Left, no Addition</pre>
        </div>

        <div className="bg-[#7a523c] text-[#fff7ed] rounded-lg p-5 my-4 shadow-md">
          <h5 className="font-semibold mb-3">Hardware Iteration (32 cycles):</h5>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Evaluate LSB of Multiplier register
              <ul className="list-disc pl-4 mt-1">
                <li>If <code>1</code>: Add Multiplicand to Product</li>
                <li>If <code>0</code>: Skip addition</li>
              </ul>
            </li>
            <li>Shift Multiplicand register left by 1 bit</li>
            <li>Shift Multiplier register right by 1 bit</li>
          </ol>
        </div>

        <p className="p-text italic opacity-90">
          The hardware integrates a 64-bit multiplicand register, 64-bit ALU adder, 64-bit product register,
          and 32-bit multiplier register with control logic orchestrating the shifts and additions.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">4. Floating-Point Representation (IEEE 754)</h3>

        <p className="p-text">
          Real numbers, fractions, and scientific notation cannot use fixed-position integer schemes.
          The <strong>IEEE 754 Floating-Point Standard</strong> encodes real numbers using normalized
          scientific notation.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-3">Normalized Scientific Form</h4>
        <p className="p-text">Every floating-point number is standardized as:</p>

        <div className="bg-[#5b3a29] text-[#fff7ed] rounded-lg p-4 text-center font-mono text-lg my-3">
          ± 1.fraction × 2<sup>exponent</sup>
        </div>

        <h4 className="font-semibold text-xl mt-6 mb-3">Single Precision (32-bit) Format</h4>
        <p className="p-text">The 32 bits are divided into three component fields:</p>

        <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-4 my-3">
          <div className="font-mono text-sm text-center text-[#5b3a29] mb-2">
            [ S ] [ Biased Exponent ] [ Significand Fraction ]
          </div>
          <div className="font-mono text-xs text-center text-[#3a251a]">
            31    30-23              22-0
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
          <div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-4">
            <div className="font-semibold text-[#5b3a29] mb-2 text-sm">Sign Bit (1 bit)</div>
            <p className="text-[#3a251a] text-xs leading-relaxed">
              Bit 31: 0 = positive, 1 = negative
            </p>
          </div>

          <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-4">
            <div className="font-semibold text-[#5b3a29] mb-2 text-sm">Biased Exponent (8 bits)</div>
            <p className="text-[#3a251a] text-xs leading-relaxed">
              Bits 30-23: Real exponent + 127 (allows negative powers)
            </p>
          </div>

          <div className="bg-[#fae8d7] border border-[#c7a669] rounded-lg p-4">
            <div className="font-semibold text-[#5b3a29] mb-2 text-sm">Significand Fraction (23 bits)</div>
            <p className="text-[#3a251a] text-xs leading-relaxed">
              Bits 22-0: Fractional part; leading &apos;1.&apos; is assumed
            </p>
          </div>
        </div>

        <h4 className="font-semibold text-xl mt-6 mb-3">Evaluation Formula</h4>
        <div className="bg-[#7a523c] text-[#fff7ed] rounded-lg p-4 font-mono text-center shadow-md">
          Value = (−1)<sup>S</sup> × (1 + Fraction) × 2<sup>(Biased Exponent − 127)</sup>
        </div>

        <h4 className="font-semibold text-xl mt-6 mb-3">Floating-Point Addition Steps</h4>
        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] p-5 rounded-lg">
          <ol className="list-decimal pl-6 space-y-2 text-[#3a251a]">
            <li><strong>Align Binary Decimal Points</strong> - Shift smaller exponent significand right</li>
            <li><strong>Add Significand Fractions</strong> - Perform addition on aligned operands</li>
            <li><strong>Normalize the Result</strong> - Adjust decimal point and update exponent</li>
            <li><strong>Perform Rounding</strong> - Apply rounding rules to fit back into 32-bit format</li>
          </ol>
        </div>

        <p className="p-text mt-4 italic opacity-90">
          Unlike integer addition, floating-point addition requires alignment before operating on
          the significands, making it a more complex multi-step process.
        </p>
      </section>

    </div>
  );
};
