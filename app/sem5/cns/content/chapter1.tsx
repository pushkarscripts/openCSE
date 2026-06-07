import React from "react";

export const Ch1Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Symmetric encryption uses the <span className="font-semibold">same key</span> for both encryption and decryption. It is fast, efficient, and ideal for encrypting large amounts of data — but both parties must securely share the key beforehand.
      </p>

      <section>
        <h3 className="section-heading">Classical Ciphers</h3>
        <p className="p-text mt-2">These are historical ciphers — all broken today, but important for understanding core concepts like substitution and transposition.</p>
        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Caesar Cipher</h4>
          <ul className="section-list space-y-2">
            <li>Shifts every letter of the alphabet by a fixed number called the <strong>key</strong>.</li>
            <li><strong>Example (shift 3):</strong> A→D, B→E, C→F ... Z→C. So "HELLO" becomes "KHOOR".</li>
            <li>To decrypt: shift back by the same amount. "KHOOR" → shift back 3 → "HELLO".</li>
            <li><strong>Key space:</strong> Only 25 possible keys (shifts 1–25). An attacker can try all 25 in seconds — trivially broken by brute force.</li>
            <li><strong>Weakness:</strong> Also vulnerable to frequency analysis — 'E' is the most common letter in English, so the most frequent letter in ciphertext is likely 'E' shifted.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Vigenère Cipher</h4>
          <ul className="section-list space-y-2">
            <li>Uses a <strong>keyword</strong> instead of a single shift. Each letter of the keyword gives a different shift for each letter of the plaintext.</li>
            <li><strong>Example:</strong> Plaintext = "HELLO", Key = "KEY" (K=10, E=4, Y=24, then repeats).</li>
            <li>H(+10)=R, E(+4)=I, L(+24)=J, L(+10)=V, O(+4)=S → Ciphertext = "RIJVS".</li>
            <li>Much harder than Caesar because the same letter can encrypt to different ciphertext letters depending on position.</li>
            <li><strong>Broken by:</strong> Kasiski test (find repeated sequences to deduce key length) + frequency analysis per key position.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Playfair Cipher</h4>
          <ul className="section-list space-y-2">
            <li>Encrypts <strong>pairs of letters (digraphs)</strong> instead of single letters, using a 5×5 key matrix.</li>
            <li>The matrix is built from a keyword (remove duplicates, fill remaining letters A–Z, combine I/J).</li>
            <li><strong>Rules:</strong> Same row → shift right. Same column → shift down. Otherwise → form a rectangle and swap corners.</li>
            <li><strong>Example:</strong> Keyword "MONARCHY" → matrix built → "HI" encrypts to "BM".</li>
            <li>Stronger than Caesar/Vigenère because digraph frequency is harder to analyze (26²=676 possible pairs vs 26 letters).</li>
            <li><strong>Weakness:</strong> Still broken by digraph frequency analysis with enough ciphertext.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Block vs Stream Ciphers</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Block Cipher:</strong> Divides plaintext into fixed-size blocks (e.g. 64-bit or 128-bit) and encrypts each block as a unit. Examples: DES (64-bit blocks), AES (128-bit blocks). If the last block is smaller, it is padded.</li>
            <li><strong>Stream Cipher:</strong> Encrypts one bit or byte at a time using a keystream XORed with plaintext. Example: RC4. Very fast — used in real-time applications like video streaming. Weakness: keystream must never be reused.</li>
            <li><strong>Key difference:</strong> Block ciphers are more secure and widely used today. Stream ciphers are faster but trickier to implement correctly.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Confusion and Diffusion</h3>
        <p className="p-text mt-2">Two principles defined by Claude Shannon (1949) that every strong cipher must achieve:</p>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>Confusion:</strong> Make the relationship between key and ciphertext as complex as possible. Achieved by substitution (S-boxes). Goal: changing one key bit should change many ciphertext bits unpredictably.</li>
            <li><strong>Diffusion:</strong> Spread the influence of one plaintext bit across many ciphertext bits. Achieved by permutation (P-boxes). Goal: changing one plaintext bit should change ~half the ciphertext bits (avalanche effect).</li>
            <li><strong>Avalanche Effect:</strong> A 1-bit change in plaintext or key should flip ~50% of ciphertext bits. DES and AES both achieve this.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">DES (Data Encryption Standard)</h3>
        <p className="p-text mt-2">
          DES was adopted as the US federal standard in 1977. It uses a <strong>56-bit key</strong> and <strong>64-bit blocks</strong> with a Feistel network of 16 rounds. In 1999, a dedicated machine cracked DES in 22 hours — it is now considered broken.
        </p>
        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Feistel Network Structure</h4>
          <ul className="section-list space-y-2">
            <li>The 64-bit block is split into two 32-bit halves: Left (L₀) and Right (R₀).</li>
            <li><strong>Each of the 16 rounds:</strong> L_i = R_(i-1) and R_i = L_(i-1) XOR F(R_(i-1), K_i)</li>
            <li>The function F applies expansion (32→48 bits), XOR with subkey, S-box substitution, P-box permutation.</li>
            <li><strong>Key insight:</strong> Feistel structure is self-inverting — decryption uses the same circuit with subkeys in reverse order.</li>
            <li>After 16 rounds, the two halves are swapped and recombined to give 64-bit ciphertext.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">S-boxes (Substitution Boxes)</h4>
          <ul className="section-list space-y-2">
            <li>DES has 8 S-boxes. Each takes a 6-bit input and produces a 4-bit output.</li>
            <li>S-boxes are the only non-linear component in DES — they provide confusion.</li>
            <li><strong>How they work:</strong> The outer 2 bits of the 6-bit input select the row; the inner 4 bits select the column. The table value at that position is the output.</li>
            <li><strong>Example:</strong> Input 011011 → outer bits 01=row 1, inner 1101=col 13 → output from table = 5 (0101).</li>
            <li>Without S-boxes, DES would be purely linear and breakable with linear algebra.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">DES Key Schedule</h4>
          <ul className="section-list space-y-2">
            <li>The 64-bit key has 8 parity bits → effective key size is 56 bits.</li>
            <li>A Permuted Choice (PC-1) selects 56 bits, splits into two 28-bit halves C and D.</li>
            <li>Each round: C and D are left-rotated by 1 or 2 positions (schedule varies per round).</li>
            <li>PC-2 selects 48 bits from the 56-bit combined CD to form each round's subkey.</li>
            <li>16 subkeys of 48 bits each are generated — one per round.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Triple-DES (3DES / TDEA)</h4>
          <ul className="section-list space-y-2">
            <li>Created to extend DES life without a new algorithm. Applies DES three times.</li>
            <li><strong>EDE Mode:</strong> C = E(K3, D(K2, E(K1, P))). Encrypt with K1, Decrypt with K2, Encrypt with K3.</li>
            <li>Using K1 = K3 ≠ K2 gives <strong>2-key 3DES</strong> with effective 112-bit security.</li>
            <li>Using K1 ≠ K2 ≠ K3 gives <strong>3-key 3DES</strong> with effective 168-bit security.</li>
            <li><strong>Why EDE?</strong> If K1=K2=K3, EDE reduces to single DES — backward compatible.</li>
            <li><strong>Problem:</strong> 3× slower than DES, 48× slower than AES. Being phased out — deprecated by NIST in 2023.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">AES (Advanced Encryption Standard)</h3>
        <p className="p-text mt-2">
          AES was selected in 2001 after a 5-year competition. The winner was the Rijndael algorithm by Joan Daemen and Vincent Rijmen. It uses a <strong>128-bit block</strong> and key sizes of <strong>128, 192, or 256 bits</strong> with 10, 12, or 14 rounds respectively. AES is not a Feistel network — it is a <strong>substitution-permutation network (SPN)</strong>.
        </p>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">AES State Matrix</h4>
          <ul className="section-list space-y-2">
            <li>The 128-bit block is arranged as a 4×4 matrix of bytes called the <strong>state</strong>.</li>
            <li>Each cell holds one byte (8 bits). Operations are performed on this matrix each round.</li>
            <li>Before round 1, an initial AddRoundKey is applied. Then 9 full rounds + 1 final round (no MixColumns).</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">AES Round Operations (in order every round)</h4>
          <ul className="section-list space-y-2">
            <li><strong>1. SubBytes:</strong> Every byte in the 4×4 state is replaced using a fixed S-box lookup table. The AES S-box is constructed algebraically using multiplicative inverse in GF(2⁸) + affine transform. This provides non-linearity (confusion). Example: byte 0x53 → 0xED after S-box.</li>
            <li><strong>2. ShiftRows:</strong> Each row of the state matrix is cyclically shifted left. Row 0: no shift. Row 1: shift left 1. Row 2: shift left 2. Row 3: shift left 3. This moves bytes to different columns, preventing columns from being encrypted independently (diffusion).</li>
            <li><strong>3. MixColumns:</strong> Each column of the state is treated as a polynomial over GF(2⁸) and multiplied by a fixed polynomial. Each byte depends on all 4 bytes of the column. This provides thorough diffusion — one changed byte affects the entire column. SKIPPED in the final round.</li>
            <li><strong>4. AddRoundKey:</strong> Each byte of the state is XORed with the corresponding byte of the round key. Simple but secure because XOR with an unknown key is unbreakable. This is the only step that involves the key.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">AES Key Schedule</h4>
          <ul className="section-list space-y-2">
            <li>AES-128: 10 round keys derived from 1 original key. 11 keys total (including initial).</li>
            <li>Key expansion uses SubWord (S-box on a word), RotWord (rotate 4 bytes), and XOR with round constants (Rcon).</li>
            <li>Each round key is 128 bits = 4 words = 16 bytes.</li>
          </ul>
        </div>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Why AES is Secure</h4>
          <ul className="section-list space-y-2">
            <li>Best known attack against AES-128 requires 2¹²⁶ operations — effectively impossible.</li>
            <li>No practical attack exists. AES has been the global standard for 20+ years.</li>
            <li>Hardware acceleration (AES-NI instructions on modern CPUs) makes it extremely fast.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Modes of Operation</h3>
        <p className="p-text mt-2">Block ciphers encrypt fixed-size blocks. Real data is larger. Modes of operation define how to handle multiple blocks securely.</p>

        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li><strong>ECB (Electronic Codebook):</strong> Each block encrypted independently with the same key. INSECURE — identical plaintext blocks produce identical ciphertext blocks. Famous example: ECB-encrypted penguin image still shows the penguin outline. Never use for real data.</li>
            <li><strong>CBC (Cipher Block Chaining):</strong> Each plaintext block is XORed with the previous ciphertext block before encryption. Requires a random Initialization Vector (IV) for the first block. Identical plaintexts produce different ciphertexts. Most common secure mode. Weakness: sequential — cannot be parallelized for encryption.</li>
            <li><strong>CFB (Cipher Feedback):</strong> Converts block cipher into a stream cipher. Previous ciphertext encrypted, then XORed with plaintext. Can encrypt data smaller than one block. Used for streaming data.</li>
            <li><strong>OFB (Output Feedback):</strong> Generates a keystream independently of plaintext/ciphertext, then XORs. Errors don't propagate. Used in noisy channels like satellite communication.</li>
            <li><strong>CTR (Counter Mode):</strong> Encrypts a counter value (nonce + counter) and XORs with plaintext. Fully parallelizable — different blocks can be encrypted simultaneously. Random access is possible. Used in modern protocols. No padding needed.</li>
            <li><strong>GCM (Galois/Counter Mode):</strong> CTR mode + authentication tag. Provides both encryption and integrity. Used in TLS 1.3, AES-GCM is the dominant mode today.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Key Points to Remember</h3>
        <div className="card mt-4">
          <ul className="section-list space-y-2">
            <li>DES = 56-bit key, 64-bit block, 16 Feistel rounds. BROKEN.</li>
            <li>3DES = EDE mode, 112 or 168-bit effective key. Being phased out.</li>
            <li>AES = 128-bit block, 128/192/256-bit key, 10/12/14 rounds. SPN structure.</li>
            <li>AES round order: SubBytes → ShiftRows → MixColumns → AddRoundKey. Final round skips MixColumns.</li>
            <li>Confusion = S-boxes. Diffusion = ShiftRows + MixColumns.</li>
            <li>ECB is always insecure. Use CBC, CTR, or GCM.</li>
            <li>CTR and GCM are parallelizable — preferred for modern systems.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};