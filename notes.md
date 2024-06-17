# React Basics
**The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.

*But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.*

` However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.`

But some values depends on network call so if we update a value it might get update immediately via a network call.

So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.

# Virtual DOM
It is not used right now, but it is important to understand virtual DOM.

## React Fiber Architecture

React fiber is an ongoing reimplementation of React's core algorithm.

# Reconciliation (Recursive Algorithm)
The algorithm React uses to differentiate one tree (DOM Tree) with another tree (React tree from create root) to determine which parts need to be changed. 
**Reconciliation is the algorithm behind what is popularly understood as `virtual DOM`**

In UI it is not necessary for every update to be applied immediately.
