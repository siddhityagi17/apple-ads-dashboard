"use client"

import { MetricCard } from "@/components/analytics/metric-card"
import { SpendChart } from "@/components/analytics/spend-chart"
import { FilterTabs } from "@/components/analytics/filter-tabs"
import { CampaignsTable } from "@/components/analytics/campaigns-table"
import { useAppSelector } from "@/lib/hooks"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { PlayCircle } from "lucide-react"

export default function AnalyticsDashboard() {
  const metrics = useAppSelector((state) => state.analytics.metrics)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Header with Get Started Card */}
        <div className="flex items-start justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-2"
          >
            <h1 className="text-3xl font-bold tracking-tight">Evaluate performance of your ads on all levels with</h1>
            <p className="text-base text-muted-foreground">Track and optimize your Apple Search Ads campaigns</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Card className="bg-brand p-6 text-white border-0 w-[280px]">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <PlayCircle className="h-8 w-8" />
                  <span className="text-lg font-semibold">Get Started</span>
                </div>
                <p className="text-sm text-white/90">Learn how to maximize your ad performance</p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} {...metric} index={index} />
          ))}
        </div>

        {/* Spend Chart */}
        <SpendChart />

        {/* Filter Tabs */}
        <FilterTabs />

        {/* Campaigns Table */}
        <CampaignsTable />
      </div>
    </div>
  )
}
