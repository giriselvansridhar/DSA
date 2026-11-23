# 49. Group Anagrams
# https://leetcode.com/problems/group-anagrams/
# Topic: Arrays & Hashing | Redo on 23 Nov 2026 | Solved alone
#
# Pattern: hash map, key = the word with its letters sorted.
# All anagrams sort to the same key, so they land in one group.
# Time O(n * k log k), Space O(n * k)   (k = longest word)


class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        Dict = {}
        for i in strs:
            Base_Word = "".join(sorted(i))
            if Base_Word in Dict:
                Dict[Base_Word].append(i)
            else:
                Dict[Base_Word] = []
                Dict[Base_Word].append(i)
        return list(Dict.values())


# Cleaner version (same idea):
# from collections import defaultdict
# groups = defaultdict(list)
# for word in strs:
#     groups["".join(sorted(word))].append(word)
# return list(groups.values())
