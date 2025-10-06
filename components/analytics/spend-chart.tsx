"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"
import { useAppSelector } from "@/lib/hooks"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"

export function SpendChart() {
  const chartData = useAppSelector((state) => state.analytics.chartData)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-brand/10 text-brand hover:bg-brand/10 font-semibold">
                Spend
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm border rounded-md hover:bg-muted/50 transition-colors">
                <span>Last 30 days</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm border rounded-md hover:bg-muted/50 transition-colors">
                <span>Daily</span>
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(255, 107, 53)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="rgb(255, 107, 53)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="date" stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} dy={10} />
                <YAxis
                  stroke="#9ca3af"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  dx={-10}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  domain={[0, 12000]}
                  ticks={[0, 3000, 6000, 9000, 12000]}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-3 shadow-lg">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-muted-foreground">{payload[0].payload.date}</span>
                            <span className="text-sm font-bold text-brand">${payload[0].value?.toLocaleString()}</span>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="spend"
                  stroke="rgb(255, 107, 53)"
                  strokeWidth={2.5}
                  fill="url(#spendGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
