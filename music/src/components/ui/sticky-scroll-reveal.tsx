"use client"
import React, { useEffect, useRef, useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { motion } from "framer-motion"
import { cn } from "@/utils/utils"

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode | any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = Math.max(0, Math.min(1, latest))
    const activeIndex = Math.min(Math.floor(progress * cardLength), cardLength - 1)

    const adjustedProgress = progress + 0.1 / cardLength
    const adjustedIndex = Math.min(Math.floor(adjustedProgress * cardLength), cardLength - 1)

    setActiveCard(adjustedIndex)
  })

  const backgroundColors = [
    "rgba(15, 23, 42, 0.95)", // slate-900 with opacity
    "rgba(0, 0, 0, 0.9)", // black with opacity
    "rgba(23, 23, 23, 0.95)", // neutral-900 with opacity
    "rgba(30, 41, 59, 0.95)", // slate-800 with opacity
    "rgba(17, 24, 39, 0.95)", // gray-900 with opacity
  ]

  const [backgroundGradient, setBackgroundGradient] = useState("transparent")

  useEffect(() => {
    setBackgroundGradient("transparent")
  }, [activeCard])

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex min-h-screen rounded-md"
      ref={ref}
    >
      <div className="flex-1 relative">
        {content.map((item, index) => (
          <div key={item.title + index} className="h-[60vh] flex items-center px-10">
            <div className="space-y-6 max-w-2xl">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-5xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                className="text-xl text-slate-300 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 relative">
        <div className="sticky top-0 h-screen flex items-center justify-center px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.3 }}
            className={cn("h-96 w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-2xl", contentClassName)}
          >
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full w-full"
            >
              {content[activeCard].content ?? null}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
