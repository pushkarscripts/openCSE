export function Ch6Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Platform as a Service (PaaS)</h2>
      <p>PaaS provides a platform for developing, testing, and deploying applications without managing underlying infrastructure.</p>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Key Features</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Development Tools:</strong> IDEs, compilers, debuggers, version control</li>
        <li><strong>Database Management:</strong> Built-in database services</li>
        <li><strong>Application Server:</strong> Ready-to-use runtime environment</li>
        <li><strong>Middleware:</strong> Pre-built integration services</li>
        <li><strong>Security:</strong> Built-in authentication and authorization</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Benefits</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Faster Development:</strong> Pre-built components accelerate development</li>
        <li><strong>Reduced Complexity:</strong> No infrastructure management needed</li>
        <li><strong>Cost Savings:</strong> No hardware investment</li>
        <li><strong>Automatic Updates:</strong> Platform updates managed by provider</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Limitations</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Vendor Dependency:</strong> Limited control over platform features</li>
        <li><strong>Performance Constraints:</strong> Limited customization options</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Examples</h3>
      <p>Heroku, Google App Engine, AWS Elastic Beanstalk, Azure App Service</p>
    </div>
  );
}