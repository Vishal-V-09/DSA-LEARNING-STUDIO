const app = document.getElementById("app");
const sidebar = document.getElementById("sidebar");
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const menuItems = document.querySelectorAll(".sidebar li");
let arrayData = [];
let arrayAnimating = false;
let stringData = [];
let stringAnimating = false;
let quizQuestions = [];
let quizCurrentIndex = 0;
let quizScore = 0;
let quizAnswers = [];
let originalInput = "";
let animationSpeed = 600;
let quickComparisons = 0;
let searchComparisons = 0;
let quickSwaps = 0;
let quickPass = 0;
let stack = [];
const STACK_LIMIT = 10;
let stackArea;
let isAnimating = false;
let queue = [];
const QUEUE_LIMIT = 10;
let queueArea;
let isQueueAnimating = false;
let linkedList = [];
let linkedListArea;
const LIST_LIMIT = 10;
let isListAnimating = false;
const leetcodeProblems = [

    // =========================
    // BASIC MATH
    // =========================

    {
        number: 9,
        title: "Palindrome Number",
        category: "Basic Math",
        tags: ["Math"],
        url: "https://leetcode.com/problems/palindrome-number/"
    },
    {
        number: 7,
        title: "Reverse Integer",
        category: "Basic Math",
        tags: ["Math"],
        url: "https://leetcode.com/problems/reverse-integer/"
    },
    {
        number: 412,
        title: "FizzBuzz",
        category: "Basic Math",
        tags: ["Math", "Simulation"],
        url: "https://leetcode.com/problems/fizz-buzz/"
    },
    {
        number: 204,
        title: "Count Primes",
        category: "Basic Math",
        tags: ["Math", "Sieve"],
        url: "https://leetcode.com/problems/count-primes/"
    },
    {
        number: 202,
        title: "Happy Number",
        category: "Basic Math",
        tags: ["Math", "Hash Table"],
        url: "https://leetcode.com/problems/happy-number/"
    },
    {
        number: 13,
        title: "Roman to Integer",
        category: "Basic Math",
        tags: ["Math", "String"],
        url: "https://leetcode.com/problems/roman-to-integer/"
    },
    {
        number: 1071,
        title: "Greatest Common Divisor of Strings",
        category: "Basic Math",
        tags: ["Math", "String"],
        url: "https://leetcode.com/problems/greatest-common-divisor-of-strings/"
    },
    {
        number: 231,
        title: "Power of Two",
        category: "Basic Math",
        tags: ["Math", "Bit Manipulation"],
        url: "https://leetcode.com/problems/power-of-two/"
    },
    {
        number: 326,
        title: "Power of Three",
        category: "Basic Math",
        tags: ["Math"],
        url: "https://leetcode.com/problems/power-of-three/"
    },
    {
        number: 168,
        title: "Excel Sheet Column Title",
        category: "Basic Math",
        tags: ["Math", "String"],
        url: "https://leetcode.com/problems/excel-sheet-column-title/"
    },
    {
        number: 172,
        title: "Factorial Trailing Zeroes",
        category: "Basic Math",
        tags: ["Math"],
        url: "https://leetcode.com/problems/factorial-trailing-zeroes/"
    },
    {
        number: 50,
        title: "Pow(x, n)",
        category: "Basic Math",
        tags: ["Math", "Recursion"],
        url: "https://leetcode.com/problems/powx-n/"
    },
    {
        number: 29,
        title: "Divide Two Integers",
        category: "Basic Math",
        tags: ["Math", "Bit Manipulation"],
        url: "https://leetcode.com/problems/divide-two-integers/"
    },
    {
        number: 43,
        title: "Multiply Strings",
        category: "Basic Math",
        tags: ["Math", "String"],
        url: "https://leetcode.com/problems/multiply-strings/"
    },


    // =========================
    // ARRAYS
    // =========================

    {
        number: 1,
        title: "Two Sum",
        category: "Arrays",
        tags: ["Array", "Hash Table"],
        url: "https://leetcode.com/problems/two-sum/"
    },
    {
        number: 121,
        title: "Best Time to Buy and Sell Stock",
        category: "Arrays",
        tags: ["Array", "Greedy"],
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
    },
    {
        number: 53,
        title: "Maximum Subarray",
        category: "Arrays",
        tags: ["Array", "Dynamic Programming"],
        url: "https://leetcode.com/problems/maximum-subarray/"
    },
    {
        number: 88,
        title: "Merge Sorted Array",
        category: "Arrays",
        tags: ["Array", "Two Pointers"],
        url: "https://leetcode.com/problems/merge-sorted-array/"
    },
    {
        number: 26,
        title: "Remove Duplicates from Sorted Array",
        category: "Arrays",
        tags: ["Array", "Two Pointers"],
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
    },
    {
        number: 189,
        title: "Rotate Array",
        category: "Arrays",
        tags: ["Array"],
        url: "https://leetcode.com/problems/rotate-array/"
    },
    {
        number: 238,
        title: "Product of Array Except Self",
        category: "Arrays",
        tags: ["Array", "Prefix Sum"],
        url: "https://leetcode.com/problems/product-of-array-except-self/"
    },
    {
        number: 169,
        title: "Majority Element",
        category: "Arrays",
        tags: ["Array", "Hash Table"],
        url: "https://leetcode.com/problems/majority-element/"
    },
    {
        number: 283,
        title: "Move Zeroes",
        category: "Arrays",
        tags: ["Array", "Two Pointers"],
        url: "https://leetcode.com/problems/move-zeroes/"
    },
    {
        number: 217,
        title: "Contains Duplicate",
        category: "Arrays",
        tags: ["Array", "Hash Table"],
        url: "https://leetcode.com/problems/contains-duplicate/"
    },
    {
        number: 268,
        title: "Missing Number",
        category: "Arrays",
        tags: ["Array", "Math"],
        url: "https://leetcode.com/problems/missing-number/"
    },
    {
        number: 448,
        title: "Find All Numbers Disappeared in an Array",
        category: "Arrays",
        tags: ["Array", "Hash Table"],
        url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/"
    },
    {
        number: 75,
        title: "Sort Colors",
        category: "Arrays",
        tags: ["Array", "Two Pointers"],
        url: "https://leetcode.com/problems/sort-colors/"
    },
    {
        number: 31,
        title: "Next Permutation",
        category: "Arrays",
        tags: ["Array"],
        url: "https://leetcode.com/problems/next-permutation/"
    },
    {
        number: 42,
        title: "Trapping Rain Water",
        category: "Arrays",
        tags: ["Array", "Two Pointers"],
        url: "https://leetcode.com/problems/trapping-rain-water/"
    },
    {
        number: 11,
        title: "Container With Most Water",
        category: "Arrays",
        tags: ["Array", "Two Pointers"],
        url: "https://leetcode.com/problems/container-with-most-water/"
    },
    {
        number: 134,
        title: "Gas Station",
        category: "Arrays",
        tags: ["Array", "Greedy"],
        url: "https://leetcode.com/problems/gas-station/"
    },
    {
        number: 55,
        title: "Jump Game",
        category: "Arrays",
        tags: ["Array", "Greedy"],
        url: "https://leetcode.com/problems/jump-game/"
    },
    {
        number: 45,
        title: "Jump Game II",
        category: "Arrays",
        tags: ["Array", "Greedy"],
        url: "https://leetcode.com/problems/jump-game-ii/"
    },
    {
        number: 135,
        title: "Candy",
        category: "Arrays",
        tags: ["Array", "Greedy"],
        url: "https://leetcode.com/problems/candy/"
    },


    // =========================
    // STRINGS
    // =========================

    {
        number: 242,
        title: "Valid Anagram",
        category: "Strings",
        tags: ["String", "Hash Table"],
        url: "https://leetcode.com/problems/valid-anagram/"
    },
    {
        number: 125,
        title: "Valid Palindrome",
        category: "Strings",
        tags: ["String", "Two Pointers"],
        url: "https://leetcode.com/problems/valid-palindrome/"
    },
    {
        number: 14,
        title: "Longest Common Prefix",
        category: "Strings",
        tags: ["String"],
        url: "https://leetcode.com/problems/longest-common-prefix/"
    },
    {
        number: 344,
        title: "Reverse String",
        category: "Strings",
        tags: ["String", "Two Pointers"],
        url: "https://leetcode.com/problems/reverse-string/"
    },
    {
        number: 151,
        title: "Reverse Words in a String",
        category: "Strings",
        tags: ["String"],
        url: "https://leetcode.com/problems/reverse-words-in-a-string/"
    },
    {
        number: 28,
        title: "Implement strStr()",
        category: "Strings",
        tags: ["String", "String Matching"],
        url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"
    },
    {
        number: 5,
        title: "Longest Palindromic Substring",
        category: "Strings",
        tags: ["String", "Dynamic Programming"],
        url: "https://leetcode.com/problems/longest-palindromic-substring/"
    },
    {
        number: 3,
        title: "Longest Substring Without Repeating Characters",
        category: "Strings",
        tags: ["String", "Sliding Window"],
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    {
        number: 49,
        title: "Group Anagrams",
        category: "Strings",
        tags: ["String", "Hash Table"],
        url: "https://leetcode.com/problems/group-anagrams/"
    },
    {
        number: 20,
        title: "Valid Parentheses",
        category: "Strings",
        tags: ["String", "Stack"],
        url: "https://leetcode.com/problems/valid-parentheses/"
    },
    {
        number: 8,
        title: "String to Integer (atoi)",
        category: "Strings",
        tags: ["String", "Math"],
        url: "https://leetcode.com/problems/string-to-integer-atoi/"
    },
    {
        number: 12,
        title: "Integer to Roman",
        category: "Strings",
        tags: ["String", "Math"],
        url: "https://leetcode.com/problems/integer-to-roman/"
    },
    {
        number: 13,
        title: "Roman to Integer",
        category: "Strings",
        tags: ["String", "Hash Table"],
        url: "https://leetcode.com/problems/roman-to-integer/"
    },
    {
        number: 6,
        title: "Zigzag Conversion",
        category: "Strings",
        tags: ["String"],
        url: "https://leetcode.com/problems/zigzag-conversion/"
    },
    {
        number: 76,
        title: "Minimum Window Substring",
        category: "Strings",
        tags: ["String", "Sliding Window"],
        url: "https://leetcode.com/problems/minimum-window-substring/"
    },
    {
        number: 438,
        title: "Find All Anagrams in a String",
        category: "Strings",
        tags: ["String", "Sliding Window"],
        url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/"
    },
    {
        number: 205,
        title: "Isomorphic Strings",
        category: "Strings",
        tags: ["String", "Hash Table"],
        url: "https://leetcode.com/problems/isomorphic-strings/"
    },
    {
        number: 290,
        title: "Word Pattern",
        category: "Strings",
        tags: ["String", "Hash Table"],
        url: "https://leetcode.com/problems/word-pattern/"
    },
    {
        number: 394,
        title: "Decode String",
        category: "Strings",
        tags: ["String", "Stack"],
        url: "https://leetcode.com/problems/decode-string/"
    },
    {
        number: 271,
        title: "Encode and Decode Strings",
        category: "Strings",
        tags: ["String", "Design"],
        url: "https://leetcode.com/problems/encode-and-decode-strings/"
    },


    // =========================
    // BINARY SEARCH
    // =========================

    {
        number: 704,
        title: "Binary Search",
        category: "Binary Search",
        tags: ["Binary Search"],
        url: "https://leetcode.com/problems/binary-search/"
    },
    {
        number: 35,
        title: "Search Insert Position",
        category: "Binary Search",
        tags: ["Binary Search"],
        url: "https://leetcode.com/problems/search-insert-position/"
    },
    {
        number: 74,
        title: "Search a 2D Matrix",
        category: "Binary Search",
        tags: ["Binary Search", "Matrix"],
        url: "https://leetcode.com/problems/search-a-2d-matrix/"
    },
    {
        number: 34,
        title: "Find First and Last Position of Element in Sorted Array",
        category: "Binary Search",
        tags: ["Binary Search"],
        url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
    },
    {
        number: 33,
        title: "Search in Rotated Sorted Array",
        category: "Binary Search",
        tags: ["Binary Search", "Array"],
        url: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
    },
    {
        number: 81,
        title: "Search in Rotated Sorted Array II",
        category: "Binary Search",
        tags: ["Binary Search", "Array"],
        url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/"
    },
    {
        number: 153,
        title: "Find Minimum in Rotated Sorted Array",
        category: "Binary Search",
        tags: ["Binary Search", "Array"],
        url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
    },
    {
        number: 162,
        title: "Find Peak Element",
        category: "Binary Search",
        tags: ["Binary Search", "Array"],
        url: "https://leetcode.com/problems/find-peak-element/"
    },
    {
        number: 875,
        title: "Koko Eating Bananas",
        category: "Binary Search",
        tags: ["Binary Search"],
        url: "https://leetcode.com/problems/koko-eating-bananas/"
    },
    {
        number: 1011,
        title: "Capacity To Ship Packages Within D Days",
        category: "Binary Search",
        tags: ["Binary Search"],
        url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"
    },
    {
        number: 410,
        title: "Split Array Largest Sum",
        category: "Binary Search",
        tags: ["Binary Search", "Dynamic Programming"],
        url: "https://leetcode.com/problems/split-array-largest-sum/"
    },
    {
        number: 4,
        title: "Median of Two Sorted Arrays",
        category: "Binary Search",
        tags: ["Binary Search", "Array"],
        url: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
    },
    {
        number: 69,
        title: "Sqrt(x)",
        category: "Binary Search",
        tags: ["Binary Search", "Math"],
        url: "https://leetcode.com/problems/sqrtx/"
    },
    {
        number: 367,
        title: "Valid Perfect Square",
        category: "Binary Search",
        tags: ["Binary Search", "Math"],
        url: "https://leetcode.com/problems/valid-perfect-square/"
    },
    {
        number: 287,
        title: "Find the Duplicate Number",
        category: "Binary Search",
        tags: ["Binary Search", "Array"],
        url: "https://leetcode.com/problems/find-the-duplicate-number/"
    },


    // =========================
    // STACKS & QUEUES
    // =========================

    {
        number: 20,
        title: "Valid Parentheses",
        category: "Stacks & Queues",
        tags: ["Stack", "String"],
        url: "https://leetcode.com/problems/valid-parentheses/"
    },
    {
        number: 155,
        title: "Min Stack",
        category: "Stacks & Queues",
        tags: ["Stack"],
        url: "https://leetcode.com/problems/min-stack/"
    },
    {
        number: 232,
        title: "Implement Queue using Stacks",
        category: "Stacks & Queues",
        tags: ["Queue", "Stack"],
        url: "https://leetcode.com/problems/implement-queue-using-stacks/"
    },
    {
        number: 225,
        title: "Implement Stack using Queues",
        category: "Stacks & Queues",
        tags: ["Stack", "Queue"],
        url: "https://leetcode.com/problems/implement-stack-using-queues/"
    },
    {
        number: 739,
        title: "Daily Temperatures",
        category: "Stacks & Queues",
        tags: ["Stack", "Array"],
        url: "https://leetcode.com/problems/daily-temperatures/"
    },
    {
        number: 496,
        title: "Next Greater Element I",
        category: "Stacks & Queues",
        tags: ["Stack", "Array"],
        url: "https://leetcode.com/problems/next-greater-element-i/"
    },
    {
        number: 503,
        title: "Next Greater Element II",
        category: "Stacks & Queues",
        tags: ["Stack", "Array"],
        url: "https://leetcode.com/problems/next-greater-element-ii/"
    },
    {
        number: 84,
        title: "Largest Rectangle in Histogram",
        category: "Stacks & Queues",
        tags: ["Stack", "Array"],
        url: "https://leetcode.com/problems/largest-rectangle-in-histogram/"
    },
    {
        number: 85,
        title: "Maximal Rectangle",
        category: "Stacks & Queues",
        tags: ["Stack", "Matrix"],
        url: "https://leetcode.com/problems/maximal-rectangle/"
    },
    {
        number: 735,
        title: "Asteroid Collision",
        category: "Stacks & Queues",
        tags: ["Stack", "Array"],
        url: "https://leetcode.com/problems/asteroid-collision/"
    },
    {
        number: 394,
        title: "Decode String",
        category: "Stacks & Queues",
        tags: ["Stack", "String"],
        url: "https://leetcode.com/problems/decode-string/"
    },
    {
        number: 150,
        title: "Evaluate Reverse Polish Notation",
        category: "Stacks & Queues",
        tags: ["Stack", "Math"],
        url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
    },
    {
        number: 224,
        title: "Basic Calculator",
        category: "Stacks & Queues",
        tags: ["Stack", "Math"],
        url: "https://leetcode.com/problems/basic-calculator/"
    },
    {
        number: 227,
        title: "Basic Calculator II",
        category: "Stacks & Queues",
        tags: ["Stack", "Math"],
        url: "https://leetcode.com/problems/basic-calculator-ii/"
    },
    {
        number: 239,
        title: "Sliding Window Maximum",
        category: "Stacks & Queues",
        tags: ["Queue", "Sliding Window"],
        url: "https://leetcode.com/problems/sliding-window-maximum/"
    },


    // =========================
    // TREES
    // =========================

    {
        number: 104,
        title: "Maximum Depth of Binary Tree",
        category: "Tree",
        difficulty: "Easy",
        tags: ["Tree", "DFS"],
        url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
    },
    {
        number: 226,
        title: "Invert Binary Tree",
        category: "Tree",
        difficulty: "Easy",
        tags: ["Tree", "DFS"],
        url: "https://leetcode.com/problems/invert-binary-tree/"
    },
    {
        number: 101,
        title: "Symmetric Tree",
        category: "Tree",
        difficulty: "Easy",
        tags: ["Tree", "DFS"],
        url: "https://leetcode.com/problems/symmetric-tree/"
    },
    {
        number: 112,
        title: "Path Sum",
        category: "Tree",
        difficulty: "Easy",
        tags: ["Tree", "DFS"],
        url: "https://leetcode.com/problems/path-sum/"
    },
    {
        number: 543,
        title: "Diameter of Binary Tree",
        category: "Tree",
        difficulty: "Easy",
        tags: ["Tree", "DFS"],
        url: "https://leetcode.com/problems/diameter-of-binary-tree/"
    },
    {
        number: 572,
        title: "Subtree of Another Tree",
        category: "Tree",
        difficulty: "Easy",
        tags: ["Tree", "DFS"],
        url: "https://leetcode.com/problems/subtree-of-another-tree/"
    },
    {
        number: 617,
        title: "Merge Two Binary Trees",
        category: "Tree",
        difficulty: "Easy",
        tags: ["Tree", "DFS"],
        url: "https://leetcode.com/problems/merge-two-binary-trees/"
    },
    {
        number: 110,
        title: "Balanced Binary Tree",
        category: "Tree",
        difficulty: "Easy",
        tags: ["Tree", "DFS"],
        url: "https://leetcode.com/problems/balanced-binary-tree/"
    },
    {
        number: 102,
        title: "Binary Tree Level Order Traversal",
        category: "Tree",
        difficulty: "Medium",
        tags: ["Tree", "BFS"],
        url: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
    },
    {
        number: 103,
        title: "Binary Tree Zigzag Level Order Traversal",
        category: "Tree",
        difficulty: "Medium",
        tags: ["Tree", "BFS"],
        url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
    },
    {
        number: 199,
        title: "Binary Tree Right Side View",
        category: "Tree",
        difficulty: "Medium",
        tags: ["Tree", "BFS"],
        url: "https://leetcode.com/problems/binary-tree-right-side-view/"
    },
    {
        number: 105,
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        category: "Tree",
        difficulty: "Medium",
        tags: ["Tree", "Recursion"],
        url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
    },
    {
        number: 116,
        title: "Populating Next Right Pointers in Each Node",
        category: "Tree",
        difficulty: "Medium",
        tags: ["Tree", "BFS"],
        url: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/"
    },
    {
        number: 235,
        title: "Lowest Common Ancestor of a Binary Search Tree",
        category: "Tree",
        difficulty: "Medium",
        tags: ["Tree", "BST"],
        url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
    },
    {
        number: 98,
        title: "Validate Binary Search Tree",
        category: "Tree",
        difficulty: "Medium",
        tags: ["Tree", "BST"],
        url: "https://leetcode.com/problems/validate-binary-search-tree/"
    },
    {
        number: 230,
        title: "Kth Smallest Element in a BST",
        category: "Tree",
        difficulty: "Medium",
        tags: ["Tree", "BST"],
        url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
    },
    {
        number: 113,
        title: "Path Sum II",
        category: "Tree",
        difficulty: "Medium",
        tags: ["Tree", "DFS"],
        url: "https://leetcode.com/problems/path-sum-ii/"
    },
    {
        number: 1448,
        title: "Count Good Nodes in Binary Tree",
        category: "Tree",
        difficulty: "Medium",
        tags: ["Tree", "DFS"],
        url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/"
    },


    // =========================
    // LINKED LISTS
    // =========================

    {
        number: 206,
        title: "Reverse Linked List",
        category: "Linked Lists",
        tags: ["Linked List"],
        url: "https://leetcode.com/problems/reverse-linked-list/"
    },
    {
        number: 21,
        title: "Merge Two Sorted Lists",
        category: "Linked Lists",
        tags: ["Linked List"],
        url: "https://leetcode.com/problems/merge-two-sorted-lists/"
    },
    {
        number: 141,
        title: "Linked List Cycle",
        category: "Linked Lists",
        tags: ["Linked List", "Two Pointers"],
        url: "https://leetcode.com/problems/linked-list-cycle/"
    },
    {
        number: 142,
        title: "Linked List Cycle II",
        category: "Linked Lists",
        tags: ["Linked List", "Two Pointers"],
        url: "https://leetcode.com/problems/linked-list-cycle-ii/"
    },
    {
        number: 876,
        title: "Middle of the Linked List",
        category: "Linked Lists",
        tags: ["Linked List", "Two Pointers"],
        url: "https://leetcode.com/problems/middle-of-the-linked-list/"
    },
    {
        number: 19,
        title: "Remove Nth Node From End of List",
        category: "Linked Lists",
        tags: ["Linked List", "Two Pointers"],
        url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
    },
    {
        number: 234,
        title: "Palindrome Linked List",
        category: "Linked Lists",
        tags: ["Linked List", "Two Pointers"],
        url: "https://leetcode.com/problems/palindrome-linked-list/"
    },
    {
        number: 160,
        title: "Intersection of Two Linked Lists",
        category: "Linked Lists",
        tags: ["Linked List", "Two Pointers"],
        url: "https://leetcode.com/problems/intersection-of-two-linked-lists/"
    },
    {
        number: 2,
        title: "Add Two Numbers",
        category: "Linked Lists",
        tags: ["Linked List", "Math"],
        url: "https://leetcode.com/problems/add-two-numbers/"
    },
    {
        number: 23,
        title: "Merge K Sorted Lists",
        category: "Linked Lists",
        tags: ["Linked List", "Heap"],
        url: "https://leetcode.com/problems/merge-k-sorted-lists/"
    },
    {
        number: 138,
        title: "Copy List with Random Pointer",
        category: "Linked Lists",
        tags: ["Linked List", "Hash Table"],
        url: "https://leetcode.com/problems/copy-list-with-random-pointer/"
    },
    {
        number: 143,
        title: "Reorder List",
        category: "Linked Lists",
        tags: ["Linked List", "Two Pointers"],
        url: "https://leetcode.com/problems/reorder-list/"
    },
    {
        number: 24,
        title: "Swap Nodes in Pairs",
        category: "Linked Lists",
        tags: ["Linked List", "Recursion"],
        url: "https://leetcode.com/problems/swap-nodes-in-pairs/"
    },
    {
        number: 25,
        title: "Reverse Nodes in k-Group",
        category: "Linked Lists",
        tags: ["Linked List"],
        url: "https://leetcode.com/problems/reverse-nodes-in-k-group/"
    },
    {
        number: 61,
        title: "Rotate List",
        category: "Linked Lists",
        tags: ["Linked List"],
        url: "https://leetcode.com/problems/rotate-list/"
    },
    {
        number: 86,
        title: "Partition List",
        category: "Linked Lists",
        tags: ["Linked List"],
        url: "https://leetcode.com/problems/partition-list/"
    },
    {
        number: 83,
        title: "Remove Duplicates from Sorted List",
        category: "Linked Lists",
        tags: ["Linked List"],
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/"
    },
    {
        number: 237,
        title: "Delete Node in a Linked List",
        category: "Linked Lists",
        tags: ["Linked List"],
        url: "https://leetcode.com/problems/delete-node-in-a-linked-list/"
    },
    {
        number: 148,
        title: "Sort List",
        category: "Linked Lists",
        tags: ["Linked List", "Sorting"],
        url: "https://leetcode.com/problems/sort-list/"
    },
    {
        number: 430,
        title: "Flatten a Multilevel Doubly Linked List",
        category: "Linked Lists",
        tags: ["Linked List", "DFS"],
        url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/"
    }

];
menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});
function loadTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }
}
loadTheme();
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});
const pages = {
    dashboard: `
    <section class="welcome">

        <h1>
            Welcome to Interactive DSA Learning Studio
        </h1>

        <p>
            Learn Data Structures and Algorithms
            through interactive visualizations,
            animations, quizzes, comparisons,
            and real-time demonstrations.
        </p>

        <div class="dashboard-cards">

            <article class="card">

                <h3>Algorithms</h3>

                <p>10+</p>

            </article>


            <article class="card">

                <h3>Visualizations</h3>

                <p>Interactive</p>

            </article>


            <article class="card">

                <h3>LeetCode Problems</h3>

                <p>120+</p>

            </article>


            <article class="card">

                <h3>Quiz</h3>

                <p>Practice Anytime</p>

            </article>

        </div>

    </section>
`,
    array: `

<section class="array-page">

<h1>Array Visualizer</h1>

<p>

Learn Arrays through interactive visualization,
memory simulation and real-time operations.

</p>

<h4>

ARRAY CREATION • TRAVERSAL • INSERTION • DELETION • UPDATE

</h4>


<div class="array-controls">

<input
type="text"
id="arrayInput"
placeholder="Example : 10,20,30,40">

<section>

<button
class="primary-btn"
id="generateArrayBtn">

Generate Array

</button>

<button
class="success-btn"
id="traverseBtn">

Traversal

</button>

<button
class="primary-btn"
id="insertBtn">

Insertion

</button>

<button
class="success-btn"
id="deleteBtn">

Deletion

</button>

<button
class="primary-btn"
id="updateBtn">

Update

</button>

<button
class="success-btn"
id="clearArrayBtn">

Clear

</button>

</section>

</div>


<div class="visualizer">

<div id="arrayContainer">

</div>

<div id="journeySurface">

</div>

</div>


<div class="status-panel">

<p>

<strong>Array Size :</strong>

<span id="arraySize">

0

</span>

</p>

<p>

<strong>Current Index :</strong>

<span id="currentIndex">

--

</span>

</p>

<p>

<strong>Current Operation :</strong>

<span id="arrayOperation">

Waiting...

</span>

</p>

<p>

<strong>Status :</strong>

<span id="arrayStatus">

Ready

</span>

</p>

</div>



<div class="status-card">

<h3>

Progress

</h3>

<progress
id="arrayProgress"
value="0"
max="100">

</progress>

<p id="arrayProgressText">

0%

</p>

</div>

<div id="memoryPanelLocation"></div>

<div
    class="memory-panel"
    id="memoryPanel">

    <h2>Data Journey</h2>

    <div
        id="memoryContainer"
        class="journey-box">

        <div
            id="journeyStep"
            class="journey-step">

            Ready to Generate Array

        </div>

        <div
            id="journeyAnimation"
            class="journey-animation">

            <div
                id="floatingValue"
                class="floating-value">
            </div>

            <div
                id="journeyArray"
                class="journey-array">
            </div>

        </div>

    </div>

</div>

<div class="syntax-panel">

<h2>

Syntax

</h2>

<pre id="syntaxCode">

int arr[] = { };

</pre>

</div>



<div class="learn-box">

<h2>

Explanation

</h2>

<p>

An Array is a linear data structure that stores
multiple elements of the same data type in
continuous memory locations.

Each element is accessed using its index,
starting from 0.

Arrays provide fast random access but require
continuous memory allocation.

</p>

</div>

</section>

`,
    string: `

<section class="string-page">

<h1>String Visualizer</h1>

<p>

Learn Strings through interactive visualization,
character-by-character memory simulation and
real-time operations.

</p>

<h4>

STRING CREATION • TRAVERSAL • INSERTION • DELETION • UPDATE

</h4>


<div class="string-controls">

<input
type="text"
id="stringInput"
placeholder="Example : HELLO">


<section>

<button
class="primary-btn"
id="generateStringBtn">

Generate String

</button>

<button
class="success-btn"
id="stringTraverseBtn">

Traversal

</button>

<button
class="primary-btn"
id="stringInsertBtn">

Insertion

</button>

<button
class="success-btn"
id="stringDeleteBtn">

Deletion

</button>

<button
class="primary-btn"
id="stringUpdateBtn">

Update

</button>

<button
class="success-btn"
id="clearStringBtn">

Clear

</button>

</section>

</div>


<div class="visualizer">

<div id="stringContainer">

</div>

<div id="stringJourneySurface">

</div>

</div>


<div class="status-panel">

<p>

<strong>String Length :</strong>

<span id="stringSize">

0

</span>

</p>

<p>

<strong>Current Index :</strong>

<span id="stringCurrentIndex">

--

</span>

</p>

<p>

<strong>Current Operation :</strong>

<span id="stringOperation">

Waiting...

</span>

</p>

<p>

<strong>Status :</strong>

<span id="stringStatus">

Ready

</span>

</p>

</div>


<div class="status-card">

<h3>

Progress

</h3>

<progress
id="stringProgress"
value="0"
max="100">

</progress>

<p id="stringProgressText">

0%

</p>

</div>

<div id="stringMemoryPanelLocation"></div>

<div
class="memory-panel"
id="stringMemoryPanel">

<h2>Data Journey</h2>

<div
id="stringMemoryContainer"
class="journey-box">

<div
id="stringJourneyStep"
class="journey-step">

Ready to Generate String

</div>


<div
id="stringJourneyAnimation"
class="journey-animation">

<div
id="stringFloatingValue"
class="floating-value">

</div>


<div
id="stringJourneyArray"
class="journey-array">

</div>

</div>

</div>

</div>


<div class="syntax-panel">

<h2>

Syntax

</h2>

<pre id="stringSyntaxCode">

string str = "";

</pre>

</div>


<div class="learn-box">

<h2>

Explanation

</h2>

<p>

A String is a sequence of characters.
Each character can be accessed using an index,
starting from 0.

For example, in the string "HELLO",
H is at index 0, E is at index 1,
and O is at index 4.

Strings are commonly used to store and
process textual data.

</p>

</div>

</section>

`,

    sorting: `
<section class="sorting-page">
<h1>Sorting Visualizer</h1>
<p>
Visualize how sorting algorithms work step by step.</p>
<H4>BUBBLE SORT , SELECTION SORT , INSERTION SORT , MERGE SORT , QUICK SORT</H4>
<div class="sorting-controls">
<input
type="text"
id="arrayInput"
placeholder="Example : 8,5,3,7,1">
<section>
<button
class="primary-btn"
id="generateBtn">
Generate Bars
</button>
<button
class="success-btn"
id="startBtn">
Start Sorting
</button>
<select id="algorithmSelect">

        <option value="bubble">
            Bubble Sort
        </option>

        <option value="selection">
            Selection Sort
        </option>

        <option value="insertion">
            Insertion Sort
        </option>

        <option value="merge">
            Merge Sort
        </option>

        <option value="quick">
            Quick Sort
        </option>

    </select>
    <select id="speedSelect">

    <option value="1000">0.5x Speed</option>

    <option value="600" selected>1x Speed</option>

    <option value="350">1.5x Speed</option>

    <option value="200">2x Speed</option>

</select>
</section>
</div>
<div class="visualizer">
<div id="barContainer"></div>
</div>
<div class="status-panel">

    <p>

        <strong>Algorithm :</strong>

        <span id="algorithmName">

            Bubble Sort

        </span>

    </p>

    <p>

        <strong>Current Pass :</strong>

        <span id="passCount">

            0

        </span>

    </p>

    <p>

        <strong>Comparisons :</strong>

        <span id="comparisonCount">

            0

        </span>

    </p>

    <p>

        <strong>Swaps :</strong>

        <span id="swapCount">

            0

        </span>

    </p>

    <p>

        <strong>Status :</strong>

        <span id="status">

            Waiting...

        </span>

    </p>

</div>
<div class="status-card">

    <h3>Progress</h3>

    <progress
        id="progressBar"
        value="0"
        max="100">
    </progress>

    <p id="progressText">

        0%

    </p>

</div>
    <div class="learn-box">
    <h2>Explantion</h2>
    <p>Sorting is the process of arranging data in a specific order, such as ascending or descending. 
    It helps organize information, making searching and data processing faster and more efficient. 
    Different sorting algorithms use different techniques, each with its own advantages and time complexity.</p>
    </div>
`,

    searching: `

<section class="sorting-page">

    <h1>Searching Visualizer</h1>

    <p>

        Visualize how searching algorithms work step by step.

    </p>
    <H4>LINEAR SEARCH & BINARY SEARCH</H4>

    <div class="sorting-controls">

        <input
            type="text"
            id="arrayInput"
            placeholder="Example : 8,5,3,7,1">

       <input
    type="text"
    id="targetInput"
    placeholder="Target Value">
        <section>

            <button
                class="primary-btn"
                id="generateBtn">

                Generate Bars

            </button>

            <button
                class="success-btn"
                id="startBtn">

                Start Search

            </button>

            <select id="algorithmSelect">

                <option value="linear">

                    Linear Search

                </option>

                <option value="binary">

                    Binary Search

                </option>

            </select>

            <select id="speedSelect">

                <option value="1000">

                    0.5x Speed

                </option>

                <option value="600" selected>

                    1x Speed

                </option>

                <option value="350">

                    1.5x Speed

                </option>

                <option value="200">

                    2x Speed

                </option>

            </select>

        </section>

    </div>

    <div class="visualizer">

        <div id="barContainer"></div>

    </div>

    <div class="status-panel">

        <p>

            <strong>Algorithm :</strong>

            <span id="algorithmName">

                Linear Search

            </span>

        </p>

        <p>

            <strong>Current Index :</strong>

            <span id="currentIndex">

                0

            </span>

        </p>

        <p>

            <strong>Comparisons :</strong>

            <span id="comparisonCount">

                0

            </span>

        </p>

        <p>

            <strong>Result :</strong>

            <span id="searchResult">

                --

            </span>

        </p>

        <p>

            <strong>Status :</strong>

            <span id="status">

                Waiting...

            </span>

        </p>

    </div>

    <div class="status-card">

        <h3>Progress</h3>

        <progress
            id="progressBar"
            value="0"
            max="100">

        </progress>

        <p id="progressText">

            0%

        </p>

    </div>
<div class="learn-box">
    <h2>Explanation</h2>
    <p>Searching is the process of finding a specific element within a collection of data.
    Linear Search checks elements one by one, while Binary Search repeatedly divides a sorted array into halves, making it much faster for large datasets.</p>
</div>

</section>

`,

    stack: `

<section class="stack-page">

    <h1>Stack Visualizer</h1>

    <p>Learn Stack <strong>LIFO (Last In Last Out)</strong> using interactive animations.</p>

    <div class="sorting-controls">

        <input
            type="text"
            id="stackInput"
            placeholder="Enter Element">

        <section>

            <button
                class="primary-btn"
                id="pushBtn">

                Push

            </button>

            <button
                class="success-btn"
                id="popBtn">

                Pop

            </button>

            <button
                class="primary-btn"
                id="peekBtn">

                Peek

            </button>

            <button
                class="success-btn"
                id="clearBtn">

                Clear

            </button>

        </section>

    </div>

    <div class="stack-container">

        <div class="stack-wrapper">

            <div id="stackArea">

            </div>

            <div class="stack-base"></div>

        </div>

    </div>

    <div class="status-panel">

        <p>

            <strong>Top :</strong>

            <span id="topElement">

                --

            </span>

        </p>

        <p>

            <strong>Stack Size :</strong>

            <span id="stackSize">

                0

            </span>

        </p>

        <p>

            <strong>Operation :</strong>

            <span id="stackOperation">

                Waiting...

            </span>

        </p>

        <p>

            <strong>Status :</strong>

            <span id="stackStatus">

                Stack Empty

            </span>

        </p>

    </div>

    <div class="status-card">

        <h3>Progress</h3>

        <progress
            id="stackProgress"
            value="0"
            max="10">

        </progress>

        <p id="stackProgressText">

            0 / 10

        </p>

    </div>
<div class="learn-box">
    <h2>Explanation</h2>
    <p>A Stack is a linear data structure that follows the Last In, First Out (LIFO) principle. 
    The last element inserted is the first one removed. Common operations include Push, Pop, and Peek. 
    Stacks are widely used in function calls, expression evaluation, and undo operations.</p>
</div>
</section>

`,

    queue: `

<section class="queue-page">

    <h1>Queue Visualizer</h1>

    <p>
        Queue follows <strong>FIFO (First In First Out)</strong> using interactive animations..
    </p>

<div class="queue-controls">

    <input
    id="queueInput"
    type="text"
    placeholder="Enter value">

    <button id="enqueueBtn" class="primary-btn">
        Enqueue
    </button>

    <button id="dequeueBtn" class="primary-btn">
        Dequeue
    </button>

    <button id="frontBtn" class="primary-btn">
        Front
    </button>

    <button id="clearQueueBtn" class="primary-btn">
        Clear
    </button>

</div>

    <div class="queue-wrapper">

        <div id="queueArea"></div>

    </div>

    <div class="queue-dashboard">

        <div class="card">
            <h3>Size</h3>
            <p id="queueSize">0</p>
        </div>

        <div class="card">
            <h3>Front</h3>
            <p id="frontElement">--</p>
        </div>

        <div class="card">
            <h3>Rear</h3>
            <p id="rearElement">--</p>
        </div>

    </div>

    <progress
    id="queueProgress"
    value="0"
    max="10"></progress>

    <p id="queueProgressText">
        0 / 10
    </p>

    <div class="operation-card">

        <h3>Last Operation</h3>

        <p id="queueOperation">
            None
        </p>

        <p id="queueStatus">
            Queue Empty
        </p>

    </div>
<div class="learn-box">
    <h2>Explanation</h2>
    <p>A Queue is a linear data structure that follows the First In, First Out (FIFO) principle. 
    The first element inserted is the first one removed. Common operations include Enqueue, Dequeue, and Front.
    Queues are commonly used in printers, task scheduling, and customer service systems.</p>
</div>
</section>
`,
    linkedlist: `
<div class="page-header">

    <h1>Linked List Visualizer</h1>

    <p>Visualize Linked List operations with animations.</p>

</div>

<div class="controls">

    <input
        type="text"
        id="listInput"
        placeholder="Enter Value">

    <button id="insertFirstBtn">Insert First</button>

    <button id="insertLastBtn">Insert Last</button>

    <button id="deleteBtn">Delete</button>

    <button id="searchBtn">Search</button>

    <button id="clearListBtn">Clear</button>

</div>

<div class="dashboard">

    <div class="dashboard-card">

        <h3>Nodes</h3>

        <span id="listSize">0</span>

    </div>

    <div class="dashboard-card">

        <h3>Head</h3>

        <span id="headNode">NULL</span>

    </div>

    <div class="dashboard-card">

        <h3>Tail</h3>

        <span id="tailNode">NULL</span>

    </div>

</div>

<progress
    id="listProgress"
    value="0"
    max="10">
</progress>

<p id="listProgressText">
    0 / 10 Nodes
</p>

<div class="operation-box">

    <p>
        <strong>Operation :</strong>
        <span id="listOperation">None</span>
    </p>

    <p>
        <strong>Status :</strong>
        <span id="listStatus">Ready</span>
    </p>

</div>

<div class="linked-list-wrapper">

    <div class="head-pointer">

        HEAD ↓

    </div>

    <div id="linkedListArea" class="linked-list-area">

        <span class="null-text">NULL</span>

    </div>

</div>
<div class="learn-box">
    <h2>Explanation</h2>
    <p>A Linked List is a dynamic linear data structure made up of nodes. 
    Each node stores data and a reference to the next node.
    Unlike arrays, linked lists do not require continuous memory, making insertion and deletion operations more flexible.</p>
</div>
`,

    comparison: `
<section class="comparison-section">
    <h1>Algorithm Comparison</h1>
    <p>
        Select a category to compare different Data Structures and Algorithms.
    </p>
    <label for="comparisonSelect"><strong>Select Category:</strong></label>
    <select id="comparisonSelect">
        <option value="sorting">Sorting Algorithms</option>
        <option value="searching">Searching Algorithms</option>
        <option value="stackqueue">Stack vs Queue</option>
        <option value="arraylinkedlist">Array vs Linked List</option>
    </select>
    <br><br>
    <div id="comparisonTable"></div>
</section>
`,
    leetcode: `
    <div class="page-header">
        <div>
            <h1>💻 LeetCode Practice</h1>
            <p>Practice important DSA problems on LeetCode.</p>
        </div>
    </div>

    <div class="leetcode-section">

        <div class="leetcode-intro">
            <h2>🚀 Practice DSA Problems</h2>

            <p>
                Solve carefully selected coding problems based on the
                important DSA topics covered in this learning studio.
            </p>
        </div>
<div class="leetcode-controls">

    <input
        type="text"
        id="leetcodeSearch"
        placeholder="🔎 Search problems..."
        autocomplete="off">

    <select id="leetcodeCategory">
        <option value="all">All Topics</option>
        <option value="Basic Math">Basic Math</option>
        <option value="Arrays">Arrays</option>
        <option value="Strings">Strings</option>
        <option value="Binary Search">Binary Search</option>
        <option value="Stacks & Queues">Stacks & Queues</option>
        <option value="Tree">Tree</option>
        <option value="Linked Lists">Linked Lists</option>
    </select>

</div>
        <div
            class="leetcode-problems"
            id="leetcodeProblems">
        </div>

    </div>
`,

    quiz: `
<section class="quiz-page">

    <div class="quiz-header">

        <div>
            <h1>DSA Quiz</h1>

            <p>
                Test your Data Structures and Algorithms knowledge.
            </p>
        </div>

        <div class="quiz-meta">

            <span id="quizQuestionCount">
                Quiz Setup
            </span>

            <span
                class="quiz-difficulty"
                id="quizDifficultyDisplay">
                Medium
            </span>

        </div>

    </div>


    <div id="quizStartSection">

        <div class="quiz-setup-card">

            <h2>
                Customize Your Quiz
            </h2>

            <p class="quiz-setup-description">
                Choose your topic, difficulty and number of questions.
            </p>


            <div class="quiz-setup-grid">


                <!-- Topic -->

                <div class="quiz-setting">

                    <label for="quizTopic">
                        Topic
                    </label>

                    <select id="quizTopic">

                        <option value="Array">
                            Array
                        </option>

                        <option value="String">
                            String
                        </option>

                        <option value="Sorting Algorithms">
                            Sorting Algorithms
                        </option>

                        <option value="Searching Algorithms">
                            Searching Algorithms
                        </option>

                        <option value="Stack">
                            Stack
                        </option>

                        <option value="Queue">
                            Queue
                        </option>

                        <option value="Linked List">
                            Linked List
                        </option>

                        <option value="Algorithm Comparison">
                            Algorithm Comparison
                        </option>

                    </select>

                </div>


                <!-- Difficulty -->

                <div class="quiz-setting">

                    <label for="quizDifficulty">
                        Difficulty
                    </label>

                    <select id="quizDifficulty">

                        <option value="Easy">
                            Easy
                        </option>

                        <option value="Medium" selected>
                            Medium
                        </option>

                        <option value="Hard">
                            Hard
                        </option>

                    </select>

                </div>


                <!-- Number of Questions -->

                <div class="quiz-setting">

                    <label for="quizCount">
                        Number of Questions
                    </label>

                    <select id="quizCount">

                        <option value="10">
                            10 Questions
                        </option>

                        <option value="25">
                            25 Questions
                        </option>

                        <option value="50">
                            50 Questions
                        </option>

                    </select>

                </div>

            </div>


            <div class="quiz-selection-summary">


                <div>

                    <strong>
                        Topic
                    </strong>

                    <span id="selectedTopicText">
                        Array
                    </span>

                </div>


                <div>

                    <strong>
                        Difficulty
                    </strong>

                    <span id="selectedDifficultyText">
                        Medium
                    </span>

                </div>


                <div>

                    <strong>
                        Questions
                    </strong>

                    <span id="selectedCountText">
                        10
                    </span>

                </div>


            </div>


            <button
                class="primary-btn"
                id="startQuizBtn">

                Start Quiz

            </button>

        </div>

    </div>


    <div id="quizArea"></div>

</section>
`,

    settings: `
<div class="settings-page">

    <h1>Settings</h1>
    <p>Customize your learning experience.</p>

    <div class="settings-container">

        <div class="settings-card">

            <h2>Theme</h2>

            <label class="setting-option">
                <input type="radio" name="theme" value="light">
                Light Mode
            </label>

            <label class="setting-option">
                <input type="radio" name="theme" value="dark" checked>
                Dark Mode
            </label>

        </div>

        <div class="settings-card">

            <h2>Animation
            <span class="soon-badge">New</span>
            </h2>

            <label class="setting-option">
                <input type="checkbox" id="animationToggle" checked>
                Enable Page Animation
            </label>

        </div>

        <div class="settings-card">

            <h2>Visualization Speed
            <span class="soon-badge">Soon</span>
            </h2>

            <label class="setting-option">
                <input type="radio" name="speed" value="slow">
                Slow
            </label>

            <label class="setting-option">
                <input type="radio" name="speed" value="normal" checked>
                Normal
            </label>

            <label class="setting-option">
                <input type="radio" name="speed" value="fast">
                Fast
            </label>

        </div>

    </div>

</div>
`,

    about: `
<div class="about-page">

    <h1>About</h1>
    <p>Learn more about the Interactive DSA Learning Studio.</p>

    <div class="about-container">

        <!-- Project -->

        <div class="about-card">

            <h2>Project Overview</h2>

            <p>
                Interactive DSA Learning Studio is an educational web
                application developed to help students understand
                Data Structures and Algorithms through interactive
                visualizations and simulations.
            </p>

        </div>

        <!-- Features -->

        <div class="about-card">

            <h2>Features</h2>

            <ul>

                <li>Sorting Algorithm Visualizer</li>

                <li>Searching Algorithm Visualizer</li>

                <li>Stack Operations</li>

                <li>Queue Operations</li>

                <li>Linked List Operations</li>

                <li>Algorithm Comparison</li>

                <li>Light / Dark Theme</li>

                <li>Responsive User Interface</li>

            </ul>

        </div>

        <!-- Technologies -->

        <div class="about-card">

            <h2>Technologies Used</h2>

            <ul>

                <li>HTML5</li>

                <li>CSS3</li>

                <li>JavaScript (ES6)</li>

            </ul>

        </div>

    </div>

    <div class="about-footer">

        <p>
            Made with using HTML, CSS and JavaScript
        </p>

        <small>
            © 2026 Interactive DSA Learning Studio
        </small>

    </div>

</div>
`,

};

