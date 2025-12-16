const validateReply = require("../../../../utils/validateerror");

const { RailwayPowerSupplyConfiguration  , Sequelize } = require("../../../../models");

const { Op } = require("sequelize");

/**
 * Generic validation middleware for Sequelize models
 * @param {object} model - Sequelize model (e.g., RailwayPowerSupplyConfiguration)
 * @param {object} validationRule - Validation rules
 * @param {array} uniqueFields - Fields that must be unique
 */


// const validateModelData = (model, validationRule, uniqueFields = []) => {
//   return async (req, res, next) => {
//     try {
//       // Step 1: Basic validation
//       const param = await validateReply.checkParam(req, res, next);
//       if (param === "failed") {
//         return res.status(400).json({ message: "Invalid ID format" });
//       }

//       await validateReply.validateReply(req.body, validationRule, res, next);

//       // Step 2: Unique field check
//       for (const field of uniqueFields) {
//         const value = req.body[field];
//         if (!value) continue;

//         const whereClause = { [field]: value };

//         // If updating (PUT/PATCH), ignore current record
//         if (req.params.id) {
//           whereClause.id = { [Op.ne]: req.params.id };
//         }

//         const exists = await model.findOne({ where: whereClause });
//         if (exists) {
//           return res.status(400).json({
//             message: `${field} must be unique. "${value}" already exists.`,
//           });
//         }else {
//         return res.status(400).json({
//           message: "success"
//         });
//         }
//       }

//       next();
//     } catch (error) {
//       console.error("Validation error:", error);
//       res.status(500).json({ message: "Server error during validation." });
//     }
//   };
// };

// module.exports = validateModelData;

const claimValidate =   async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    title: "required|string",
    description: "string",
    measures_taken: "required|string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const challengeValidate = async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    title: "required|string",
    description: "string",
    measures_taken: "required|string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const constructionMethodValidate = async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    construction_method_id: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const railwayMaintenanceEnvironmentalAndOtherFactorValidate = async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    facility_name: "required|string",
    environmental_compliance_measures: "string",
    noise_reduction_measures: "string",
    sustainable_design_features: "string",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const railwayMaintenanceFacilityAndSecurityValidate = async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    facility_name: "required|string",
    fire_safety_measures: "string",
    ventilation_and_exhaust_system_availability: "boolean",
    security_measures: "string",
    remark: "string"  
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const railwayMaintenanceFacilityScheduleAndProcedureValidate = async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    facility_name: "required|string",
    maintenance_schedules_and_routines_availability: "boolean",
    procedures_for_planned_and_preventive_maintenance_availability: "boolean",
    documentation_and_record_keeping_practices_availability: "boolean",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const railwayMaintenanceWorkforceAndFacilityStaffValidate = async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    facility_name: "required|string",
    maintenance_personnel_number: "integer",
    staff_facilities: "boolean",
    training_facilities_and_resources: "boolean",
    trainers_instructors_number: "integer",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const railwayMaintenanceFacilityInfrastructureAndUtilityValidate = async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    facility_name: "required|string",
    rail_tracks_and_turnout_availability: "boolean",
    fueling_and_refueling_facility_availability: "boolean",
    compressed_air_system_availability: "boolean",
    remarks: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};



const railwayMaintenanceFacilityEquipmentAndToolValidate = async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format", 
    });
  }
  const validationRule = {
    project_id: "required|string",
    facility_name: "required|string",
    maintenance_equipment_and_tool_available_type: "string",
    hoists_cranes_and_lifting_equipment: "boolean",
    diagnostic_and_testing_equipment: "string",
    tools_and_machinery_specific_to_maintenance_activities: "string",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const railwayMaintenanceFacilityLayoutAndDesignValidate = async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format", 
    });
  }
  const validationRule = {
    project_id: "required|string",
    facility_name: "required|string",
    facility_layout_and_dimension: "string",
    maintenance_bays_number_and_size: "string",
    spare_parts_and_equipment_storage_areas: "string",
    office_and_administrative_areas_availability: "boolean",
    remark: "string" 
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const railwayMaintenanceFacilityTypeAndPurposeValidate = async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    facility_name: "string",
    maintenance_activities_conducted: "string",
    remark: "string" };
  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayPowerSupplyEnvironmentalAndOtherFactorValidate = async(req, res, next) => {  
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format",
    });
  } 
  const validationRule = {      
    project_id: "required|string",
    railway_station_platform_layout_id: "required|string",
    environmental_compliance_measures: "string",
    remark: "string"
};
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const railwayPowerSupplySafetyAndComplianceValidate =  async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed"){
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string",
    railway_station_platform_layout_id: "required|string",
    safety_measures_and_protocols: "boolean", 
    compliance_with_electrical_safety_standards_and_regulations: "boolean",
    remark: "string"
};
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const railwayPowerSupplyMaintenanceAndTestingValidate = async(req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if(param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_station_platform_layout_id: "required|string",
    remark: "string" };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const railwayPowerDistributionValidate =  async (req, res, next) => { 
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") { 
    return res.status(400).json({ 
      message: "Invalid ID format", 
    }); 
  } 
  const validationRule = { 
    project_id: "required|string", 
    railway_station_platform_layout_id: "required|string", 
    remark: "string"
};
  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwayPowerSupplyConfigurationValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    power_supply_system_type_id: "required|string",
    voltage_level_and_frequency: "string",
    power_supply_capacity_and_load_requirements: "string",
    remark: "string"
  };

  // `remark` is unique
// const railwayPowerSupplyConfigurationValidate = validateModelData(
//   RailwayPowerSupplyConfiguration,
//   validationRule,
//   ["remark"]
// );
  

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwayPowerSubstationsAndEquipmentValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_station_platform_layout_id: "required|string",
    substation_capacity_and_equipment_specifications: "string",
    remark: "string"
  };  
   await validateReply.validateReply(req.body, validationRule, res, next);
}   

