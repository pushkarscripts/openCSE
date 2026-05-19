export const ReinforcementLearningContent = () => (
  <div className="course-content">
    <section id="reinforcement-learning" className="scroll-mt-24">
      <h3 className="section-heading text-xl">2. Reinforcement Learning (RL)</h3>
      <p className="p-text mb-4">
        Unlike supervised learning (which learns from labeled data) or unsupervised learning (which finds hidden structures), Reinforcement Learning learns by trial and error in an interactive environment. It is the core technology behind self-driving cars and game-playing AIs (like AlphaGo).
      </p>

      <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f] mb-6">
        <h4 className="font-bold mb-2">The Agent-Environment Loop</h4>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li><strong>Agent:</strong> The learner or decision-maker.</li>
          <li><strong>Environment:</strong> The world the agent interacts with.</li>
          <li><strong>State (S):</strong> A specific situation or configuration of the environment.</li>
          <li><strong>Action (A):</strong> What the agent chooses to do.</li>
          <li><strong>Reward (R):</strong> The feedback from the environment (positive or negative) based on the action taken.</li>
        </ul>
        <p className="mt-3 text-sm font-semibold">Goal: Maximize cumulative total reward over time.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white/5 p-4 rounded border border-white/10">
          <h4 className="font-bold text-[#fccc7e] mb-1">Exploration</h4>
          <p className="text-sm text-[#fdf5e6]/80">Trying new actions to discover better strategies. (Risking current reward for future knowledge).</p>
        </div>
        <div className="bg-white/5 p-4 rounded border border-white/10">
          <h4 className="font-bold text-[#fccc7e] mb-1">Exploitation</h4>
          <p className="text-sm text-[#fdf5e6]/80">Using known actions that currently yield the highest reward. (Playing it safe).</p>
        </div>
      </div>

      <details className="bg-[#fdf5e6] p-4 rounded-lg border border-[#c7a669] my-4 cursor-pointer group">
        <summary className="font-bold text-[#2b1d0f] outline-none hover:text-[#8b5a2b] transition-colors">
          Deep Dive: Q-Learning & The Bellman Equation
        </summary>
        <div className="mt-4 text-[#2b1d0f] text-sm space-y-3">
          <p>Q-Learning is a model-free RL algorithm. The "Q" stands for Quality—how good is a specific action in a specific state.</p>
          <p>It iteratively updates a Q-Table using the <strong>Bellman Equation</strong>:</p>
          <div className="bg-black/10 p-3 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-center my-3">
            Q(S, A) ← Q(S, A) + α [ R + γ × max(Q(S', A')) - Q(S, A) ]
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>α (Alpha):</strong> Learning Rate. How much new information overrides old.</li>
            <li><strong>γ (Gamma):</strong> Discount Factor. How much we care about future rewards vs immediate rewards.</li>
            <li><strong>max(Q(S', A')):</strong> The highest expected Q-value for the next state S'.</li>
          </ul>
        </div>
      </details>
    </section>
  </div>
);