function renderLeetCodeProblems(problems = leetcodeProblems) {

    const container = document.getElementById("leetcodeProblems");

    if (!container) return;

    container.innerHTML = problems.map(function(problem) {

        const tags = problem.tags.map(function(tag) {
            return `<span>${tag}</span>`;
        }).join("");
        return `
            <div class="leetcode-card">

                <div class="leetcode-card-content">

                    <h3>${problem.title}</h3>

                    <p class="leetcode-number">
                        LeetCode #${problem.number}
                    </p>

                    <div class="leetcode-tags">
                        ${tags}
                    </div>

                </div>

                <div class="leetcode-card-action">

                    <a
                        href="${problem.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="leetcode-btn">
                        Practice ↗
                    </a>

                </div>

            </div>
        `;

    }).join("");
}
function filterLeetCodeProblems() {

    const searchInput = document.getElementById("leetcodeSearch");
    const categorySelect = document.getElementById("leetcodeCategory");

    if (!searchInput || !categorySelect) return;

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value;

    const filteredProblems = leetcodeProblems.filter(function(problem) {

        const matchesSearch =
            problem.title.toLowerCase().includes(searchText) ||
            problem.number.toString().includes(searchText) ||
            problem.tags.some(function(tag) {
                return tag.toLowerCase().includes(searchText);
            });

        const matchesCategory =
            selectedCategory === "all" ||
            problem.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    renderLeetCodeProblems(filteredProblems);
}

function loadPage(pageName) {

    app.innerHTML = pages[pageName];

    if (pageName === "dashboard") {

    }
    else if (pageName === "array") {

        initializeArray();

    }
    else if (pageName === "string") {

        initializeString();

    }
    else if (pageName === "sorting") {

        initializeSorting();

    }

    else if (pageName === "searching") {

        initializeSearching();

    }
    else if (pageName === "stack") {

        initializeStack();

    }
    else if (pageName === "queue") {

        initializeQueue();

    }
    else if (pageName === "linkedlist") {
        initializeLinkedList();
    }
else if (pageName === "leetcode") {

    renderLeetCodeProblems();

    const searchInput = document.getElementById("leetcodeSearch");

    if (searchInput) {
        searchInput.addEventListener("input", filterLeetCodeProblems);
    }
}
    else if (pageName === "settings") {
        initializeSettings();
    }

    else if (pageName === "quiz") {
        initializeQuiz();
    }
    else if (pageName === "comparison") {

        loadComparisonTable("sorting");

        document
            .getElementById("comparisonSelect")
            .addEventListener("change", function () {

                loadComparisonTable(this.value);

            });

    }

}
function addInputSuggestion(inputId, suggestionText) {

    const input = document.getElementById(inputId);

    if (!input) return;

    // Create suggestion
    const suggestion = document.createElement("div");

    suggestion.className = "input-suggestion";
    suggestion.textContent = "💡 Example: " + suggestionText;

    // Put suggestion immediately after input
    input.insertAdjacentElement("afterend", suggestion);

    // Fill input when clicked
    suggestion.addEventListener("click", function () {
        input.value = suggestionText;
        input.focus();
    });
}

function initializeArray() {

    const input = document.getElementById("arrayInput");
    addInputSuggestion(
        "arrayInput",
        "10,20,30,40,50"
    );

    const indexInput = document.createElement("input");

    indexInput.type = "text";
    indexInput.id = "arrayIndexInput";
    indexInput.placeholder = "Index";
    indexInput.className = "array-index-input";
    indexInput.style.display = "none";

    input.insertAdjacentElement("afterend", indexInput);

    document
        .getElementById("generateArrayBtn")
        .addEventListener("click", startMemorySimulation);

    document
        .getElementById("traverseBtn")
        .addEventListener("click", traverseArray);

    document
        .getElementById("insertBtn")
        .addEventListener("click", function () {

            if (arrayData.length === 0) {

                document
                    .getElementById("arrayStatus")
                    .textContent = "Generate an Array First";

                return;

            }

            if (indexInput.style.display === "none") {

                showOperationInput("insert");

                return;

            }

            insertArray();

        });

    document
        .getElementById("deleteBtn")
        .addEventListener("click", function () {

            const indexInput =
                document.getElementById("arrayIndexInput");

            if (arrayData.length === 0) {

                document
                    .getElementById("arrayStatus")
                    .textContent = "Generate an Array First";

                return;

            }

            if (indexInput.style.display === "none") {

                indexInput.style.display = "block";

                indexInput.value = "";

                indexInput.placeholder = "Enter index";

                document
                    .getElementById("arrayInput")
                    .style.display = "none";

                document
                    .getElementById("arrayStatus")
                    .textContent = "Enter Index";

                document
                    .getElementById("arrayOperation")
                    .textContent = "Deletion";

                return;

            }

            deleteArray();

        });

    document
        .getElementById("updateBtn")
        .addEventListener("click", function () {

            if (arrayData.length === 0) {

                document
                    .getElementById("arrayStatus")
                    .textContent = "Generate an Array First";

                return;

            }

            const input =
                document.getElementById("arrayInput");

            const indexInput =
                document.getElementById("arrayIndexInput");

            if (indexInput.style.display === "none") {

                input.style.display = "block";

                input.value = "";

                input.placeholder = "Enter new value";

                indexInput.style.display = "block";

                indexInput.value = "";

                indexInput.placeholder = "Enter index";

                document
                    .getElementById("arrayOperation")
                    .textContent = "Update";

                document
                    .getElementById("arrayStatus")
                    .textContent = "Enter Value and Index";

                return;

            }

            updateArray();

        });

    document
        .getElementById("clearArrayBtn")
        .addEventListener("click", clearArray);

}

async function startMemorySimulation() {

    if (arrayAnimating) {
        return;
    }

    if (!prepareArray()) {
        return;
    }

    arrayAnimating = true;

    const status =
        document.getElementById("arrayStatus");

    try {

        /* ==============================
           PREPARE UI
        ============================== */

        document
            .getElementById("arrayOperation")
            .textContent = "Creating Array";

        status.textContent = "Processing";

        document
            .getElementById("arrayProgress")
            .value = 0;

        document
            .getElementById("arrayProgressText")
            .textContent = "0%";

        document
            .getElementById("arraySize")
            .textContent = arrayData.length;

        /*
         * IMPORTANT:
         * Do NOT call displayArray() here.
         */

        /* ==============================
           SHOW DATA JOURNEY
        ============================== */

        moveJourneyToSurface();

        await sleep(650);

        /* ==============================
           RUN MEMORY ANIMATION
        ============================== */

        await memorySimulation();

        /* ==============================
           SHOW FINAL ARRAY
        ============================== */

        displayArray();

        updateSyntax("create");

        document
            .getElementById("arrayOperation")
            .textContent = "Array Created";

        status.textContent = "Ready";

        document
            .getElementById("currentIndex")
            .textContent = "--";

        await sleep(700);

    }
    catch (error) {

        console.error(
            "Array Journey Error:",
            error
        );

        status.textContent =
            "Simulation Error";

    }
    finally {

        /* ==============================
           RETURN DATA JOURNEY
        ============================== */

        try {
            moveJourneyBack();
        }
        catch (error) {
            console.error(
                "Journey Return Error:",
                error
            );
        }

        arrayAnimating = false;

    }

}

function prepareArray() {

    const input =
        document
            .getElementById("arrayInput")
            .value
            .trim();

    const status =
        document
            .getElementById("arrayStatus");

    arrayData = [];

    status.style.color = "";

    if (input === "") {

        status.textContent =
            "Please Enter Array Values";

        status.style.color = "red";

        return false;
    }

    const values = input.split(",");

    for (let i = 0; i < values.length; i++) {

        const value =
            values[i].trim();

        if (value === "") {

            status.textContent =
                "Empty Values Not Allowed";

            status.style.color = "red";

            arrayData = [];

            return false;
        }

        if (isNaN(value)) {

            status.textContent =
                "Only Numbers Allowed";

            status.style.color = "red";

            arrayData = [];

            return false;
        }

        arrayData.push(Number(value));

    }

    return true;
}


async function memorySimulation() {

    const step =
        document.getElementById("journeyStep");

    const floating =
        document.getElementById("floatingValue");

    const journeyArray =
        document.getElementById("journeyArray");

    journeyArray.innerHTML = "";

    floating.textContent = "";

    floating.style.opacity = "0";

    floating.style.transform =
        "translateY(0) scale(.8)";

    step.textContent = "Preparing Array";

    await sleep(600);

    for (let i = 0; i < arrayData.length; i++) {

        const cell =
            document.createElement("div");

        cell.className = "journey-cell";

        journeyArray.appendChild(cell);

        await sleep(180);

    }

    await sleep(500);

    for (let i = 0; i < arrayData.length; i++) {

        const cells =
            journeyArray.querySelectorAll(".journey-cell");

        document
            .getElementById("currentIndex")
            .textContent = i;

        document
            .getElementById("arrayOperation")
            .textContent = "Storing Element";

        document
            .getElementById("arrayStatus")
            .textContent =
            `Element ${i + 1} of ${arrayData.length}`;

        step.textContent =
            `Adding Element ${i + 1} of ${arrayData.length}`;

        floating.textContent =
            arrayData[i];

        floating.style.transition = "none";

        floating.style.opacity = "0";

        floating.style.transform =
            "translateY(0) scale(.8)";

        await sleep(100);

        floating.style.transition =
            "opacity .3s ease, transform .3s ease";

        floating.style.opacity = "1";

        floating.style.transform =
            "translateY(0) scale(1)";

        await sleep(500);

        const animationArea =
            document.getElementById("journeyAnimation");

        const floatingRect =
            floating.getBoundingClientRect();

        const cellRect =
            cells[i].getBoundingClientRect();

        const areaRect =
            animationArea.getBoundingClientRect();

        const floatingCenter =
            floatingRect.left +
            floatingRect.width / 2 -
            areaRect.left;

        const cellCenter =
            cellRect.left +
            cellRect.width / 2 -
            areaRect.left;

        const moveX =
            cellCenter - floatingCenter;

        const moveY =
            cellRect.top - floatingRect.top;

        floating.style.transition =
            "transform .8s ease-in";

        floating.style.transform =
            `translate(${moveX}px, ${moveY}px) scale(.75)`;

        await sleep(800);

        cells[i].textContent =
            arrayData[i];

        cells[i].classList.add("fill");

        floating.style.opacity = "0";

        await sleep(350);

        cells[i].classList.remove("fill");

        floating.style.transition = "none";

        floating.style.transform =
            "translate(0,0)";

        const progress =
            Math.round(
                ((i + 1) / arrayData.length) * 100
            );

        document
            .getElementById("arrayProgress")
            .value = progress;

        document
            .getElementById("arrayProgressText")
            .textContent =
            progress + "%";

        await sleep(250);

    }

    floating.style.opacity = "0";

    step.textContent =
        "Array Created Successfully ✓";

    document
        .getElementById("arrayOperation")
        .textContent =
        "Memory Allocation Completed";

    document
        .getElementById("arrayStatus")
        .textContent =
        "Ready";

    const cells =
        journeyArray.querySelectorAll(".journey-cell");

    cells.forEach(function (cell) {

        cell.classList.add("fill");

    });

    await sleep(500);

    cells.forEach(function (cell) {

        cell.classList.remove("fill");

    });

    await sleep(300);

}

function moveJourneyToSurface() {

    const panel =
        document.getElementById("memoryPanel");

    const surface =
        document.getElementById("journeySurface");

    surface.classList.add("active");

    surface.appendChild(panel);

    panel.classList.add("moving");
}

function moveJourneyBack() {

    const panel =
        document.getElementById("memoryPanel");

    const location =
        document.getElementById("memoryPanelLocation");

    const surface =
        document.getElementById("journeySurface");

    if (!panel || !location || !surface) {
        return;
    }

    const first =
        panel.getBoundingClientRect();

    location.appendChild(panel);

    const last =
        panel.getBoundingClientRect();

    const deltaX =
        first.left - last.left;

    const deltaY =
        first.top - last.top;

    panel.style.transition = "none";

    panel.style.transform =
        `translate3d(${deltaX}px, ${deltaY}px, 0)`;

    panel.offsetHeight;

    requestAnimationFrame(function () {

        panel.style.transition =
            "transform .55s cubic-bezier(.22, 1, .36, 1)";

        panel.style.transform =
            "translate3d(0, 0, 0)";

    });

    setTimeout(function () {

        panel.style.transition = "";
        panel.style.transform = "";

        surface.classList.remove("active");

        panel.classList.remove("moving");

    }, 600);

}

function moveStringJourneyToSurface() {

    const panel =
        document.getElementById(
            "stringMemoryPanel"
        );

    const surface =
        document.getElementById(
            "stringJourneySurface"
        );

    if (!panel || !surface) {
        return;
    }

    surface.classList.add("active");

    surface.appendChild(panel);

    panel.classList.add("moving");

}


function moveStringJourneyBack() {

    const panel =
        document.getElementById(
            "stringMemoryPanel"
        );

    const location =
        document.getElementById(
            "stringMemoryPanelLocation"
        );

    const surface =
        document.getElementById(
            "stringJourneySurface"
        );

    if (!panel || !location || !surface) {
        return;
    }

    const first =
        panel.getBoundingClientRect();

    location.appendChild(panel);

    const last =
        panel.getBoundingClientRect();

    const deltaX =
        first.left - last.left;

    const deltaY =
        first.top - last.top;

    panel.style.transition = "none";

    panel.style.transform =
        `translate3d(${deltaX}px, ${deltaY}px, 0)`;

    panel.offsetHeight;

    requestAnimationFrame(function () {

        panel.style.transition =
            "transform .55s cubic-bezier(.22, 1, .36, 1)";

        panel.style.transform =
            "translate3d(0, 0, 0)";

    });

    setTimeout(function () {

        panel.style.transition = "";
        panel.style.transform = "";

        surface.classList.remove("active");

        panel.classList.remove("moving");

    }, 600);

}

function displayArray() {

    const container =
        document.getElementById("arrayContainer");

    container.innerHTML = "";

    arrayData.forEach(function (value, index) {

        const box =
            document.createElement("div");

        box.className = "array-box";

        box.innerHTML = `

            <div class="array-value">
                ${value}
            </div>

            <div class="array-index">
                ${index}
            </div>

        `;

        container.appendChild(box);

    });

    document
        .getElementById("arraySize")
        .textContent = arrayData.length;

    document
        .getElementById("currentIndex")
        .textContent = "--";

    document
        .getElementById("arrayProgress")
        .value = 100;

    document
        .getElementById("arrayProgressText")
        .textContent = "100%";

}


function updateSyntax(operation = "create", index = -1, value = "") {

    const syntax =
        document.getElementById("syntaxCode");

    switch (operation) {

        case "create":

            syntax.textContent =
                `int arr[${arrayData.length}] = { ${arrayData.join(", ")} };`;

            break;


        case "traverse":

            syntax.textContent =
                `for(int i = 0; i < arr.length; i++){

    cout << arr[i];

}`;

            break;


        case "insert":

            syntax.textContent =
                `for(int i = arr.length; i > ${index}; i--){

    arr[i] = arr[i-1];

}

arr[${index}] = ${value};`;

            break;


        case "delete":

            syntax.textContent =
                `for(int i = ${index}; i < arr.length-1; i++){

    arr[i] = arr[i+1];

}`;

            break;


        case "update":

            syntax.textContent =
                `arr[${index}] = ${value};`;

            break;


        case "clear":

            syntax.textContent =
                `int arr[] = { };`;

            break;

    }

}


async function traverseArray() {

    if (arrayData.length === 0) {

        alert("Generate an Array First");

        return;

    }

    const boxes = document.querySelectorAll(".array-box");

    document
        .getElementById("arrayOperation")
        .textContent = "Traversal";

    document
        .getElementById("arrayStatus")
        .textContent = "Traversing Elements";

    updateSyntax("traverse");

    for (let i = 0; i < boxes.length; i++) {

        document
            .getElementById("currentIndex")
            .textContent = i;

        boxes[i].classList.add("visit");

        document
            .getElementById("arrayProgress")
            .value = ((i + 1) / boxes.length) * 100;

        document
            .getElementById("arrayProgressText")
            .textContent =
            Math.round(((i + 1) / boxes.length) * 100) + "%";

        await sleep(animationSpeed);

        boxes[i].classList.remove("visit");

    }

    document
        .getElementById("currentIndex")
        .textContent = "--";

    document
        .getElementById("arrayStatus")
        .textContent = "Traversal Completed";

    document
        .getElementById("arrayOperation")
        .textContent = "Ready";

}

function showOperationInput(operation) {

    const input =
        document.getElementById("arrayInput");

    const indexInput =
        document.getElementById("arrayIndexInput");

    input.value = "";

    indexInput.value = "";

    indexInput.style.display = "none";

    if (operation === "insert") {

        input.placeholder = "Enter value";

        indexInput.placeholder = "Enter index";

        indexInput.style.display = "block";

    }

    if (operation === "delete") {

        input.placeholder = "Enter index";

        indexInput.style.display = "none";

    }

    if (operation === "update") {

        input.placeholder = "Enter new value";

        indexInput.placeholder = "Enter index";

        indexInput.style.display = "block";

    }

}


function resetOperationInput() {

    const input =
        document.getElementById("arrayInput");

    const indexInput =
        document.getElementById("arrayIndexInput");

    input.value = "";

    input.placeholder = "Enter value";

    indexInput.value = "";

    indexInput.style.display = "none";

}
async function insertionJourney(index, value) {

    const step =
        document.getElementById("journeyStep");

    const journeyArray =
        document.getElementById("journeyArray");

    const floating =
        document.getElementById("floatingValue");

    journeyArray.innerHTML = "";

    floating.textContent = "";

    floating.style.opacity = "0";

    floating.style.transition = "none";

    floating.style.transform =
        "translate(0,0) scale(.8)";

    step.textContent =
        `Preparing Insertion at Index ${index}`;

    for (let i = 0; i < arrayData.length; i++) {

        const cell =
            document.createElement("div");

        cell.className = "journey-cell";

        cell.textContent = arrayData[i];

        journeyArray.appendChild(cell);

    }

    await sleep(500);

    const cells =
        journeyArray.querySelectorAll(".journey-cell");

    step.textContent =
        `Creating Space at Index ${index}`;

    await sleep(500);

    for (let i = arrayData.length - 1; i >= index; i--) {

        cells[i].classList.add("active");

        step.textContent =
            `Moving Element ${arrayData[i]} from Index ${i}`;

        await sleep(animationSpeed);

        cells[i].classList.remove("active");

    }

    step.textContent =
        "New Memory Position Created";

    await sleep(500);

    floating.textContent = value;

    floating.style.opacity = "1";

    step.textContent =
        `Storing New Value : ${value}`;

    await sleep(500);

    const newCell =
        document.createElement("div");

    newCell.className = "journey-cell fill";

    newCell.textContent = value;

    journeyArray.insertBefore(
        newCell,
        cells[index]
    );

    floating.style.opacity = "0";

    await sleep(600);

    step.textContent =
        `Element ${value} Inserted Successfully ✓`;

    await sleep(500);

}
async function insertArray() {

    if (arrayAnimating) {
        return;
    }

    if (arrayData.length === 0) {

        document
            .getElementById("arrayStatus")
            .textContent = "Generate an Array First";

        return;

    }

    const input =
        document.getElementById("arrayInput");

    const indexInput =
        document.getElementById("arrayIndexInput");

    const valueText =
        input.value.trim();

    const indexText =
        indexInput.value.trim();

    if (valueText === "" || isNaN(valueText)) {

        document
            .getElementById("arrayStatus")
            .textContent = "Enter a valid value";

        document
            .getElementById("arrayStatus")
            .style.color = "red";

        return;

    }

    if (indexText === "" ||
        !Number.isInteger(Number(indexText)) ||
        Number(indexText) < 0 ||
        Number(indexText) > arrayData.length) {

        document
            .getElementById("arrayStatus")
            .textContent = "Enter a valid index";

        document
            .getElementById("arrayStatus")
            .style.color = "red";

        return;

    }

    const value =
        Number(valueText);

    const index =
        Number(indexText);

    document
        .getElementById("arrayStatus")
        .style.color = "";

    document
        .getElementById("arrayOperation")
        .textContent = "Insertion";

    document
        .getElementById("arrayStatus")
        .textContent =
        "Preparing Insertion";

    document
        .getElementById("currentIndex")
        .textContent = index;

    updateSyntax("insert", index, value);

    arrayAnimating = true;

    moveJourneyToSurface();

    await sleep(750);

    await insertionJourney(
        index,
        value
    );

    arrayData.splice(
        index,
        0,
        value
    );

    displayArray();

    const boxes =
        document.querySelectorAll(".array-box");

    boxes[index].classList.add("insert");

    document
        .getElementById("arrayStatus")
        .textContent =
        "Element Inserted";

    document
        .getElementById("arrayOperation")
        .textContent =
        "Insertion Completed";

    await sleep(animationSpeed);

    boxes[index].classList.remove("insert");

    moveJourneyBack();

    document
        .getElementById("currentIndex")
        .textContent = "--";

    input.value = "";

    input.placeholder = "Enter value";

    indexInput.value = "";

    indexInput.style.display = "none";

    arrayAnimating = false;

    document
        .getElementById("arrayOperation")
        .textContent = "Ready";

    document
        .getElementById("arrayStatus")
        .textContent = "Ready";

}

async function deletionJourney(index) {

    const step =
        document.getElementById("journeyStep");

    const journeyArray =
        document.getElementById("journeyArray");

    const journeyAnimation =
        document.getElementById("journeyAnimation");

    const floating =
        document.getElementById("floatingValue");


    /* ==========================================
       RESET
    ========================================== */

    journeyArray.innerHTML = "";

    floating.textContent = "";

    floating.style.opacity = "0";

    floating.style.transform =
        "translate3d(0,0,0) scale(.85)";


    /* ==========================================
       CREATE CELLS
    ========================================== */

    step.textContent =
        `Accessing Index ${index}`;


    for (let i = 0; i < arrayData.length; i++) {

        const cell =
            document.createElement("div");

        cell.className =
            "journey-cell";

        cell.textContent =
            arrayData[i];

        journeyArray.appendChild(cell);
    }


    await sleep(500);


    const cells =
        journeyArray.querySelectorAll(".journey-cell");


    /* ==========================================
       STEP 1
       ACCESS ELEMENT
    ========================================== */

    cells[index].classList.add("active");

    step.textContent =
        `Accessing Index ${index}`;

    await sleep(750);


    /* ==========================================
       STEP 2
       DELETE ELEMENT
    ========================================== */

    const deletedValue =
        arrayData[index];

    step.textContent =
        `Removing Value ${deletedValue}`;


    cells[index].classList.remove("active");

    cells[index].classList.add("delete");


    /* ==========================================
       POSITION FLOATING VALUE
       DIRECTLY ABOVE DELETED CELL
    ========================================== */

    const cellRect =
        cells[index].getBoundingClientRect();

    const areaRect =
        journeyAnimation.getBoundingClientRect();


    const x =
        cellRect.left -
        areaRect.left +
        (cellRect.width / 2) -
        30;


    const y =
        cellRect.top -
        areaRect.top -
        70;


    floating.textContent =
        deletedValue;


    floating.style.left =
        `${x}px`;

    floating.style.top =
        `${y}px`;


    /* Start directly above the cell */

    floating.style.transform =
        "translate3d(0,15px,0) scale(.8)";

    floating.style.opacity =
        "1";


    await sleep(550);


    /* ==========================================
       FLOAT UP
    ========================================== */

    floating.style.transform =
        "translate3d(0,-30px,0) scale(1)";


    await sleep(500);


    /* ==========================================
       REMOVE FROM MEMORY
    ========================================== */

    floating.style.opacity =
        "0";

    floating.style.transform =
        "translate3d(0,-55px,0) scale(.8)";


    cells[index].style.opacity =
        "0";


    await sleep(450);


    /* ==========================================
       EMPTY DELETED POSITION
    ========================================== */

    cells[index].textContent = "";

    cells[index].classList.remove("delete");

    cells[index].style.opacity = "1";


    /* ==========================================
       STEP 3
       SHIFT LEFT
    ========================================== */

    step.textContent =
        "Shifting Elements Left";

    await sleep(350);


    /* ==========================================
       MOVE EACH ELEMENT
    ========================================== */

    for (let i = index; i < arrayData.length - 1; i++) {

        const source =
            cells[i + 1];

        const destination =
            cells[i];

        const value =
            arrayData[i + 1];


        /* Highlight element being moved */

        source.classList.add("active");

        step.textContent =
            `Moving ${value} → Index ${i}`;

        await sleep(350);


        /*
           Move the COMPLETE element.
           No text replacement yet.
        */

        source.classList.add("shift-left");


        await sleep(700);


        /* ======================================
           Transfer value after movement
        ====================================== */

        destination.textContent =
            value;


        destination.classList.add("fill");


        await sleep(250);


        /* ======================================
           Reset source
        ====================================== */

        source.classList.remove("active");

        source.classList.remove("shift-left");

        source.style.opacity =
            "0";


        await sleep(200);


        source.textContent = "";

        source.style.opacity =
            "1";


        destination.classList.remove("fill");

    }


    /* ==========================================
       REMOVE LAST EMPTY CELL
    ========================================== */

    const lastCell =
        cells[cells.length - 1];


    lastCell.style.opacity =
        "0";


    await sleep(400);


    /* ==========================================
       FINAL MESSAGE
    ========================================== */

    step.textContent =
        `Element at Index ${index} Deleted Successfully ✓`;


    floating.style.opacity =
        "0";


    await sleep(600);
}

async function deleteArray() {

    if (arrayAnimating) {
        return;
    }

    if (arrayData.length === 0) {

        document
            .getElementById("arrayStatus")
            .textContent = "Generate an Array First";

        return;

    }

    const indexInput =
        document.getElementById("arrayIndexInput");

    const indexText =
        indexInput.value.trim();

    if (indexText === "" ||
        !Number.isInteger(Number(indexText)) ||
        Number(indexText) < 0 ||
        Number(indexText) >= arrayData.length) {

        document
            .getElementById("arrayStatus")
            .textContent = "Enter a valid index";

        document
            .getElementById("arrayStatus")
            .style.color = "red";

        return;

    }

    const index =
        Number(indexText);

    document
        .getElementById("arrayStatus")
        .style.color = "";

    document
        .getElementById("arrayOperation")
        .textContent = "Deletion";

    document
        .getElementById("arrayStatus")
        .textContent =
        "Preparing Deletion";

    document
        .getElementById("currentIndex")
        .textContent = index;

    updateSyntax("delete", index);

    arrayAnimating = true;

    moveJourneyToSurface();

    await sleep(400);

    await deletionJourney(index);

    arrayData.splice(index, 1);

    displayArray();

    document
        .getElementById("arrayStatus")
        .textContent =
        "Element Deleted";

    document
        .getElementById("arrayOperation")
        .textContent =
        "Deletion Completed";

    await sleep(animationSpeed);

    moveJourneyBack();

    document
        .getElementById("currentIndex")
        .textContent = "--";

    indexInput.value = "";

    indexInput.style.display = "none";

    document
        .getElementById("arrayInput")
        .style.display = "block";

    document
        .getElementById("arrayInput")
        .placeholder = "Enter value";

    arrayAnimating = false;

    document
        .getElementById("arrayOperation")
        .textContent = "Ready";

    document
        .getElementById("arrayStatus")
        .textContent = "Ready";

}

async function updateJourney(index, value, oldValue) {

    const step =
        document.getElementById("journeyStep");

    const journeyArray =
        document.getElementById("journeyArray");

    const floating =
        document.getElementById("floatingValue");

    journeyArray.innerHTML = "";

    floating.textContent = "";

    floating.style.opacity = "0";

    floating.style.transition = "none";

    floating.style.transform =
        "translate(0,0) scale(.8)";

    step.textContent =
        `Accessing Index ${index}`;

    for (let i = 0; i < arrayData.length; i++) {

        const cell =
            document.createElement("div");

        cell.className = "journey-cell";

        cell.textContent = arrayData[i];

        journeyArray.appendChild(cell);

    }

    await sleep(500);

    const cells =
        journeyArray.querySelectorAll(".journey-cell");

    cells[index].classList.add("update");

    await sleep(600);

    step.textContent =
        `Reading Old Value : ${oldValue}`;

    floating.textContent = oldValue;

    floating.style.opacity = "1";

    await sleep(600);

    step.textContent =
        "Replacing Memory Value";

    await sleep(500);

    cells[index].textContent = value;

    cells[index].classList.remove("update");

    cells[index].classList.add("fill");

    floating.textContent = value;

    await sleep(600);

    floating.style.opacity = "0";

    step.textContent =
        `Index ${index} Updated Successfully ✓`;

    await sleep(500);

    cells[index].classList.remove("fill");

}

async function updateArray() {

    if (arrayAnimating) {
        return;
    }

    const input =
        document.getElementById("arrayInput");

    const indexInput =
        document.getElementById("arrayIndexInput");

    const valueText =
        input.value.trim();

    const indexText =
        indexInput.value.trim();

    if (valueText === "" || isNaN(valueText)) {

        document
            .getElementById("arrayStatus")
            .textContent = "Enter a valid value";

        document
            .getElementById("arrayStatus")
            .style.color = "red";

        return;

    }

    if (indexText === "" ||
        !Number.isInteger(Number(indexText)) ||
        Number(indexText) < 0 ||
        Number(indexText) >= arrayData.length) {

        document
            .getElementById("arrayStatus")
            .textContent = "Enter a valid index";

        document
            .getElementById("arrayStatus")
            .style.color = "red";

        return;

    }

    const value =
        Number(valueText);

    const index =
        Number(indexText);

    const oldValue =
        arrayData[index];

    document
        .getElementById("arrayStatus")
        .style.color = "";

    const boxes =
        document.querySelectorAll(".array-box");

    document
        .getElementById("arrayOperation")
        .textContent = "Updating Element";

    document
        .getElementById("arrayStatus")
        .textContent =
        "Preparing Update";

    document
        .getElementById("currentIndex")
        .textContent = index;

    updateSyntax("update", index, value);

    arrayAnimating = true;

    moveJourneyToSurface();

    await sleep(400);

    boxes[index].classList.add("update");

    document
        .getElementById("arrayStatus")
        .textContent =
        "Accessing Index " + index;

    await sleep(animationSpeed);

    await updateJourney(
        index,
        value,
        oldValue
    );

    arrayData[index] = value;

    boxes[index]
        .querySelector(".array-value")
        .textContent = value;

    await sleep(animationSpeed);

    boxes[index].classList.remove("update");

    document
        .getElementById("arrayStatus")
        .textContent =
        "Element Updated";

    document
        .getElementById("arrayOperation")
        .textContent =
        "Update Completed";

    await sleep(500);

    moveJourneyBack();

    document
        .getElementById("currentIndex")
        .textContent = "--";

    input.value = "";

    input.placeholder = "Enter value";

    indexInput.value = "";

    indexInput.style.display = "none";

    arrayAnimating = false;

    document
        .getElementById("arrayOperation")
        .textContent = "Ready";

    document
        .getElementById("arrayStatus")
        .textContent = "Ready";

}

function clearArray() {

    if (arrayAnimating) {
        return;
    }

    arrayData = [];

    const input =
        document.getElementById("arrayInput");

    const indexInput =
        document.getElementById("arrayIndexInput");

    input.value = "";
    input.style.display = "block";
    input.placeholder = "Example : 10,20,30,40";

    if (indexInput) {

        indexInput.value = "";
        indexInput.style.display = "none";

    }

    document
        .getElementById("arrayContainer")
        .innerHTML = "";

    document
        .getElementById("journeyArray")
        .innerHTML = "";

    document
        .getElementById("floatingValue")
        .textContent = "";

    document
        .getElementById("floatingValue")
        .style.opacity = "0";

    document
        .getElementById("journeyStep")
        .textContent = "Ready to Generate Array";

    document
        .getElementById("arraySize")
        .textContent = "0";

    document
        .getElementById("currentIndex")
        .textContent = "--";

    document
        .getElementById("arrayProgress")
        .value = 0;

    document
        .getElementById("arrayProgressText")
        .textContent = "0%";

    document
        .getElementById("arrayOperation")
        .textContent = "Waiting...";

    document
        .getElementById("arrayStatus")
        .textContent = "Ready";

    document
        .getElementById("arrayStatus")
        .style.color = "";

    updateSyntax("clear");

}

function initializeString() {

    const input =
        document.getElementById("stringInput");
    addInputSuggestion(
        "stringInput",
        "HELLO"
    );

    const indexInput =
        document.createElement("input");

    indexInput.type = "text";

    indexInput.id =
        "stringIndexInput";

    indexInput.placeholder =
        "Index";

    indexInput.className =
        "string-index-input";

    indexInput.style.display =
        "none";

    input.insertAdjacentElement(
        "afterend",
        indexInput
    );


    const generateBtn =
        document.getElementById(
            "generateStringBtn"
        );

    const traverseBtn =
        document.getElementById(
            "stringTraverseBtn"
        );

    const insertBtn =
        document.getElementById(
            "stringInsertBtn"
        );

    const deleteBtn =
        document.getElementById(
            "stringDeleteBtn"
        );

    const updateBtn =
        document.getElementById(
            "stringUpdateBtn"
        );

    const clearBtn =
        document.getElementById(
            "clearStringBtn"
        );


    if (generateBtn) {

        generateBtn.onclick =
            startStringMemorySimulation;

    }


    if (traverseBtn) {

        traverseBtn.onclick =
            traverseString;

    }


    if (insertBtn) {

        insertBtn.onclick =
            function () {

                if (stringAnimating) {
                    return;
                }


                if (stringData.length === 0) {

                    document
                        .getElementById(
                            "stringStatus"
                        )
                        .textContent =
                        "Generate a String First";

                    return;
                }


                if (
                    indexInput.style.display ===
                    "none"
                ) {

                    input.style.display =
                        "block";

                    input.value = "";

                    input.placeholder =
                        "Enter character";


                    indexInput.style.display =
                        "block";

                    indexInput.value = "";

                    indexInput.placeholder =
                        "Enter index";


                    document
                        .getElementById(
                            "stringOperation"
                        )
                        .textContent =
                        "Insertion";


                    document
                        .getElementById(
                            "stringStatus"
                        )
                        .textContent =
                        "Enter Character and Index";

                    return;
                }


                insertString();

            };

    }


    if (deleteBtn) {

        deleteBtn.onclick =
            deleteString;

    }


    if (updateBtn) {

        updateBtn.onclick =
            updateString;

    }


    if (clearBtn) {

        clearBtn.onclick =
            clearString;

    }

}

/* ==========================================
   PREPARE STRING
========================================== */

function prepareString() {

    const input =
        document
            .getElementById("stringInput")
            .value
            .trim();


    const status =
        document
            .getElementById("stringStatus");


    if (input === "") {

        status.textContent =
            "Please Enter a String";

        status.style.color =
            "red";

        return false;

    }


    stringData =
        input.split("");


    status.textContent =
        "String Ready";

    status.style.color =
        "";


    return true;

}


/* ==========================================
   START STRING SIMULATION
========================================== */

async function startStringMemorySimulation() {

    if (stringAnimating) {
        return;
    }

    if (!prepareString()) {
        return;
    }

    stringAnimating = true;

    const status =
        document.getElementById(
            "stringStatus"
        );

    try {

        document
            .getElementById(
                "stringOperation"
            )
            .textContent =
            "Creating String";

        status.textContent =
            "Processing";

        document
            .getElementById(
                "stringProgress"
            )
            .value = 0;

        document
            .getElementById(
                "stringProgressText"
            )
            .textContent = "0%";

        document
            .getElementById(
                "stringSize"
            )
            .textContent =
            stringData.length;


        moveStringJourneyToSurface();

        await sleep(650);


        await stringMemorySimulation();


        displayString();


        document
            .getElementById(
                "stringOperation"
            )
            .textContent =
            "String Created";

        status.textContent =
            "Ready";

        document
            .getElementById(
                "stringCurrentIndex"
            )
            .textContent =
            "--";


        await sleep(700);

    }

    catch (error) {

        console.error(
            "String Journey Error:",
            error
        );

        status.textContent =
            "Simulation Error";

    }

    finally {

        try {

            moveStringJourneyBack();

        }

        catch (error) {

            console.error(
                "String Journey Return Error:",
                error
            );

        }

        stringAnimating = false;

    }

}
/* ==========================================
   STRING MEMORY SIMULATION
========================================== */

async function stringMemorySimulation() {

    const step =
        document.getElementById(
            "stringJourneyStep"
        );


    const journey =
        document.getElementById(
            "stringJourneyArray"
        );


    const floating =
        document.getElementById(
            "stringFloatingValue"
        );


    const operation =
        document.getElementById(
            "stringOperation"
        );


    const status =
        document.getElementById(
            "stringStatus"
        );


    const currentIndex =
        document.getElementById(
            "stringCurrentIndex"
        );


    const progress =
        document.getElementById(
            "stringProgress"
        );


    const progressText =
        document.getElementById(
            "stringProgressText"
        );


    /* ==========================================
       RESET JOURNEY
    ========================================== */

    journey.innerHTML = "";

    floating.textContent = "";

    floating.style.opacity = "0";

    floating.style.transition = "none";

    floating.style.transform =
        "translate3d(0,0,0) scale(.8)";


    progress.value = 0;

    progressText.textContent = "0%";

    currentIndex.textContent = "--";


    step.textContent =
        "Preparing String";

    operation.textContent =
        "Creating String";

    status.textContent =
        "Preparing Characters";


    await sleep(600);


    /* ==========================================
       CREATE EMPTY MEMORY CELLS
    ========================================== */

    for (
        let i = 0;
        i < stringData.length;
        i++
    ) {

        const cell =
            document.createElement("div");


        cell.className =
            "string-journey-cell";


        journey.appendChild(cell);


        await sleep(150);

    }


    const cells =
        journey.querySelectorAll(
            ".string-journey-cell"
        );


    await sleep(400);


    /* ==========================================
       STORE CHARACTERS ONE BY ONE
    ========================================== */

    for (
        let i = 0;
        i < stringData.length;
        i++
    ) {

        const character =
            stringData[i];


        currentIndex.textContent =
            i;


        operation.textContent =
            "Reading Character";


        status.textContent =
            `Character ${i + 1} of ${stringData.length}`;


        step.textContent =
            `Reading Character "${character}"`;


        /* --------------------------------------
           SHOW FLOATING CHARACTER
        -------------------------------------- */

        floating.textContent =
            character;


        floating.style.transition =
            "none";


        floating.style.opacity =
            "0";


        floating.style.transform =
            "translate3d(0,0,0) scale(.8)";


        await sleep(100);


        floating.style.transition =
            "opacity .3s ease, transform .3s ease";


        floating.style.opacity =
            "1";


        floating.style.transform =
            "translate3d(0,0,0) scale(1)";


        await sleep(500);


        /* --------------------------------------
           HIGHLIGHT DESTINATION CELL
        -------------------------------------- */

        cells[i].classList.add(
            "active"
        );


        operation.textContent =
            "Storing Character";


        step.textContent =
            `Storing "${character}" at Index ${i}`;


        await sleep(450);


        /* --------------------------------------
           STORE CHARACTER
        -------------------------------------- */

        cells[i].textContent =
            character;


        cells[i].classList.remove(
            "active"
        );


        cells[i].classList.add(
            "fill"
        );


        floating.style.opacity =
            "0";


        await sleep(500);


        /* --------------------------------------
           REMOVE TEMPORARY FILL EFFECT
        -------------------------------------- */

        cells[i].classList.remove(
            "fill"
        );


        /* --------------------------------------
           UPDATE PROGRESS
        -------------------------------------- */

        const percent =
            Math.round(
                ((i + 1) /
                    stringData.length) *
                100
            );


        progress.value =
            percent;


        progressText.textContent =
            percent + "%";


        await sleep(250);

    }


    /* ==========================================
       COMPLETION
    ========================================== */

    floating.style.opacity =
        "0";


    currentIndex.textContent =
        "--";


    operation.textContent =
        "String Creation Completed";


    status.textContent =
        "Ready";


    step.textContent =
        "String Created Successfully ✓";


    /* Keep all cells filled at the end */

    cells.forEach(
        function (cell) {

            cell.classList.add(
                "fill"
            );

        }
    );


    await sleep(700);

}


/* ==========================================
   DISPLAY FINAL STRING
========================================== */

function displayString() {

    const container =
        document.getElementById(
            "stringContainer"
        );


    container.innerHTML = "";


    stringData.forEach(
        function (character, index) {

            const box =
                document.createElement(
                    "div"
                );


            box.className =
                "string-box";


            box.innerHTML = `

                <div class="string-character">
                    ${character}
                </div>

                <div class="string-index">
                    ${index}
                </div>

            `;


            container.appendChild(box);

        }
    );


    document
        .getElementById(
            "stringSize"
        )
        .textContent =
        stringData.length;


    document
        .getElementById(
            "stringCurrentIndex"
        )
        .textContent =
        "--";


    document
        .getElementById(
            "stringOperation"
        )
        .textContent =
        "String Created";


    document
        .getElementById(
            "stringStatus"
        )
        .textContent =
        "Ready";


    document
        .getElementById(
            "stringProgress"
        )
        .value =
        100;


    document
        .getElementById(
            "stringProgressText"
        )
        .textContent =
        "100%";


    updateStringSyntax();

}

function updateStringSyntax(
    operation = "create",
    index = -1,
    value = ""
) {

    const syntax =
        document
            .getElementById(
                "stringSyntaxCode"
            );


    switch (operation) {

        case "create":

            syntax.textContent =
                `string str = "${stringData.join("")}";`;

            break;


        case "traverse":

            syntax.textContent =
                `for(int i = 0; i < str.length(); i++){

    cout << str[i];

}`;

            break;


        case "insert":

            syntax.textContent =
                `str.insert(${index}, "${value}");`;

            break;


        case "delete":

            syntax.textContent =
                `str.erase(${index}, 1);`;

            break;


        case "update":

            syntax.textContent =
                `str[${index}] = '${value}';`;

            break;


        case "clear":

            syntax.textContent =
                `string str = "";`;

            break;

    }

}

async function traverseString() {

    if (stringAnimating) {
        return;
    }

    if (stringData.length === 0) {
        return;
    }

    stringAnimating = true;
    const savedScrollY = window.scrollY;

    const boxes =
        document.querySelectorAll(".string-box");

    const step =
        document.getElementById("stringJourneyStep");

    const operation =
        document.getElementById("stringOperation");

    const status =
        document.getElementById("stringStatus");

    const currentIndex =
        document.getElementById("stringCurrentIndex");

    const progress =
        document.getElementById("stringProgress");

    const progressText =
        document.getElementById("stringProgressText");

    const floating =
        document.getElementById("stringFloatingValue");

    const journey =
        document.getElementById("stringJourneyArray");

    updateStringSyntax("traverse");

    operation.textContent =
        "Traversing String";

    status.textContent =
        "Traversal in Progress";

    journey.innerHTML = "";

    for (let i = 0; i < stringData.length; i++) {

        currentIndex.textContent = i;

        step.textContent =
            "Accessing Index " + i;

        status.textContent =
            "Reading Character";

        boxes.forEach(function (box) {
            box.classList.remove("visit");
        });

        boxes[i].classList.add("visit");

        floating.textContent =
            stringData[i];

        floating.style.opacity = "1";

        const cell =
            document.createElement("div");

        cell.className =
            "string-journey-cell";

        cell.textContent =
            stringData[i];

        journey.appendChild(cell);

        const progressValue =
            Math.round(
                ((i + 1) / stringData.length) * 100
            );

        progress.value =
            progressValue;

        progressText.textContent =
            progressValue + "%";

        await sleep(animationSpeed);
    }

    boxes.forEach(function (box) {
        box.classList.remove("visit");
    });

    floating.style.opacity = "0";

    currentIndex.textContent =
        "--";

    step.textContent =
        "Traversal Completed ✓";

    operation.textContent =
        "Traversal Completed";

    status.textContent =
        "Ready";

    progress.value =
        100;

    progressText.textContent =
        "100%";

    updateStringSyntax("traverse");

    stringAnimating = false;

}



async function insertString() {

    if (stringAnimating) {
        return;
    }

    if (stringData.length === 0) {

        document
            .getElementById("stringStatus")
            .textContent = "Generate a String First";

        return;

    }

    const input =
        document.getElementById("stringInput");

    const indexInput =
        document.getElementById("stringIndexInput");

    const valueText =
        input.value.trim();

    const indexText =
        indexInput.value.trim();

    if (valueText === "" || valueText.length !== 1) {

        document
            .getElementById("stringStatus")
            .textContent = "Enter a valid character";

        document
            .getElementById("stringStatus")
            .style.color = "red";

        return;

    }

    if (indexText === "" ||
        !Number.isInteger(Number(indexText)) ||
        Number(indexText) < 0 ||
        Number(indexText) > stringData.length) {

        document
            .getElementById("stringStatus")
            .textContent = "Enter a valid index";

        document
            .getElementById("stringStatus")
            .style.color = "red";

        return;

    }

    const value =
        valueText;

    const index =
        Number(indexText);

    document
        .getElementById("stringStatus")
        .style.color = "";

    document
        .getElementById("stringOperation")
        .textContent = "Insertion";

    document
        .getElementById("stringStatus")
        .textContent =
        "Preparing Insertion";

    document
        .getElementById("stringCurrentIndex")
        .textContent = index;

    updateStringSyntax(
        "insert",
        index,
        value
    );

    stringAnimating = true;

    moveStringJourneyToSurface();

    await sleep(750);

    await stringInsertionJourney(
        index,
        value
    );

    stringData.splice(
        index,
        0,
        value
    );

    displayString();

    const boxes =
        document.querySelectorAll(
            ".string-box"
        );

    boxes[index].classList.add("insert");

    document
        .getElementById("stringStatus")
        .textContent =
        "Character Inserted";

    document
        .getElementById("stringOperation")
        .textContent =
        "Insertion Completed";

    await sleep(animationSpeed);

    boxes[index].classList.remove("insert");

    moveStringJourneyBack();

    document
        .getElementById("stringCurrentIndex")
        .textContent = "--";

    input.value = "";

    input.placeholder = "Enter character";

    indexInput.value = "";

    indexInput.style.display = "none";

    stringAnimating = false;

    document
        .getElementById("stringOperation")
        .textContent = "Ready";

    document
        .getElementById("stringStatus")
        .textContent = "Ready";

}

async function stringInsertionJourney(index, value) {

    const step =
        document.getElementById(
            "stringJourneyStep"
        );

    const journeyArray =
        document.getElementById(
            "stringJourneyArray"
        );

    const floating =
        document.getElementById(
            "stringFloatingValue"
        );

    journeyArray.innerHTML = "";

    floating.textContent = "";

    floating.style.opacity = "0";

    floating.style.transition = "none";

    floating.style.transform =
        "translate(0,0) scale(.8)";

    step.textContent =
        `Preparing Insertion at Index ${index}`;

    for (
        let i = 0;
        i < stringData.length;
        i++
    ) {

        const cell =
            document.createElement("div");

        cell.className =
            "journey-cell";

        cell.textContent =
            stringData[i];

        journeyArray.appendChild(cell);

    }

    await sleep(500);

    const cells =
        journeyArray.querySelectorAll(
            ".journey-cell"
        );

    step.textContent =
        `Creating Space at Index ${index}`;

    await sleep(500);

    for (
        let i = stringData.length - 1;
        i >= index;
        i--
    ) {

        cells[i].classList.add(
            "active"
        );

        step.textContent =
            `Moving Character ${stringData[i]} from Index ${i}`;

        await sleep(animationSpeed);

        cells[i].classList.remove(
            "active"
        );

    }

    step.textContent =
        "New Memory Position Created";

    await sleep(500);

    floating.textContent = value;

    floating.style.opacity = "1";

    step.textContent =
        `Storing New Character : ${value}`;

    await sleep(500);

    const newCell =
        document.createElement("div");

    newCell.className =
        "journey-cell fill";

    newCell.textContent = value;

    if (index >= cells.length) {

        journeyArray.appendChild(
            newCell
        );

    }
    else {

        journeyArray.insertBefore(
            newCell,
            cells[index]
        );

    }

    floating.style.opacity = "0";

    await sleep(600);

    step.textContent =
        `Character ${value} Inserted Successfully ✓`;

    await sleep(500);

}

async function deleteString() {

    if (stringAnimating) {
        return;
    }

    if (stringData.length === 0) {

        document
            .getElementById("stringStatus")
            .textContent =
            "Generate a String First";

        return;

    }

    const input =
        document.getElementById(
            "stringInput"
        );

    const indexInput =
        document.getElementById(
            "stringIndexInput"
        );


    /* ==========================================
       FIRST CLICK — SHOW INDEX INPUT
    ========================================== */

    if (indexInput.style.display === "none") {

        input.style.display = "none";

        indexInput.style.display = "block";

        indexInput.value = "";

        indexInput.placeholder =
            "Enter index";


        document
            .getElementById(
                "stringOperation"
            )
            .textContent =
            "Deletion";


        document
            .getElementById(
                "stringStatus"
            )
            .textContent =
            "Enter Index";

        return;

    }


    const indexText =
        indexInput.value.trim();


    /* ==========================================
       VALIDATE INDEX
    ========================================== */

    if (
        indexText === "" ||
        !Number.isInteger(
            Number(indexText)
        ) ||
        Number(indexText) < 0 ||
        Number(indexText) >= stringData.length
    ) {

        document
            .getElementById(
                "stringStatus"
            )
            .textContent =
            "Enter a valid index";

        document
            .getElementById(
                "stringStatus"
            )
            .style.color =
            "red";

        return;

    }


    const index =
        Number(indexText);


    document
        .getElementById(
            "stringStatus"
        )
        .style.color = "";


    document
        .getElementById(
            "stringOperation"
        )
        .textContent =
        "Deletion";


    document
        .getElementById(
            "stringStatus"
        )
        .textContent =
        "Preparing Deletion";


    document
        .getElementById(
            "stringCurrentIndex"
        )
        .textContent =
        index;


    updateStringSyntax(
        "delete",
        index
    );


    stringAnimating = true;


    /* ==========================================
       MOVE JOURNEY TO SURFACE
    ========================================== */

    moveStringJourneyToSurface();

    await sleep(750);


    /* ==========================================
       RUN DELETION JOURNEY
    ========================================== */

    await stringDeletionJourney(
        index
    );


    /* ==========================================
       DELETE CHARACTER
    ========================================== */

    const deletedCharacter =
        stringData[index];


    stringData.splice(
        index,
        1
    );


    /* ==========================================
       DISPLAY UPDATED STRING
    ========================================== */

    displayString();


    document
        .getElementById(
            "stringStatus"
        )
        .textContent =
        `Character "${deletedCharacter}" Deleted`;


    document
        .getElementById(
            "stringOperation"
        )
        .textContent =
        "Deletion Completed";


    await sleep(animationSpeed);


    /* ==========================================
       RETURN JOURNEY
    ========================================== */

    moveStringJourneyBack();


    /* ==========================================
       RESET
    ========================================== */

    document
        .getElementById(
            "stringCurrentIndex"
        )
        .textContent =
        "--";


    input.value = "";

    input.style.display =
        "block";

    input.placeholder =
        "Enter character";


    indexInput.value = "";

    indexInput.style.display =
        "none";


    stringAnimating = false;


    document
        .getElementById(
            "stringOperation"
        )
        .textContent =
        "Ready";


    document
        .getElementById(
            "stringStatus"
        )
        .textContent =
        "Ready";

}
async function stringDeletionJourney(index) {

    const step =
        document.getElementById(
            "stringJourneyStep"
        );

    const journeyArray =
        document.getElementById(
            "stringJourneyArray"
        );

    const floating =
        document.getElementById(
            "stringFloatingValue"
        );


    journeyArray.innerHTML = "";

    floating.textContent = "";

    floating.style.opacity = "0";

    floating.style.transition = "none";

    floating.style.transform =
        "translate(0,0) scale(.8)";


    step.textContent =
        `Preparing Deletion at Index ${index}`;


    /* ==========================================
       CREATE JOURNEY CELLS
    ========================================== */

    for (
        let i = 0;
        i < stringData.length;
        i++
    ) {

        const cell =
            document.createElement("div");

        cell.className =
            "journey-cell";

        cell.textContent =
            stringData[i];

        journeyArray.appendChild(
            cell
        );

    }


    await sleep(500);


    const cells =
        journeyArray.querySelectorAll(
            ".journey-cell"
        );


    /* ==========================================
       SELECT CHARACTER
    ========================================== */

    cells[index].classList.add(
        "active"
    );


    step.textContent =
        `Accessing Character "${stringData[index]}" at Index ${index}`;


    floating.textContent =
        stringData[index];


    floating.style.transition =
        "opacity .3s ease, transform .5s ease";

    floating.style.opacity =
        "1";

    floating.style.transform =
        "translateY(0) scale(1)";


    await sleep(700);


    /* ==========================================
       REMOVE CHARACTER
    ========================================== */

    step.textContent =
        `Deleting Character "${stringData[index]}"`;


    cells[index].classList.add(
        "delete"
    );


    await sleep(600);


    floating.style.transition =
        "opacity .3s ease, transform .3s ease";

    floating.style.opacity =
        "0";

    floating.style.transform =
        "translate(0,0) scale(.7)";

    await sleep(350);

    cells[index].style.transition =
        "opacity .3s ease, transform .3s ease, width .35s ease, margin .35s ease";

    cells[index].style.opacity =
        "0";

    cells[index].style.transform =
        "scale(.7)";

    cells[index].style.width =
        "0px";

    cells[index].style.marginLeft =
        "0px";

    cells[index].style.marginRight =
        "0px";

    await sleep(400);

    cells[index].remove();

    floating.textContent = "";
    floating.style.visibility =
        "visible";

    floating.style.opacity =
        "0";

    floating.style.opacity =
        "0";

    floating.style.visibility =
        "hidden";

    floating.style.transform =
        "translate(0,0) scale(.7)";


    /* ==========================================
       SHIFT REMAINING CHARACTERS
    ========================================== */

    step.textContent =
        "Shifting Remaining Characters";


    for (
        let i = index + 1;
        i < cells.length;
        i++
    ) {

        cells[i].classList.add(
            "active"
        );


        await sleep(250);


        cells[i].classList.remove(
            "active"
        );

    }


    await sleep(400);


    step.textContent =
        "Character Deleted Successfully ✓";


    await sleep(500);

}

async function stringUpdateJourney(
    index,
    oldValue,
    newValue
) {

    const step =
        document.getElementById(
            "stringJourneyStep"
        );

    const journeyArray =
        document.getElementById(
            "stringJourneyArray"
        );

    const floating =
        document.getElementById(
            "stringFloatingValue"
        );


    journeyArray.innerHTML = "";

    floating.textContent = "";

    floating.style.opacity =
        "0";

    floating.style.transition =
        "none";

    floating.style.transform =
        "translate(0,0) scale(.8)";


    step.textContent =
        `Accessing Index ${index}`;


    for (
        let i = 0;
        i < stringData.length;
        i++
    ) {

        const cell =
            document.createElement(
                "div"
            );

        cell.className =
            "journey-cell";

        cell.textContent =
            stringData[i];

        journeyArray.appendChild(
            cell
        );

    }


    await sleep(500);


    const cells =
        journeyArray.querySelectorAll(
            ".journey-cell"
        );


    cells[index].classList.add(
        "active"
    );


    step.textContent =
        `Reading Character "${oldValue}" at Index ${index}`;


    document
        .getElementById(
            "stringStatus"
        )
        .textContent =
        "Reading Old Character";


    await sleep(700);


    floating.textContent =
        oldValue;

    floating.style.opacity =
        "1";

    floating.style.transform =
        "translate(0,-55px) scale(1)";


    step.textContent =
        `Removing Old Character "${oldValue}"`;


    await sleep(600);


    floating.style.opacity =
        "0";

    floating.style.transform =
        "translate(0,-80px) scale(.7)";


    cells[index].classList.remove(
        "active"
    );

    cells[index].classList.add(
        "update"
    );


    await sleep(450);


    step.textContent =
        `Storing New Character "${newValue}"`;


    floating.textContent =
        newValue;

    floating.style.transition =
        "opacity .3s ease, transform .5s ease";

    floating.style.opacity =
        "1";

    floating.style.transform =
        "translate(0,0) scale(1)";


    await sleep(500);


    cells[index].textContent =
        newValue;

    cells[index].classList.remove(
        "update"
    );

    cells[index].classList.add(
        "fill"
    );


    floating.style.opacity =
        "0";


    await sleep(600);


    step.textContent =
        `Index ${index} Updated Successfully ✓`;


    document
        .getElementById(
            "stringStatus"
        )
        .textContent =
        "Character Updated";


    await sleep(500);

}

async function updateString() {

    if (stringAnimating) {
        return;
    }

    if (stringData.length === 0) {

        document
            .getElementById("stringStatus")
            .textContent =
            "Generate a String First";

        return;

    }

    const input =
        document.getElementById("stringInput");

    const indexInput =
        document.getElementById("stringIndexInput");


    if (indexInput.style.display === "none") {

        input.style.display = "block";

        input.value = "";

        input.placeholder =
            "Enter new character";

        indexInput.style.display = "block";

        indexInput.value = "";

        indexInput.placeholder =
            "Enter index";

        document
            .getElementById("stringOperation")
            .textContent =
            "Update";

        document
            .getElementById("stringStatus")
            .textContent =
            "Enter Character and Index";

        return;

    }


    const valueText =
        input.value.trim();

    const indexText =
        indexInput.value.trim();


    if (
        valueText === "" ||
        valueText.length !== 1
    ) {

        document
            .getElementById("stringStatus")
            .textContent =
            "Enter a valid character";

        document
            .getElementById("stringStatus")
            .style.color =
            "red";

        return;

    }


    if (
        indexText === "" ||
        !Number.isInteger(
            Number(indexText)
        ) ||
        Number(indexText) < 0 ||
        Number(indexText) >= stringData.length
    ) {

        document
            .getElementById("stringStatus")
            .textContent =
            "Enter a valid index";

        document
            .getElementById("stringStatus")
            .style.color =
            "red";

        return;

    }


    const value =
        valueText;

    const index =
        Number(indexText);

    const oldValue =
        stringData[index];


    document
        .getElementById("stringStatus")
        .style.color =
        "";


    document
        .getElementById("stringOperation")
        .textContent =
        "Updating Character";

    document
        .getElementById("stringStatus")
        .textContent =
        "Preparing Update";

    document
        .getElementById("stringCurrentIndex")
        .textContent =
        index;


    updateStringSyntax(
        "update",
        index,
        value
    );


    stringAnimating = true;


    try {

        moveStringJourneyToSurface();

        await sleep(750);


        await stringUpdateJourney(
            index,
            oldValue,
            value
        );


        stringData[index] =
            value;


        displayString();


        const boxes =
            document.querySelectorAll(
                ".string-box"
            );


        if (boxes[index]) {

            boxes[index].classList.add(
                "update"
            );

        }


        document
            .getElementById("stringStatus")
            .textContent =
            `Character "${oldValue}" Updated to "${value}"`;


        document
            .getElementById("stringOperation")
            .textContent =
            "Update Completed";


        await sleep(animationSpeed);


        if (boxes[index]) {

            boxes[index].classList.remove(
                "update"
            );

        }


        moveStringJourneyBack();


        document
            .getElementById("stringCurrentIndex")
            .textContent =
            "--";


        input.value = "";

        input.placeholder =
            "Enter character";


        indexInput.value = "";

        indexInput.style.display =
            "none";


        stringAnimating = false;


        document
            .getElementById("stringOperation")
            .textContent =
            "Ready";

        document
            .getElementById("stringStatus")
            .textContent =
            "Ready";

    }

    catch (error) {

        console.error(
            "String Update Error:",
            error
        );


        moveStringJourneyBack();


        stringAnimating = false;


        document
            .getElementById("stringStatus")
            .textContent =
            "Update Failed";

    }

}

function clearString() {

    if (stringAnimating) {

        return;
    }


    stringData = [];


    document
        .getElementById(
            "stringInput"
        )
        .value = "";


    document
        .getElementById(
            "stringContainer"
        )
        .innerHTML = "";


    document
        .getElementById(
            "stringJourneyArray"
        )
        .innerHTML = "";


    document
        .getElementById(
            "stringFloatingValue"
        )
        .textContent = "";


    document
        .getElementById(
            "stringFloatingValue"
        )
        .style.opacity = "0";


    document
        .getElementById(
            "stringJourneyStep"
        )
        .textContent =
        "Ready to Generate String";


    document
        .getElementById(
            "stringSize"
        )
        .textContent = "0";


    document
        .getElementById(
            "stringCurrentIndex"
        )
        .textContent = "--";


    document
        .getElementById(
            "stringProgress"
        )
        .value = 0;


    document
        .getElementById(
            "stringProgressText"
        )
        .textContent = "0%";


    document
        .getElementById(
            "stringOperation"
        )
        .textContent =
        "Waiting...";


    document
        .getElementById(
            "stringStatus"
        )
        .textContent =
        "Ready";


    updateStringSyntax("clear");

}

function initializeSorting() {
    const generateBtn = document.getElementById("generateBtn");
    addInputSuggestion(
        "arrayInput",
        "8,5,3,7,1"
    );
    const startBtn = document.getElementById("startBtn");
    generateBtn.addEventListener("click", createBars);
    startBtn.addEventListener("click", startSorting);
    const speedSelect =
        document.getElementById("speedSelect");

    speedSelect.addEventListener("change", function () {
        animationSpeed = parseInt(this.value);
    });
}


function createBars() {
    const input = document.getElementById("arrayInput").value.trim();
    originalInput = input;
    const container = document.getElementById("barContainer");
    const status = document.getElementById("status");
    container.innerHTML = "";
    if (input === "") {
        status.textContent = "Waiting for Input...";
        status.style.color = "red";
        return;
    }
    const values = input.split(",");
    const numbers = [];
    for (let i = 0; i < values.length; i++) {
        const value = values[i].trim();
        if (value === "") {
            status.textContent =
                "Empty values are not allowed.";
            status.style.color = "red";
            return;
        }
        if (isNaN(value)) {
            status.textContent =
                "Only numbers are allowed.";
            status.style.color = "red";
            return;
        }
        numbers.push(Number(value));
    }
    const maxValue = Math.max(...numbers);
    const maxHeight = 300;
    numbers.forEach(function (number) {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height =
            (number / maxValue) * maxHeight + "px";
        bar.textContent = number;
        container.appendChild(bar);
    });
    document.getElementById("algorithmName").textContent = "Not Selected";
    document.getElementById("comparisonCount").textContent = "0";
    document.getElementById("progressBar").value = 0;
    document.getElementById("progressText").textContent = "0%";
    if (document.getElementById("swapCount")) {
        document.getElementById("swapCount").textContent = "0";
    }
    if (document.getElementById("passCount")) {
        document.getElementById("passCount").textContent = "0";
    }

    if (document.getElementById("currentIndex")) {
        document.getElementById("currentIndex").textContent = "0";
    }

    if (document.getElementById("searchResult")) {
        document.getElementById("searchResult").textContent = "--";
    }

    const startButton = document.getElementById("startBtn");
    if (startButton.textContent.includes("Search")) {
        status.textContent =
            "Bars Generated. Click 'Start Search'.";
    }
    else {
        status.textContent =
            "Bars Generated. Click 'Start Sorting'.";
    } status.style.color = "green";

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startSorting() {
    const algorithm =
        document.getElementById("algorithmSelect").value;
    document.getElementById("arrayInput").value = originalInput;
    document.getElementById("algorithmName").textContent = "Loading...";
    document.getElementById("comparisonCount").textContent = "0";
    document.getElementById("swapCount").textContent = "0";
    document.getElementById("passCount").textContent = "0";
    document.getElementById("progressBar").value = 0;
    document.getElementById("progressText").textContent = "0%";
    createBars();
    await sleep(animationSpeed / 2);

    switch (algorithm) {

        case "bubble":

            await bubbleSort();

            break;

        case "selection":

            await selectionSort();

            break;

        case "insertion":

            await insertionSort();

            break;

        case "merge":

            await mergeSort();

            break;

        case "quick":

            await quickSort();

            break;
    }
}

async function bubbleSort() {
    const bars = document.querySelectorAll(".bar");
    const status = document.getElementById("status");
    document.getElementById("algorithmName").textContent = "Bubble Sort";
    document.getElementById("progressBar").value = 0;
    document.getElementById("progressText").textContent = "0%";
    let comparisons = 0;
    let swaps = 0;
    for (let i = 0; i < bars.length - 1; i++) {
        document.getElementById("passCount").textContent = i + 1;
        let progress =
            ((i + 1) / (bars.length - 1)) * 100;
        document.getElementById("progressBar").value = progress;
        document.getElementById("progressText").textContent = Math.round(progress) + "%";
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].classList.add("active");
            bars[j + 1].classList.add("active");
            status.textContent = "Comparing " + bars[j].textContent + " and " + bars[j + 1].textContent;
            await sleep(animationSpeed * 1.2);
            comparisons++;
            document.getElementById("comparisonCount").textContent = comparisons;
            let value1 = parseInt(bars[j].textContent);
            let value2 = parseInt(bars[j + 1].textContent);
            if (value1 > value2) {
                swaps++;
                document.getElementById("swapCount").textContent = swaps;
                bars[j].classList.remove("active");
                bars[j + 1].classList.remove("active");
                bars[j].classList.add("swap");
                bars[j + 1].classList.add("swap");
                await sleep(animationSpeed / 1.5);

                let tempHeight = bars[j].style.height;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = tempHeight;

                let tempText = bars[j].textContent;
                bars[j].textContent = bars[j + 1].textContent;
                bars[j + 1].textContent = tempText;

                await sleep(animationSpeed);
                bars[j].classList.remove("swap");
                bars[j + 1].classList.remove("swap");
            }
            else {
                bars[j].classList.remove("active");
                bars[j + 1].classList.remove("active");
            }
        }
        bars[bars.length - i - 1].classList.add("sorted");
    }
    bars[0].classList.add("sorted");
    status.textContent = "Sorting Completed";
}


async function selectionSort() {
    const bars = document.querySelectorAll(".bar");
    const status = document.getElementById("status");
    const n = bars.length;
    let comparisons = 0;
    let swaps = 0;
    document.getElementById("algorithmName").textContent = "Selection Sort";
    document.getElementById("passCount").textContent = "0";
    document.getElementById("comparisonCount").textContent = "0";
    document.getElementById("swapCount").textContent = "0";
    document.getElementById("progressBar").value = 0;
    document.getElementById("progressText").textContent = "0%";

    for (let i = 0; i < n - 1; i++) {
        document.getElementById("passCount").textContent = i + 1;
        let minIndex = i;
        bars[minIndex].classList.add("minimum");
        status.textContent =
            "Searching Minimum in Remaining Array.....";
        await sleep(animationSpeed);

        for (let j = i + 1; j < n; j++) {
            bars[j].classList.add("active");
            status.textContent = "Comparing " + bars[j].textContent + " with Current Minimum";
            comparisons++;
            document.getElementById("comparisonCount").textContent = comparisons;
            await sleep(animationSpeed);
            let currentValue = parseInt(bars[j].textContent);
            let minimumValue = parseInt(bars[minIndex].textContent);
            if (currentValue < minimumValue) {
                bars[minIndex].classList.remove("minimum");
                minIndex = j;
                bars[minIndex].classList.add("minimum");
                status.textContent = "New Minimum Found : " + bars[minIndex].textContent;
                await sleep(animationSpeed);
            }
            bars[j].classList.remove("active");
        }
        if (minIndex != i) {
            swaps++;
            document.getElementById("swapCount").textContent =
                swaps;
            bars[i].classList.add("swap");
            bars[minIndex].classList.add("swap");
            status.textContent =
                "Placing Minimum at Position " +
                (i + 1);
            await sleep(animationSpeed * 1.2);

            let tempHeight =
                bars[i].style.height;

            bars[i].style.height =
                bars[minIndex].style.height;

            bars[minIndex].style.height =
                tempHeight;

            let tempText =
                bars[i].textContent;

            bars[i].textContent =
                bars[minIndex].textContent;

            bars[minIndex].textContent =
                tempText;

            await sleep(animationSpeed * 1.2);

            bars[i].classList.remove("swap");
            bars[minIndex].classList.remove("swap");

        }

        bars[minIndex].classList.remove("minimum");

        bars[i].classList.add("sorted");

        let progress =
            Math.round(((i + 1) / n) * 100);

        document.getElementById("progressBar").value =
            progress;

        document.getElementById("progressText").textContent =
            progress + "%";

        status.textContent = "Position " + (i + 1) + " Fixed";

        await sleep(animationSpeed / 2);

    }

    // Last element

    bars[n - 1].classList.add("sorted");

    document.getElementById("progressBar").value = 100;
    document.getElementById("progressText").textContent = "100%";

    status.textContent =
        "Selection Sort Completed";

}


async function insertionSort() {
    const bars = document.querySelectorAll(".bar");
    const status = document.getElementById("status");
    const n = bars.length;
    let comparisons = 0;
    let shifts = 0;
    document.getElementById("algorithmName").textContent = "Insertion Sort";
    document.getElementById("comparisonCount").textContent = 0;
    document.getElementById("swapCount").textContent = 0;
    document.getElementById("passCount").textContent = 0;
    document.getElementById("progressBar").value = 0;
    document.getElementById("progressText").textContent = "0%";
    bars[0].classList.add("sorted");
    for (let i = 1; i < n; i++) {
        document.getElementById("passCount").textContent = i;
        let key =
            parseInt(bars[i].textContent);
        let keyHeight =
            bars[i].style.height;
        bars[i].classList.add("key");
        status.textContent =
            "Picking Key : " + key;
        await sleep(animationSpeed * 1.2);
        let j = i - 1;
        while (j >= 0 &&
            parseInt(bars[j].textContent) > key) {
            comparisons++;
            document.getElementById("comparisonCount").textContent = comparisons;
            bars[j].classList.add("active");
            status.textContent =
                "Shifting " +
                bars[j].textContent;
            await sleep(animationSpeed);
            bars[j + 1].style.height =
                bars[j].style.height;
            bars[j + 1].textContent =
                bars[j].textContent;
            shifts++;
            document.getElementById("swapCount").textContent = shifts;
            bars[j].classList.remove("active");
            j--;
        }
        bars[j + 1].textContent = key;
        bars[j + 1].style.height = keyHeight;
        bars[i].classList.remove("key");
        status.textContent =
            "Inserted " + key;
        await sleep(animationSpeed);
        for (let k = 0; k <= i; k++) {
            bars[k].classList.add("sorted");
        }
        let progress =
            Math.round(((i + 1) / n) * 100);
        document.getElementById("progressBar").value =
            progress;
        document.getElementById("progressText").textContent =
            progress + "%";
    }
    status.textContent =
        "Insertion Sort Completed";
}
async function mergeSort() {
    mergeComparisons = 0;
    mergePass = 0;
    mergeWrites = 0;

    document.getElementById("comparisonCount").textContent = 0;
    document.getElementById("swapCount").textContent = 0;
    document.getElementById("passCount").textContent = 0;
    const bars = document.querySelectorAll(".bar");
    document.getElementById("algorithmName").textContent = "Merge Sort";
    document.getElementById("status").textContent = "Dividing Array";
    await mergeSortHelper(0, bars.length - 1);
    bars.forEach(bar => {
        bar.classList.add("sorted");
    });
    document.getElementById("progressBar").value = 100;
    document.getElementById("progressText").textContent = "100%";
    document.getElementById("status").textContent = "Merge Sort Completed";
}

async function merge(left, mid, right) {
    const bars = document.querySelectorAll(".bar");
    let leftArray = [];
    let rightArray = [];
    for (let i = left; i <= mid; i++) {
        leftArray.push(parseInt(bars[i].textContent));
    }
    for (let i = mid + 1; i <= right; i++) {
        rightArray.push(parseInt(bars[i].textContent));
    }
    let i = 0;
    let j = 0;
    let k = left;
    while (i < leftArray.length && j < rightArray.length) {
        mergeComparisons++;
        document.getElementById("comparisonCount").textContent = mergeComparisons;
        bars[k].classList.add("merge");
        mergeWrites++;
        document.getElementById("swapCount").textContent = mergeWrites;
        await sleep(animationSpeed);
        if (leftArray[i] <= rightArray[j]) {
            bars[k].textContent = leftArray[i];
            i++;
        }
        else {
            bars[k].textContent = rightArray[j];
            mergeWrites++;
            document.getElementById("swapCount").textContent = mergeWrites;
            j++;
        }
        bars[k].style.height =
            parseInt(bars[k].textContent) * 3 + "px";
        bars[k].classList.remove("merge");
        k++;
    }
    while (i < leftArray.length) {
        bars[k].classList.add("merge");
        await sleep(animationSpeed);
        bars[k].textContent = leftArray[i];
        bars[k].style.height = leftArray[i] * 3 + "px";
        bars[k].classList.remove("merge");
        i++;
        k++;
    }

    while (j < rightArray.length) {
        bars[k].classList.add("merge");
        await sleep(animationSpeed);
        bars[k].textContent = rightArray[j];
        bars[k].style.height = rightArray[j] * 3 + "px";
        bars[k].classList.remove("merge");
        j++;
        k++;
    }

}

async function mergeSortHelper(left, right) {

    if (left >= right) {
        return;
    }
    const bars = document.querySelectorAll(".bar");
    let mid = Math.floor((left + right) / 2);
    for (let i = left; i <= right; i++) {
        bars[i].classList.add("divide");
    }
    await sleep(animationSpeed);
    for (let i = left; i <= right; i++) {
        bars[i].classList.remove("divide");
    }
    await mergeSortHelper(left, mid);
    await mergeSortHelper(mid + 1, right);
    mergePass++;
    document.getElementById("passCount").textContent = mergePass;
    await merge(left, mid, right);
}

async function partition(low, high) {
    const bars = document.querySelectorAll(".bar");
    const status = document.getElementById("status");
    let pivot =
        parseInt(bars[high].textContent);
    bars[high].classList.add("pivot");
    status.textContent = "Choosing Pivot : " + pivot;
    await sleep(animationSpeed);
    let i = low - 1;
    for (let j = low; j < high; j++) {
        bars[j].classList.add("active");
        status.textContent =
            "Comparing " +
            bars[j].textContent +
            " with Pivot";
        quickComparisons++;
        document.getElementById("comparisonCount").textContent = quickComparisons;
        await sleep(animationSpeed);
        let current =
            parseInt(bars[j].textContent);
        if (current < pivot) {
            i++;
            bars[i].classList.add("swap");
            bars[j].classList.add("swap");
            status.textContent =
                "Swapping " +
                bars[i].textContent +
                " and " +
                bars[j].textContent;
            await sleep(animationSpeed);
            let tempHeight = bars[i].style.height;
            bars[i].style.height = bars[j].style.height;
            bars[j].style.height = tempHeight;
            let temp = bars[i].textContent;
            bars[i].textContent = bars[j].textContent;
            bars[j].textContent = temp;
            quickSwaps++;
            document.getElementById("swapCount").textContent = quickSwaps;
            await sleep(animationSpeed);
            bars[i].classList.remove("swap");
            bars[j].classList.remove("swap");
        }
        bars[j].classList.remove("active");
    }
    bars[i + 1].classList.add("swap");
    bars[high].classList.add("swap");
    status.textContent = "Placing Pivot";
    await sleep(animationSpeed);

    let tempHeight = bars[i + 1].style.height;
    bars[i + 1].style.height = bars[high].style.height;
    bars[high].style.height = tempHeight;
    let temp = bars[i + 1].textContent;
    bars[i + 1].textContent = bars[high].textContent;
    bars[high].textContent = temp;
    quickSwaps++;
    document.getElementById("swapCount").textContent = quickSwaps;
    bars[i + 1].classList.remove("swap");
    bars[high].classList.remove("swap");
    bars[high].classList.remove("pivot");
    bars[i + 1].classList.add("sorted");
    quickPass++;
    document.getElementById("passCount").textContent = quickPass;
    return i + 1;
}

async function quickSortHelper(low, high) {
    const bars = document.querySelectorAll(".bar");
    if (low < high) {

        for (let i = low; i <= high; i++) {
            if (!bars[i].classList.contains("sorted")) {
                bars[i].classList.add("right");
            }
        }
        await sleep(animationSpeed / 2);
        let pivotIndex = await partition(low, high);
        for (let i = low; i <= high; i++) {
            bars[i].classList.remove("right");
        }
        let progress = Math.round((quickPass / bars.length) * 100);
        document.getElementById("progressBar").value = progress;
        document.getElementById("progressText").textContent = progress + "%";

        await quickSortHelper(low, pivotIndex - 1);
        await quickSortHelper(pivotIndex + 1, high);
    }
}

async function quickSort() {
    const bars = document.querySelectorAll(".bar");
    quickComparisons = 0;
    quickSwaps = 0;
    quickPass = 0;
    document.getElementById("algorithmName").textContent =
        "Quick Sort";

    document.getElementById("comparisonCount").textContent = 0;
    document.getElementById("swapCount").textContent = 0;
    document.getElementById("passCount").textContent = 0;
    document.getElementById("progressBar").value = 0;
    document.getElementById("progressText").textContent = "0%";
    document.getElementById("status").textContent = "Starting Quick Sort...";
    await sleep(animationSpeed);

    await quickSortHelper(0, bars.length - 1);

    bars.forEach(bar => {
        bar.classList.remove("pivot");
        bar.classList.remove("active");
        bar.classList.remove("swap");
        bar.classList.remove("right");
        bar.classList.add("sorted");
    });

    document.getElementById("progressBar").value = 100;
    document.getElementById("progressText").textContent = "100%";
    document.getElementById("status").textContent = "Quick Sort Completed";

}

function initializeSearching() {
    const generateBtn = document.getElementById("generateBtn");
    addInputSuggestion(
        "arrayInput",
        "10,20,30,40,50"
    );

    addInputSuggestion(
        "targetInput",
        "30"
    );
    const startBtn = document.getElementById("startBtn");
    const speedSelect = document.getElementById("speedSelect");
    generateBtn.addEventListener(
        "click",
        createBars
    );
    startBtn.addEventListener(
        "click",
        startSearching
    );
    speedSelect.addEventListener(
        "change",
        function () {
            animationSpeed =
                parseInt(this.value);
        }
    );
}

async function startSearching() {
    const algorithm = document.getElementById("algorithmSelect").value;
    switch (algorithm) {
        case "linear":
            await linearSearch();
            break;
        case "binary":
            await binarySearch();
            break;
    }
}

async function linearSearch() {
    const bars = document.querySelectorAll(".bar");
    const status = document.getElementById("status");
    const target = parseInt(document.getElementById("targetInput").value);

    searchComparisons = 0;
    document.getElementById("algorithmName").textContent = "Linear Search";
    document.getElementById("currentIndex").textContent = "0";
    document.getElementById("comparisonCount").textContent = "0";
    document.getElementById("searchResult").textContent = "--";
    document.getElementById("progressBar").value = 0;
    document.getElementById("progressText").textContent = "0%";
    status.textContent = "Starting Linear Search...";
    await sleep(animationSpeed);
    for (let i = 0; i < bars.length; i++) {
        bars[i].classList.add("active");
        document.getElementById("currentIndex").textContent = i;
        searchComparisons++;
        document.getElementById("comparisonCount").textContent = searchComparisons;
        status.textContent =
            "Checking " + bars[i].textContent;
        let progress =
            Math.round(((i + 1) / bars.length) * 100);
        document.getElementById("progressBar").value = progress;
        document.getElementById("progressText").textContent = progress + "%";
        await sleep(animationSpeed);
        let value =
            parseInt(bars[i].textContent);
        if (value === target) {
            bars[i].classList.remove("active");
            bars[i].classList.add("found");
            status.textContent = "Target Found!";
            document.getElementById("searchResult").textContent = "Found at Index " + i;
            document.getElementById("progressBar").value = 100;
            document.getElementById("progressText").textContent = "100%";
            return;
        }
        bars[i].classList.remove("active");
        bars[i].classList.add("notfound");
    }
    status.textContent = "Target Not Found";
    document.getElementById("searchResult").textContent = "Not Found";
}

async function binarySearch() {
    const container = document.getElementById("barContainer");
    const status = document.getElementById("status");
    const target = parseInt(document.getElementById("targetInput").value);

    let numbers = [];
    document.querySelectorAll(".bar").forEach(function (bar) {
        numbers.push(parseInt(bar.textContent));
    });
    numbers.sort(function (a, b) {
        return a - b;
    });
    container.innerHTML = "";
    const maxValue = Math.max(...numbers);
    const maxHeight = 300;
    numbers.forEach(function (number) {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height =
            (number / maxValue) * maxHeight + "px";
        bar.textContent = number;
        container.appendChild(bar);
    });

    const bars = document.querySelectorAll(".bar");
    searchComparisons = 0;
    document.getElementById("algorithmName").textContent = "Binary Search";
    document.getElementById("comparisonCount").textContent = 0;
    document.getElementById("currentIndex").textContent = 0;
    document.getElementById("searchResult").textContent = "--";
    document.getElementById("progressBar").value = 0;
    document.getElementById("progressText").textContent = "0%";
    let left = 0;
    let right = bars.length - 1;
    while (left <= right) {
        bars.forEach(function (bar) {
            bar.classList.remove("mid");
            bar.classList.remove("range");
        });
        for (let i = left; i <= right; i++) {
            bars[i].classList.add("range");
        }
        let mid = Math.floor((left + right) / 2);
        bars[mid].classList.add("mid");
        document.getElementById("currentIndex").textContent = mid;
        searchComparisons++;
        document.getElementById("comparisonCount").textContent = searchComparisons;
        status.textContent = "Checking Middle Element : " + bars[mid].textContent;
        let progress = Math.round((searchComparisons / numbers.length) * 100);
        document.getElementById("progressBar").value = progress;
        document.getElementById("progressText").textContent = progress + "%";
        await sleep(animationSpeed);
        let value = parseInt(bars[mid].textContent);
        if (value === target) {
            bars[mid].classList.remove("mid");
            bars[mid].classList.remove("range");
            bars[mid].classList.add("found");
            status.textContent = "Target Found";
            document.getElementById("searchResult").textContent = "Found at Index " + mid;
            document.getElementById("progressBar").value = 100;
            document.getElementById("progressText").textContent = "100%";
            return;
        }
        if (value < target) {
            for (let i = left; i <= mid; i++) {
                bars[i].classList.remove("range");
                bars[i].classList.add("eliminated");
            }
            left = mid + 1;
        }
        else {
            for (let i = mid; i <= right; i++) {
                bars[i].classList.remove("range");
                bars[i].classList.add("eliminated");
            }
            right = mid - 1;
        }
    }
    status.textContent = "Target Not Found";
    document.getElementById("searchResult").textContent = "Not Found";
}
function updateDashboard() {
    document.getElementById("stackSize").textContent = stack.length;
    document.getElementById("topElement").textContent = stack.length > 0 ?
        stack[stack.length - 1] : "--";
    document.getElementById("stackProgress").value = stack.length;
    document.getElementById("stackProgressText").textContent = stack.length + " / " + STACK_LIMIT;
    if (stack.length === 0) {
        document.getElementById("stackStatus").textContent = "Stack Empty";
    }
}
function initializeStack() {
    addInputSuggestion(
        "stackInput",
        "10"
    );
    stackArea = document.getElementById("stackArea");
    document.getElementById("pushBtn")
        .addEventListener("click", pushElement);

    document.getElementById("popBtn")
        .addEventListener("click", popElement);

    document.getElementById("peekBtn")
        .addEventListener("click", peekElement);

    document.getElementById("clearBtn")
        .addEventListener("click", clearStack);
    updateDashboard();
}
function updateTopColor() {
    const boxes = document.querySelectorAll(".stack-box");
    boxes.forEach(function (box) {
        box.classList.remove("top");
    });
    if (boxes.length > 0) {
        boxes[0].classList.add("top");
    }
}

function createStackBox(value) {
    const box = document.createElement("div");
    box.className = "stack-box";
    box.textContent = value;
    return box;
}

function pushElement() {
    if (isAnimating) return;
    isAnimating = true;
    const input = document.getElementById("stackInput");
    const value = input.value.trim();
    if (value === "") {
        isAnimating = false;
        document.getElementById("stackStatus").textContent = "Enter a value";
        return;
    }

    if (stack.length >= STACK_LIMIT) {
        isAnimating = false;
        document.getElementById("stackStatus").textContent = "Stack Overflow";
        return;
    }

    const box = createStackBox(value);
    box.classList.add("push");
    stackArea.prepend(box);
    stack.push(value);
    updateDashboard();
    updateTopColor();
    document.getElementById("stackOperation").textContent = "Push";
    document.getElementById("stackStatus").textContent = value + " inserted";
    input.value = "";
    box.addEventListener("animationend", function () {
        isAnimating = false;
    }, { once: true });

}

function popElement() {
    if (isAnimating) return;
    isAnimating = true;
    if (stack.length === 0) {
        isAnimating = false;
        document.getElementById("stackOperation").textContent = "Pop";
        document.getElementById("stackStatus").textContent = "Stack Underflow";
        return;
    }
    const topBox = stackArea.firstElementChild;
    topBox.classList.add("pop");
    topBox.addEventListener("animationend", function () {
        const removed = stack.pop();
        topBox.remove();
        updateDashboard();
        updateTopColor();
        document.getElementById("stackOperation").textContent = "Pop";
        document.getElementById("stackStatus").textContent =
            removed + " removed";
        isAnimating = false;
    }, { once: true });
}

function peekElement() {
    if (isAnimating) return;
    if (stack.length === 0) {
        document.getElementById("stackOperation").textContent = "Peek";
        document.getElementById("stackStatus").textContent = "Stack Empty";
        return;
    }
    const topBox = stackArea.firstElementChild;
    topBox.classList.add("peek");
    setTimeout(function () {
        topBox.classList.remove("peek");
    }, 600);
    document.getElementById("stackOperation").textContent = "Peek";
    document.getElementById("stackStatus").textContent = "Top Element : " + stack[stack.length - 1];
}

async function clearStack() {
    if (isAnimating) return;
    if (stack.length === 0) {
        document.getElementById("stackOperation").textContent = "Clear";
        document.getElementById("stackStatus").textContent = "Stack Already Empty";
        return;
    }
    isAnimating = true;
    document.getElementById("stackOperation").textContent = "Clear";
    document.getElementById("stackStatus").textContent = "Clearing Stack...";
    while (stack.length > 0) {
        const topBox = stackArea.firstElementChild;
        topBox.classList.add("pop");
        await new Promise(resolve => {
            topBox.addEventListener("animationend", function () {
                stack.pop();
                topBox.remove();
                updateDashboard();
                updateTopColor();
                resolve();
            }, { once: true });
        });
    }
    document.getElementById("stackStatus").textContent = "Stack Cleared";
    isAnimating = false;
}
function initializeQueue() {
    addInputSuggestion(
        "queueInput",
        "10"
    );
    queueArea = document.getElementById("queueArea");
    document.getElementById("enqueueBtn")
        .addEventListener("click", enqueueElement);
    document.getElementById("dequeueBtn")
        .addEventListener("click", dequeueElement);
    document.getElementById("frontBtn")
        .addEventListener("click", frontElement);
    document.getElementById("clearQueueBtn")
        .addEventListener("click", clearQueue);
    updateQueueDashboard();
}

function createQueueBox(value) {
    const box = document.createElement("div");
    box.className = "queue-box";
    box.textContent = value;
    return box;
}

function enqueueElement() {
    if (isQueueAnimating) return;
    isQueueAnimating = true;
    const input = document.getElementById("queueInput");
    const value = input.value.trim();
    if (value === "") {
        isQueueAnimating = false;
        document.getElementById("queueStatus").textContent = "Enter a value";
        return;
    }
    if (queue.length >= QUEUE_LIMIT) {
        isQueueAnimating = false;
        document.getElementById("queueStatus").textContent = "Queue Overflow";
        return;
    }

    const box = createQueueBox(value);
    box.classList.add("enqueue");
    queueArea.appendChild(box);
    queue.push(value);
    updateQueueDashboard();
    updateFrontColor();
    document.getElementById("queueOperation").textContent = "Enqueue";
    document.getElementById("queueStatus").textContent = value + " inserted";
    input.value = "";
    box.addEventListener("animationend", function () {
        isQueueAnimating = false;
    }, { once: true });
}

function dequeueElement() {
    if (isQueueAnimating) return;
    if (queue.length === 0) {
        document.getElementById("queueOperation").textContent = "Dequeue";
        document.getElementById("queueStatus").textContent = "Queue Underflow";
        return;
    }
    isQueueAnimating = true;
    const firstBox = queueArea.firstElementChild;
    firstBox.classList.add("dequeue");
    firstBox.addEventListener("animationend", function () {
        const removed = queue.shift();
        firstBox.remove();
        updateQueueDashboard();
        updateFrontColor();
        document.getElementById("queueOperation").textContent = "Dequeue";
        document.getElementById("queueStatus").textContent = removed + " removed";
        isQueueAnimating = false;
    }, { once: true });
}

function frontElement() {
    if (queue.length === 0) {
        document.getElementById("queueOperation").textContent = "Front";
        document.getElementById("queueStatus").textContent = "Queue Empty";
        return;
    }
    const firstBox = queueArea.firstElementChild;
    firstBox.classList.remove("front");
    firstBox.classList.add("peek");
    document.getElementById("queueOperation").textContent = "Front";
    document.getElementById("queueStatus").textContent = "Front Element : " + queue[0];
    setTimeout(function () {
        firstBox.classList.remove("peek");
        firstBox.classList.add("front");
    }, 1000);
}

async function clearQueue() {
    if (isQueueAnimating) return;
    isQueueAnimating = true;
    queue = [];
    queueArea.innerHTML = "";
    updateQueueDashboard();
    updateFrontColor();
    document.getElementById("queueOperation").textContent = "Clear";
    document.getElementById("queueStatus").textContent = "Queue Cleared";
    isQueueAnimating = false;
}

function updateFrontColor() {
    const boxes = document.querySelectorAll(".queue-box");
    boxes.forEach(function (box) {
        box.classList.remove("front");
    });

    if (boxes.length > 0) {
        boxes[0].classList.add("front");
    }
}

function updateQueueDashboard() {
    document.getElementById("queueSize").textContent = queue.length;
    document.getElementById("frontElement").textContent = queue.length > 0 ?
        queue[0] : "--";
    document.getElementById("rearElement").textContent = queue.length > 0 ?
        queue[queue.length - 1] : "--";
    document.getElementById("queueProgress").value = queue.length;
    document.getElementById("queueProgressText").textContent = queue.length + " / " + QUEUE_LIMIT;
    if (queue.length === 0) {
        document.getElementById("queueStatus").textContent = "Queue Empty";
    }
}

function initializeLinkedList() {
    addInputSuggestion(
        "listInput",
        "10"
    );
    linkedListArea = document.getElementById("linkedListArea");
    document.getElementById("insertFirstBtn")
        .addEventListener("click", insertFirst);
    document.getElementById("insertLastBtn")
        .addEventListener("click", insertLast);
    document.getElementById("deleteBtn")
        .addEventListener("click", deleteNode);
    document.getElementById("searchBtn")
        .addEventListener("click", searchNode);
    document.getElementById("clearListBtn")
        .addEventListener("click", clearList);
    updateLinkedListDashboard();
}

function updateLinkedListDashboard() {
    document.getElementById("listSize").textContent = linkedList.length;
    document.getElementById("headNode").textContent = linkedList.length ? linkedList[0] : "NULL";
    document.getElementById("tailNode").textContent = linkedList.length ? linkedList[linkedList.length - 1] : "NULL";
    document.getElementById("listProgress").value = linkedList.length;
    document.getElementById("listProgress").value = linkedList.length;
    document.getElementById("listProgressText").textContent = linkedList.length + " / " + LIST_LIMIT + " Nodes";
}

function createNode(value) {
    const node = document.createElement("div");
    node.className = "list-node";
    node.innerHTML = `
        <div class="node-value">${value}</div>
        <div class="node-next">→</div>
    `;
    return node;
}

function insertFirst() {
    if (isListAnimating) return;
    const input = document.getElementById("listInput");
    const value = input.value.trim();
    if (value === "") {
        document.getElementById("listStatus").textContent = "Enter a value";
        return;
    }
    if (linkedList.length >= LIST_LIMIT) {
        document.getElementById("listStatus").textContent = "Linked List Full";
        return;
    }
    isListAnimating = true;
    linkedList.unshift(value);
    const nullText = linkedListArea.querySelector(".null-text");
    if (nullText) {
        nullText.remove();
    }

    const node = createNode(value);
    node.classList.add("insert");
    linkedListArea.prepend(node);
    updateArrows();
    updateLinkedListDashboard();
    document.getElementById("listOperation").textContent = "Insert First";
    document.getElementById("listStatus").textContent = value + " inserted at beginning";
    input.value = "";
    setTimeout(function () {
        node.classList.remove("insert");
        isListAnimating = false;
    }, 600);
}

function insertLast() {
    if (isListAnimating) return;
    const input = document.getElementById("listInput");
    const value = input.value.trim();
    if (value === "") {
        document.getElementById("listStatus").textContent = "Enter a value";
        return;
    }
    if (linkedList.length >= LIST_LIMIT) {
        document.getElementById("listStatus").textContent = "Linked List Full";
        return;
    }
    isListAnimating = true;
    linkedList.push(value);
    const nullText = linkedListArea.querySelector(".null-text");

    if (nullText) {
        nullText.remove();
    }

    const node = createNode(value);
    node.classList.add("insert");
    linkedListArea.appendChild(node);
    updateArrows();
    updateLinkedListDashboard();
    document.getElementById("listOperation").textContent = "Insert Last";
    document.getElementById("listStatus").textContent = value + " inserted at end";
    input.value = "";
    setTimeout(function () {
        node.classList.remove("insert");
        isListAnimating = false;
    }, 600);
}

async function deleteNode() {
    if (isListAnimating) return;
    const input = document.getElementById("listInput");
    const value = input.value.trim();
    if (value === "") {
        document.getElementById("listStatus").textContent = "Enter a value";
        return;
    }
    const index = linkedList.indexOf(value);
    if (index === -1) {
        document.getElementById("listOperation").textContent = "Delete";
        document.getElementById("listStatus").textContent = "Value not found";
        return;
    }
    isListAnimating = true;
    const nodes = linkedListArea.querySelectorAll(".list-node");
    nodes[index].classList.add("delete");
    await new Promise(resolve => {
        nodes[index].addEventListener("animationend", resolve, { once: true });
    });
    linkedList.splice(index, 1);
    nodes[index].remove();
    updateArrows();
    updateLinkedListDashboard();
    document.getElementById("listOperation").textContent = "Delete";
    document.getElementById("listStatus").textContent = value + " deleted";
    input.value = "";
    isListAnimating = false;
}

async function searchNode() {
    if (isListAnimating) return;
    const input = document.getElementById("listInput");
    const value = input.value.trim();
    if (value === "") {
        document.getElementById("listStatus").textContent = "Enter a value";
        return;
    }
    isListAnimating = true;
    document.getElementById("listOperation").textContent = "Search";
    const nodes = linkedListArea.querySelectorAll(".list-node");
    let found = false;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.add("search");
        await new Promise(resolve => setTimeout(resolve, 500));
        if (linkedList[i] == value) {
            nodes[i].classList.remove("search");
            nodes[i].classList.add("found");
            document.getElementById("listStatus").textContent =
                value + " Found at position " + i;
            found = true;
            break;
        }
        nodes[i].classList.remove("search");
    }
    if (!found) {
        document.getElementById("listStatus").textContent =
            value + " Not Found";
    }
    input.value = "";
    isListAnimating = false;
}

