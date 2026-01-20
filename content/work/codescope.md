---
title: "CodeScope"
description: "Zero-dependency static analysis engine running entirely in the browser."
github: "https://github.com/remilsalim/CodeScope"
stack: "Vanilla JS, AST Parsing, Heuristics"
---

## The Problem
Most code analysis tools (SonarQube, ESLint) require heavy CLI setup, Node.js environments, or server-side processing. I wanted to answer a simple question: **Can we perform meaningful static analysis entirely in the browser, in real-time, without sending code to a server?**

## System Design
The constraints were strict:
1. **Zero Dependencies**: No `acorn` or `babel` parsers. I wanted to understand the parsing logic myself.
2. **Client-Side Only**: Privacy-first. Code never leaves the DOM.
3. **Performance**: Must run on every keystroke without blocking the main JS thread.

### The Parsing Engine
Instead of a full Abstract Syntax Tree (AST) generator, which is heavy, I implemented a **Token-Based Heuristic Engine**. 

It uses a regex tokenizer to break code into `Keywords`, `ControlFlow`, and `Identifiers`.
Then, it runs a single-pass traversal to estimate complexity:

- **Cyclomatic Complexity Estimator**: Tracks branching statements (`if`, `for`, `while`, `case`).
- **Nesting Depth Tracker**: Maintained a stack of open braces `{` to calculate max depth, which is a strong proxy for readability issues.

### Big O Estimation Algorithm
One of the most challenging features was dynamic Big O estimation.
I implemented a loop-depth analyzer that:
1. Identifies loop starts (`for`, `while`).
2. Tracks the relationship between the loop variable and the nesting stack.
3. If a loop is found inside another loop, and both iterate on `n`, complexity bumps from `O(n)` to `O(n^2)`.

This isn't a perfect mathematical proof, but for 90% of practical algorithmic problems, it gives immediate, correct feedback.

## Trade-offs
**Accuracy vs. Performance**: A full AST parser (like Babel) would be 100% accurate but 100x larger in bundle size. My regex-heuristic approach is ~95% accurate for standard syntax but fails on edge cases (like complex regex literals containing braces). This was an acceptable trade-off for a tool designed for quick algorithmic checks.
