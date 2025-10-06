"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useAppSelector } from "@/lib/hooks"
import { Target, TrendingUp, TrendingDown } from "lucide-react"

export function CampaignsTable() {
  const campaigns = useAppSelector((state) => state.analytics.campaigns)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.7 }}
    >
      <Card className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="w-[280px] font-semibold">Campaign</TableHead>
              <TableHead className="text-right font-semibold">Spend</TableHead>
              <TableHead className="text-right font-semibold">Impressions</TableHead>
              <TableHead className="text-right font-semibold">Taps</TableHead>
              <TableHead className="text-right font-semibold">Installs</TableHead>
              <TableHead className="text-right font-semibold">TTR</TableHead>
              <TableHead className="text-right font-semibold">Avg CPA</TableHead>
              <TableHead className="text-right font-semibold">Avg CPT</TableHead>
              <TableHead className="text-right font-semibold">New Downloads</TableHead>
              <TableHead className="text-right font-semibold">Redownloads</TableHead>
              <TableHead className="text-right font-semibold">LAT On Installs</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign, index) => (
              <TableRow key={campaign.id} className="group hover:bg-muted/30 transition-colors">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md bg-brand/10 flex items-center justify-center">
                      <Target className="h-4 w-4 text-brand" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">{campaign.name}</span>
                      <Badge
                        variant={campaign.status === "Active" ? "default" : "secondary"}
                        className={`w-fit text-xs ${
                          campaign.status === "Active"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium text-sm">
                  ${campaign.spend.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </TableCell>
                <TableCell className="text-right text-sm">{campaign.impressions.toLocaleString()}</TableCell>
                <TableCell className="text-right text-sm">{campaign.taps.toLocaleString()}</TableCell>
                <TableCell className="text-right text-sm">{campaign.installs.toLocaleString()}</TableCell>
                <TableCell className="text-right text-sm">{campaign.ttr}%</TableCell>
                <TableCell className="text-right font-medium text-sm">${campaign.avgCPA.toFixed(2)}</TableCell>
                <TableCell className="text-right text-sm">${campaign.avgCPT.toFixed(2)}</TableCell>
                <TableCell className="text-right text-sm">{campaign.newDownloads.toLocaleString()}</TableCell>
                <TableCell className="text-right text-sm">{campaign.redownloads.toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-sm">{campaign.latOnInstalls}</span>
                    {campaign.latOnInstalls > 50 ? (
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-600" />
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </motion.div>
  )
}
