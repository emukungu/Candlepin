export interface FrameProps{
    started: boolean
    setPlayers: React.Dispatch<React.SetStateAction<string[]>>
    setStart: React.Dispatch<React.SetStateAction<boolean>>
}


export type Players = string[]

export interface Score{ 
  name: string
  ball: number
  mark?: string 
  started: boolean
  completed: boolean
  downed: number, 
  score: number 
}

export interface ApiData{
  id: string,
  lane: number
  started: boolean
  finished: boolean
  startTime: number
  finishedTime: number
  players: string[]
  frames: { 
    frame: number 
    scores: Score[]
  }[]
}