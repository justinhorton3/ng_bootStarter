import { Component, OnInit } from '@angular/core';
import { AppService } from "../../services/app.service";
import { Shipment } from "../../models/shipment.interface";
import { Ping } from "../../models/ping.interface";
import { StompService } from "../../services/stomp.service";


@Component({
    selector: 'aggregate-root',
    templateUrl: './aggregate.component.html',
    styleUrls: ['./aggregate.component.css'],
    providers: [ AppService, StompService ]
})

export class AggregateComponent implements OnInit {

    newShipment: Shipment;
    appService: AppService;
    stompService: StompService;
    title = 'Shipments';
    shipments = [];
    userid = "";

    constructor(appService: AppService, stompService: StompService) {
        this.appService = appService;
        this.stompService = stompService;

        this.getShipments();
        this.getUserid();

        this.stompService.connect('ws://' + window.location.host + '/aggregator/getpings');
        this.stompService.getObservable().subscribe(payload => {
            this.shipments.forEach((item, index) => {
                if(payload.pings && this.shipments[index].id === payload.id){
                    payload.pings.sort(function (a, b) {
                        return new Date(b.pingtime).getTime() - new Date(a.pingtime).getTime();
                    })
                    this.shipments[index].pings = payload.pings;
                }
            });
        });

        this.newShipment = {
            shipid: 'RX11212',
            origin: 'Dallas, TX',
            destination: 'Chicago, IL',
            status: 'In-Transit',
            driver: {
                name: 'Bob Dole',
                phoneNumber: '(479) 820-3323'
            }
        };
    }

    ngOnInit() {    }

    getShipments() {
        this.appService.getShipments().subscribe(shipments => {

            shipments.forEach(function(item){
                if(item.pings) {
                    item.pings.sort(function (a, b) {
                        return new Date(b.pingtime).getTime() - new Date(a.pingtime).getTime();
                    })
                }
                item.newping = {
                    latitude: null,
                    longitude: null,
                    id: item.id,
                    pingtime: new Date().toISOString()
                }
            });
            this.shipments = shipments;

        });
    }

    deleteShipment(id) {
        this.appService.deleteShipment(id)
            .subscribe(res => this.getShipments());
    }

    createShipment(model: Shipment, isValid: boolean){
        this.appService.createShipment(this.newShipment)
            .subscribe(res => this.getShipments());
    }

    createPing(model: Ping, isValid: boolean){
        this.appService.createPing(model)
            .subscribe(res => this.getShipments());
    }

    getUserid() {
        this.appService.getUserId()
            .subscribe(userid => this.userid = userid);
    }
}