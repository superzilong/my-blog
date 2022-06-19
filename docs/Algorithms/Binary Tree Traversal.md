---
sidebar_position: 1
---

# Binary Tree Traversal

## 1. Breadth-first

#### 1.1 Level-order

## 2. Depth-first

#### 2.1 Pre-order

```
a. visit root
b. visit left sub-tree
c. visit right sub-tree
```

#### 2.2 In-order

```
a. visit left sub-tree
b. visit root
c. visit right sub-tree
```

#### 2.3 Post-order

```
a. visit left sub-tree
b. visit right sub-tree
c. visit root
```

## 3. Python Code Examples
```python
class Node:

    def __init__(self, val, left=None, right=None):
        self.value = val
        self.left = left
        self.right = right


def level_order(root: Node):
    """ Level Implementation """
    res = []
    if not root:
        return res
    level = [root]
    while level:
        current = []
        new_level = []
        for node in level:
            current.append(node.value)
            if node.left:
                new_level.append(node.left)
            if node.right:
                new_level.append(node.right)
        level = new_level
        res += current
    return res


def preorder(root: Node):
    """ Preorder Implementation"""
    res = []
    if not root:
        return res
    stack = []
    stack.append(root)
    while stack:
        root = stack.pop()
        res.append(root.value)
        if root.right:
            stack.append(root.right)
        if root.left:
            stack.append(root.left)
    return res


def preorder_rec(root: Node, res=None):
    """ Preorder Recursive Implementation"""
    if root is None:
        return []
    if res is None:
        res = []
    res.append(root.value)
    preorder_rec(root.left, res)
    preorder_rec(root.right, res)
    return res


def inorder(root: Node):
    """ Inorder Implementation """
    res = []
    if not root:
        return res
    stack = []
    while root or stack:
        while root:
            stack.append(root)
            root = root.left
        root = stack.pop()
        res.append(root.value)
        root = root.right
    return res


def inorder_rec(root: Node, res=None):
    """ Inorder Recursive Implementation"""
    if root is None:
        return []
    if res is None:
        res = []
    inorder_rec(root.left, res)
    res.append(root.value)
    inorder_rec(root.right, res)
    return res


def postorder(root: Node):
    """ Postorder Implementation"""
    res = []
    if not root:
        return res
    stack = [root]
    while stack:
        root = stack.pop()
        res.append(root.value)
        if root.left:
            stack.append(root.left)
        if root.right:
            stack.append(root.right)
    res.reverse()
    return res


def postorder_rec(root: Node, res=None):
    """ Postorder Recursive Implementation"""
    if root is None:
        return []
    if res is None:
        res = []
    postorder_rec(root.left, res)
    postorder_rec(root.right, res)
    res.append(root.value)
    return res

if __name__ == '__main__':
    """
    Given binary tree [3,9,20,null,null,15,7],
            100
          /    \
        50     150
       /  \    /   \
      25  75  125   175
    """
    n1 = Node(100)
    n2 = Node(50)
    n3 = Node(150)
    n4 = Node(25)
    n5 = Node(75)
    n6 = Node(125)
    n7 = Node(175)
    n1.left, n1.right = n2, n3
    n2.left, n2.right = n4, n5
    n3.left, n3.right = n6, n7

    assert level_order(n1) == [100, 50, 150, 25, 75, 125, 175]

    assert preorder(n1) == [100, 50, 25, 75, 150, 125, 175]
    assert preorder_rec(n1) == [100, 50, 25, 75, 150, 125, 175]

    assert inorder(n1) == [25, 50, 75, 100, 125, 150, 175]
    assert inorder_rec(n1) == [25, 50, 75, 100, 125, 150, 175]

    assert postorder(n1) == [25, 75, 50, 125, 175, 150, 100]
    assert postorder_rec(n1) == [25, 75, 50, 125, 175, 150, 100]
```