async function clearList() {
    if (isListAnimating) return;
    if (linkedList.length === 0) {
        document.getElementById("listOperation").textContent = "Clear";
        document.getElementById("listStatus").textContent = "Linked List Already Empty";
        return;
    }
    isListAnimating = true;
    document.getElementById("listOperation").textContent = "Clear";
    document.getElementById("listStatus").textContent = "Clearing Linked List...";
    const nodes = Array.from(linkedListArea.querySelectorAll(".list-node"));
    for (const node of nodes) {
        node.classList.add("delete");
        await new Promise(resolve => {
            node.addEventListener("animationend", resolve, { once: true });
        });
        node.remove();
    }
    linkedList = [];
    linkedListArea.innerHTML = '<span class="null-text">NULL</span>';
    updateLinkedListDashboard();
    updateArrows();
    document.getElementById("listStatus").textContent = "Linked List Cleared";
    isListAnimating = false;
}
function updateArrows() {
    const arrows =
        linkedListArea.querySelectorAll(".node-next");
    arrows.forEach(function (arrow) {
        arrow.textContent = "→";
    });
    if (arrows.length > 0) {
        arrows[arrows.length - 1].textContent = "NULL";
    }
}

function initializeQuiz() {

    const startQuizBtn =
        document.getElementById("startQuizBtn");

    const topicSelect =
        document.getElementById("quizTopic");

    const difficultySelect =
        document.getElementById("quizDifficulty");

    const countSelect =
        document.getElementById("quizCount");


    startQuizBtn.addEventListener(
        "click",
        startQuiz
    );


    topicSelect.addEventListener(
        "change",
        updateQuizSelection
    );


    difficultySelect.addEventListener(
        "change",
        updateQuizSelection
    );


    countSelect.addEventListener(
        "change",
        updateQuizSelection
    );


    updateQuizSelection();
}

