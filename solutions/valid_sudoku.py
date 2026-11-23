# 36. Valid Sudoku
# https://leetcode.com/problems/valid-sudoku/
# Topic: Arrays & Hashing | New on 22 Nov 2026 | Needed help (boxes part)
#
# My note: 3 rules, a fresh set for each: rows, columns, boxes.
# Boxes: br, bc in range(0, 9, 3); r in range(br, br+3), c in range(bc, bc+3).
# Time O(81) = O(1), Space O(1)


class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        # Rows
        for r in range(9):
            seen = set()
            for c in range(9):
                v = board[r][c]
                if v != ".":
                    if v in seen:
                        return False
                    seen.add(v)

        # Columns
        for c in range(9):
            seen = set()
            for r in range(9):
                v = board[r][c]
                if v != ".":
                    if v in seen:
                        return False
                    seen.add(v)

        # 3x3 boxes
        for br in range(0, 9, 3):
            for bc in range(0, 9, 3):
                seen = set()
                for r in range(br, br + 3):
                    for c in range(bc, bc + 3):
                        v = board[r][c]
                        if v != ".":
                            if v in seen:
                                return False
                            seen.add(v)

        return True
