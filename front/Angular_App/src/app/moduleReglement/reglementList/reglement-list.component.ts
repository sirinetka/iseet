import { Component, OnInit } from '@angular/core';
import { ReglementService } from '../../services/reglement.service';
import { Reglement } from '../../Modele/reglement.model';

@Component({
  selector: 'app-reglement-list',
  templateUrl: './reglement-list.component.html'
})
export class ReglementListComponent implements OnInit {
  reglements: Reglement[] = [];

  constructor(private reglementService: ReglementService) {}

  ngOnInit(): void {
    this.reglementService.getAll().subscribe(data => {
      this.reglements = data;
    });
  }
}