function updateQuizSelection() {

    const topic =
        document.getElementById("quizTopic").value;

    const difficulty =
        document.getElementById("quizDifficulty").value;

    const count =
        document.getElementById("quizCount").value;


    document.getElementById(
        "selectedTopicText"
    ).textContent = topic;


    document.getElementById(
        "selectedDifficultyText"
    ).textContent = difficulty;


    document.getElementById(
        "selectedCountText"
    ).textContent = count;


    document.getElementById(
        "quizDifficultyDisplay"
    ).textContent = difficulty;
}



async function startQuiz() {

    const quizArea =
        document.getElementById("quizArea");

    const startQuizBtn =
        document.getElementById("startQuizBtn");


    const topic =
        document.getElementById("quizTopic").value;

    const difficulty =
        document.getElementById("quizDifficulty").value;

    const count =
        parseInt(
            document.getElementById("quizCount").value
        );


    startQuizBtn.disabled = true;


    document.getElementById(
        "quizStartSection"
    ).style.display = "none";


    showQuizLoading(
        topic,
        difficulty,
        count
    );


    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/quiz",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    topic: topic,

                    difficulty: difficulty,

                    count: count

                })
            }
        );


        const data =
            await response.json();

        if (window.quizLoadingTimer) {

            clearInterval(
                window.quizLoadingTimer
            );

            window.quizLoadingTimer =
                null;
        }


        if (!response.ok) {

            throw new Error(
                data.details ||
                data.error ||
                "Quiz generation failed."
            );

        }


        if (
            !data.questions ||
            !Array.isArray(data.questions)
        ) {

            throw new Error(
                "Invalid quiz data received."
            );

        }


        if (data.questions.length === 0) {

            throw new Error(
                "No questions were generated."
            );

        }


        quizQuestions =
            data.questions;


        quizCurrentIndex =
            0;


        quizScore =
            0;


        quizAnswers =
            [];


        document.getElementById(
            "quizQuestionCount"
        ).textContent =
            `Question 1 / ${quizQuestions.length}`;


        document.getElementById(
            "quizDifficultyDisplay"
        ).textContent =
            difficulty;


        showQuizQuestion();


    }
    catch (error) {

        console.error(
            "Quiz Error:",
            error
        );


        document.getElementById(
            "quizStartSection"
        ).style.display = "block";


        startQuizBtn.disabled = false;


        quizArea.innerHTML = `

            <div class="quiz-error">

                <h2>
                    Unable to Generate Quiz
                </h2>

                <p>
                    ${error.message}
                </p>

                <button
                    class="primary-btn"
                    onclick="startQuiz()">

                    Try Again

                </button>

            </div>

        `;
    }

}

