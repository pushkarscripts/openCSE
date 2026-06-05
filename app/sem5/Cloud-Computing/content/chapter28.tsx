export function Ch28Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Managing Cloud Containers</h2>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Container Lifecycle</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Build → Push → Pull → Run → Monitor → Update → Delete</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Container Registries</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Docker Hub:</strong> Public registry</li>
        <li><strong>Amazon ECR:</strong> AWS container registry</li>
        <li><strong>Azure Container Registry</strong></li>
        <li><strong>Google Container Registry</strong></li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Deployment Strategies</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Rolling:</strong> Gradual replacement of old with new</li>
        <li><strong>Blue-Green:</strong> Two identical environments, switch traffic</li>
        <li><strong>Canary:</strong> Test new version with subset of users</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Scaling Strategies</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>HPA:</strong> Horizontal Pod Autoscaling based on metrics</li>
        <li><strong>Cluster Autoscaler:</strong> Add/remove nodes automatically</li>
        <li>Set resource requests and limits to prevent abuse</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Security</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Runtime security monitoring</li>
        <li>Vulnerability scanning of images</li>
        <li>RBAC in Kubernetes</li>
        <li>Network segmentation with namespaces</li>
      </ul>
    </div>
  );
}