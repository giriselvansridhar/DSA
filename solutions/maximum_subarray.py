# 53. Maximum Subarray
# https://leetcode.com/problems/maximum-subarray/
# Topic: Greedy | Redo on 22 Nov 2026 | Needed help
#
# My note: Kadane. cur += x, save best FIRST, then reset cur to 0 if negative.
# Bug I fixed: the all-negative case (save best before resetting).
# Time O(n), Space O(1)


class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        best = float("-inf")
        cur = 0
        for x in nums:
            cur += x
            best = max(best, cur)   # save best FIRST
            if cur < 0:
                cur = 0             # then drop a negative prefix
        return best
