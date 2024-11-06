"use client";

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TicketTable from './components/TicketTable';
import CreateTicketModal from './components/CreateTicketModal';
import styles from './TicketsPage.module.css';

const TicketsPage = () => {
  const [tickets, setTickets] = useState([
    {
      titulo: "Aluno agressivo",
      date: "16/10/2024",
      status: "Aberto",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateTicket = (newTicket) => {
    setTickets((prevTickets) => [...prevTickets, { 
      titulo: newTicket.titulo,
      date: newTicket.dataAtendimento,
      status: "Aberto"
    }]);
  };

  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Tickets</h2>
          <button onClick={() => setIsModalOpen(true)} className={styles.createButton}>
            Criar Ticket
          </button>
        </div>
        <TicketTable tickets={tickets} />
        {isModalOpen && (
          <CreateTicketModal
            onClose={() => setIsModalOpen(false)}
            onCreateTicket={handleCreateTicket}
          />
        )}
      </div>
    </div>
  );
};

export default TicketsPage;
