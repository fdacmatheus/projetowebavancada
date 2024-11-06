"use client";

import { useState } from 'react';
import styles from './ViewTicketModal.module.css';

const ViewTicketModal = ({ ticket, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>✖</button>
        <h2 className={styles.modalTitle}>Visualizar Ticket</h2>
        <div className={styles.ticketDetails}>
          <p><strong>Título:</strong> {ticket.titulo}</p>
          <p><strong>Data de Abertura:</strong> {ticket.date}</p>
          <p><strong>Status:</strong> {ticket.status}</p>
          <p><strong>Nome do Aluno:</strong> {ticket.alunoNome}</p>
          <p><strong>Data de Nascimento do Aluno:</strong> {ticket.alunoDataNascimento}</p>
          <p><strong>Nome do Pai:</strong> {ticket.paiNome}</p>
          <p><strong>Grau de Parentesco:</strong> {ticket.grauParentesco}</p>
          <p><strong>Email:</strong> {ticket.email}</p>
          <p><strong>Telefone:</strong> {ticket.telefone}</p>
          <p><strong>Solicitado por:</strong> {ticket.solicitadoPor}</p>
          <p><strong>Questões:</strong> {ticket.questoes}</p>
          <p><strong>Observações:</strong> {ticket.observacoes}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewTicketModal;
