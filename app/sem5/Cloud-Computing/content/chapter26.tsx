export function Ch26Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Container Best Practices</h2>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Image Best Practices</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Use official base images from Docker Hub — they are regularly updated and security-patched</li>
        <li>Use specific image tags (e.g., node:18.17.1-alpine) never latest in production — ensures reproducibility</li>
        <li>Use minimal base images (Alpine Linux ~5MB vs Ubuntu ~70MB) to reduce attack surface and image size</li>
        <li>Order Dockerfile instructions for cache efficiency</li>
        <li>Never store secrets (API keys, passwords) in images. Use environment variables or secrets managers.</li>
        <li>Scan images for vulnerabilities using tools like Trivy, Snyk, or Docker Scout before deployment</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Security Best Practices</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Never run containers as root user</li>
        <li>Scan images regularly for vulnerabilities</li>
        <li>Keep base images updated</li>
        <li>Use secrets managers, not environment variables for sensitive data</li>
        <li>Network policies: Limit which containers can talk to each other</li>
        <li>Set resource limits (CPU, memory) to prevent a single container from starving others</li>
      </ul>

       <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">CI/CD Pipeline for Containers</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Developer pushes code to Git repository.</li>
        <li>CI system (GitHub Actions, Jenkins, GitLab CI) automatically builds Docker image</li>
        <li>Image is scanned for vulnerabilities</li>
        <li>Image pushed to container registry (ECR, ACR, GCR, Docker Hub)</li>
        <li>CD system (ArgoCD, Flux, Spinnaker) deploys new image to Kubernetes cluster</li>
        <li>Automated tests run against deployed service</li>
        <li>Rollback automatically triggered if health checks fail</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Runtime Best Practices</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Set CPU and memory resource limits</li>
        <li>Send logs to stdout/stderr</li>
        <li>Use .dockerignore to exclude unnecessary files</li>
        <li>Treat containers as ephemeral (non-persistent)</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Health Check Example</h3>
      <pre className="bg-[#2a1a00] p-4 rounded text-sm overflow-x-auto text-[#fccc7e]">{`HEALTHCHECK --interval=30s --timeout=10s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1`}</pre>
    </div>
  );
}