function showQuizLoading(
    topic,
    difficulty,
    count
) {

    const quizArea =
        document.getElementById("quizArea");


    let remainingTime = 20;

    let progress = 0;


    quizArea.innerHTML = `

        <div class="quiz-loading">

            <div class="quiz-loading-icon">
                🤖
            </div>

            <h2>
                Generating Your Quiz...
            </h2>

            <p>
                Creating ${count}
                ${difficulty.toLowerCase()}
                questions about
                <strong>${topic}</strong>.
            </p>


            <div class="quiz-progress">

                <div
                    id="quizProgressBar"
                    class="quiz-progress-bar">
                </div>

            </div>


            <div class="quiz-time">

                Estimated time remaining:

                <strong id="quizTimeRemaining">
                    ~20 sec
                </strong>

            </div>


            <p
                id="quizLoadingStatus"
                class="quiz-loading-status">

                Preparing questions with AI...

            </p>

        </div>

    `;


    const timer =
        setInterval(function () {

            remainingTime--;

            progress += 5;


            if (progress > 95) {
                progress = 95;
            }


            const timeElement =
                document.getElementById(
                    "quizTimeRemaining"
                );


            const progressBar =
                document.getElementById(
                    "quizProgressBar"
                );


            const statusElement =
                document.getElementById(
                    "quizLoadingStatus"
                );


            if (timeElement) {

                if (remainingTime > 0) {

                    timeElement.textContent =
                        `~${remainingTime} sec`;

                }
                else {

                    timeElement.textContent =
                        "Almost ready...";

                }

            }


            if (progressBar) {

                progressBar.style.width =
                    progress + "%";

            }


            if (statusElement) {

                if (remainingTime <= 15 &&
                    remainingTime > 8) {

                    statusElement.textContent =
                        "AI is generating your questions...";

                }
                else if (remainingTime <= 8 &&
                    remainingTime > 0) {

                    statusElement.textContent =
                        "Almost ready...";

                }
                else if (remainingTime <= 0) {

                    statusElement.textContent =
                        "Still generating, please wait...";

                }

            }


        }, 1000);


    window.quizLoadingTimer =
        timer;
}


