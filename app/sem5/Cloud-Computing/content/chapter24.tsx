export function Ch24Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Provider Comparison & Cost Analysis</h2>
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse border border-[#fccc7e]/40 text-sm">
          <thead><tr className="bg-[#fccc7e]/20">
            <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">Factor</th>
            <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">AWS</th>
            <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">Azure</th>
            <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">GCP</th>
          </tr></thead>
          <tbody>
            {[
              ["Maturity","Most mature (2006)","Strong enterprise","Growing fast"],
              ["Services","200+ services","180+ services","150+ services"],
              ["Best For","Enterprises","Microsoft shops","Data/ML teams"],
              ["Pricing","Pay-as-you-go","Pay-as-you-go","Pay-as-you-go"],
            ].map(([f,a,az,g])=>(
              <tr key={f} className="hover:bg-[#fccc7e]/10">
                <td className="border border-[#fccc7e]/40 px-4 py-2 font-semibold">{f}</td>
                <td className="border border-[#fccc7e]/40 px-4 py-2">{a}</td>
                <td className="border border-[#fccc7e]/40 px-4 py-2">{az}</td>
                <td className="border border-[#fccc7e]/40 px-4 py-2">{g}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Pricing Models</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>On-demand / Pay-as-you-go:</strong>Pay per second/minute/hour of use. No commitment. Highest unit price.</li>
        <li><strong>Reserved Instances (AWS) / Reserved Capacity (Azure) / Committed Use (GCP): </strong>1 or 3 year commitment — up to 72% discount vs on-demand.</li>
        <li><strong>Spot Instances (AWS) / Spot VMs (Azure) / Preemptible VMs (GCP): </strong>Use spare capacity at 60–90% discount. Can be interrupted with short notice. Ideal for batch jobs, ML training.</li>
        <li><strong>Savings Plans (AWS):</strong>Flexible pricing based on consistent usage amount, not specific instance types.</li>
        <li><strong>Free Tiers: </strong>All three providers offer free tiers — AWS Free Tier (12 months), Azure Free Tier, GCP Always Free tier.</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Cost Optimization Strategies</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Right Sizing:</strong> Use appropriate instance sizes</li>
        <li><strong>Reserved Instances:</strong> Commit for 1-3 years for discount</li>
        <li><strong>Spot/Preemptible:</strong> Use spare capacity for non-critical work</li>
        <li><strong>Auto-Scaling:</strong> Scale down when not needed</li>
        <li><strong>Storage Optimization:</strong> Use appropriate storage tiers</li>
      </ul>
    </div>
  );
}