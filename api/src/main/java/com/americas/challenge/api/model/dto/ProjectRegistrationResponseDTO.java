package com.americas.challenge.api.model.dto;

import java.util.ArrayList;
import java.util.Date;
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
public class ProjectRegistrationResponseDTO {

    private Integer id;
    private Integer projectId;
    private Date date;
    private Float workedHours;
    private String userName;

    public static class ProjectRegistrationResponseDTOBuilder {
        private Integer id;
        private Integer projectId;
        private Date date;
        private Float workedHours;
        private String userName;

        public ProjectRegistrationResponseDTOBuilder createByProjectRegistrationEntity(ProjectRegistrationEntity entity) {
            this.id = entity.getId();
            this.projectId = entity.getProject().getId();
            this.date = entity.getCreateDate();
            this.workedHours = entity.getWorkedHours();
            this.userName = entity.getUser().getEmail();
            return this;
        }
    }

}
