export const Ch2Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        To build a network, we need specific hardware components that help in connecting devices 
        and routing data. These are known as <strong>Network Interconnection Devices</strong>.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Hub */}
      <section>
        <h3 className="section-heading">1. Hub</h3>
        <ul className="section-list">
          <li><strong>Layer:</strong> Physical Layer (Layer 1).</li>
          <li><strong>Function:</strong> A non-intelligent device that broadcasts data to all ports.</li>
          <li><strong>Drawback:</strong> Leads to high network traffic and security risks as every device receives every packet.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Switch */}
      <section>
        <h3 className="section-heading">2. Switch</h3>
        <ul className="section-list">
          <li><strong>Layer:</strong> Data Link Layer (Layer 2).</li>
          <li><strong>Function:</strong> An intelligent device that uses MAC addresses to send data only to the intended recipient.</li>
          <li><strong>Benefit:</strong> Reduces collisions and improves efficiency compared to a hub.</li>
        </ul>
        
        <div className="p-3 my-3 rounded border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
          <strong>Pro Tip:</strong> Switches maintain a "MAC Address Table" to remember which device is connected to which port.
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Router */}
      <section>
        <h3 className="section-heading">3. Router</h3>
        <ul className="section-list">
          <li><strong>Layer:</strong> Network Layer (Layer 3).</li>
          <li><strong>Function:</strong> Connects different networks (e.g., your home network to the Internet).</li>
          <li><strong>Logic:</strong> Uses IP addresses and routing tables to determine the best path for data packets.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Other Devices */}
      <section>
        <h3 className="section-heading">Other Important Devices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
            <h4 className="font-bold text-[#3a2a14] mb-2">Bridge</h4>
            <p className="text-[#2b1d0f] text-sm">
              Connects two similar network segments (e.g., two LANs) to form a larger network.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
            <h4 className="font-bold text-[#3a2a14] mb-2">Gateway</h4>
            <p className="text-[#2b1d0f] text-sm">
              A "translator" that connects networks with different protocols (e.g., connecting a TCP/IP network to an IPX/SPX network).
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
            <h4 className="font-bold text-[#3a2a14] mb-2">Repeater</h4>
            <p className="text-[#2b1d0f] text-sm">
              Regenerates signals to allow them to travel longer distances without degradation.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
            <h4 className="font-bold text-[#3a2a14] mb-2">Modem</h4>
            <p className="text-[#2b1d0f] text-sm">
              MOdulates/DEModulates signals between digital and analog forms for transmission over telephone lines.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Comparison Table */}
      <section>
        <h3 className="section-heading">Comparison Summary</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse border border-[#c7a669]">
            <thead>
              <tr className="bg-[#3a2a14] text-[#e2d1c1]">
                <th className="border border-[#c7a669] px-4 py-2">Device</th>
                <th className="border border-[#c7a669] px-4 py-2">OSI Layer</th>
                <th className="border border-[#c7a669] px-4 py-2">Addressing Used</th>
              </tr>
            </thead>
            <tbody className="text-[#2b1d0f] bg-[#fdf2d9]">
              <tr>
                <td className="border border-[#c7a669] px-4 py-2 font-semibold">Hub</td>
                <td className="border border-[#c7a669] px-4 py-2">Physical (1)</td>
                <td className="border border-[#c7a669] px-4 py-2">None (Broadcast)</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] px-4 py-2 font-semibold">Switch</td>
                <td className="border border-[#c7a669] px-4 py-2">Data Link (2)</td>
                <td className="border border-[#c7a669] px-4 py-2">MAC Address</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] px-4 py-2 font-semibold">Router</td>
                <td className="border border-[#c7a669] px-4 py-2">Network (3)</td>
                <td className="border border-[#c7a669] px-4 py-2">IP Address</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};
