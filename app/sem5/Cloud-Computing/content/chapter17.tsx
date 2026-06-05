export function Ch17Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Identity & Access Management</h2>
      <p>IAM controls who has access to resources and what they can do.</p>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Key Concepts</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Authentication:</strong> Verifying user identity (who you are)</li>
        <li><strong>Authorization:</strong> Determining what user can do (permissions)</li>
        <li><strong>Accounting:</strong> Tracking user actions for audit</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">IAM Components</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Users:</strong> Individual identities</li>
        <li><strong>Roles:</strong> Set of permissions</li>
        <li><strong>Policies:</strong> Rules defining access</li>
        <li><strong>Groups:</strong> Collection of users with same permissions</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">MFA Types</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Something You Know:</strong> Password, PIN</li>
        <li><strong>Something You Have:</strong> Phone, hardware token</li>
        <li><strong>Something You Are:</strong> Biometric data</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Best Practices</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Principle of Least Privilege</li>
        <li>Regular Access Reviews</li>
        <li>Audit Logging for all access</li>
        <li>Disable unused accounts</li>
      </ul>
    </div>
  );
}