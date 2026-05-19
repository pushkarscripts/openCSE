export const Ch1Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module I: Arrays</span>.
        Arrays are one of the most fundamental data structures in C.
        They are used to store multiple elements of the same data type
        in contiguous memory locations and provide efficient access
        through indexes.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Introduction */}
      <section>
        <h3 className="section-heading">
          Introduction to Arrays
        </h3>

        <p className="p-text">
          An array stores a collection of similar elements under a
          single variable name. Each element is accessed using an index,
          and indexing starts from 0 in C.
        </p>

        <ul className="section-list">
          <li>Stores multiple values using one variable</li>
          <li>Elements occupy contiguous memory locations</li>
          <li>Allows direct access through indexes</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Declaration */}
      <section>
        <h3 className="section-heading">
          Declaration and Initialization
        </h3>

        <p className="p-text">
          Arrays are declared using a data type, array name and size.
        </p>

        <div className="example-box p-4 rounded-lg mt-4 bg-[#f0ddb6] border border-[#c7a669]">

          <div className="font-semibold text-[#3a2a14] mb-1">
            Code Example
          </div>

          <pre className="code-block">
{`int numbers[5];

int values[5] = {10,20,30,40,50};`}
          </pre>

        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Common Operations */}
      <section>
        <h3 className="section-heading">
          Common Array Operations
        </h3>

        <p className="p-text">
          Arrays support several common operations used to manipulate
          and process elements.
        </p>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Accessing */}
      <section>
        <h3 className="section-heading">
          Accessing Elements
        </h3>

        <p className="p-text">
          Individual elements are accessed using indexes.
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <pre className="code-block">
{`int arr[5]={10,20,30,40,50};

printf("%d",arr[2]);`}
          </pre>
        </div>

        <p className="p-text">
          <strong>Time Complexity:</strong> O(1)
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Traversal */}
      <section>
        <h3 className="section-heading">
          Traversal
        </h3>

        <p className="p-text">
          Traversal means visiting each element of the array one by one.
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

          <pre className="code-block">
{`for(int i=0;i<5;i++){
   printf("%d ",arr[i]);
}`}
          </pre>

        </div>

        <p className="p-text">
          <strong>Time Complexity:</strong> O(n)
        </p>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Searching */}
      <section>
        <h3 className="section-heading">
          Searching
        </h3>

        <p className="p-text">
          Searching is used to find a specific element in an array.
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

          <pre className="code-block">
{`int key=30;

for(int i=0;i<5;i++){
   if(arr[i]==key)
      printf("Found");
}`}
          </pre>

        </div>

        <p className="p-text">
          <strong>Time Complexity:</strong> O(n)
        </p>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Insertion */}
      <section>
        <h3 className="section-heading">
          Insertion
        </h3>

        <p className="p-text">
          Insertion adds a new element at a specific position by shifting
          elements.
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

          <pre className="code-block">
{`for(int i=n;i>pos;i--){
   arr[i]=arr[i-1];
}

arr[pos]=value;`}
          </pre>

        </div>

        <p className="p-text">
          <strong>Time Complexity:</strong> O(n)
        </p>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Deletion */}
      <section>
        <h3 className="section-heading">
          Deletion
        </h3>

        <p className="p-text">
          Deletion removes an element and shifts remaining elements.
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

          <pre className="code-block">
{`for(int i=pos;i<n-1;i++){
   arr[i]=arr[i+1];
}`}
          </pre>

        </div>

        <p className="p-text">
          <strong>Time Complexity:</strong> O(n)
        </p>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Updating */}
      <section>
        <h3 className="section-heading">
          Updating Elements
        </h3>

        <p className="p-text">
          Updating changes an existing value using its index.
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

          <pre className="code-block">
{`arr[1]=100;`}
          </pre>

        </div>

        <p className="p-text">
          <strong>Time Complexity:</strong> O(1)
        </p>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Applications */}
      <section>
        <h3 className="section-heading">
          Applications of Arrays
        </h3>

        <ul className="section-list">
          <li>Searching algorithms</li>
          <li>Sorting algorithms</li>
          <li>Matrix representation</li>
          <li>Implementation of stacks and queues</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Advantages */}
      <section>
        <h3 className="section-heading">
          Advantages of Arrays
        </h3>

        <ul className="section-list">
          <li>Fast access using indexes</li>
          <li>Easy traversal of elements</li>
          <li>Efficient memory usage for fixed-size data</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Limitations */}
      <section>
        <h3 className="section-heading">
          Limitations of Arrays
        </h3>

        <ul className="section-list">
          <li>Fixed size once declared</li>
          <li>Insertion and deletion operations are costly</li>
          <li>Stores only same data type elements</li>
        </ul>
      </section>

    </div>
  );
};