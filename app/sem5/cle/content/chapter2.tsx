import React from "react";

export const Ch2Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Module II: Cyber Crimes</span>.
        With the rapid integration of digital technologies into all sectors of society, a new class of illegal activities has emerged. Cyber crimes transcend physical borders, offering criminals anonymity and speed. Understanding the mechanisms, classifications, and real-world implications of these crimes is critical to developing robust defense strategies and promoting digital security.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 1. What is a Cyber Crime? */}
      <section>
        <h3 className="section-heading text-2xl font-bold mb-4">1. Defining Cyber Crime</h3>
        <p className="p-text">
          A cyber crime is defined as any unlawful activity that involves a computer, digital device, network, or the internet. These crimes are characterized by how computational resources are utilized in the offense:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-6 shadow-md hover:scale-[1.01] transition-transform">
            <h4 className="font-bold text-xl text-[#5b3a29] mb-3 flex items-center gap-2">
              Computer as a Target
            </h4>
            <p className="text-[#3a251a] text-sm leading-relaxed mb-4">
              The primary objective of the attacker is to compromise the integrity, availability, or confidentiality of a digital system, network, or database.
            </p>
            <div className="bg-[#5b3a29]/10 rounded p-3">
              <h5 className="font-semibold text-xs text-[#5b3a29] uppercase tracking-wider mb-2">Common Attack Vectors:</h5>
              <ul className="list-disc pl-5 text-xs text-[#3a251a] space-y-1">
                <li><strong>Hacking:</strong> Unauthorized intrusion into networks.</li>
                <li><strong>Malware Attacks:</strong> Viruses, worms, and trojans designed to infect.</li>
                <li><strong>Ransomware:</strong> Cryptographic locking of user files.</li>
                <li><strong>DoS/DDoS:</strong> Flooding servers to exhaust resources.</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-6 shadow-md hover:scale-[1.01] transition-transform">
            <h4 className="font-bold text-xl text-[#5b3a29] mb-3 flex items-center gap-2">
              Computer as a Tool
            </h4>
            <p className="text-[#3a251a] text-sm leading-relaxed mb-4">
              The computer or network is used as an instrument to execute traditional, offline crimes on a much larger scale, with greater speed and anonymity.
            </p>
            <div className="bg-[#5b3a29]/10 rounded p-3">
              <h5 className="font-semibold text-xs text-[#5b3a29] uppercase tracking-wider mb-2">Common Attack Vectors:</h5>
              <ul className="list-disc pl-5 text-xs text-[#3a251a] space-y-1">
                <li><strong>Phishing:</strong> Deceptive social engineering schemes.</li>
                <li><strong>Identity Theft:</strong> Unauthorized acquisition of credentials.</li>
                <li><strong>Cyberstalking:</strong> Persistent digital harassment.</li>
                <li><strong>Financial Fraud:</strong> Deceptive online monetary scams.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 2. Specific Cyber Threats */}
      <section>
        <h3 className="section-heading text-2xl font-bold mb-4">2. Deep Dive: Key Cyber Threats</h3>
        <p className="p-text">
          Different cyber crimes employ distinct tactics, techniques, and procedures (TTPs). Let&apos;s analyze the core methods used by cyber criminals:
        </p>

        <div className="space-y-4 my-6">
          {/* Hacking */}
          <div className="bg-[#fae8d7] border-l-4 border-[#7a523c] rounded-r-lg p-5 shadow-sm">
            <h4 className="font-bold text-lg text-[#7a523c] mb-2 flex items-center gap-2">
              ⁘ Hacking
            </h4>
            <p className="text-[#3a251a] text-sm leading-relaxed">
              Hacking refers to gaining unauthorized access to computer systems, networks, or databases. Intrusion techniques include password cracking, exploiting software vulnerabilities (zero-days), or using packet sniffers. Once inside, hackers can steal sensitive intellectual property, alter database configurations, or plant backdoors for future access.
            </p>
          </div>

          {/* Phishing */}
          <div className="bg-[#fae8d7] border-l-4 border-[#7a523c] rounded-r-lg p-5 shadow-sm">
            <h4 className="font-bold text-lg text-[#7a523c] mb-2 flex items-center gap-2">
              ⁘ Phishing
            </h4>
            <p className="text-[#3a251a] text-sm leading-relaxed">
              Phishing is a social engineering technique where attackers impersonate legitimate organizations (like banks, payment gateways, or government agencies) via email, SMS, or clone websites. The goal is to trick users into typing in credentials, PINs, Aadhaar details, or financial keys, which are harvested immediately by the attacker.
            </p>
          </div>

          {/* Online Fraud */}
          <div className="bg-[#fae8d7] border-l-4 border-[#7a523c] rounded-r-lg p-5 shadow-sm">
            <h4 className="font-bold text-lg text-[#7a523c] mb-2 flex items-center gap-2">
              ⁘ Online Financial Fraud
            </h4>
            <p className="text-[#3a251a] text-sm leading-relaxed">
              Online fraud involves manipulating web services, payment systems, or digital marketplaces for fraudulent financial gain. Tactics include creating fake e-commerce storefronts, sending spoofed wire transfer invoices, initiating unauthorized transactions using stolen credit card databases, or running fake investment and cryptocurrency schemes.
            </p>
          </div>

          {/* Cyberstalking */}
          <div className="bg-[#fae8d7] border-l-4 border-[#7a523c] rounded-r-lg p-5 shadow-sm">
            <h4 className="font-bold text-lg text-[#7a523c] mb-2 flex items-center gap-2">
              ⁘ Cyberstalking
            </h4>
            <p className="text-[#3a251a] text-sm leading-relaxed">
              Cyberstalking is the systematic, persistent use of digital channels (social media, email, messaging apps, GPS trackers) to monitor, harass, threaten, or intimidate an individual. Stalkers often exploit public personal records, spread malicious rumors online, or use spyware to compromise a victim&apos;s digital life.
            </p>
          </div>

          {/* Identity Theft */}
          <div className="bg-[#fae8d7] border-l-4 border-[#7a523c] rounded-r-lg p-5 shadow-sm">
            <h4 className="font-bold text-lg text-[#7a523c] mb-2 flex items-center gap-2">
              ⁘ Identity Theft
            </h4>
            <p className="text-[#3a251a] text-sm leading-relaxed">
              Identity theft involves acquiring personal identifiers—such as passwords, social security/Aadhaar numbers, bank account numbers, or digital signatures—without consent. Attackers use this stolen data to impersonate victims, open lines of credit, make illegal purchases, or commit secondary crimes under the victim&apos;s name.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 3. Real-World Case Studies */}
      <section>
        <h3 className="section-heading text-2xl font-bold mb-4">3. Real-World Case Studies</h3>
        <p className="p-text">
          Analyzing actual historical breaches helps highlight the vulnerability of modern networks and the destructive scale of global cyber threats:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-[#7a523c] text-[#fff7ed] rounded-lg p-6 shadow-md border-t-4 border-[#c7a669]">
            <h4 className="font-bold text-xl text-[#fccc7e] mb-3 flex items-center gap-2">
              WannaCry Ransomware (2017)
            </h4>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              WannaCry was a massive global cyber attack that crippled over 200,000 computers across 150 countries. It exploited a Windows SMB vulnerability (EternalBlue) leaked from the NSA.
            </p>
            <div className="bg-[#5b3a29] p-3 rounded text-xs border border-[#c7a669]/30">
              <strong>Key Impact:</strong> Encrypted files and demanded payment in Bitcoin. It severely disrupted hospital systems (like the NHS in the UK), national railways, and major manufacturing operations.
            </div>
          </div>

          <div className="bg-[#fae8d7] text-[#1B0D00] rounded-lg p-6 shadow-md border border-t-4 border-[#7a523c]">
            <h4 className="font-bold text-xl text-[#7a523c] mb-3 flex items-center gap-2">
              Twitter Bitcoin Hijack (2020)
            </h4>
            <p className="text-sm text-[#3a251a] leading-relaxed mb-4">
              A highly coordinated social engineering attack targeting internal Twitter employees. By stealing employee credentials, attackers gained access to Twitter&apos;s administrative dashboard.
            </p>
            <div className="bg-[#7a523c]/10 p-3 rounded text-xs border border-[#7a523c]/30 text-[#3a251a]">
              <strong>Key Impact:</strong> Hijacked VIP accounts (including Barack Obama, Elon Musk, and Apple) to post cryptocurrency double-your-money scams, stealing over $100,000 in hours.
            </div>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section className="bg-[#f7e7bf] border-l-4 border-[#c7a669] rounded-lg p-6 my-6 shadow-md">
        <h4 className="font-bold text-[#5b3a29] text-xl mb-2">Summary</h4>
        <p className="text-[#3a251a] leading-relaxed italic">
          As our reliance on digital infrastructure increases, the risks associated with cyber crimes grow exponentially. Protecting digital resources requires a combination of strict cyber legislation (such as hacking and fraud laws), advanced microarchitectural security shields, and active individual compliance with cyber ethics.
        </p>
      </section>
    </div>
  );
};

export default Ch2Content;