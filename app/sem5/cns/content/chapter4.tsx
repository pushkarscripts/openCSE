import React from "react";

export const Ch4Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        SSL/TLS and HTTPS are the protocols that make secure communication on the internet possible — from banking to email to every padlock icon in your browser. They combine asymmetric encryption, symmetric encryption, hash functions, and certificates into one seamless protocol.
      </p>

      <section>
        <h3 className="section-heading">SSL vs TLS — History</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>SSL 1.0 (1994):</strong> Netscape's design. Never publicly released — had critical security flaws.</li>
            <li><strong>SSL 2.0 (1995):</strong> First public release. Had serious vulnerabilities. Deprecated.</li>
            <li><strong>SSL 3.0 (1996):</strong> Major redesign. Broken by POODLE attack in 2014. Deprecated.</li>
            <li><strong>TLS 1.0 (1999):</strong> IETF standardization of SSL. Vulnerable to BEAST attack. Deprecated.</li>
            <li><strong>TLS 1.1 (2006):</strong> Minor improvements. Deprecated in 2021.</li>
            <li><strong>TLS 1.2 (2008):</strong> Added AEAD ciphers (AES-GCM), SHA-2. Still widely used. Secure with proper configuration.</li>
            <li><strong>TLS 1.3 (2018):</strong> Major overhaul. Removed all weak algorithms. Faster. Current standard.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">TLS 1.2 Handshake — Detailed</h3>
        <p className="p-text mt-2">The handshake establishes a secure channel before any application data is sent. It negotiates algorithms, authenticates the server (and optionally client), and establishes session keys.</p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>1. ClientHello:</strong> Client sends: highest TLS version supported, a random 32-byte nonce (client_random), a session ID (for resumption), list of supported cipher suites (e.g. TLS_RSA_WITH_AES_128_CBC_SHA256), list of compression methods.</li>
            <li><strong>2. ServerHello:</strong> Server responds with: chosen TLS version, a random 32-byte nonce (server_random), chosen cipher suite, session ID.</li>
            <li><strong>3. Certificate:</strong> Server sends its X.509 certificate chain. Client verifies: CA signature valid, not expired, domain name matches, not revoked.</li>
            <li><strong>4. ServerHelloDone:</strong> Server signals end of its handshake messages.</li>
            <li><strong>5. ClientKeyExchange:</strong> Client generates a 48-byte pre-master secret, encrypts it with server's public key, sends to server. (With RSA key exchange — static RSA, no forward secrecy.)</li>
            <li><strong>6. Key Derivation:</strong> Both sides compute: master_secret = PRF(pre_master_secret, "master secret", client_random + server_random). From master_secret, derive: client write key, server write key, client MAC key, server MAC key, client IV, server IV.</li>
            <li><strong>7. ChangeCipherSpec:</strong> Both sides signal they're switching to encrypted communication.</li>
            <li><strong>8. Finished:</strong> Both send a hash of all handshake messages encrypted with the new session keys. If both Finished messages verify correctly, the handshake succeeded.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">TLS 1.2 with DHE/ECDHE (Forward Secrecy)</h4>
          <ul className="section-list space-y-2">
            <li>Instead of encrypting pre-master secret with server's RSA key (static), use ephemeral Diffie-Hellman.</li>
            <li><strong>ServerKeyExchange:</strong> Server sends DH parameters and its DH public value, all signed with its private key (authentication).</li>
            <li>Client sends its DH public value. Both compute the same shared secret (pre-master secret) via DH math.</li>
            <li><strong>Forward secrecy:</strong> Each session uses fresh DH parameters. Even if the server's long-term private key is later compromised, past sessions cannot be decrypted because the ephemeral DH keys are discarded after the session.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">TLS 1.3 — What Changed</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>1-RTT handshake:</strong> TLS 1.2 needed 2 round trips before sending data. TLS 1.3 needs only 1. Client sends key share in ClientHello — server can derive session keys immediately and respond with encrypted data right away.</li>
            <li><strong>Removed algorithms:</strong> RSA key exchange (no forward secrecy), static DH, weak ciphers (RC4, DES, 3DES, AES-CBC), weak MACs (MD5, SHA-1), compression (CRIME attack). Only AEAD ciphers remain: AES-GCM, ChaCha20-Poly1305.</li>
            <li><strong>Mandatory forward secrecy:</strong> Only ECDHE and DHE key exchange allowed — no static RSA or DH. Every session gets fresh ephemeral keys.</li>
            <li><strong>0-RTT (Zero Round Trip Time) resumption:</strong> For reconnecting clients, encrypted data can be sent in the very first message. Trade-off: vulnerable to replay attacks. Only suitable for idempotent requests (like HTTP GET).</li>
            <li><strong>Encrypted handshake:</strong> More of the handshake is encrypted in TLS 1.3, including the server's certificate — hides which server you're connecting to from passive observers.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Cipher Suites</h3>
        <p className="p-text mt-2">A cipher suite specifies all the algorithms used in a TLS connection. Format: TLS_KeyExchange_WITH_EncryptionAlgorithm_MACAlgorithm</p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256:</strong> Key exchange = ECDHE (forward secrecy). Authentication = RSA certificate. Encryption = AES-128-GCM (AEAD). MAC = SHA-256 (for key derivation). TLS 1.2 — good choice.</li>
            <li><strong>TLS_AES_256_GCM_SHA384:</strong> TLS 1.3 format (simpler — key exchange always ECDHE). Encryption = AES-256-GCM. Hash = SHA-384.</li>
            <li><strong>TLS_CHACHA20_POLY1305_SHA256:</strong> TLS 1.3. ChaCha20 is faster than AES on devices without AES hardware acceleration (older phones, IoT). Used by default in Chrome on Android.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">HTTPS</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>HTTPS = HTTP + TLS. All HTTP data (headers, body, URLs after the domain) is encrypted inside the TLS tunnel.</li>
            <li>Uses port 443 (HTTP uses port 80).</li>
            <li><strong>What HTTPS protects against:</strong> Eavesdropping on the content of your requests. Tampering with responses (e.g. injecting ads or malware). Impersonation (fake server without a valid certificate).</li>
            <li><strong>What HTTPS does NOT hide:</strong> The domain name you're visiting (visible in DNS and TLS SNI — though ECH is addressing this). The fact that you visited a site. Timing and size of requests.</li>
            <li><strong>HSTS (HTTP Strict Transport Security):</strong> Server sends header "Strict-Transport-Security: max-age=31536000". Browser remembers: always use HTTPS for this domain, never HTTP, for the next year. Prevents SSL stripping attacks where attacker downgrades HTTPS to HTTP.</li>
            <li><strong>HSTS Preloading:</strong> Domains can be submitted to a browser-maintained list so HTTPS is enforced even on the very first visit (before the HSTS header is seen).</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Certificate Validation in Browsers</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Chain validation:</strong> Browser builds the chain from server certificate → intermediate CA → root CA. Each certificate's signature is verified by the issuer's public key.</li>
            <li><strong>Domain validation:</strong> Common Name (CN) or Subject Alternative Name (SAN) in certificate must match the hostname in the URL. Wildcard certs (*.example.com) match one subdomain level.</li>
            <li><strong>Expiry check:</strong> notBefore and notAfter fields must be within current time.</li>
            <li><strong>Revocation check:</strong> OCSP stapling or CRL check.</li>
            <li><strong>Certificate Transparency (CT):</strong> All issued certificates must be logged in public CT logs. Browsers reject certificates not in any CT log. Allows detection of mis-issued certificates.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">IPSec</h3>
        <p className="p-text mt-2">
          IPSec secures communication at the <strong>Network Layer (Layer 3)</strong> of the OSI model. It protects all traffic between two IP addresses regardless of application — unlike TLS which operates at Layer 4+ and must be built into each application.
        </p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>AH (Authentication Header):</strong> Provides integrity and data origin authentication. Computes a MAC over the entire IP packet (including the outer IP header). Does NOT encrypt — the payload is visible. Rarely used alone.</li>
            <li><strong>ESP (Encapsulating Security Payload):</strong> Provides encryption + integrity + authentication. Encrypts the payload. Does not protect the outer IP header in transport mode. The most commonly used IPSec component.</li>
            <li><strong>Transport Mode:</strong> Only the IP payload (e.g. TCP segment) is protected. Original IP header is preserved. Used for end-to-end communication between two specific hosts.</li>
            <li><strong>Tunnel Mode:</strong> The entire original IP packet (header + payload) is encapsulated inside a new IP packet with a new outer header. Original source/destination IPs are hidden inside the tunnel. Used for VPN gateways connecting two networks.</li>
            <li><strong>IKE (Internet Key Exchange):</strong> Protocol used to set up IPSec security associations (SAs) — negotiating algorithms and exchanging keys. IKEv2 is the current standard.</li>
            <li><strong>SA (Security Association):</strong> A one-way relationship between two endpoints specifying the security parameters (algorithm, keys, lifetime). Two SAs needed for bidirectional communication.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Kerberos</h3>
        <p className="p-text mt-2">
          Kerberos (named after the three-headed dog guarding Hades) is a network authentication protocol developed at MIT. It uses <strong>symmetric key cryptography</strong> and <strong>tickets</strong> to authenticate users without sending passwords over the network. Widely used in Windows Active Directory.
        </p>
        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Kerberos Components</h4>
          <ul className="section-list space-y-2">
            <li><strong>KDC (Key Distribution Center):</strong> Trusted server containing two sub-components — the Authentication Server (AS) and the Ticket Granting Server (TGS).</li>
            <li><strong>AS (Authentication Server):</strong> Verifies user identity and issues Ticket Granting Tickets (TGT).</li>
            <li><strong>TGS (Ticket Granting Server):</strong> Issues Service Tickets for specific services.</li>
            <li><strong>Principal:</strong> Any entity (user or service) registered with Kerberos.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Kerberos Authentication Flow</h4>
          <ul className="section-list space-y-2">
            <li><strong>Step 1 — AS Exchange:</strong> Client sends username to AS (no password yet). AS looks up the user's key (derived from password) in its database. AS sends back a TGT encrypted with the TGS's secret key + a session key encrypted with the user's key.</li>
            <li><strong>Step 2 — User decrypts:</strong> Client decrypts the session key using the password-derived key. Now has the TGT (opaque — can't read it) and the session key.</li>
            <li><strong>Step 3 — TGS Exchange:</strong> Client wants to access a file server. Sends TGT + authenticator (timestamp encrypted with session key) to TGS. TGS decrypts TGT using its secret key, verifies authenticator. Issues a Service Ticket for the file server.</li>
            <li><strong>Step 4 — Service Authentication:</strong> Client presents Service Ticket to the file server. File server decrypts it using its own secret key. Verifies authenticator. Grants access.</li>
            <li><strong>Key insight:</strong> Password never sent over network. Tickets have limited lifetime (typically 8–10 hours) — limiting damage if stolen. Replay attacks prevented by timestamps in authenticators.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Key Points to Remember</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>TLS replaces SSL. Only use TLS 1.2 (minimum) or TLS 1.3.</li>
            <li>TLS 1.2 handshake: ClientHello → ServerHello → Certificate → Key Exchange → ChangeCipherSpec → Finished.</li>
            <li>TLS 1.3: 1-RTT, mandatory forward secrecy, only AEAD ciphers, more of handshake encrypted.</li>
            <li>DHE/ECDHE = forward secrecy. Static RSA key exchange = no forward secrecy.</li>
            <li>HTTPS = HTTP + TLS. Port 443. HSTS forces HTTPS on future visits.</li>
            <li>IPSec = Layer 3. AH = integrity only. ESP = encryption + integrity.</li>
            <li>IPSec Transport mode = host-to-host. Tunnel mode = gateway-to-gateway (VPN).</li>
            <li>Kerberos: ticket-based, symmetric crypto, no passwords on the wire, timestamps prevent replay.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};