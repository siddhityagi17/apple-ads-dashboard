"use client"

import { Card } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"
import { motion } from "framer-motion"

interface MetricCardProps {
  label: string
  value: string
  change: number
  isPositive: boolean
  index: number
}

export function MetricCard({ label, value, change, isPositive, index }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="p-5 hover:shadow-md transition-shadow border-border/50">
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{label}</p>
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-2xl font-bold tracking-tight">{value}</p>
            <div
              className={`flex items-center gap-0.5 text-xs font-semibold ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {isPositive ? <ArrowUpIcon className="h-3 w-3" /> : <ArrowDownIcon className="h-3 w-3" />}
              <span>{Math.abs(change).toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
