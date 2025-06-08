export interface Reglement {
  id?: number;
  montant: number;
  dateReglement: string;
  mode: 'VIREMENT' | 'CARTE' | 'ESPECES';
  factureId: number;
  referenceTransaction?: string;
}