const railwayStationPlatformEnvironmentalAndOtherFactorValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_station_platform_layout_id: "required|string",
    environmental_compliance_measures: "string",
    noise_and_vibration_control_measures: "string",
    sustainable_design_features: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayStationPlatformPassengerFlowAndCapacityValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_station_platform_layout_id: "required|string",
    passenger_flow_during_peak_hour: "string",
    minimum_passenger_flow: "string",
    capacity_assessment: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayStationPlatformSurfaceAndFinishValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_station_platform_layout_id: "required|string",
    flooring_materials: "string",
    surface_treatment: "string",
    paint_or_color_schemes: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayStationPlatformSafetyAndSecurityValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_station_platform_layout_id: "required|string",
    platform_safety_and_security: "string",
    fire_safety_measures: "string",
    surveillance_systems: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayStationPlatformSignageAndWayFindingValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_station_platform_layout_id: "required|string",
    signage_type_and_placement: "string",
    accessibility_signage: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayStationPlatformStructuralElementValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_station_platform_layout_id: "required|string",
    materials_used: "string",
    roofing_type_and_design: "string",
    lighting_fixtures: "boolean",
    accessibility_features: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayStationPlatformFacilityValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_station_platform_layout_id: "required|string",
    waiting_areas_seating_capacity: "boolean",
    ticketing_facilities_availability: "boolean",
    restrooms_and_amenities_availability: "boolean",
    passenger_information_system: "string",
    accessibility_features: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayStationPlatformLayoutValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    platforms_number: "integer",
    platform_configuration: "string",
    platform_length: "numeric",
    platform_width: "numeric",
    accessibility_features: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwayVehicleLoadAndCargoSpecificationValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_vehicle_identification_id: "required|string",
    load_capacity_and_weight_limits: "string",
    cargo_restrictions_or_special_requirements: "string",
    coupling_and_uncoupling_procedures: "boolean",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwayVehicleInteriorAndPassengerAmenityValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_vehicle_identification_id: "required|string",
    seating_capacity: "integer",
    passenger_amenities_availability: "string",
    accessibility_features_for_passengers_with_disabilities: "boolean",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayVehicleSafetyAndComplianceValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_vehicle_identification_id: "required|string",
    safety_features_and_systems: "string",
    comply_with_regulatory_standards_and_certifications: "boolean",
    incident_records_number: "integer",
    action_taken_to_accidents: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayVehicleOperationalPerformanceValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_vehicle_identification_id: "required|string",
    fuel_or_energy_consumption: "string",
    mileage_or_operating_hours: "string",
    reliability_and_availability: "string",
    performance_indicators: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwayVehicleMaintenanceAndInspectionValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_vehicle_identification_id: "required|string",
    maintenance_history_records: "string",
    vehicle_weight_and_load_capacity: "string",
    maximum_speed: "numeric",
    braking_system_type: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayVehicleSpecificationValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_vehicle_identification_id: "required|string",
    vehicle_dimensions: "string",
    vehicle_weight_and_load_capacity: "string",
    maximum_speed: "numeric",
    braking_system_type: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayVehicleIdentificationValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    vehicle_identification_number: "string",
    vehicle_type: "string",
    manufacturer_supplier_name: "string",
    manufacturer_supplier_address: "string",
    manufacture_year: "integer",
    ownership_or_leasing_details: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayEnvironmentalAndOtherFactorValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    environmental_compliance_measures: "boolean",
    environmental_impact_assessment: "boolean",
    data_recording_date: "date",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayCommunicationSystemSafetyAndComplianceValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    safety_measures_and_protocols_done: "boolean",
    compliance_with_signaling_and_communication_standards: "boolean",
    incident_or_accident_records: "boolean",
    incident_date: "date",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwayCommunicationSystemMaintenanceAndTestingValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    scheduled_maintenance_activities: "string",
    inspections: "boolean",
    recent_maintenance_records_and_dates: "string",
    testing_and_verification_procedures_prepared: "boolean",
    maintenance_contracts_or_agreements_made: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwaySystemConditionAssessmentValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    system_condition_rating_or_assessment: "string",
    defect_presence: "boolean",
    system_performance_indicators: "string",
    power_supply_systems_and_communication: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayCommunicationSystemValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    communication_system_type: "string",
    communication_system_protocols_or_standards: "string",
    communication_system_components: "string",
    signaling_system_components: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwaySignalingSystemValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    signaling_system_type: "string",
    signaling_system_manufacturer_or_supplier_name: "string",
    signaling_system_manufacturer_or_supplier_phone: "string",
    signaling_system_components: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwayFasteningSystemEnvironmentalFactorValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    environmental_compliance_measures: "string",
    environmental_impact_assessment: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayFasteningSystemMaintenanceAndReplacementValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    scheduled_maintenance_activities: "string",
    recent_maintenance_records_and_dates: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwayFasteningSystemConditionAssessmentValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    inspection_date: "date",
    fastening_system_condition_rating: "string",
    defect_presence: "string",
    fastening_system_stability_and_alignment: "string",
    rail_fastening_model_number: "string",
    rail_fastening_needed_quantity: "integer",
    rail_fastening_expected_lifespan: "integer",
    rail_fastening_availability: "boolean",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwayFasteningSystemCharacteristicValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    used_fastening_system_type: "string",
    fastening_system_manufacturer_supplier: "string",
    fastening_system_specifications: "string",
    rail_clips_or_clamps_details: "string",
    bolts_and_nuts_specifications: "string",
    other_fastening_system: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwaySleeperEnvironmentalAndOtherFactorValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    environmental_compliance_measures: "string",
    environmental_impact_assessment: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}


const railwaySleeperFasteningSystemValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    used_fastening_systems_type: "string",
    fastener_condition_assessment: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwaySleeperMaintenanceAndReplacementValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    scheduled_maintenance_activities: "string",
    recent_maintenance_date: "date",
    inspection_reports: "string",
    sleeper_replacement_history: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwaySleeperConditionAssessmentValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    inspection_dates: "date",
    sleeper_condition_rating: "string",
    defect_presence: "string",
    sleeper_stability_and_alignment: "string",
    sleepers_required_number: "integer",
    supplier_name: "string",
    supplier_phone: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwaySleeperCharacteristicValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    sleeper_type: "string",
    sleeper_size_and_dimensions: "numeric",
    sleepers_distance_between_pairs: "string",
    sleeper_material_specification: "string",
    sleeper_spacing: "string",
    spacing_between: "numeric",
    sleeper_shape: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwaySubBallastEnvironmentalAndOtherFactorValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    environmental_compliance_measures: "string",
    environmental_impact_assessment: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwaySubBallastDrainageAndWaterManagementValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    drainage_condition_assessment: "string",
    drainage_infrastructure_type: "string",
    water_management_measures: "string",
    drainage_infrastructure_length: "numeric",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwaySubBallastMaintenanceAndRenewalValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    scheduled_maintenance_activities: "string",
    sub_ballast_renewal_history: "string",
    recent_maintenance_dates: "date",
    inspection_reports_findings: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwaySubBallastConditionAssessmentValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    sub_ballast_material_type_id: "required|string",
    inspection_dates: "date",
    sub_ballast_condition_rating: "string",
    cracking_observations: "string",
    erosion_issues: "string",
    unwanted_vegetation_presence: "string",
    testing_frequency_per_year: "integer",
    sub_ballast_resistance: "string",
    sub_ballast_degradation_rate: "string",
    drainage_performance: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwaySubBallastMaterialTestValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    sub_ballast_material_type_id: "required|string",
    testing_method_used: "string",
    sampling_method: "string",
    sample_size: "numeric",
    material_source: "string",
    sieve_analysis_results: "string",
    supplier: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwaySubBallastMaterialValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    sub_ballast_material_type_id: "required|string",
    layer_thickness: "numeric",
    layer_depth: "numeric",
    density: "numeric",
    moisture_content: "numeric",
    method_used_for_compaction: "string",
    compaction_density: "numeric",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayBallastEnvironmentalAndOtherFactorValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    environmental_compliance_measures: "string",
    environmental_impact_assessment: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwayBallastDrainageAndWaterManagementValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    drainage_condition_assessment: "string",
    drainage_infrastructure_type: "string",
    water_management_measures: "string",
    drainage_infrastructure_length: "numeric",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayBallastMaintenanceAndRenewalValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    scheduled_maintenance_activities: "required|in:Tamping,Cleaning,Routine Maintenance,Corrective Maintenance,Other",
    recent_maintenance_dates: "date",
    inspection_reports_findings: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayBallastConditionAssessmentValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    inspection_dates: "date",
    ballast_condition_rating: "required|in:Excellent,Good,Fair,Poor",
    fouling_presence: "required|in:Fines,Debris,Sediments,Siltation,Other",
    ballast_degradation_indicators: "required|in:Breakage,Crack,Other",
    ballast_quality_testing_method: "required|in:Gradation Test,Soundness Test,Compaction Test,Other",
    testing_frequency: "integer",
    ballast_resistance: "string",
    ballast_degradation_rate: "required|in:Excellent,Good,Fair,Poor",
    drainage_performance: "required|in:Excellent,Good,Fair,Poor",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}

const railwayBallastMaterialSpecificationValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    ballast_material_type_id: "required|string",
    specific_gravity: "numeric",
    porosity: "numeric",
    water_absorption: "numeric",
    shape: "string",
    average_particle_length: "numeric",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayBallastMaterialDataValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    ballast_material_type_id: "required|string",
    particle_size_distribution_grading: "string",
    ballast_used_quantity: "numeric",
    ballast_source_id: "required|string",
    ballast_material_size: "numeric",
    ballast_layer_thickness: "numeric",
    compaction_method_id: "required|string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayBallastValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_line_section_name: "required|string",
    railway_ballast_name: "required|string",
    ballast_id_no: "string",
    ballast_construction_cost: "numeric",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayTrackSafetyValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_track_safety_measures_id: "required|string",
    track_inspection_frequency_id: "required|string",
    is_compliant_with_safety_regulations_standards: "boolean",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayTrackRehabilitationOrRenewalValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    track_renewal_history: "string",
    plans_or_schedules: "string",
    rehabilitation_renewal_methods_used_id: "required|string",
    rehabilitation_renewal_types: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayTrackMaintenanceAndInspectionValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    scheduled_maintenance_activity_id: "required|string",
    maintenance_method: "string",
    track_maintenance_frequency_id: "required|string",
    recent_maintenance_date: "date",
    inspection_reports_and_findings: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
}
const railwayTrackConditionAssessmentValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    alignment: "string",
    gradient: "numeric",
    curvature_radius: "numeric",
    cant: "string",
    track_gauge: "string",
    cross_level: "string",
    track_surface_profile: "string",
    twist: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const railwayTrackGeometryDataValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    alignment: "string",
    gradient: "numeric",
    curvature_radius: "numeric",
    cant: "string",
    track_gauge: "string",
    cross_level: "string",
    track_surface_profile: "string",
    twist: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const railwayTrackDataValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    railway_track_infrastructure_type_id: "required|string",
    track_type_id: "required|string",
    track_gauge_id: "required|string",
    track_length: "numeric",
    rail_type_and_size: "string",
    sleepers_type_and_spacing: "string",
    fastening_systems: "string",
    ballast_type_and_depth: "string",
    track_connection_method: "string",
    track_type: "string",
    remark: "string"

  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const generalDamInformationValidate = async (req, res, next) => {

  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    river_name: "required|string",
    dam_type_id: "required|string",
    dam_purpose_id: "required|string",
    dam_height: "numeric",
    crest_length: "numeric",
    crest_width: "numeric",
    freeboard: "numeric"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const terminalAndFacilityDataValidate = async (req, res, next) => {
  const validationRule = {
    general_airport_information_id: "required|string",
    name: "required|string",
    vip_terminal: "boolean",
    guard_house: "boolean",
    visitors_sheds: "boolean",
    terminal_area: "numeric",
    car_parks: "boolean",
    apron_flood_lights: "boolean",
    taxi_way_lights: "boolean",
    information_signs: "boolean",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const runwayAndApproachDataValidate = async (req, res, next) => {
  const validationRule = {
    general_airport_information_id: "required|string",
    name: "required|string",
    runway_longitudinal_gradients: "numeric",
    runway_transverse_gradients: "numeric",
    approach_to_the_runway: "numeric",
    approach_and_runway_clear_zone: "numeric",
    apron_surface_type_id: "required|string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const generalAirportInformationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    name: "required|string",
    airport_type: "required|in:International,Domestic,Both",
    average_flights_number: "integer",
    average_passengers_number: "integer",
    cargo_capacity: "numeric",
    runway_length: "numeric",
    runway_surface_type_id: "required|string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const electricGridControlCenterCyberSecurityDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    electric_grid_control_center_data_id: "required|string", // UUID should be a string
    name: "required|string",
    cyber_security_measures_implemented: "boolean",
    cyber_security_measures_type: "required|string",
    cyber_security_audits_frequency: "required|string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const electricGridControlCenterPerformanceAndMaintenanceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    electric_grid_control_center_data_id: "required|string", // UUID should be a string
    name: "required|string",
    maintenance_frequency_id: "required|string",
    total_system_downtime_outage_duration: "numeric",
    total_interruptions_number: "integer",
    saidi: "string",
    saifi: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const electricGridControlCenterDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    mini_grid_station_id: "required|string", // UUID should be a string
    name: "required|string",
    installation_year: "integer",
    control_system_type_id: "required|string",
    communication_links_id: "required|string",
    energy_management_system_capability: "boolean",
    remote_control_capability: "boolean",
    average_measured_data_reliability: "numeric",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const electricSmartMetersPrivacyAndSecurityDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    electric_smart_meters_data_id: "required|string", // UUID should be a string
    name: "required|string",
    privacy_measures_implemented: "boolean",
    privacy_measures_type_id: "required|string",
    customer_engagement_frequency_id: "required|string",
    customer_engagement_programs_implemented: "boolean",
    customer_engagement_programs_type_id: "required|string",
    social_impact_assessment_conducted: "boolean",
    resettlement_and_compensation_measures_implemented: "boolean",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const electricSmartMetersPerformanceDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    electric_smart_meters_data_id: "required|string", // UUID should be a string
    name: "required|string",
    maintenance_frequency_id: "required|string",
    average_meter_lifespan: "integer",
    average_meter_accuracy: "numeric",
    safety_problems_encountered: "string",
    work_accidents_number: "integer",
    on_site_safety_regulation_implemented: "boolean",
    other: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const electricSmartMetersRatingsDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    electric_smart_meters_data_id: "required|string", // UUID should be a string
    name: "required|string",
    active_reactive: "required|in:Active,Reactive,Both",
    kwh_kvarh_rating: "numeric",
    phase: "required|in:Three Phase,Single Phase",
    maximum_current_rating: "numeric",
    other: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const electricSmartMetersDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    mini_grid_station_id: "required|string", // UUID should be a string
    name: "required|string",
    owner_operator: "string",
    facility_type: "required|in:Oil Immersed,Dry Type",
    service_area: "numeric",
    manufacturer: "string",
    model_id: "required|string", // UUID should be a string
    smart_meter_type_id: "required|string", // UUID should be a string
    installation_year: "integer",
    smart_meters_installed_number: "integer",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const electricDistributionTransformerTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    mini_grid_station_id: "required|string", // UUID should be a string
    name: "required|string",
    transformer_type_id: "required|string", // UUID should be a string
    cooling_type: "required|in:Oil Immersed,Dry type",
    transformer_power_rating: "numeric",
    lifetime: "integer",
    protection_installed_id: "required|string", // UUID should be a string
    safety_problems_encountered_id: "required|string", // UUID should be a string
    work_accidents_number: "integer",
    on_site_safety_regulation_implemented: "boolean",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const electricDistributionTransformerValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    name: "required|string",
    service_area: "numeric",
    installation_year: "integer",
    transformers_total_number: "integer",
    gps_x_coordinates: "numeric",
    gps_y_coordinates: "numeric",
    fire_extinguishing_technology_id: "required|string", // UUID should be a string
    other: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const miniGridStationDistributionLineInfrastructureValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    mini_grid_station_id: "required|string", // UUID should be a string
    name: "required|string",
    distribution_line_type_id: "required|string", // UUID should be a string
    distribution_line_material_id: "required|string", // UUID should be a string
    distribution_line_conductor_size: "numeric",
    voltage_level: "numeric",
    topology: "required|string|in:Radial, Ring", // Ensure the value is one of the allowed options
    switching_station_connection: "boolean",
    station_name: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const miniGridStationBackupPowerSourceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    mini_grid_station_id: "required|string", // UUID should be a string
    name: "required|string",
    capacity: "numeric",
    installation_year: "integer",
    distribution_lines_total_length: "numeric",
    lifetime: "integer",
    commissioning_date: "date",
    other: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const miniGridStationConsumerValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    mini_grid_station_id: "required|string", // UUID should be a string
    name: "required|string",
    residential: "integer",
    commercial: "integer",
    productive_industrial: "integer",
    health_centers: "integer",
    schools: "integer",
    street_lighting: "integer",
    other: "integer",
    expected_electricity_sales: "numeric",
    electricity_tariff: "numeric",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const miniGridStationDistributionLineValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    mini_grid_station_id: "required|string", // UUID should be a string
    name: "required|string",
    system_type: "string",
    lines_type: "string",
    line_length: "numeric",
    poles: "required|string|in:Concrete,Wood,Steel",
    transformer_type_id: "required|string",
    transformers_number: "integer",
    transformers_size: "numeric",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const miniGridStationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    substation_id: "required|string", // UUID should be a string
    name: "required|string",
    minigrid_size: "numeric",
    battery_type_id: "string",
    battery_size: "numeric",
    inverter: "numeric",
    system_voltage: "numeric",
    expected_annual_generation: "numeric",
    diesel_generator: "required|string|in:Equipped,Not Equipped",
    owner_operator: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const substationLayoutAndCommunicationDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    substation_id: "required|string", // UUID should be a string
    name: "required|string",
    substation_layout: "string",
    equipped_with_standby_diesel_generator: "string",
    substation_busbar_type: "string",
    substation_communication_system_id: "required|string", // UUID should be a string
    scada_system: "boolean",
    substation_grounding_system_id: "required|string", // UUID should be a string
    substation_altitude_level: "numeric",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const substationTransformerAndSwitchGearDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    transmission_line_id: "required|string", // UUID should be a string
    name: "required|string",
    transformers_number: "integer",
    transformer_type: "string",
    transformer_capacity: "numeric",
    input_voltage_level: "numeric",
    output_voltage_level: "numeric",
    switchgear_type_id: "required|string", // UUID should be a string
    circuit_breaker_type_id: "required|string", // UUID should be a string
    other_equipment: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const transmissionLineEquipmentDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    transmission_line_id: "required|string", // UUID should be a string
    name: "required|string",
    insulator_type: "string",
    ground_wire_type: "string",
    fiber_optics_number: "integer",
    opgw_uts: "numeric",
    opgw_weight: "numeric",
    owner_operator: "string",
    tower_grounding: "string",
    tower_circuit_arrangement: "string",
    other_equipment: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const transmissionLineConductorAndTowerDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    transmission_line_id: "required|string", // UUID should be a string
    name: "required|string",
    conductor_type: "string",
    conductor_code_name_id: "required|string",
    strands_number: "integer",
    conductor_size: "numeric",
    conductors_per_phase_number: "integer",
    tower_type_id: "required|string",
    tower_height: "numeric",
    conductor_diameter: "numeric",
    each_strand_diameter: "numeric",
    tower_foundation_type_id: "required|string",
    other_equipment: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const transmissionLineInformationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    name: "required|string",
    transmission_voltage: "numeric",
    transmission_line_route_length: "numeric",
    circuit_number: "integer",
    starting_point_northing: "numeric",
    starting_point_easting: "numeric",
    ending_point_northing: "numeric",
    ending_point_easting: "numeric",
    lifetime: "integer",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const geothermalPowerInfrastructureValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    turbine_manufacturer: "string",
    turbine_model: "string",
    turbine_type_id: "required|string", // UUID should be a string
    each_turbine_capacity: "numeric",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const geothermalPowerWellValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    depth: "numeric",
    well_diameter: "numeric",
    drilling_period: "date",
    temperature_at_bottom_hole: "numeric",
    wells_number: "integer",
    wells_name: "string",
    plant_life: "integer",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const solarPanelValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    manufacturer: "string",
    model: "string",
    solar_panel_type_id: "required|string", // UUID should be a string
    solar_panels_number: "integer",
    each_solar_panel_capacity: "numeric",
    inverter_manufacturer: "string",
    inverter_model: "string",
    inverters_number: "integer",
    other_equipment: "string",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const solarResourceInformationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    annual_solar_radiation: "numeric",
    solar_panel_efficiency: "numeric",
    annual_energy_production: "numeric",
    plant_life: "integer",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const windTurbineValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    turbine_manufacturer: "string",
    turbine_model: "string",
    rotor_diameter: "numeric",
    hub_height: "numeric",
    tower_type_id: "string", // UUID should be a string
    blade_length: "numeric",
    blades_number: "integer",
    gearbox_type: "string",
    generator_type_id: "string", // UUID should be a string
    generators_number: "integer",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const windResourceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    wind_speed_at_hub_height: "numeric",
    weibull_shape_factor: "boolean",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const regulationAndPolicyValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    regulatory_body_overseeing_the_facility: "string",
    regulatory_compliance_monitoring: "boolean",
    environmental_and_social_regulation_compliance_monitoring: "boolean",
    licensing_and_permit_requirements: "boolean",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const environmentalAndSocialImpactValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    environmental_impact_assessment_conducted: "boolean",
    mitigation_measures_implemented: "boolean",
    social_impact_assessment_conducted: "boolean",
    resettlement_and_compensation_measures_implemented: "boolean",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const reliabilityAndMaintenanceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    maintenance_frequency_id: "required|string", // UUID should be a string
    total_outage_duration: "numeric",
    total_interruption_number: "integer",
    saidi: "numeric",
    saifi: "numeric",
    automatic_fault_detection_restoration_system_installed: "boolean",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const transmissionValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    transmission_voltage: "numeric",
    distance_to_substation: "numeric",
    transmission_lines_number: "integer",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const damValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    dam_type_id: "required|string",
    dam_height: "numeric",
    spillway_type_id: "required|string",
    penstock_length: "numeric",
    turbine_type_id: "required|string",
    turbine_number: "integer",
    generator_type_id: "required|string",
    generator_number: "integer",
    national_priority_rank: "integer",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const hydrologicalInformationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    water_source: "string",
    catchment_area: "numeric",
    elevation_change: "numeric",
    head: "numeric",
    total_inflow: "numeric",
    active_storage_volume: "numeric",
    water_stored: "numeric",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const powerGenerationCapacityValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be a string
    capacity: "numeric",
    annual_generation: "numeric",
    units_number: "integer",
    owner_id: "required|string", // UUID should be a string
    commissioning_date: "date",
    plant_life: "integer",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const environmentalControlValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    data_center_id: "required|string", // UUID should be a string
    temperature: "string",
    humidity: "string",
    air_quality: "string",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const dataCenterFacilityCapacityValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    data_center_id: "required|string", // UUID should be a string
    total_floor_area: "string",
    power_capacity: "string",
    rack_space_capacity: "string",
    cooling_capacity: "string",
    access_control: "boolean",
    surveillance_cameras: "boolean",
    fire_suppression_systems: "boolean",
    intrusion_detection_systems: "boolean",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const dataCenterComponentManufacturerValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    data_center_id: "required|string", // UUID should be a string
    servers: "string",
    storage_devices: "string",
    networking_equipment: "string",
    cooling_systems: "string",
    backup_generators: "string",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const dataCenterComponentAgeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    data_center_id: "required|string", // UUID should be string in the request body
    servers: "integer",
    storage_devices: "integer",
    networking_equipment: "integer",
    cooling_systems: "integer",
    backup_generators: "integer",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const dataCenterValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string", // UUID should be string in the request body
    data_center_type_id: "required|string", // UUID should be string in the request body
    servers: "boolean",
    storage_devices: "boolean",
    networking_equipment: "boolean",
    cooling_systems: "boolean",
    backup_generators: "boolean",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const broadcastingInfrastructureManufacturerValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    broadcasting_infrastructure_id: "required|string", // UUID should be string in the request body
    antennas: "string",
    transmitters: "string",
    towers: "string",
    cables: "string",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const broadcastingInfrastructureAgeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    broadcasting_infrastructure_id: "required|string",
    antennas: "integer",
    transmitters: "integer",
    towers: "integer",
    cables: "integer",
    others: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const broadcastingInfrastructureValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string",
    broadcasting_infrastructure_type_id: "required|string",
    broadcasting_network: "boolean",
    antennas: "boolean",
    transmitters: "boolean",
    towers: "boolean",
    cables: "boolean",
    others: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const internetConnectionInfrastructureManufacturerValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    internet_connection_id: "required|string",
    routers: "string",
    switches: "string",
    modems: "string",
    cables: "string",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const internetConnectionInfrastructureAgeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    internet_connection_id: "required|string",
    routers: "integer",
    switches: "integer",
    modems: "integer",
    cables: "integer",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const internetConnectionValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }


  const validationRule = {
    project_id: "required|string",
    internet_connection_type_id: "required|string",
    routers: "boolean",
    switches: "boolean",
    modems: "boolean",
    cables: "boolean",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const satelliteNetworkComponentManufacturerValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    satellite_network_id: "required|string",
    satellite: "string",
    ground_stations: "string",
    modems: "string",
    routers: "string",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const satelliteInfrastructureAgeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    satellite_network_id: "required|string",
    satellite: "integer",
    ground_stations: "integer",
    modems: "integer",
    routers: "integer",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const satelliteNetworkValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string",
    satellite_network_type_id: "required|string",
    satellite: "boolean",
    ground_stations: "boolean",
    modems: "boolean",
    routers: "boolean",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};



const networkCoverageValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string",
    network_infrastructure_type_id: "required|string",
    total_coverage_area: "numeric",
    coverage_population_number: "integer",
    active_users_number: "integer",
    average_download_speed: "numeric",
    average_upload_speed: "numeric",
    signal_strength: "numeric",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const mobileNetworkComponentAgeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    mobile_network_id: "required|string",
    cell: "integer",
    towers: "integer",
    antennas: "integer",
    base_stations: "integer",
    repeaters: "integer",
    switches: "integer",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const mobileNetworkValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string",
    mobile_network_type_id: "required|string",
    cell_towers: "boolean",
    antennas: "boolean",
    base_stations: "boolean",
    repeaters: "boolean",
    switches: "boolean",
    others: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const networkCapacityValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string",
    network_type_id: "required|string",
    total_bandwidth: "numeric",
    users_number: "integer",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const maintenanceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string",
    maintenance_frequency: "boolean",
    service_level_agreement: "boolean",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const telecomInfrastructureAgeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  const validationRule = {
    project_id: "required|string",
    cables: "boolean",
    wires: "boolean",
    routers: "boolean",
    switches: "boolean",
    hubs: "boolean",
    repeaters: "boolean",
    antennas: "boolean",
    towers: "boolean",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const telecomInfrastructureComponentValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  
  const validationRule = {
    project_id: "required|string",
    mobile_network_type_id: "required|string",
    cables: "integer",
    wires: "integer",
    routers: "integer",
    switches: "integer",
    hubs: "integer",
    repeaters: "integer",
    antennas: "integer",
    towers: "integer",
    remark: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};


const safetyAndHealthValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    road_segment: "required|string",
    hazard_type_id: "required|string",
    potential_impact_id: "required|string",
    risk_level_id: "required|string",
    immediate_action_taken: "string",
    incident_type_id: "required|string",
    incident_time: "date",
    medicare_required: "boolean",
    total_injury_number: "integer",
    incident_reported_by: "string",
    personal_protective_equipment_type_id: "required|string",
    personal_protective_equipment_condition_id: "required|string",
    trained_on_equipment_usage: "boolean",
    training_hours_number: "integer",
    weather_condition_during_incident_id: "required|string",
    injury_severity_id: "required|string",
    fatality_number: "integer",
    recommendation: "string",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const maintenanceHistoryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    road_segment: "required|string",
    last_maintenance_date: "date",
    maintenance_type_id: "required|string",
    maintenance_cost: "numeric",
    severity_level_id: "required|string",
    suggested_repair_id: "required|string",
    recommended_action_urgency_id: "required|string",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const roadSurfaceConditionValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    road_segment: "required|string",
    cracks: "boolean",
    rutting: "boolean",
    patching: "boolean",
    drainage_problems: "boolean",
    action_taken_date: "date",
    action_taken: "string",
    action_taken_cost: "numeric",
    assessment_condition_id: "required|string",
    surface_type_id: "required|string",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};



const drainageAssessmentValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    road_segment: "required|string",
    drainage_type_id: "required|string",
    drainage_condition_id: "required|string",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};



const roadMaintenanceActivityValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    road_segment: "required|string",
    maintenance_frequency_id: "required|string",
    maintenance_type_id: "required|string",
    consultant: "string",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const roadMaintenanceDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    road_segment: "required|string",
    maintenance_start_date: "date",
    maintenance_end_date: "date",
    weather_condition: "string",
    pavement_condition: "string",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const environmentalDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const geotechnicalInformationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    soil_type_id: "required|string",
    ground_water_impact_id: "required|string",
    soil_bearing_capacity: "numeric",
    slope_stability_id: "required|string",
    retaining_walls: "boolean",
    geological_hazard: "string",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const roadDrainageValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    length: "numeric",
    height: "numeric",
    width: "numeric",
    current_condition_id: "required|string",
    weight_limit: "numeric",
    design_life_span: "integer",
    inspection_frequency: "integer",
    construction_completion_year: "integer",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const roadProjectQualityControlValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    project_phase_id: "required|string",
    inspection_type_id: "required|string",
    defect_encountered: "string",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const trafficVolumeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    count_location_coordinate_x: "numeric",
    count_location_coordinate_y: "numeric",
    count_time: "date",
    count_type_id: "required|string",
    lane_number: "integer",
    vehicle_number_per_hour: "integer",
    average_daily_traffic_volume: "integer",
    corridor_importance_level: "integer"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const bridgeStructureInformationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    bridge_name: "required|string",
    bridge_structure_type_id: "required|string",
    east_region: "numeric",
    west_region: "numeric",
    central_region: "numeric",
    north_region: "numeric",
    south_region: "numeric",
    ring_road: "integer",
    remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};



const bridgeInspectionValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }

  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    bridge_name: "required|string",
    bridge_part_defect_id: "required|string",
    damage_type_id: "required|string",
    damage_condition_id: "required|string",
    hydrology_defect_id: "required|string",
    maintenance_action: "string",
    bridge_history: "string",
    inspector_remark: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const bridgeFoundationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    bridge_name: "required|string",
    abutment_type_id: "required|string",
    pier_type_id: "required|string",
    abutment_foundation_size: "numeric",
    pier_foundation_size: "numeric",
    abutment_pile_number: "numeric",
    pier_pile_number: "numeric",
    abutment_pile_depth: "numeric",
    pier_pile_depth: "numeric",
    soil_type_id: "required|string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const projectMasterDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    model: "required|string",
    title: "required|string",
    flag: "string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const potentialImpactValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const riskLevelValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const incidentTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const incidentTimeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const hazardTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};
const recommendedActionUrgencyValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};
const suggestedRepairValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};
const severityLevelValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const bridgeSubStructureValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    bridge_name: "required|string",
    abutment_a1_height: "numeric",
    abutment_a1_width: "numeric",
    abutment_a2_height: "numeric",
    abutment_a2_width: "numeric",
    wing_wall_length: "numeric",
    pier_type_id: "required|string",
    piers_number: "numeric",
    piers_dimension: "string",
    pier1_height: "numeric",
    pier1_width: "numeric",
    pier2_height: "numeric",
    pier2_width: "numeric"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const bridgeSuperStructureValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    bridge_name: "required|string",
    bridge_structure_type_id: "required|string",
    span_number: "numeric",
    span_composition: "string",
    total_span_length: "numeric",
    carriage_width: "numeric",
    side_walk_width: "numeric",
    lane_number: "numeric",
    span_support_type_id: "required|string",
    deck_slab_type_id: "required|string",
    girder_number: "numeric",
    girder_depth: "numeric",
    girder_spacing: "numeric",
    girder_width: "numeric"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const bridgeAreaDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    bridge_name: "required|string",
    river_width: "numeric",
    highest_water_level: "numeric",
    lowest_water_level: "numeric",
    area_topography_id: "required|string",
    detour_possibility: "boolean",
    road_alignment: "string",
    altitude: "numeric",
    load_limit_sign: "boolean"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const bridgeBasicDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    bridge_name: "required|string",
    bridge_number: "string",
    bridge_length: "numeric",
    bridge_width: "numeric",
    construction_year: "integer",
    contractor: "string",
    designer: "string",
    bridge_cost: "numeric",
    land_capacity: "numeric",
    average_daily_traffic: "integer"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const maintenanceTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const drainageTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const drainageConditionValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const assessmentConditionValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const currentConditionValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const groundWaterImpactValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string", 
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const slopeStabilityValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string", 
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const maintenanceFrequencyValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const culvertRoadOverInformationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id", 
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    carriage_way_width: "numeric",
    side_walk_width: "numeric",
    lane_number: "integer",
    head_wall_to_head_wall: "numeric",
    average_fill_height: "numeric",
    guard_rail_type_id: "required|string",
    parapet_length: "numeric"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const culvertStructuralInformationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    culvert_type: "string",
    culvert_barrel_length: "numeric",
    culvert_height: "numeric",
    opening_number: "integer",
    opening_width: "numeric", 
    total_culvert_width: "numeric",
    distance_between_barrels: "numeric",
    head_wall_length: "numeric",
    pier_type_id: "required|string",
    pier_height: "numeric",
    abutment_type_id: "required|string",
    abutment_average_height: "numeric",
    endwall_type_inlet_id: "required|string",
    endwall_type_outlet_id: "required|string",
    wingwall_average_length: "numeric",
    paved_water_way_type_id: "required|string",
    soil_type_id: "required|string"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const pavementValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    tangent_length: "numeric",
    curve_length: "numeric", 
    road_length_type_id: "string",
    road_pavement_thickness: "numeric",
    paved_road_surface_width: "numeric"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};
const culvertBasicDataValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    culvert_name: "required|string",
    culvert_number: "integer",
    culvert_coordinate_x: "numeric",
    culvert_coordinate_y: "numeric",
    area_topography_id: "string",
    highest_water_level: "numeric",
    lowest_water_level: "numeric",
    construction_year: "integer",
    contractor: "string",
    designer: "string",
    culvert_cost: "numeric",
    detour_possibility: "boolean",
    road_allignment: "string",
    altitude: "numeric"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};



const accessoryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    under_passes: "integer",
    ramps: "integer", 
    traffic_signals: "integer",
    repair_stations: "integer",
    bicycle_lanes: "boolean",
    bicycle_signals: "integer",
    culvert: "boolean",
    bridge: "boolean"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const trafficParameterValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string", 
    pedestrian_facility_id: "required|string",
    parking: "integer",
    design_traffic_flow: "integer",
    design_speed: "numeric",
    similar_for_all: "boolean"
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const roadSafetyFeatureValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const countTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string", 
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const projectPhaseValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const inspectionTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string", 
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const bridgePartDefectValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string", 
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const damageTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const damageConditionValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id", 
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const hydrologyDefectValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string", 
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};



const expansionJointTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};
const deckSlabTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const spanSupportTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};
const bridgeStructureTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const guardRailTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const soilTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};
const pavedWaterWayTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};
const endwallTypeOutletValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const endwallTypeInletValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const abutmentTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const pierTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const areaTopographyValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const roadLengthTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const pedestrianFacilityValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const intersectionAndDrivewayValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
    number_of_intersections: "integer",
    intersection_type_id: "required|string",
    driveway_access_point_id: "required|string",
    similar_for_all: "boolean",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};


const drivewayAccessPointValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};
const intersectionTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };
  await validateReply.validateReply(req.body, validationRule, res, next);
};

const segmentGeometryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",  
    carriage_way_width: "numeric",  
    cross_section_type_id: "required|string",
    grade_percentage: "numeric",
    elevation_change: "numeric",
    cross_slope_percentage: "numeric",
    property_access_control: "boolean",
    similar_for_all_lane: "boolean",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const crossSectionTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const surfaceTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  } 
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };  

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const designClassificationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  } 
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };  

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const designStandardValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};  

const designTrafficFlowValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const functionalClassificationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_type_id: "required|string",
    title: "required|string",
    description: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const projectConstructionTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    construction_type: "required|string",
    description: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const weatherConditionValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    weather_type: "required|string",
    description: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectQualityValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    major_quality_problem_encountered: "required|string",
    description: "string",
    measures_taken: "string",
    lesson_learned: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const projectSafetyStatusValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    no_of_fatal_injuries: "integer",
    no_of_major_injuries: "integer",
    no_of_minor_injuries: "integer",
    measures_taken: "required|string",
    lesson_learned: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const projectContactPersonValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    stakeholder_id: "required|string",
    department: "string",
    position: "string",
    first_name: "required|string",
    middle_name: "required|string", 
    last_name: "required|string",
    national_id_no: "string",
    gender: "string",
    phone: "required|string",
    email: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};

const projectMangerValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    stakeholder_id: "required|string",
    position: "required|string",
    first_name: "required|string",
    middle_name: "required|string",
    last_name: "required|string",
    national_id_no: "string",
    gender: "string",
    phone: "required|string",
    email: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    title: "required|string",
    flag: "string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectCategoryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    projecttype_id: "required|string",
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectSubCategoryValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    projectcategory_id: "required|string",
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    projectcategory_id: "required|string",
    projectsubcategory_id: "required|string",
    name: "required|string",
    grade: "string",
    end_user: "string",
    function: "string",
    remark: "string",
    contract_no: "string",
    budget_code: "string",
    procurement_no: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const statusValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectStatusValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    status_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectStakeholderValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    stakeholder_id: "required|string",
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectFinanceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    main_contract_price_amount: "numeric",
    rebate: "numeric",
    remark: "string",
    source_of_finance: "string"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectVariationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    amount: "required|integer",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectExtensionTimeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    number_of_days: "required|integer",
    reason: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectTimeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectBondValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    amount: "required|integer",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectPlanValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    type: "string",
    project_expense: "numeric",
    manpower: "numeric",
    direct_labour: "numeric",
    indirect_labour: "numeric",
    material: "numeric",
    machinery: "numeric",
    other_expense: "numeric",
    sub_contractor_cost: "numeric",
    financial_performance: "numeric",
    physical_performance: "numeric",
    cost_due_to_rework: "numeric",
    over_head_cost: "numeric",
    year: "string",
    quarter: "string",
    start: "required|date",
    end: "date"
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectReportValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    projectplan_id: "required|uuid",
    monthlyreport_id: "required|uuid",
    type: "string",
    project_expense: "numeric",
    manpower: "numeric",
    direct_labour: "numeric",
    indirect_labour: "numeric",
    material: "numeric",
    machinery: "numeric",
    other_expense: "numeric",
    sub_contractor_cost: "numeric",
    financial_performance: "numeric",
    physical_performance: "numeric",
    cost_due_to_rework: "numeric",
    over_head_cost: "numeric",
    year: "string",
    quarter: "string",
    start: "required|date",
    end: "date",
    profit: "numeric",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const projectDocumentValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const constructionResourceValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    resource_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const buildingEnvelopMaterialValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const buildingDimensionDetailValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const roadDetailValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const roadSegmentValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const roadLayerValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    segment_id: "required|string",
    name: "required|string",
    numeric: "required|integer",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const telecomValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const generatingCapacityValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const turbineInfoValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const hydroElectricDamValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    river_name: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const spillWayInfoValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const solarEnergyValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const windEnergyValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    title: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const transformerTypeValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    name: "required|string",
    project_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const transformerValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    transformertype_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const transmissionLineValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const electricTowerValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    transmissionline_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const railWayValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const railWayStationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    name: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const reserviorDetailValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const irrigationCapacityValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const waterIrrigationValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const portValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
