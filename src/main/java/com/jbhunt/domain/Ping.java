package com.jbhunt.domain;

import org.springframework.data.annotation.Id;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Ping {
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date pingtime;
    private Float latitude;
    private Float longitude;
}
