export function Ch12Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Community Cloud</h2>
      <p>Infrastructure shared by organizations with shared concerns, interests, or missions.</p>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Examples</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Healthcare Community Cloud:</strong> HIPAA-compliant cloud for healthcare providers</li>
        <li><strong>Financial Community Cloud:</strong> Secure cloud for financial institutions</li>
        <li><strong>Government Community Cloud:</strong> Dedicated to government agencies</li>
        <li><strong>Research Community Cloud:</strong> For academic and research institutions</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Advantages</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Reduced costs through sharing</li>
        <li>Designed for specific industry compliance</li>
        <li>Easy collaboration among members</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Disadvantages</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Limited flexibility for specific community</li>
        <li>Capacity limited to community needs</li>
        <li>Dependent on community partnerships</li>
      </ul>
    </div>
  );
}