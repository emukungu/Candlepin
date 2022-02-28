export interface ISButton {
    isStarted: boolean,
    handleClick: () => void
}


export interface ButtonProps{
    isStarted: boolean,
    players?: string[],
    handleClick: () => void,
    setPlayers: React.Dispatch<React.SetStateAction<string[]>>,
    setShow?: React.Dispatch<React.SetStateAction<boolean>>,
    setStart: React.Dispatch<React.SetStateAction<boolean>>
}
