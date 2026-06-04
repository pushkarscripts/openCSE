export const Ch5Content = () => {
    return (
        <div className="course-content">
            <p className="p-text">
                <span className="font-semibold">
                    Module V: Trees.
                </span>
                Trees are one of the most important non-linear data structures in
                Computer Science. Unlike arrays, stacks, and queues where data is
                stored sequentially, trees organize data in a hierarchical manner.
                Trees are widely used in databases, file systems, searching
                algorithms, compilers, and operating systems because they allow
                efficient storage, retrieval, and management of information.
            </p>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Introduction */}
            <section>

                <h3 className="section-heading">
                    Introduction to Tree
                </h3>

                <p className="p-text">
                    A Tree is a non-linear hierarchical data structure consisting of
                    nodes connected by edges. A tree begins with a special node called
                    the Root Node. Every node can have zero or more child nodes,
                    forming a parent-child relationship.
                </p>

                <p className="p-text">
                    Trees are particularly useful when information naturally follows
                    a hierarchical structure. Examples include file directories,
                    organization charts, family trees, and database indexing systems.
                </p>

                <ul className="section-list">
                    <li>Non-linear data structure</li>
                    <li>Stores data hierarchically</li>
                    <li>Consists of nodes and edges</li>
                    <li>Contains one Root Node</li>
                    <li>Supports efficient searching and sorting</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Characteristics */}
            <section>

                <h3 className="section-heading">
                    Characteristics of Tree
                </h3>

                <ul className="section-list">
                    <li>Hierarchical arrangement of data</li>
                    <li>Contains one unique Root Node</li>
                    <li>Every child node has exactly one parent</li>
                    <li>May contain multiple levels</li>
                    <li>Does not contain cycles</li>
                    <li>Supports dynamic data organization</li>
                    <li>Efficient for searching and traversal operations</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Components */}
            <section>

                <h3 className="section-heading">
                    Components of Tree
                </h3>

                <h4 className="font-semibold text-lg mt-6">
                    Root Node
                </h4>

                <p className="p-text">
                    The topmost node of the tree is called the Root Node.
                    Every tree contains exactly one root node.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Parent Node
                </h4>

                <p className="p-text">
                    A node that has one or more child nodes is called a Parent Node.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Child Node
                </h4>

                <p className="p-text">
                    A node directly connected below another node is called a Child Node.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Leaf Node
                </h4>

                <p className="p-text">
                    A node that has no children is called a Leaf Node.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Internal Node
                </h4>

                <p className="p-text">
                    Any node having at least one child is called an Internal Node.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Edge
                </h4>

                <p className="p-text">
                    The connection between two nodes is called an Edge.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Level
                </h4>

                <p className="p-text">
                    The position of a node within the hierarchy of a tree is called
                    its Level. The Root Node is at Level 0. Note: some textbooks
                    start counting from Level 1 instead of Level 0. This module
                    uses Level 0 as the root.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Height
                </h4>

                <p className="p-text">
                    The Height of a tree is the number of edges in the longest path
                    from the root node to a leaf node.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Tree Representation */}
            <section>

                <h3 className="section-heading">
                    Tree Representation
                </h3>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`            A
          /   \\
         B     C
        / \\   / \\
       D   E F   G`}
                    </pre>

                </div>

                <p className="p-text">
                    In the above tree, A is the Root Node. B and C are children of A.
                    D, E, F, and G are Leaf Nodes because they do not have any
                    children.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Degree, Depth, Height and Level */}
            <section>

                <h3 className="section-heading">
                    Degree, Depth, Height and Level
                </h3>

                <p className="p-text">
                    Understanding Degree, Depth, Height, and Level is important for
                    analyzing tree structures and solving tree-related problems.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`            A
          /   \\
         B     C
        / \\     \\
       D   E     F`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Degree of a Node
                </h4>

                <p className="p-text">
                    The Degree of a Node is the number of children it has.
                </p>

                <ul className="section-list">
                    <li>Degree(A) = 2</li>
                    <li>Degree(B) = 2</li>
                    <li>Degree(C) = 1</li>
                    <li>Degree(D) = 0</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Degree of a Tree
                </h4>

                <p className="p-text">
                    The Degree of a Tree is the maximum degree among all nodes.
                </p>

                <ul className="section-list">
                    <li>Degree(Tree) = 2</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Level of a Node
                </h4>

                <p className="p-text">
                    The Level of a Node indicates its position in the hierarchy.
                    The Root Node is considered Level 0.
                </p>

                <ul className="section-list">
                    <li>Level(A) = 0</li>
                    <li>Level(B) = 1</li>
                    <li>Level(C) = 1</li>
                    <li>Level(D) = 2</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Depth of a Node
                </h4>

                <p className="p-text">
                    Depth is the number of edges from the Root Node to a particular
                    node. Depth and Level produce the same numerical value for every
                    node. Both terms are commonly used in textbooks and refer to the
                    same measurement.
                </p>

                <ul className="section-list">
                    <li>Depth(A) = 0</li>
                    <li>Depth(B) = 1</li>
                    <li>Depth(E) = 2</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Height of the Tree
                </h4>

                <p className="p-text">
                    Height is the number of edges in the longest path from the Root
                    Node to a Leaf Node.
                </p>

                <ul className="section-list">
                    <li>Height(Tree) = 2</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Terminology */}
            <section>

                <h3 className="section-heading">
                    Important Tree Terminology
                </h3>

                <ul className="section-list">
                    <li>Root → Topmost node of the tree</li>
                    <li>Parent → Node having one or more children</li>
                    <li>Child → Node connected below a parent</li>
                    <li>Sibling → Nodes sharing the same parent</li>
                    <li>Leaf Node → Node with no children</li>
                    <li>Internal Node → Node having at least one child</li>
                    <li>Degree of Node → Number of children of a node</li>
                    <li>Degree of Tree → Maximum degree among all nodes</li>
                    <li>Path → Sequence of connected nodes</li>
                    <li>Height → Longest path from root to leaf</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Need */}
            <section>

                <h3 className="section-heading">
                    Need for Tree
                </h3>

                <p className="p-text">
                    Trees are used whenever information must be represented in a
                    hierarchical manner. They provide faster searching, insertion,
                    and deletion compared to many linear data structures.
                </p>

                <ul className="section-list">
                    <li>File system organization</li>
                    <li>Database indexing</li>
                    <li>Expression evaluation</li>
                    <li>Searching and sorting</li>
                    <li>Hierarchical data representation</li>
                    <li>Decision-making systems</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Types */}
            <section>

                <h3 className="section-heading">
                    Types of Trees
                </h3>

                <p className="p-text">
                    Trees are classified into different types based on their structure,
                    properties, and applications. Each type is designed for specific
                    requirements.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    1. General Tree
                </h4>

                <p className="p-text">
                    In a General Tree, a node can have any number of child nodes.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
                    <pre className="code-block">
                        {`          A
       /  |  \\
      B   C   D
     / \\
    E   F`}
                    </pre>
                </div>

                <h5 className="font-semibold mt-4">
                    Applications
                </h5>

                <ul className="section-list">
                    <li>Organization charts</li>
                    <li>Directory structures</li>
                    <li>XML and HTML documents</li>
                </ul>

                <h4 className="font-semibold text-lg mt-8">
                    2. Binary Tree
                </h4>

                <p className="p-text">
                    A Binary Tree is a tree in which each node can have at most
                    two children known as the Left Child and Right Child.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
                    <pre className="code-block">
                        {`          A
         / \\
        B   C
       / \\   \\
      D   E   F`}
                    </pre>
                </div>

                <h5 className="font-semibold mt-4">
                    Characteristics
                </h5>

                <ul className="section-list">
                    <li>Maximum two children per node</li>
                    <li>Left Child and Right Child</li>
                    <li>Most commonly used tree structure</li>
                </ul>

                <h4 className="font-semibold text-lg mt-8">
                    3. Full Binary Tree
                </h4>

                <p className="p-text">
                    A Full Binary Tree is a binary tree in which every node has either
                    zero children or exactly two children.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
                    <pre className="code-block">
                        {`          A
         / \\
        B   C
       / \\ / \\
      D  E F  G`}
                    </pre>
                </div>

                <h4 className="font-semibold text-lg mt-8">
                    4. Complete Binary Tree
                </h4>

                <p className="p-text">
                    A Complete Binary Tree is a binary tree in which all levels are
                    completely filled except possibly the last level, which is filled
                    from left to right.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
                    <pre className="code-block">
                        {`          A
         / \\
        B   C
       / \\ /
      D  E F`}
                    </pre>
                </div>

                <h4 className="font-semibold text-lg mt-8">
                    5. Perfect Binary Tree
                </h4>

                <p className="p-text">
                    A Perfect Binary Tree is a binary tree in which all internal nodes
                    have exactly two children and all leaf nodes are at the same level.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
                    <pre className="code-block">
                        {`          A
         / \\
        B   C
       / \\ / \\
      D  E F  G`}
                    </pre>
                </div>

                <h4 className="font-semibold text-lg mt-8">
                    6. Degenerate Tree
                </h4>

                <p className="p-text">
                    A Degenerate Tree is a tree in which every parent node has only
                    one child. It behaves similarly to a linked list.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
                    <pre className="code-block">
                        {`A
|
B
|
C
|
D`}
                    </pre>
                </div>

                <h4 className="font-semibold text-lg mt-8">
                    7. Binary Search Tree (BST)
                </h4>

                <p className="p-text">
                    A Binary Search Tree is a Binary Tree that follows a specific
                    ordering rule:
                </p>

                <ul className="section-list">
                    <li>All values in left subtree are smaller</li>
                    <li>All values in right subtree are larger</li>
                    <li>Both subtrees are also BSTs</li>
                </ul>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
                    <pre className="code-block">
                        {`           50
         /    \\
       30      70
      / \\     / \\
    20  40  60  80`}
                    </pre>
                </div>

                <h4 className="font-semibold text-lg mt-8">
                    8. AVL Tree
                </h4>

                <p className="p-text">
                    AVL Tree is a self-balancing Binary Search Tree where the height
                    difference between left and right subtrees is at most one.
                </p>

                <ul className="section-list">
                    <li>Self-balancing</li>
                    <li>Improves searching performance</li>
                    <li>Maintains logarithmic height</li>
                </ul>

                <h4 className="font-semibold text-lg mt-8">
                    9. B-Tree
                </h4>

                <p className="p-text">
                    A B-Tree is a self-balancing multiway search tree commonly used in
                    databases and file systems.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
                    <pre className="code-block">
                        {`         [20 40]
        /   |   \\
      [10] [30] [50]`}
                    </pre>
                </div>

                <h5 className="font-semibold mt-4">
                    Applications
                </h5>

                <ul className="section-list">
                    <li>Database indexing</li>
                    <li>File systems</li>
                    <li>Storage management</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Tree Traversals */}
            <section>

                <h3 className="section-heading">
                    Tree Traversal Techniques
                </h3>

                <p className="p-text">
                    Traversal is the process of visiting every node in a tree exactly
                    once in a specific order. Since trees are non-linear data
                    structures, there is no single natural way to visit all nodes.
                    Different traversal techniques are used depending on the
                    application.
                </p>

                <p className="p-text">
                    Tree traversals are broadly classified into:
                </p>

                <ul className="section-list">
                    <li>Depth First Traversal (DFS)</li>
                    <li>Breadth First Traversal (BFS)</li>
                </ul>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`           A
         /   \\
        B     C
       / \\   / \\
      D   E F   G`}
                    </pre>

                </div>

                <p className="p-text">
                    The above tree will be used throughout this section to understand
                    various traversal techniques.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* DFS */}
            <section>

                <h3 className="section-heading">
                    Depth First Traversal (DFS)
                </h3>

                <p className="p-text">
                    In Depth First Traversal, nodes are explored as deeply as possible
                    before moving to another branch. DFS is commonly implemented using
                    recursion or stacks.
                </p>

                <p className="p-text">
                    The three major DFS traversals are:
                </p>

                <ul className="section-list">
                    <li>Preorder Traversal</li>
                    <li>Inorder Traversal</li>
                    <li>Postorder Traversal</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Preorder */}
            <section>

                <h3 className="section-heading">
                    Preorder Traversal
                </h3>

                <p className="p-text">
                    In Preorder Traversal, the Root Node is visited first, followed by
                    the Left Subtree and then the Right Subtree.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Preorder:

Root → Left → Right`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Example
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`           A
         /   \\
        B     C
       / \\   / \\
      D   E F   G`}
                    </pre>

                </div>

                <p className="p-text">
                    Traversal Sequence:
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A → B → D → E → C → F → G`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    C Function
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`void preorder(struct Node* root){

    if(root==NULL)
        return;

    printf("%d ",root->data);

    preorder(root->left);
    preorder(root->right);
}`}
                    </pre>

                </div>

                <p className="p-text">
                    <strong>Time Complexity:</strong> O(n)
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Inorder */}
            <section>

                <h3 className="section-heading">
                    Inorder Traversal
                </h3>

                <p className="p-text">
                    In Inorder Traversal, the Left Subtree is visited first,
                    followed by the Root Node and then the Right Subtree.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Inorder:

Left → Root → Right`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Example
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`           A
         /   \\
        B     C
       / \\   / \\
      D   E F   G`}
                    </pre>

                </div>

                <p className="p-text">
                    Traversal Sequence:
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`D → B → E → A → F → C → G`}
                    </pre>

                </div>

                <p className="p-text">
                    For Binary Search Trees, Inorder Traversal visits nodes in
                    sorted order.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    C Function
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`void inorder(struct Node* root){

    if(root==NULL)
        return;

    inorder(root->left);

    printf("%d ",root->data);

    inorder(root->right);
}`}
                    </pre>

                </div>

                <p className="p-text">
                    <strong>Time Complexity:</strong> O(n)
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Postorder */}
            <section>

                <h3 className="section-heading">
                    Postorder Traversal
                </h3>

                <p className="p-text">
                    In Postorder Traversal, the Left Subtree is visited first,
                    followed by the Right Subtree and finally the Root Node.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Postorder:

Left → Right → Root`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Example
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`           A
         /   \\
        B     C
       / \\   / \\
      D   E F   G`}
                    </pre>

                </div>

                <p className="p-text">
                    Traversal Sequence:
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`D → E → B → F → G → C → A`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    C Function
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`void postorder(struct Node* root){

    if(root==NULL)
        return;

    postorder(root->left);
    postorder(root->right);

    printf("%d ",root->data);
}`}
                    </pre>

                </div>

                <p className="p-text">
                    <strong>Time Complexity:</strong> O(n)
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* BFS */}
            <section>

                <h3 className="section-heading">
                    Breadth First Traversal (Level Order Traversal)
                </h3>

                <p className="p-text">
                    Breadth First Traversal, also known as Level Order Traversal,
                    visits nodes level by level from top to bottom. It is commonly
                    implemented using a Queue.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Level Order:

