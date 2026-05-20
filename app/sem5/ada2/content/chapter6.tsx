export const Ch6Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Dynamic Programming (DP) is an advanced algorithmic technique used to solve complex optimization problems. 
        It works by breaking a problem down into simpler, overlapping subproblems, solving each subproblem exactly 
        once, and storing their solutions in a table so that you never have to recompute the same answer twice.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Core Prerequisites for Dynamic Programming
          </span>
        </h3>

        <ul className="section-list">
          <li>
            <strong>Overlapping Subproblems:</strong> The problem can be broken down into smaller subproblems which are reused multiple times.
          </li>

          <li>
            <strong>Optimal Substructure:</strong> The optimal solution to the main problem can be constructed directly from the optimal solutions of its subproblems.
          </li>

          <li>
            <strong>Data Storage:</strong> Uses a dedicated cache data structure (like an array or hash map) to hold answers.
          </li>

          <li>
            <strong>Time-Space Tradeoff:</strong> It consumes memory space in exchange for drastically reducing exponential time complexities down to polynomial time.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">The Problem with Naive Recursion</p>

          <pre>{`Standard Fibonacci Recursion Tree for F(5):
                 F(5)
               /      \\
            F(4)       F(3)
           /    \\     /    \\
         F(3)  F(2)  F(2)  F(1)

Notice how F(3) and F(2) are computed multiple times!
Dynamic Programming fixes this by saving the first computed result.`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            The Two Approaches: Memoization vs Tabulation
          </span>
        </h3>

        <ul className="section-list">
          <li>
            <strong>Top-Down (Memoization):</strong> You start with the main problem and solve it recursively. Before evaluating a subproblem, you check if its answer is already in your cache.
          </li>

          <li>
            <strong>Bottom-Up (Tabulation):</strong> Avoids recursion entirely. You start by solving the smallest possible subproblems first, filling up an iterative table from left to right.
          </li>

          <li>
            Memoization suffers from recursive call stack overhead, which can cause stack overflow errors on huge datasets.
          </li>

          <li>
            Tabulation is generally faster and cleaner because it utilizes straightforward, iterative array indexing loops.
          </li>
        </ul>

        <div className="tip-block">
          <p>
            <strong>Mental Shortcut:</strong> Memoization is "Lazy" (computes values only when absolutely requested), while Tabulation is "Eager" (pre-computes all sub-states systematically from the ground up).
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Classic Application: 0/1 Knapsack Problem
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Unlike the Fractional Knapsack problem, items cannot be broken into smaller fractions. You must either take an item (1) or leave it completely (0).
          </li>

          <li>
            The Greedy approach completely fails here because choosing the local maximum value might lock out room for a better combined set.
          </li>

          <li>
            DP handles this by building a 2D grid tracking `dp[item_index][remaining_capacity]`.
          </li>

          <li>
            <strong>Time & Space Complexity:</strong> O(n * W), where n is the number of items and W is the total target weight capacity.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">0/1 Knapsack Decisions</p>

          <pre>{`For each item, we evaluate two distinct sub-states:

Option 1: Exclude the item
→ Max profit remains the same as the previous item's capacity state.

Option 2: Include the item (if weight allows)
→ Current item value + Max profit of the remaining weight capacity.

DP State Equation: dp[i][w] = max(dp[i-1][w], val[i-1] + dp[i-1][w - wt[i-1]])`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Classic Application: Longest Common Subsequence (LCS)
          </span>
        </h3>

        <ul className="section-list">
          <li>
            LCS finds the longest subsequence present in two distinct strings in the exact same relative order (characters do not need to be consecutive).
          </li>

          <li>
            Essential for text diff tools, spell checkers, and bioinformatics gene sequence matching.
          </li>

          <li>
            If characters match, the current grid block increments the diagonal cell state value by 1.
          </li>

          <li>
            If characters mismatch, the grid cell pulls the maximum value from either its top or its left neighbor cell.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">LCS Grid Matching Logic</p>

          <pre>{`String 1 = "ABCD", String 2 = "ACBD"

If String1[i] == String2[j]:
    LCS[i][j] = 1 + LCS[i-1][j-1]
Else:
    LCS[i][j] = max(LCS[i-1][j], LCS[i][j-1])

Final Output Value yields 3 (Subsequence: "ABD" or "ACD")`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Algorithmic Paradigm Matrix: DP vs Greedy vs Divide & Conquer
          </span>
        </h3>

        <ul className="section-list">
          <li>
            <strong>Divide & Conquer:</strong> Splits problems into independent subproblems (e.g., Merge Sort splits completely distinct array halves).
          </li>

          <li>
            <strong>Greedy Method:</strong> Makes a irreversible, localized selection at each step with no backtracking capability.
          </li>

          <li>
            <strong>Dynamic Programming:</strong> Extensively searches all dependent overlapping paths but tracks answers systematically to guarantee global optimality.
          </li>

          <li>
            DP is usually selected when a greedy strategy fails to prove mathematically stable or correct across varying test conditions.
          </li>
        </ul>

        <div className="tip-block">
          <p>
            <strong>Summary Formula:</strong> Dynamic Programming = Smart Recursion + Storing Shared State Data Results.
          </p>
        </div>
      </section>
    </div>
  );
};