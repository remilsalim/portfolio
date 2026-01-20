---
title: "MolecularGraph"
description: "Predicting drug side effects using random forest classifiers on molecular features."
github: "https://github.com/remilsalim/MolecularGraph"
stack: "Python, Scikit-Learn, Pandas"
---

## The Context
Drug discovery is expensive. Identifying side effects early (in silico) saves billions.
MolecularGraph is a predictive system that takes a chemical formula (e.g., `C8H10N4O2`) and predicts potential biological side effects.

## Feature Extraction Pipeline
Raw strings like "Caffeine" mean nothing to a Random Forest.
I built a pipeline to convert **Chemical Formula → Feature Vector**.

1. **Atom Counting**: `C8H10N4O2` -> `{C:8, H:10, N:4, O:2}`.
2. **Molecular Weight Calculation**: Summing atomic masses.
3. **Ratio derivation**: C/H ratios often correlate with lipophilicity (fat solubility).

## Model Selection: Random Forest vs. Deep Learning
I chose **Random Forest** over Neural Networks for this specific problem.
**Why?**
1. **Dataset Size**: The dataset (PubChem subset) was relatively small (~10k rows). Deep learning would overfit.
2. **Interpretability**: In medical/biotech, we need to know *why* a prediction was made. Random Forest provides `feature_importances_`, allowing us to see that (hypothetically) "High Nitrogen content correlates with X side effect".

## System Architecture
The app is deployed via **Streamlit**.
While Streamlit is often seen as a prototyping tool, I engineered it for production by:
- **Caching Models**: Using `@st.cache_resource` to load the 500MB random forest model only once into memory, not per user session.
- **Vectorized Lookups**: Using Pandas vector operations instead of Python loops for searching the chemical database.
