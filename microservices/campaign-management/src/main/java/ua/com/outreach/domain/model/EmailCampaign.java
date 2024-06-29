package ua.com.outreach.domain.model;

import jakarta.persistence.*;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class EmailCampaign {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private UUID uid;

    private String slug;

    private String title;

    private String description;

    @OneToOne
    private AbTesting activeAbTesting;

    @OneToMany
    List<AbTesting> abTestingList = new ArrayList<>();

    private Boolean isActive;

    @Column(name = "created_at")
    private Instant createdAt;
}