Level 0 → A

Level 1 → B C

Level 2 → D E F G`}
                    </pre>

                </div>

                <p className="p-text">
                    Traversal Sequence:
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A → B → C → D → E → F → G`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    C Function
                </h4>

                <p className="p-text">
                    Level Order Traversal is implemented using a Queue. A node is
                    enqueued, and as each node is dequeued and visited, its left and
                    right children are enqueued.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`/* Requires #include<stdlib.h> */

void levelOrder(
    struct Node* root){

    if(root==NULL)
        return;

    struct Node* queue[100];
    int front=0, rear=0;

    queue[rear++]=root;

    while(front < rear){

        struct Node* curr=
        queue[front++];

        printf("%d ",
               curr->data);

        if(curr->left!=NULL)
            queue[rear++]=
            curr->left;

        if(curr->right!=NULL)
            queue[rear++]=
            curr->right;
    }
}`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Applications
                </h4>

                <ul className="section-list">
                    <li>Level-wise tree processing</li>
                    <li>Shortest path algorithms</li>
                    <li>Network routing</li>
                    <li>Breadth First Search (BFS)</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Traversal Comparison */}
            <section>

                <h3 className="section-heading">
                    Traversal Comparison
                </h3>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Traversal Type      Order

Preorder            Root Left Right

