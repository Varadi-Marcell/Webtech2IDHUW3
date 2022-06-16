import { Component, OnInit } from '@angular/core';
import {Guitar} from "../model/Guitar";
import {GuitarService} from "../service/guitar.service";

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {
   guitars!: Guitar[];

  constructor(private guitarService: GuitarService) { }

  ngOnInit(): void {
    this.guitarService.getAllGuitars().subscribe(data => this.guitars = data);
  }

  delete(_id: any) {
    this.guitarService.deleteGuitar(_id);
    this.guitarService.getAllGuitars().subscribe(data => this.guitars = data);
    this.ngOnInit();
  }
}
