export const Ch5Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">
          Unit V: Microbiology
        </span>
        Microbiology is the branch of biology that studies
        microorganisms such as bacteria, fungi, algae, protozoa
        and viruses. These organisms play important roles in
        health, agriculture, industry and environmental processes.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Concept and Ecological Aspects of Single-Celled Organisms
        </h3>

        <p className="p-text">
          Single-celled organisms consist of only one cell that
          performs all essential life functions. They are found
          in diverse habitats such as soil, water, air and living
          organisms.
        </p>

        <ul className="section-list">
          <li>Bacteria</li>
          <li>Protozoa</li>
          <li>Yeasts</li>
          <li>Microscopic algae</li>
        </ul>

        <p className="p-text">
          These organisms play important ecological roles in
          nutrient cycling, decomposition and maintenance of
          environmental balance.
        </p>

        <img src="/sem2/mb/BacterialCell.png" alt="Bacterial Cell Diagram" className="w-96 mx-auto my-4"/>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Concept of Species and Strains
        </h3>

        <p className="p-text">
          A species is a group of microorganisms sharing common
          characteristics. A strain is a genetic variant within
          the same species showing slight differences in traits.
        </p>

        <ul className="section-list">
          <li>Species share common characteristics</li>
          <li>Strains show genetic variation</li>
          <li>Useful in microbial classification</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Identification of Microorganisms
        </h3>

        <p className="p-text">
          Identification is the process of determining the
          identity of microorganisms using their morphology,
          biochemical properties and genetic characteristics.
        </p>

        <ul className="section-list">
          <li>Microscopic examination</li>
          <li>Biochemical tests</li>
          <li>Molecular methods</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Classification of Microorganisms
        </h3>

        <p className="p-text">
          Microorganisms are classified according to their
          cellular organization, morphology and genetic
          characteristics.
        </p>

        <ul className="section-list">
          <li>Bacteria</li>
          <li>Archaea</li>
          <li>Fungi</li>
          <li>Protozoa</li>
          <li>Algae</li>
          <li>Viruses</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Microscopes
        </h3>

        <p className="p-text">
          Microscopes are instruments used to observe organisms
          that cannot be seen with the naked eye.
        </p>

        <h4 className="font-semibold text-lg mt-6">
          Types of Microscopes
        </h4>

        <ul className="section-list">
          <li>Simple Microscope</li>
          <li>Compound Microscope</li>
          <li>Electron Microscope</li>
        </ul>

        <p className="p-text">
          Compound microscopes are commonly used in biological
          laboratories, whereas electron microscopes provide
          much higher magnification and resolution.
        </p>

        <img src="/sem2/mb/CompoundMicroscope.png" alt="Compound Microscope Diagram" className="w-96 mx-auto my-4"/>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Sterilization
        </h3>

        <p className="p-text">
          Sterilization is the process of eliminating all forms
          of microorganisms from materials, equipment and media.
        </p>

        <ul className="section-list">
          <li>Heat Sterilization</li>
          <li>Filtration</li>
          <li>Chemical Sterilization</li>
          <li>Radiation Sterilization</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Culture Media and Media Composition
        </h3>

        <p className="p-text">
          Culture media provide nutrients necessary for the
          growth and multiplication of microorganisms.
        </p>

        <ul className="section-list">
          <li>Carbon source</li>
          <li>Nitrogen source</li>
          <li>Minerals</li>
          <li>Water</li>
          <li>Growth factors</li>
        </ul>

        <h4 className="font-semibold text-lg mt-6">
          Types of Culture Media
        </h4>

        <ul className="section-list">
          <li>Natural Media</li>
          <li>Synthetic Media</li>
          <li>Selective Media</li>
          <li>Differential Media</li>
        </ul>

        <img src="/sem2/mb/NutrientAgarPlate.png" alt="Nutrient Agar Plate Diagram" className="w-[500px] mx-auto my-4"/>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Growth Kinetics
        </h3>

        <p className="p-text">
          Growth kinetics describes the pattern of microbial
          growth under suitable environmental conditions.
        </p>

        <h4 className="font-semibold text-lg mt-6">
          Phases of Growth Curve
        </h4>

        <ul className="section-list">
          <li>Lag Phase</li>
          <li>Log (Exponential) Phase</li>
          <li>Stationary Phase</li>
          <li>Death Phase</li>
        </ul>

        <p className="p-text">
          During the lag phase cells adapt to the environment.
          Rapid multiplication occurs during the log phase.
          Growth stabilizes in the stationary phase and cells
          gradually die in the death phase.
        </p>

        <img src="/sem2/mb/BacterialGrowthCurve.png" alt="Bacterial Growth Curve Diagram" className="w-96 mx-auto my-4"/>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Applications */}
      <section>
        <h3 className="section-heading">
          Applications of Microbiology
        </h3>

        <ul className="section-list">
          <li>Medicine and healthcare</li>
          <li>Food production</li>
          <li>Agriculture</li>
          <li>Biotechnology</li>
          <li>Environmental management</li>
        </ul>
      </section>

    </div>
  );
};