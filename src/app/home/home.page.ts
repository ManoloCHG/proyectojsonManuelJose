import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { map }  from  'rxjs/operators';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  memes: any;
  
  constructor(private httpClient: HttpClient) {
    this.memes = this.httpClient.get('https://api.myjson.com/bins/l8oyc').pipe(map(res => res['memes']));

  }
 
}

