"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CursorFollower() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth spring animation for the trailing ring
    const springConfig = { damping: 25, stiffness: 120 }
    const trailX = useSpring(mouseX, springConfig)
    const trailY = useSpring(mouseY, springConfig)

    useEffect(() => {
        function handleMouseMove(e) {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <>
            {/* Main Dot - Follows cursor exactly */}
            <motion.div
                className="fixed top-0 left-0 h-4 w-4 rounded-full bg-primary pointer-events-none z-50 mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Trailing Ring - Follows with delay */}
            <motion.div
                className="fixed top-0 left-0 h-12 w-12 rounded-full border border-primary/50 pointer-events-none z-40"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    )
}