function showQuizQuestion() {

    const quizArea =
        document.getElementById("quizArea");

    const questionCount =
        document.getElementById("quizQuestionCount");

    if (quizCurrentIndex >= quizQuestions.length) {

        submitQuiz();

        return;
    }

    const question =
        quizQuestions[quizCurrentIndex];

    questionCount.textContent =
        `Question ${quizCurrentIndex + 1} / ${quizQuestions.length}`;

    quizArea.innerHTML = `

        <div class="quiz-layout">

            <div class="quiz-main">

                <div class="quiz-question-card">

                    <div class="quiz-question-number">
                        Question ${quizCurrentIndex + 1}
                    </div>

                    <h2>
                        ${question.question}
                    </h2>

                </div>

<div class="quiz-options">

    ${question.options.map(function (option, index) {

        return `
            <button
                class="quiz-option ${quizAnswers[quizCurrentIndex] === index ? "selected" : ""}"
                onclick="checkQuizAnswer(${index})">

                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span>
                    ${option}
                </span>

            </button>
        `;

    }).join("")}

</div>

                <div class="quiz-navigation">

                    <button
                        class="quiz-nav-btn"
                        onclick="previousQuizQuestion()"
                        ${quizCurrentIndex === 0 ? "disabled" : ""}>
                        Previous
                    </button>

                    <button
                        class="quiz-nav-btn"
                        onclick="nextQuizQuestion()">
                        ${quizCurrentIndex === quizQuestions.length - 1
            ? "Finish"
            : "Next"}
                    </button>

                    <button
                        class="quiz-submit-btn"
                        onclick="submitQuiz()">
                        Submit Quiz
                    </button>

                </div>

            </div>

            <div class="quiz-sidebar">

                <h3>Questions</h3>

                <div class="quiz-question-numbers">

                    ${quizQuestions.map(function (_, index) {

                return `
                            <button
                                class="question-number
                                ${index === quizCurrentIndex ? "current" : ""}"
                                onclick="goToQuizQuestion(${index})">

                                ${index + 1}

                            </button>
                        `;

            }).join("")}

                </div>

                <div class="quiz-legend">

                    <span>
                        <i class="legend-current"></i>
                        Current
                    </span>

                    <span>
                        <i class="legend-normal"></i>
                        Unvisited
                    </span>

                </div>

            </div>

        </div>
    `;
    updateQuizNavigator();
}

