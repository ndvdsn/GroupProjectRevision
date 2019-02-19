package com.codeclan.restaurantService.repositories.RestTable;

import com.codeclan.restaurantService.models.RestTable;
import com.codeclan.restaurantService.projections.EmbedInfoInTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedInfoInTable.class)
public interface RestTableRepository extends JpaRepository <RestTable, Long>, RestTableRepositoryCustom {
}
