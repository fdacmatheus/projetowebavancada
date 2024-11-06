"use client";

import { useState } from 'react';
import styles from './TicketTable.module.css';
import ViewTicketModal from './ViewTicketModal';

const TicketTable = ({ tickets }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCloseModal = () => {
    setSelectedTicket(null);
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>
        <p>Tenha acesso aos tickets e responda</p>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Data de abertura</th>
            <th>Ticket</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.date}</td>
              <td>{ticket.titulo}</td>
              <td>
                <span className={styles.status}>{ticket.status}</span>
              </td>
              <td>
                <button
                  className={styles.viewButton}
                  onClick={() => handleViewTicket(ticket)}
                >
                  👁️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedTicket && (
        <ViewTicketModal ticket={selectedTicket} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default TicketTable;
