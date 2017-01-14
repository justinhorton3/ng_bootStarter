package com.jbhunt.domain;

import org.springframework.data.annotation.Id;
import lombok.*;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Shipment {
    @Id
    private String id;
    private String shipid;
    private String origin;
    private String destination;
    private String status;
    private String userid;
    private List<Ping> pings;
    private Driver driver;
}
