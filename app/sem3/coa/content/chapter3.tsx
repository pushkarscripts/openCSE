export const Ch3Content = () => {
	return (
		<div className="course-content">

			<p className="p-text">
				<span className="font-semibold">Module III: MIPS - Language of the Computer</span>
				. This module introduces the Instruction Set Architecture (ISA) and the MIPS
				programming model: registers, instruction formats (R/I/J), addressing modes,
				and how high-level control flow maps to machine instructions.
			</p>

			<hr className="my-6 border-[#c7a669] opacity-40" />

			<section>
				<h3 className="section-heading">1. Instruction Set Architecture & Stored Program</h3>

				<p className="p-text">
					The <strong>ISA</strong> is the contract between software and hardware - the
					set of operations, register file visibility, data types, and addressing modes
					that software relies upon. The <strong>Stored Program Concept</strong> stores
					both instructions and data in the same memory space, enabling the control unit
					to fetch and execute instruction sequences dynamically.
				</p>
			</section>

			<hr className="my-6 border-[#c7a669] opacity-40" />

			<section>
				<h3 className="section-heading">2. MIPS Register Architecture & Conventions</h3>

				<p className="p-text">
					MIPS uses a 32-register file (32-bit words). The table below summarizes
					conventional usage names and hardware intent.
				</p>

				<div className="overflow-x-auto my-4">
					<table className="w-full border-collapse border border-[#c7a669] text-[#2b1d0f]">
						<thead>
							<tr className="bg-[#5b3a29] text-[#fff7ed]">
								<th className="border border-[#c7a669] p-2 text-left">Register</th>
								<th className="border border-[#c7a669] p-2">Name</th>
								<th className="border border-[#c7a669] p-2 text-left">Purpose</th>
							</tr>
						</thead>
						<tbody className="bg-[#f3e7c2]">
							<tr>
								<td className="border border-[#c7a669] p-2 font-semibold">$0</td>
								<td className="border border-[#c7a669] p-2">$zero</td>
								<td className="border border-[#c7a669] p-2">Hardwired zero (reads 0, writes ignored)</td>
							</tr>
							<tr className="bg-[#fae8d7]">
								<td className="border border-[#c7a669] p-2 font-semibold">$1</td>
								<td className="border border-[#c7a669] p-2">$at</td>
								<td className="border border-[#c7a669] p-2">Assembler temporary (pseudo-instructions)</td>
							</tr>
							<tr>
								<td className="border border-[#c7a669] p-2 font-semibold">$2-$3</td>
								<td className="border border-[#c7a669] p-2">$v0-$v1</td>
								<td className="border border-[#c7a669] p-2">Return values</td>
							</tr>
							<tr className="bg-[#fae8d7]">
								<td className="border border-[#c7a669] p-2 font-semibold">$4-$7</td>
								<td className="border border-[#c7a669] p-2">$a0-$a3</td>
								<td className="border border-[#c7a669] p-2">Argument registers</td>
							</tr>
							<tr>
								<td className="border border-[#c7a669] p-2 font-semibold">$8-$15</td>
								<td className="border border-[#c7a669] p-2">$t0-$t7</td>
								<td className="border border-[#c7a669] p-2">Temporaries (not preserved across calls)</td>
							</tr>
							<tr className="bg-[#fae8d7]">
								<td className="border border-[#c7a669] p-2 font-semibold">$16-$23</td>
								<td className="border border-[#c7a669] p-2">$s0-$s7</td>
								<td className="border border-[#c7a669] p-2">Saved temporaries (callee must restore)</td>
							</tr>
							<tr>
								<td className="border border-[#c7a669] p-2 font-semibold">$24-$25</td>
								<td className="border border-[#c7a669] p-2">$t8-$t9</td>
								<td className="border border-[#c7a669] p-2">More temporaries</td>
							</tr>
							<tr className="bg-[#fae8d7]">
								<td className="border border-[#c7a669] p-2 font-semibold">$26-$27</td>
								<td className="border border-[#c7a669] p-2">$k0-$k1</td>
								<td className="border border-[#c7a669] p-2">Kernel (reserved for OS traps)</td>
							</tr>
							<tr>
								<td className="border border-[#c7a669] p-2 font-semibold">$28</td>
								<td className="border border-[#c7a669] p-2">$gp</td>
								<td className="border border-[#c7a669] p-2">Global pointer for static data</td>
							</tr>
							<tr className="bg-[#fae8d7]">
								<td className="border border-[#c7a669] p-2 font-semibold">$29</td>
								<td className="border border-[#c7a669] p-2">$sp</td>
								<td className="border border-[#c7a669] p-2">Stack pointer</td>
							</tr>
							<tr>
								<td className="border border-[#c7a669] p-2 font-semibold">$30</td>
								<td className="border border-[#c7a669] p-2">$fp</td>
								<td className="border border-[#c7a669] p-2">Frame pointer</td>
							</tr>
							<tr className="bg-[#fae8d7]">
								<td className="border border-[#c7a669] p-2 font-semibold">$31</td>
								<td className="border border-[#c7a669] p-2">$ra</td>
								<td className="border border-[#c7a669] p-2">Return address for subroutines</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<hr className="my-6 border-[#c7a669] opacity-40" />

			<section>
				<h3 className="section-heading">3. Operands, Memory Mapping & Alignment</h3>

				<p className="p-text">
					MIPS is byte-addressable, but many instructions operate on 32-bit words (4 bytes).
					Word addresses must be multiples of 4 - this is the <em>alignment restriction</em>.
				</p>

				<div className="example-box bg-[#f3e7c2] border border-[#c7a669] p-4 rounded-lg mt-4">
					<div className="font-semibold text-[#5b3a29]">Load / Compute / Store sequence</div>
					<pre className="code-block mt-3">
{`# Pseudocode sequence
lw $t0, 0($s0)   # load from memory into register
add $t1, $t0, $t2
sw $t1, 4($s0)   # write back`}
					</pre>
				</div>
			</section>

			<hr className="my-6 border-[#c7a669] opacity-40" />

			<section>
				<h3 className="section-heading">4. MIPS Instruction Formats (R / I / J)</h3>

				<p className="p-text">All MIPS instructions are 32 bits wide. The three common formats are:</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
					<div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-4">
						<div className="font-semibold text-[#5b3a29] mb-2">R-Type (Register)</div>
						<pre className="code-block text-sm">op | rs | rt | rd | shamt | funct
31-26 25-21 20-16 15-11 10-6 5-0</pre>
					</div>

					<div className="bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-4">
						<div className="font-semibold text-[#5b3a29] mb-2">I-Type (Immediate / Loads)</div>
						<pre className="code-block text-sm">op | rs | rt | immediate
31-26 25-21 20-16 15-0</pre>
					</div>

					<div className="bg-[#fae8d7] border border-[#c7a669] rounded-lg p-4">
						<div className="font-semibold text-[#5b3a29] mb-2">J-Type (Jump)</div>
						<pre className="code-block text-sm">op | target
31-26 25-0</pre>
					</div>
				</div>
			</section>

			<hr className="my-6 border-[#c7a669] opacity-40" />

			<section>
				<h3 className="section-heading">5. Software Control Flow - Branches, Loops, Subroutines</h3>

				<p className="p-text">Common control-flow instructions map high-level constructs to machine steps:</p>

				<div className="example-box bg-[#f0ddb6] border border-[#c7a669] p-4 rounded-lg mt-4">
					<pre className="code-block">Loop:  bne $s1, $s2, Exit
			 add $s3, $s3, $s4
			 addi $s1, $s1, 1
			 j Loop
Exit:</pre>
				</div>

				<p className="p-text mt-3">Subroutines use <strong>jal</strong> and <strong>jr $ra</strong> to call and return.</p>
			</section>

			<hr className="my-6 border-[#c7a669] opacity-40" />

			<section>
				<h3 className="section-heading">6. MIPS Addressing Modes - Quick Reference</h3>

				<ul className="section-list">
					<li><strong>Register:</strong> operands are in registers (e.g., <code className="inline-code">add $s1, $s2, $s3</code>).</li>
					<li><strong>Immediate:</strong> small constants encoded in instruction (e.g., <code className="inline-code">addi $s1, $s2, 100</code>).</li>
					<li><strong>Base/Displacement:</strong> memory address = base register + offset (e.g., <code className="inline-code">lw $s1, 24($s2)</code>).</li>
					<li><strong>PC-relative:</strong> branch target computed from PC + offset (used by <code className="inline-code">beq</code>/<code className="inline-code">bne</code>).</li>
					<li><strong>Pseudo-direct:</strong> used by jumps; the 26-bit target is combined with high PC bits.</li>
				</ul>
			</section>

		</div>
	);
};
