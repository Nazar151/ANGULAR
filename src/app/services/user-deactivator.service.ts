import { Injectable } from '@angular/core';
import {CanDeactivate} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class UserDeactivatorService implements CanDeactivate<any>{

  constructor() {
  }
canDeactivate(): boolean {
    return confirm("leave from users page?")
}
}
