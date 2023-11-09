package com.dasol.project.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface MainMapper {
  String select() throws Exception;
}
