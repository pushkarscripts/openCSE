import React from "react";

export const Ch3Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Hash functions and digital signatures provide <span className="font-semibold">integrity, authentication, and non-repudiation</span>. While encryption hides data, hashing and signatures prove that data is authentic and unmodified.
      </p>

      <section>
        <h3 className="section-heading">Cryptographic Hash Functions</h3>
        <p className="p-text mt-2">
          A hash function takes an input of any size and produces a fixed-length output called a <strong>digest</strong>, <strong>hash</strong>, or <strong>fingerprint</strong>. It is a one-way function — you cannot recover the input from the output.
        </p>
        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Required Properties</h4>
          <ul className="section-list space-y-2">
            <li><strong>Deterministic:</strong> Same input always gives same output. Hash("hello") always = same value.</li>
            <li><strong>Pre-image resistance (one-way):</strong> Given hash h, it must be computationally infeasible to find any m such that Hash(m) = h. You cannot "reverse" a hash.</li>
            <li><strong>Second pre-image resistance (weak collision resistance):</strong> Given a specific message m1, it must be infeasible to find a different m2 where Hash(m1) = Hash(m2). You can't find a collision for a given message.</li>
            <li><strong>Collision resistance (strong):</strong> It must be infeasible to find any two different messages m1 ≠ m2 such that Hash(m1) = Hash(m2). Even with free choice of both messages.</li>
            <li><strong>Avalanche effect:</strong> A tiny change in input (even 1 bit) must produce a completely different hash. Hash("hello") and Hash("hellp") must look totally unrelated.</li>
            <li><strong>Fixed output length:</strong> Output is always the same size regardless of input. SHA-256 always produces exactly 256 bits.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Birthday Attack &amp; Why Output Size Matters</h4>
          <ul className="section-list space-y-2">
            <li>The birthday paradox: In a room of 23 people, there's a 50% chance two share a birthday. With 70 people, it's 99.9%.</li>
            <li>For a hash with n-bit output, a collision can be found in ~2^(n/2) attempts (not 2^n).</li>
            <li>So SHA-1 (160-bit) has only ~2⁸⁰ collision resistance — considered broken.</li>
            <li>SHA-256 (256-bit) has ~2¹²⁸ collision resistance — currently secure.</li>
            <li><strong>Rule:</strong> Always use a hash with output ≥ 256 bits for security.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Common Hash Algorithms</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>MD5 (1992):</strong> 128-bit output. Designed by Ron Rivest. Collisions found in 1996, practical collision attack in 2004. Two different files with identical MD5 hashes can be crafted. NEVER use for security. Only acceptable for non-security checksums (detecting accidental corruption).</li>
            <li><strong>SHA-1 (1995):</strong> 160-bit output. US government standard. Theoretical attacks since 2005. In 2017, Google's SHAttered project demonstrated the first practical SHA-1 collision — two different PDF files with identical SHA-1 hashes. Deprecated in TLS certificates since 2017.</li>
            <li><strong>SHA-2 family (2001):</strong> SHA-224, SHA-256, SHA-384, SHA-512. All based on the Merkle–Damgård construction. SHA-256 is the current standard for most applications. No practical attacks known. Used in TLS, Bitcoin, code signing, passwords.</li>
            <li><strong>SHA-3 (2015):</strong> Based on the Keccak sponge construction — completely different design from SHA-2. Not because SHA-2 is broken, but as a backup in case SHA-2 is ever compromised. More resistant to length-extension attacks. Slower than SHA-2 in software.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Merkle–Damgård Construction (SHA-1, SHA-2)</h4>
          <ul className="section-list space-y-2">
            <li>Message is padded to a multiple of the block size, then split into blocks.</li>
            <li>A compression function takes (current state, next block) → new state.</li>
            <li>Processed sequentially: state after block i becomes input for block i+1.</li>
            <li>Final state is the hash output.</li>
            <li><strong>Length extension attack:</strong> Given Hash(m), an attacker can compute Hash(m || padding || extra) without knowing m. Relevant for HMAC — reason HMAC uses a two-step construction.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Sponge Construction (SHA-3 / Keccak)</h4>
          <ul className="section-list space-y-2">
            <li>State is divided into a "rate" (absorbed) and "capacity" (hidden) portion.</li>
            <li><strong>Absorbing phase:</strong> Input blocks XORed into the rate portion, then a permutation f is applied.</li>
            <li><strong>Squeezing phase:</strong> Output bits are read from the rate portion, permutation applied between reads.</li>
            <li>Can produce variable-length output (makes it a XOF — Extendable Output Function).</li>
            <li>Not vulnerable to length extension attacks.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">HMAC (Hash-based Message Authentication Code)</h3>
        <p className="p-text mt-2">
          A plain hash has no secret — anyone can compute Hash(m). HMAC adds a secret key so only someone who knows the key can produce or verify the MAC. Provides both integrity and authentication.
        </p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Formula:</strong> HMAC(K, m) = Hash((K ⊕ opad) || Hash((K ⊕ ipad) || m))</li>
            <li>ipad = 0x36 repeated, opad = 0x5C repeated (both block-length constants).</li>
            <li><strong>Why two hashes?</strong> The inner hash prevents length-extension attacks. The outer hash binds the key to the inner result.</li>
            <li><strong>Example use:</strong> TLS uses HMAC-SHA256 to verify that each TLS record was not tampered with in transit.</li>
            <li><strong>HMAC is not encryption</strong> — the message is still visible. It only proves integrity and authenticity.</li>
            <li>HMAC-SHA256 is still secure. Do not use HMAC-MD5 or HMAC-SHA1 in new systems.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Password Hashing</h3>
        <p className="p-text mt-2">Never store passwords as plaintext or with a plain cryptographic hash. Use purpose-built slow password hashing functions.</p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Problem with plain hashing:</strong> SHA-256("password") is always the same — vulnerable to precomputed rainbow table attacks.</li>
            <li><strong>Salt:</strong> A random value added to each password before hashing. Even if two users have the same password, their hashes differ. Salt is stored alongside hash (it's not secret — it just prevents precomputation).</li>
            <li><strong>bcrypt:</strong> Adaptive cost function — can be made slower as hardware improves. Includes salt automatically. Industry standard for passwords.</li>
            <li><strong>Argon2:</strong> Winner of the 2015 Password Hashing Competition. Memory-hard — requires large amounts of RAM, making GPU cracking expensive. Recommended for new systems.</li>
            <li><strong>PBKDF2:</strong> Password-Based Key Derivation Function 2. Applies HMAC thousands of times. Less memory-hard than Argon2 but still common (used in WPA2 Wi-Fi passwords).</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Digital Signatures</h3>
        <p className="p-text mt-2">
          A digital signature proves: (1) the message was sent by a specific party (authentication), (2) the message was not altered (integrity), and (3) the sender cannot deny sending it (non-repudiation). It combines hashing with asymmetric cryptography.
        </p>
        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">How Digital Signatures Work</h4>
          <ul className="section-list space-y-2">
            <li><strong>Step 1 — Sign:</strong> Alice computes h = SHA-256(message). She encrypts h with her private key: sig = RSA_Decrypt(h, Alice_private_key). She sends (message, sig) to Bob.</li>
            <li><strong>Step 2 — Verify:</strong> Bob computes h' = SHA-256(message) himself. He decrypts sig using Alice's public key: h = RSA_Encrypt(sig, Alice_public_key). If h == h', the signature is valid — the message is authentic and unaltered.</li>
            <li><strong>Why hash first?</strong> Asymmetric operations are slow. Hashing the message first gives a small fixed-size value to sign (e.g. 256 bits) regardless of message size.</li>
            <li><strong>Why private key signs?</strong> Only Alice has the private key — only she can produce the signature. Anyone with the public key can verify, but not forge.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Signature Schemes</h4>
          <ul className="section-list space-y-2">
            <li><strong>RSA-PSS (Probabilistic Signature Scheme):</strong> RSA with proper randomized padding. Provably secure. Use instead of textbook RSA signatures.</li>
            <li><strong>DSA (Digital Signature Algorithm):</strong> US NIST standard. Based on discrete logarithm. Uses a random nonce k per signature — if k is ever reused, private key is leaked. (PlayStation 3 was hacked this way.)</li>
            <li><strong>ECDSA (Elliptic Curve DSA):</strong> DSA on elliptic curves. Smaller signatures, faster. Used in TLS, Bitcoin, code signing. Same k-reuse vulnerability as DSA.</li>
            <li><strong>EdDSA (Edwards-curve Digital Signature Algorithm):</strong> Uses deterministic k — no random nonce, no k-reuse risk. Used in SSH, TLS 1.3, Signal. Most modern choice.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Public Key Infrastructure (PKI)</h3>
        <p className="p-text mt-2">
          Digital signatures prove a message was signed by someone with a private key — but how do you know whose private key it is? PKI solves this by binding public keys to identities via trusted third parties called Certificate Authorities (CAs).
        </p>
        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">X.509 Certificates</h4>
          <ul className="section-list space-y-2">
            <li>A certificate is a digital document signed by a CA that says: "I, the CA, confirm that this public key belongs to this domain/person."</li>
            <li><strong>X.509 certificate contains:</strong> Subject (domain name / organization), Public key, Issuer (CA name), Validity period (not before / not after), Serial number, Digital signature of the CA.</li>
            <li>When you visit https://google.com, your browser checks: Is the certificate signed by a trusted CA? Is the domain name in the certificate? Is it still valid (not expired)? Has it been revoked?</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Certificate Chain of Trust</h4>
          <ul className="section-list space-y-2">
            <li><strong>Root CA:</strong> Self-signed certificate. Trusted by operating systems and browsers. Examples: DigiCert, Let's Encrypt, GlobalSign. Stored in your OS/browser trust store.</li>
            <li><strong>Intermediate CA:</strong> Signed by the Root CA. Used to sign end-entity certificates. Adds a layer — Root CA private key is kept offline (air-gapped) for maximum security.</li>
            <li><strong>End-entity certificate:</strong> The certificate your website or server uses. Signed by the Intermediate CA.</li>
            <li><strong>Chain verification:</strong> Browser verifies: end-entity cert is signed by Intermediate CA → Intermediate CA cert is signed by Root CA → Root CA is in trust store → chain is valid.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Certificate Revocation</h4>
          <ul className="section-list space-y-2">
            <li>If a private key is compromised, the certificate must be revoked before it expires.</li>
            <li><strong>CRL (Certificate Revocation List):</strong> CA publishes a list of revoked serial numbers. Browsers download and check. Problem: large file, updated periodically — not real-time.</li>
            <li><strong>OCSP (Online Certificate Status Protocol):</strong> Browser queries CA's OCSP server in real-time to check if a specific certificate is revoked. Problem: privacy (CA learns what sites you visit) and latency.</li>
            <li><strong>OCSP Stapling:</strong> Server queries OCSP itself and includes the signed response in the TLS handshake. Faster, more private. Modern solution.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Key Points to Remember</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>Hash = one-way, fixed-length fingerprint. Not encryption — cannot be reversed.</li>
            <li>MD5 and SHA-1 are broken (practical collisions demonstrated). Use SHA-256 or SHA-3.</li>
            <li>Birthday attack: n-bit hash has 2^(n/2) collision resistance, not 2^n.</li>
            <li>HMAC = hash + secret key = integrity + authentication. Used in TLS.</li>
            <li>For passwords: use bcrypt or Argon2 with salts. Never plain SHA-256.</li>
            <li>Digital signature = Hash(message) encrypted with private key.</li>
            <li>Sign with private key → verify with public key. Proves authenticity and integrity.</li>
            <li>PKI: CAs issue X.509 certificates that bind public keys to identities.</li>
            <li>Certificate chain: End-entity → Intermediate CA → Root CA (in browser trust store).</li>
          </ul>
        </div>
      </section>
    </div>
  );
};