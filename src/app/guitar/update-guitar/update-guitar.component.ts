import {Component, NgZone, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Guitar} from "../../model/Guitar";
import {GuitarService} from "../../service/guitar.service";

@Component({
  selector: 'app-update-guitar',
  templateUrl: './update-guitar.component.html',
  styleUrls: ['./update-guitar.component.css']
})
export class UpdateGuitarComponent implements OnInit {

  guitar!: Guitar;
  guitarForm!: FormGroup;

  constructor(private guitarService: GuitarService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              public ngZone:NgZone,
              public router:Router
  ) { }

  ngOnInit(): void {
    this.guitar = this.activatedRoute.snapshot.data['preload'];
    this.guitarForm = this.fb.group({
      brand:  [this.guitar.brand, [Validators.required, Validators.minLength(5)]],
      name:  [this.guitar.name, [Validators.required,Validators.minLength(5)]],
      price:  [this.guitar.price, [Validators.required]],
    });
  }

  onSubmit() {

    if (!this.guitarForm.valid) {
      return false;
    } else {
      return this.guitarService.updateGuitar(this.guitar._id,this.guitarForm.value).subscribe({
        complete: () => {
          console.log('User successfully updated!'),
            this.ngZone.run(() => this.router.navigateByUrl('/guitar'));
        },
        error: (e: any) => {
          console.log(e);
        },
      });
    }
  }
}
