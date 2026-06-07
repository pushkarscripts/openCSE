import React from "react";

export const Ch2Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Asymmetric encryption uses a mathematically linked <span className="font-semibold">key pair</span> — a public key anyone can know, and a private key only the owner knows. It solves the key distribution problem of symmetric cryptography: you never need to secretly share a key.
      </p>

      <section>
        <h3 className="section-heading">The Key Distribution Problem</h3>
        <p className="p-text mt-2">With symmetric encryption, Alice and Bob must share a secret key — but how? Meeting in person doesn't scale. Sending it over the internet is risky. Asymmetric encryption solves this elegantly.</p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>Bob publishes his public key openly (like a phone book listing).</li>
            <li>Alice encrypts her message with Bob's public key.</li>
            <li>Only Bob's private key can decrypt it — and only Bob has that.</li>
            <li>Even if an attacker intercepts the ciphertext or knows the public key, they cannot decrypt without the private key.</li>
            <li><strong>Trapdoor function:</strong> Easy to compute in one direction, computationally infeasible to reverse without the secret (trapdoor). RSA uses integer factorization as the trapdoor.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">RSA Algorithm</h3>
        <p className="p-text mt-2">
          RSA (Rivest–Shamir–Adleman, 1977) is the most widely used public-key algorithm. Security relies on the fact that multiplying two large primes is easy, but factoring the product back is computationally infeasible.
        </p>
        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Key Generation — Step by Step</h4>
          <ul className="section-list space-y-2">
            <li><strong>Step 1:</strong> Choose two distinct large primes p and q. In practice, each is 1024–2048 bits. Example (small): p = 61, q = 53.</li>
            <li><strong>Step 2:</strong> Compute n = p × q. This is the modulus, used in both public and private keys. n = 61 × 53 = 3233.</li>
            <li><strong>Step 3:</strong> Compute Euler's totient φ(n) = (p−1)(q−1). φ(3233) = 60 × 52 = 3120. This stays secret.</li>
            <li><strong>Step 4:</strong> Choose e such that 1 &lt; e &lt; φ(n) and gcd(e, φ(n)) = 1. Commonly e = 65537 (a prime, efficient in binary). Example: e = 17, gcd(17, 3120) = 1 ✓</li>
            <li><strong>Step 5:</strong> Compute d = modular inverse of e mod φ(n). Find d such that d × e ≡ 1 (mod 3120). d = 2753 because 2753 × 17 = 46801 = 15 × 3120 + 1 ✓</li>
            <li><strong>Public key:</strong> (e=17, n=3233) — share this openly.</li>
            <li><strong>Private key:</strong> (d=2753, n=3233) — keep this secret. Destroy p, q, φ(n).</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Encryption &amp; Decryption</h4>
          <ul className="section-list space-y-2">
            <li><strong>Encrypt:</strong> C = Mᵉ mod n. (M must be less than n)</li>
            <li><strong>Decrypt:</strong> M = Cᵈ mod n.</li>
            <li><strong>Full Example:</strong> M = 65 (message as a number).</li>
            <li>Encrypt: C = 65¹⁷ mod 3233 = 2790.</li>
            <li>Decrypt: M = 2790²⁷⁵³ mod 3233 = 65 ✓</li>
            <li><strong>For signatures (reverse):</strong> Sign with private key: S = Mᵈ mod n. Verify with public key: M = Sᵉ mod n.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Why RSA Works — The Math</h4>
          <ul className="section-list space-y-2">
            <li>By Euler's theorem: M^φ(n) ≡ 1 (mod n) for any M coprime to n.</li>
            <li>Since d × e ≡ 1 (mod φ(n)), we have d × e = k × φ(n) + 1 for some integer k.</li>
            <li>So (Mᵉ)ᵈ = M^(ed) = M^(kφ(n)+1) = (M^φ(n))^k × M ≡ 1^k × M ≡ M (mod n).</li>
            <li>Security: Breaking RSA requires finding d from (e, n), which requires knowing φ(n), which requires factoring n into p and q. No efficient factoring algorithm is known for large n.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">RSA Attacks &amp; Vulnerabilities</h4>
          <ul className="section-list space-y-2">
            <li><strong>Small key attack:</strong> Keys below 1024 bits can be factored with modern hardware. Use 2048+ bits minimum, 4096 for long-term security.</li>
            <li><strong>Textbook RSA (no padding):</strong> Raw RSA is deterministic — same message always gives same ciphertext. Vulnerable to chosen-plaintext attacks. Always use OAEP (Optimal Asymmetric Encryption Padding) for encryption.</li>
            <li><strong>Small exponent attack:</strong> Using very small e (like e=3) with no padding leaks information. e=65537 is standard.</li>
            <li><strong>Common modulus attack:</strong> If two users share the same n but different e, an attacker can recover plaintext. Never reuse n.</li>
            <li><strong>Timing attack:</strong> Measuring decryption time reveals information about d. Use constant-time implementations.</li>
            <li><strong>Quantum threat:</strong> Shor's algorithm on a quantum computer can factor n in polynomial time, breaking RSA. Post-quantum cryptography (lattice-based) is the future solution.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Diffie-Hellman Key Exchange (DH)</h3>
        <p className="p-text mt-2">
          DH (Whitfield Diffie &amp; Martin Hellman, 1976) lets two parties establish a shared secret over a completely public channel without ever transmitting the secret itself. It does not encrypt data — it establishes a shared key that can then be used for symmetric encryption.
        </p>
        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">DH Protocol — Step by Step</h4>
          <ul className="section-list space-y-2">
            <li><strong>Setup (public):</strong> Agree on a large prime p and a generator g (primitive root mod p). These are public — everyone knows them. Example: p=23, g=5.</li>
            <li><strong>Alice's private key:</strong> Chooses random secret a=6. Computes A = gᵃ mod p = 5⁶ mod 23 = 8. Sends A=8 to Bob.</li>
            <li><strong>Bob's private key:</strong> Chooses random secret b=15. Computes B = gᵇ mod p = 5¹⁵ mod 23 = 19. Sends B=19 to Alice.</li>
            <li><strong>Alice computes shared secret:</strong> s = Bᵃ mod p = 19⁶ mod 23 = 2.</li>
            <li><strong>Bob computes shared secret:</strong> s = Aᵇ mod p = 8¹⁵ mod 23 = 2. Same result!</li>
            <li>An eavesdropper sees p=23, g=5, A=8, B=19 — but cannot compute s=2 without solving the discrete logarithm (find a from gᵃ mod p), which is computationally infeasible for large p.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">DH Vulnerabilities</h4>
          <ul className="section-list space-y-2">
            <li><strong>No authentication:</strong> DH alone cannot verify who you're talking to. A Man-in-the-Middle can intercept and establish separate DH sessions with Alice and Bob. Solution: use certificates/digital signatures to authenticate the exchange (done in TLS).</li>
            <li><strong>Static DH:</strong> If the same private keys are reused, past sessions can be decrypted if private key is later compromised. Solution: use Ephemeral DH (DHE) with fresh keys per session → Forward Secrecy.</li>
            <li><strong>Logjam attack:</strong> Weak parameters (small p, certain "export-grade" groups) allow downgrade attacks. Use 2048-bit groups or Elliptic Curve DH (ECDH).</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Elliptic Curve Cryptography (ECC)</h3>
        <p className="p-text mt-2">
          ECC provides the same security as RSA but with much smaller key sizes, making it ideal for mobile devices, embedded systems, and modern TLS.
        </p>
        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">How ECC Works</h4>
          <ul className="section-list space-y-2">
            <li>An elliptic curve is defined by y² = x³ + ax + b over a finite field.</li>
            <li>Points on the curve form a group under a special addition rule: draw a line through two points, it hits the curve at a third point — reflect it over x-axis → that's the "sum".</li>
            <li><strong>ECDLP:</strong> Given points P and Q = k×P (k additions of P with itself), find k. This discrete log on elliptic curves is even harder than on integers — no sub-exponential algorithm is known.</li>
            <li><strong>ECDH:</strong> Diffie-Hellman using elliptic curve point multiplication instead of modular exponentiation. Alice sends A = a×G, Bob sends B = b×G, shared secret = a×B = b×A = ab×G.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">ECC vs RSA Key Sizes</h4>
          <ul className="section-list space-y-2">
            <li>80-bit security: RSA 1024-bit vs ECC 160-bit.</li>
            <li>128-bit security: RSA 3072-bit vs ECC 256-bit.</li>
            <li>256-bit security: RSA 15360-bit vs ECC 512-bit.</li>
            <li>Smaller keys = faster computation, less bandwidth, less storage. Critical for IoT, mobile, TLS.</li>
            <li>Common curves: P-256 (NIST), Curve25519 (modern, used in Signal/WhatsApp).</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Symmetric vs Asymmetric — When to Use Which</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>Asymmetric encryption is ~1000× slower than symmetric. Never used for bulk data.</li>
            <li><strong>Hybrid encryption (used in TLS):</strong> Use asymmetric to securely exchange a symmetric key, then use symmetric for all data. Best of both worlds.</li>
            <li>Example: TLS handshake uses RSA/ECDH to establish session keys, then AES-GCM for all data.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Key Points to Remember</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>RSA security = hardness of integer factorization. Use 2048+ bit keys.</li>
            <li>RSA: public key encrypts, private key decrypts. For signatures: private signs, public verifies.</li>
            <li>Always use OAEP padding for RSA encryption, PSS padding for RSA signatures.</li>
            <li>DH = shared secret exchange, not encryption. Vulnerable to MITM without authentication.</li>
            <li>DHE = ephemeral DH = forward secrecy. Old sessions safe even if key is later compromised.</li>
            <li>ECC = same security, smaller keys, faster. 256-bit ECC ≈ 3072-bit RSA.</li>
            <li>Real systems use hybrid encryption: asymmetric for key exchange + symmetric for data.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};