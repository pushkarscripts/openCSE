export function Ch25Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Docker Fundamentals</h2>
      <p>Docker is an open-source platform that automates the deployment of applications inside lightweight, portable containers. It revolutionized software delivery by ensuring "it works on my machine" is never an excuse — containers run identically everywhere.</p>
       <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">The problem Docker Solves</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Traditional deployment: Install OS → install runtime → install dependencies → deploy app. Conflicts arise between different apps' dependencies.</li>
        <li>"Works on my machine" problem: Dev, staging, and production environments differ.</li>
        <li>Docker solution: Package the application with all its dependencies into a single container image.</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Docker Architecture</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Docker Client:</strong> Command-line interface</li>
        <li><strong>Docker Daemon:</strong> Background service managing containers</li>
        <li><strong>Docker Image:</strong>A read-only template used to create containers. Layers of filesystem changes stacked on top of a base image.</li>
        <li><strong>Docker Container:</strong> A running instance of an image. Lightweight, isolated process sharing the host OS kernel. Much faster and lighter than a VM.</li>
        <li><strong>Docker file:</strong>Text file with instructions to build a Docker image. Every instruction creates a new layer.</li>
        <li><strong>Docker Registry:</strong> Repository for images (e.g. Docker Hub)</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Sample Dockerfile</h3>
      <pre className="bg-[#2a1a00] p-4 rounded text-sm overflow-x-auto text-[#fccc7e]">{`FROM python:3.9
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]`}</pre>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Common Commands</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>docker build:</strong> Build image from Dockerfile</li>
        <li><strong>docker run:</strong> Start a container</li>
        <li><strong>docker ps:</strong> List running containers</li>
        <li><strong>docker stop:</strong> Stop a container</li>
        <li><strong>docker logs:</strong> View container logs</li>
      </ul>
    </div>
  );
}