import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from 'src/app/services/post.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  fullPost: any;

  constructor(private activatedRoute : ActivatedRoute, private postService: PostService) {


    this.activatedRoute.params.subscribe( params=> {

    return this.postService.getPost(params.id).subscribe( value =>  this.fullPost = value)
    })
  }

  ngOnInit(): void {
  }

}
