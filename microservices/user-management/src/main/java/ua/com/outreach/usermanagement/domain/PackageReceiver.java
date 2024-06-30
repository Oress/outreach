package ua.com.outreach.usermanagement.domain;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class PackageReceiver {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String title;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "phone_number")
    private String phoneNumber;
}
