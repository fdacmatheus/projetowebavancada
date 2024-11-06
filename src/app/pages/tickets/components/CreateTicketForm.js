"use client";

import { useState } from 'react';
import styles from './CreateTicketForm.module.css';

const CreateTicketForm = ({ onCreateTicket }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      onCreateTicket({ description });
      setDescription(""); // Limpa o campo de descrição após criar o ticket
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.createTicketForm}>
      <input
        type="text"
        placeholder="Descrição do ticket"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className={styles.createTicketInput}
      />
      <button type="submit" className={styles.createTicketButton}>Criar Ticket</button>
    </form>
  );
};

export default CreateTicketForm;
