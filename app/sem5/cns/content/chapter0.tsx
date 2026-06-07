import React from "react";

export const Ch0Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Welcome to <span className="font-semibold">Cryptography &amp; Network Security</span>. This course teaches you how to protect digital information — from ancient letter-scrambling techniques to the exact protocols running inside your browser right now.
      </p>

      <section>
        <h3 className="section-heading">What is Cryptography?</h3>
        <p className="p-text mt-2">
          Cryptography is the science of hiding information so only the intended recipient can read it. The word comes from Greek: <em>kryptos</em> (hidden) + <em>graphein</em> (writing). It has three core goals:
        </p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Confidentiality:</strong> Only the intended recipient can read the message. Example: your WhatsApp messages are encrypted so even WhatsApp servers cannot read them.</li>
            <li><strong>Integrity:</strong> The message was not altered in transit. Example: when you download software, a hash ensures no byte was changed.</li>
            <li><strong>Authentication:</strong> Proving who you are. Example: digital signatures on emails prove they came from a specific person.</li>
            <li><strong>Non-repudiation:</strong> The sender cannot later deny sending a message. Example: digitally signed contracts are legally binding.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Basic Terminology</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Plaintext:</strong> The original readable message. Example: "Hello World".</li>
            <li><strong>Ciphertext:</strong> The scrambled unreadable output after encryption. Example: "Khoor Zruog" (Caesar cipher, shift 3).</li>
            <li><strong>Encryption:</strong> Converting plaintext → ciphertext using a key and algorithm.</li>
            <li><strong>Decryption:</strong> Converting ciphertext → plaintext using a key and algorithm.</li>
            <li><strong>Key:</strong> A secret value that controls the encryption/decryption. Without the key, you cannot read the message.</li>
            <li><strong>Algorithm (Cipher):</strong> The mathematical procedure used. Examples: AES, RSA, DES.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Types of Attacks on Cryptosystems</h3>
        <p className="p-text mt-2">Attackers (called adversaries or cryptanalysts) try to break encryption in several ways:</p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Ciphertext-only attack:</strong> Attacker only has the ciphertext and tries to find the plaintext or key. Hardest for the attacker.</li>
            <li><strong>Known-plaintext attack:</strong> Attacker has some plaintext-ciphertext pairs and tries to deduce the key.</li>
            <li><strong>Chosen-plaintext attack:</strong> Attacker can choose plaintexts and get their encryptions. Common in practice.</li>
            <li><strong>Chosen-ciphertext attack:</strong> Attacker can choose ciphertexts and get their decryptions. Used to attack RSA.</li>
            <li><strong>Brute Force:</strong> Try every possible key until one works. Always possible — the goal is to make it take billions of years.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Unit 1: Symmetric Encryption</h3>
        <p className="p-text mt-2">
          Same key used for encryption and decryption. Fast. Used for bulk data. Problem: how do you securely share the key in the first place?
        </p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Classical Ciphers:</strong> Caesar, Vigenère, Playfair — historical, all broken.</li>
            <li><strong>Block vs Stream Ciphers:</strong> Block encrypts fixed chunks; stream encrypts bit by bit.</li>
            <li><strong>DES:</strong> 56-bit key, 64-bit block, 16-round Feistel. Broken by brute force since 1999.</li>
            <li><strong>Triple-DES:</strong> Applies DES 3 times. Effective 112-bit security. Being phased out.</li>
            <li><strong>AES:</strong> Current gold standard. 128-bit block, 128/192/256-bit keys, 10/12/14 rounds.</li>
            <li><strong>Modes of Operation:</strong> ECB, CBC, CFB, OFB, CTR — how to handle data longer than one block.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Unit 2: Asymmetric Encryption</h3>
        <p className="p-text mt-2">
          Two mathematically linked keys: public key (shareable) and private key (secret). Solves the key distribution problem. Much slower than symmetric — used for small data and key exchange.
        </p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>RSA:</strong> Based on difficulty of factoring large numbers. Used for encryption and signatures.</li>
            <li><strong>Diffie-Hellman:</strong> Lets two parties agree on a shared secret over a public channel. Based on discrete logarithm.</li>
            <li><strong>ECC:</strong> Same security as RSA with much smaller keys. Used in mobile and TLS.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Unit 3: Hash Functions &amp; Digital Signatures</h3>
        <p className="p-text mt-2">
          Hash functions produce a fixed-length fingerprint of any data. Digital signatures combine hashing with asymmetric encryption to prove identity and integrity.
        </p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Hash Properties:</strong> One-way, deterministic, collision-resistant.</li>
            <li><strong>Algorithms:</strong> MD5 (broken), SHA-1 (broken), SHA-256 (current standard), SHA-3.</li>
            <li><strong>HMAC:</strong> Hash + secret key = authentication.</li>
            <li><strong>Digital Signatures:</strong> Sign with private key, verify with public key.</li>
            <li><strong>PKI:</strong> Certificate Authorities issue X.509 certificates to prove identity.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Unit 4: Network Security Protocols</h3>
        <p className="p-text mt-2">
          Real-world deployment of cryptography in protocols you use every day.
        </p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>SSL/TLS:</strong> Secures web traffic. TLS 1.3 is the current standard.</li>
            <li><strong>HTTPS:</strong> HTTP over TLS. The padlock in your browser.</li>
            <li><strong>IPSec:</strong> Network-layer security. Used in VPNs.</li>
            <li><strong>Kerberos:</strong> Ticket-based authentication in enterprise networks (Windows AD).</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Unit 5: Firewalls, IDS &amp; Attacks</h3>
        <p className="p-text mt-2">
          How networks are defended and what common attacks look like.
        </p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Firewalls:</strong> Packet filtering, stateful, application-layer, NGFW.</li>
            <li><strong>IDS/IPS:</strong> Detect and block intrusions. Signature vs anomaly based.</li>
            <li><strong>Network Attacks:</strong> DoS, DDoS, MITM, Replay, ARP Spoofing, DNS Poisoning.</li>
            <li><strong>Application Attacks:</strong> SQLi, XSS, CSRF.</li>
            <li><strong>Crypto Attacks:</strong> Brute force, dictionary, birthday, side-channel.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};