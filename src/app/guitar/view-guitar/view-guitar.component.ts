import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Guitar} from "../../model/Guitar";

@Component({
  selector: 'app-view-guitar',
  templateUrl: './view-guitar.component.html',
  styleUrls: ['./view-guitar.component.css']
})
export class ViewGuitarComponent implements OnInit {
  guitar!: Guitar;

  constructor(private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.guitar = this.activatedRoute.snapshot.data['preload'];

  }


}
