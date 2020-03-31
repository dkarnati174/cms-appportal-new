import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {FeatureService} from '../../../feature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  public features = [];

  constructor(private _featureService:FeatureService) {}

  ngOnInit():void {

    this._featureService.getFeatures().subscribe(data => this.features = data);
      /**/


  }

}
