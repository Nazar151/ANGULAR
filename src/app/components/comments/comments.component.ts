import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private activatedRout : ActivatedRoute) {
    this.activatedRout.data.subscribe(value => console.log(value.xxx))
  }

  ngOnInit(): void {
  }

}
