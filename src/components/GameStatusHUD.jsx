import "/src/css/game-status-hud.css";
import ticket from "/src/assets/general-icons/ticket.svg";
import resetIcon from "/src/assets/general-icons/reset.svg";
import useIsMobile from "/src/hooks/useIsMobile";

function GameStatusHud({ earnedTicketParts, reset, consumeTicket }) {
  const isMobile = useIsMobile();
  const fullTickets = Math.floor(earnedTicketParts / 3);
  
  return (
    <div className="game-status-hud">
      <div className="tickets" onClick={consumeTicket}>
        { 
          !isMobile ? (
            Array(fullTickets).fill().map((_, index) => (
              <img key={index} src={ticket} className="ticket" alt="Ticket" />
            ))
          ) : (
            fullTickets >= 1 && 
            <>
              <img src={ticket} className="ticket" alt="ticket" />
              <div className="ticket-count">{`x ${fullTickets}`}</div>
            </>
          )
        } 
      </div>
      <img src={resetIcon} className="reset" alt="" onClick={reset} />
    </div>
  );
}

export default GameStatusHud;