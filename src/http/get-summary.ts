export type SummaryRes = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }
  >[]
}

export async function getSummary(): Promise<SummaryRes> {
  const res = await fetch('http://localhost:3333/summary')
  const data = await res.json()

  return data.summary
}