const paymentValidate = async (req, res, next) => {
  let param = await validateReply.checkParam(req, res, next);
  if (param === "failed") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  const validationRule = {
    project_id: "required|string",
    amount: "required|integer",
  };

  await validateReply.validateReply(req.body, validationRule, res, next);
};
module.exports = {
  claimValidate,
  challengeValidate,
  constructionMethodValidate,
  railwayMaintenanceEnvironmentalAndOtherFactorValidate,
  railwayMaintenanceFacilityAndSecurityValidate,
  railwayMaintenanceFacilityScheduleAndProcedureValidate,
  railwayMaintenanceWorkforceAndFacilityStaffValidate,
  railwayMaintenanceFacilityInfrastructureAndUtilityValidate,
  railwayMaintenanceFacilityEquipmentAndToolValidate,
  railwayMaintenanceFacilityLayoutAndDesignValidate,
  railwayMaintenanceFacilityTypeAndPurposeValidate,
  railwayPowerSupplyEnvironmentalAndOtherFactorValidate,
  railwayPowerSupplySafetyAndComplianceValidate,

  railwayPowerSupplyMaintenanceAndTestingValidate,
  railwayPowerDistributionValidate,
  railwayPowerSubstationsAndEquipmentValidate,
  railwayPowerSupplyConfigurationValidate,  

  railwayStationPlatformEnvironmentalAndOtherFactorValidate,
  railwayStationPlatformPassengerFlowAndCapacityValidate,
  railwayStationPlatformSurfaceAndFinishValidate,
  railwayStationPlatformSafetyAndSecurityValidate,
  railwayStationPlatformSignageAndWayFindingValidate,
  railwayStationPlatformStructuralElementValidate,
  railwayStationPlatformFacilityValidate,
  railwayStationPlatformLayoutValidate,
  railwayVehicleLoadAndCargoSpecificationValidate,
  railwayVehicleInteriorAndPassengerAmenityValidate,
  railwayVehicleSafetyAndComplianceValidate,
  railwayVehicleOperationalPerformanceValidate,
  railwayVehicleMaintenanceAndInspectionValidate,
  railwayVehicleSpecificationValidate,
  railwayVehicleIdentificationValidate,
  railwayEnvironmentalAndOtherFactorValidate,
  railwayCommunicationSystemSafetyAndComplianceValidate,
  railwayCommunicationSystemMaintenanceAndTestingValidate,
  railwaySystemConditionAssessmentValidate,
  railwayCommunicationSystemValidate,
  railwaySignalingSystemValidate,
  railwayFasteningSystemEnvironmentalFactorValidate,
  railwayFasteningSystemMaintenanceAndReplacementValidate, 
  railwayFasteningSystemConditionAssessmentValidate,
  railwayFasteningSystemCharacteristicValidate,
  railwaySleeperEnvironmentalAndOtherFactorValidate,
  railwaySleeperFasteningSystemValidate,
  railwaySleeperMaintenanceAndReplacementValidate,
  railwaySleeperConditionAssessmentValidate,
  railwaySleeperCharacteristicValidate,
  railwaySubBallastEnvironmentalAndOtherFactorValidate,
  railwaySubBallastDrainageAndWaterManagementValidate,
  railwaySubBallastMaintenanceAndRenewalValidate,
  railwaySubBallastConditionAssessmentValidate,
  railwaySubBallastMaterialTestValidate,
  railwaySubBallastMaterialValidate, 
  railwayBallastEnvironmentalAndOtherFactorValidate,
  railwayBallastDrainageAndWaterManagementValidate, 
  railwayBallastMaintenanceAndRenewalValidate,
  railwayBallastConditionAssessmentValidate,

  railwayBallastMaterialSpecificationValidate,
  railwayBallastMaterialDataValidate,
  railwayBallastValidate,
  railwayTrackSafetyValidate,
  railwayTrackRehabilitationOrRenewalValidate,

  railwayTrackMaintenanceAndInspectionValidate,
  railwayTrackConditionAssessmentValidate,
  railwayTrackGeometryDataValidate,
  railwayTrackDataValidate,
  generalDamInformationValidate,

  terminalAndFacilityDataValidate,
  runwayAndApproachDataValidate,
  generalAirportInformationValidate,

  
  electricGridControlCenterCyberSecurityDataValidate,
  electricGridControlCenterPerformanceAndMaintenanceValidate,
  electricGridControlCenterDataValidate,
  electricSmartMetersPrivacyAndSecurityDataValidate,
  electricSmartMetersPerformanceDataValidate,
  electricSmartMetersRatingsDataValidate,
  electricSmartMetersDataValidate,
  electricDistributionTransformerTypeValidate,


  electricDistributionTransformerValidate,
  miniGridStationDistributionLineInfrastructureValidate,
  miniGridStationBackupPowerSourceValidate,
  miniGridStationConsumerValidate,
  miniGridStationDistributionLineValidate,


  miniGridStationValidate,
  substationLayoutAndCommunicationDataValidate, 

  substationTransformerAndSwitchGearDataValidate,
  transmissionLineEquipmentDataValidate,
  transmissionLineConductorAndTowerDataValidate,
  transmissionLineInformationValidate,
  
  geothermalPowerInfrastructureValidate,
  geothermalPowerWellValidate,
  solarPanelValidate,
  solarResourceInformationValidate,
  windTurbineValidate,
  windResourceValidate,
  regulationAndPolicyValidate,
  environmentalAndSocialImpactValidate,
  reliabilityAndMaintenanceValidate,
  transmissionValidate,
  damValidate,
  hydrologicalInformationValidate,
  powerGenerationCapacityValidate,
  environmentalControlValidate,
  dataCenterFacilityCapacityValidate,
  dataCenterComponentManufacturerValidate,
  dataCenterComponentAgeValidate,
  dataCenterValidate,
  broadcastingInfrastructureManufacturerValidate,
  broadcastingInfrastructureAgeValidate,
  
  broadcastingInfrastructureValidate,
  internetConnectionInfrastructureManufacturerValidate,
  internetConnectionInfrastructureAgeValidate,
  internetConnectionValidate,
  satelliteNetworkComponentManufacturerValidate,

  satelliteInfrastructureAgeValidate,
  satelliteNetworkValidate,
  networkCoverageValidate,
  mobileNetworkComponentAgeValidate,
  mobileNetworkValidate, 
  networkCapacityValidate,
  maintenanceValidate,
  telecomInfrastructureAgeValidate,
  telecomInfrastructureComponentValidate,
  safetyAndHealthValidate,
  maintenanceHistoryValidate,

  roadSurfaceConditionValidate,
  drainageAssessmentValidate,
  roadMaintenanceActivityValidate,
  roadMaintenanceDataValidate,
  environmentalDataValidate,
  geotechnicalInformationValidate,
  roadDrainageValidate,
  roadProjectQualityControlValidate,
  trafficVolumeValidate,
  bridgeStructureInformationValidate,
  bridgeInspectionValidate,
  bridgeFoundationValidate,
  projectMasterDataValidate,
  potentialImpactValidate,
  riskLevelValidate,
  incidentTypeValidate,
  incidentTimeValidate,

  severityLevelValidate,
  suggestedRepairValidate,
  recommendedActionUrgencyValidate,
  hazardTypeValidate,

  bridgeSubStructureValidate,
  bridgeSuperStructureValidate,
  bridgeAreaDataValidate,
  bridgeBasicDataValidate,
  
  drainageTypeValidate,
  drainageConditionValidate,
  assessmentConditionValidate,
  currentConditionValidate,
  groundWaterImpactValidate,
  maintenanceTypeValidate,
  slopeStabilityValidate,
  maintenanceFrequencyValidate,
  culvertStructuralInformationValidate,
  culvertRoadOverInformationValidate,
  pavementValidate,
  culvertBasicDataValidate,
  accessoryValidate,
  trafficParameterValidate,
  countTypeValidate,
  projectPhaseValidate,
  inspectionTypeValidate,
  roadSafetyFeatureValidate,
  waterIrrigationValidate,
  portValidate,
  paymentValidate,
  
  bridgePartDefectValidate,
  damageTypeValidate,
  damageConditionValidate,
  hydrologyDefectValidate,
  expansionJointTypeValidate, 
  deckSlabTypeValidate,
  spanSupportTypeValidate,
  bridgeStructureTypeValidate,
  guardRailTypeValidate,
  soilTypeValidate,
  pavedWaterWayTypeValidate,
  endwallTypeOutletValidate,
  endwallTypeInletValidate,
  abutmentTypeValidate,
  pierTypeValidate,
  areaTopographyValidate,
  roadLengthTypeValidate,
  pedestrianFacilityValidate,
  intersectionAndDrivewayValidate,
  drivewayAccessPointValidate,
  intersectionTypeValidate,
  segmentGeometryValidate,
  surfaceTypeValidate,
  crossSectionTypeValidate,
  designClassificationValidate,
  designStandardValidate,
  designTrafficFlowValidate,
  functionalClassificationValidate,
  projectConstructionTypeValidate,
  weatherConditionValidate,
  projectQualityValidate,
  projectSafetyStatusValidate,
  projectContactPersonValidate,
  projectMangerValidate,
  projectBondValidate,
  projectCategoryValidate,
  projectDocumentValidate,
  projectFinanceValidate,
  projectPlanValidate,
  projectReportValidate,
  projectStakeholderValidate,
  projectStatusValidate,
  projectSubCategoryValidate,
  projectTimeValidate,
  projectTypeValidate,
  projectValidate,
  projectVariationValidate,
  projectExtensionTimeValidate,
  constructionResourceValidate,
  buildingEnvelopMaterialValidate,
  buildingDimensionDetailValidate,
  roadDetailValidate,
  roadSegmentValidate,
  roadLayerValidate,
  telecomValidate,
  generatingCapacityValidate,
  turbineInfoValidate,
  hydroElectricDamValidate,
  solarEnergyValidate,
  windEnergyValidate,
  transformerTypeValidate,
  transformerValidate,
  transmissionLineValidate,
  electricTowerValidate,
  railWayStationValidate,
  railWayValidate,
  reserviorDetailValidate,
  irrigationCapacityValidate,
  waterIrrigationValidate,
  portValidate,
  spillWayInfoValidate,
  statusValidate,
  paymentValidate,
};
