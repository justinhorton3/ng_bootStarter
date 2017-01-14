import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class AppService {
  constructor(private http: Http) {
      this.http = http;
  }

  getShipments(): Observable<any> {
    return this.http.get("/aggregator/shipments").map(res => JSON.parse(res.text()))
  }
  deleteShipment(id): Observable<any> {
    return this.http.delete("/aggregator/shipments/" + id).map(res => res.text())
  }
  createShipment(shipment): Observable<any> {
    return this.http.post("/aggregator/shipments", shipment).map(res => res.text())
  }
  createPing(ping): Observable<any> {
    return this.http.put("/aggregator/pings?id=" + ping.id,
      {latitude: ping.latitude, longitude: ping.longitude, pingtime: new Date().toISOString()
    }).map(res => res.text())
  }

  getUserId(): Observable<any> {
    return this.http.get("/aggregator/user").map(res => res.text())
  }
}