Inorder             Left Root Right

Postorder           Left Right Root

Level Order         Level by Level`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Traversal Flow Example */}
            <section>

                <h3 className="section-heading">
                    Traversal Flow Example
                </h3>

                <p className="p-text">
                    Consider the following Binary Tree:
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`          10
         /  \\
       20    30
      / \\   / \\
    40  50 60  70`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Preorder
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`10 → 20 → 40 → 50 → 30 → 60 → 70`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Inorder
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`40 → 20 → 50 → 10 → 60 → 30 → 70`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Postorder
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`40 → 50 → 20 → 60 → 70 → 30 → 10`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Level Order
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`10 → 20 → 30 → 40 → 50 → 60 → 70`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Complexity */}
            <section>

                <h3 className="section-heading">
                    Complexity Analysis of Traversals
                </h3>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Traversal          Time Complexity

Preorder                 O(n)

Inorder                  O(n)

Postorder                O(n)

Level Order              O(n)`}
                    </pre>

                </div>

                <p className="p-text">
                    Every traversal visits each node exactly once. Therefore, all
                    traversal techniques require O(n) time where n is the number of
                    nodes present in the tree.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Tree Operations */}
            <section>

                <h3 className="section-heading">
                    Tree Operations
                </h3>

                <p className="p-text">
                    Various operations can be performed on trees to insert, delete,
                    search, and analyze nodes. These operations form the foundation
                    of tree-based algorithms and are extensively used in Binary Trees
                    and Binary Search Trees (BSTs).
                </p>

                <p className="p-text">
                    In this section, examples are demonstrated using Binary Search
                    Trees because insertion, searching, and deletion are clearly
                    defined using ordering properties.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Search */}
            <section>

                <h3 className="section-heading">
                    Search Operation
                </h3>

                <p className="p-text">
                    Searching determines whether a particular value exists within
                    the tree.
                </p>

                <p className="p-text">
                    In a Binary Search Tree, searching is efficient because values
                    smaller than the current node are located in the left subtree,
                    while larger values are located in the right subtree.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`           50
         /    \\
       30      70
      / \\     / \\
    20  40  60  80`}
                    </pre>

                </div>

                <p className="p-text">
                    To search for 60:
                </p>

                <ul className="section-list">
                    <li>Compare 60 with 50 → Move Right</li>
                    <li>Compare 60 with 70 → Move Left</li>
                    <li>60 Found</li>
                </ul>

                <p className="p-text">
                    <strong>Average Time Complexity:</strong> O(log n)
                </p>

                <p className="p-text">
                    <strong>Worst Case:</strong> O(n)
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Insert */}
            <section>

                <h3 className="section-heading">
                    Insert Operation
                </h3>

                <p className="p-text">
                    Insertion adds a new node while maintaining the Binary Search
                    Tree property.
                </p>

                <p className="p-text">
                    The new value is compared with existing nodes and inserted at
                    the appropriate leaf position.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Initial Tree
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`         50
        /  \\
      30    70
     / \\   /
   20  40 60`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Insert 80
                </h4>

                <ul className="section-list">
                    <li>80 &gt; 50 → Move Right</li>
                    <li>80 &gt; 70 → Move Right</li>
                    <li>Right Child is NULL</li>
                    <li>Insert 80</li>
                </ul>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`           50
         /    \\
       30      70
      / \\     / \\
    20  40  60  80`}
                    </pre>

                </div>

                <p className="p-text">
                    <strong>Average Time Complexity:</strong> O(log n)
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Delete */}
            <section>

                <h3 className="section-heading">
                    Delete Operation
                </h3>

                <p className="p-text">
                    Deletion is the most important and slightly complex tree
                    operation. Three different cases may occur while deleting
                    a node from a Binary Search Tree.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Case 1: Deleting a Leaf Node
                </h4>

                <p className="p-text">
                    If the node has no children, it can simply be removed.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Delete 20

       50
      /  \\
    30    70
   /
 20`}
                    </pre>

                </div>

                <p className="p-text">
                    Since 20 is a leaf node, it can be deleted directly.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Case 2: Deleting a Node with One Child
                </h4>

                <p className="p-text">
                    The child replaces the deleted node.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Before Deletion

        50
       /  \\
     30    70
    /
  20

Delete 30

        50
       /  \\
     20    70`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Case 3: Deleting a Node with Two Children
                </h4>

                <p className="p-text">
                    Replace the node with its Inorder Successor
                    (smallest value in the right subtree). After copying the
                    successor&apos;s value into the deleted node&apos;s position, the
                    successor node must also be deleted from the right subtree
                    to avoid duplicates.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`           50
         /    \\
       30      70
      / \\     / \\
    20  40  60  80

Delete 50

Inorder Successor = 60

Step 1: Copy 60 into root position
Step 2: Delete 60 from right subtree

           60
         /    \\
       30      70
      / \\       \\
    20  40      80`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Height */}
            <section>

                <h3 className="section-heading">
                    Find Height of Tree
                </h3>

                <p className="p-text">
                    The Height of a tree is the number of edges in the longest path
                    from the root node to a leaf node.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`           A
         /   \\
        B     C
       / \\
      D   E`}
                    </pre>

                </div>

                <p className="p-text">
                    Longest Path:
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A → B → D

