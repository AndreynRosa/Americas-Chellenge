package com.americas.challenge.api.model.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class projectRegisterWorkRequestDTO {
    
    private Integer projectId;
    private Date date;
    private Double time;

}
