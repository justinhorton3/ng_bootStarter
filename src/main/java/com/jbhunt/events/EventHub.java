package com.jbhunt.events;


import java.io.IOException;
import com.google.gson.Gson;
import com.jbhunt.domain.Shipment;
import com.microsoft.azure.eventhubs.*;
import com.microsoft.azure.servicebus.*;

public class EventHub {

  final static String namespaceName = "aggregator-events";
  final static String eventHubName = "aggregator-events";
  final static String sasKeyName = "aggregator";
  final static String sasKey = "OG5G3MNrGunkWeWZmQTeHQVQ9evi1+Y4TX0dVXEcH8c=";
  final static ConnectionStringBuilder connStr = new ConnectionStringBuilder(namespaceName, eventHubName, sasKeyName, sasKey);



  public static void send(Object object, String event) throws IOException, ServiceBusException {
    Gson gson = new Gson();
    byte[] payloadBytes = gson.toJson(new Event(event, object)).getBytes("UTF-8");
    EventData sendEvent = new EventData(payloadBytes);

    EventHubClient ehClient = EventHubClient.createFromConnectionStringSync(connStr.toString());
    ehClient.sendSync(sendEvent);
  }
}