Height = 2 Edges`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Recursive Formula
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Height =
1 + max(
height(left),
height(right)
)`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Count Nodes */}
            <section>

                <h3 className="section-heading">
                    Count Total Nodes
                </h3>

                <p className="p-text">
                    Counting nodes determines how many nodes are present in a tree.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`           A
         /   \\
        B     C
       / \\   / \\
      D   E F   G`}
                    </pre>

                </div>

                <p className="p-text">
                    Total Nodes = 7
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Formula
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Nodes =
1 +
Count(left) +
Count(right)`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Count Leaf Nodes */}
            <section>

                <h3 className="section-heading">
                    Count Leaf Nodes
                </h3>

                <p className="p-text">
                    A Leaf Node is a node having no children.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`           A
         /   \\
        B     C
       / \\   / \\
      D   E F   G`}
                    </pre>

                </div>

                <p className="p-text">
                    Leaf Nodes:
                </p>

                <ul className="section-list">
                    <li>D</li>
                    <li>E</li>
                    <li>F</li>
                    <li>G</li>
                </ul>

                <p className="p-text">
                    Number of Leaf Nodes = 4
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Operation Flow Example */}
            <section>

                <h3 className="section-heading">
                    Operation Flow Example
                </h3>

                <p className="p-text">
                    The following example demonstrates how insertion, searching,
                    and deletion affect a Binary Search Tree.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Initial Tree

        50
       /  \\
     30    70


Step 1: Insert(20)

        50
       /  \\
     30    70
    /
   20


Step 2: Insert(40)

        50
       /  \\
     30    70
    / \\
   20 40


Step 3: Search(40)

Found


Step 4: Delete(20)

        50
       /  \\
     30    70
       \\
        40`}
                    </pre>

                </div>

                <p className="p-text">
                    This example demonstrates how Binary Search Trees maintain
                    their ordering property after every operation.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Complexity */}
            <section>

                <h3 className="section-heading">
                    Complexity Analysis of Tree Operations
                </h3>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Operation       Average      Worst

Search           O(log n)     O(n)

Insert           O(log n)     O(n)

Delete           O(log n)     O(n)

Find Height      O(n)         O(n)

Count Nodes      O(n)         O(n)

