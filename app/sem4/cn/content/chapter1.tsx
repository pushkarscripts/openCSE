export const Ch1Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        To understand how networks function, we use <strong>Reference Models</strong>. These models 
        break down the complex process of communication into smaller, manageable layers. The two most 
        prominent models are the <strong>OSI Model</strong> and the <strong>TCP/IP Model</strong>.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* OSI Model */}
      <section>
        <h3 className="section-heading">The OSI Reference Model</h3>
        <p className="p-text mb-4">
          Developed by the ISO, the Open Systems Interconnection (OSI) model consists of 7 layers. 
          Each layer provides a specific service to the layer above it.
        </p>
        
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse border border-[#c7a669]">
            <thead>
              <tr className="bg-[#3a2a14] text-[#e2d1c1]">
                <th className="border border-[#c7a669] px-4 py-2">Layer</th>
                <th className="border border-[#c7a669] px-4 py-2">Name</th>
                <th className="border border-[#c7a669] px-4 py-2">Primary Responsibility</th>
              </tr>
            </thead>
            <tbody className="text-[#2b1d0f] bg-[#fdf2d9]">
              <tr>
                <td className="border border-[#c7a669] px-4 py-2 text-center font-bold">7</td>
                <td className="border border-[#c7a669] px-4 py-2 font-semibold">Application</td>
                <td className="border border-[#c7a669] px-4 py-2">User interface and network services (HTTP, FTP).</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] px-4 py-2 text-center font-bold">6</td>
                <td className="border border-[#c7a669] px-4 py-2 font-semibold">Presentation</td>
                <td className="border border-[#c7a669] px-4 py-2">Data translation, encryption, and compression.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] px-4 py-2 text-center font-bold">5</td>
                <td className="border border-[#c7a669] px-4 py-2 font-semibold">Session</td>
                <td className="border border-[#c7a669] px-4 py-2">Managing sessions and dialogues between hosts.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] px-4 py-2 text-center font-bold">4</td>
                <td className="border border-[#c7a669] px-4 py-2 font-semibold">Transport</td>
                <td className="border border-[#c7a669] px-4 py-2">End-to-end delivery and error recovery (TCP, UDP).</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] px-4 py-2 text-center font-bold">3</td>
                <td className="border border-[#c7a669] px-4 py-2 font-semibold">Network</td>
                <td className="border border-[#c7a669] px-4 py-2">Routing and logical addressing (IP).</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] px-4 py-2 text-center font-bold">2</td>
                <td className="border border-[#c7a669] px-4 py-2 font-semibold">Data Link</td>
                <td className="border border-[#c7a669] px-4 py-2">Framing, error detection, and MAC addressing.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] px-4 py-2 text-center font-bold">1</td>
                <td className="border border-[#c7a669] px-4 py-2 font-semibold">Physical</td>
                <td className="border border-[#c7a669] px-4 py-2">Transmission of raw bits over physical media.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-3 my-3 rounded border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
          <strong>Mnemonic:</strong> "Please Do Not Throw Sausage Pizza Away" (Physical, Data Link, Network, Transport, Session, Presentation, Application).
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* TCP/IP Model */}
      <section>
        <h3 className="section-heading">The TCP/IP Model</h3>
        <p className="p-text mb-4">
          The TCP/IP model is the practical implementation used in the real world (the Internet). 
          It has 4 main layers:
        </p>
        <ul className="section-list">
          <li><strong>Application Layer:</strong> Combines OSI's top three layers (Session, Presentation, Application).</li>
          <li><strong>Transport Layer:</strong> Responsible for host-to-host communication.</li>
          <li><strong>Internet Layer:</strong> Handles packet routing across networks (similar to OSI Network layer).</li>
          <li><strong>Network Access Layer:</strong> Covers the physical and data link layers of the OSI model.</li>
        </ul>

        <div className="p-4 my-4 rounded-lg shadow-sm border border-[#c7a669] bg-[#f0ddb6]">
          <div className="font-semibold text-[#3a2a14]">Comparison Note</div>
          <div className="mt-2 text-[#2b1d0f]">
            While OSI is a theoretical model used for teaching, TCP/IP is the actual standard protocols 
            that make the internet work today.
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Interview Questions */}
      <section>
        <h3 className="section-heading">Key Interview Questions</h3>
        <ul className="section-list">
          <li>What is the difference between TCP and UDP?</li>
          <li>At which layer does a Router operate? (Answer: Network Layer)</li>
          <li>What is the purpose of the 3-way handshake in TCP?</li>
          <li>Which layer is responsible for encryption? (Answer: Presentation Layer)</li>
        </ul>
      </section>

    </div>
  );
};
