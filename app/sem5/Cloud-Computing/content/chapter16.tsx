export function Ch16Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">High Availability & Disaster Recovery</h2>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Availability Tiers</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#fccc7e]/40 text-sm mt-2">
          <thead><tr className="bg-[#fccc7e]/20">
            <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">Level</th>
            <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">Uptime</th>
            <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">Downtime/Year</th>
          </tr></thead>
          <tbody>
            {[["Two Nines","99%","87.6 hours"],["Three Nines","99.9%","8.76 hours"],["Four Nines","99.99%","52.6 minutes"],["Five Nines","99.999%","5.26 minutes"]].map(([l,u,d])=>(
              <tr key={l} className="hover:bg-[#fccc7e]/10">
                <td className="border border-[#fccc7e]/40 px-4 py-2">{l}</td>
                <td className="border border-[#fccc7e]/40 px-4 py-2">{u}</td>
                <td className="border border-[#fccc7e]/40 px-4 py-2">{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">HA Strategies</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Redundancy:</strong> Duplicate critical components</li>
        <li><strong>Failover:</strong> Automatic switch to backup</li>
        <li><strong>Load Balancing:</strong> Distribute load across servers</li>
        <li><strong>Health Checks:</strong> Monitor component health</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">DR Strategies</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Backup and Restore:</strong> Regular backups, restore when needed</li>
        <li><strong>Pilot Light:</strong> Minimal version always running</li>
        <li><strong>Warm Standby:</strong> Ready-to-assume secondary system</li>
        <li><strong>Hot Standby:</strong> Active/active configuration</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Key Terms</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>RTO:</strong> Recovery Time Objective — target time to recover</li>
        <li><strong>RPO:</strong> Recovery Point Objective — maximum acceptable data loss</li>
      </ul>
    </div>
  );
}