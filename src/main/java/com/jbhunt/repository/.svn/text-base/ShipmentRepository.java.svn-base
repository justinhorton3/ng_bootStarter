package com.jbhunt.repository;

import java.util.List;

import com.jbhunt.domain.Shipment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

public interface ShipmentRepository extends MongoRepository<Shipment, String> {
  List<Shipment> findByUserid(@Param("userid") String userid);
  Shipment findByIdAndUserid(@Param("id") String id, @Param("userid") String userid);
  Shipment findByShipidAndUserid(@Param("shipid") String shipid, @Param("userid") String userid);
}
