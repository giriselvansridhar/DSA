# 347. Top K Frequent Elements
# https://leetcode.com/problems/top-k-frequent-elements/
# Topic: Arrays & Hashing | Redo on 22 Nov 2026 | Needed help
#
# My note: count with dict -> [tally, num] pairs -> sort reverse -> take k.
# Time O(n log n), Space O(n)
# Next redo: try bucket sort for O(n) (list index = count).


class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        count = {}
        for num in nums:
            count[num] = count.get(num, 0) + 1

        pairs = [[tally, num] for num, tally in count.items()]
        pairs.sort(reverse=True)

        return [num for tally, num in pairs[:k]]
