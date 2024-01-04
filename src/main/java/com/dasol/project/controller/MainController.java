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
    
    return "joonggonara";
  }
  
  
  @GetMapping("/hello")
  public String hello() throws Exception {
    
    String test = mapper.select();
    
    return "hello";
  }
  
  @GetMapping("/join")
  public String join() throws Exception {
    
    String join = mapper.select();
    
    return "join";
  }
  
  @GetMapping("/article")
  public String article() throws Exception {
    
    String article = mapper.select();
    
    return "article";
  }
  
  @GetMapping("/joonggonara")
  public String joonggonara() throws Exception {
    
    String joonggonara = mapper.select();
    
    return "joonggonara";

  }
  
  @GetMapping("/writeBoard")
  public String writeBoard() throws Exception {
    
    String writeBoard = mapper.select();
    
    return "writeBoard";

  }
  
}
