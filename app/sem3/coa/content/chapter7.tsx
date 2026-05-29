export const Ch7Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module VII: Memory Hierarchy</span>.
        This module examines how memory subsystems are structured to mitigate the speed gap between high-performance processors and slow storage components. Learners will explore the principle of locality, analyze the architectural traits of SRAM, DRAM, and physical disks, and study cache mapping topologies. Additionally, this module details cache miss penalties and the address translation mechanics of Virtual Memory.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">1. Memory Hierarchy Structure: SRAM, DRAM, and Disk</h3>

        <p className="p-text">
          An ideal memory subsystem would be infinitely fast, infinitely large, and cost next to nothing. In practice, smaller memories are fast but expensive, while larger memories are cheap but slow. To resolve this bottleneck, systems organize storage layers into a strict <strong>Memory Hierarchy</strong>.
        </p>

        {/* Custom Memory Hierarchy Pyramid Diagram */}
        <div className="my-8 flex flex-col items-center font-semibold text-sm md:text-base drop-shadow-sm">
          <div className="bg-[#3a251a] text-[#f3e7c2] w-32 py-2 text-center rounded-t-lg border-2 border-b-0 border-[#c7a669]">
            CPU Registers
          </div>
          <div className="bg-[#5b3a29] text-[#fae8d7] w-48 py-3 text-center border-2 border-b-0 border-[#c7a669]">
            Caches (L1, L2, L3)
            <div className="text-xs font-normal opacity-80">SRAM - Fast, Small, High Cost</div>
          </div>
          <div className="bg-[#7a523c] text-[#fff7ed] w-64 py-4 text-center border-2 border-b-0 border-[#c7a669]">
            Main Memory
            <div className="text-xs font-normal opacity-80">DRAM - Moderate Speed/Size/Cost</div>
          </div>
          <div className="bg-[#e8cd9c] text-[#3a251a] w-80 py-5 text-center rounded-b-lg border-2 border-[#c7a669]">
            Secondary Storage
            <div className="text-xs font-normal opacity-90">Magnetic / SSD - Slow, Huge, Cheap</div>
          </div>
        </div>

        <h4 className="font-semibold text-xl mt-6 mb-3 text-[#e2d1c1]">The Principle of Locality</h4>
        <p className="p-text mb-4">
          Hierarchies work efficiently because software programs consistently manifest locality, reusing code and data segments via two distinct behaviors:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-[#f0ddb6] border-t-4 border-[#5b3a29] p-4 rounded-b-lg shadow-sm text-[#3a251a]">
            <h5 className="font-bold text-lg mb-2 text-[#5b3a29]">Temporal Locality</h5>
            <p className="text-sm"><strong>(Locality in Time)</strong> If a specific location is referenced, it is highly likely to be accessed again in the near future (e.g., loop counters, induction variables).</p>
          </div>
          <div className="bg-[#f3e7c2] border-t-4 border-[#7a523c] p-4 rounded-b-lg shadow-sm text-[#3a251a]">
            <h5 className="font-bold text-lg mb-2 text-[#7a523c]">Spatial Locality</h5>
            <p className="text-sm"><strong>(Locality in Space)</strong> If a specific location is referenced, adjacent memory addresses are highly likely to be accessed soon afterward (e.g., sequential arrays).</p>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">2. Cache Memory and Placement Strategies</h3>

        <p className="p-text">
          A <strong>Cache</strong> is a small, high-speed memory block placed directly between the CPU and Main Memory. A <strong>Hit</strong> means the block was found in cache, while a <strong>Miss</strong> means the CPU must fetch the chunk from main memory.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-4 text-[#e2d1c1]">Block-Placement Strategies</h4>
        
        <div className="space-y-5">
          <div className="border border-[#c7a669] rounded-lg p-5 bg-[#5b3a29] text-[#fff7ed] shadow-md">
            <h5 className="font-bold text-[#f3e7c2] text-lg mb-1">A. Direct-Mapped Cache</h5>
            <p className="opacity-95 text-sm mb-3">Each main memory block maps to exactly one predetermined slot inside the cache array.</p>
            <div className="bg-[#3a251a] p-3 rounded font-mono text-center text-sm md:text-base my-2 border border-[#7a523c] text-[#e8cd9c]">
              Cache Slot Index = (Block Address) % (Number of Cache Blocks)
            </div>
            <p className="text-sm mt-3"><span className="font-semibold text-[#f0ddb6]">Pros:</span> Exceptionally fast access, low multiplexer overhead.</p>
            <p className="text-sm"><span className="font-semibold text-[#c7a669]">Cons:</span> Prone to <strong>thrashing</strong> (constant cache evictions due to index collisions).</p>
          </div>

          <div className="border border-[#c7a669] rounded-lg p-5 bg-[#7a523c] text-[#fff7ed] shadow-md">
            <h5 className="font-bold text-[#fae8d7] text-lg mb-1">B. Fully Associative Cache</h5>
            <p className="opacity-95 text-sm mb-3">A main memory block can sit inside <em>any</em> available slot within the cache matrix.</p>
            <p className="text-sm"><span className="font-semibold text-[#f0ddb6]">Pros:</span> Eliminates structural index collisions entirely.</p>
            <p className="text-sm"><span className="font-semibold text-[#c7a669]">Cons:</span> Requires parallel hardware comparators for every tag; high transistor count & latency.</p>
          </div>

          <div className="border border-[#c7a669] rounded-lg p-5 bg-[#f0ddb6] text-[#3a251a] shadow-md">
            <h5 className="font-bold text-[#5b3a29] text-lg mb-1">C. Set-Associative Cache</h5>
            <p className="text-sm mb-3">A middle-ground framework that groups cache blocks into distinct <strong>Sets</strong>. A memory block maps to a single set, but can be placed in any block slot <em>within</em> that designated set.</p>
            <div className="bg-[#fae8d7] p-3 rounded font-mono text-center text-sm md:text-base my-2 border border-[#c7a669] text-[#5b3a29]">
              Cache Set Index = (Block Address) % (Number of Sets in Cache)
            </div>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">3. Handling Cache Misses & Miss Penalty Reduction</h3>

        <p className="p-text">
          To evaluate the complete performance drain of cache misses, engineers combine Hit Time, Miss Rate, and Miss Penalty into <strong>Average Memory Access Time (AMAT)</strong>:
        </p>

        <div className="bg-[#3a251a] text-[#f3e7c2] rounded-lg p-4 my-4 font-mono text-center shadow-md text-base md:text-lg border border-[#c7a669] max-w-2xl mx-auto">
          AMAT = Hit Time + (Miss Rate &times; Miss Penalty)
        </div>

        <h4 className="font-semibold text-xl mt-6 mb-3 text-[#e2d1c1]">Cache Write Policies</h4>
        <ul className="list-disc pl-5 mt-3 space-y-2 opacity-95 p-text">
          <li><strong>Write-Through:</strong> Processor writes modified byte to both cache block and main memory simultaneously. Often uses a <em>Write Buffer</em> to avoid stalling the pipeline.</li>
          <li><strong>Write-Back:</strong> Processor writes strictly to the cache block. Main memory is only updated when that block is evicted to make room. Utilizes a <em>Dirty Bit</em> to track modifications.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">4. Virtual Memory and Address Translation</h3>

        <p className="p-text mb-4">
          <strong>Virtual Memory</strong> is an architectural abstraction that uses main memory as a cache for the disk drive, dividing address space into fixed-size <strong>Virtual Pages</strong> mapping to RAM <strong>Physical Page Frames</strong>. When a requested page isn&apos;t in RAM, a <strong>Page Fault</strong> occurs.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-3 text-[#e2d1c1]">Translation Mechanics</h4>
        
        {/* Custom Address Translation Diagram */}
        <div className="bg-[#5b3a29] p-6 rounded-lg border border-[#c7a669] my-6 shadow-md overflow-x-auto">
          <div className="flex flex-col items-center min-w-[500px]">
            
            <h5 className="text-[#f3e7c2] font-semibold mb-2">Virtual Address Layout</h5>
            <div className="flex w-full max-w-lg mb-4">
              <div className="flex-1 bg-[#3a251a] text-[#f3e7c2] text-center p-3 rounded-l-md border border-[#c7a669]">
                Virtual Page Number (VPN)
              </div>
              <div className="w-1/3 bg-[#7a523c] text-[#fff7ed] text-center p-3 rounded-r-md border border-l-0 border-[#c7a669]">
                Page Offset
              </div>
            </div>

            <div className="flex w-full max-w-lg mb-4 text-[#c7a669]">
              <div className="flex-1 flex justify-center text-sm items-center flex-col">
                <span>Memory Management Unit (MMU)</span>
                <span>(TLB / Page Table Lookup)</span>
                <span className="text-2xl mt-1">↓</span>
              </div>
              <div className="w-1/3 flex justify-center text-3xl font-light">
                ↓
              </div>
            </div>

            <div className="flex w-full max-w-lg mt-2">
              <div className="flex-1 bg-[#e8cd9c] text-[#3a251a] font-bold text-center p-3 rounded-l-md border border-[#c7a669]">
                Physical Page Number (PPN)
              </div>
              <div className="w-1/3 bg-[#7a523c] text-[#fff7ed] text-center p-3 rounded-r-md border border-l-0 border-[#c7a669]">
                Page Offset
              </div>
            </div>
            <h5 className="text-[#f3e7c2] font-semibold mt-2">Physical Address Layout</h5>

          </div>
        </div>

        <ul className="list-none space-y-4 p-text mb-4 mt-6">
          <li className="bg-[#fae8d7] text-[#3a251a] p-4 rounded-lg border-l-4 border-[#5b3a29] shadow-sm">
            <strong className="text-[#5b3a29] text-lg block mb-1">The Page Table</strong>
            An in-memory indexing array maintained by the OS. The VPN acts as a lookup index, yielding the associated PPN alongside bits like `Valid`, `Dirty`, and Permissions.
          </li>
          <li className="bg-[#f0ddb6] text-[#3a251a] p-4 rounded-lg border-l-4 border-[#7a523c] shadow-sm">
            <strong className="text-[#7a523c] text-lg block mb-1">Translation Lookaside Buffer (TLB)</strong>
            Since Page Tables live in memory, address translation normally requires an extra memory cycle. The TLB is a tiny, highly-associative, hardware cache directly inside the CPU that remembers recent VPN-to-PPN links, resolving &gt;95% of translations instantly.
          </li>
        </ul>

      </section>

    </div>
  );
};