function checkQuizAnswer(selectedIndex) {

    const question = quizQuestions[quizCurrentIndex];

    const buttons = document.querySelectorAll(".quiz-option");

    // Prevent changing answer after selecting
    buttons.forEach(function (button) {
        button.disabled = true;
    });

    // Get selected answer text
    const selectedAnswer =
        question.options[selectedIndex];

    // Check answer
    if (selectedAnswer === question.answer) {

        buttons[selectedIndex].classList.add("correct");

        quizScore++;

    } else {

        buttons[selectedIndex].classList.add("wrong");

        // Show correct answer
        buttons.forEach(function (button, index) {

            if (question.options[index] === question.answer) {
                button.classList.add("correct");
            }

        });
    }

    // Save selected answer
    quizAnswers[quizCurrentIndex] = selectedIndex;

    // Move to next question
    setTimeout(function () {

        quizCurrentIndex++;

        showQuizQuestion();

    }, 900);
}
function updateQuizNavigator() {

    const buttons =
        document.querySelectorAll(".question-number");

    buttons.forEach(function (button, index) {

        button.classList.remove(
            "current",
            "answered"
        );

        if (index === quizCurrentIndex) {

            button.classList.add("current");

        }
        else if (
            quizAnswers[index] !== undefined
        ) {

            button.classList.add("answered");

        }

    });
}

