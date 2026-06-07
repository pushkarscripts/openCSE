import React from "react";

export const Ch5Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Firewalls and intrusion detection systems form the primary <span className="font-semibold">defensive perimeter</span> of any network. Understanding their types, limitations, and proper deployment is essential for network security.
      </p>

      <section>
        <h3 className="section-heading">Firewalls</h3>
        <p className="p-text mt-2">
          A firewall is a network security device (hardware or software) that monitors and filters incoming and outgoing traffic based on a set of security rules. It creates a barrier between a trusted internal network and untrusted external networks.
        </p>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">1. Packet Filtering Firewall (Stateless)</h4>
          <ul className="section-list space-y-2">
            <li>Operates at <strong>Layer 3 (Network) and Layer 4 (Transport)</strong> of the OSI model.</li>
            <li>Inspects each packet independently based on: Source IP, Destination IP, Source port, Destination port, Protocol (TCP/UDP/ICMP).</li>
            <li><strong>Example rule:</strong> Block all incoming TCP traffic to port 23 (Telnet). Allow outgoing TCP traffic from port 80 (HTTP).</li>
            <li><strong>Advantages:</strong> Very fast (no state to maintain), low overhead, implemented in routers.</li>
            <li><strong>Disadvantages:</strong> Stateless — cannot track whether a packet belongs to an established session. Cannot prevent IP spoofing. Cannot inspect payload. Vulnerable to fragmentation attacks.</li>
            <li><strong>Example:</strong> iptables on Linux is a packet filter. ACLs on Cisco routers are packet filters.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">2. Stateful Inspection Firewall</h4>
          <ul className="section-list space-y-2">
            <li>Tracks the <strong>state of active network connections</strong> in a state table.</li>
            <li>For TCP: tracks SYN, SYN-ACK, ACK (three-way handshake) to know which connections are established.</li>
            <li><strong>Example:</strong> A packet arriving with TCP ACK flag but no matching entry in the state table (no SYN was seen before) is dropped — it's not part of a legitimate session.</li>
            <li>Automatically allows return traffic for outgoing connections — no need for explicit rules to allow response packets.</li>
            <li><strong>Advantages:</strong> More secure than packet filtering. Prevents many spoofing attacks. Better performance than proxy firewalls.</li>
            <li><strong>Disadvantages:</strong> Still cannot inspect application-layer content. State table can be overflowed in a DoS attack (SYN flood).</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">3. Application Layer Firewall (Proxy Firewall)</h4>
          <ul className="section-list space-y-2">
            <li>Operates at <strong>Layer 7 (Application)</strong>. Understands specific protocols: HTTP, FTP, DNS, SMTP.</li>
            <li>Acts as a proxy — all traffic goes through it. The firewall terminates the client connection, inspects the content, then forwards a new connection to the server (if allowed).</li>
            <li><strong>Can block:</strong> Specific HTTP methods (e.g. only allow GET, block PUT/DELETE). Malicious URLs. File type uploads. SQL injection in HTTP parameters. Command injection in FTP.</li>
            <li><strong>Example:</strong> A web application firewall (WAF) like ModSecurity inspects HTTP traffic and blocks SQLi, XSS, etc.</li>
            <li><strong>Disadvantages:</strong> Much slower — deep inspection is CPU-intensive. Must understand every protocol it inspects. Creates a bottleneck.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">4. Next-Generation Firewall (NGFW)</h4>
          <ul className="section-list space-y-2">
            <li>Combines all previous types: stateful inspection + deep packet inspection + application awareness + integrated IDS/IPS + SSL/TLS inspection + user identity tracking.</li>
            <li><strong>Application awareness:</strong> Can identify and control applications regardless of port. Example: Block Facebook even if it runs on port 443. Allow YouTube but block video uploads.</li>
            <li><strong>SSL inspection:</strong> Decrypts TLS traffic, inspects it, re-encrypts. Allows detection of malware hiding in encrypted traffic. Requires installing the NGFW's CA certificate on all clients.</li>
            <li><strong>User identity:</strong> Rules can be per-user or per-group (integrated with Active Directory). "Block social media for interns, allow for managers."</li>
            <li>Examples: Palo Alto Networks, Fortinet FortiGate, Cisco Firepower.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Firewall Rules and Default Policies</h4>
          <ul className="section-list space-y-2">
            <li><strong>Default deny (whitelist):</strong> Block everything, then explicitly allow what is needed. Most secure approach. Used in high-security environments.</li>
            <li><strong>Default allow (blacklist):</strong> Allow everything, block known bad. Easier to manage but less secure. Attacker just needs to avoid the blacklist.</li>
            <li>Rules are processed in order — first matching rule wins. Order matters critically.</li>
            <li><strong>Example ruleset:</strong> Rule 1: Allow TCP from internal to port 80/443. Rule 2: Allow UDP from internal to DNS server port 53. Rule 3: Allow established/related return traffic. Rule 4: Deny all.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">DMZ (Demilitarized Zone)</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>A DMZ is a separate network segment between the internet and the internal network, created with two firewalls (or two firewall zones).</li>
            <li>Public-facing servers (web server, email server, DNS server) are placed in the DMZ because they must accept connections from the internet.</li>
            <li><strong>Traffic rules:</strong> Internet → DMZ: allowed for specific services. DMZ → Internet: restricted. DMZ → Internal: blocked or very restricted. Internal → DMZ: allowed.</li>
            <li><strong>Why?</strong> If a web server in the DMZ is compromised, the attacker is still blocked from the internal network by the inner firewall. The damage is contained.</li>
            <li><strong>Three-legged DMZ:</strong> Single firewall with three interfaces — internet, DMZ, internal. Cost-effective but the firewall is a single point of failure.</li>
            <li><strong>Dual firewall DMZ:</strong> One firewall between internet and DMZ, another between DMZ and internal. More secure. Outer firewall often from a different vendor to prevent a single vulnerability being exploited on both.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">IDS (Intrusion Detection System)</h3>
        <p className="p-text mt-2">
          An IDS monitors network traffic or host activity for signs of malicious activity and generates alerts. It is passive — it detects and reports but does not block. Think of it as a security camera.
        </p>
        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Types of IDS</h4>
          <ul className="section-list space-y-2">
            <li><strong>NIDS (Network-based IDS):</strong> Monitors all traffic on a network segment. Placed at strategic points — typically at the network perimeter or after the firewall. Sees traffic between all hosts. Example: Snort (open source), Suricata.</li>
            <li><strong>HIDS (Host-based IDS):</strong> Installed on individual hosts. Monitors: system calls, log files, file system changes (integrity monitoring), registry changes (Windows), running processes. Can detect attacks that bypass network-level controls. Example: OSSEC, Tripwire (file integrity monitoring).</li>
            <li><strong>Wireless IDS:</strong> Monitors 802.11 wireless traffic for rogue access points, deauth attacks, etc.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Detection Methods</h4>
          <ul className="section-list space-y-2">
            <li><strong>Signature-based (misuse detection):</strong> Compares traffic/activity against a database of known attack signatures (patterns). Like antivirus for network traffic. Very accurate for known attacks. Zero false positives for well-written signatures. Cannot detect zero-day attacks (new attacks not in the database). Must be constantly updated. Example: Snort rule to detect SQL injection pattern in HTTP traffic.</li>
            <li><strong>Anomaly-based (behaviour detection):</strong> Establishes a baseline of "normal" behaviour during a training period. Flags deviations from the baseline as suspicious. Can detect zero-day attacks and novel threats. Higher false positive rate — legitimate unusual activity may be flagged. Example: A server normally sends 1 MB/day of outbound traffic. Suddenly sending 10 GB → flagged as potential data exfiltration.</li>
            <li><strong>Stateful protocol analysis:</strong> Compares observed protocol behaviour against vendor definitions of how the protocol should operate. Flags protocol violations that may indicate exploitation.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">IDS Evaluation Metrics</h4>
          <ul className="section-list space-y-2">
            <li><strong>True positive:</strong> Attack occurred, IDS alerted. Good.</li>
            <li><strong>False positive:</strong> No attack, IDS alerted anyway. Alert fatigue — analysts start ignoring alerts.</li>
            <li><strong>True negative:</strong> No attack, no alert. Good.</li>
            <li><strong>False negative:</strong> Attack occurred, IDS missed it. Very bad.</li>
            <li>Signature-based = low false positive, high false negative for new attacks. Anomaly-based = low false negative for new attacks, higher false positive.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">IPS (Intrusion Prevention System)</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>An IPS is an IDS that can also take action — it is placed inline in the network and can drop malicious packets, reset connections, or block source IPs in real time.</li>
            <li>Because it's inline, it adds latency. Every packet must pass through it before reaching the destination.</li>
            <li><strong>Actions an IPS can take:</strong> Drop the malicious packet. Reset the TCP connection (send RST to both sides). Block the source IP temporarily. Alert the security team. Log the event for forensics.</li>
            <li><strong>Trade-off:</strong> False positives now block legitimate traffic. A misconfigured IPS can bring down business operations. Tuning is critical.</li>
            <li><strong>IDS vs IPS:</strong> IDS = passive, out-of-band (receives a copy of traffic). IPS = active, inline (all traffic passes through it). NGFW typically includes IPS functionality.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Honeypots</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>A honeypot is a decoy system intentionally made to look like a legitimate target to attract attackers.</li>
            <li><strong>Purpose:</strong> Detect attackers probing the network. Distract them from real systems. Study their tools and techniques. Gather threat intelligence.</li>
            <li><strong>Low-interaction honeypot:</strong> Simulates services without a real OS. Captures automated scans and exploits. Low risk — limited interaction surface. Example: Honeyd.</li>
            <li><strong>High-interaction honeypot:</strong> A real system (or VM) with real services. Attackers can fully interact with it. Much more threat intelligence gathered. Higher risk — attacker may use it as a pivot point to attack other systems if not carefully isolated.</li>
            <li><strong>Honeynet:</strong> A network of honeypots.</li>
            <li><strong>Key rule:</strong> Honeypots must be carefully isolated from production systems. Any traffic to a honeypot is suspicious by definition — production systems should never contact it.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">VPN (Virtual Private Network)</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>A VPN creates an encrypted tunnel over the public internet, allowing remote users or offices to communicate as if on a private network.</li>
            <li><strong>IPSec VPN:</strong> Uses IPSec tunnel mode. Common for site-to-site VPNs connecting two offices. Also used for remote access (IKEv2/IPSec).</li>
            <li><strong>SSL/TLS VPN:</strong> Uses TLS. Works through any HTTPS-capable firewall (port 443). Common for remote access VPNs. Examples: OpenVPN, Cisco AnyConnect.</li>
            <li><strong>WireGuard:</strong> Modern VPN protocol. Uses state-of-the-art cryptography (ChaCha20, Curve25519, BLAKE2). Extremely fast and simple codebase (4000 lines vs OpenVPN's 100,000).</li>
            <li><strong>Split tunneling:</strong> Only traffic destined for the corporate network goes through the VPN; internet traffic goes directly. Reduces VPN load but means corporate device is on both the VPN and public internet simultaneously.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Key Points to Remember</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>Packet filter = stateless, Layer 3/4, fast but limited.</li>
            <li>Stateful = tracks connection state, allows return traffic automatically.</li>
            <li>Application layer / proxy = Layer 7, inspects content, slow but thorough.</li>
            <li>NGFW = stateful + DPI + app awareness + IPS + SSL inspection.</li>
            <li>Default deny (whitelist) is more secure than default allow (blacklist).</li>
            <li>DMZ: public servers in DMZ, internal network behind inner firewall.</li>
            <li>IDS = detects and alerts only (passive). IPS = detects and blocks (inline).</li>
            <li>Signature = known attacks, low FP. Anomaly = unknown attacks, higher FP.</li>
            <li>Honeypot = decoy system to attract, detect, and study attackers.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};