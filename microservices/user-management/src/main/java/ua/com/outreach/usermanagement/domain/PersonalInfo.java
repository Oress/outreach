package ua.com.outreach.usermanagement.domain;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
public class PersonalInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String userId;

    @OneToOne
    private DeliveryAddress defaultDeliveryAddress;

    @OneToMany
    private List<PackageReceiver> packageReceivers;

    @OneToMany
    private List<DeliveryAddress> deliveryAddresses;
}
