export const cloudComputingCourse = {
  id: 'cloud-computing',
  title: 'Cloud Computing',
  description: 'Master cloud computing fundamentals, deployment models, and major cloud providers like AWS, Azure, and GCP',
  category: 'Cloud & DevOps',
  semester: 5,
  status: 'published',
  icon: '☁️',
  color: '#3b82f6',
  
  units: [
    {
      id: 1,
      title: 'Introduction to Cloud Computing',
      chapters: [
        { id: 1, title: 'What is Cloud Computing' },
        { id: 2, title: 'Cloud Computing Models' },
        { id: 3, title: 'Benefits and Challenges' },
        { id: 4, title: 'Cloud vs On-Premises' }
      ],
      topics: [
        'Definition and key characteristics',
        'On-demand self-service',
        'Broad network access',
        'Resource pooling',
        'Rapid elasticity',
        'Measured service',
        'Cost-benefit analysis'
      ]
    },
    {
      id: 2,
      title: 'Cloud Service Models',
      chapters: [
        { id: 5, title: 'Infrastructure as a Service (IaaS)' },
        { id: 6, title: 'Platform as a Service (PaaS)' },
        { id: 7, title: 'Software as a Service (SaaS)' },
        { id: 8, title: 'Comparing Service Models' }
      ],
      topics: [
        'IaaS: Compute, Storage, Networking',
        'PaaS: Development environments and tools',
        'SaaS: Applications and benefits',
        'Serverless computing (Functions as a Service)',
        'Choosing the right model for your use case'
      ]
    },
    {
      id: 3,
      title: 'Cloud Deployment Models',
      chapters: [
        { id: 9, title: 'Public Cloud' },
        { id: 10, title: 'Private Cloud' },
        { id: 11, title: 'Hybrid Cloud' },
        { id: 12, title: 'Community Cloud' }
      ],
      topics: [
        'Public cloud architecture and access',
        'Private cloud ownership and control',
        'Hybrid cloud integration strategies',
        'Community cloud for specific industries',
        'Deployment model comparison matrix'
      ]
    },
    {
      id: 4,
      title: 'Cloud Architecture & Design',
      chapters: [
        { id: 13, title: 'Cloud-Native Architecture' },
        { id: 14, title: 'Microservices Architecture' },
        { id: 15, title: 'Scalability Patterns' },
        { id: 16, title: 'High Availability & Disaster Recovery' }
      ],
      topics: [
        'Cloud-native design principles',
        'Breaking monoliths into microservices',
        'Horizontal vs vertical scaling',
        'Load balancing strategies',
        'Multi-region and multi-zone deployment',
        'Fault tolerance and resilience'
      ]
    },
    {
      id: 5,
      title: 'Cloud Security & Compliance',
      chapters: [
        { id: 17, title: 'Identity & Access Management' },
        { id: 18, title: 'Data Protection' },
        { id: 19, title: 'Network Security' },
        { id: 20, title: 'Compliance & Governance' }
      ],
      topics: [
        'IAM roles, policies, and access control',
        'Multi-factor authentication',
        'Encryption at rest and in transit',
        'VPCs, security groups, and firewalls',
        'GDPR, HIPAA, SOC 2 compliance',
        'Cloud audit and monitoring'
      ]
    },
    {
      id: 6,
      title: 'Major Cloud Providers',
      chapters: [
        { id: 21, title: 'Amazon Web Services (AWS)' },
        { id: 22, title: 'Microsoft Azure' },
        { id: 23, title: 'Google Cloud Platform' },
        { id: 24, title: 'Provider Comparison & Cost Analysis' }
      ],
      topics: [
        'AWS: EC2, S3, RDS, Lambda',
        'Azure: VMs, App Service, Cosmos DB',
        'GCP: Compute Engine, Cloud Storage, BigQuery',
        'Cost estimation and optimization',
        'Multi-cloud strategies',
        'Vendor lock-in considerations'
      ]
    },
    {
      id: 7,
      title: 'Containerization & Orchestration',
      chapters: [
        { id: 25, title: 'Docker Fundamentals' },
        { id: 26, title: 'Container Best Practices' },
        { id: 27, title: 'Kubernetes Basics' },
        { id: 28, title: 'Managing Cloud Containers' }
      ],
      topics: [
        'Docker images, containers, and registries',
        'Container optimization and security',
        'Kubernetes architecture and concepts',
        'Pods, services, and deployments',
        'Container networking and storage',
        'Container orchestration at scale'
      ]
    }
  ]
};