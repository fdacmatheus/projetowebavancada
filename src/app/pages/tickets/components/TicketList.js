"use client";

import styles from './TicketList.module.css';

const TicketList = ({ tickets }) => {
  return (
    <div className={styles.ticketList}>
      {tickets.length > 0 ? (
        tickets.map((ticket, index) => (
          <div key={index} className={styles.ticketItem}>
            <p>{ticket.description}</p>
          </div>
        ))
      ) : (
        <p className={styles.noTicketsMessage}>Nenhum ticket encontrado.</p>
      )}
    </div>
  );
};

export default TicketList;
