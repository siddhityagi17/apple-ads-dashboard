"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setSelectedFilter } from "@/lib/features/analytics-slice"
import { motion } from "framer-motion"

const filters = ["Campaign", "Ad Group", "Keyword", "Creative Set", "Search Term"] as const

export function FilterTabs() {
  const dispatch = useAppDispatch()
  const selectedFilter = useAppSelector((state) => state.analytics.selectedFilter)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
    >
      <Tabs
        value={selectedFilter}
        onValueChange={(value) => dispatch(setSelectedFilter(value as typeof selectedFilter))}
      >
        <TabsList className="w-full justify-start">
          {filters.map((filter) => (
            <TabsTrigger key={filter} value={filter} className="px-6">
              {filter}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </motion.div>
  )
}
