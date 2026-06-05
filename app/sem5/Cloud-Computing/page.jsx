'use client';

import { cloudComputingCourse } from '@/lib/course/CloudComputing';
import Link from 'next/link';
import { useState } from 'react';

export default function CloudComputingCourse() {
  const [expandedUnit, setExpandedUnit] = useState(null);
  const course = cloudComputingCourse;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{course.icon}</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
              <p className="text-slate-400 text-lg">{course.description}</p>
            </div>
          </div>
          <Link 
            href="/home" 
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition font-medium"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-10 border border-blue-700/50">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">Welcome to Cloud Computing</h2>
          <p className="text-slate-300 leading-relaxed text-lg mb-6">
            This comprehensive course covers the theory and practice of cloud computing, including infrastructure services, 
            platform services, deployment models, and major cloud providers like AWS, Azure, and GCP. You'll learn 
            how to design scalable applications, manage containerized workloads, secure cloud resources, and implement 
            cloud-native architectures.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <p className="text-sm text-slate-400 mb-1">Total Units</p>
              <p className="text-2xl font-bold text-blue-400">{course.units.length}</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <p className="text-sm text-slate-400 mb-1">Total Chapters</p>
              <p className="text-2xl font-bold text-purple-400">28</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <p className="text-sm text-slate-400 mb-1">Difficulty</p>
              <p className="text-2xl font-bold text-green-400">Beginner → Advanced</p>
            </div>
          </div>
        </section>

        {/* Units Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-slate-100">Course Curriculum</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {course.units.map((unit) => (
              <div
                key={unit.id}
                className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition overflow-hidden"
              >
                <button
                  onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition text-left"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Unit {unit.id}: {unit.title}</h3>
                      <p className="text-sm text-blue-100 mt-2">{unit.chapters.length} Chapters • {unit.topics.length} Topics</p>
                    </div>
                    <span className="text-2xl">{expandedUnit === unit.id ? '−' : '+'}</span>
                  </div>
                </button>

                {expandedUnit === unit.id && (
                  <div className="px-6 py-6 border-t border-slate-700 space-y-6">
                    {/* Topics */}
                    <div>
                      <p className="text-sm font-semibold text-blue-300 mb-3">Topics covered:</p>
                      <ul className="space-y-2">
                        {unit.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                            <span className="text-blue-400 mt-0.5 font-bold">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Chapters */}
                    <div className="pt-4 border-t border-slate-700">
                      <p className="text-sm font-semibold text-purple-300 mb-3">Chapters:</p>
                      <ul className="space-y-2">
                        {unit.chapters.map((chapter) => (
                          <li key={chapter.id}>
                            <Link
                              href={`/sem5/Cloud-Computing/${chapter.id}`}
                              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition"
                            >
                              ➜ Chapter {chapter.id}: {chapter.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Syllabus Topics */}
        <section className="bg-amber-900/20 rounded-xl p-8 border border-amber-700/50">
          <h3 className="text-2xl font-bold mb-8 text-amber-200">Complete Syllabus Overview</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-amber-300 mb-4">Fundamentals</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2"><span className="text-amber-400">✓</span> Cloud computing concepts and characteristics</li>
                <li className="flex gap-2"><span className="text-amber-400">✓</span> Service models: IaaS, PaaS, SaaS</li>
                <li className="flex gap-2"><span className="text-amber-400">✓</span> Deployment models: Public, Private, Hybrid</li>
                <li className="flex gap-2"><span className="text-amber-400">✓</span> Benefits and challenges</li>
                <li className="flex gap-2"><span className="text-amber-400">✓</span> Cloud vs On-premises comparison</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-amber-300 mb-4">Advanced Topics</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2"><span className="text-amber-400">✓</span> Cloud architecture and design patterns</li>
                <li className="flex gap-2"><span className="text-amber-400">✓</span> Security and compliance (IAM, encryption, GDPR)</li>
                <li className="flex gap-2"><span className="text-amber-400">✓</span> Major providers: AWS, Azure, GCP</li>
                <li className="flex gap-2"><span className="text-amber-400">✓</span> Containerization with Docker</li>
                <li className="flex gap-2"><span className="text-amber-400">✓</span> Orchestration with Kubernetes</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}