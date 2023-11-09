package com.dasol.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.dasol.project.mapper.MainMapper;

@Controller
public class MainController {

  @Autowired
  MainMapper mapper;

  @GetMapping("/")
  public String main() throws Exception {
    
    String test = mapper.select();
    
    return "hello";
  }

}
