---
title: "StackSense"
description: "Decision engine for tech stack recommendations based on architectural constraints."
github: "https://github.com/remilsalim/StackSense"
stack: "Python, FastAPI, Weighted Algorithms"
---

## The Problem
"What tech stack should I use?" is the most common, yet inefficiently answered question in software engineering. Most answers are based on hype ("Use Rust!") rather than constraints.

I built **StackSense** to invert this: **Start with constraints, end with a stack.**

## Engineering the Decision Engine
The core of StackSense isn't a simple database lookup—it's a **Weighted Scoring Engine**.

### The Algorithm
Inputs are normalized into a vector of priorities:
`P = [Scalability, Speed, SEO, Hiring, RealTime]`

Each technology in the database has a corresponding capability vector:
`T(NextJS) = [High, High, High, High, Low]`
`T(Rust) = [High, Low, Low, Low, High]`

The engine computes the dot product of the User's Priority Vector against the Database.
However, it's not just simple multiplication. I added **deal-breakers**:
- If `Type == "Static Site"` AND `Tech == "Postgres"`, weight becomes `0`.

### Nuance in Recommendations
The system distinguishes between "Best Technical Fit" and "Best Pragmatic Fit".
A microservices architecture might be technically superior for scalability, but if the team size is 1, the "Pragmatic Score" penalizes it heavily.

## Architecture
The backend is built with **FastAPI** for high performance.
I chose **Pydantic** for data validation because it allows me to strictly type the "Constraint" objects, ensuring the scoring engine never crashes on malformed inputs.
