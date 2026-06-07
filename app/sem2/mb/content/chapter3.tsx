export const Ch3Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">
          Unit III: Biomolecules and Animal Physiology
        </span>.
        Biomolecules are the chemical compounds that form the basis of life.
        They provide structural support, energy, and regulation of biological
        processes. This unit also introduces cell structure, enzymes,
        biological oxidation, calorimetry, temperature regulation, and
        physiological genetics.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Biomolecules
        </h3>

        <p className="p-text">
          Biomolecules are organic compounds present in living organisms.
          They are essential for growth, metabolism, and maintenance of life.
        </p>

        <ul className="section-list">
          <li>Carbohydrates</li>
          <li>Proteins</li>
          <li>Lipids</li>
          <li>Nucleic Acids</li>
        </ul>

        <p className="p-text">
          Small building blocks called monomers combine to form large
          polymers.
        </p>

        <ul className="section-list">
          <li>Monosaccharides → Polysaccharides</li>
          <li>Amino Acids → Proteins</li>
          <li>Nucleotides → DNA and RNA</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Cell Structure and Functions
        </h3>

        <p className="p-text">
          The cell is the basic structural and functional unit of life.
          Different organelles perform specialized functions necessary for
          survival.
        </p>

        <ul className="section-list">
          <li>Nucleus – controls cellular activities</li>
          <li>Mitochondria – powerhouse of the cell</li>
          <li>Ribosomes – protein synthesis</li>
          <li>Endoplasmic Reticulum – transport system</li>
          <li>Golgi Apparatus – packaging and secretion</li>
        </ul>

        <img src="/sem2/mb/AnimalCell.png" alt="Animal Cell" className="w-[600px] mx-auto my-4"/>
        
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Foodstuffs
        </h3>

        <p className="p-text">
          Food provides nutrients required for growth, repair,
          and energy production.
        </p>

        <ul className="section-list">
          <li>Carbohydrates – major energy source</li>
          <li>Proteins – body building nutrients</li>
          <li>Fats – energy storage molecules</li>
          <li>Vitamins and Minerals – regulatory functions</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Biological Oxidation
        </h3>

        <p className="p-text">
          Biological oxidation is the process through which cells release
          energy from food molecules. The released energy is stored as ATP.
        </p>

        <ul className="section-list">
          <li>Occurs mainly in mitochondria</li>
          <li>Involves oxidation-reduction reactions</li>
          <li>Produces ATP for cellular activities</li>
        </ul>

        <img src="/sem2/mb/ATP.png" alt="ATP" className="w-[600px] mx-auto my-4"/>
        
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Enzymes as Biological Catalysts
        </h3>

        <p className="p-text">
          Enzymes are biological catalysts that speed up chemical reactions
          without being consumed during the process.
        </p>

        <ul className="section-list">
          <li>Highly specific in action</li>
          <li>Lower activation energy</li>
          <li>Increase reaction rate</li>
          <li>Remain unchanged after reaction</li>
        </ul>

        <img src="/sem2/mb/EnzymeAction.png" alt="Enzyme Action" className="w-[600px] mx-auto my-4"/>
        
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Animal Calorimetry
        </h3>

        <p className="p-text">
          Animal calorimetry measures the heat produced by living organisms
          during metabolic activities.
        </p>

        <ul className="section-list">
          <li>Direct calorimetry</li>
          <li>Indirect calorimetry</li>
          <li>Determination of energy expenditure</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Temperature Regulation
        </h3>

        <p className="p-text">
          Temperature regulation maintains a stable internal body
          temperature despite environmental changes.
        </p>

        <ul className="section-list">
          <li>Thermoregulation</li>
          <li>Role of hypothalamus</li>
          <li>Heat production and heat loss mechanisms</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Physiological Genetics
        </h3>

        <p className="p-text">
          Physiological genetics studies how genes influence physiological
          processes and the functioning of living organisms.
        </p>

        <ul className="section-list">
          <li>Gene expression</li>
          <li>Genetic control of metabolism</li>
          <li>Inheritance of physiological traits</li>
        </ul>
      </section>

    </div>
  );
};