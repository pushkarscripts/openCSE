export const SpeechRecognitionContent = () => (
  <div className="course-content">
    <section id="speech-recognition" className="scroll-mt-24">
      <h3 className="section-heading text-xl">3. Speech Recognition</h3>
      <p className="p-text mb-4">
        Also known as Automatic Speech Recognition (ASR) or Speech-to-Text (STT), this is the process of converting spoken language audio into machine-readable text.
      </p>

      <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Types of ASR</h4>
      <ul className="list-disc pl-5 p-text text-sm mb-6 space-y-1">
        <li><strong>Speaker-Dependent vs Independent:</strong> Trained for a specific voice (Dragon Dictate) vs any voice (Siri).</li>
        <li><strong>Continuous vs Isolated:</strong> Flowing natural speech vs single words with pauses.</li>
        <li><strong>Keyword Spotting:</strong> Detecting specific trigger words (&quot;Hey Siri&quot;).</li>
      </ul>

      <details className="bg-[#fdf5e6] p-4 rounded-lg border border-[#c7a669] my-6 cursor-pointer group">
        <summary className="font-bold text-[#2b1d0f] outline-none hover:text-[#8b5a2b] transition-colors">
          Deep Dive: The Classic HMM-Based Pipeline
        </summary>
        <div className="mt-4 text-[#2b1d0f] text-sm space-y-3">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Audio Capture:</strong> Microphone captures analog waves; converted to digital (typically 16 kHz).</li>
            <li><strong>Feature Extraction (MFCC):</strong> Mel-Frequency Cepstral Coefficients extract relevant human-perceivable frequencies, discarding background noise.</li>
            <li><strong>Acoustic Model (HMM):</strong> Hidden Markov Models map the audio features to specific phonemes (sounds).</li>
            <li><strong>Pronunciation Dictionary:</strong> Maps sequences of phonemes to actual words.</li>
            <li><strong>Language Model:</strong> Assigns probabilities to word sequences to ensure grammatically correct sentences (e.g., differentiating &quot;I ate&quot; vs &quot;I eight&quot;).</li>
            <li><strong>Decoder:</strong> Outputs the final, highest-probability text transcript.</li>
          </ol>
        </div>
      </details>

      <div className="note-box bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00] my-6">
        <h4 className="font-bold mb-1">Modern Deep Learning Approach</h4>
        <p className="text-sm">
          Modern ASR replaces the complex multi-step HMM pipeline with <strong>End-to-End Sequence-to-Sequence models</strong>. Technologies like LSTMs and Transformers (e.g., OpenAI&apos;s Whisper) directly map audio wave sequences to text text tokens using attention mechanisms and CTC (Connectionist Temporal Classification) to handle alignment.
        </p>
      </div>

      <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Challenges</h4>
      <ul className="list-disc pl-5 p-text text-sm space-y-1">
        <li><strong>Accents & Dialects:</strong> High regional pronunciation variability.</li>
        <li><strong>Background Noise:</strong> Cocktail party problem (distinguishing primary speaker from ambient noise).</li>
        <li><strong>Homophones:</strong> Words that sound identical but mean different things (their, there, they&apos;re).</li>
      </ul>
    </section>
  </div>
);
