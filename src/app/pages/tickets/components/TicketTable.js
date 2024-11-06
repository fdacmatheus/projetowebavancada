"use client";

import styles from './TicketTable.module.css';

const TicketTable = ({ tickets }) => {
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
              <td>{ticket.description}</td>
              <td>
                <span className={styles.status}>{ticket.status}</span>
              </td>
              <td>
                <button className={styles.viewButton}>👁️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
