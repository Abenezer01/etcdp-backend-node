const validateReply = require("../../../../utils/validateerror");

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
    maintenance_frequency_id: "string",
    maintenance_type_id: "string",
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
    title: "required|string",
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
