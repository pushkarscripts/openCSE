export function Ch8Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Comparing Service Models</h2>

      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse border border-[#fccc7e]/40 text-sm">
          <thead>
            <tr className="bg-[#fccc7e]/20">
              <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">Aspect</th>
              <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">IaaS</th>
              <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">PaaS</th>
              <th className="border border-[#fccc7e]/40 px-4 py-2 text-left">SaaS</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["You Manage", "App, Data, Runtime, OS", "App, Data", "Data only"],
              ["Provider Manages", "Virtualization, Hardware", "Runtime, OS, Hardware", "Everything"],
              ["Examples", "AWS EC2, Azure VMs", "Heroku, App Engine", "Google Workspace, Salesforce"],
              ["Best For", "Max control", "Rapid development", "Ready-made apps"],
            ].map(([a, i, p, s]) => (
              <tr key={a} className="hover:bg-[#fccc7e]/10">
                <td className="border border-[#fccc7e]/40 px-4 py-2 font-semibold">{a}</td>
                <td className="border border-[#fccc7e]/40 px-4 py-2">{i}</td>
                <td className="border border-[#fccc7e]/40 px-4 py-2">{p}</td>
                <td className="border border-[#fccc7e]/40 px-4 py-2">{s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Serverless Computing</h3>
      <p>Emerging model where developers write code without managing servers.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Examples: AWS Lambda, Google Cloud Functions</li>
        <li>Pay only for actual execution time</li>
        <li>Also known as Functions as a Service (FaaS)</li>
      </ul>
    </div>
  );
}