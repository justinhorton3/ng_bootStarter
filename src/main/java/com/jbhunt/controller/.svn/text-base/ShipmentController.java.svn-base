package com.jbhunt.controller;

import com.jbhunt.domain.Ping;
import com.jbhunt.domain.Shipment;
import com.jbhunt.events.EventHub;
import com.jbhunt.repository.ShipmentRepository;
import com.microsoft.azure.servicebus.ServiceBusException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(path = "/shipments")
public class ShipmentController {

  @Autowired
  private ShipmentRepository shipmentRepository;

  @RequestMapping(method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity<Shipment> postShipment(@RequestHeader(value = "X-MS-CLIENT-PRINCIPAL-NAME", defaultValue="local") String principalName, @RequestBody Shipment shipment) {
    shipment.setUserid(principalName);
    try {
      EventHub.send(shipment, "create");
    } catch (IOException | ServiceBusException e) {
      return ResponseEntity.badRequest().cacheControl(CacheControl.noCache()).body(shipment);
    }
    return ResponseEntity.ok().cacheControl(CacheControl.noCache()).body(shipmentRepository.save(shipment));
  }

  @RequestMapping(method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity<List<Shipment>> getShipments(@RequestHeader(value = "X-MS-CLIENT-PRINCIPAL-NAME", defaultValue="local") String principalName) {
    return ResponseEntity.ok().cacheControl(CacheControl.noCache()).body(shipmentRepository.findByUserid(principalName));
  }

  @RequestMapping(method = RequestMethod.DELETE, path="{id}")
  @ResponseBody
  public ResponseEntity<Shipment> deleteShipment(@RequestHeader(value = "X-MS-CLIENT-PRINCIPAL-NAME", defaultValue="local") String principalName, @PathVariable String id) {
    Shipment shipment = shipmentRepository.findByIdAndUserid(id, principalName);
    shipmentRepository.delete(shipment);

    try {
      EventHub.send(shipment, "delete");
    } catch (IOException | ServiceBusException e) {
      return ResponseEntity.badRequest().cacheControl(CacheControl.noCache()).body(shipment);
    }

    return ResponseEntity.ok().cacheControl(CacheControl.noCache()).body(shipment);
  }

  @RequestMapping(method = RequestMethod.GET, path="{id}")
  @ResponseBody
  public ResponseEntity<Shipment> getShipment(@RequestHeader(value = "X-MS-CLIENT-PRINCIPAL-NAME", defaultValue="local") String principalName, @PathVariable String id) {
    return ResponseEntity.ok().cacheControl(CacheControl.noCache()).body(shipmentRepository.findByIdAndUserid(id, principalName));
  }
}

