package com.americas.challenge.api.model.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.americas.challenge.api.model.enums.ErrorEnum;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
@Table(name = "project_registration")
public class ProjectRegistrationEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "fk_project_id")
    private ProjectEntity project;

    @ManyToOne
    @JoinColumn(name = "fk_user_email")
    private UserEntity user;

    @Column(name = "worked_hours")
    private Float workedHours;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "create_date")
    private Date createDate;

    public static class ProjectRegistrationEntityBuilder {
        private Integer id;
        private ProjectEntity project;
        private UserEntity user;
        private Float workedHours;
        private Date createDate;

        public ProjectRegistrationEntityBuilder checkUserHasHoleAcess(UserEntity user, ProjectEntity project) {
            user.getRoles().stream().forEach(projectRole -> {
                if (!project.getRoles().contains(projectRole)) {
                    throw new UsernameNotFoundException(ErrorEnum.USERT_NOT_AUTHORIZED.toString());
                }
                return;
            });
            return this;
        }
    }

}
