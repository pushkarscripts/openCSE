export const Ch2Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Unit II: Genetics and Cytology</span>.
        Genetics is the branch of biology that studies heredity and variation,
        while cytology is the study of cells, their structure, and functions.
        This unit introduces the principles of inheritance, genetic material,
        cell division, and the molecular basis of information transfer.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Mendel's Laws of Inheritance
        </h3>

        <p className="p-text">
          Gregor Mendel is known as the Father of Genetics. Through his
          experiments on pea plants, he proposed the fundamental laws of
          inheritance that explain how traits are passed from parents to offspring.
        </p>

        <ul className="section-list">
          <li>Law of Dominance</li>
          <li>Law of Segregation</li>
          <li>Law of Independent Assortment</li>
        </ul>

        <img src="/sem2/mb/Punnett-Square.png" alt="Punnett Square" className="w-[600px] mx-auto my-4"/>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Dominant and Recessive Characters
        </h3>

        <p className="p-text">
          A dominant trait is expressed even when only one dominant allele
          is present, whereas a recessive trait appears only when both
          alleles are recessive.
        </p>

        <ul className="section-list">
          <li>Dominant allele represented by capital letters (A)</li>
          <li>Recessive allele represented by small letters (a)</li>
          <li>Dominant traits mask recessive traits</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Concept of Alleles
        </h3>

        <p className="p-text">
          Alleles are alternative forms of the same gene that occupy the
          same position on homologous chromosomes.
        </p>

        <ul className="section-list">
          <li>Responsible for variations in traits</li>
          <li>Can be dominant or recessive</li>
          <li>Inherited from parents</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Gene Mapping, Gene Interaction and Epistasis
        </h3>

        <p className="p-text">
          Gene mapping determines the relative positions of genes on a
          chromosome. Gene interaction occurs when multiple genes influence
          a single trait, while epistasis refers to one gene masking the
          expression of another gene.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Mitosis and Meiosis
        </h3>

        <p className="p-text">
          Cell division is essential for growth, repair, and reproduction.
          Mitosis produces two identical daughter cells, whereas meiosis
          produces four genetically different haploid cells.
        </p>

        <ul className="section-list">
          <li>Mitosis occurs in somatic cells</li>
          <li>Meiosis occurs in reproductive cells</li>
          <li>Meiosis introduces genetic variation</li>
        </ul>

        <img src="/sem2/mb/Mitosis_Meiosis.png" alt="Mitosis and Meiosis" className="w-[600px] mx-auto my-4"/>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Single Gene Disorders
        </h3>

        <p className="p-text">
          Single gene disorders arise due to mutations in a single gene.
        </p>

        <ul className="section-list">
          <li>Sickle Cell Anemia</li>
          <li>Cystic Fibrosis</li>
          <li>Hemophilia</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Complementation and Recombination
        </h3>

        <p className="p-text">
          Complementation helps determine whether mutations occur in the
          same gene or different genes. Recombination generates new genetic
          combinations during meiosis.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          DNA as Genetic Material
        </h3>

        <p className="p-text">
          DNA stores hereditary information and controls the structure
          and function of living organisms.
        </p>

        <ul className="section-list">
          <li>Double helical structure</li>
          <li>Composed of nucleotides</li>
          <li>Stores genetic information</li>
        </ul>

        <img src="/sem2/mb/DNADoubleHelix.png" alt="DNA" className="w-[600px] mx-auto my-4"/>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Genetic Code and Information Transfer
        </h3>

        <p className="p-text">
          The genetic code is a set of rules by which information stored
          in DNA is translated into proteins.
        </p>

        <ul className="section-list">
          <li>Triplet codon system</li>
          <li>Universal in most organisms</li>
          <li>Specific and non-overlapping</li>
        </ul>

        <img src="/sem2/mb/CentralDogma.png" alt="Central Dogma" className="w-[600px] mx-auto my-4"/>
        
      </section>

    </div>
  );
};