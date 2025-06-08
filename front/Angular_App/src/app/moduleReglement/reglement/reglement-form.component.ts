import { Component } from '@angular/core';
import { ReglementService } from '../../services/reglement.service';
import { Reglement } from '../../Modele/reglement.model';

@Component({
  selector: 'app-reglement-form',
  templateUrl: './reglement-form.component.html'
})
export class ReglementFormComponent {
  reglement: Reglement = {
    montant: 0,
    dateReglement: new Date().toISOString().substring(0, 10),
    mode: 'VIREMENT',
    factureId: 0,
    referenceTransaction: ''
  };

  constructor(private reglementService: ReglementService) {}

  submit() {
    this.reglementService.save(this.reglement).subscribe(result => {
      alert('Règlement enregistré avec succès !');
    });
  }
}