function nextQuizQuestion() {

    if (quizCurrentIndex <
        quizQuestions.length - 1) {

        quizCurrentIndex++;

        showQuizQuestion();

    }
    else {

        submitQuiz();

    }
}

function previousQuizQuestion() {

    if (quizCurrentIndex > 0) {

        quizCurrentIndex--;

        showQuizQuestion();

    }
}

function goToQuizQuestion(index) {

    quizCurrentIndex = index;

    showQuizQuestion();
}

function submitQuiz() {

    const quizArea =
        document.getElementById("quizArea");

    quizArea.innerHTML = `

        <div class="quiz-result">

            <h2>Quiz Completed 🎉</h2>

            <p class="quiz-score">
                Your Score:
                ${quizScore} / ${quizQuestions.length}
            </p>

            <button
                class="primary-btn"
                onclick="restartQuiz()">
                Try Again
            </button>

        </div>

    `;

    document
        .getElementById("quizQuestionCount")
        .textContent = "Quiz Completed";
}

function restartQuiz() {

    const quizStartSection =
        document.getElementById("quizStartSection");

    const quizArea =
        document.getElementById("quizArea");

    const startQuizBtn =
        document.getElementById("startQuizBtn");

    quizStartSection.style.display = "block";
    quizArea.innerHTML = "";

    startQuizBtn.disabled = false;

    document.getElementById("quizQuestionCount").textContent =
        "Quiz Setup";
}



function initializeSettings() {
    const currentTheme = localStorage.getItem("theme") || "light";
    document.querySelector(
        `input[name="theme"][value="${currentTheme}"]`
    ).checked = true;
    document.querySelectorAll('input[name="theme"]').forEach(radio => {
        radio.addEventListener("change", function () {
            const isDark = document.body.classList.contains("dark");
            if (this.value === "dark" && !isDark) {
                document.getElementById("themeToggle").click();
            }
            else if (this.value === "light" && isDark) {
                document.getElementById("themeToggle").click();
            }
        });
    });
    document.getElementById("animationToggle")
        .addEventListener("change", function () {
            if (this.checked) {
                document.documentElement.style.setProperty(
                    "--pageAnimation",
                    ".5s"
                );
            } else {
                document.documentElement.style.setProperty(
                    "--pageAnimation",
                    "0s"
                );
            }
        });
    document.querySelectorAll("input[name='speed']").forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.value === "slow") {
                animationSpeed = 1200;
            }
            else if (this.value === "normal") {
                animationSpeed = 700;
            }
            else {
                animationSpeed = 300;
            }
        });
    });
}

function loadComparisonTable(type) {
    const table = document.getElementById("comparisonTable");
    if (!table) return;
    if (type === "sorting") {
        table.innerHTML = `
        <table>
            <tr>
                <th>Algorithm</th>
                <th>Best</th>
                <th>Average</th>
                <th>Worst</th>
                <th>Stable</th>
                <th>In-place</th>
            </tr>
            <tr>
                <td>Bubble Sort</td>
                <td>O(n)</td>
                <td>O(n²)</td>
                <td>O(n²)</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Selection Sort</td>
                <td>O(n²)</td>
                <td>O(n²)</td>
                <td>O(n²)</td>
                <td>No</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Insertion Sort</td>
                <td>O(n)</td>
                <td>O(n²)</td>
                <td>O(n²)</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Merge Sort</td>
                <td>O(n log n)</td>
                <td>O(n log n)</td>
                <td>O(n log n)</td>
                <td>Yes</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Quick Sort</td>
                <td>O(n log n)</td>
                <td>O(n log n)</td>
                <td>O(n²)</td>
                <td>No</td>
                <td>Yes</td>
            </tr>
        </table>
        `;
    }
    else if (type === "searching") {
        table.innerHTML = `
        <table>
            <tr>
                <th>Algorithm</th>
                <th>Best</th>
                <th>Average</th>
                <th>Worst</th>
                <th>Requirement</th>
            </tr>
            <tr>
                <td>Linear Search</td>
                <td>O(1)</td>
                <td>O(n)</td>
                <td>O(n)</td>
                <td>Works on any array</td>
            </tr>
            <tr>
                <td>Binary Search</td>
                <td>O(1)</td>
                <td>O(log n)</td>
                <td>O(log n)</td>
                <td>Array must be sorted</td>
            </tr>
        </table>
        `;
    }
    else if (type === "stackqueue") {
        table.innerHTML = `
        <table>
            <tr>
                <th>Feature</th>
                <th>Stack</th>
                <th>Queue</th>
            </tr>
            <tr>
                <td>Principle</td>
                <td>LIFO</td>
                <td>FIFO</td>
            </tr>
            <tr>
                <td>Insertion</td>
                <td>Push</td>
                <td>Enqueue</td>
            </tr>
            <tr>
                <td>Deletion</td>
                <td>Pop</td>
                <td>Dequeue</td>
            </tr>
            <tr>
                <td>Applications</td>
                <td>Undo, Browser History</td>
                <td>CPU Scheduling, Printer Queue</td>
            </tr>
        </table>
        `;
    }
    else if (type === "arraylinkedlist") {
        table.innerHTML = `
        <table>
            <tr>
                <th>Feature</th>
                <th>Array</th>
                <th>Linked List</th>
            </tr>
            <tr>
                <td>Memory</td>
                <td>Continuous</td>
                <td>Non-continuous</td>
            </tr>
            <tr>
                <td>Insertion</td>
                <td>Slow</td>
                <td>Fast</td>
            </tr>
            <tr>
                <td>Deletion</td>
                <td>Slow</td>
                <td>Fast</td>
            </tr>
            <tr>
                <td>Random Access</td>
                <td>Fast</td>
                <td>Slow</td>
            </tr>
        </table>
        `;
    }
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(i => {
            i.classList.remove("active");
        });
        item.classList.add("active");
        const page = item.dataset.page;
        loadPage(page);
        sidebar.classList.remove("show");
    });
});

loadPage("dashboard");


document.addEventListener("input", function(event) {

    if (event.target.id === "leetcodeSearch") {
        filterLeetCodeProblems();
    }

});

document.addEventListener("change", function(event) {

    if (event.target.id === "leetcodeCategory") {
        filterLeetCodeProblems();
    }

});