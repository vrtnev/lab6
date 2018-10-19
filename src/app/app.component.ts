import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sensors = ["Датчик 1", "Датчик 2"];
  sensorActive = [false, true];

  constructor() {
    for (let i = 0; i < this.sensors.length; i++) {
      if (Math.round(Math.random()) == 1) {
        this.sensorActive[i] = true;
      } else {
        this.sensorActive[i] = false;
      }
    }
  }

  onDeleteSensor(i) {
    this.sensors.splice(i,1);
    this.sensorActive.splice(i,1);
  }

  addSensor(name: string, active) {
    this.sensors.push(name);
    let tmp;
    if (active=='true')
      tmp = true;
    else
      tmp = false;
    this.sensorActive.push(tmp);
  }

}
