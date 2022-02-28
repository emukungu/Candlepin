import { ButtonProps } from "../../interfaces/Button.interface";


export const GameButton = ({ isStarted, handleClick, setPlayers, setShow, setStart}: ButtonProps) => {
    return (
        <div className="col-auto">
            <button type="button" className="btn add-user" 
                onClick={ handleClick }
            >
                {!isStarted
                ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" 
                        height="16" fill="currentColor" className="bi bi-plus-lg" 
                        viewBox="0 0 16 16">
                        <path fillRule="evenodd" 
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                )
                : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                        height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                    </svg>
                )
            }
            </button>
        </div>
    )
}

export default GameButton;
