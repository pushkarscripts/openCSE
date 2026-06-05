export function Ch27Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Kubernetes Basics</h2>
      <p>Kubernetes (K8s) is an open-source container orchestration platform originally developed by Google, now maintained by the CNCF. It automates deployment, scaling, and management of containerized applications across clusters of machines.</p>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Why Kubernetes?</h3>
      <p>Running one container on one machine is easy. Running hundreds of containers across dozens of machines, ensuring they're healthy, restarting failed ones, load balancing traffic, and rolling out updates without downtime — that's Kubernetes' job.</p>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Architecture</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Master Node:</strong> Controls the cluster</li>
        <li><strong>Worker Nodes:</strong> Run the containers</li>
        <li><strong>etcd:</strong> Distributed key-value store for cluster state</li>
        <li><strong>API Server:</strong> RESTful interface to the cluster</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Key Objects</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Pod:</strong> Smallest deployable unit (one or more containers)</li>
        <li><strong>Deployment:</strong> Manages replica pods declaratively</li>
        <li><strong>Service:</strong> Network access to pods</li>
        <li><strong>Namespace:</strong> Virtual cluster for resource isolation</li>
        <li><strong>ConfigMap/Secret:</strong> Configuration and sensitive data</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Sample Manifest</h3>
      <pre className="bg-[#2a1a00] p-4 rounded text-sm overflow-x-auto text-[#fccc7e]">{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    spec:
      containers:
      - name: app
        image: myapp:1.0
        ports:
        - containerPort: 8080`}</pre>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">kubectl Commands</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>kubectl apply -f deployment.yaml</li>
        <li>kubectl get pods</li>
        <li>kubectl describe pod &lt;name&gt;</li>
        <li>kubectl logs &lt;pod-name&gt;</li>
        <li>kubectl scale deployment &lt;name&gt; --replicas=5</li>
      </ul>
    </div>
  );
}