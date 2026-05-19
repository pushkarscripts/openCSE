export const VirtualAssistantContent = () => (
  <div className="course-content">
    <section id="virtual-assistant" className="scroll-mt-24">
      <h3 className="section-heading text-xl">6. Virtual Personal Assistant (VPA)</h3>
      <p className="p-text mb-4">
        A Virtual Personal Assistant (like Siri, Alexa, or Google Assistant) is an AI-powered software that understands natural language voice commands to perform tasks, providing personalized assistance by learning user behavior over time.
      </p>

      <div className="note-box bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00] mb-8">
        <h4 className="font-bold mb-2">The 5-Stage VPA Pipeline</h4>
        <ol className="list-decimal pl-5 text-sm space-y-2">
          <li><strong>Wake Word Detection:</strong> A lightweight, always-on edge model listens for a trigger phrase (e.g., "Hey Siri") without sending continuous audio to the cloud.</li>
          <li><strong>Speech Recognition (ASR):</strong> Converts the spoken user command into text format.</li>
          <li><strong>Natural Language Understanding (NLU):</strong> 
            <ul className="list-disc pl-5 mt-1 text-xs">
              <li><i>Intent Detection:</i> Determines the core action (e.g., 'Set Alarm').</li>
              <li><i>Entity Extraction:</i> Pulls out parameters (e.g., '7:00 AM').</li>
            </ul>
          </li>
          <li><strong>Action Execution:</strong> Triggers internal device APIs (adjust thermostat) or external web APIs (fetch weather).</li>
          <li><strong>Response Generation:</strong> Uses Natural Language Generation (NLG) to create a response, converted back to audio via Text-To-Speech (TTS).</li>
        </ol>
      </div>

      <details className="bg-[#fdf5e6] p-4 rounded-lg border border-[#c7a669] my-4 cursor-pointer group">
        <summary className="font-bold text-[#2b1d0f] outline-none hover:text-[#8b5a2b] transition-colors">
          Deep Dive: Machine Learning Under the Hood
        </summary>
        <div className="mt-4 text-[#2b1d0f] text-sm overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#c7a669]">
                <th className="p-2">Component</th>
                <th className="p-2">ML Technology</th>
                <th className="p-2">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-2 font-bold">Intent Classification</td>
                <td className="p-2">BERT, LSTM</td>
                <td className="p-2">Map text to a specific action category.</td>
              </tr>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-2 font-bold">Entity Recognition</td>
                <td className="p-2">CRF, BiLSTM</td>
                <td className="p-2">Extract specific names, dates, and locations.</td>
              </tr>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-2 font-bold">Dialogue Management</td>
                <td className="p-2">Reinforcement Learning</td>
                <td className="p-2">Maintain context across multi-turn conversations.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Text-to-Speech (TTS)</td>
                <td className="p-2">WaveNet, Tacotron</td>
                <td className="p-2">Generate natural, human-sounding synthesis.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>

      <div className="mt-6">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Current Challenges</h4>
        <ul className="list-disc pl-5 p-text text-sm space-y-1">
          <li><strong>Privacy vs Personalization:</strong> Balancing the need for data to provide tailored recommendations against user data protection. The trend is moving towards <i>On-Device Processing</i>.</li>
          <li><strong>Contextual Ambiguity:</strong> Resolving unclear requests and maintaining long-term memory across disjointed conversations.</li>
        </ul>
      </div>
    </section>
  </div>
);
