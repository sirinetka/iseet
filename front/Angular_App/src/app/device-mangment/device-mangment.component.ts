import { Component, OnInit } from '@angular/core';
import { DeviseService, Devise } from '../services/devise.service';
import { FormBuilder, FormGroup ,FormControl } from '@angular/forms';
@Component({
  selector: 'app-device-mangment',
  templateUrl: './device-mangment.component.html',
  styleUrl: './device-mangment.component.css'
})
export class DeviceMangmentComponent implements OnInit {
  devises: Devise[] = [];
  editForm: { [key: string]: FormGroup } = {};

  constructor(
    private deviseService: DeviseService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadDevises();
  }

  loadDevises() {
    this.deviseService.getDevises().subscribe(devises => {
      this.devises = devises;
      devises.forEach(devise => {
        this.editForm[devise.code] = this.fb.group({
          taux: [devise.tauxChange]
        });
      });
    });
  }

  updateTaux(code: string) {
    const taux = this.editForm[code].value.taux;
    this.deviseService.updateTaux(code, taux).subscribe(() => {
      alert(`Taux mis à jour pour ${code}`);
      this.loadDevises();
    });
  }
  getTauxControl(code: string): FormControl {
  return this.editForm[code].get('taux') as FormControl;
}
}

