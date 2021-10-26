package dto.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "DBUSER") //WATCH out  USER is a reserved name!
public class User {

    @Id @JsonIgnore
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @Column(name = "first_name")
    private String first_name;

}