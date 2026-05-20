export const NlpBasicsContent = () => (
  <div className="course-content">
    <section id="nlp-basics" className="scroll-mt-24">
      <h3 className="section-heading text-xl">3. Natural Language Processing (NLP)</h3>
      <p className="p-text mb-4">
        NLP bridges the gap between human communication and computer understanding. Since machine learning models only understand numbers, text data must go through rigorous preprocessing and vectorization.
      </p>

      <h4 className="font-bold text-lg text-[#fccc7e] mb-2">1. Text Preprocessing Pipeline</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-1">Tokenization</h5>
          <p className="text-xs">Splitting sentences into individual words or sub-words (tokens).</p>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-1">Stop Words Removal</h5>
          <p className="text-xs">Removing extremely common words (e.g., &quot;the&quot;, &quot;is&quot;, &quot;at&quot;) that carry little semantic meaning.</p>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-1">Stemming</h5>
          <p className="text-xs">Chopping off prefixes/suffixes to get a root (e.g., &quot;running&quot; → &quot;run&quot;). Very fast but often creates non-words.</p>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-1">Lemmatization</h5>
          <p className="text-xs">Using a dictionary to safely reduce words to their base linguistic form (e.g., &quot;better&quot; → &quot;good&quot;). Slower but highly accurate.</p>
        </div>
      </div>

      <div className="note-box bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00] mb-6">
        <h4 className="font-bold mb-2">2. Word Embeddings</h4>
        <p className="text-sm mb-2">Converting tokens into dense numerical vectors where semantic meaning is preserved.</p>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li><strong>Bag of Words (BoW) & TF-IDF:</strong> Sparse vectors representing exact word counts. Cannot capture context or word ordering.</li>
          <li><strong>Word2Vec / GloVe:</strong> Dense vectors (e.g., 300 dimensions). Understands that &quot;King&quot; is to &quot;Queen&quot; what &quot;Man&quot; is to &quot;Woman&quot;. Captures deep semantic relationships.</li>
        </ul>
      </div>

      <details className="bg-[#fdf5e6] p-4 rounded-lg border border-[#c7a669] my-4 cursor-pointer group">
        <summary className="font-bold text-[#2b1d0f] outline-none hover:text-[#8b5a2b] transition-colors">
          Deep Dive: Attention and Transformers
        </summary>
        <div className="mt-4 text-[#2b1d0f] text-sm space-y-3">
          <p>Prior to 2017, NLP relied on RNNs and LSTMs which processed text sequentially (slow, and forgot early words in long paragraphs).</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>The Attention Mechanism:</strong> Allows a model to dynamically look at ALL words in a sentence simultaneously and weigh their importance when understanding a specific word. Example: In &quot;The animal didn&apos;t cross the street because it was too tired&quot;, Attention helps the model know &quot;it&quot; refers to &quot;animal&quot;, not &quot;street&quot;.</li>
            <li><strong>Transformers:</strong> An architecture (introduced in the paper &quot;Attention Is All You Need&quot;) that relies entirely on Attention, ditching RNNs. Highly parallelizable.</li>
            <li><strong>LLMs (Large Language Models):</strong> Models like GPT (Generative Pre-trained Transformer) scale this architecture to hundreds of billions of parameters.</li>
          </ul>
        </div>
      </details>
    </section>
  </div>
);
