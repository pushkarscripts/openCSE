export function Ch4Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Cloud vs On-Premises</h2>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Comparison</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#fccc7e]/40 text-sm mt-2">
          <thead>
            <tr className="bg-[#fccc7e]/20">
              <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">Factor</th>
              <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">Cloud</th>
              <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">On-Premises</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Capital Investment", "Low (pay-as-you-go)", "High upfront"],
              ["Maintenance", "Provider responsible", "Your responsibility"],
              ["Scalability", "High and automatic", "Limited, needs hardware"],
              ["Security", "Shared responsibility", "Your responsibility"],
              ["Latency", "Network dependent", "Local and fast"],
              ["Customization", "Limited", "Full control"],
              ["Time to Deploy", "Fast", "Slow"],
            ].map(([f, c, o]) => (
              <tr key={f} className="hover:bg-[#fccc7e]/10">
                <td className="border border-[#fccc7e]/40 px-4 py-2 font-semibold">{f}</td>
                <td className="border border-[#fccc7e]/40 px-4 py-2">{c}</td>
                <td className="border border-[#fccc7e]/40 px-4 py-2">{o}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">When to Choose Cloud</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Need flexibility and scalability</li>
        <li>Lower upfront costs important</li>
        <li>Focus on core business</li>
        <li>Need global reach</li>
        <li>Rapid deployment required</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">When to Choose On-Premises</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Maximum control needed</li>
        <li>Low latency requirements critical</li>
        <li>Sensitive data security</li>
        <li>Compliance with specific regulations</li>
        <li>Predictable, stable workloads</li>
      </ul>
    </div>
  );
}