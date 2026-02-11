import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-valuechanges-reactive-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './valuechanges-reactive-form.html',
  styleUrl: './valuechanges-reactive-form.css',
})
export class ValuechangesReactiveForm implements OnInit {

  myForm!: FormGroup;

  myDisplayTitle: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialForm();
    this.myForm.get('title')?.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((_resp: any) => {
      this.myDisplayTitle = _resp;
    })
  }

  initialForm() {
    this.myForm = this.fb.group({
      title: this.fb.control('', Validators.required)
    })
  }
}
