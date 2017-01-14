package com.jbhunt.controller;

import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping(path = "/user")
public class UserController {

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<String> getUser(@RequestHeader(value="X-MS-CLIENT-PRINCIPAL-NAME", defaultValue="local") String principalName) {
      if (principalName != null ) {
        return ResponseEntity.ok().cacheControl(CacheControl.noCache()).body(principalName);
      } else {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).cacheControl(CacheControl.noCache()).body("Invalid User Principal");
      }
    }
}

