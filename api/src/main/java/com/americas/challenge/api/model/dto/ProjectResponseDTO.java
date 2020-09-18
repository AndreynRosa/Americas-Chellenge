package com.americas.challenge.api.model.dto;

import java.util.ArrayList;

import java.util.List;


import com.americas.challenge.api.model.entity.ProjectRegistrationEntity;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProjectResponseDTO {

    private Integer projectId;
    private String clientName;
    private List<ProjectRegistrationResponseDTO> projectRegistratio;

    public static class ProjectResponseDTOBuilder {

        private Integer projectId;
        private String clientName;
        private List<ProjectRegistrationResponseDTO> projectRegistratio;

        public ProjectResponseDTOBuilder projectRegistratio(List<ProjectRegistrationEntity> regitrations) {
            List<ProjectRegistrationResponseDTO> workRegister = new ArrayList<>();
            regitrations.stream().forEach(register -> {

                workRegister.add(
                        ProjectRegistrationResponseDTO.builder().createByProjectRegistrationEntity(register).build());
            });
            this.projectRegistratio = workRegister;
            return this;
        }

    }

}