Count Leaves     O(n)         O(n)`}
                    </pre>

                </div>

                <p className="p-text">
                    Binary Search Trees provide logarithmic performance when the
                    tree remains balanced. In the worst case, a highly skewed tree
                    behaves like a linked list, resulting in O(n) complexity.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Tree Implementation */}
            <section>

                <h3 className="section-heading">
                    Tree Implementation in C
                </h3>

                <p className="p-text">
                    Trees are commonly implemented using linked structures where each
                    node contains data and pointers to its child nodes. Unlike arrays,
                    tree nodes are dynamically allocated in memory.
                </p>

                <p className="p-text">
                    Binary Trees and Binary Search Trees are generally implemented
                    using structures and pointers in C. All programs in this section
                    require <strong>#include&lt;stdlib.h&gt;</strong> for dynamic
                    memory functions such as malloc() and free().
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Node Structure */}
            <section>

                <h3 className="section-heading">
                    Tree Node Structure
                </h3>

                <p className="p-text">
                    Each node contains:
                </p>

                <ul className="section-list">
                    <li>Data Field</li>
                    <li>Pointer to Left Child</li>
                    <li>Pointer to Right Child</li>
                </ul>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`struct Node{

    int data;

    struct Node* left;
    struct Node* right;
};`}
                    </pre>

                </div>

                <p className="p-text">
                    The left pointer stores the address of the left child, while
                    the right pointer stores the address of the right child.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Create Node */}
            <section>

                <h3 className="section-heading">
                    Creating a New Node
                </h3>

                <p className="p-text">
                    New nodes are dynamically created using malloc().
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`#include<stdio.h>
#include<stdlib.h>

struct Node{

    int data;

    struct Node* left;
    struct Node* right;
};

struct Node* createNode(
    int value){

    struct Node* newNode=
    (struct Node*)
    malloc(sizeof(struct Node));

    newNode->data=value;

    newNode->left=NULL;
    newNode->right=NULL;

    return newNode;
}`}
                    </pre>

                </div>

                <p className="p-text">
                    The function allocates memory, stores the value, initializes
                    child pointers to NULL, and returns the node address.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Binary Tree Example */}
            <section>

                <h3 className="section-heading">
                    Creating a Binary Tree Manually
                </h3>

                <p className="p-text">
                    Nodes can be manually connected to create a Binary Tree.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`struct Node* root=
createNode(10);

root->left=
createNode(20);

root->right=
createNode(30);

root->left->left=
createNode(40);

root->left->right=
createNode(50);`}
                    </pre>

                </div>

                <p className="p-text">
                    The resulting tree becomes:
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`          10
         /  \\
       20    30
      / \\
    40  50`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Preorder Program */}
            <section>

                <h3 className="section-heading">
                    Preorder Traversal Program
                </h3>

                <p className="p-text">
                    Visits Root → Left → Right.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`void preorder(
    struct Node* root){

    if(root==NULL)
        return;

    printf("%d ",
           root->data);

    preorder(root->left);
    preorder(root->right);
}`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Inorder Program */}
            <section>

                <h3 className="section-heading">
                    Inorder Traversal Program
                </h3>

                <p className="p-text">
                    Visits Left → Root → Right.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`void inorder(
    struct Node* root){

    if(root==NULL)
        return;

    inorder(root->left);

    printf("%d ",
           root->data);

    inorder(root->right);
}`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Postorder Program */}
            <section>

                <h3 className="section-heading">
                    Postorder Traversal Program
                </h3>

                <p className="p-text">
                    Visits Left → Right → Root.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`void postorder(
    struct Node* root){

    if(root==NULL)
        return;

    postorder(root->left);
    postorder(root->right);

    printf("%d ",
           root->data);
}`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* BST Insert */}
            <section>

                <h3 className="section-heading">
                    Binary Search Tree Insertion
                </h3>

                <p className="p-text">
                    BST insertion places a node in its correct position according
                    to the Binary Search Tree property.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`struct Node* insert(
    struct Node* root,
    int value){

    if(root==NULL)
        return createNode(
               value);

    if(value <
       root->data)

       root->left=
       insert(
       root->left,
       value);

    else if(value >
            root->data)

       root->right=
       insert(
       root->right,
       value);

    return root;
}`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* BST Search */}
            <section>

                <h3 className="section-heading">
                    Binary Search Tree Search
                </h3>

                <p className="p-text">
                    Searching compares the target value with the current node and
                    moves left or right accordingly.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`struct Node* search(
    struct Node* root,
    int key){

    if(root==NULL ||
       root->data==key)

       return root;

    if(key <
       root->data)

       return search(
              root->left,
              key);

    return search(
           root->right,
           key);
}`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Inorder Successor */}
            <section>

                <h3 className="section-heading">
                    Finding Inorder Successor
                </h3>

                <p className="p-text">
                    During BST deletion, a node having two children is replaced by
                    its Inorder Successor. The Inorder Successor is the smallest
                    value present in the right subtree.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`struct Node* minValueNode(
    struct Node* node){

    struct Node* current=
    node;

    while(current &&
          current->left!=NULL)

          current=
          current->left;

    return current;
}`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* BST Delete */}
            <section>

                <h3 className="section-heading">
                    Binary Search Tree Deletion
                </h3>

                <p className="p-text">
                    BST deletion handles three situations:
                </p>

                <ul className="section-list">
                    <li>Node has no children</li>
                    <li>Node has one child</li>
                    <li>Node has two children — replaced by Inorder Successor,
                        then the successor is deleted from the right subtree</li>
                </ul>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`struct Node* deleteNode(
    struct Node* root,
    int key){

    if(root==NULL)
        return root;

    if(key < root->data)

        root->left=
        deleteNode(
        root->left,key);

    else if(key >
            root->data)

        root->right=
        deleteNode(
        root->right,key);

    else{

        if(root->left==
           NULL){

            struct Node* temp=
            root->right;

            free(root);

            return temp;
        }

        else if(root->right==
                NULL){

            struct Node* temp=
            root->left;

            free(root);

            return temp;
        }

        struct Node* temp=
        minValueNode(
        root->right);

        root->data=
        temp->data;

        root->right=
        deleteNode(
        root->right,
        temp->data);
    }

    return root;
}`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Height Program */}
            <section>

                <h3 className="section-heading">
                    Height of Tree Program
                </h3>

                <p className="p-text">
                    Height can be calculated recursively by finding the maximum
                    height among left and right subtrees.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`int max(int a,int b){

    return (a>b)?
            a:b;
}

