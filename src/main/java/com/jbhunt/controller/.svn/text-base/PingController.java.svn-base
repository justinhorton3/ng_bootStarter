package com.jbhunt.controller;

import com.jbhunt.domain.Shipment;
import com.jbhunt.domain.Ping;
import com.jbhunt.events.EventHub;
import com.jbhunt.repository.ShipmentRepository;
import com.microsoft.azure.servicebus.ServiceBusException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/pings")
public class PingController {

  @Autowired
  private ShipmentRepository shipmentRepository;

  @Autowired
  private SimpMessagingTemplate messagingTemplate;

  @RequestMapping(method = RequestMethod.PUT)
  @ResponseBody
  public ResponseEntity<Shipment> putPingByShipid(@RequestHeader(value = "X-MS-CLIENT-PRINCIPAL-NAME", defaultValue="local") String principalName, @RequestBody Ping ping, @RequestParam String id) {
    Shipment shipment = shipmentRepository.findByIdAndUserid(id, principalName);

    if(shipment != null) {
      if (shipment.getPings() != null) {
        shipment.getPings().add(ping);
      } else {
        List pings = new ArrayList<Ping>();
        pings.add(ping);
        shipment.setPings(pings);
      }

      shipmentRepository.save(shipment);

      try {
        EventHub.send(shipment, "update");
      } catch (IOException | ServiceBusException e) {
        return ResponseEntity.badRequest().cacheControl(CacheControl.noCache()).body(shipment);
      }

      messagingTemplate.convertAndSend("/topic/shipments", shipment);
      return ResponseEntity.ok().cacheControl(CacheControl.noCache()).body(shipment);
    } else {
      return ResponseEntity.badRequest().cacheControl(CacheControl.noCache()).body(shipment);
    }
  }
}

