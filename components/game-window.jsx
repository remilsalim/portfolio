"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useDragControls } from "framer-motion"
import { X, GripHorizontal, Scaling } from "lucide-react"
import { UntangleGame } from "@/components/untangle-game"

export function GameWindow({ isOpen, onClose }) {
    const controls = useDragControls()

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        drag
                        dragListener={false} // Disable default drag listener
                        dragControls={controls} // Use manual controls
                        dragMomentum={false}
                        className="pointer-events-auto bg-slate-950/95 backdrop-blur-md border border-slate-700/50 shadow-2xl rounded-xl overflow-hidden flex flex-col min-w-[300px] min-h-[200px]"
                        style={{
                            width: 550,
                            height: 480,
                            resize: "both",
                            overflow: "auto",
                        }}
                    >
                        {/* Header / Drag Handle */}
                        <div
                            className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-slate-800 cursor-grab active:cursor-grabbing select-none"
                            onPointerDown={(e) => controls.start(e)} // Start drag manually
                        >
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                                <GripHorizontal className="w-4 h-4 text-slate-500" />
                                Dependency Resolver
                            </div>
                            <div
                                className="flex items-center gap-2"
                                onPointerDown={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={onClose}
                                    className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div
                            className="flex-1 p-4 overflow-auto cursor-auto no-scrollbar scrollbar-hide [&::-webkit-scrollbar]:hidden"
                        >
                            <UntangleGame />
                        </div>

                        {/* Resize Handle Overlay */}
                        <div className="absolute bottom-1 right-1 pointer-events-none opacity-50">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-slate-500"
                            >
                                <path d="M11 1L11 11L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
