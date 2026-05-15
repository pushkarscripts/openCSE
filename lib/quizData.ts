// lib/quizData.ts
// Add more subjects and questions here, or swap with AI generation later

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // index of correct option
  explanation?: string;
}

export interface Quiz {
  subject: string;
  slug: string;
  description: string;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    subject: "Programming in C",
    slug: "c-programming",
    description: "Test your knowledge of C fundamentals: from data types and pointers to file I/O and dynamic memory.",
    questions: [
      {
        id: 1,
        question: "Who created the C programming language?",
        options: ["Bjarne Stroustrup", "Dennis Ritchie", "Linus Torvalds", "Brian Kernighan"],
        answer: 1,
        explanation: "C was created by Dennis Ritchie at Bell Labs in the early 1970s.",
      },
      {
        id: 2,
        question: "Which flowchart symbol is used to represent a decision?",
        options: ["Rectangle", "Oval", "Parallelogram", "Diamond"],
        answer: 3,
        explanation: "A diamond shape represents a decision (conditional branch) in a flowchart.",
      },
      {
        id: 3,
        question: "What is the size of a `float` on a typical 32-bit system in C?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        answer: 2,
        explanation: "`float` is a 4-byte single-precision type; `double` is 8 bytes.",
      },
      {
        id: 4,
        question: "Which storage class retains a local variable's value between function calls?",
        options: ["auto", "extern", "register", "static"],
        answer: 3,
        explanation: "`static` local variables are initialized once and retain their value across calls.",
      },
      {
        id: 5,
        question: "What does `scanf(\"%d\", x)` have wrong compared to correct usage?",
        options: [
          "Wrong format specifier for int",
          "Missing & before x",
          "scanf cannot read integers",
          "Missing semicolon",
        ],
        answer: 1,
        explanation: "`scanf` needs the address of the variable: `scanf(\"%d\", &x)`. Without `&`, behavior is undefined.",
      },
      {
        id: 6,
        question: "In C, arrays are passed to functions as:",
        options: [
          "A full copy of the array",
          "A pointer to the first element",
          "A reference using the & operator",
          "A struct wrapper",
        ],
        answer: 1,
        explanation: "Array names decay to a pointer to their first element when passed to a function.",
      },
      {
        id: 7,
        question: "Which operator is used to access a structure member through a pointer?",
        options: [".", "->", "*", "&"],
        answer: 1,
        explanation: "The `->` operator dereferences a struct pointer and accesses a member: `ptr->field`.",
      },
      {
        id: 8,
        question: "What is the size of a `union` in C?",
        options: [
          "Sum of sizes of all members",
          "Size of the smallest member",
          "Size of the largest member",
          "Fixed 8 bytes",
        ],
        answer: 2,
        explanation: "All union members share the same memory, so the union is sized to fit its largest member.",
      },
      {
        id: 9,
        question: "Which dynamic memory function allocates memory AND zero-initializes it?",
        options: ["malloc", "realloc", "calloc", "alloc"],
        answer: 2,
        explanation: "`calloc(n, size)` allocates n elements of the given size and sets all bytes to zero.",
      },
      {
        id: 10,
        question: "What is the correct way to define a macro that squares a number safely?",
        options: [
          "#define SQR(x) x*x",
          "#define SQR(x) (x*x)",
          "#define SQR(x) ((x)*(x))",
          "#define SQR(x) {x*x}",
        ],
        answer: 2,
        explanation: "Parentheses around each argument and the whole expression prevent operator precedence bugs when the macro is used in complex expressions.",
      },
    ],
  },
  {
    subject: "Engineering Mathematics I",
    slug: "em1",
    description: "Review limits, differential calculus, and linear algebra fundamentals for first-semester engineering mathematics.",
    questions: [
      {
        id: 1,
        question: "What is the derivative of `sin(x)`?",
        options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
        answer: 0,
        explanation: "The derivative of `sin(x)` is `cos(x)`.",
      },
      {
        id: 2,
        question: "Which matrix operation is valid only for square matrices?",
        options: ["Addition", "Multiplication", "Determinant", "Scalar multiplication"],
        answer: 2,
        explanation: "Only square matrices have a determinant defined.",
      },
      {
        id: 3,
        question: "What is the limit of `(1 + 1/n)^n` as n approaches infinity?",
        options: ["0", "1", "e", "Infinity"],
        answer: 2,
        explanation: "The expression converges to Euler's number, `e`.",
      },
      {
        id: 4,
        question: "Which of these is a linear differential equation?",
        options: [
          "y' + 3y = 6",
          "y'² + y = 0",
          "y'' + y² = 5",
          "sin(y') + y = 0",
        ],
        answer: 0,
        explanation: "A linear differential equation has the unknown function and its derivatives to the first power only.",
      },
      {
        id: 5,
        question: "If a matrix has linearly dependent rows, what is true about its determinant?",
        options: ["It is positive", "It is negative", "It is zero", "It is undefined"],
        answer: 2,
        explanation: "A matrix with dependent rows has determinant zero.",
      },
      {
        id: 6,
        question: "What does the rank of a matrix represent?",
        options: [
          "The number of rows",
          "The number of independent rows or columns",
          "The determinant value",
          "The trace value",
        ],
        answer: 1,
        explanation: "Rank is the dimension of the row space or column space: the number of independent rows/columns.",
      },
      {
        id: 7,
        question: "Which of these is an example of a homogeneous linear equation?",
        options: ["2x + 3 = 0", "x² - 4 = 0", "3x + 5y = 0", "sin(x) = 1"],
        answer: 2,
        explanation: "A homogeneous linear equation has zero on the right-hand side.",
      },
      {
        id: 8,
        question: "The derivative of `e^{2x}` is:",
        options: ["2e^{x}", "e^{2x}", "2e^{2x}", "e^{x}"],
        answer: 2,
        explanation: "By chain rule, the derivative of `e^{2x}` is `2e^{2x}`.",
      },
      {
        id: 9,
        question: "Which integration rule is used for the integral of a product of functions?",
        options: ["Substitution", "Integration by parts", "Partial fractions", "Trigonometric substitution"],
        answer: 1,
        explanation: "Integration by parts applies to products of functions.",
      },
      {
        id: 10,
        question: "What is the solution of the linear system with coefficient matrix identity and vector b?",
        options: ["No solution", "b", "0", "Depends on the inverse"],
        answer: 1,
        explanation: "If Ax = b and A is the identity matrix, x = b.",
      },
    ],
  },
  {
    subject: "Engineering Physics",
    slug: "ep",
    description: "Check your understanding of electric fields, magnetism, waves, and modern physics concepts from first-semester engineering physics.",
    questions: [
      {
        id: 1,
        question: "Which quantity is conserved in an elastic collision?",
        options: ["Momentum only", "Kinetic energy only", "Momentum and kinetic energy", "Neither"],
        answer: 2,
        explanation: "Elastic collisions conserve both momentum and kinetic energy.",
      },
      {
        id: 2,
        question: "What is the direction of the magnetic field around a straight current-carrying wire?",
        options: ["Radial", "Circular around the wire", "Parallel to current", "Random"],
        answer: 1,
        explanation: "The magnetic field lines form circles around the wire.",
      },
      {
        id: 3,
        question: "Which law relates magnetic flux to induced emf?",
        options: ["Ohm's Law", "Faraday's Law", "Coulomb's Law", "Newton's Second Law"],
        answer: 1,
        explanation: "Faraday's Law states that a changing magnetic flux induces an emf.",
      },
      {
        id: 4,
        question: "What is the SI unit of electric field strength?",
        options: ["Volt", "Newton per coulomb", "Tesla", "Coulomb"],
        answer: 1,
        explanation: "Electric field strength is measured in newtons per coulomb.",
      },
      {
        id: 5,
        question: "If the frequency of a wave doubles, its wavelength: ",
        options: ["Doubles", "Halves", "Remains unchanged", "Quadruples"],
        answer: 1,
        explanation: "For constant wave speed, wavelength is inversely proportional to frequency.",
      },
      {
        id: 6,
        question: "Which phenomenon demonstrates the particle nature of light?",
        options: ["Interference", "Diffraction", "Photoelectric effect", "Refraction"],
        answer: 2,
        explanation: "The photoelectric effect supports the particle nature of light.",
      },
      {
        id: 7,
        question: "What is the magnetic permeability of free space used to describe?",
        options: ["Electric field in vacuum", "Magnetic field in vacuum", "Resistance of a material", "Capacitance of a parallel-plate capacitor"],
        answer: 1,
        explanation: "Magnetic permeability describes how the magnetic field behaves in free space.",
      },
      {
        id: 8,
        question: "Which branch of physics studies motion without considering forces?",
        options: ["Dynamics", "Kinematics", "Optics", "Thermodynamics"],
        answer: 1,
        explanation: "Kinematics focuses on motion itself, not the forces causing it.",
      },
      {
        id: 9,
        question: "What is the unit of magnetic flux?",
        options: ["Tesla", "Weber", "Volt", "Henry"],
        answer: 1,
        explanation: "Magnetic flux is measured in webers.",
      },
      {
        id: 10,
        question: "Which is the term for lowest energy state of an atom?",
        options: ["Excited state", "Ground state", "Ionized state", "Metastable state"],
        answer: 1,
        explanation: "The ground state is the lowest energy state of an atom.",
      },
    ],
  },
  {
    subject: "Engineering Mathematics II",
    slug: "em2",
    description: "Quiz your knowledge of calculus, numerical methods, complex variables, and engineering math ideas from second semester.",
    questions: [
      {
        id: 1,
        question: "Which test checks convergence of a series by comparing it to a known convergent series?",
        options: ["Integral test", "Ratio test", "Comparison test", "Alternating series test"],
        answer: 2,
        explanation: "The comparison test compares a series to a benchmark series with known convergence.",
      },
      {
        id: 2,
        question: "What is the complex conjugate of `3 + 4i`?",
        options: ["3 - 4i", "-3 + 4i", "4 + 3i", "-3 - 4i"],
        answer: 0,
        explanation: "The complex conjugate changes the sign of the imaginary part.",
      },
      {
        id: 3,
        question: "Which method is often used to solve integrals by transforming into partial fractions?",
        options: ["Substitution", "Integration by parts", "Partial fractions", "Trigonometric substitution"],
        answer: 2,
        explanation: "Partial fraction decomposition helps integrate rational functions.",
      },
      {
        id: 4,
        question: "In numerical methods, the bisection method requires the function to be:",
        options: ["Differentiable", "Continuous", "Periodic", "Discrete"],
        answer: 1,
        explanation: "Bisection requires continuity on the interval and opposite signs at the endpoints.",
      },
      {
        id: 5,
        question: "Which function has the derivative `1/(1+x²)`?",
        options: ["arcsin(x)", "arctan(x)", "ln(x)", "e^{x}"],
        answer: 1,
        explanation: "The derivative of `arctan(x)` is `1/(1+x²)`.",
      },
      {
        id: 6,
        question: "What is the Laplace transform of `1`?",
        options: ["1/s", "s", "e^{s}", "0"],
        answer: 0,
        explanation: "The Laplace transform of 1 is `1/s`.",
      },
      {
        id: 7,
        question: "Which expression represents the magnitude of the complex number `4 + 3i`?",
        options: ["7", "5", "25", "1"],
        answer: 1,
        explanation: "Magnitude is the square root of (4² + 3²), which is 5.",
      },
      {
        id: 8,
        question: "What is the value of `∫₀¹ x² dx`?",
        options: ["1/3", "1/2", "1", "2/3"],
        answer: 0,
        explanation: "The integral of x² is x³/3; evaluated from 0 to 1 gives 1/3.",
      },
      {
        id: 9,
        question: "Which formula is used for the area of a sector of a circle with angle θ in radians?",
        options: ["½ r² θ", "r θ", "π r²", "r² θ"],
        answer: 0,
        explanation: "Area of a sector is ½ r² θ when θ is in radians.",
      },
      {
        id: 10,
        question: "Which numerical method is most appropriate for solving nonlinear equations using secant lines?",
        options: ["Newton-Raphson", "Bisection", "Secant method", "Trapezoidal rule"],
        answer: 2,
        explanation: "The secant method uses secant lines to approximate roots without derivatives.",
      },
    ],
  },
  {
    subject: "OOPs",
    slug: "oops",
    description: "Test your understanding of object-oriented programming concepts like classes, inheritance, polymorphism, and exception handling.",
    questions: [
      {
        id: 1,
        question: "Which concept of OOP allows an object to take many forms?",
        options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
        answer: 2,
        explanation: "Polymorphism allows objects to be treated as instances of their parent class.",
      },
      {
        id: 2,
        question: "Which keyword in Java is used to create a new object?",
        options: ["create", "new", "construct", "object"],
        answer: 1,
        explanation: "The `new` keyword allocates memory and constructs a new object.",
      },
      {
        id: 3,
        question: "What is the purpose of an interface?",
        options: [
          "To provide method implementations",
          "To define a contract of methods without implementation",
          "To store object data",
          "To manage memory",
        ],
        answer: 1,
        explanation: "An interface declares methods that implementing classes must define.",
      },
      {
        id: 4,
        question: "Which inheritance type allows one class to inherit from one parent only?",
        options: ["Single inheritance", "Multiple inheritance", "Multilevel inheritance", "Hierarchical inheritance"],
        answer: 0,
        explanation: "Single inheritance involves one child class inheriting from a single parent class.",
      },
      {
        id: 5,
        question: "Which keyword is used to call a parent class constructor in Java?",
        options: ["super", "this", "parent", "base"],
        answer: 0,
        explanation: "`super` invokes the parent class constructor.",
      },
      {
        id: 6,
        question: "What does encapsulation do?",
        options: [
          "Expose all data members",
          "Hide internal state and restrict access",
          "Provide multiple class forms",
          "Execute code faster",
        ],
        answer: 1,
        explanation: "Encapsulation hides internal data and exposes functionality through methods.",
      },
      {
        id: 7,
        question: "Which exception handling keyword is used to execute code regardless of whether an exception occurs?",
        options: ["try", "catch", "finally", "throw"],
        answer: 2,
        explanation: "The `finally` block runs whether an exception is thrown or not.",
      },
      {
        id: 8,
        question: "Which of these is not a pillar of OOP?",
        options: ["Abstraction", "Encapsulation", "Recursion", "Inheritance"],
        answer: 2,
        explanation: "Recursion is a programming technique, not an OOP pillar.",
      },
      {
        id: 9,
        question: "What is method overriding?",
        options: [
          "Defining a new method with a different name",
          "Replacing a parent class method in a subclass",
          "Creating multiple methods with same name and signature",
          "Calling a method from another class",
        ],
        answer: 1,
        explanation: "Overriding redefines a parent class method in a subclass.",
      },
      {
        id: 10,
        question: "Which access modifier allows a member to be visible only within its own class?",
        options: ["public", "protected", "private", "default"],
        answer: 2,
        explanation: "`private` members are only accessible inside the defining class.",
      },
    ],
  },
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug);
}
