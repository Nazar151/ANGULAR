import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PostActivatorService implements CanActivate {

  constructor() {
  }
  canActivate(): boolean {
    return confirm("go to posts?")
  }
}
