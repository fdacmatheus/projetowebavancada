"use client";

import { useState } from 'react';
import styles from './CreateTicketModal.module.css';

const CreateTicketModal = ({ onClose, onCreateTicket }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    alunoNome: '',
    alunoDataNascimento: '',
    dataAtendimento: '',
    paiNome: '',
    grauParentesco: '',
    email: '',
    telefone: '',
    solicitadoPor: '',
    questoes: '',
    observacoes: '',
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTicket(formData);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>✖</button>
        <h2 className={styles.modalTitle}>Criar Ticket</h2>
        <div className={styles.progressBar}>
          <div style={{ width: `${(step / 4) * 100}%` }} className={styles.progress} />
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          {step === 1 && (
            <fieldset>
              <legend className={styles.legend}>Informações do Ticket</legend>
              <input
                type="text"
                name="titulo"
                placeholder="Título do ticket"
                value={formData.titulo}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <input
                type="date"
                name="dataAtendimento"
                placeholder="Data de atendimento"
                value={formData.dataAtendimento}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </fieldset>
          )}

          {step === 2 && (
            <fieldset>
              <legend className={styles.legend}>Informações do Aluno</legend>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="alunoNome"
                  placeholder="Nome do aluno"
                  value={formData.alunoNome}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <input
                  type="date"
                  name="alunoDataNascimento"
                  placeholder="Data de nascimento"
                  value={formData.alunoDataNascimento}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset>
              <legend className={styles.legend}>Informações do Pai</legend>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="paiNome"
                  placeholder="Nome do pai"
                  value={formData.paiNome}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <input
                  type="text"
                  name="grauParentesco"
                  placeholder="Grau de parentesco"
                  value={formData.grauParentesco}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
            </fieldset>
          )}

          {step === 4 && (
            <fieldset>
              <legend className={styles.legend}>Informações Adicionais</legend>
              <input
                type="text"
                name="solicitadoPor"
                placeholder="Solicitado por"
                value={formData.solicitadoPor}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <textarea
                name="questoes"
                placeholder="Questões"
                value={formData.questoes}
                onChange={handleChange}
                required
                className={`${styles.input} ${styles.textarea}`}
              />
              <textarea
                name="observacoes"
                placeholder="Observações"
                value={formData.observacoes}
                onChange={handleChange}
                className={`${styles.input} ${styles.textarea}`}
              />
            </fieldset>
          )}

          <div className={styles.buttonGroup}>
            {step > 1 && (
              <button type="button" onClick={handleBack} className={styles.backButton}>
                Voltar
              </button>
            )}
            {step < 4 ? (
              <button type="button" onClick={handleNext} className={styles.nextButton}>
                Próximo
              </button>
            ) : (
              <button type="submit" className={styles.submitButton}>Criar Ticket</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketModal;
