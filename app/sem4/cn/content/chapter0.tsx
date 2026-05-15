import Image from "next/image";

export const Ch0Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        Welcome to <span className="font-semibold">Computer Networks</span> — a fundamental course 
        that explores how computers communicate and share resources. This course covers the 
        principles, protocols, and technologies that power the internet and modern telecommunications.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module I */}
      <section>
        <h3 className="section-heading">
          Module I: <span className="section-subheading">Foundations & Reference Models</span>
        </h3>
        
        <Image
          src="/cn-topologies.png"
          alt="Network Topologies"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full mx-auto"
          width={800}
          height={450}
        />

        <ul className="section-list">
          <li>Introduction to computer networks and their importance</li>
          <li>Network topologies: Star, Mesh, Bus, Ring, and Hybrid</li>
        </ul>

        <Image
          src="/cn-network-types.png"
          alt="Classification of Networks"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full mx-auto"
          width={800}
          height={400}
        />

        <ul className="section-list">
          <li>Classification of networks: LAN, MAN, WAN, PAN</li>
          <li>Detailed study of the OSI Reference Model (7 Layers)</li>
          <li>Introduction to the TCP/IP Protocol Suite</li>
          <li>Comparison between OSI and TCP/IP models</li>
        </ul>
      </section>


      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module II */}
      <section>
        <h3 className="section-heading">
          Module II: <span className="section-subheading">Physical & Data Link Layers</span>
        </h3>
        <ul className="section-list">
          <li>Transmission Media: Guided (Twisted pair, Coaxial, Fiber) and Unguided (Radio, Micro, Infrared)</li>
          <li>Data Link Layer design issues: Framing, Error control, and Flow control</li>
          <li>Error detection and correction: Parity, Checksum, CRC, and Hamming code</li>
          <li>Media Access Control (MAC) protocols: ALOHA, CSMA/CD, CSMA/CA</li>
          <li>Ethernet standards and Wireless LANs (802.11)</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module III */}
      <section>
        <h3 className="section-heading">
          Module III: <span className="section-subheading">Network Layer</span>
        </h3>
        <ul className="section-list">
          <li>IP Addressing: IPv4 (Classful & Classless) and Introduction to IPv6</li>
          <li>Subnetting and Supernetting basics</li>
          <li>Routing Algorithms: Distance Vector (RIP) and Link State (OSPF)</li>
          <li>Congestion control algorithms: Leaky Bucket and Token Bucket</li>
          <li>Internetworking devices: Hubs, Switches, Routers, and Gateways</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module IV */}
      <section>
        <h3 className="section-heading">
          Module IV: <span className="section-subheading">Transport & Application Layers</span>
        </h3>
        <ul className="section-list">
          <li>Transport layer services: Connection-oriented vs Connectionless</li>
          <li>UDP: Header format and characteristics</li>
          <li>TCP: Segment structure, Connection management, and Flow control</li>
          <li>Application Layer protocols: DNS, HTTP, HTTPS, FTP, SMTP, and DHCP</li>
          <li>Network Security basics: Cryptography, Firewalls, and VPNs</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        By the end of this course, you will understand how data travels from one point to another 
        across the globe, the intricacies of the protocols involved, and the hardware that makes 
        it all possible.
      </p>
    </div>
  );
};
