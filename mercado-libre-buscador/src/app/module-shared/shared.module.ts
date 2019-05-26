import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// Pipes
import { FormatCurrencyPipe } from './pipes/formatCurrency.pipe';

@NgModule({
  declarations: [
    FormatCurrencyPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FormatCurrencyPipe
  ]
})
export class SharedModule { }