int height(
    struct Node* root){

    if(root==NULL)
        return -1;

    return 1 +
           max(
           height(
           root->left),

           height(
           root->right));
}`}
                    </pre>

                </div>

                <p className="p-text">
                    The base case returns -1 for an empty subtree so that a tree
                    containing only one node correctly returns height 0, which
                    matches the definition of height as the number of edges in the
                    longest root-to-leaf path. A single node has no edges below it,
                    so its height is 0.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Count Nodes Program */}
            <section>

                <h3 className="section-heading">
                    Count Total Nodes Program
                </h3>

                <p className="p-text">
                    The total number of nodes can be calculated recursively.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`int countNodes(
    struct Node* root){

    if(root==NULL)
        return 0;

    return 1 +
           countNodes(
           root->left) +
           countNodes(
           root->right);
}`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Count Leaf Nodes */}
            <section>

                <h3 className="section-heading">
                    Count Leaf Nodes Program
                </h3>

                <p className="p-text">
                    A leaf node is a node having no children.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`int countLeaves(
    struct Node* root){

    if(root==NULL)
        return 0;

    if(root->left==NULL &&
       root->right==NULL)

       return 1;

    return countLeaves(
           root->left) +
           countLeaves(
           root->right);
}`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Complete Example */}
            <section>

                <h3 className="section-heading">
                    Complete BST Example
                </h3>

                <p className="p-text">
                    The following sequence creates a Binary Search Tree.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Insert:

50, 30, 70,
20, 40, 60, 80


Resulting BST

           50
         /    \\
       30      70
      / \\     / \\
    20  40  60  80`}
                    </pre>

                </div>

                <p className="p-text">
                    Inorder Traversal Output:
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`20 30 40 50 60 70 80`}
                    </pre>

                </div>

                <p className="p-text">
                    The output appears in sorted order because inorder traversal of
                    a Binary Search Tree always produces sorted data.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Comparison */}
            <section>

                <h3 className="section-heading">
                    Comparison: Binary Tree vs Binary Search Tree
                </h3>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Feature              Binary Tree         BST

Ordering Rule         No                 Yes

Searching             O(n)               O(log n)*

Insertion             Any Position       Ordered

Sorted Output         No                 Yes

Inorder Traversal     Unsorted           Sorted

