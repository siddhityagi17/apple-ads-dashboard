import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface MetricData {
  label: string
  value: string
  change: number
  isPositive: boolean
}

export interface ChartDataPoint {
  date: string
  spend: number
}

export interface CampaignData {
  id: string
  name: string
  status: "Active" | "Paused"
  spend: number
  impressions: number
  taps: number
  installs: number
  ttr: number
  avgCPA: number
  avgCPT: number
  newDownloads: number
  redownloads: number
  latOnInstalls: number
}

export interface AnalyticsState {
  metrics: MetricData[]
  chartData: ChartDataPoint[]
  campaigns: CampaignData[]
  selectedFilter: "Campaign" | "Ad Group" | "Keyword" | "Creative Set" | "Search Term"
}

const initialState: AnalyticsState = {
  metrics: [
    { label: "Total Spend", value: "$7,549.54", change: 5.55, isPositive: true },
    { label: "Impressions", value: "2,547,890", change: 12.34, isPositive: true },
    { label: "Taps", value: "16,321", change: 8.21, isPositive: true },
    { label: "Avg CPI", value: "$4.47", change: -2.15, isPositive: true },
    { label: "Avg CPA", value: "$0.00", change: 0, isPositive: true },
  ],
  chartData: [
    { date: "Jan 1", spend: 6800 },
    { date: "Jan 3", spend: 5200 },
    { date: "Jan 5", spend: 7200 },
    { date: "Jan 7", spend: 8500 },
    { date: "Jan 9", spend: 7100 },
    { date: "Jan 11", spend: 8900 },
    { date: "Jan 13", spend: 7800 },
    { date: "Jan 15", spend: 6500 },
    { date: "Jan 17", spend: 7400 },
    { date: "Jan 19", spend: 8200 },
    { date: "Jan 21", spend: 7500 },
    { date: "Jan 23", spend: 6900 },
    { date: "Jan 25", spend: 8800 },
    { date: "Jan 27", spend: 9400 },
    { date: "Jan 29", spend: 7900 },
    { date: "Jan 31", spend: 8400 },
    { date: "Feb 2", spend: 7200 },
    { date: "Feb 4", spend: 8900 },
    { date: "Feb 6", spend: 10200 },
    { date: "Feb 8", spend: 9500 },
    { date: "Feb 10", spend: 8100 },
    { date: "Feb 12", spend: 9800 },
  ],
  campaigns: [
    {
      id: "1",
      name: "Brand Campaign - iOS",
      status: "Active",
      spend: 2450.32,
      impressions: 850420,
      taps: 5420,
      installs: 412,
      ttr: 0.64,
      avgCPA: 5.95,
      avgCPT: 0.45,
      newDownloads: 389,
      redownloads: 23,
      latOnInstalls: 67,
    },
    {
      id: "2",
      name: "Competitor Keywords",
      status: "Active",
      spend: 1890.45,
      impressions: 620180,
      taps: 3890,
      installs: 298,
      ttr: 0.63,
      avgCPA: 6.34,
      avgCPT: 0.49,
      newDownloads: 276,
      redownloads: 22,
      latOnInstalls: 54,
    },
    {
      id: "3",
      name: "Generic Terms - High Intent",
      status: "Active",
      spend: 1650.78,
      impressions: 542300,
      taps: 3210,
      installs: 267,
      ttr: 0.59,
      avgCPA: 6.18,
      avgCPT: 0.51,
      newDownloads: 245,
      redownloads: 22,
      latOnInstalls: 71,
    },
    {
      id: "4",
      name: "Seasonal Promotion",
      status: "Paused",
      spend: 890.22,
      impressions: 312450,
      taps: 1980,
      installs: 145,
      ttr: 0.63,
      avgCPA: 6.14,
      avgCPT: 0.45,
      newDownloads: 132,
      redownloads: 13,
      latOnInstalls: 48,
    },
    {
      id: "5",
      name: "Discovery Campaign",
      status: "Active",
      spend: 667.77,
      impressions: 284540,
      taps: 1821,
      installs: 125,
      ttr: 0.64,
      avgCPA: 5.34,
      avgCPT: 0.37,
      newDownloads: 118,
      redownloads: 7,
      latOnInstalls: 62,
    },
  ],
  selectedFilter: "Campaign",
}

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setSelectedFilter: (state, action: PayloadAction<AnalyticsState["selectedFilter"]>) => {
      state.selectedFilter = action.payload
    },
  },
})

export const { setSelectedFilter } = analyticsSlice.actions
export default analyticsSlice.reducer
