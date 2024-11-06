import api from './api';

export const criarRequisicao = (data) => api.post('/requisicoes', data);
export const getRequisicoes = () => api.get('/requisicoes');
export const aprovarRequisicao = (id) => api.put(`/requisicoes/${id}/aprovar`);
export const rejeitarRequisicao = (id) => api.put(`/requisicoes/${id}/rejeitar`);
