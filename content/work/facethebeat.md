---
title: "FaceTheBeat"
description: "Real-time emotion detection pipeline optimizing model inference on the client."
github: "https://github.com/remilsalim/FaceTheBeat"
stack: "React, TensorFlow.js, Web Workers"
---

## The Challenge
Running a Deep Neural Network (DNN) for face detection `60 times per second` on a browser will kill the UI thread immediately. The user experience would be a frozen screen while the music stutters.

## Optimization Strategy
The goal: **Fluid UI > Real-time Accuracy**.
We don't need to check emotion at 60fps. Music mood changes slowly.

### 1. Throttling Inference
I implemented a `requestAnimationFrame` loop but added a throttle:
Inference only runs every **1.5 seconds**. This reduced CPU load by ~98% while still feeling "real-time" to the user.

### 2. Model Quantization
I used `face-api.js` with the `tiny_face_detector` model. 
- **Standard Model**: ~10MB, high accuracy.
- **Tiny Model**: ~200KB, slightly lower accuracy, 10x faster inference.
For a music app, the tiny model was the correct engineering choice.

### 3. Smoothing the Data
Raw model output is noisy. One frame you are "Happy (90%)", the next "Neutral (51%)".
I implemented a **Moving Average Window** of size 3.
New Mood = `(Prev + Curr + Next) / 3`
This prevents the music playlist from erratically jumping between genres due to a single jittery frame.

## Privacy & Local-First Design
Critical to this system was ensuring **zero server data**. The video feed is processed 100% in memory; no canvas data is ever serialized or sent over the network. This was a deliberate architectural choice to bypass GDPR concerns and reduce server costs to zero.
