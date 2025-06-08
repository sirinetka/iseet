import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviseService, ConversionResponse, Devise } from '../services/devise.service';
@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.css'
})
export class DevisComponent implements OnInit {
  devises: Devise[] = [];
  form: FormGroup;
  result: ConversionResponse | null = null;

  constructor(
    private deviseService: DeviseService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      montant: [null, Validators.required],
      deviseSource: ['', Validators.required],
      deviseCible: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.deviseService.getDevises().subscribe(res => this.devises = res);
  }

  convert(): void {
    if (this.form.invalid) return;

    this.deviseService.convertirMontant(this.form.value).subscribe({
      next: res => this.result = res,
      error: err => alert('Erreur de conversion: ' + err.message)
    });
  }
}
