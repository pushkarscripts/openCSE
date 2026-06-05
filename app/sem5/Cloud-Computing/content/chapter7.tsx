export function Ch7Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Software as a Service (SaaS)</h2>
      <p>SaaS delivers software applications over the internet, accessed via web browsers. No installation or maintenance required.</p>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Characteristics</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Web-Based Access:</strong> Use browser to access applications</li>
        <li><strong>Automatic Updates:</strong> Provider manages all updates</li>
        <li><strong>Multi-Tenant:</strong> Multiple users share the same instance</li>
        <li><strong>Data Accessibility:</strong> Access data from anywhere</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Popular SaaS Applications</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Productivity:</strong> Google Workspace, Microsoft 365, Slack</li>
        <li><strong>Collaboration:</strong> Trello, Asana, Monday.com</li>
        <li><strong>Communication:</strong> Zoom, Microsoft Teams</li>
        <li><strong>CRM:</strong> Salesforce</li>
        <li><strong>Analytics:</strong> Tableau, Looker</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Limitations</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Limited Customization:</strong> Features determined by provider</li>
        <li><strong>Data Security:</strong> Data stored on provider's servers</li>
        <li><strong>Internet Dependency:</strong> Requires stable internet connection</li>
      </ul>
    </div>
  );
}