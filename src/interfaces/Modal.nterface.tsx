export interface ModalProps{
    show: boolean
    gameComplete: boolean
    players?: string[]
    setPlayers: React.Dispatch<React.SetStateAction<string[]>>
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setStart: React.Dispatch<React.SetStateAction<boolean>>
    setGameComplete: React.Dispatch<React.SetStateAction<boolean>>
    okButton: "Start"|"Restart"
    cancel: "Quit"|"cancel"
    text: string
  }