Implementation        Simple             More Structured`}
                    </pre>

                </div>

                <p className="p-text">
                    *For balanced Binary Search Trees, searching requires O(log n)
                    time on average.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Applications */}
            <section>

                <h3 className="section-heading">
                    Applications of Trees
                </h3>

                <p className="p-text">
                    Trees are used extensively in computer science because they
                    efficiently represent hierarchical and searchable data.
                </p>

                <ul className="section-list">
                    <li>Database indexing systems</li>
                    <li>File and folder organization</li>
                    <li>Operating systems</li>
                    <li>Expression evaluation</li>
                    <li>Compiler design</li>
                    <li>Artificial Intelligence</li>
                    <li>Decision support systems</li>
                    <li>Network routing algorithms</li>
                    <li>Auto-complete and dictionaries</li>
                    <li>Search engines</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Real Life Examples */}
            <section>

                <h3 className="section-heading">
                    Real Life Examples of Trees
                </h3>

                <ul className="section-list">
                    <li>Family Tree Structure</li>
                    <li>Company Organization Hierarchy</li>
                    <li>Folder and File Systems</li>
                    <li>University Administrative Structure</li>
                    <li>Website Navigation Menus</li>
                    <li>Tournament Brackets</li>
                    <li>Decision Trees in Machine Learning</li>
                    <li>Biological Classification Systems</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Practical Example */}
            <section>

                <h3 className="section-heading">
                    Practical Example using Trees
                </h3>

                <p className="p-text">
                    One of the most common applications of trees is representing a
                    computer file system.
                </p>

                <p className="p-text">
                    Consider the following directory structure:
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`C:
|
|-- Documents
|    |-- Notes.txt
|    |-- Report.pdf
|
|-- Pictures
|    |-- Photo1.jpg
|    |-- Photo2.jpg
|
|-- Downloads
     |-- Setup.exe`}
                    </pre>

                </div>

                <p className="p-text">
                    The root directory acts as the Root Node, folders behave as
                    Internal Nodes, and files act as Leaf Nodes.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Advantages */}
            <section>

                <h3 className="section-heading">
                    Advantages of Trees
                </h3>

                <ul className="section-list">
                    <li>Represents hierarchical relationships naturally</li>
                    <li>Efficient searching and insertion</li>
                    <li>Supports dynamic memory allocation</li>
                    <li>Provides faster access than linear structures</li>
                    <li>Useful for sorting and indexing</li>
                    <li>Scalable for large datasets</li>
                    <li>Foundation for advanced data structures</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Limitations */}
            <section>

                <h3 className="section-heading">
                    Limitations of Trees
                </h3>

                <ul className="section-list">
                    <li>Implementation is more complex than arrays</li>
                    <li>Requires additional memory for pointers</li>
                    <li>Unbalanced trees can reduce performance</li>
                    <li>Deletion operations can be complicated</li>
                    <li>Recursive algorithms may consume stack memory</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Summary */}
            <section>

                <h3 className="section-heading">
                    Summary
                </h3>

                <p className="p-text">
                    Trees are hierarchical non-linear data structures consisting of
                    nodes connected by edges. They are widely used for representing
                    structured data, supporting efficient searching, insertion, and
                    deletion operations. Binary Search Trees improve search
                    efficiency by maintaining an ordered arrangement of values.
                    Tree traversal techniques such as Preorder, Inorder, Postorder,
                    and Level Order enable systematic processing of nodes.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Interview Questions */}
            <section>

                <h3 className="section-heading">
                    Interview Questions
                </h3>

                <h4 className="font-semibold text-lg mt-6">
                    1. What is a Tree?
                </h4>

                <p className="p-text">
                    A Tree is a hierarchical non-linear data structure consisting
                    of nodes connected by edges.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    2. What is the Root Node?
                </h4>

                <p className="p-text">
                    The topmost node of a tree is called the Root Node.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    3. What is a Leaf Node?
                </h4>

                <p className="p-text">
                    A node with no children is called a Leaf Node.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    4. What is the Height of a Tree?
                </h4>

                <p className="p-text">
                    Height is the number of edges in the longest path from the
                    root node to a leaf node.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    5. What is a Binary Tree?
                </h4>

                <p className="p-text">
                    A Binary Tree is a tree in which every node can have at most
                    two children.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    6. What is a Binary Search Tree?
                </h4>

                <p className="p-text">
                    A BST is a Binary Tree where left subtree values are smaller
                    and right subtree values are larger than the parent node.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    7. What is Inorder Traversal?
                </h4>

                <p className="p-text">
                    Inorder Traversal visits nodes in the order:
                    Left → Root → Right.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    8. Why does Inorder Traversal of BST produce sorted output?
                </h4>

                <p className="p-text">
                    Because all left subtree values are smaller and all right
                    subtree values are larger than the current node.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    9. What is Preorder Traversal?
                </h4>

                <p className="p-text">
                    Root → Left → Right.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    10. What is Postorder Traversal?
                </h4>

                <p className="p-text">
                    Left → Right → Root.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    11. What is Level Order Traversal?
                </h4>

                <p className="p-text">
                    Traversal performed level by level using a queue.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    12. What is a Full Binary Tree?
                </h4>

                <p className="p-text">
                    Every node contains either 0 or 2 children.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    13. What is a Complete Binary Tree?
                </h4>

                <p className="p-text">
                    All levels are completely filled except possibly the last,
                    which is filled from left to right.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    14. What is an AVL Tree?
                </h4>

                <p className="p-text">
                    An AVL Tree is a self-balancing Binary Search Tree.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    15. What is a B-Tree?
                </h4>

                <p className="p-text">
                    A self-balancing multiway search tree commonly used in
                    databases and file systems.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    16. What is the average search complexity of a BST?
                </h4>

                <p className="p-text">
                    O(log n)
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    17. What is the worst-case search complexity of a BST?
                </h4>

                <p className="p-text">
                    O(n)
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    18. Why are Trees preferred over Linked Lists for searching?
                </h4>

                <p className="p-text">
                    Trees can provide logarithmic search performance whereas linked
                    lists generally require linear searching.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    19. Which traversal is used to delete a tree?
                </h4>

                <p className="p-text">
                    Postorder Traversal because child nodes are processed before
                    their parent nodes.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    20. Give two applications of Trees.
                </h4>

                <p className="p-text">
                    Database indexing and file system organization.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    21. What is the difference between a Full Binary Tree and a Complete Binary Tree?
                </h4>

                <p className="p-text">
                    In a Full Binary Tree, every node has either 0 or 2 children.
                    In a Complete Binary Tree, all levels are completely filled
                    except possibly the last level, which is filled from left to
                    right.
                </p>

            </section>
        </div>
    );
};
