import React from "react";

export const Ch1Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Module I: Introduction to Cyber Laws & Ethics</span>.
        As the digital footprint of humanity expands, the virtual world (cyberspace) has become a crucial extension of our daily lives. To ensure this space remains secure, fair, and moral, two key pillars have been established: <strong>Cyber Laws</strong> (the legal framework) and <strong>Cyber Ethics</strong> (the moral framework). Together, they regulate interactions, protect users, and guide our behavior online.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 1. What are Cyber Laws? */}
      <section>
        <h3 className="section-heading text-2xl font-bold mb-4">1. What are Cyber Laws?</h3>
        <p className="p-text">
          Cyber laws encompass the legal rules and regulations that govern the use of computers, digital systems, networks, and the internet. They define the boundaries of acceptable electronic conduct, give legal validity to digital activities, and establish penalties for computer-related offenses.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-3 text-[#fccc7e]">Core Objectives of Cyber Laws</h4>
        <p className="p-text mb-4">
          To provide order in an otherwise decentralized and global digital realm, cyber legislation focuses on several primary objectives:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          <div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-5 shadow-sm hover:scale-[1.02] transition-transform">
            <h5 className="font-bold text-lg text-[#5b3a29] mb-2">User Protection</h5>
            <p className="text-[#3a251a] text-sm leading-relaxed">
              Safeguards individuals, businesses, and government entities from predatory behavior, online harassment, and digital exploitation in cyberspace.
            </p>
          </div>

          <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-5 shadow-sm hover:scale-[1.02] transition-transform">
            <h5 className="font-bold text-lg text-[#5b3a29] mb-2">Crime Prevention</h5>
            <p className="text-[#3a251a] text-sm leading-relaxed">
              Deter and penalize malicious acts such as hacking, identity theft, financial fraud, phishing, ransomware, and denial-of-service attacks.
            </p>
          </div>

          <div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-5 shadow-sm hover:scale-[1.02] transition-transform">
            <h5 className="font-bold text-lg text-[#5b3a29] mb-2">Secure Transactions</h5>
            <p className="text-[#3a251a] text-sm leading-relaxed">
              Establishes trust in e-commerce, online banking, and electronic contracts by ensuring confidentiality, integrity, and authenticity.
            </p>
          </div>

          <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-5 shadow-sm hover:scale-[1.02] transition-transform">
            <h5 className="font-bold text-lg text-[#5b3a29] mb-2">Data & Privacy Safeguards</h5>
            <p className="text-[#3a251a] text-sm leading-relaxed">
              Regulates how corporate and public institutions collect, store, transmit, and process personal and sensitive user data.
            </p>
          </div>

          <div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-5 shadow-sm hover:scale-[1.02] transition-transform md:col-span-2 lg:col-span-1">
            <h5 className="font-bold text-lg text-[#5b3a29] mb-2">Legal Recognition</h5>
            <p className="text-[#3a251a] text-sm leading-relaxed">
              Validates electronic records, digital signatures, and paperless documents, putting them on par with physical paper equivalents.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 2. Need for Cyber Laws */}
      <section>
        <h3 className="section-heading text-2xl font-bold mb-4">2. The Need for Cyber Laws</h3>
        <p className="p-text">
          Traditional laws were written in a physical era where evidence was tangible, borders were absolute, and transactions were paper-bound. Cyberspace, however, is virtual, borderless, instantaneous, and highly anonymous. Standard legal frameworks fail to address these unique dimensions, creating an urgent need for specialized cyber laws:
        </p>

        <div className="bg-[#7a523c] text-[#fff7ed] rounded-lg p-6 my-6 shadow-md border-l-4 border-[#c7a669]">
          <h4 className="font-semibold text-lg mb-3 text-[#f3e7c2]">Why Cyberspace Requires Distinct Legal Structures:</h4>
          <ul className="list-disc pl-6 space-y-3 text-sm md:text-base opacity-95">
            <li>
              <strong>Exponential Rise in Cyber Crimes:</strong> Hackers exploit system vulnerabilities across international borders, making traditional local policing ineffective without global cyber law frameworks.
            </li>
            <li>
              <strong>Intangible Assets and IPR:</strong> Digital goods (music, software, ebooks) can be copied and distributed worldwide in seconds, requiring modern Intellectual Property Rights (IPR) enforcement.
            </li>
            <li>
              <strong>E-Commerce and Digital Economy:</strong> Credit card processing, crypto assets, online trade, and digital contracts need structured dispute resolution and security standards.
            </li>
            <li>
              <strong>Systemic Threat to Critical Infrastructure:</strong> State-sponsored cyber warfare, database breaches, and power grid hacks present existential security threats that demand strict legal accountability.
            </li>
          </ul>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 3. Cyber Ethics and its Importance */}
      <section>
        <h3 className="section-heading text-2xl font-bold mb-4">3. Cyber Ethics and its Importance</h3>
        <p className="p-text">
          While cyber laws are rules enforced by threat of legal penalty, <strong>Cyber Ethics</strong> represents the internal moral compass that guides how we interact online. Ethics is about doing the right thing in cyberspace even when no one is watching and when a law might not explicitly cover the behavior.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-3 text-[#fccc7e]">Key Principles of Cyber Ethics</h4>
        
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[#c7a669] text-[#2b1d0f]">
            <thead>
              <tr className="bg-[#5b3a29] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3 text-left w-1/4">Principle</th>
                <th className="border border-[#c7a669] p-3 text-left">Description</th>
                <th className="border border-[#c7a669] p-3 text-left">Ethical Application</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold text-left">Respect for Privacy</td>
                <td className="border border-[#c7a669] p-3 text-sm">Treating other users&apos; personal files, communications, and data as private domains.</td>
                <td className="border border-[#c7a669] p-3 text-sm text-[#5b3a29] font-medium">Do not read, share, or leak emails, texts, or private files without explicit consent.</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-3 font-semibold text-left">Authorized Access</td>
                <td className="border border-[#c7a669] p-3 text-sm">Avoiding entering systems or reading documents that you have not been granted permission to access.</td>
                <td className="border border-[#c7a669] p-3 text-sm text-[#5b3a29] font-medium">Abstain from unauthorized port scanning, shoulder surfing, or brute forcing passwords.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold text-left">IPR Respect</td>
                <td className="border border-[#c7a669] p-3 text-sm">Acknowledging and compensating the creators of digital work and software.</td>
                <td className="border border-[#c7a669] p-3 text-sm text-[#5b3a29] font-medium">Avoid piracy, properly attribute sources, and buy valid licenses for software and media.</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-3 font-semibold text-left">Truth and Authenticity</td>
                <td className="border border-[#c7a669] p-3 text-sm">Ensuring that the information you create, amplify, or share is truthful and verifiable.</td>
                <td className="border border-[#c7a669] p-3 text-sm text-[#5b3a29] font-medium">Do not generate fake news, distribute deceptive deepfakes, or participate in online defamation.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold text-left">Responsible Use</td>
                <td className="border border-[#c7a669] p-3 text-sm">Using computational resources in a manner that does not harm, harass, or degrade the systems or lives of others.</td>
                <td className="border border-[#c7a669] p-3 text-sm text-[#5b3a29] font-medium">Do not engage in cyberbullying, trolling, or spreading computer viruses.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 4. Digital Rights and Responsibilities */}
      <section>
        <h3 className="section-heading text-2xl font-bold mb-4">4. Digital Rights vs. Digital Responsibilities</h3>
        <p className="p-text">
          Just as citizens have rights and duties in the physical world, digital citizens have specific freedoms and obligations when navigating cyberspace. Balancing these rights and responsibilities is essential to maintaining a safe online community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-[#5b3a29] text-[#fff7ed] rounded-lg p-6 shadow-md border-t-4 border-[#c7a669]">
            <h4 className="font-bold text-xl text-[#fccc7e] mb-4 flex items-center gap-2">
              🛡️ Your Digital Rights
            </h4>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <div>
                  <strong>Right to Privacy:</strong> The freedom to control who collects, reviews, and uses your personal identity and digital activity logs.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <div>
                  <strong>Right to Information:</strong> Free access to educational, historical, public interest, and scientific datasets across global networks.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <div>
                  <strong>Freedom of Expression:</strong> The liberty to voice ideas, criticism, and art online without arbitrary censorship, provided it doesn&apos;t incite violence.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <div>
                  <strong>Right to Digital Security:</strong> Access to encryption tools, firewalls, and security protocols to defend personal hardware and data.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#fae8d7] text-[#1B0D00] rounded-lg p-6 shadow-md border border-t-4 border-[#7a523c]">
            <h4 className="font-bold text-xl text-[#7a523c] mb-4 flex items-center gap-2">
              ⚖️ Your Digital Responsibilities
            </h4>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">★</span>
                <div>
                  <strong>Abiding by the Law:</strong> Respecting national and international cyber regulations and avoiding criminal digital exploits.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">★</span>
                <div>
                  <strong>Respecting Privacy:</strong> Refraining from extracting, caching, or sharing private details of classmates, colleagues, or strangers.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">★</span>
                <div>
                  <strong>Protecting Personal Info:</strong> Exercising caution with personal credentials, using strong passwords, and not leaking sensitive system files.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">★</span>
                <div>
                  <strong>Opposing Harassment:</strong> Avoiding cyberbullying, online threat generation, stalker behaviors, and spreading hate speech.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section className="bg-[#f7e7bf] border-l-4 border-[#c7a669] rounded-lg p-6 my-6 shadow-md">
        <h4 className="font-bold text-[#5b3a29] text-xl mb-2">Summary</h4>
        <p className="text-[#3a251a] leading-relaxed italic">
          Cyber laws provide the legal teeth to penalize crimes and secure digital commerce, whereas Cyber Ethics represents the internal moral compass guiding everyday internet users. Together, these frameworks establish the foundation for a secure, ethical, and collaborative digital future for all global citizens.
        </p>
      </section>
    </div>
  );
};

export default Ch1Content;
