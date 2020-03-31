import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {IFeature} from './feature';
@Injectable({
  providedIn: 'root'
})

export class FeatureService {
  private _url: string ="http://drupal8theming.dd:8083/features";

    //"/assets/data/features.json";
constructor (private http:HttpClient){

}

  getFeatures(): Observable<IFeature[]> {
    return this.http.get<IFeature[]>(this._url);
  }
}
