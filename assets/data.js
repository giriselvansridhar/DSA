// DSA Lab data. Claude updates this file each day: log rows (newest first), done flags, players.
window.DSA = {
 "updated": "2026-11-23",
 "baseline": {
  "date": "2026-11-22",
  "total": 72
 },
 "plan": {
  "start": "2026-11-23",
  "newPerDay": 2,
  "daysPerWeek": 6,
  "ncTarget": "2027-03-14"
 },
 "checkpoints": [
  {
   "date": "2027-01-17",
   "total": 170,
   "rating": "First rating",
   "proof": "NeetCode 150 core topics done"
  },
  {
   "date": "2027-03-14",
   "total": 265,
   "rating": "1500+",
   "proof": "All of NeetCode 150 done"
  },
  {
   "date": "2027-05-01",
   "total": 350,
   "rating": "1600+",
   "proof": "2 unseen mediums in 60 min, most days"
  }
 ],
 "weeks": [
  [
   "W1",
   "2026-11-23",
   "2026-11-28",
   "Arrays & Hashing, Two Pointers"
  ],
  [
   "W2",
   "2026-11-30",
   "2026-12-05",
   "Sliding Window, Stack"
  ],
  [
   "W3",
   "2026-12-07",
   "2026-12-12",
   "Binary Search"
  ],
  [
   "W4",
   "2026-12-14",
   "2026-12-19",
   "Linked List"
  ],
  [
   "W5",
   "2026-12-21",
   "2026-12-26",
   "Trees (traversals, BST)"
  ],
  [
   "W6",
   "2026-12-28",
   "2027-01-02",
   "Trees (harder), Tries"
  ],
  [
   "W7",
   "2027-01-04",
   "2027-01-09",
   "Heap, Backtracking"
  ],
  [
   "W8",
   "2027-01-11",
   "2027-01-16",
   "Backtracking + redo failed"
  ],
  [
   "W9",
   "2027-01-18",
   "2027-01-23",
   "Graphs: BFS, DFS, topo sort"
  ],
  [
   "W10",
   "2027-01-25",
   "2027-01-30",
   "Dijkstra, Union-Find"
  ],
  [
   "W11",
   "2027-02-01",
   "2027-02-06",
   "1-D DP"
  ],
  [
   "W12",
   "2027-02-08",
   "2027-02-13",
   "1-D DP (finish)"
  ],
  [
   "W13",
   "2027-02-15",
   "2027-02-20",
   "2-D DP"
  ],
  [
   "W14",
   "2027-02-22",
   "2027-02-27",
   "2-D DP (finish)"
  ],
  [
   "W15",
   "2027-03-01",
   "2027-03-06",
   "Greedy, Intervals"
  ],
  [
   "W16",
   "2027-03-08",
   "2027-03-13",
   "Math, Bit Manipulation"
  ],
  [
   "W17–18",
   "2027-03-15",
   "2027-03-27",
   "Random mediums"
  ],
  [
   "W19–20",
   "2027-03-29",
   "2027-04-10",
   "Timed: 2 mediums in 60 min"
  ],
  [
   "W21–22",
   "2027-04-12",
   "2027-04-24",
   "Mock tests + interviews"
  ],
  [
   "W23",
   "2027-04-26",
   "2027-05-01",
   "Light revision"
  ]
 ],
 "log": [
  {
   "date": "2026-11-23",
   "type": "Redo",
   "name": "Group Anagrams",
   "topic": "Arrays & Hashing",
   "status": "Solved alone"
  },
  {
   "date": "2026-11-23",
   "type": "New",
   "name": "Encode and Decode Strings",
   "topic": "Arrays & Hashing",
   "status": "To do"
  },
  {
   "date": "2026-11-23",
   "type": "New",
   "name": "Product of Array Except Self",
   "topic": "Arrays & Hashing",
   "status": "To do"
  },
  {
   "date": "2026-11-22",
   "type": "Redo",
   "name": "Top K Frequent Elements",
   "topic": "Arrays & Hashing",
   "status": "Needed help"
  },
  {
   "date": "2026-11-22",
   "type": "Redo",
   "name": "Maximum Subarray",
   "topic": "Greedy",
   "status": "Needed help"
  },
  {
   "date": "2026-11-22",
   "type": "New",
   "name": "Valid Sudoku",
   "topic": "Arrays & Hashing",
   "status": "Needed help"
  }
 ],
 "players": [
  {
   "file": "group-anagrams.html",
   "name": "Group Anagrams",
   "num": 49,
   "diff": "Medium",
   "topic": "Arrays & Hashing",
   "date": "2026-11-23",
   "status": "Solved alone",
   "idea": "Sorted word as the dict key, so anagrams land in one group.",
   "py": "group_anagrams.py",
   "url": "https://leetcode.com/problems/group-anagrams/"
  },
  {
   "file": "valid-sudoku.html",
   "name": "Valid Sudoku",
   "num": 36,
   "diff": "Medium",
   "topic": "Arrays & Hashing",
   "date": "2026-11-22",
   "status": "Needed help",
   "idea": "Three rules, a fresh set for each row, column and 3×3 box.",
   "py": "valid_sudoku.py",
   "url": "https://leetcode.com/problems/valid-sudoku/"
  },
  {
   "file": "top-k-frequent.html",
   "name": "Top K Frequent Elements",
   "num": 347,
   "diff": "Medium",
   "topic": "Arrays & Hashing",
   "date": "2026-11-22",
   "status": "Needed help",
   "idea": "Count with a dict, make [tally, num] pairs, sort, take k.",
   "py": "top_k_frequent_elements.py",
   "url": "https://leetcode.com/problems/top-k-frequent-elements/"
  },
  {
   "file": "maximum-subarray.html",
   "name": "Maximum Subarray",
   "num": 53,
   "diff": "Medium",
   "topic": "Greedy",
   "date": "2026-11-22",
   "status": "Needed help",
   "idea": "Kadane: save best first, then drop a negative running sum.",
   "py": "maximum_subarray.py",
   "url": "https://leetcode.com/problems/maximum-subarray/"
  }
 ],
 "problems": [
  [
   1,
   "Contains Duplicate",
   "https://leetcode.com/problems/contains-duplicate/",
   "Arrays & Hashing",
   true
  ],
  [
   2,
   "Valid Anagram",
   "https://leetcode.com/problems/valid-anagram/",
   "Arrays & Hashing",
   true
  ],
  [
   3,
   "Two Sum",
   "https://leetcode.com/problems/two-sum/",
   "Arrays & Hashing",
   true
  ],
  [
   4,
   "Group Anagrams",
   "https://leetcode.com/problems/group-anagrams/",
   "Arrays & Hashing",
   true
  ],
  [
   5,
   "Top K Frequent Elements",
   "https://leetcode.com/problems/top-k-frequent-elements/",
   "Arrays & Hashing",
   true
  ],
  [
   6,
   "Encode and Decode Strings",
   "https://neetcode.io/problems/string-encode-and-decode",
   "Arrays & Hashing",
   false
  ],
  [
   7,
   "Product of Array Except Self",
   "https://leetcode.com/problems/product-of-array-except-self/",
   "Arrays & Hashing",
   false
  ],
  [
   8,
   "Valid Sudoku",
   "https://leetcode.com/problems/valid-sudoku/",
   "Arrays & Hashing",
   true
  ],
  [
   9,
   "Longest Consecutive Sequence",
   "https://leetcode.com/problems/longest-consecutive-sequence/",
   "Arrays & Hashing",
   false
  ],
  [
   10,
   "Valid Palindrome",
   "https://leetcode.com/problems/valid-palindrome/",
   "Two Pointers",
   false
  ],
  [
   11,
   "Two Sum II",
   "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
   "Two Pointers",
   false
  ],
  [
   12,
   "3Sum",
   "https://leetcode.com/problems/3sum/",
   "Two Pointers",
   false
  ],
  [
   13,
   "Container With Most Water",
   "https://leetcode.com/problems/container-with-most-water/",
   "Two Pointers",
   false
  ],
  [
   14,
   "Trapping Rain Water",
   "https://leetcode.com/problems/trapping-rain-water/",
   "Two Pointers",
   false
  ],
  [
   15,
   "Best Time to Buy and Sell Stock",
   "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
   "Sliding Window",
   true
  ],
  [
   16,
   "Longest Substring Without Repeating Characters",
   "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
   "Sliding Window",
   false
  ],
  [
   17,
   "Longest Repeating Character Replacement",
   "https://leetcode.com/problems/longest-repeating-character-replacement/",
   "Sliding Window",
   false
  ],
  [
   18,
   "Permutation in String",
   "https://leetcode.com/problems/permutation-in-string/",
   "Sliding Window",
   false
  ],
  [
   19,
   "Minimum Window Substring",
   "https://leetcode.com/problems/minimum-window-substring/",
   "Sliding Window",
   false
  ],
  [
   20,
   "Sliding Window Maximum",
   "https://leetcode.com/problems/sliding-window-maximum/",
   "Sliding Window",
   false
  ],
  [
   21,
   "Valid Parentheses",
   "https://leetcode.com/problems/valid-parentheses/",
   "Stack",
   true
  ],
  [
   22,
   "Min Stack",
   "https://leetcode.com/problems/min-stack/",
   "Stack",
   false
  ],
  [
   23,
   "Evaluate Reverse Polish Notation",
   "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
   "Stack",
   false
  ],
  [
   24,
   "Generate Parentheses",
   "https://leetcode.com/problems/generate-parentheses/",
   "Stack",
   false
  ],
  [
   25,
   "Daily Temperatures",
   "https://leetcode.com/problems/daily-temperatures/",
   "Stack",
   false
  ],
  [
   26,
   "Car Fleet",
   "https://leetcode.com/problems/car-fleet/",
   "Stack",
   false
  ],
  [
   27,
   "Largest Rectangle in Histogram",
   "https://leetcode.com/problems/largest-rectangle-in-histogram/",
   "Stack",
   false
  ],
  [
   28,
   "Binary Search",
   "https://leetcode.com/problems/binary-search/",
   "Binary Search",
   false
  ],
  [
   29,
   "Search a 2D Matrix",
   "https://leetcode.com/problems/search-a-2d-matrix/",
   "Binary Search",
   false
  ],
  [
   30,
   "Koko Eating Bananas",
   "https://leetcode.com/problems/koko-eating-bananas/",
   "Binary Search",
   false
  ],
  [
   31,
   "Find Minimum in Rotated Sorted Array",
   "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
   "Binary Search",
   false
  ],
  [
   32,
   "Search in Rotated Sorted Array",
   "https://leetcode.com/problems/search-in-rotated-sorted-array/",
   "Binary Search",
   false
  ],
  [
   33,
   "Time Based Key-Value Store",
   "https://leetcode.com/problems/time-based-key-value-store/",
   "Binary Search",
   false
  ],
  [
   34,
   "Median of Two Sorted Arrays",
   "https://leetcode.com/problems/median-of-two-sorted-arrays/",
   "Binary Search",
   false
  ],
  [
   35,
   "Reverse Linked List",
   "https://leetcode.com/problems/reverse-linked-list/",
   "Linked List",
   false
  ],
  [
   36,
   "Merge Two Sorted Lists",
   "https://leetcode.com/problems/merge-two-sorted-lists/",
   "Linked List",
   true
  ],
  [
   37,
   "Linked List Cycle",
   "https://leetcode.com/problems/linked-list-cycle/",
   "Linked List",
   true
  ],
  [
   38,
   "Reorder List",
   "https://leetcode.com/problems/reorder-list/",
   "Linked List",
   false
  ],
  [
   39,
   "Remove Nth Node From End of List",
   "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
   "Linked List",
   false
  ],
  [
   40,
   "Copy List with Random Pointer",
   "https://leetcode.com/problems/copy-list-with-random-pointer/",
   "Linked List",
   false
  ],
  [
   41,
   "Add Two Numbers",
   "https://leetcode.com/problems/add-two-numbers/",
   "Linked List",
   false
  ],
  [
   42,
   "Find the Duplicate Number",
   "https://leetcode.com/problems/find-the-duplicate-number/",
   "Linked List",
   false
  ],
  [
   43,
   "LRU Cache",
   "https://leetcode.com/problems/lru-cache/",
   "Linked List",
   false
  ],
  [
   44,
   "Merge k Sorted Lists",
   "https://leetcode.com/problems/merge-k-sorted-lists/",
   "Linked List",
   false
  ],
  [
   45,
   "Reverse Nodes in k-Group",
   "https://leetcode.com/problems/reverse-nodes-in-k-group/",
   "Linked List",
   false
  ],
  [
   46,
   "Invert Binary Tree",
   "https://leetcode.com/problems/invert-binary-tree/",
   "Trees",
   false
  ],
  [
   47,
   "Maximum Depth of Binary Tree",
   "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
   "Trees",
   false
  ],
  [
   48,
   "Diameter of Binary Tree",
   "https://leetcode.com/problems/diameter-of-binary-tree/",
   "Trees",
   false
  ],
  [
   49,
   "Balanced Binary Tree",
   "https://leetcode.com/problems/balanced-binary-tree/",
   "Trees",
   false
  ],
  [
   50,
   "Same Tree",
   "https://leetcode.com/problems/same-tree/",
   "Trees",
   false
  ],
  [
   51,
   "Subtree of Another Tree",
   "https://leetcode.com/problems/subtree-of-another-tree/",
   "Trees",
   false
  ],
  [
   52,
   "Lowest Common Ancestor of a BST",
   "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
   "Trees",
   false
  ],
  [
   53,
   "Binary Tree Level Order Traversal",
   "https://leetcode.com/problems/binary-tree-level-order-traversal/",
   "Trees",
   false
  ],
  [
   54,
   "Binary Tree Right Side View",
   "https://leetcode.com/problems/binary-tree-right-side-view/",
   "Trees",
   false
  ],
  [
   55,
   "Count Good Nodes in Binary Tree",
   "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
   "Trees",
   false
  ],
  [
   56,
   "Validate Binary Search Tree",
   "https://leetcode.com/problems/validate-binary-search-tree/",
   "Trees",
   false
  ],
  [
   57,
   "Kth Smallest Element in a BST",
   "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
   "Trees",
   false
  ],
  [
   58,
   "Construct Binary Tree from Preorder and Inorder",
   "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
   "Trees",
   false
  ],
  [
   59,
   "Binary Tree Maximum Path Sum",
   "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
   "Trees",
   false
  ],
  [
   60,
   "Serialize and Deserialize Binary Tree",
   "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
   "Trees",
   false
  ],
  [
   61,
   "Implement Trie",
   "https://leetcode.com/problems/implement-trie-prefix-tree/",
   "Tries",
   false
  ],
  [
   62,
   "Design Add and Search Words",
   "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
   "Tries",
   false
  ],
  [
   63,
   "Word Search II",
   "https://leetcode.com/problems/word-search-ii/",
   "Tries",
   false
  ],
  [
   64,
   "Kth Largest Element in a Stream",
   "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
   "Heap",
   false
  ],
  [
   65,
   "Last Stone Weight",
   "https://leetcode.com/problems/last-stone-weight/",
   "Heap",
   false
  ],
  [
   66,
   "K Closest Points to Origin",
   "https://leetcode.com/problems/k-closest-points-to-origin/",
   "Heap",
   false
  ],
  [
   67,
   "Kth Largest Element in an Array",
   "https://leetcode.com/problems/kth-largest-element-in-an-array/",
   "Heap",
   false
  ],
  [
   68,
   "Task Scheduler",
   "https://leetcode.com/problems/task-scheduler/",
   "Heap",
   false
  ],
  [
   69,
   "Design Twitter",
   "https://leetcode.com/problems/design-twitter/",
   "Heap",
   false
  ],
  [
   70,
   "Find Median from Data Stream",
   "https://leetcode.com/problems/find-median-from-data-stream/",
   "Heap",
   false
  ],
  [
   71,
   "Subsets",
   "https://leetcode.com/problems/subsets/",
   "Backtracking",
   false
  ],
  [
   72,
   "Combination Sum",
   "https://leetcode.com/problems/combination-sum/",
   "Backtracking",
   false
  ],
  [
   73,
   "Combination Sum II",
   "https://leetcode.com/problems/combination-sum-ii/",
   "Backtracking",
   false
  ],
  [
   74,
   "Permutations",
   "https://leetcode.com/problems/permutations/",
   "Backtracking",
   false
  ],
  [
   75,
   "Subsets II",
   "https://leetcode.com/problems/subsets-ii/",
   "Backtracking",
   false
  ],
  [
   76,
   "Word Search",
   "https://leetcode.com/problems/word-search/",
   "Backtracking",
   false
  ],
  [
   77,
   "Palindrome Partitioning",
   "https://leetcode.com/problems/palindrome-partitioning/",
   "Backtracking",
   false
  ],
  [
   78,
   "Letter Combinations of a Phone Number",
   "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
   "Backtracking",
   false
  ],
  [
   79,
   "N-Queens",
   "https://leetcode.com/problems/n-queens/",
   "Backtracking",
   false
  ],
  [
   80,
   "Number of Islands",
   "https://leetcode.com/problems/number-of-islands/",
   "Graphs",
   false
  ],
  [
   81,
   "Max Area of Island",
   "https://leetcode.com/problems/max-area-of-island/",
   "Graphs",
   false
  ],
  [
   82,
   "Clone Graph",
   "https://leetcode.com/problems/clone-graph/",
   "Graphs",
   false
  ],
  [
   83,
   "Walls and Gates (Islands and Treasure)",
   "https://neetcode.io/problems/islands-and-treasure",
   "Graphs",
   false
  ],
  [
   84,
   "Rotting Oranges",
   "https://leetcode.com/problems/rotting-oranges/",
   "Graphs",
   false
  ],
  [
   85,
   "Pacific Atlantic Water Flow",
   "https://leetcode.com/problems/pacific-atlantic-water-flow/",
   "Graphs",
   false
  ],
  [
   86,
   "Surrounded Regions",
   "https://leetcode.com/problems/surrounded-regions/",
   "Graphs",
   false
  ],
  [
   87,
   "Course Schedule",
   "https://leetcode.com/problems/course-schedule/",
   "Graphs",
   false
  ],
  [
   88,
   "Course Schedule II",
   "https://leetcode.com/problems/course-schedule-ii/",
   "Graphs",
   false
  ],
  [
   89,
   "Graph Valid Tree",
   "https://neetcode.io/problems/valid-tree",
   "Graphs",
   false
  ],
  [
   90,
   "Number of Connected Components",
   "https://neetcode.io/problems/count-connected-components",
   "Graphs",
   false
  ],
  [
   91,
   "Redundant Connection",
   "https://leetcode.com/problems/redundant-connection/",
   "Graphs",
   false
  ],
  [
   92,
   "Word Ladder",
   "https://leetcode.com/problems/word-ladder/",
   "Graphs",
   false
  ],
  [
   93,
   "Network Delay Time",
   "https://leetcode.com/problems/network-delay-time/",
   "Advanced Graphs",
   false
  ],
  [
   94,
   "Reconstruct Itinerary",
   "https://leetcode.com/problems/reconstruct-itinerary/",
   "Advanced Graphs",
   false
  ],
  [
   95,
   "Min Cost to Connect All Points",
   "https://leetcode.com/problems/min-cost-to-connect-all-points/",
   "Advanced Graphs",
   false
  ],
  [
   96,
   "Swim in Rising Water",
   "https://leetcode.com/problems/swim-in-rising-water/",
   "Advanced Graphs",
   false
  ],
  [
   97,
   "Alien Dictionary",
   "https://neetcode.io/problems/foreign-dictionary",
   "Advanced Graphs",
   false
  ],
  [
   98,
   "Cheapest Flights Within K Stops",
   "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
   "Advanced Graphs",
   false
  ],
  [
   99,
   "Climbing Stairs",
   "https://leetcode.com/problems/climbing-stairs/",
   "1-D DP",
   false
  ],
  [
   100,
   "Min Cost Climbing Stairs",
   "https://leetcode.com/problems/min-cost-climbing-stairs/",
   "1-D DP",
   false
  ],
  [
   101,
   "House Robber",
   "https://leetcode.com/problems/house-robber/",
   "1-D DP",
   false
  ],
  [
   102,
   "House Robber II",
   "https://leetcode.com/problems/house-robber-ii/",
   "1-D DP",
   false
  ],
  [
   103,
   "Longest Palindromic Substring",
   "https://leetcode.com/problems/longest-palindromic-substring/",
   "1-D DP",
   false
  ],
  [
   104,
   "Palindromic Substrings",
   "https://leetcode.com/problems/palindromic-substrings/",
   "1-D DP",
   false
  ],
  [
   105,
   "Decode Ways",
   "https://leetcode.com/problems/decode-ways/",
   "1-D DP",
   false
  ],
  [
   106,
   "Coin Change",
   "https://leetcode.com/problems/coin-change/",
   "1-D DP",
   false
  ],
  [
   107,
   "Maximum Product Subarray",
   "https://leetcode.com/problems/maximum-product-subarray/",
   "1-D DP",
   false
  ],
  [
   108,
   "Word Break",
   "https://leetcode.com/problems/word-break/",
   "1-D DP",
   false
  ],
  [
   109,
   "Longest Increasing Subsequence",
   "https://leetcode.com/problems/longest-increasing-subsequence/",
   "1-D DP",
   false
  ],
  [
   110,
   "Partition Equal Subset Sum",
   "https://leetcode.com/problems/partition-equal-subset-sum/",
   "1-D DP",
   false
  ],
  [
   111,
   "Unique Paths",
   "https://leetcode.com/problems/unique-paths/",
   "2-D DP",
   false
  ],
  [
   112,
   "Longest Common Subsequence",
   "https://leetcode.com/problems/longest-common-subsequence/",
   "2-D DP",
   false
  ],
  [
   113,
   "Best Time to Buy and Sell Stock with Cooldown",
   "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
   "2-D DP",
   false
  ],
  [
   114,
   "Coin Change II",
   "https://leetcode.com/problems/coin-change-ii/",
   "2-D DP",
   false
  ],
  [
   115,
   "Target Sum",
   "https://leetcode.com/problems/target-sum/",
   "2-D DP",
   false
  ],
  [
   116,
   "Interleaving String",
   "https://leetcode.com/problems/interleaving-string/",
   "2-D DP",
   false
  ],
  [
   117,
   "Longest Increasing Path in a Matrix",
   "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
   "2-D DP",
   false
  ],
  [
   118,
   "Distinct Subsequences",
   "https://leetcode.com/problems/distinct-subsequences/",
   "2-D DP",
   false
  ],
  [
   119,
   "Edit Distance",
   "https://leetcode.com/problems/edit-distance/",
   "2-D DP",
   false
  ],
  [
   120,
   "Burst Balloons",
   "https://leetcode.com/problems/burst-balloons/",
   "2-D DP",
   false
  ],
  [
   121,
   "Regular Expression Matching",
   "https://leetcode.com/problems/regular-expression-matching/",
   "2-D DP",
   false
  ],
  [
   122,
   "Maximum Subarray",
   "https://leetcode.com/problems/maximum-subarray/",
   "Greedy",
   true
  ],
  [
   123,
   "Jump Game",
   "https://leetcode.com/problems/jump-game/",
   "Greedy",
   false
  ],
  [
   124,
   "Jump Game II",
   "https://leetcode.com/problems/jump-game-ii/",
   "Greedy",
   false
  ],
  [
   125,
   "Gas Station",
   "https://leetcode.com/problems/gas-station/",
   "Greedy",
   false
  ],
  [
   126,
   "Hand of Straights",
   "https://leetcode.com/problems/hand-of-straights/",
   "Greedy",
   false
  ],
  [
   127,
   "Merge Triplets to Form Target Triplet",
   "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
   "Greedy",
   false
  ],
  [
   128,
   "Partition Labels",
   "https://leetcode.com/problems/partition-labels/",
   "Greedy",
   false
  ],
  [
   129,
   "Valid Parenthesis String",
   "https://leetcode.com/problems/valid-parenthesis-string/",
   "Greedy",
   false
  ],
  [
   130,
   "Insert Interval",
   "https://leetcode.com/problems/insert-interval/",
   "Intervals",
   false
  ],
  [
   131,
   "Merge Intervals",
   "https://leetcode.com/problems/merge-intervals/",
   "Intervals",
   false
  ],
  [
   132,
   "Non-overlapping Intervals",
   "https://leetcode.com/problems/non-overlapping-intervals/",
   "Intervals",
   false
  ],
  [
   133,
   "Meeting Rooms",
   "https://neetcode.io/problems/meeting-schedule",
   "Intervals",
   false
  ],
  [
   134,
   "Meeting Rooms II",
   "https://neetcode.io/problems/meeting-schedule-ii",
   "Intervals",
   false
  ],
  [
   135,
   "Minimum Interval to Include Each Query",
   "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
   "Intervals",
   false
  ],
  [
   136,
   "Rotate Image",
   "https://leetcode.com/problems/rotate-image/",
   "Math & Geometry",
   false
  ],
  [
   137,
   "Spiral Matrix",
   "https://leetcode.com/problems/spiral-matrix/",
   "Math & Geometry",
   false
  ],
  [
   138,
   "Set Matrix Zeroes",
   "https://leetcode.com/problems/set-matrix-zeroes/",
   "Math & Geometry",
   false
  ],
  [
   139,
   "Happy Number",
   "https://leetcode.com/problems/happy-number/",
   "Math & Geometry",
   false
  ],
  [
   140,
   "Plus One",
   "https://leetcode.com/problems/plus-one/",
   "Math & Geometry",
   false
  ],
  [
   141,
   "Pow(x, n)",
   "https://leetcode.com/problems/powx-n/",
   "Math & Geometry",
   false
  ],
  [
   142,
   "Multiply Strings",
   "https://leetcode.com/problems/multiply-strings/",
   "Math & Geometry",
   false
  ],
  [
   143,
   "Detect Squares",
   "https://leetcode.com/problems/detect-squares/",
   "Math & Geometry",
   false
  ],
  [
   144,
   "Single Number",
   "https://leetcode.com/problems/single-number/",
   "Bit Manipulation",
   false
  ],
  [
   145,
   "Number of 1 Bits",
   "https://leetcode.com/problems/number-of-1-bits/",
   "Bit Manipulation",
   false
  ],
  [
   146,
   "Counting Bits",
   "https://leetcode.com/problems/counting-bits/",
   "Bit Manipulation",
   false
  ],
  [
   147,
   "Reverse Bits",
   "https://leetcode.com/problems/reverse-bits/",
   "Bit Manipulation",
   false
  ],
  [
   148,
   "Missing Number",
   "https://leetcode.com/problems/missing-number/",
   "Bit Manipulation",
   false
  ],
  [
   149,
   "Sum of Two Integers",
   "https://leetcode.com/problems/sum-of-two-integers/",
   "Bit Manipulation",
   false
  ],
  [
   150,
   "Reverse Integer",
   "https://leetcode.com/problems/reverse-integer/",
   "Bit Manipulation",
   false
  ]
 ]
};
