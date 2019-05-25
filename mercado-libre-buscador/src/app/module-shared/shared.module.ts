import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
// Pipes
import { ReplacePipe } from './pipes/replace.pipe';

@NgModule({
  declarations: [
    ReplacePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    ReplacePipe
  ]
})
export class SharedModule { }
