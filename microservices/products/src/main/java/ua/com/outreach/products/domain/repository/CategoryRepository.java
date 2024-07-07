package ua.com.outreach.products.domain.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ua.com.outreach.products.domain.Category;
import ua.com.outreach.products.domain.Product;

@Repository
public interface CategoryRepository extends CrudRepository<Category, String> { }
