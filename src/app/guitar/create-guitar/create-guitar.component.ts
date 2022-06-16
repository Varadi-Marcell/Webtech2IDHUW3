import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {GuitarService} from "../../service/guitar.service";

@Component({
  selector: 'app-create-guitar',
  templateUrl: './create-guitar.component.html',
  styleUrls: ['./create-guitar.component.css']
})
export class CreateGuitarComponent implements OnInit {

  guitarForm!: FormGroup;

  constructor(private guitarService: GuitarService,
              private fb: FormBuilder,
              private ngZone: NgZone,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.guitarForm = this.fb.group({
      brand:  ['', [Validators.required, Validators.minLength(5)]],
      name:  ['', [Validators.required,Validators.minLength(5)]],
      price:  ['', [Validators.required]],
    });
  }

  onSubmit(){
    if(!this.guitarForm.valid){
      return false;
    }else{
      return this.guitarService
        .createGuitar(this.guitarForm.value)
        .subscribe({
          complete: () => {
            this.ngZone.run(() => this.router.navigateByUrl('/guitar'));
          }
        })
    }
  }

}
