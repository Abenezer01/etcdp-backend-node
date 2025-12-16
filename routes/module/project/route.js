const ProjectStatusController = require("../../../controllers/project/ProjectStatusController.js");
const ProjectController = require("../../../controllers/project/ProjectController.js");
const ProjectStakeholderController = require("../../../controllers/project/ProjectStakeholderController.js");
const ProjectPlanController = require("../../../controllers/project/ProjectPlanController.js");
const ProjectReportController = require("../../../controllers/project/ProjectReportController.js");
const ProjectDocumentController = require("../../../controllers/project/ProjectDocumentController.js");
const ConstructionResourceController = require("../../../controllers/project/ConstructionResourceController.js");
const BuildingEnvelopMaterialController = require("../../../controllers/project/BuildingEnvelopMaterialController.js");
const BuildingDimensionDetailsController = require("../../../controllers/project/BuildingDimensionDetailsController.js");
const TelecomInfrastructureController = require("../../../controllers/project/TelecomInfrastructureController.js");
const GeneratingCapacityController = require("../../../controllers/project/GeneratingCapacityController.js");
const TurbineDetailController = require("../../../controllers/project/TurbineDetailController.js");
const HydroElectricDamController = require("../../../controllers/project/HydroElectricDamController.js");
const SpillWaysDetailController = require("../../../controllers/project/SpillWaysDetailController.js");
const ReservoirDetailsController = require("../../../controllers/project/ReservoirDetailsController.js");
const IrrigationCapacityController = require("../../../controllers/project/IrrigationCapacityController.js");
const ProjectFinanceController = require("../../../controllers/project/ProjectFinanceController.js");
const ProjectVariationController = require("../../../controllers/project/ProjectVariationController.js");
const ProjectExtensionTimeController = require("../../../controllers/project/ProjectExtensionTimeController.js");
const ProjectTimeController = require("../../../controllers/project/ProjectTimeController.js");
const ProjectBondController = require("../../../controllers/project/ProjectBondController.js");
const RoadInfoController = require("../../../controllers/project/RoadInfoController.js");
const RoadSegmentController = require("../../../controllers/project/RoadSegmentController.js");
const RoadLayerController = require("../../../controllers/project/RoadLayerController.js");

const SolarEnergyController = require("../../../controllers/project/SolarEnergyController.js");
const WindEnergyController = require("../../../controllers/project/WindEnergyController.js");
const TransformerController = require("../../../controllers/project/TransformerController.js");
const TransformerTypeController = require("../../../controllers/project/TransformerTypeController.js");

const TransmissionLineController = require("../../../controllers/project/TransmissionLineController.js");
const ElectricTowerController = require("../../../controllers/project/ElectricTowerController.js");
const RailwayController = require("../../../controllers/project/RailwayController.js");
const RailwayStationController = require("../../../controllers/project/RailwayStationController.js");

const WaterIrrigationDamController = require("../../../controllers/project/WaterIrrigationDamController.js");
const PortController = require("../../../controllers/project/PortController.js");
const PaymentController = require("../../../controllers/project/PaymentController.js");

const ProjectOutcomeController = require("../../../controllers/project/ProjectOutcomeController.js");
const ProjectAdditionalInfoController = require("../../../controllers/project/ProjectAdditionalInfoController.js");

// new 
const ProjectManagerController = require("../../../controllers/projects/ProjectManagerController.js");
const ProjectContactPersonController = require("../../../controllers/projects/ProjectContactPersonController.js");
const ProjectSafetyStatusController = require("../../../controllers/projects/ProjectSafetyStatusController.js");
const ProjectQualityController = require("../../../controllers/projects/ProjectQualityController.js");  
const WeatherConditionController = require("../../../controllers/projects/WeatherConditionController.js");
const ProjectConstructionTypeController = require("../../../controllers/projects/ProjectConstructionTypeController.js");
const SegmentGeometryController = require("../../../controllers/projects/SegmentGeometryController.js");
const IntersectionAndDrivewayController = require("../../../controllers/projects/IntersectionAndDrivewayController.js");

const TrafficParameterController = require("../../../controllers/projects/TrafficParameterController.js");
const AccessoryController = require("../../../controllers/projects/AccessoryController.js");
const PavementController = require("../../../controllers/projects/PavementController.js");
const CulvertBasicDataController = require("../../../controllers/projects/CulvertBasicDataController.js");
const CulvertStructuralInformationController = require("../../../controllers/projects/CulvertStructuralInformationController.js");
const CulvertRoadOverInformationController = require("../../../controllers/projects/CulvertRoadOverInformationController.js");
const BridgeBasicDataController = require("../../../controllers/projects/BridgeBasicDataController.js");
const BridgeAreaDataController = require("../../../controllers/projects/BridgeAreaDataController.js");

const BridgeSuperStructureController = require("../../../controllers/projects/BridgeSuperStructureController.js");
const BridgeSubStructureController = require("../../../controllers/projects/BridgeSubStructureController.js");

const BridgeFoundationController = require("../../../controllers/projects/BridgeFoundationController.js");
const BridgeInspectionController = require("../../../controllers/projects/BridgeInspectionController.js");
const BridgeStructureInformationController = require("../../../controllers/projects/BridgeStructureInformationController.js");
const TrafficVolumeController = require("../../../controllers/projects/TrafficVolumeController.js");
const RoadProjectQualityControlController = require("../../../controllers/projects/RoadProjectQualityControlController.js");

const RoadDrainageController = require("../../../controllers/projects/RoadDrainageController.js");

const GeotechnicalInformationController = require("../../../controllers/projects/GeotechnicalInformationController.js");
const EnvironmentalDataController = require("../../../controllers/projects/EnvironmentalDataController.js");
const RoadMaintenanceDataController = require("../../../controllers/projects/RoadMaintenanceDataController.js");
const RoadMaintenanceActivityController = require("../../../controllers/projects/RoadMaintenanceActivityController.js");

const RoadSurfaceConditionController = require("../../../controllers/projects/RoadSurfaceConditionController.js");


const DrainageAssessmentController = require("../../../controllers/projects/DrainageAssessmentController.js");
const MaintenanceHistoryController = require("../../../controllers/projects/MaintenanceHistoryController.js");
const SafetyAndHealthController = require("../../../controllers/projects/SafetyAndHealthController.js");
const TelecomInfrastructureComponentController = require("../../../controllers/projects/TelecomInfrastructureComponentController.js");
const TelecomInfrastructureAgeController = require("../../../controllers/projects/TelecomInfrastructureAgeController.js");
const MaintenanceController = require("../../../controllers/projects/MaintenanceController.js");
const NetworkCapacityController = require("../../../controllers/projects/NetworkCapacityController.js");

const MobileNetworkController = require("../../../controllers/projects/MobileNetworkController.js");
const MobileNetworkComponentAgeController = require("../../../controllers/projects/MobileNetworkComponentAgeController.js");

const NetworkCoverageController = require("../../../controllers/projects/NetworkCoverageController.js");
const SatelliteNetworkController = require("../../../controllers/projects/SatelliteNetworkController.js");
const SatelliteInfrastructureAgeController = require("../../../controllers/projects/SatelliteInfrastructureAgeController.js");

const SatelliteNetworkComponentManufacturerController = require("../../../controllers/projects/SatelliteNetworkComponentManufacturerController.js");
const InternetConnectionController = require("../../../controllers/projects/InternetConnectionController.js");
const InternetConnectionInfrastructureAgeController = require("../../../controllers/projects/InternetConnectionInfrastructureAgeController.js");
const InternetConnectionInfrastructureManufacturerController = require("../../../controllers/projects/InternetConnectionInfrastructureManufacturerController.js");
const BroadcastingInfrastructureController = require("../../../controllers/projects/BroadcastingInfrastructureController.js");
const BroadcastingInfrastructureAgeController = require("../../../controllers/projects/BroadcastingInfrastructureAgeController.js");
const BroadcastingInfrastructureManufacturerController = require("../../../controllers/projects/BroadcastingInfrastructureManufacturerController.js");
const DataCenterController = require("../../../controllers/projects/DataCenterController.js");

const DataCenterComponentAgeController = require("../../../controllers/projects/DataCenterComponentAgeController.js");
const DataCenterComponentManufacturerController = require("../../../controllers/projects/DataCenterComponentManufacturerController.js");
const DataCenterFacilityCapacityController = require("../../../controllers/projects/DataCenterFacilityCapacityController.js");
const EnvironmentalControlController = require("../../../controllers/projects/EnvironmentalControlController.js");

const PowerGenerationCapacityController = require("../../../controllers/projects/PowerGenerationCapacityController.js");
const HydrologicalInformationController = require("../../../controllers/projects/HydrologicalInformationController.js");
const DamController = require("../../../controllers/projects/DamController.js");
const TransmissionController = require("../../../controllers/projects/TransmissionController.js");
const ReliabilityAndMaintenanceController = require("../../../controllers/projects/ReliabilityAndMaintenanceController.js");
const EnvironmentalAndSocialImpactController = require("../../../controllers/projects/EnvironmentalAndSocialImpactController.js");
const RegulationAndPolicyController = require("../../../controllers/projects/RegulationAndPolicyController.js");
const WindResourceController = require("../../../controllers/projects/WindResourceController.js");
const WindTurbineController = require("../../../controllers/projects/WindTurbineController.js");
const SolarResourceInformationController = require("../../../controllers/projects/SolarResourceInformationController.js");
const SolarPanelController = require("../../../controllers/projects/SolarPanelController.js");
const GeothermalPowerWellController = require("../../../controllers/projects/GeothermalPowerWellController.js");
const GeothermalPowerInfrastructureController = require("../../../controllers/projects/GeothermalPowerInfrastructureController.js");

const TransmissionLineInformationController = require("../../../controllers/projects/TransmissionLineInformationController.js");
const TransmissionLineConductorAndTowerDataController = require("../../../controllers/projects/TransmissionLineConductorAndTowerDataController.js");
const TransmissionLineEquipmentDataController = require("../../../controllers/projects/TransmissionLineEquipmentDataController.js");
const SubstationTransformerAndSwitchGearDataController = require("../../../controllers/projects/SubstationTransformerAndSwitchGearDataController.js");

const SubstationLayoutAndCommunicationDataController = require("../../../controllers/projects/SubstationLayoutAndCommunicationDataController.js");
const MiniGridStationController = require("../../../controllers/projects/MiniGridStationController.js");

const MiniGridStationDistributionLineController = require("../../../controllers/projects/MiniGridStationDistributionLineController.js");
const MiniGridStationConsumerController = require("../../../controllers/projects/MiniGridStationConsumerController.js");
const MiniGridStationBackupPowerSourceController = require("../../../controllers/projects/MiniGridStationBackupPowerSourceController.js");
const MiniGridStationDistributionLineInfrastructureController = require("../../../controllers/projects/MiniGridStationDistributionLineInfrastructureController.js");
const ElectricDistributionTransformerController = require("../../../controllers/projects/ElectricDistributionTransformerController.js");
const ElectricGridControlCenterPerformanceAndMaintenanceController = require("../../../controllers/projects/ElectricGridControlCenterPerformanceAndMaintenanceController.js");


const ElectricDistributionTransformerTypeController = require("../../../controllers/projects/ElectricDistributionTransformerTypeController.js");
const ElectricSmartMetersDataController = require("../../../controllers/projects/ElectricSmartMetersDataController.js");
const ElectricSmartMetersRatingsDataController = require("../../../controllers/projects/ElectricSmartMetersRatingsDataController.js");
const ElectricSmartMetersPerformanceDataController = require("../../../controllers/projects/ElectricSmartMetersPerformanceDataController.js");
const ElectricSmartMetersPrivacyAndSecurityDataController = require("../../../controllers/projects/ElectricSmartMetersPrivacyAndSecurityDataController.js");
const ElectricGridControlCenterDataController = require("../../../controllers/projects/ElectricGridControlCenterDataController.js");
const ElectricGridControlCenterCyberSecurityDataController = require("../../../controllers/projects/ElectricGridControlCenterCyberSecurityDataController.js");

const GeneralAirportInformationController = require("../../../controllers/projects/GeneralAirportInformationController.js");
const RunwayAndApproachDataController = require("../../../controllers/projects/RunwayAndApproachDataController.js");
const TerminalAndFacilityDataController = require("../../../controllers/projects/TerminalAndFacilityDataController.js");

const GeneralDamInformationController = require("../../../controllers/projects/GeneralDamInformationController.js");

const DamReservoirCharacteristicController = require("../../../controllers/projects/DamReservoirCharacteristicController.js");
const DamOutletAndEnergyDissipationSystemController = require("../../../controllers/projects/DamOutletAndEnergyDissipationSystemController.js");
const DamMonitoringAndInstrumentationController = require("../../../controllers/projects/DamMonitoringAndInstrumentationController.js");
const IrrigationAndDrainageDataController = require("../../../controllers/projects/IrrigationAndDrainageDataController.js");
const CanalAndPipeSystemController = require("../../../controllers/projects/CanalAndPipeSystemController.js");
const PumpingSystemAndDrainageController = require("../../../controllers/projects/PumpingSystemAndDrainageController.js");
const WaterTreatmentController = require("../../../controllers/projects/WaterTreatmentController.js");

const RailwayTrackDataController = require("../../../controllers/projects/RailwayTrackDataController.js");
const RailwayTrackGeometryDataController = require("../../../controllers/projects/RailwayTrackGeometryDataController.js");
const RailwayTrackConditionAssessmentController = require("../../../controllers/projects/RailwayTrackConditionAssessmentController.js");
const RailwayTrackMaintenanceAndInspectionController = require("../../../controllers/projects/RailwayTrackMaintenanceAndInspectionController.js");

const RailwayTrackRehabilitationOrRenewalController = require("../../../controllers/projects/RailwayTrackRehabilitationOrRenewalController.js");
const RailwayTrackSafetyController = require("../../../controllers/projects/RailwayTrackSafetyController.js");
const RailwayBallastController = require("../../../controllers/projects/RailwayBallastController.js");
const RailwayBallastMaterialDataController = require("../../../controllers/projects/RailwayBallastMaterialDataController.js");
const RailwayBallastMaterialSpecificationController = require("../../../controllers/projects/RailwayBallastMaterialSpecificationController.js");
const RailwayBallastConditionAssessmentController = require("../../../controllers/projects/RailwayBallastConditionAssessmentController.js");
const RailwayBallastMaintenanceAndRenewalController = require("../../../controllers/projects/RailwayBallastMaintenanceAndRenewalController.js");

const RailwayBallastDrainageAndWaterManagementController = require("../../../controllers/projects/RailwayBallastDrainageAndWaterManagementController.js");
const RailwayBallastEnvironmentalAndOtherFactorController = require("../../../controllers/projects/RailwayBallastEnvironmentalAndOtherFactorController.js");
const RailwaySubBallastMaterialController = require("../../../controllers/projects/RailwaySubBallastMaterialController.js");
const RailwaySubBallastMaterialTestController = require("../../../controllers/projects/RailwaySubBallastMaterialTestController.js");
const RailwaySubBallastConditionAssessmentController = require("../../../controllers/projects/RailwaySubBallastConditionAssessmentController.js");
const RailwaySubBallastMaintenanceAndRenewalController = require("../../../controllers/projects/RailwaySubBallastMaintenanceAndRenewalController.js");
const RailwaySubBallastDrainageAndWaterManagementController = require("../../../controllers/projects/RailwaySubBallastDrainageAndWaterManagementController.js");
const RailwaySubBallastEnvironmentalAndOtherFactorController = require("../../../controllers/projects/RailwaySubBallastEnvironmentalAndOtherFactorController.js");
const RailwaySleeperCharacteristicController = require("../../../controllers/projects/RailwaySleeperCharacteristicController.js");

const RailwaySleeperConditionAssessmentController = require("../../../controllers/projects/RailwaySleeperConditionAssessmentController.js");
const RailwaySleeperMaintenanceAndReplacementController = require("../../../controllers/projects/RailwaySleeperMaintenanceAndReplacementController.js");
const RailwaySleeperFasteningSystemController = require("../../../controllers/projects/RailwaySleeperFasteningSystemController.js");
const RailwaySleeperEnvironmentalAndOtherFactorController = require("../../../controllers/projects/RailwaySleeperEnvironmentalAndOtherFactorController.js");
const RailwayFasteningSystemCharacteristicController = require("../../../controllers/projects/RailwayFasteningSystemCharacteristicController.js");
const RailwayFasteningSystemConditionAssessmentController = require("../../../controllers/projects/RailwayFasteningSystemConditionAssessmentController.js");
const RailwayFasteningSystemMaintenanceAndReplacementController = require("../../../controllers/projects/RailwayFasteningSystemMaintenanceAndReplacementController.js");
const RailwayFasteningSystemEnvironmentalFactorController = require("../../../controllers/projects/RailwayFasteningSystemEnvironmentalFactorController.js");
const RailwaySignalingSystemController = require("../../../controllers/projects/RailwaySignalingSystemController.js");
const RailwayCommunicationSystemController = require("../../../controllers/projects/RailwayCommunicationSystemController.js");
const RailwaySystemConditionAssessmentController = require("../../../controllers/projects/RailwaySystemConditionAssessmentController.js");
const RailwayCommunicationSystemMaintenanceAndTestingController = require("../../../controllers/projects/RailwayCommunicationSystemMaintenanceAndTestingController.js");

const RailwayCommunicationSystemSafetyAndComplianceController = require("../../../controllers/projects/RailwayCommunicationSystemSafetyAndComplianceController.js");
const RailwayEnvironmentalAndOtherFactorController = require("../../../controllers/projects/RailwayEnvironmentalAndOtherFactorController.js");
const RailwayVehicleIdentificationController = require("../../../controllers/projects/RailwayVehicleIdentificationController.js");
const RailwayVehicleSpecificationController = require("../../../controllers/projects/RailwayVehicleSpecificationController.js");
const RailwayVehicleMaintenanceAndInspectionController = require("../../../controllers/projects/RailwayVehicleMaintenanceAndInspectionController.js");

const RailwayVehicleOperationalPerformanceController = require("../../../controllers/projects/RailwayVehicleOperationalPerformanceController.js");
const RailwayVehicleSafetyAndComplianceController = require("../../../controllers/projects/RailwayVehicleSafetyAndComplianceController.js");
const RailwayVehicleInteriorAndPassengerAmenityController = require("../../../controllers/projects/RailwayVehicleInteriorAndPassengerAmenityController.js");
const RailwayVehicleLoadAndCargoSpecificationController = require("../../../controllers/projects/RailwayVehicleLoadAndCargoSpecificationController.js");
const RailwayStationPlatformLayoutController = require("../../../controllers/projects/RailwayStationPlatformLayoutController.js");
const RailwayStationPlatformFacilityController = require("../../../controllers/projects/RailwayStationPlatformFacilityController.js");
const RailwayStationPlatformStructuralElementController = require("../../../controllers/projects/RailwayStationPlatformStructuralElementController.js");
const RailwayStationPlatformSignageAndWayFindingController = require("../../../controllers/projects/RailwayStationPlatformSignageAndWayFindingController.js");
const RailwayStationPlatformSafetyAndSecurityController = require("../../../controllers/projects/RailwayStationPlatformSafetyAndSecurityController.js");
const RailwayStationPlatformSurfaceAndFinishController = require("../../../controllers/projects/RailwayStationPlatformSurfaceAndFinishController.js");
const RailwayStationPlatformPassengerFlowAndCapacityController = require("../../../controllers/projects/RailwayStationPlatformPassengerFlowAndCapacityController.js");
const RailwayStationPlatformEnvironmentalAndOtherFactorController = require("../../../controllers/projects/RailwayStationPlatformEnvironmentalAndOtherFactorController.js");
const RailwayPowerSupplyConfigurationController = require("../../../controllers/projects/RailwayPowerSupplyConfigurationController.js");

const RailwayPowerSubstationsAndEquipmentController = require("../../../controllers/projects/RailwayPowerSubstationsAndEquipmentController.js");
const RailwayPowerDistributionController = require("../../../controllers/projects/RailwayPowerDistributionController.js");
const RailwayPowerSupplyMaintenanceAndTestingController = require("../../../controllers/projects/RailwayPowerSupplyMaintenanceAndTestingController.js");


const RailwayPowerSupplySafetyAndComplianceController = require("../../../controllers/projects/RailwayPowerSupplySafetyAndComplianceController.js");
const RailwayPowerSupplyEnvironmentalAndOtherFactorController = require("../../../controllers/projects/RailwayPowerSupplyEnvironmentalAndOtherFactorController.js");

const RailwayMaintenanceFacilityTypeAndPurposeController = require("../../../controllers/projects/RailwayMaintenanceFacilityTypeAndPurposeController.js");
const RailwayMaintenanceFacilityLayoutAndDesignController = require("../../../controllers/projects/RailwayMaintenanceFacilityLayoutAndDesignController.js");
const RailwayMaintenanceFacilityEquipmentAndToolController = require("../../../controllers/projects/RailwayMaintenanceFacilityEquipmentAndToolController.js");
const RailwayMaintenanceFacilityInfrastructureAndUtilityController = require("../../../controllers/projects/RailwayMaintenanceFacilityInfrastructureAndUtilityController.js");
const RailwayMaintenanceWorkforceAndFacilityStaffController = require("../../../controllers/projects/RailwayMaintenanceWorkforceAndFacilityStaffController.js");
const RailwayMaintenanceFacilityScheduleAndProcedureController = require("../../../controllers/projects/RailwayMaintenanceFacilityScheduleAndProcedureController.js");
const RailwayMaintenanceFacilityAndSecurityController = require("../../../controllers/projects/RailwayMaintenanceFacilityAndSecurityController.js");
const RailwayMaintenanceEnvironmentalAndOtherFactorController = require("../../../controllers/projects/RailwayMaintenanceEnvironmentalAndOtherFactorController.js");

const DashboardController = require("../../../controllers/analytics/DashboardController");

const ConstructionMethodController = require("../../../controllers/projects/ConstructionMethodController.js");
const ClaimController = require("../../../controllers/projects/ClaimController.js");
const ChallengeController = require("../../../controllers/projects/ChallengeController.js");


const validateData = require("../../../middleware/validate/module/project/validate");

module.exports = function (express) {
  const route = express.Router();

  //project outcomes
  route.get("/project-outcomes", ProjectOutcomeController.getAll);
  route.get("/project-outcomes/:id", ProjectOutcomeController.get);
  // route.get("/project/project-outcomes/:id", ProjectOutcomeController.getByProjectId);
  route.post("/project-outcomes", validateData.railWayValidate, ProjectOutcomeController.save);
  route.put(
    "/project-outcomes/:id",
    validateData.railWayValidate,
    ProjectOutcomeController.update
  );
  route.delete("/project-outcomes/:id", ProjectAdditionalInfoController.delete);

  //project outcomes
  route.get("/project-additional-infos", ProjectAdditionalInfoController.getAll);
  route.get("/project-additional-infos/:id", ProjectAdditionalInfoController.get);
  route.post("/project-additional-infos", validateData.railWayValidate, ProjectAdditionalInfoController.save);
  route.put(
    "/project-additional-infos/:id",
    validateData.railWayValidate,
    ProjectAdditionalInfoController.update
  );
  route.delete("/project-additional-infos/:id", ProjectAdditionalInfoController.delete);
//project outcomes
  route.get("/project-outcomes", ProjectOutcomeController.getAll);
  route.get("/project-outcomes/:id", ProjectOutcomeController.get);
  // route.get("/project/project-outcomes/:id", ProjectOutcomeController.getByProjectId);
  route.post("/project-outcomes", validateData.railWayValidate, ProjectOutcomeController.save);
  route.put(
    "/project-outcomes/:id",
    validateData.railWayValidate,
    ProjectOutcomeController.update
  );
  route.delete("/project-outcomes/:id", ProjectAdditionalInfoController.delete);

  //project outcomes
  route.get("/project-additional-infos", ProjectAdditionalInfoController.getAll);
  route.get("/project-additional-infos/:id", ProjectAdditionalInfoController.get);
  route.post("/project-additional-infos", validateData.railWayValidate, ProjectAdditionalInfoController.save);
  route.put(
    "/project-additional-infos/:id",
    validateData.railWayValidate,
    ProjectAdditionalInfoController.update
  );
  route.delete("/project-additional-infos/:id", ProjectAdditionalInfoController.delete);

  //Project status
  route.get("/project-statuses", ProjectStatusController.getAll);
  route.get("/project-statuses/:id", ProjectStatusController.get);
  route.get(
    "/project/project-statuses/:id",
    ProjectStatusController.getByProjectId
  );
  route.get("/project-status-searches", ProjectStatusController.search);
  route.post(
    "/project-statuses",
    validateData.projectStatusValidate,
    ProjectStatusController.save
  );
  route.put(
    "/project-statuses/:id",
    validateData.projectStatusValidate,
    ProjectStatusController.update
  );
  route.delete("/project-statuses/:id", ProjectStatusController.delete);
  // //Project registration
  // route.get("/project", ProjectController.getAll);
  // route.get("/project/:id", ProjectController.get);
  // route.get("/project-searches", ProjectController.search);
  // route.post("/project", validateData.projectValidate, ProjectController.save);
  // route.put("/project/:id", validateData.projectValidate, ProjectController.update);
  // route.delete("/project/:id", ProjectController.delete);
  //Project stakeholder
  route.get("/project-stakeholders", ProjectStakeholderController.getAll);
  route.get("/project-stakeholders/:id", ProjectStakeholderController.get);
  route.get(
    "/project/project-stakeholders/:id",
    ProjectStakeholderController.getByProjectId
  );
  route.get(
    "/stakeholder/project-stakeholders/:id",
    ProjectStakeholderController.getByStakeholderId
  );
  route.get("/project-stakeholder-searches", ProjectStakeholderController.search);
  route.post(
    "/project-stakeholders",
    validateData.projectStakeholderValidate,
    ProjectStakeholderController.save
  );
  route.put(
    "/project-stakeholders/:id",
    validateData.projectStakeholderValidate,
    ProjectStakeholderController.update
  );
  route.delete("/project-stakeholders/:id", ProjectStakeholderController.delete);
  //Project plan
  route.get("/project-plans", ProjectPlanController.getAll);
  route.get("/project-plans/:id", ProjectPlanController.get);
  route.get("/project/project-plans/:id", ProjectPlanController.getByProjectId);
  route.get("/project-plan-searches", ProjectPlanController.search);
  route.post(
    "/project-plans",
    validateData.projectPlanValidate,
    ProjectPlanController.save
  );
  route.put(
    "/project-plans/:id",
    validateData.projectPlanValidate,
    ProjectPlanController.update
  );
  route.delete("/project-plans/:id", ProjectPlanController.delete);
  route.get(
    "/project-yearly-plans/:id/:year",
    ProjectPlanController.getProjectYearlyPlans
  );

  //project report

  route.get("/project-reports", ProjectReportController.getAll);
  route.get("/project-reports/:id", ProjectReportController.get);
  route.get(
    "/project/project-reports/:id",
    ProjectReportController.getByProjectId
  );
  route.get(
    "/populate/project-plan/project-reports/:id",
    ProjectReportController.getByProjectIdAndPopulate
  );
  route.get("/project-report-searches", ProjectReportController.search);
  route.post(
    "/project-reports",
    validateData.projectReportValidate,
    ProjectReportController.save
  );
  route.put(
    "/project-reports/:id",
    validateData.projectReportValidate,
    ProjectReportController.update
  );
  route.delete("/project-reports/:id", ProjectReportController.delete);

  route.get(
    "/monthly-project-report/:id",
    ProjectReportController.getMonthlyProjectReport
  );

  route.get(
    "/project-yearly-reports/:id/:year",
    ProjectReportController.getProjectYearlyReports
  );

  //Project document
  route.get("/project-documents", ProjectDocumentController.getAll);
  route.get("/project-documents/:id", ProjectDocumentController.get);
  route.get(
    "/project/project-documents/:id",
    ProjectDocumentController.getByProjectId
  );
  route.get("/project-document-searches", ProjectDocumentController.search);
  route.post(
    "/project-documents",
    validateData.projectDocumentValidate,
    ProjectDocumentController.save
  );
  route.put(
    "/project-documents/:id",
    validateData.projectDocumentValidate,
    ProjectDocumentController.update
  );
  route.delete("/project-documents/:id", ProjectDocumentController.delete);
  //Construction resource
  route.get("/project-resources", ConstructionResourceController.getAll);
  route.get("/project-resources/:id", ConstructionResourceController.get);
  route.get(
    "/project/project-resources/:id",
    ConstructionResourceController.getByProjectId
  );
  route.get(
    "/constructionproject/project-resources/:id",
    ConstructionResourceController.getByProjectId
  );
  route.get(
    "/construction-resource-searches",
    ConstructionResourceController.search
  );
  route.post(
    "/project-resources",
    validateData.constructionResourceValidate,
    ConstructionResourceController.save
  );
  route.put(
    "/construction-resource/:id",
    validateData.constructionResourceValidate,
    ConstructionResourceController.update
  );
  route.delete(
    "/project-resources/:id",
    ConstructionResourceController.delete
  );
  //Building envelop material
  route.get(
    "/buildingenvelopmaterials",
    BuildingEnvelopMaterialController.getAll
  );
  route.get(
    "/buildingenvelopmaterials/:id",
    BuildingEnvelopMaterialController.get
  );
  route.get(
    "/project/buildingenvelopmaterials/:id",
    BuildingEnvelopMaterialController.getByProjectId
  );
  route.get(
    "/building-envelop-material-searches",
    BuildingEnvelopMaterialController.search
  );
  route.post(
    "/buildingenvelopmaterials",
    validateData.buildingEnvelopMaterialValidate,
    BuildingEnvelopMaterialController.save
  );
  route.put(
    "/buildingenvelopmaterials/:id",
    validateData.buildingEnvelopMaterialValidate,
    BuildingEnvelopMaterialController.update
  );
  route.delete(
    "/buildingenvelopmaterials/:id",
    BuildingEnvelopMaterialController.delete
  );
  //Building dimension details
  route.get(
    "/buildingdimensiondetails",
    BuildingDimensionDetailsController.getAll
  );
  route.get(
    "/buildingdimensiondetails/:id",
    BuildingDimensionDetailsController.get
  );
  route.get(
    "/project/buildingdimensiondetails/:id",
    BuildingDimensionDetailsController.getByProjectId
  );
  route.get(
    "/building-dimension-detail-searches",
    BuildingDimensionDetailsController.search
  );
  route.post(
    "/buildingdimensiondetails",
    validateData.buildingDimensionDetailValidate,
    BuildingDimensionDetailsController.save
  );
  route.put(
    "/buildingdimensiondetails/:id",
    validateData.buildingDimensionDetailValidate,
    BuildingDimensionDetailsController.update
  );
  route.delete(
    "/building-dimension-detail/:id",
    BuildingDimensionDetailsController.delete
  );
  //Telecom infrastructure
  route.get("/telecoms", TelecomInfrastructureController.getAll);
  route.get("/telecoms/:id", TelecomInfrastructureController.get);
  route.get(
    "/project/telecoms/:id",
    TelecomInfrastructureController.getByProjectId
  );
  route.get(
    "/telecom-infrastructure-searches",
    TelecomInfrastructureController.search
  );
  route.post(
    "/telecoms",
    validateData.telecomValidate,
    TelecomInfrastructureController.save
  );
  route.put(
    "/telecoms/:id",
    validateData.telecomValidate,
    TelecomInfrastructureController.update
  );
  route.delete(
    "/telecoms/:id",
    TelecomInfrastructureController.delete
  );
  //Generating capacity
  route.get("/generatingcapacitys", GeneratingCapacityController.getAll);
  route.get("/generatingcapacitys/:id", GeneratingCapacityController.get);
  route.get(
    "/project/generatingcapacitys/:id",
    GeneratingCapacityController.getByProjectId
  );
  route.get("/generating-capacity-searches", GeneratingCapacityController.search);
  route.post(
    "/generatingcapacitys",
    validateData.generatingCapacityValidate,
    GeneratingCapacityController.save
  );
  route.put(
    "/generatingcapacitys/:id",
    validateData.generatingCapacityValidate,
    GeneratingCapacityController.update
  );
  route.delete("/generatingcapacitys/:id", GeneratingCapacityController.delete);
  //Turbine detail
  route.get("/turbineinfos", TurbineDetailController.getAll);
  route.get("/turbineinfos/:id", TurbineDetailController.get);
  route.get(
    "/project/turbineinfos/:id",
    TurbineDetailController.getByProjectId
  );
  route.get("/turbine-detail-searches", TurbineDetailController.search);
  route.post(
    "/turbineinfos",
    validateData.turbineInfoValidate,
    TurbineDetailController.save
  );
  route.put(
    "/turbineinfos/:id",
    validateData.turbineInfoValidate,
    TurbineDetailController.update
  );
  route.delete("/turbineinfos/:id", TurbineDetailController.delete);
  //Hydrolectric dam
  route.get("/hydroelectricdams", HydroElectricDamController.getAll);
  route.get("/hydroelectricdams/:id", HydroElectricDamController.get);
  route.get(
    "/project/hydroelectricdams/:id",
    HydroElectricDamController.getByProjectId
  );
  route.get("/hydro-electric-dam-searches", HydroElectricDamController.search);
  route.post(
    "/hydroelectricdams",
    validateData.hydroElectricDamValidate,
    HydroElectricDamController.save
  );
  route.put(
    "/hydroelectricdams/:id",
    validateData.hydroElectricDamValidate,
    HydroElectricDamController.update
  );
  route.delete("/hydroelectricdams/:id", HydroElectricDamController.delete);
  //Spillways detailf
  route.get("/spillwayinfos", SpillWaysDetailController.getAll);
  route.get("/spillwayinfos/:id", SpillWaysDetailController.get);
  route.get(
    "/project/spillwayinfos/:id",
    SpillWaysDetailController.getByProjectId
  );
  route.get("/spill-way-detail-searches", SpillWaysDetailController.search);
  route.post(
    "/spillwayinfos",
    validateData.spillWayInfoValidate,
    SpillWaysDetailController.save
  );
  route.put(
    "/spillwayinfos/:id",
    validateData.spillWayInfoValidate,
    SpillWaysDetailController.update
  );
  route.delete("/spillwayinfos/:id", SpillWaysDetailController.delete);
  //Reservoir detail
  route.get("/reservoirinfos", ReservoirDetailsController.getAll);
  route.get("/reservoirinfos/:id", ReservoirDetailsController.get);
  route.get(
    "/project/reservoirinfos/:id",
    ReservoirDetailsController.getByProjectId
  );
  route.get("/reservoir-detail-searches", ReservoirDetailsController.search);
  route.post(
    "/reservoirinfos",
    validateData.reserviorDetailValidate,
    ReservoirDetailsController.save
  );
  route.put(
    "/reservoirinfos/:id",
    validateData.reserviorDetailValidate,
    ReservoirDetailsController.update
  );
  route.delete("/reservoirinfos/:id", ReservoirDetailsController.delete);
  //Irrigation capacity
  route.get("/irrigationcapacities", IrrigationCapacityController.getAll);
  route.get("/irrigationcapacities/:id", IrrigationCapacityController.get);
  route.get(
    "/project/irrigationcapacities/:id",
    IrrigationCapacityController.getByProjectId
  );
  route.get("/irrigation-capacity-searches", IrrigationCapacityController.search);
  route.post(
    "/irrigationcapacities",
    validateData.irrigationCapacityValidate,
    IrrigationCapacityController.save
  );
  route.put(
    "/irrigationcapacities/:id",
    validateData.irrigationCapacityValidate,
    IrrigationCapacityController.update
  );
  route.delete("/irrigationcapacities/:id", IrrigationCapacityController.delete);

  
  // route.get("/projects/cpm", ProjectController.getAllCPMProject);
  route.get("/projects/", ProjectController.getAll);
  route.get("/projects/:id", ProjectController.get);
  route.get("/project-searches", ProjectController.search);
  // route.post("/projects/filter/", ProjectController.getProjectByTypeId);
  route.post("/projects", validateData.projectValidate, ProjectController.save);
  route.get("/project-analysis/:id", ProjectController.getProjectAnalysis);

  route.put(
    "/projects/:id",
    validateData.projectValidate,
    ProjectController.update
  );
  route.delete("/projects/:id", ProjectController.delete);
  route.get(
    "/project-general-information/:id",
    ProjectController.getProjectDetail
  );
  route.get("/project-contract-detail/:id", ProjectController.getProjectContractData);
  route.get("/project-detail/:id", ProjectController.getProjectData);
  route.get(
    "/general-project-finance/:id",
    ProjectController.getFinancialNumbers
  );

  
  //project finance route
  route.get("/project-finances/", ProjectFinanceController.getAll);
  route.get("/project-finances/:id", ProjectFinanceController.get);
  route.get(
    "/project-finances/project/:id",
    ProjectFinanceController.getByProjectId
  );
  route.get("/project-finance-searches", ProjectFinanceController.search);
  route.post(
    "/project-finances",
    validateData.projectFinanceValidate,
    ProjectFinanceController.save
  );
  route.put(
    "/project-finances/:id",
    validateData.projectFinanceValidate,
    ProjectFinanceController.update
  );
  route.delete("/project-finances/:id", ProjectFinanceController.delete);

  //project variation route
  route.get("/project-variations/", ProjectVariationController.getAll);
  route.get("/project-variations/:id", ProjectVariationController.get);
  route.get(
    "/project/project-variations/:id",
    ProjectVariationController.getByProjectId
  );
  route.get(
    "/type/project-variations",
    ProjectVariationController.getByProjectType
  );
  route.get("/project-variation-searches", ProjectVariationController.search);
  route.post(
    "/project-variations",
    validateData.projectVariationValidate,
    ProjectVariationController.save
  );
  route.put(
    "/project-variations/:id",
    validateData.projectVariationValidate,
    ProjectVariationController.update
  );
  route.delete("/project-variations/:id", ProjectVariationController.delete);

  //extensions
  route.get("/project-extension-times/", ProjectExtensionTimeController.getAll);
  route.get("/project-extension-times/:id", ProjectExtensionTimeController.get);
  route.get(
    "/project/project-extension-times/:id",
    ProjectExtensionTimeController.getByProjectId
  );
  route.get(
    "/project-extension-time-searches",
    ProjectExtensionTimeController.search
  );
  route.post(
    "/project-extension-times",
    validateData.projectExtensionTimeValidate,
    ProjectExtensionTimeController.save
  );
  route.put(
    "/project-extension-times/:id",
    validateData.projectExtensionTimeValidate,
    ProjectExtensionTimeController.update
  );
  route.delete(
    "/project-extension-times/:id",
    ProjectExtensionTimeController.delete
  );

  //project time
  route.get("/project-times", ProjectTimeController.getAll);
  route.get("/project-times/:id", ProjectTimeController.get);
  route.get("/project/project-times/:id", ProjectTimeController.getByProjectId);
  route.get("/project-time-searches", ProjectTimeController.search);
  route.post(
    "/project-times",
    validateData.projectTimeValidate,
    ProjectTimeController.save
  );
  route.put(
    "/project-times/:id",
    validateData.projectTimeValidate,
    ProjectTimeController.update
  );
  route.delete("/project-times/:id", ProjectTimeController.delete);

  route.get("/project-time-analysis/:id", ProjectController.getContractTimeAnalysis);

  //project bond
  route.get("/project-bonds/", ProjectBondController.getAll);
  route.get("/project-bonds/:id", ProjectBondController.get);
  route.get("/project/project-bonds/:id", ProjectBondController.getByProjectId);
  route.get("/type/project-bonds", ProjectBondController.getByProjectType);
  route.get("/project-bond-searches", ProjectBondController.search);
  route.post(
    "/project-bonds",
    validateData.projectBondValidate,
    ProjectBondController.save
  );
  route.put(
    "/project-bonds/:id",
    validateData.projectBondValidate,
    ProjectBondController.update
  );
  route.delete("/project-bonds/:id", ProjectBondController.delete);

  //road info
  route.get("/roadinfos/", RoadInfoController.getAll);
  route.get("/roadinfos/:id", RoadInfoController.get);
  route.get("/project/roadinfos/:id", RoadInfoController.getByProjectId);
  route.get("/road-info-searches", RoadInfoController.search);
  route.post(
    "/roadinfos",
    validateData.roadDetailValidate,
    RoadInfoController.save
  );
  route.put(
    "/roadinfos/:id",
    validateData.roadDetailValidate,
    RoadInfoController.update
  );
  route.delete("/roadinfos/:id", RoadInfoController.delete);

  //road segment
  route.get("/roadsegments/", RoadSegmentController.getAll);
  route.get("/roadsegments/:id", RoadSegmentController.get);
  route.get("/project/roadsegments/:id", RoadSegmentController.getByProjectId);
  route.post(
    "/roadsegments",
    validateData.roadSegmentValidate,
    RoadSegmentController.save
  );
  route.put(
    "/roadsegments/:id",
    validateData.roadSegmentValidate,
    RoadSegmentController.update
  );
  route.delete("/roadsegments/:id", RoadSegmentController.delete);

  //road layer
  route.get("/roadlayers/", RoadLayerController.getAll);
  route.get("/roadlayers/:id", RoadLayerController.get);
  route.get("/project/roadlayers/:id", RoadLayerController.getByProjectId);
  route.get("/road-layer-searches", RoadLayerController.search);
  route.post(
    "/roadlayers",
    validateData.roadLayerValidate,
    RoadLayerController.save
  );
  route.put(
    "/roadlayers/:id",
    validateData.roadLayerValidate,
    RoadLayerController.update
  );
  route.delete("/roadlayers/:id", RoadLayerController.delete);

  //solar energy
  route.get("/solarenergys", SolarEnergyController.getAll);
  route.get("/solarenergys/:id", SolarEnergyController.get);
  route.get("/project/solarenergys/:id", SolarEnergyController.getByProjectId);
  route.get("/solar-enegy-searches", SolarEnergyController.search);
  route.post(
    "/solarenergys",
    validateData.solarEnergyValidate,
    SolarEnergyController.save
  );
  route.put(
    "/solarenergys/:id",
    validateData.solarEnergyValidate,
    SolarEnergyController.update
  );
  route.delete("/solarenergys/:id", SolarEnergyController.delete);

  //wind energy
  route.get("/windenergys", WindEnergyController.getAll);
  route.get("/windenergys/:id", WindEnergyController.get);
  route.get("/project/windenergys/:id", WindEnergyController.getByProjectId);
  route.get("/wind-enegy-searches", WindEnergyController.search);
  route.post(
    "/windenergys",
    validateData.windEnergyValidate,
    WindEnergyController.save
  );
  route.put(
    "/windenergys/:id",
    validateData.windEnergyValidate,
    WindEnergyController.update
  );
  route.delete("/windenergys/:id", WindEnergyController.delete);

  //transformer
  route.get("/transformers", TransformerController.getAll);
  route.get("/transformers/:id", TransformerController.get);
  route.get("/project/transformers/:id", TransformerController.getByProjectId);
  route.get("/transformer-searches", TransformerController.search);
  route.post(
    "/transformers",
    validateData.transformerValidate,
    TransformerController.save
  );
  route.put(
    "/transformers/:id",
    validateData.transformerValidate,
    TransformerController.update
  );
  route.delete("/transformers/:id", TransformerController.delete);

  //transformer type
  route.get("/transformertypes", TransformerTypeController.getAll);
  route.get("/transformertypes/:id", TransformerTypeController.get);
  route.get(
    "/project/transformertypes/:id",
    TransformerTypeController.getByProjectId
  );
  route.get("/transformer-type-searches", TransformerTypeController.search);
  route.post(
    "/transformertypes",
    validateData.transformerTypeValidate,
    TransformerTypeController.save
  );
  route.put(
    "/transformertypes/:id",
    validateData.transformerTypeValidate,
    TransformerTypeController.update
  );
  route.delete("/transformertypes/:id", TransformerTypeController.delete);

  //transmission lines
  route.get("/transmissionlines", TransmissionLineController.getAll);
  route.get("/transmissionlines/:id", TransmissionLineController.get);
  route.get(
    "/project/transmissionlines/:id",
    TransmissionLineController.getByProjectId
  );
  route.get("/transmission-line-searches", TransmissionLineController.search);
  route.post(
    "/transmissionlines",
    validateData.transmissionLineValidate,
    TransmissionLineController.save
  );
  route.put(
    "/transmissionlines/:id",
    validateData.transmissionLineValidate,
    TransmissionLineController.update
  );
  route.delete("/transmissionlines/:id", TransmissionLineController.delete);

  //electric tower
  route.get("/electrictowers", ElectricTowerController.getAll);
  route.get("/electrictowers/:id", ElectricTowerController.get);
  route.get(
    "/project/electrictowers/:id",
    ElectricTowerController.getByProjectId
  );
  route.get("/electric-tower-searches", ElectricTowerController.search);
  route.post(
    "/electrictowers",
    validateData.electricTowerValidate,
    ElectricTowerController.save
  );
  route.put(
    "/electrictowers/:id",
    validateData.electricTowerValidate,
    ElectricTowerController.update
  );
  route.delete("/electrictowers/:id", ElectricTowerController.delete);

  //railway
  route.get("/railways", RailwayController.getAll);
  route.get("/railways/:id", RailwayController.get);
  route.get("/project/railways/:id", RailwayController.getByProjectId);
  route.get("/railway-searches", RailwayController.search);
  route.post("/railways", validateData.railWayValidate, RailwayController.save);
  route.put(
    "/railways/:id",
    validateData.railWayValidate,
    RailwayController.update
  );
  route.delete("/railways/:id", RailwayController.delete);

  //railway station
  route.get("/railwaystations", RailwayStationController.getAll);
  route.get("/railwaystations/:id", RailwayStationController.get);
  route.get(
    "/project/railwaystations/:id",
    RailwayStationController.getByProjectId
  );
  route.get("/railway-station-searches", RailwayStationController.search);
  route.post(
    "/railwaystations",
    validateData.railWayStationValidate,
    RailwayStationController.save
  );
  route.put(
    "/railwaystations/:id",
    validateData.railWayStationValidate,
    RailwayStationController.update
  );
  route.delete("/railwaystations/:id", RailwayStationController.delete);

  //water irrigation dam
  route.get("/waterirrigationdams", WaterIrrigationDamController.getAll);
  route.get("/waterirrigationdams/:id", WaterIrrigationDamController.get);
  route.get(
    "/project/waterirrigationdams/:id",
    WaterIrrigationDamController.getByProjectId
  );
  route.get(
    "/water-irrigation-dam-searches",
    WaterIrrigationDamController.search
  );
  route.post(
    "/waterirrigationdams",
    validateData.waterIrrigationValidate,
    WaterIrrigationDamController.save
  );
  route.put(
    "/waterirrigationdams/:id",
    validateData.waterIrrigationValidate,
    WaterIrrigationDamController.update
  );
  route.delete(
    "/waterirrigationdams/:id",
    WaterIrrigationDamController.delete
  );

  //port
  route.get("/ports", PortController.getAll);
  route.get("/ports/:id", PortController.get);
  route.get("/project/ports/:id", PortController.getByProjectId);
  route.get("/port", PortController.search);
  route.post("/ports", validateData.portValidate, PortController.save);
  route.put("/ports/:id", validateData.portValidate, PortController.update);
  route.delete("/ports/:id", PortController.delete);

  //payment
  route.get("/payments", PaymentController.getAll);
  route.get("/payments/:id", PaymentController.get);
  route.get("/type/project/payments", PaymentController.getByProjectIdAndType);
  route.get("/project/payments/:id", PaymentController.getByProjectId);
  route.get("/paymenst", PaymentController.search);
  route.post("/payments", validateData.paymentValidate, PaymentController.save);
  route.put(
    "/payments/:id",
    validateData.paymentValidate,
    PaymentController.update
  );
  route.delete("/payments/:id", PaymentController.delete);

  //summary
  route.get(
    "/matrix/project",
    ProjectController.countAllProjectWithProjectType
  );
  route.get(  
    "/count/project/projectcategories",
    ProjectController.countAllProjectWithProjectCategory
  );

  // ProjectManager routes with validation
  route.get("/project-managers", ProjectManagerController.getAll);
  route.get("/project-managers/:id", ProjectManagerController.get);
  route.post("/project-managers", validateData.railWayValidate, ProjectManagerController.save);
  route.put(
    "/project-managers/:id",
    validateData.railWayValidate,
    ProjectManagerController.update
  );
  route.delete("/project-managers/:id", ProjectManagerController.delete);

  // ProjectContactPerson routes with validation
  route.get("/project-contact-people", ProjectContactPersonController.getAll);
  route.get("/project-contact-people/:id", ProjectContactPersonController.get);
  route.post("/project-contact-people", validateData.projectContactPersonValidate, ProjectContactPersonController.save);
  route.put("/project-contact-people/:id", validateData.projectContactPersonValidate, ProjectContactPersonController.update);
  route.delete("/project-contact-people/:id", ProjectContactPersonController.delete);

  // ProjectSafetyStatus routes with validation
  route.get("/project-safety-statuses", ProjectSafetyStatusController.getAll);
  route.get("/project-safety-statuses/:id", ProjectSafetyStatusController.get);
  route.post("/project-safety-statuses", validateData.projectSafetyStatusValidate, ProjectSafetyStatusController.save);
  route.put("/project-safety-statuses/:id", validateData.projectSafetyStatusValidate, ProjectSafetyStatusController.update);
  route.delete("/project-safety-statuses/:id", ProjectSafetyStatusController.delete);

  // ProjectQuality routes with validation  
  route.get("/project-qualities", ProjectQualityController.getAll);
  route.get("/project-qualities/:id", ProjectQualityController.get);
  route.post("/project-qualities", validateData.projectQualityValidate, ProjectQualityController.save);
  route.put("/project-qualities/:id", validateData.projectQualityValidate, ProjectQualityController.update);
  route.delete("/project-qualities/:id", ProjectQualityController.delete);

  // WeatherCondition routes with validation
  route.get("/weather-conditions", WeatherConditionController.getAll);
  route.get("/weather-conditions/:id", WeatherConditionController.get);
  route.post("/weather-conditions", validateData.weatherConditionValidate, WeatherConditionController.save);
  route.put("/weather-conditions/:id", validateData.weatherConditionValidate, WeatherConditionController.update);
  route.delete("/weather-conditions/:id", WeatherConditionController.delete);
  
  // ProjectConstructionType routes with validation
  route.get("/project-construction-types", ProjectConstructionTypeController.getAll);
  route.get("/project-construction-types/:id", ProjectConstructionTypeController.get);
  route.post("/project-construction-types", validateData.projectConstructionTypeValidate, ProjectConstructionTypeController.save);
  route.put("/project-construction-types/:id", validateData.projectConstructionTypeValidate, ProjectConstructionTypeController.update);
  route.delete("/project-construction-types/:id", ProjectConstructionTypeController.delete);

  // SegmentGeometry routes with validation
  route.get("/segment-geometries", SegmentGeometryController.getAll);
  route.get("/segment-geometries/:id", SegmentGeometryController.get);
  route.post("/segment-geometries", validateData.segmentGeometryValidate, SegmentGeometryController.save);
  route.put("/segment-geometries/:id", validateData.segmentGeometryValidate, SegmentGeometryController.update);
  route.delete("/segment-geometries/:id", SegmentGeometryController.delete);

  // IntersectionAndDriveway routes with validation
  route.get("/intersection-and-driveways", IntersectionAndDrivewayController.getAll);
  route.get("/intersection-and-driveways/:id", IntersectionAndDrivewayController.get);
  route.post("/intersection-and-driveways", validateData.intersectionAndDrivewayValidate, IntersectionAndDrivewayController.save);
  route.put("/intersection-and-driveways/:id", validateData.intersectionAndDrivewayValidate, IntersectionAndDrivewayController.update);
  route.delete("/intersection-and-driveways/:id", IntersectionAndDrivewayController.delete);


  
   // TrafficParameter routes with validation
   route.get("/traffic-parameters", TrafficParameterController.getAll);
   route.get("/traffic-parameters/:id", TrafficParameterController.get);
   route.post("/traffic-parameters", validateData.trafficParameterValidate, TrafficParameterController.save);
   route.put("/traffic-parameters/:id", validateData.trafficParameterValidate, TrafficParameterController.update);
   route.delete("/traffic-parameters/:id", TrafficParameterController.delete);
 
   // Accessory routes with validation
   route.get("/accessories", AccessoryController.getAll);
   route.get("/accessories/:id", AccessoryController.get);
   route.post("/accessories", validateData.accessoryValidate, AccessoryController.save);
   route.put("/accessories/:id", validateData.accessoryValidate, AccessoryController.update);
   route.delete("/accessories/:id", AccessoryController.delete);

  // Pavement routes with validation
  route.get("/pavements", PavementController.getAll);
  route.get("/pavements/:id", PavementController.get);
  route.post("/pavements", validateData.pavementValidate, PavementController.save);
  route.put("/pavements/:id", validateData.pavementValidate, PavementController.update);
  route.delete("/pavements/:id", PavementController.delete);

  // CulvertBasicData routes with validation
  route.get("/culvert-basic-datas", CulvertBasicDataController.getAll);
  route.get("/culvert-basic-datas/:id", CulvertBasicDataController.get);
  route.post("/culvert-basic-datas", validateData.culvertBasicDataValidate, CulvertBasicDataController.save);
  route.put("/culvert-basic-datas/:id", validateData.culvertBasicDataValidate, CulvertBasicDataController.update);
  route.delete("/culvert-basic-datas/:id", CulvertBasicDataController.delete);

  // CulvertStructuralInformation routes with validation
  route.get("/culvert-structural-informations", CulvertStructuralInformationController.getAll);
  route.get("/culvert-structural-informations/:id", CulvertStructuralInformationController.get);
  route.post("/culvert-structural-informations", validateData.culvertStructuralInformationValidate, CulvertStructuralInformationController.save);
  route.put("/culvert-structural-informations/:id", validateData.culvertStructuralInformationValidate, CulvertStructuralInformationController.update);
  route.delete("/culvert-structural-informations/:id", CulvertStructuralInformationController.delete);

  // CulvertRoadOverInformation routes with validation
  route.get("/culvert-road-over-informations", CulvertRoadOverInformationController.getAll);
  route.get("/culvert-road-over-informations/:id", CulvertRoadOverInformationController.get);
  route.post("/culvert-road-over-informations", validateData.culvertRoadOverInformationValidate, CulvertRoadOverInformationController.save);
  route.put("/culvert-road-over-informations/:id", validateData.culvertRoadOverInformationValidate, CulvertRoadOverInformationController.update);
  route.delete("/culvert-road-over-informations/:id", CulvertRoadOverInformationController.delete);

  // BridgeBasicData routes with validation
  route.get("/bridge-basic-datas", BridgeBasicDataController.getAll);
  route.get("/bridge-basic-datas/:id", BridgeBasicDataController.get);
  route.post("/bridge-basic-datas", validateData.bridgeBasicDataValidate, BridgeBasicDataController.save);
  route.put("/bridge-basic-datas/:id", validateData.bridgeBasicDataValidate, BridgeBasicDataController.update);
  route.delete("/bridge-basic-datas/:id", BridgeBasicDataController.delete);


  // BridgeAreaData routes with validation
  route.get("/bridge-area-datas", BridgeAreaDataController.getAll);
  route.get("/bridge-area-datas/:id", BridgeAreaDataController.get);
  route.post("/bridge-area-datas", validateData.bridgeAreaDataValidate, BridgeAreaDataController.save);
  route.put("/bridge-area-datas/:id", validateData.bridgeAreaDataValidate, BridgeAreaDataController.update);
  route.delete("/bridge-area-datas/:id", BridgeAreaDataController.delete);

  

  // BridgeSuperStructure routes with validation
  route.get("/bridge-super-structures", BridgeSuperStructureController.getAll);
  route.get("/bridge-super-structures/:id", BridgeSuperStructureController.get);
  route.post("/bridge-super-structures", validateData.bridgeSuperStructureValidate, BridgeSuperStructureController.save);
  route.put("/bridge-super-structures/:id", validateData.bridgeSuperStructureValidate, BridgeSuperStructureController.update);
  route.delete("/bridge-super-structures/:id", BridgeSuperStructureController.delete);

  
  // BridgeSuperStructure routes with validation
  route.get("/bridge-sub-structures", BridgeSubStructureController.getAll);
  route.get("/bridge-sub-structures/:id", BridgeSubStructureController.get);
  route.post("/bridge-sub-structures", validateData.bridgeSubStructureValidate, BridgeSubStructureController.save);
  route.put("/bridge-sub-structures/:id", validateData.bridgeSubStructureValidate, BridgeSubStructureController.update);
  route.delete("/bridge-sub-structures/:id", BridgeSubStructureController.delete);

  // BridgeFoundation routes with validation
  route.get("/bridge-foundations", BridgeFoundationController.getAll);
  route.get("/bridge-foundations/:id", BridgeFoundationController.get);
  route.post("/bridge-foundations", validateData.bridgeFoundationValidate, BridgeFoundationController.save);
  route.put("/bridge-foundations/:id", validateData.bridgeFoundationValidate, BridgeFoundationController.update);
  route.delete("/bridge-foundations/:id", BridgeFoundationController.delete);



  // BridgeInspection routes with validation
  route.get("/bridge-inspections", BridgeInspectionController.getAll);
  route.get("/bridge-inspections/:id", BridgeInspectionController.get);
  route.post("/bridge-inspections", validateData.bridgeInspectionValidate, BridgeInspectionController.save);
  route.put("/bridge-inspections/:id", validateData.bridgeInspectionValidate, BridgeInspectionController.update);
  route.delete("/bridge-inspections/:id", BridgeInspectionController.delete);


  // BridgeStructureInformation routes with validation
  route.get("/bridge-structure-informations", BridgeStructureInformationController.getAll);
  route.get("/bridge-structure-informations/:id", BridgeStructureInformationController.get);
  route.post("/bridge-structure-informations", validateData.bridgeStructureInformationValidate, BridgeStructureInformationController.save);
  route.put("/bridge-structure-informations/:id", validateData.bridgeStructureInformationValidate, BridgeStructureInformationController.update);
  route.delete("/bridge-structure-informations/:id", BridgeStructureInformationController.delete);

  
  // TrafficVolume routes with validation
  route.get("/traffic-volumes", TrafficVolumeController.getAll);
  route.get("/traffic-volumes/:id", TrafficVolumeController.get);
  route.post("/traffic-volumes", validateData.trafficVolumeValidate, TrafficVolumeController.save);
  route.put("/traffic-volumes/:id", validateData.trafficVolumeValidate, TrafficVolumeController.update);
  route.delete("/traffic-volumes/:id", TrafficVolumeController.delete);

  // RoadProjectQualityControl routes with validation
  route.get("/road-project-quality-controls", RoadProjectQualityControlController.getAll);
  route.get("/road-project-quality-controls/:id", RoadProjectQualityControlController.get);
  route.post("/road-project-quality-controls", validateData.roadProjectQualityControlValidate, RoadProjectQualityControlController.save);
  route.put("/road-project-quality-controls/:id", validateData.roadProjectQualityControlValidate, RoadProjectQualityControlController.update);
  route.delete("/road-project-quality-controls/:id", RoadProjectQualityControlController.delete);


  // RoadDrainage routes with validation
  route.get("/road-drainages", RoadDrainageController.getAll);
  route.get("/road-drainages/:id", RoadDrainageController.get);
  route.post("/road-drainages", validateData.roadDrainageValidate, RoadDrainageController.save);
  route.put("/road-drainages/:id", validateData.roadDrainageValidate, RoadDrainageController.update);
  route.delete("/road-drainages/:id", RoadDrainageController.delete);


  // GeotechnicalInformation routes with validation
  route.get("/geotechnical-informations", GeotechnicalInformationController.getAll);
  route.get("/geotechnical-informations/:id", GeotechnicalInformationController.get);
  route.post("/geotechnical-informations", validateData.geotechnicalInformationValidate, GeotechnicalInformationController.save);
  route.put("/geotechnical-informations/:id", validateData.geotechnicalInformationValidate, GeotechnicalInformationController.update);
  route.delete("/geotechnical-informations/:id", GeotechnicalInformationController.delete);

  // EnvironmentalData routes with validation
  route.get("/environmental-datas", EnvironmentalDataController.getAll);
  route.get("/environmental-datas/:id", EnvironmentalDataController.get);
  route.post("/environmental-datas", validateData.environmentalDataValidate, EnvironmentalDataController.save);
  route.put("/environmental-datas/:id", validateData.environmentalDataValidate, EnvironmentalDataController.update);
  route.delete("/environmental-datas/:id", EnvironmentalDataController.delete);

  // RoadMaintenanceData routes with validation
  route.get("/road-maintenance-datas", RoadMaintenanceDataController.getAll);
  route.get("/road-maintenance-datas/:id", RoadMaintenanceDataController.get);
  route.post("/road-maintenance-datas", validateData.roadMaintenanceDataValidate, RoadMaintenanceDataController.save);
  route.put("/road-maintenance-datas/:id", validateData.roadMaintenanceDataValidate, RoadMaintenanceDataController.update);
  route.delete("/road-maintenance-datas/:id", RoadMaintenanceDataController.delete);


  // RoadMaintenanceActivity routes with validation
  route.get("/road-maintenance-activities", RoadMaintenanceActivityController.getAll);
  route.get("/road-maintenance-activities/:id", RoadMaintenanceActivityController.get);
  route.post("/road-maintenance-activities", validateData.roadMaintenanceActivityValidate, RoadMaintenanceActivityController.save);
  route.put("/road-maintenance-activities/:id", validateData.roadMaintenanceActivityValidate, RoadMaintenanceActivityController.update);
  route.delete("/road-maintenance-activities/:id", RoadMaintenanceActivityController.delete);


  // DrainageAssessment routes with validation
  route.get("/drainage-assessments", DrainageAssessmentController.getAll);
  route.get("/drainage-assessments/:id", DrainageAssessmentController.get);
  route.post("/drainage-assessments", validateData.drainageAssessmentValidate, DrainageAssessmentController.save);
  route.put("/drainage-assessments/:id", validateData.drainageAssessmentValidate, DrainageAssessmentController.update);
  route.delete("/drainage-assessments/:id", DrainageAssessmentController.delete);


  // RoadSurfaceCondition routes with validation
  route.get("/road-surface-conditions", RoadSurfaceConditionController.getAll);
  route.get("/road-surface-conditions/:id", RoadSurfaceConditionController.get);
  route.post("/road-surface-conditions", validateData.roadSurfaceConditionValidate, RoadSurfaceConditionController.save);
  route.put("/road-surface-conditions/:id", validateData.roadSurfaceConditionValidate, RoadSurfaceConditionController.update);
  route.delete("/road-surface-conditions/:id", RoadSurfaceConditionController.delete);

  // MaintenanceHistory routes with validation
  route.get("/maintenance-histories", MaintenanceHistoryController.getAll);
  route.get("/maintenance-histories/:id", MaintenanceHistoryController.get);
  route.post("/maintenance-histories", validateData.maintenanceHistoryValidate, MaintenanceHistoryController.save);
  route.put("/maintenance-histories/:id", validateData.maintenanceHistoryValidate, MaintenanceHistoryController.update);
  route.delete("/maintenance-histories/:id", MaintenanceHistoryController.delete);


  // SafetyAndHealth routes with validation
  route.get("/safety-and-healths", SafetyAndHealthController.getAll);
  route.get("/safety-and-healths/:id", SafetyAndHealthController.get);
  route.post("/safety-and-healths", validateData.safetyAndHealthValidate, SafetyAndHealthController.save);
  route.put("/safety-and-healths/:id", validateData.safetyAndHealthValidate, SafetyAndHealthController.update);
  route.delete("/safety-and-healths/:id", SafetyAndHealthController.delete);

  // TelecomInfrastructureComponent routes with validation
  route.get("/telecom-infrastructure-components", TelecomInfrastructureComponentController.getAll);
  route.get("/telecom-infrastructure-components/:id", TelecomInfrastructureComponentController.get);
  route.post("/telecom-infrastructure-components", validateData.telecomInfrastructureComponentValidate, TelecomInfrastructureComponentController.save);
  route.put("/telecom-infrastructure-components/:id", validateData.telecomInfrastructureComponentValidate, TelecomInfrastructureComponentController.update);
  route.delete("/telecom-infrastructure-components/:id", TelecomInfrastructureComponentController.delete);


  // TelecomInfrastructureAge routes with validation
  route.get("/telecom-infrastructure-ages", TelecomInfrastructureAgeController.getAll);
  route.get("/telecom-infrastructure-ages/:id", TelecomInfrastructureAgeController.get);
  route.post("/telecom-infrastructure-ages", validateData.telecomInfrastructureAgeValidate, TelecomInfrastructureAgeController.save);
  route.put("/telecom-infrastructure-ages/:id", validateData.telecomInfrastructureAgeValidate, TelecomInfrastructureAgeController.update);
  route.delete("/telecom-infrastructure-ages/:id", TelecomInfrastructureAgeController.delete);

  // Maintenance routes with validation
  route.get("/maintenances", MaintenanceController.getAll);
  route.get("/maintenances/:id", MaintenanceController.get);
  route.post("/maintenances", validateData.maintenanceValidate, MaintenanceController.save);
  route.put("/maintenances/:id", validateData.maintenanceValidate, MaintenanceController.update);
  route.delete("/maintenances/:id", MaintenanceController.delete);

  // NetworkCapacity routes with validation
  route.get("/network-capacities", NetworkCapacityController.getAll);
  route.get("/network-capacities/:id", NetworkCapacityController.get);
  route.post("/network-capacities", validateData.networkCapacityValidate, NetworkCapacityController.save);
  route.put("/network-capacities/:id", validateData.networkCapacityValidate, NetworkCapacityController.update);
  route.delete("/network-capacities/:id", NetworkCapacityController.delete);

  // MobileNetwork routes with validation
  route.get("/mobile-networks", MobileNetworkController.getAll);
  route.get("/mobile-networks/:id", MobileNetworkController.get);
  route.post("/mobile-networks", validateData.mobileNetworkValidate, MobileNetworkController.save);
  route.put("/mobile-networks/:id", validateData.mobileNetworkValidate, MobileNetworkController.update);
  route.delete("/mobile-networks/:id", MobileNetworkController.delete);


  // MobileNetworkComponentAge routes with validation
  route.get("/mobile-network-component-ages", MobileNetworkComponentAgeController.getAll);
  route.get("/mobile-network-component-ages/:id", MobileNetworkComponentAgeController.get);
  route.post("/mobile-network-component-ages", validateData.mobileNetworkComponentAgeValidate, MobileNetworkComponentAgeController.save);
  route.put("/mobile-network-component-ages/:id", validateData.mobileNetworkComponentAgeValidate, MobileNetworkComponentAgeController.update);
  route.delete("/mobile-network-component-ages/:id", MobileNetworkComponentAgeController.delete);


  // NetworkCoverage routes with validation
  route.get("/network-coverages", NetworkCoverageController.getAll);
  route.get("/network-coverages/:id", NetworkCoverageController.get);
  route.post("/network-coverages", validateData.networkCoverageValidate, NetworkCoverageController.save);
  route.put("/network-coverages/:id", validateData.networkCoverageValidate, NetworkCoverageController.update);
  route.delete("/network-coverages/:id", NetworkCoverageController.delete);

  // SatelliteNetwork routes with validation
  route.get("/satellite-networks", SatelliteNetworkController.getAll);
  route.get("/satellite-networks/:id", SatelliteNetworkController.get);
  route.post("/satellite-networks", validateData.satelliteNetworkValidate, SatelliteNetworkController.save);
  route.put("/satellite-networks/:id", validateData.satelliteNetworkValidate, SatelliteNetworkController.update);
  route.delete("/satellite-networks/:id", SatelliteNetworkController.delete);


  // SatelliteInfrastructureAge routes with validation
  route.get("/satellite-infrastructure-ages", SatelliteInfrastructureAgeController.getAll);
  route.get("/satellite-infrastructure-ages/:id", SatelliteInfrastructureAgeController.get);
  route.post("/satellite-infrastructure-ages", validateData.satelliteInfrastructureAgeValidate, SatelliteInfrastructureAgeController.save);
  route.put("/satellite-infrastructure-ages/:id", validateData.satelliteInfrastructureAgeValidate, SatelliteInfrastructureAgeController.update);
  route.delete("/satellite-infrastructure-ages/:id", SatelliteInfrastructureAgeController.delete);


  // SatelliteNetworkComponentManufacturer routes with validation
  route.get("/satellite-network-component-manufacturers", SatelliteNetworkComponentManufacturerController.getAll);
  route.get("/satellite-network-component-manufacturers/:id", SatelliteNetworkComponentManufacturerController.get);
  route.post("/satellite-network-component-manufacturers", validateData.satelliteNetworkComponentManufacturerValidate, SatelliteNetworkComponentManufacturerController.save);
  route.put("/satellite-network-component-manufacturers/:id", validateData.satelliteNetworkComponentManufacturerValidate, SatelliteNetworkComponentManufacturerController.update);
  route.delete("/satellite-network-component-manufacturers/:id", SatelliteNetworkComponentManufacturerController.delete);

  // InternetConnection routes with validation
  route.get("/internet-connections", InternetConnectionController.getAll);
  route.get("/internet-connections/:id", InternetConnectionController.get);
  route.post("/internet-connections", InternetConnectionController.save);
  // route.post("/internet-connections", validateData.internetConnectionValidate, InternetConnectionController.save);
  route.put("/internet-connections/:id", validateData.internetConnectionValidate, InternetConnectionController.update);
  route.delete("/internet-connections/:id", InternetConnectionController.delete);


  // InternetConnectionInfrastructureAge routes with validation
  route.get("/internet-connection-infrastructure-ages", InternetConnectionInfrastructureAgeController.getAll);
  route.get("/internet-connection-infrastructure-ages/:id", InternetConnectionInfrastructureAgeController.get);
  route.post("/internet-connection-infrastructure-ages", InternetConnectionInfrastructureAgeController.save);
  // route.post("/internet-connection-infrastructure-ages", validateData.internetConnectionInfrastructureAgeValidate, InternetConnectionInfrastructureAgeController.save);
  route.put("/internet-connection-infrastructure-ages/:id", validateData.internetConnectionInfrastructureAgeValidate, InternetConnectionInfrastructureAgeController.update);
  route.delete("/internet-connection-infrastructure-ages/:id", InternetConnectionInfrastructureAgeController.delete);

  // InternetConnectionInfrastructureManufacturer routes with validation
  route.get("/internet-connection-infrastructure-manufacturers", InternetConnectionInfrastructureManufacturerController.getAll);
  route.get("/internet-connection-infrastructure-manufacturers/:id", InternetConnectionInfrastructureManufacturerController.get);
  route.post("/internet-connection-infrastructure-manufacturers", validateData.internetConnectionInfrastructureManufacturerValidate, InternetConnectionInfrastructureManufacturerController.save);
  route.put("/internet-connection-infrastructure-manufacturers/:id", validateData.internetConnectionInfrastructureManufacturerValidate, InternetConnectionInfrastructureManufacturerController.update);
  route.delete("/internet-connection-infrastructure-manufacturers/:id", InternetConnectionInfrastructureManufacturerController.delete);

  // BroadcastingInfrastructure routes with validation
  route.get("/broadcasting-infrastructures", BroadcastingInfrastructureController.getAll);
  route.get("/broadcasting-infrastructures/:id", BroadcastingInfrastructureController.get);
  route.post("/broadcasting-infrastructures", validateData.broadcastingInfrastructureValidate, BroadcastingInfrastructureController.save);
  route.put("/broadcasting-infrastructures/:id", validateData.broadcastingInfrastructureValidate, BroadcastingInfrastructureController.update);
  route.delete("/broadcasting-infrastructures/:id", BroadcastingInfrastructureController.delete);

  // BroadcastingInfrastructureAge routes with validation
  route.get("/broadcasting-infrastructure-ages", BroadcastingInfrastructureAgeController.getAll);
  route.get("/broadcasting-infrastructure-ages/:id", BroadcastingInfrastructureAgeController.get);
  route.post("/broadcasting-infrastructure-ages", validateData.broadcastingInfrastructureAgeValidate, BroadcastingInfrastructureAgeController.save);
  route.put("/broadcasting-infrastructure-ages/:id", validateData.broadcastingInfrastructureAgeValidate, BroadcastingInfrastructureAgeController.update);
  route.delete("/broadcasting-infrastructure-ages/:id", BroadcastingInfrastructureAgeController.delete);

  // BroadcastingInfrastructureManufacturer routes with validation
  route.get("/broadcasting-infrastructure-manufacturers", BroadcastingInfrastructureManufacturerController.getAll);
  route.get("/broadcasting-infrastructure-manufacturers/:id", BroadcastingInfrastructureManufacturerController.get);
  route.post("/broadcasting-infrastructure-manufacturers", validateData.broadcastingInfrastructureManufacturerValidate, BroadcastingInfrastructureManufacturerController.save);
  route.put("/broadcasting-infrastructure-manufacturers/:id", validateData.broadcastingInfrastructureManufacturerValidate, BroadcastingInfrastructureManufacturerController.update);
  route.delete("/broadcasting-infrastructure-manufacturers/:id", BroadcastingInfrastructureManufacturerController.delete);

  // DataCenter routes with validation
  route.get("/data-centers", DataCenterController.getAll);
  route.get("/data-centers/:id", DataCenterController.get);
  route.post("/data-centers", validateData.dataCenterValidate, DataCenterController.save);
  route.put("/data-centers/:id", validateData.dataCenterValidate, DataCenterController.update);
  route.delete("/data-centers/:id", DataCenterController.delete);

  // DataCenterComponentAge routes with validation
  route.get("/data-center-component-ages", DataCenterComponentAgeController.getAll);
  route.get("/data-center-component-ages/:id", DataCenterComponentAgeController.get);
  route.post("/data-center-component-ages", validateData.dataCenterComponentAgeValidate, DataCenterComponentAgeController.save);
  route.put("/data-center-component-ages/:id", validateData.dataCenterComponentAgeValidate, DataCenterComponentAgeController.update);
  route.delete("/data-center-component-ages/:id", DataCenterComponentAgeController.delete);

  // DataCenterComponentManufacturer routes with validation
  route.get("/data-center-component-manufacturers", DataCenterComponentManufacturerController.getAll);
  route.get("/data-center-component-manufacturers/:id", DataCenterComponentManufacturerController.get);
  route.post("/data-center-component-manufacturers", validateData.dataCenterComponentManufacturerValidate, DataCenterComponentManufacturerController.save);
  route.put("/data-center-component-manufacturers/:id", validateData.dataCenterComponentManufacturerValidate, DataCenterComponentManufacturerController.update);
  route.delete("/data-center-component-manufacturers/:id", DataCenterComponentManufacturerController.delete);

  // DataCenterFacilityCapacity routes with validation
  route.get("/data-center-facility-capacities", DataCenterFacilityCapacityController.getAll);
  route.get("/data-center-facility-capacities/:id", DataCenterFacilityCapacityController.get);
  route.post("/data-center-facility-capacities", validateData.dataCenterFacilityCapacityValidate, DataCenterFacilityCapacityController.save);
  route.put("/data-center-facility-capacities/:id", validateData.dataCenterFacilityCapacityValidate, DataCenterFacilityCapacityController.update);
  route.delete("/data-center-facility-capacities/:id", DataCenterFacilityCapacityController.delete);

  // EnvironmentalControl routes with validation
  route.get("/environmental-controls", EnvironmentalControlController.getAll);
  route.get("/environmental-controls/:id", EnvironmentalControlController.get);
  route.post("/environmental-controls", validateData.environmentalControlValidate, EnvironmentalControlController.save);
  route.put("/environmental-controls/:id", validateData.environmentalControlValidate, EnvironmentalControlController.update);
  route.delete("/environmental-controls/:id", EnvironmentalControlController.delete);

  // PowerGenerationCapacity routes with validation
  route.get("/power-generation-capacities", PowerGenerationCapacityController.getAll);
  route.get("/power-generation-capacities/:id", PowerGenerationCapacityController.get);
  route.post("/power-generation-capacities", validateData.powerGenerationCapacityValidate, PowerGenerationCapacityController.save);
  route.put("/power-generation-capacities/:id", validateData.powerGenerationCapacityValidate, PowerGenerationCapacityController.update);
  route.delete("/power-generation-capacities/:id", PowerGenerationCapacityController.delete);


  // HydrologicalInformation routes with validation
  route.get("/hydrological-informations", HydrologicalInformationController.getAll);
  route.get("/hydrological-informations/:id", HydrologicalInformationController.get);
  route.post("/hydrological-informations", validateData.hydrologicalInformationValidate, HydrologicalInformationController.save);
  route.put("/hydrological-informations/:id", validateData.hydrologicalInformationValidate, HydrologicalInformationController.update);
  route.delete("/hydrological-informations/:id", HydrologicalInformationController.delete);

  // Dam routes with validation
  route.get("/dams", DamController.getAll);
  route.get("/dams/:id", DamController.get);
  route.post("/dams", validateData.damValidate, DamController.save);
  route.put("/dams/:id", validateData.damValidate, DamController.update);
  route.delete("/dams/:id", DamController.delete);

  // Transmission routes with validation
  route.get("/transmissions", TransmissionController.getAll);
  route.get("/transmissions/:id", TransmissionController.get);
  route.post("/transmissions", validateData.transmissionValidate, TransmissionController.save);
  route.put("/transmissions/:id", validateData.transmissionValidate, TransmissionController.update);
  route.delete("/transmissions/:id", TransmissionController.delete);

  // ReliabilityAndMaintenance routes with validation
  route.get("/reliability-and-maintenance", ReliabilityAndMaintenanceController.getAll);
  route.get("/reliability-and-maintenance/:id", ReliabilityAndMaintenanceController.get);
  route.post("/reliability-and-maintenance", validateData.reliabilityAndMaintenanceValidate, ReliabilityAndMaintenanceController.save);
  route.put("/reliability-and-maintenance/:id", validateData.reliabilityAndMaintenanceValidate, ReliabilityAndMaintenanceController.update);
  route.delete("/reliability-and-maintenance/:id", ReliabilityAndMaintenanceController.delete);

  // EnvironmentalAndSocialImpact routes with validation
  route.get("/environmental-and-social-impacts", EnvironmentalAndSocialImpactController.getAll);
  route.get("/environmental-and-social-impacts/:id", EnvironmentalAndSocialImpactController.get);
  route.post("/environmental-and-social-impacts", validateData.environmentalAndSocialImpactValidate, EnvironmentalAndSocialImpactController.save);
  route.put("/environmental-and-social-impacts/:id", validateData.environmentalAndSocialImpactValidate, EnvironmentalAndSocialImpactController.update);
  route.delete("/environmental-and-social-impacts/:id", EnvironmentalAndSocialImpactController.delete);


  // RegulationAndPolicy routes with validation
  route.get("/regulation-and-policies", RegulationAndPolicyController.getAll);
  route.get("/regulation-and-policies/:id", RegulationAndPolicyController.get);
  route.post("/regulation-and-policies", validateData.regulationAndPolicyValidate, RegulationAndPolicyController.save);
  route.put("/regulation-and-policies/:id", validateData.regulationAndPolicyValidate, RegulationAndPolicyController.update);
  route.delete("/regulation-and-policies/:id", RegulationAndPolicyController.delete);

  // WindResource routes with validation
  route.get("/wind-resources", WindResourceController.getAll);
  route.get("/wind-resources/:id", WindResourceController.get);
  route.post("/wind-resources", validateData.windResourceValidate, WindResourceController.save);
  route.put("/wind-resources/:id", validateData.windResourceValidate, WindResourceController.update);
  route.delete("/wind-resources/:id", WindResourceController.delete);


  // WindTurbine routes with validation
  route.get("/wind-turbines", WindTurbineController.getAll);
  route.get("/wind-turbines/:id", WindTurbineController.get);
  route.post("/wind-turbines", validateData.windTurbineValidate, WindTurbineController.save);
  route.put("/wind-turbines/:id", validateData.windTurbineValidate, WindTurbineController.update);
  route.delete("/wind-turbines/:id", WindTurbineController.delete);

  // SolarResourceInformation routes with validation
  route.get("/solar-resource-informations", SolarResourceInformationController.getAll);
  route.get("/solar-resource-informations/:id", SolarResourceInformationController.get);
  route.post("/solar-resource-informations", validateData.solarResourceInformationValidate, SolarResourceInformationController.save);
  route.put("/solar-resource-informations/:id", validateData.solarResourceInformationValidate, SolarResourceInformationController.update);
  route.delete("/solar-resource-informations/:id", SolarResourceInformationController.delete);

  // SolarPanel routes with validation
  route.get("/solar-panels", SolarPanelController.getAll);
  route.get("/solar-panels/:id", SolarPanelController.get);
  route.post("/solar-panels", validateData.solarPanelValidate, SolarPanelController.save);
  route.put("/solar-panels/:id", validateData.solarPanelValidate, SolarPanelController.update);
  route.delete("/solar-panels/:id", SolarPanelController.delete);


  // GeothermalPowerWell routes with validation
  route.get("/geothermal-power-wells", GeothermalPowerWellController.getAll);
  route.get("/geothermal-power-wells/:id", GeothermalPowerWellController.get);
  route.post("/geothermal-power-wells", validateData.geothermalPowerWellValidate, GeothermalPowerWellController.save);
  route.put("/geothermal-power-wells/:id", validateData.geothermalPowerWellValidate, GeothermalPowerWellController.update);
  route.delete("/geothermal-power-wells/:id", GeothermalPowerWellController.delete);

  // GeothermalPowerInfrastructure routes with validation
  route.get("/geothermal-power-infrastructures", GeothermalPowerInfrastructureController.getAll);
  route.get("/geothermal-power-infrastructures/:id", GeothermalPowerInfrastructureController.get);
  route.post("/geothermal-power-infrastructures", validateData.geothermalPowerInfrastructureValidate, GeothermalPowerInfrastructureController.save);
  route.put("/geothermal-power-infrastructures/:id", validateData.geothermalPowerInfrastructureValidate, GeothermalPowerInfrastructureController.update);
  route.delete("/geothermal-power-infrastructures/:id", GeothermalPowerInfrastructureController.delete);

  // TransmissionLineInformation routes with validation
  route.get("/transmission-line-informations", TransmissionLineInformationController.getAll);
  route.get("/transmission-line-informations/:id", TransmissionLineInformationController.get);
  route.post("/transmission-line-informations", validateData.transmissionLineInformationValidate, TransmissionLineInformationController.save);
  route.put("/transmission-line-informations/:id", validateData.transmissionLineInformationValidate, TransmissionLineInformationController.update);
  route.delete("/transmission-line-informations/:id", TransmissionLineInformationController.delete);

  // TransmissionLineConductorAndTowerData routes with validation
  route.get("/transmission-line-conductor-and-tower-datas", TransmissionLineConductorAndTowerDataController.getAll);
  route.get("/transmission-line-conductor-and-tower-datas/:id", TransmissionLineConductorAndTowerDataController.get);
  route.post("/transmission-line-conductor-and-tower-datas", validateData.transmissionLineConductorAndTowerDataValidate, TransmissionLineConductorAndTowerDataController.save);
  route.put("/transmission-line-conductor-and-tower-datas/:id", validateData.transmissionLineConductorAndTowerDataValidate, TransmissionLineConductorAndTowerDataController.update);
  route.delete("/transmission-line-conductor-and-tower-datas/:id", TransmissionLineConductorAndTowerDataController.delete);


  // TransmissionLineEquipmentData routes with validation
  route.get("/transmission-line-equipment-datas", TransmissionLineEquipmentDataController.getAll);
  route.get("/transmission-line-equipment-datas/:id", TransmissionLineEquipmentDataController.get);
  route.post("/transmission-line-equipment-datas", validateData.transmissionLineEquipmentDataValidate, TransmissionLineEquipmentDataController.save);
  route.put("/transmission-line-equipment-datas/:id", validateData.transmissionLineEquipmentDataValidate, TransmissionLineEquipmentDataController.update);
  route.delete("/transmission-line-equipment-datas/:id", TransmissionLineEquipmentDataController.delete);

  // SubstationTransformerAndSwitchGearData routes with validation
  route.get("/substation-transformer-and-switchgear-datas", SubstationTransformerAndSwitchGearDataController.getAll);
  route.get("/substation-transformer-and-switchgear-datas/:id", SubstationTransformerAndSwitchGearDataController.get);
  route.post("/substation-transformer-and-switchgear-datas", validateData.substationTransformerAndSwitchGearDataValidate, SubstationTransformerAndSwitchGearDataController.save);
  route.put("/substation-transformer-and-switchgear-datas/:id", validateData.substationTransformerAndSwitchGearDataValidate, SubstationTransformerAndSwitchGearDataController.update);
  route.delete("/substation-transformer-and-switchgear-datas/:id", SubstationTransformerAndSwitchGearDataController.delete);

  // SubstationLayoutAndCommunicationData routes with validation
  route.get("/substation-layout-and-communication-datas", SubstationLayoutAndCommunicationDataController.getAll);
  route.get("/substation-layout-and-communication-datas/:id", SubstationLayoutAndCommunicationDataController.get);
  route.post("/substation-layout-and-communication-datas", validateData.substationLayoutAndCommunicationDataValidate, SubstationLayoutAndCommunicationDataController.save);
  route.put("/substation-layout-and-communication-datas/:id", validateData.substationLayoutAndCommunicationDataValidate, SubstationLayoutAndCommunicationDataController.update);
  route.delete("/substation-layout-and-communication-datas/:id", SubstationLayoutAndCommunicationDataController.delete);

  // MiniGridStation routes with validation
  route.get("/mini-grid-stations", MiniGridStationController.getAll);
  route.get("/mini-grid-stations/:id", MiniGridStationController.get);
  route.post("/mini-grid-stations", validateData.miniGridStationValidate, MiniGridStationController.save);
  route.put("/mini-grid-stations/:id", validateData.miniGridStationValidate, MiniGridStationController.update);
  route.delete("/mini-grid-stations/:id", MiniGridStationController.delete);

  // MiniGridStationDistributionLine routes with validation
  route.get("/mini-grid-station-distribution-lines", MiniGridStationDistributionLineController.getAll);
  route.get("/mini-grid-station-distribution-lines/:id", MiniGridStationDistributionLineController.get);
  route.post("/mini-grid-station-distribution-lines", validateData.miniGridStationDistributionLineValidate, MiniGridStationDistributionLineController.save);
  route.put("/mini-grid-station-distribution-lines/:id", validateData.miniGridStationDistributionLineValidate, MiniGridStationDistributionLineController.update);
  route.delete("/mini-grid-station-distribution-lines/:id", MiniGridStationDistributionLineController.delete);


  // MiniGridStationConsumer routes with validation
  route.get("/mini-grid-station-consumers", MiniGridStationConsumerController.getAll);
  route.get("/mini-grid-station-consumers/:id", MiniGridStationConsumerController.get);
  route.post("/mini-grid-station-consumers", validateData.miniGridStationConsumerValidate, MiniGridStationConsumerController.save);
  route.put("/mini-grid-station-consumers/:id", validateData.miniGridStationConsumerValidate, MiniGridStationConsumerController.update);
  route.delete("/mini-grid-station-consumers/:id", MiniGridStationConsumerController.delete);

  // MiniGridStationBackupPowerSource routes with validation
  route.get("/mini-grid-station-backup-power-sources", MiniGridStationBackupPowerSourceController.getAll);
  route.get("/mini-grid-station-backup-power-sources/:id", MiniGridStationBackupPowerSourceController.get);
  route.post("/mini-grid-station-backup-power-sources", validateData.miniGridStationBackupPowerSourceValidate, MiniGridStationBackupPowerSourceController.save);
  route.put("/mini-grid-station-backup-power-sources/:id", validateData.miniGridStationBackupPowerSourceValidate, MiniGridStationBackupPowerSourceController.update);
  route.delete("/mini-grid-station-backup-power-sources/:id", MiniGridStationBackupPowerSourceController.delete);


  // MiniGridStationDistributionLineInfrastructure routes with validation
  route.get("/mini-grid-station-distribution-line-infrastructures", MiniGridStationDistributionLineInfrastructureController.getAll);
  route.get("/mini-grid-station-distribution-line-infrastructures/:id", MiniGridStationDistributionLineInfrastructureController.get);
  route.post("/mini-grid-station-distribution-line-infrastructures", validateData.miniGridStationDistributionLineInfrastructureValidate, MiniGridStationDistributionLineInfrastructureController.save);
  route.put("/mini-grid-station-distribution-line-infrastructures/:id", validateData.miniGridStationDistributionLineInfrastructureValidate, MiniGridStationDistributionLineInfrastructureController.update);
  route.delete("/mini-grid-station-distribution-line-infrastructures/:id", MiniGridStationDistributionLineInfrastructureController.delete);

  // ElectricDistributionTransformer routes with validation
  route.get("/electric-distribution-transformers", ElectricDistributionTransformerController.getAll);
  route.get("/electric-distribution-transformers/:id", ElectricDistributionTransformerController.get);
  route.post("/electric-distribution-transformers", validateData.electricDistributionTransformerValidate, ElectricDistributionTransformerController.save);
  route.put("/electric-distribution-transformers/:id", validateData.electricDistributionTransformerValidate, ElectricDistributionTransformerController.update);
  route.delete("/electric-distribution-transformers/:id", ElectricDistributionTransformerController.delete);

  // ElectricDistributionTransformerType routes with validation
  route.get("/electric-distribution-transformer-types", ElectricDistributionTransformerTypeController.getAll);
  route.get("/electric-distribution-transformer-types/:id", ElectricDistributionTransformerTypeController.get);
  route.post("/electric-distribution-transformer-types", validateData.electricDistributionTransformerTypeValidate, ElectricDistributionTransformerTypeController.save);
  route.put("/electric-distribution-transformer-types/:id", validateData.electricDistributionTransformerTypeValidate, ElectricDistributionTransformerTypeController.update);
  route.delete("/electric-distribution-transformer-types/:id", ElectricDistributionTransformerTypeController.delete);

  // ElectricSmartMetersData routes with validation
  route.get("/electric-smart-meters-data", ElectricSmartMetersDataController.getAll);
  route.get("/electric-smart-meters-data/:id", ElectricSmartMetersDataController.get);
  route.post("/electric-smart-meters-data", validateData.electricSmartMetersDataValidate, ElectricSmartMetersDataController.save);
  route.put("/electric-smart-meters-data/:id", validateData.electricSmartMetersDataValidate, ElectricSmartMetersDataController.update);
  route.delete("/electric-smart-meters-data/:id", ElectricSmartMetersDataController.delete);

  // ElectricSmartMetersRatingsData routes with validation
  route.get("/electric-smart-meters-ratings-data", ElectricSmartMetersRatingsDataController.getAll);
  route.get("/electric-smart-meters-ratings-data/:id", ElectricSmartMetersRatingsDataController.get);
  route.post("/electric-smart-meters-ratings-data", validateData.electricSmartMetersRatingsDataValidate, ElectricSmartMetersRatingsDataController.save);
  route.put("/electric-smart-meters-ratings-data/:id", validateData.electricSmartMetersRatingsDataValidate, ElectricSmartMetersRatingsDataController.update);
  route.delete("/electric-smart-meters-ratings-data/:id", ElectricSmartMetersRatingsDataController.delete);

  // ElectricSmartMetersPerformanceData routes with validation
  route.get("/electric-smart-meters-performance-data", ElectricSmartMetersPerformanceDataController.getAll);
  route.get("/electric-smart-meters-performance-data/:id", ElectricSmartMetersPerformanceDataController.get);
  route.post("/electric-smart-meters-performance-data", validateData.electricSmartMetersPerformanceDataValidate, ElectricSmartMetersPerformanceDataController.save);
  route.put("/electric-smart-meters-performance-data/:id", validateData.electricSmartMetersPerformanceDataValidate, ElectricSmartMetersPerformanceDataController.update);
  route.delete("/electric-smart-meters-performance-data/:id", ElectricSmartMetersPerformanceDataController.delete);

  // ElectricSmartMetersPrivacyAndSecurityData routes with validation
  route.get("/electric-smart-meters-privacy-and-security-data", ElectricSmartMetersPrivacyAndSecurityDataController.getAll);
  route.get("/electric-smart-meters-privacy-and-security-data/:id", ElectricSmartMetersPrivacyAndSecurityDataController.get);
  route.post("/electric-smart-meters-privacy-and-security-data", validateData.electricSmartMetersPrivacyAndSecurityDataValidate, ElectricSmartMetersPrivacyAndSecurityDataController.save);
  route.put("/electric-smart-meters-privacy-and-security-data/:id", validateData.electricSmartMetersPrivacyAndSecurityDataValidate, ElectricSmartMetersPrivacyAndSecurityDataController.update);
  route.delete("/electric-smart-meters-privacy-and-security-data/:id", ElectricSmartMetersPrivacyAndSecurityDataController.delete);

  // ElectricGridControlCenterData routes with validation
  route.get("/electric-grid-control-center-data", ElectricGridControlCenterDataController.getAll);
  route.get("/electric-grid-control-center-data/:id", ElectricGridControlCenterDataController.get);
  route.post("/electric-grid-control-center-data", validateData.electricGridControlCenterDataValidate, ElectricGridControlCenterDataController.save);
  route.put("/electric-grid-control-center-data/:id", validateData.electricGridControlCenterDataValidate, ElectricGridControlCenterDataController.update);
  route.delete("/electric-grid-control-center-data/:id", ElectricGridControlCenterDataController.delete);

  // ElectricGridControlCenterPerformanceAndMaintenance routes with validation
  route.get("/electric-grid-control-center-performance-and-maintenance", ElectricGridControlCenterPerformanceAndMaintenanceController.getAll);
  route.get("/electric-grid-control-center-performance-and-maintenance/:id", ElectricGridControlCenterPerformanceAndMaintenanceController.get);
  route.post("/electric-grid-control-center-performance-and-maintenance", validateData.electricGridControlCenterPerformanceAndMaintenanceValidate, ElectricGridControlCenterPerformanceAndMaintenanceController.save);
  route.put("/electric-grid-control-center-performance-and-maintenance/:id", validateData.electricGridControlCenterPerformanceAndMaintenanceValidate, ElectricGridControlCenterPerformanceAndMaintenanceController.update);
  route.delete("/electric-grid-control-center-performance-and-maintenance/:id", ElectricGridControlCenterPerformanceAndMaintenanceController.delete);

  // ElectricGridControlCenterCyberSecurityData routes with validation
  route.get("/electric-grid-control-center-cyber-security-data", ElectricGridControlCenterCyberSecurityDataController.getAll);
  route.get("/electric-grid-control-center-cyber-security-data/:id", ElectricGridControlCenterCyberSecurityDataController.get);
  route.post("/electric-grid-control-center-cyber-security-data", validateData.electricGridControlCenterCyberSecurityDataValidate, ElectricGridControlCenterCyberSecurityDataController.save);
  route.put("/electric-grid-control-center-cyber-security-data/:id", validateData.electricGridControlCenterCyberSecurityDataValidate, ElectricGridControlCenterCyberSecurityDataController.update);
  route.delete("/electric-grid-control-center-cyber-security-data/:id", ElectricGridControlCenterCyberSecurityDataController.delete);

  // GeneralAirportInformation routes with validation
  route.get("/general-airport-informations", GeneralAirportInformationController.getAll);
  route.get("/general-airport-informations/:id", GeneralAirportInformationController.get);
  route.post("/general-airport-informations", validateData.generalAirportInformationValidate, GeneralAirportInformationController.save);
  route.put("/general-airport-informations/:id", validateData.generalAirportInformationValidate, GeneralAirportInformationController.update);
  route.delete("/general-airport-informations/:id", GeneralAirportInformationController.delete);

  // RunwayAndApproachData routes with validation
  route.get("/runway-and-approach-datas", RunwayAndApproachDataController.getAll);
  route.get("/runway-and-approach-datas/:id", RunwayAndApproachDataController.get);
  route.post("/runway-and-approach-datas", validateData.runwayAndApproachDataValidate, RunwayAndApproachDataController.save);
  route.put("/runway-and-approach-datas/:id", validateData.runwayAndApproachDataValidate, RunwayAndApproachDataController.update);
  route.delete("/runway-and-approach-datas/:id", RunwayAndApproachDataController.delete);

  // TerminalAndFacilityData routes with validation
  route.get("/terminal-and-facility-datas", TerminalAndFacilityDataController.getAll);
  route.get("/terminal-and-facility-datas/:id", TerminalAndFacilityDataController.get);
  route.post("/terminal-and-facility-datas", validateData.terminalAndFacilityDataValidate, TerminalAndFacilityDataController.save);
  route.put("/terminal-and-facility-datas/:id", validateData.terminalAndFacilityDataValidate, TerminalAndFacilityDataController.update);
  route.delete("/terminal-and-facility-datas/:id", TerminalAndFacilityDataController.delete);

  //water dam type
  // GeneralDamInformation routes with validation
  route.get("/general-dam-informations", GeneralDamInformationController.getAll);
  route.get("/general-dam-informations/:id", GeneralDamInformationController.get);
  route.post("/general-dam-informations", validateData.generalDamInformationValidate, GeneralDamInformationController.save);
  route.put("/general-dam-informations/:id", validateData.generalDamInformationValidate, GeneralDamInformationController.update);
  route.delete("/general-dam-informations/:id", GeneralDamInformationController.delete);

  // RailwayTrackData routes with validation
  route.get("/railway-track-data", RailwayTrackDataController.getAll);
  route.get("/railway-track-data/:id", RailwayTrackDataController.get);
  route.post("/railway-track-data", validateData.railwayTrackDataValidate, RailwayTrackDataController.save);
  route.put("/railway-track-data/:id", validateData.railwayTrackDataValidate, RailwayTrackDataController.update);
  route.delete("/railway-track-data/:id", RailwayTrackDataController.delete);

  // RailwayTrackGeometryData routes with validation
  route.get("/railway-track-geometry-data", RailwayTrackGeometryDataController.getAll);
  route.get("/railway-track-geometry-data/:id", RailwayTrackGeometryDataController.get);
  route.post("/railway-track-geometry-data", validateData.railwayTrackGeometryDataValidate, RailwayTrackGeometryDataController.save);
  route.put("/railway-track-geometry-data/:id", validateData.railwayTrackGeometryDataValidate, RailwayTrackGeometryDataController.update);
  route.delete("/railway-track-geometry-data/:id", RailwayTrackGeometryDataController.delete);

  // RailwayTrackConditionAssessment routes with validation
  route.get("/railway-track-condition-assessments", RailwayTrackConditionAssessmentController.getAll);
  route.get("/railway-track-condition-assessments/:id", RailwayTrackConditionAssessmentController.get);
  route.post("/railway-track-condition-assessments", validateData.railwayTrackConditionAssessmentValidate, RailwayTrackConditionAssessmentController.save);
  route.put("/railway-track-condition-assessments/:id", validateData.railwayTrackConditionAssessmentValidate, RailwayTrackConditionAssessmentController.update);
  route.delete("/railway-track-condition-assessments/:id", RailwayTrackConditionAssessmentController.delete);

  // RailwayTrackMaintenanceAndInspection routes with validation
  route.get("/railway-track-maintenance-and-inspections", RailwayTrackMaintenanceAndInspectionController.getAll);
  route.get("/railway-track-maintenance-and-inspections/:id", RailwayTrackMaintenanceAndInspectionController.get);
  route.post(
    "/railway-track-maintenance-and-inspections",
    validateData.railwayTrackMaintenanceAndInspectionValidate,
    RailwayTrackMaintenanceAndInspectionController.save
  );
  route.put(
    "/railway-track-maintenance-and-inspections/:id",
    validateData.railwayTrackMaintenanceAndInspectionValidate,
    RailwayTrackMaintenanceAndInspectionController.update
  );
  route.delete("/railway-track-maintenance-and-inspections/:id", RailwayTrackMaintenanceAndInspectionController.delete);

  
  // RailwayTrackRehabilitationOrRenewal routes with validation
  route.get("/railway-track-rehabilitation-or-renewals", RailwayTrackRehabilitationOrRenewalController.getAll);
  route.get("/railway-track-rehabilitation-or-renewals/:id", RailwayTrackRehabilitationOrRenewalController.get);
  route.post(
    "/railway-track-rehabilitation-or-renewals",
    validateData.railwayTrackRehabilitationOrRenewalValidate,
    RailwayTrackRehabilitationOrRenewalController.save
  );
  route.put(
    "/railway-track-rehabilitation-or-renewals/:id",
    validateData.railwayTrackRehabilitationOrRenewalValidate,
    RailwayTrackRehabilitationOrRenewalController.update
  );
  route.delete("/railway-track-rehabilitation-or-renewals/:id", RailwayTrackRehabilitationOrRenewalController.delete);
  // RailwayTrackSafety routes with validation
route.get("/railway-track-safeties", RailwayTrackSafetyController.getAll);
route.get("/railway-track-safeties/:id", RailwayTrackSafetyController.get);
route.post(
  "/railway-track-safeties",
  validateData.railwayTrackSafetyValidate,
  RailwayTrackSafetyController.save
);
route.put(
  "/railway-track-safeties/:id",
  validateData.railwayTrackSafetyValidate,
  RailwayTrackSafetyController.update
);
route.delete("/railway-track-safeties/:id", RailwayTrackSafetyController.delete);

  // RailwayBallast routes with validation
  route.get("/railway-ballasts", RailwayBallastController.getAll);
  route.get("/railway-ballasts/:id", RailwayBallastController.get);
  route.post(
    "/railway-ballasts",
    validateData.railwayBallastValidate,
    RailwayBallastController.save
  );
  route.put(
    "/railway-ballasts/:id",
    validateData.railwayBallastValidate,
    RailwayBallastController.update
  );
  route.delete("/railway-ballasts/:id", RailwayBallastController.delete);

  // RailwayBallastMaterialData routes with validation
  route.get("/railway-ballast-material-data", RailwayBallastMaterialDataController.getAll);
  route.get("/railway-ballast-material-data/:id", RailwayBallastMaterialDataController.get);
  route.post(
    "/railway-ballast-material-data",
    validateData.railwayBallastMaterialDataValidate,
    RailwayBallastMaterialDataController.save
  );
  route.put(
    "/railway-ballast-material-data/:id",
    validateData.railwayBallastMaterialDataValidate,
    RailwayBallastMaterialDataController.update
  );
  route.delete("/railway-ballast-material-data/:id", RailwayBallastMaterialDataController.delete);

  // RailwayBallastMaterialSpecification routes with validation
  route.get("/railway-ballast-material-specifications", RailwayBallastMaterialSpecificationController.getAll);
  route.get("/railway-ballast-material-specifications/:id", RailwayBallastMaterialSpecificationController.get);
  route.post(
    "/railway-ballast-material-specifications",
    validateData.railwayBallastMaterialSpecificationValidate,
    RailwayBallastMaterialSpecificationController.save
  );
  route.put(
    "/railway-ballast-material-specifications/:id",
    validateData.railwayBallastMaterialSpecificationValidate,
    RailwayBallastMaterialSpecificationController.update
  );
  route.delete("/railway-ballast-material-specifications/:id", RailwayBallastMaterialSpecificationController.delete);

  // RailwayBallastConditionAssessment routes with validation
  route.get("/railway-ballast-condition-assessments", RailwayBallastConditionAssessmentController.getAll);
  route.get("/railway-ballast-condition-assessments/:id", RailwayBallastConditionAssessmentController.get);
  route.post(
    "/railway-ballast-condition-assessments",
    validateData.railwayBallastConditionAssessmentValidate,
    RailwayBallastConditionAssessmentController.save
  );
  route.put(
    "/railway-ballast-condition-assessments/:id",
    validateData.railwayBallastConditionAssessmentValidate,
    RailwayBallastConditionAssessmentController.update
  );
  route.delete("/railway-ballast-condition-assessments/:id", RailwayBallastConditionAssessmentController.delete);

  // RailwayBallastMaintenanceAndRenewal routes with validation
  route.get("/railway-ballast-maintenance-and-renewals", RailwayBallastMaintenanceAndRenewalController.getAll);
  route.get("/railway-ballast-maintenance-and-renewals/:id", RailwayBallastMaintenanceAndRenewalController.get);
  route.post(
    "/railway-ballast-maintenance-and-renewals",
    validateData.railwayBallastMaintenanceAndRenewalValidate,
    RailwayBallastMaintenanceAndRenewalController.save
  );
  route.put(
    "/railway-ballast-maintenance-and-renewals/:id",
    validateData.railwayBallastMaintenanceAndRenewalValidate,
    RailwayBallastMaintenanceAndRenewalController.update
  );
  route.delete("/railway-ballast-maintenance-and-renewals/:id", RailwayBallastMaintenanceAndRenewalController.delete);

  // RailwayBallastDrainageAndWaterManagement routes with validation
  route.get("/railway-ballast-drainage-and-water-managements", RailwayBallastDrainageAndWaterManagementController.getAll);
  route.get("/railway-ballast-drainage-and-water-managements/:id", RailwayBallastDrainageAndWaterManagementController.get);
  route.post(
    "/railway-ballast-drainage-and-water-managements",
    validateData.railwayBallastDrainageAndWaterManagementValidate,
    RailwayBallastDrainageAndWaterManagementController.save
  );
  route.put(
    "/railway-ballast-drainage-and-water-managements/:id",
    validateData.railwayBallastDrainageAndWaterManagementValidate,
    RailwayBallastDrainageAndWaterManagementController.update
  );
  route.delete("/railway-ballast-drainage-and-water-managements/:id", RailwayBallastDrainageAndWaterManagementController.delete);


  // RailwayBallastEnvironmentalAndOtherFactor routes with validation
  route.get("/railway-ballast-environmental-and-other-factors", RailwayBallastEnvironmentalAndOtherFactorController.getAll);
  route.get("/railway-ballast-environmental-and-other-factors/:id", RailwayBallastEnvironmentalAndOtherFactorController.get);
  route.post(
    "/railway-ballast-environmental-and-other-factors",
    validateData.railwayBallastEnvironmentalAndOtherFactorValidate,
    RailwayBallastEnvironmentalAndOtherFactorController.save
  );
  route.put(
    "/railway-ballast-environmental-and-other-factors/:id",
    validateData.railwayBallastEnvironmentalAndOtherFactorValidate,
    RailwayBallastEnvironmentalAndOtherFactorController.update
  );
  route.delete("/railway-ballast-environmental-and-other-factors/:id", RailwayBallastEnvironmentalAndOtherFactorController.delete);

  // RailwaySubBallastMaterial routes with validation
  route.get("/railway-sub-ballast-materials", RailwaySubBallastMaterialController.getAll);
  route.get("/railway-sub-ballast-materials/:id", RailwaySubBallastMaterialController.get);
  route.post(
    "/railway-sub-ballast-materials",
    validateData.railwaySubBallastMaterialValidate,
    RailwaySubBallastMaterialController.save
  );
  route.put(
    "/railway-sub-ballast-materials/:id",
    validateData.railwaySubBallastMaterialValidate,
    RailwaySubBallastMaterialController.update
  );
  route.delete("/railway-sub-ballast-materials/:id", RailwaySubBallastMaterialController.delete);

  // RailwaySubBallastMaterialTest routes with validation
  route.get("/railway-sub-ballast-material-tests", RailwaySubBallastMaterialTestController.getAll);
  route.get("/railway-sub-ballast-material-tests/:id", RailwaySubBallastMaterialTestController.get);
  route.post(
    "/railway-sub-ballast-material-tests",
    validateData.railwaySubBallastMaterialTestValidate,
    RailwaySubBallastMaterialTestController.save
  );
  route.put(
    "/railway-sub-ballast-material-tests/:id",
    validateData.railwaySubBallastMaterialTestValidate,
    RailwaySubBallastMaterialTestController.update
  );
  route.delete("/railway-sub-ballast-material-tests/:id", RailwaySubBallastMaterialTestController.delete);

  // RailwaySubBallastConditionAssessment routes with validation
  route.get("/railway-sub-ballast-condition-assessments", RailwaySubBallastConditionAssessmentController.getAll);
  route.get("/railway-sub-ballast-condition-assessments/:id", RailwaySubBallastConditionAssessmentController.get);
  route.post(
    "/railway-sub-ballast-condition-assessments",
    validateData.railwaySubBallastConditionAssessmentValidate,
    RailwaySubBallastConditionAssessmentController.save
  );
  route.put(
    "/railway-sub-ballast-condition-assessments/:id",
    validateData.railwaySubBallastConditionAssessmentValidate,
    RailwaySubBallastConditionAssessmentController.update
  );
  route.delete("/railway-sub-ballast-condition-assessments/:id", RailwaySubBallastConditionAssessmentController.delete);

  // RailwaySubBallastMaintenanceAndRenewal routes with validation
  route.get("/railway-sub-ballast-maintenance-and-renewals", RailwaySubBallastMaintenanceAndRenewalController.getAll);
  route.get("/railway-sub-ballast-maintenance-and-renewals/:id", RailwaySubBallastMaintenanceAndRenewalController.get);
  route.post(
    "/railway-sub-ballast-maintenance-and-renewals",
    validateData.railwaySubBallastMaintenanceAndRenewalValidate,
    RailwaySubBallastMaintenanceAndRenewalController.save
  );
  route.put(
    "/railway-sub-ballast-maintenance-and-renewals/:id",
    validateData.railwaySubBallastMaintenanceAndRenewalValidate,
    RailwaySubBallastMaintenanceAndRenewalController.update
  );
  route.delete("/railway-sub-ballast-maintenance-and-renewals/:id", RailwaySubBallastMaintenanceAndRenewalController.delete);

  // RailwaySubBallastDrainageAndWaterManagement routes with validation
  route.get("/railway-sub-ballast-drainage-and-water-managements", RailwaySubBallastDrainageAndWaterManagementController.getAll);
  route.get("/railway-sub-ballast-drainage-and-water-managements/:id", RailwaySubBallastDrainageAndWaterManagementController.get);
  route.post(
    "/railway-sub-ballast-drainage-and-water-managements",
    validateData.railwaySubBallastDrainageAndWaterManagementValidate,
    RailwaySubBallastDrainageAndWaterManagementController.save
  );
  route.put(
    "/railway-sub-ballast-drainage-and-water-managements/:id",
    validateData.railwaySubBallastDrainageAndWaterManagementValidate,
    RailwaySubBallastDrainageAndWaterManagementController.update
  );
  route.delete("/railway-sub-ballast-drainage-and-water-managements/:id", RailwaySubBallastDrainageAndWaterManagementController.delete);


  // RailwaySubBallastEnvironmentalAndOtherFactor routes with validation
  route.get("/railway-sub-ballast-environmental-and-other-factors", RailwaySubBallastEnvironmentalAndOtherFactorController.getAll);
  route.get("/railway-sub-ballast-environmental-and-other-factors/:id", RailwaySubBallastEnvironmentalAndOtherFactorController.get);
  route.post(
    "/railway-sub-ballast-environmental-and-other-factors",
    validateData.railwaySubBallastEnvironmentalAndOtherFactorValidate,
    RailwaySubBallastEnvironmentalAndOtherFactorController.save
  );
  route.put(
    "/railway-sub-ballast-environmental-and-other-factors/:id",
    validateData.railwaySubBallastEnvironmentalAndOtherFactorValidate,
    RailwaySubBallastEnvironmentalAndOtherFactorController.update
  );
  route.delete("/railway-sub-ballast-environmental-and-other-factors/:id", RailwaySubBallastEnvironmentalAndOtherFactorController.delete);

  // RailwaySleeperCharacteristic routes with validation
  route.get("/railway-sleeper-characteristics", RailwaySleeperCharacteristicController.getAll);
  route.get("/railway-sleeper-characteristics/:id", RailwaySleeperCharacteristicController.get);
  route.post(
    "/railway-sleeper-characteristics",
    validateData.railwaySleeperCharacteristicValidate,
    RailwaySleeperCharacteristicController.save
  );
  route.put(
    "/railway-sleeper-characteristics/:id",
    validateData.railwaySleeperCharacteristicValidate,
    RailwaySleeperCharacteristicController.update
  );
  route.delete("/railway-sleeper-characteristics/:id", RailwaySleeperCharacteristicController.delete);

  // RailwaySleeperConditionAssessment routes with validation
  route.get("/railway-sleeper-condition-assessments", RailwaySleeperConditionAssessmentController.getAll);
  route.get("/railway-sleeper-condition-assessments/:id", RailwaySleeperConditionAssessmentController.get);
  route.post(
    "/railway-sleeper-condition-assessments",
    validateData.railwaySleeperConditionAssessmentValidate,
    RailwaySleeperConditionAssessmentController.save
  );
  route.put(
    "/railway-sleeper-condition-assessments/:id",
    validateData.railwaySleeperConditionAssessmentValidate,
    RailwaySleeperConditionAssessmentController.update
  );
  route.delete("/railway-sleeper-condition-assessments/:id", RailwaySleeperConditionAssessmentController.delete);

  // RailwaySleeperMaintenanceAndReplacement routes with validation
  route.get("/railway-sleeper-maintenance-and-replacements", RailwaySleeperMaintenanceAndReplacementController.getAll);
  route.get("/railway-sleeper-maintenance-and-replacements/:id", RailwaySleeperMaintenanceAndReplacementController.get);
  route.post(
    "/railway-sleeper-maintenance-and-replacements",
    validateData.railwaySleeperMaintenanceAndReplacementValidate,
    RailwaySleeperMaintenanceAndReplacementController.save
  );
  route.put(
    "/railway-sleeper-maintenance-and-replacements/:id",
    validateData.railwaySleeperMaintenanceAndReplacementValidate,
    RailwaySleeperMaintenanceAndReplacementController.update
  );
  route.delete("/railway-sleeper-maintenance-and-replacements/:id", RailwaySleeperMaintenanceAndReplacementController.delete);

  // RailwaySleeperFasteningSystem routes with validation
  route.get("/railway-sleeper-fastening-systems", RailwaySleeperFasteningSystemController.getAll);
  route.get("/railway-sleeper-fastening-systems/:id", RailwaySleeperFasteningSystemController.get);
  route.post(
    "/railway-sleeper-fastening-systems",
    validateData.railwaySleeperFasteningSystemValidate,
    RailwaySleeperFasteningSystemController.save
  );
  route.put(
    "/railway-sleeper-fastening-systems/:id",
    validateData.railwaySleeperFasteningSystemValidate,
    RailwaySleeperFasteningSystemController.update
  );
  route.delete("/railway-sleeper-fastening-systems/:id", RailwaySleeperFasteningSystemController.delete);

  // RailwaySleeperEnvironmentalAndOtherFactor routes with validation
  route.get("/railway-sleeper-environmental-and-other-factors", RailwaySleeperEnvironmentalAndOtherFactorController.getAll);
  route.get("/railway-sleeper-environmental-and-other-factors/:id", RailwaySleeperEnvironmentalAndOtherFactorController.get);
  route.post(
    "/railway-sleeper-environmental-and-other-factors",
    validateData.railwaySleeperEnvironmentalAndOtherFactorValidate,
    RailwaySleeperEnvironmentalAndOtherFactorController.save
  );
  route.put(
    "/railway-sleeper-environmental-and-other-factors/:id",
    validateData.railwaySleeperEnvironmentalAndOtherFactorValidate,
    RailwaySleeperEnvironmentalAndOtherFactorController.update
  );
  route.delete("/railway-sleeper-environmental-and-other-factors/:id", RailwaySleeperEnvironmentalAndOtherFactorController.delete);

  // RailwayFasteningSystemCharacteristic routes with validation
  route.get("/railway-fastening-system-characteristics", RailwayFasteningSystemCharacteristicController.getAll);
  route.get("/railway-fastening-system-characteristics/:id", RailwayFasteningSystemCharacteristicController.get);
  route.post(
    "/railway-fastening-system-characteristics",
    validateData.railwayFasteningSystemCharacteristicValidate,
    RailwayFasteningSystemCharacteristicController.save
  );
  route.put(
    "/railway-fastening-system-characteristics/:id",
    validateData.railwayFasteningSystemCharacteristicValidate,
    RailwayFasteningSystemCharacteristicController.update
  );
  route.delete("/railway-fastening-system-characteristics/:id", RailwayFasteningSystemCharacteristicController.delete);

  // RailwayFasteningSystemConditionAssessment routes with validation
  route.get("/railway-fastening-system-condition-assessments", RailwayFasteningSystemConditionAssessmentController.getAll);
  route.get("/railway-fastening-system-condition-assessments/:id", RailwayFasteningSystemConditionAssessmentController.get);
  route.post(
    "/railway-fastening-system-condition-assessments",
    validateData.railwayFasteningSystemConditionAssessmentValidate,
    RailwayFasteningSystemConditionAssessmentController.save
  );
  route.put(
    "/railway-fastening-system-condition-assessments/:id",
    validateData.railwayFasteningSystemConditionAssessmentValidate,
    RailwayFasteningSystemConditionAssessmentController.update
  );
  route.delete("/railway-fastening-system-condition-assessments/:id", RailwayFasteningSystemConditionAssessmentController.delete);


  // RailwayFasteningSystemMaintenanceAndReplacement routes with validation
  route.get(
    "/railway-fastening-system-maintenance-and-replacements",
    RailwayFasteningSystemMaintenanceAndReplacementController.getAll
  );
  route.get(
    "/railway-fastening-system-maintenance-and-replacements/:id",
    RailwayFasteningSystemMaintenanceAndReplacementController.get
  );
  route.post(
    "/railway-fastening-system-maintenance-and-replacements",
    validateData.railwayFasteningSystemMaintenanceAndReplacementValidate,
    RailwayFasteningSystemMaintenanceAndReplacementController.save
  );
  route.put(
    "/railway-fastening-system-maintenance-and-replacements/:id",
    validateData.railwayFasteningSystemMaintenanceAndReplacementValidate,
    RailwayFasteningSystemMaintenanceAndReplacementController.update
  );
  route.delete(
    "/railway-fastening-system-maintenance-and-replacements/:id",
    RailwayFasteningSystemMaintenanceAndReplacementController.delete
  );

  // RailwayFasteningSystemEnvironmentalFactor routes with validation
  route.get(
    "/railway-fastening-system-environmental-factors",
    RailwayFasteningSystemEnvironmentalFactorController.getAll
  );
  route.get(
    "/railway-fastening-system-environmental-factors/:id",
    RailwayFasteningSystemEnvironmentalFactorController.get
  );
  route.post(
    "/railway-fastening-system-environmental-factors",
    validateData.railwayFasteningSystemEnvironmentalFactorValidate,
    RailwayFasteningSystemEnvironmentalFactorController.save
  );
  route.put(
    "/railway-fastening-system-environmental-factors/:id",
    validateData.railwayFasteningSystemEnvironmentalFactorValidate,
    RailwayFasteningSystemEnvironmentalFactorController.update
  );
  route.delete(
    "/railway-fastening-system-environmental-factors/:id",
    RailwayFasteningSystemEnvironmentalFactorController.delete
  );

  // RailwaySignalingSystem routes with validation
  route.get("/railway-signaling-systems", RailwaySignalingSystemController.getAll);
  route.get("/railway-signaling-systems/:id", RailwaySignalingSystemController.get);
  route.post(
    "/railway-signaling-systems",
    validateData.railwaySignalingSystemValidate,
    RailwaySignalingSystemController.save
  );
  route.put(
    "/railway-signaling-systems/:id",
    validateData.railwaySignalingSystemValidate,
    RailwaySignalingSystemController.update
  );
  route.delete("/railway-signaling-systems/:id", RailwaySignalingSystemController.delete);

  // RailwayCommunicationSystem routes with validation
  route.get("/railway-communication-systems", RailwayCommunicationSystemController.getAll);
  route.get("/railway-communication-systems/:id", RailwayCommunicationSystemController.get);
  route.post(
    "/railway-communication-systems",
    validateData.railwayCommunicationSystemValidate,
    RailwayCommunicationSystemController.save
  );
  route.put(
    "/railway-communication-systems/:id",
    validateData.railwayCommunicationSystemValidate,
    RailwayCommunicationSystemController.update
  );
  route.delete("/railway-communication-systems/:id", RailwayCommunicationSystemController.delete);

  // RailwaySystemConditionAssessment routes with validation
  route.get("/railway-system-condition-assessments", RailwaySystemConditionAssessmentController.getAll);
  route.get("/railway-system-condition-assessments/:id", RailwaySystemConditionAssessmentController.get);
  route.post(
    "/railway-system-condition-assessments",
    validateData.railwaySystemConditionAssessmentValidate,
    RailwaySystemConditionAssessmentController.save
  );
  route.put(
    "/railway-system-condition-assessments/:id",
    validateData.railwaySystemConditionAssessmentValidate,
    RailwaySystemConditionAssessmentController.update
  );
  route.delete("/railway-system-condition-assessments/:id", RailwaySystemConditionAssessmentController.delete);


  // RailwayCommunicationSystemMaintenanceAndTesting routes with validation
  route.get("/railway-communication-system-maintenance-and-testings", RailwayCommunicationSystemMaintenanceAndTestingController.getAll);
  route.get("/railway-communication-system-maintenance-and-testings/:id", RailwayCommunicationSystemMaintenanceAndTestingController.get);
  route.post(
    "/railway-communication-system-maintenance-and-testings",
    validateData.railwayCommunicationSystemMaintenanceAndTestingValidate,
    RailwayCommunicationSystemMaintenanceAndTestingController.save
  );
  route.put(
    "/railway-communication-system-maintenance-and-testings/:id",
    validateData.railwayCommunicationSystemMaintenanceAndTestingValidate,
    RailwayCommunicationSystemMaintenanceAndTestingController.update
  );
  route.delete("/railway-communication-system-maintenance-and-testings/:id", RailwayCommunicationSystemMaintenanceAndTestingController.delete);


  // RailwayCommunicationSystemSafetyAndCompliance routes with validation
  route.get(
    "/railway-communication-system-safety-and-compliances",
    RailwayCommunicationSystemSafetyAndComplianceController.getAll
  );
  route.get(
    "/railway-communication-system-safety-and-compliances/:id",
    RailwayCommunicationSystemSafetyAndComplianceController.get
  );
  route.post(
    "/railway-communication-system-safety-and-compliances",
    validateData.railwayCommunicationSystemSafetyAndComplianceValidate,
    RailwayCommunicationSystemSafetyAndComplianceController.save
  );
  route.put(
    "/railway-communication-system-safety-and-compliances/:id",
    validateData.railwayCommunicationSystemSafetyAndComplianceValidate,
    RailwayCommunicationSystemSafetyAndComplianceController.update
  );
  route.delete(
    "/railway-communication-system-safety-and-compliances/:id",
    RailwayCommunicationSystemSafetyAndComplianceController.delete
  );

  // RailwayEnvironmentalAndOtherFactor routes with validation
  route.get(
    "/railway-environmental-and-other-factors",
    RailwayEnvironmentalAndOtherFactorController.getAll
  );
  route.get(
    "/railway-environmental-and-other-factors/:id",
    RailwayEnvironmentalAndOtherFactorController.get
  );
  route.post(
    "/railway-environmental-and-other-factors",
    validateData.railwayEnvironmentalAndOtherFactorValidate,
    RailwayEnvironmentalAndOtherFactorController.save
  );
  route.put(
    "/railway-environmental-and-other-factors/:id",
    validateData.railwayEnvironmentalAndOtherFactorValidate,
    RailwayEnvironmentalAndOtherFactorController.update
  );
  route.delete(
    "/railway-environmental-and-other-factors/:id",
    RailwayEnvironmentalAndOtherFactorController.delete
  );

  // RailwayVehicleIdentification routes with validation
  route.get(
    "/railway-vehicle-identifications",
    RailwayVehicleIdentificationController.getAll
  );
  route.get(
    "/railway-vehicle-identifications/:id",
    RailwayVehicleIdentificationController.get
  );
  route.post(
    "/railway-vehicle-identifications",
    validateData.railwayVehicleIdentificationValidate,
    RailwayVehicleIdentificationController.save
  );
  route.put(
    "/railway-vehicle-identifications/:id",
    validateData.railwayVehicleIdentificationValidate,
    RailwayVehicleIdentificationController.update
  );
  route.delete(
    "/railway-vehicle-identifications/:id",
    RailwayVehicleIdentificationController.delete
  );

  // RailwayVehicleSpecification routes with validation
  route.get(
    "/railway-vehicle-specifications",
    RailwayVehicleSpecificationController.getAll
  );
  route.get(
    "/railway-vehicle-specifications/:id",
    RailwayVehicleSpecificationController.get
  );
  route.post(
    "/railway-vehicle-specifications",
    validateData.railwayVehicleSpecificationValidate,
    RailwayVehicleSpecificationController.save
  );
  route.put(
    "/railway-vehicle-specifications/:id",
    validateData.railwayVehicleSpecificationValidate,
    RailwayVehicleSpecificationController.update
  );
  route.delete(
    "/railway-vehicle-specifications/:id",
    RailwayVehicleSpecificationController.delete
  );


  // RailwayVehicleMaintenanceAndInspection routes with validation
  route.get(
    "/railway-vehicle-maintenance-and-inspections",
    RailwayVehicleMaintenanceAndInspectionController.getAll
  );
  route.get(
    "/railway-vehicle-maintenance-and-inspections/:id",
    RailwayVehicleMaintenanceAndInspectionController.get
  );
  route.post(
    "/railway-vehicle-maintenance-and-inspections",
    validateData.railwayVehicleMaintenanceAndInspectionValidate,
    RailwayVehicleMaintenanceAndInspectionController.save
  );
  route.put(
    "/railway-vehicle-maintenance-and-inspections/:id",
    validateData.railwayVehicleMaintenanceAndInspectionValidate,
    RailwayVehicleMaintenanceAndInspectionController.update
  );
  route.delete(
    "/railway-vehicle-maintenance-and-inspections/:id",
    RailwayVehicleMaintenanceAndInspectionController.delete
  );

  // RailwayVehicleOperationalPerformance routes with validation
  route.get(
    "/railway-vehicle-operational-performances",
    RailwayVehicleOperationalPerformanceController.getAll
  );
  route.get(
    "/railway-vehicle-operational-performances/:id",
    RailwayVehicleOperationalPerformanceController.get
  );
  route.post(
    "/railway-vehicle-operational-performances",
    validateData.railwayVehicleOperationalPerformanceValidate,
    RailwayVehicleOperationalPerformanceController.save
  );
  route.put(
    "/railway-vehicle-operational-performances/:id",
    validateData.railwayVehicleOperationalPerformanceValidate,
    RailwayVehicleOperationalPerformanceController.update
  );
  route.delete(
    "/railway-vehicle-operational-performances/:id",
    RailwayVehicleOperationalPerformanceController.delete
  );

  // RailwayVehicleSafetyAndCompliance routes with validation
  route.get(
    "/railway-vehicle-safety-and-compliances",
    RailwayVehicleSafetyAndComplianceController.getAll
  );
  route.get(
    "/railway-vehicle-safety-and-compliances/:id",
    RailwayVehicleSafetyAndComplianceController.get
  );
  route.post(
    "/railway-vehicle-safety-and-compliances",
    validateData.railwayVehicleSafetyAndComplianceValidate,
    RailwayVehicleSafetyAndComplianceController.save
  );
  route.put(
    "/railway-vehicle-safety-and-compliances/:id",
    validateData.railwayVehicleSafetyAndComplianceValidate,
    RailwayVehicleSafetyAndComplianceController.update
  );
  route.delete(
    "/railway-vehicle-safety-and-compliances/:id",
    RailwayVehicleSafetyAndComplianceController.delete
  );

  // RailwayVehicleInteriorAndPassengerAmenity routes with validation
  route.get(
    "/railway-vehicle-interior-and-passenger-amenities",
    RailwayVehicleInteriorAndPassengerAmenityController.getAll
  );
  route.get(
    "/railway-vehicle-interior-and-passenger-amenities/:id",
    RailwayVehicleInteriorAndPassengerAmenityController.get
  );
  route.post(
    "/railway-vehicle-interior-and-passenger-amenities",
    validateData.railwayVehicleInteriorAndPassengerAmenityValidate,
    RailwayVehicleInteriorAndPassengerAmenityController.save
  );
  route.put(
    "/railway-vehicle-interior-and-passenger-amenities/:id",
    validateData.railwayVehicleInteriorAndPassengerAmenityValidate,
    RailwayVehicleInteriorAndPassengerAmenityController.update
  );
  route.delete(
    "/railway-vehicle-interior-and-passenger-amenities/:id",
    RailwayVehicleInteriorAndPassengerAmenityController.delete
  );

  // RailwayVehicleLoadAndCargoSpecification routes with validation
  route.get(
    "/railway-vehicle-load-and-cargo-specifications",
    RailwayVehicleLoadAndCargoSpecificationController.getAll
  );
  route.get(
    "/railway-vehicle-load-and-cargo-specifications/:id",
    RailwayVehicleLoadAndCargoSpecificationController.get
  );
  route.post(
    "/railway-vehicle-load-and-cargo-specifications",
    validateData.railwayVehicleLoadAndCargoSpecificationValidate,
    RailwayVehicleLoadAndCargoSpecificationController.save
  );
  route.put(
    "/railway-vehicle-load-and-cargo-specifications/:id",
    validateData.railwayVehicleLoadAndCargoSpecificationValidate,
    RailwayVehicleLoadAndCargoSpecificationController.update
  );
  route.delete(
    "/railway-vehicle-load-and-cargo-specifications/:id",
    RailwayVehicleLoadAndCargoSpecificationController.delete
  );


  // RailwayStationPlatformLayout routes with validation
  route.get(
    "/railway-station-platform-layouts",
    RailwayStationPlatformLayoutController.getAll
  );
  route.get(
    "/railway-station-platform-layouts/:id",
    RailwayStationPlatformLayoutController.get
  );
  route.post(
    "/railway-station-platform-layouts",
    validateData.railwayStationPlatformLayoutValidate,
    RailwayStationPlatformLayoutController.save
  );
  route.put(
    "/railway-station-platform-layouts/:id",
    validateData.railwayStationPlatformLayoutValidate,
    RailwayStationPlatformLayoutController.update
  );
  route.delete(
    "/railway-station-platform-layouts/:id",
    RailwayStationPlatformLayoutController.delete
  );

  // RailwayStationPlatformFacility routes with validation
  route.get(
    "/railway-station-platform-facilities",
    RailwayStationPlatformFacilityController.getAll
  );
  route.get(
    "/railway-station-platform-facilities/:id",
    RailwayStationPlatformFacilityController.get
  );
  route.post(
    "/railway-station-platform-facilities",
    validateData.railwayStationPlatformFacilityValidate,
    RailwayStationPlatformFacilityController.save
  );
  route.put(
    "/railway-station-platform-facilities/:id",
    validateData.railwayStationPlatformFacilityValidate,
    RailwayStationPlatformFacilityController.update
  );
  route.delete(
    "/railway-station-platform-facilities/:id",
    RailwayStationPlatformFacilityController.delete
  );


  // RailwayStationPlatformStructuralElement routes with validation
  route.get(
    "/railway-station-platform-structural-elements",
    RailwayStationPlatformStructuralElementController.getAll
  );
  route.get(
    "/railway-station-platform-structural-elements/:id",
    RailwayStationPlatformStructuralElementController.get
  );
  route.post(
    "/railway-station-platform-structural-elements",
    validateData.railwayStationPlatformStructuralElementValidate,
    RailwayStationPlatformStructuralElementController.save
  );
  route.put(
    "/railway-station-platform-structural-elements/:id",
    validateData.railwayStationPlatformStructuralElementValidate,
    RailwayStationPlatformStructuralElementController.update
  );
  route.delete(
    "/railway-station-platform-structural-elements/:id",
    RailwayStationPlatformStructuralElementController.delete
  );

  // RailwayStationPlatformSignageAndWayFinding routes with validation
  route.get(
    "/railway-station-platform-signage-and-way-findings",
    RailwayStationPlatformSignageAndWayFindingController.getAll
  );
  route.get(
    "/railway-station-platform-signage-and-way-findings/:id",
    RailwayStationPlatformSignageAndWayFindingController.get
  );
  route.post(
    "/railway-station-platform-signage-and-way-findings",
    validateData.railwayStationPlatformSignageAndWayFindingValidate,
    RailwayStationPlatformSignageAndWayFindingController.save
  );
  route.put(
    "/railway-station-platform-signage-and-way-findings/:id",
    validateData.railwayStationPlatformSignageAndWayFindingValidate,
    RailwayStationPlatformSignageAndWayFindingController.update
  );
  route.delete(
    "/railway-station-platform-signage-and-way-findings/:id",
    RailwayStationPlatformSignageAndWayFindingController.delete
  );


  // RailwayStationPlatformSafetyAndSecurity routes with validation
  route.get(
    "/railway-station-platform-safety-and-securities",
    RailwayStationPlatformSafetyAndSecurityController.getAll
  );
  route.get(
    "/railway-station-platform-safety-and-securities/:id",
    RailwayStationPlatformSafetyAndSecurityController.get
  );
  route.post(
    "/railway-station-platform-safety-and-securities",
    validateData.railwayStationPlatformSafetyAndSecurityValidate,
    RailwayStationPlatformSafetyAndSecurityController.save
  );
  route.put(
    "/railway-station-platform-safety-and-securities/:id",
    validateData.railwayStationPlatformSafetyAndSecurityValidate,
    RailwayStationPlatformSafetyAndSecurityController.update
  );
  route.delete(
    "/railway-station-platform-safety-and-securities/:id",
    RailwayStationPlatformSafetyAndSecurityController.delete
  );

  // RailwayStationPlatformSurfaceAndFinish routes with validation
  route.get(
    "/railway-station-platform-surface-and-finishes",
    RailwayStationPlatformSurfaceAndFinishController.getAll
  );
  route.get(
    "/railway-station-platform-surface-and-finishes/:id",
    RailwayStationPlatformSurfaceAndFinishController.get
  );
  route.post(
    "/railway-station-platform-surface-and-finishes",
    validateData.railwayStationPlatformSurfaceAndFinishValidate,
    RailwayStationPlatformSurfaceAndFinishController.save
  );
  route.put(
    "/railway-station-platform-surface-and-finishes/:id",
    validateData.railwayStationPlatformSurfaceAndFinishValidate,
    RailwayStationPlatformSurfaceAndFinishController.update
  );
  route.delete(
    "/railway-station-platform-surface-and-finishes/:id",
    RailwayStationPlatformSurfaceAndFinishController.delete
  );


  // RailwayStationPlatformPassengerFlowAndCapacity routes with validation
  route.get(
    "/railway-station-platform-passenger-flow-and-capacities",
    RailwayStationPlatformPassengerFlowAndCapacityController.getAll
  );
  route.get(
    "/railway-station-platform-passenger-flow-and-capacities/:id",
    RailwayStationPlatformPassengerFlowAndCapacityController.get
  );
  route.post(
    "/railway-station-platform-passenger-flow-and-capacities",
    validateData.railwayStationPlatformPassengerFlowAndCapacityValidate,
    RailwayStationPlatformPassengerFlowAndCapacityController.save
  );
  route.put(
    "/railway-station-platform-passenger-flow-and-capacities/:id",
    validateData.railwayStationPlatformPassengerFlowAndCapacityValidate,
    RailwayStationPlatformPassengerFlowAndCapacityController.update
  );
  route.delete(
    "/railway-station-platform-passenger-flow-and-capacities/:id",
    RailwayStationPlatformPassengerFlowAndCapacityController.delete
  );


  // RailwayStationPlatformEnvironmentalAndOtherFactor routes with validation
  route.get("/project-overviews", RailwayStationPlatformEnvironmentalAndOtherFactorController.getAl);

  route.get(
    "/railway-station-platform-environmental-and-other-factors",
    RailwayStationPlatformEnvironmentalAndOtherFactorController.getAll
  );
  route.get(
    "/railway-station-platform-environmental-and-other-factors/:id",
    RailwayStationPlatformEnvironmentalAndOtherFactorController.get
  );
  route.post(
    "/railway-station-platform-environmental-and-other-factors",
    validateData.railwayStationPlatformEnvironmentalAndOtherFactorValidate,
    RailwayStationPlatformEnvironmentalAndOtherFactorController.save
  );
  route.put(
    "/railway-station-platform-environmental-and-other-factors/:id",
    validateData.railwayStationPlatformEnvironmentalAndOtherFactorValidate,
    RailwayStationPlatformEnvironmentalAndOtherFactorController.update
  );
  route.delete(
    "/railway-station-platform-environmental-and-other-factors/:id",
    RailwayStationPlatformEnvironmentalAndOtherFactorController.delete
  );


  route.get("/railway-power-supply-configurations", RailwayPowerSupplyConfigurationController.getAll);
  route.get("/railway-power-supply-configurations/:id", RailwayPowerSupplyConfigurationController.get);
  route.post("/railway-power-supply-configurations", validateData.railwayPowerSupplyConfigurationValidate, RailwayPowerSupplyConfigurationController.save);
  route.put("/railway-power-supply-configurations/:id", validateData.railwayPowerSupplyConfigurationValidate, RailwayPowerSupplyConfigurationController.update);
  route.delete("/railway-power-supply-configurations/:id", RailwayPowerSupplyConfigurationController.delete);

  route.get("/railway-power-substations-and-equipments", RailwayPowerSubstationsAndEquipmentController.getAll);
  route.get("/railway-power-substations-and-equipments/:id", RailwayPowerSubstationsAndEquipmentController.get);
  route.post("/railway-power-substations-and-equipments", validateData.railwayPowerSubstationsAndEquipmentValidate, RailwayPowerSubstationsAndEquipmentController.save);
  route.put("/railway-power-substations-and-equipments/:id", validateData.railwayPowerSubstationsAndEquipmentValidate, RailwayPowerSubstationsAndEquipmentController.update);
  route.delete("/railway-power-substations-and-equipments/:id", RailwayPowerSubstationsAndEquipmentController.delete);
  

  route.get("/railway-power-distributions", RailwayPowerDistributionController.getAll);
  route.get("/railway-power-distributions/:id", RailwayPowerDistributionController.get);
  route.post("/railway-power-distributions", validateData.railwayPowerDistributionValidate, RailwayPowerDistributionController.save);
  route.put("/railway-power-distributions/:id", validateData.railwayPowerDistributionValidate, RailwayPowerDistributionController.update);
  route.delete("/railway-power-distributions/:id", RailwayPowerDistributionController.delete);

  
  route.get("/railway-power-supply-maintenance-and-testings", RailwayPowerSupplyMaintenanceAndTestingController.getAll);
  route.get("/railway-power-supply-maintenance-and-testings/:id", RailwayPowerSupplyMaintenanceAndTestingController.get);
  route.post("/railway-power-supply-maintenance-and-testings", validateData.railwayPowerSupplyMaintenanceAndTestingValidate, RailwayPowerSupplyMaintenanceAndTestingController.save);
  route.put("/railway-power-supply-maintenance-and-testings/:id", validateData.railwayPowerSupplyMaintenanceAndTestingValidate, RailwayPowerSupplyMaintenanceAndTestingController.update);
  route.delete("/railway-power-supply-maintenance-and-testings/:id", RailwayPowerSupplyMaintenanceAndTestingController.delete);
  
  route.get("/railway-power-supply-safety-and-compliances", RailwayPowerSupplySafetyAndComplianceController.getAll);
  route.get("/railway-power-supply-safety-and-compliances/:id", RailwayPowerSupplySafetyAndComplianceController.get);
  route.post("/railway-power-supply-safety-and-compliances", validateData.railwayPowerSupplySafetyAndComplianceValidate, RailwayPowerSupplySafetyAndComplianceController.save);
  route.put("/railway-power-supply-safety-and-compliances/:id", validateData.railwayPowerSupplySafetyAndComplianceValidate, RailwayPowerSupplySafetyAndComplianceController.update);
  route.delete("/railway-power-supply-safety-and-compliances/:id", RailwayPowerSupplySafetyAndComplianceController.delete);

  route.get("/railway-power-supply-environmental-and-other-factors", RailwayPowerSupplyEnvironmentalAndOtherFactorController.getAll);
  route.get("/railway-power-supply-environmental-and-other-factors/:id", RailwayPowerSupplyEnvironmentalAndOtherFactorController.get);
  route.post("/railway-power-supply-environmental-and-other-factors", validateData.railwayPowerSupplyEnvironmentalAndOtherFactorValidate, RailwayPowerSupplyEnvironmentalAndOtherFactorController.save);
  route.put("/railway-power-supply-environmental-and-other-factors/:id", validateData.railwayPowerSupplyEnvironmentalAndOtherFactorValidate, RailwayPowerSupplyEnvironmentalAndOtherFactorController.update);
  route.delete("/railway-power-supply-environmental-and-other-factors/:id", RailwayPowerSupplyEnvironmentalAndOtherFactorController.delete);

  // RailwayMaintenanceFacilityTypeAndPurpose routes with validation
  route.get("/railway-maintenance-facility-type-and-purposes", RailwayMaintenanceFacilityTypeAndPurposeController.getAll);
  route.get("/railway-maintenance-facility-type-and-purposes/:id", RailwayMaintenanceFacilityTypeAndPurposeController.get);
  route.post("/railway-maintenance-facility-type-and-purposes", validateData.railwayMaintenanceFacilityTypeAndPurposeValidate, RailwayMaintenanceFacilityTypeAndPurposeController.save);
  route.put("/railway-maintenance-facility-type-and-purposes/:id", validateData.railwayMaintenanceFacilityTypeAndPurposeValidate, RailwayMaintenanceFacilityTypeAndPurposeController.update);
  route.delete("/railway-maintenance-facility-type-and-purposes/:id", RailwayMaintenanceFacilityTypeAndPurposeController.delete);

  // RailwayMaintenanceFacilityLayoutAndDesign routes with validation
  route.get("/railway-maintenance-facility-layout-and-designs", RailwayMaintenanceFacilityLayoutAndDesignController.getAll);
  route.get("/railway-maintenance-facility-layout-and-designs/:id", RailwayMaintenanceFacilityLayoutAndDesignController.get);
  route.post("/railway-maintenance-facility-layout-and-designs", validateData.railwayMaintenanceFacilityLayoutAndDesignValidate, RailwayMaintenanceFacilityLayoutAndDesignController.save);
  route.put("/railway-maintenance-facility-layout-and-designs/:id", validateData.railwayMaintenanceFacilityLayoutAndDesignValidate, RailwayMaintenanceFacilityLayoutAndDesignController.update);
  route.delete("/railway-maintenance-facility-layout-and-designs/:id", RailwayMaintenanceFacilityLayoutAndDesignController.delete);


  // RailwayMaintenanceFacilityEquipmentAndTool routes with validation
  route.get("/railway-maintenance-facility-equipment-and-tools", RailwayMaintenanceFacilityEquipmentAndToolController.getAll);
  route.get("/railway-maintenance-facility-equipment-and-tools/:id", RailwayMaintenanceFacilityEquipmentAndToolController.get);
  route.post("/railway-maintenance-facility-equipment-and-tools", validateData.railwayMaintenanceFacilityEquipmentAndToolValidate, RailwayMaintenanceFacilityEquipmentAndToolController.save);
  route.put("/railway-maintenance-facility-equipment-and-tools/:id", validateData.railwayMaintenanceFacilityEquipmentAndToolValidate, RailwayMaintenanceFacilityEquipmentAndToolController.update);
  route.delete("/railway-maintenance-facility-equipment-and-tools/:id", RailwayMaintenanceFacilityEquipmentAndToolController.delete);


  // RailwayMaintenanceFacilityInfrastructureAndUtility routes with validation
  route.get("/railway-maintenance-facility-infrastructure-and-utilities", RailwayMaintenanceFacilityInfrastructureAndUtilityController.getAll);
  route.get("/railway-maintenance-facility-infrastructure-and-utilities/:id", RailwayMaintenanceFacilityInfrastructureAndUtilityController.get);
  route.post("/railway-maintenance-facility-infrastructure-and-utilities", validateData.railwayMaintenanceFacilityInfrastructureAndUtilityValidate, RailwayMaintenanceFacilityInfrastructureAndUtilityController.save);
  route.put("/railway-maintenance-facility-infrastructure-and-utilities/:id", validateData.railwayMaintenanceFacilityInfrastructureAndUtilityValidate, RailwayMaintenanceFacilityInfrastructureAndUtilityController.update);
  route.delete("/railway-maintenance-facility-infrastructure-and-utilities/:id", RailwayMaintenanceFacilityInfrastructureAndUtilityController.delete);


  // RailwayMaintenanceWorkforceAndFacilityStaff routes with validation
  route.get("/railway-maintenance-workforce-and-facility-staffs", RailwayMaintenanceWorkforceAndFacilityStaffController.getAll);
  route.get("/railway-maintenance-workforce-and-facility-staffs/:id", RailwayMaintenanceWorkforceAndFacilityStaffController.get);
  route.post("/railway-maintenance-workforce-and-facility-staffs", validateData.railwayMaintenanceWorkforceAndFacilityStaffValidate, RailwayMaintenanceWorkforceAndFacilityStaffController.save);
  route.put("/railway-maintenance-workforce-and-facility-staffs/:id", validateData.railwayMaintenanceWorkforceAndFacilityStaffValidate, RailwayMaintenanceWorkforceAndFacilityStaffController.update);
  route.delete("/railway-maintenance-workforce-and-facility-staffs/:id", RailwayMaintenanceWorkforceAndFacilityStaffController.delete);

  // RailwayMaintenanceFacilityScheduleAndProcedure routes with validation
  route.get("/railway-maintenance-facility-schedule-and-procedures", RailwayMaintenanceFacilityScheduleAndProcedureController.getAll);
  route.get("/railway-maintenance-facility-schedule-and-procedures/:id", RailwayMaintenanceFacilityScheduleAndProcedureController.get);
  route.post("/railway-maintenance-facility-schedule-and-procedures", validateData.railwayMaintenanceFacilityScheduleAndProcedureValidate, RailwayMaintenanceFacilityScheduleAndProcedureController.save);
  route.put("/railway-maintenance-facility-schedule-and-procedures/:id", validateData.railwayMaintenanceFacilityScheduleAndProcedureValidate, RailwayMaintenanceFacilityScheduleAndProcedureController.update);
  route.delete("/railway-maintenance-facility-schedule-and-procedures/:id", RailwayMaintenanceFacilityScheduleAndProcedureController.delete);
  
  // RailwayMaintenanceFacilityAndSecurity routes with validation
  route.get("/railway-maintenance-facility-and-securities", RailwayMaintenanceFacilityAndSecurityController.getAll);
  route.get("/railway-maintenance-facility-and-securities/:id", RailwayMaintenanceFacilityAndSecurityController.get);
  route.post("/railway-maintenance-facility-and-securities", validateData.railwayMaintenanceFacilityAndSecurityValidate, RailwayMaintenanceFacilityAndSecurityController.save);
  route.put("/railway-maintenance-facility-and-securities/:id", validateData.railwayMaintenanceFacilityAndSecurityValidate, RailwayMaintenanceFacilityAndSecurityController.update);
  route.delete("/railway-maintenance-facility-and-securities/:id", RailwayMaintenanceFacilityAndSecurityController.delete);

  // RailwayMaintenanceEnvironmentalAndOtherFactor routes with validation
  route.get("/railway-maintenance-environmental-and-other-factors", RailwayMaintenanceEnvironmentalAndOtherFactorController.getAll);
  route.get("/railway-maintenance-environmental-and-other-factors/:id", RailwayMaintenanceEnvironmentalAndOtherFactorController.get);
  route.post("/railway-maintenance-environmental-and-other-factors", validateData.railwayMaintenanceEnvironmentalAndOtherFactorValidate, RailwayMaintenanceEnvironmentalAndOtherFactorController.save);
  route.put("/railway-maintenance-environmental-and-other-factors/:id", validateData.railwayMaintenanceEnvironmentalAndOtherFactorValidate, RailwayMaintenanceEnvironmentalAndOtherFactorController.update);
  route.delete("/railway-maintenance-environmental-and-other-factors/:id", RailwayMaintenanceEnvironmentalAndOtherFactorController.delete);

  route.get("/construction-methods", ConstructionMethodController.getAll);
  route.get("/construction-methods/:id", ConstructionMethodController.get);
  route.post("/construction-methods", validateData.constructionMethodValidate, ConstructionMethodController.save);
  route.put("/construction-methods/:id", validateData.constructionMethodValidate, ConstructionMethodController.update);
  route.delete("/construction-methods/:id", ConstructionMethodController.delete);

  route.get("/claims", ClaimController.getAll);
  route.get("/claims/:id", ClaimController.get);
  route.post("/claims", validateData.claimValidate, ClaimController.save);
  route.put("/claims/:id", validateData.claimValidate, ClaimController.update);
  route.delete("/claims/:id", ClaimController.delete);


  route.get("/challenges", ChallengeController.getAll);
  route.get("/challenges/:id", ChallengeController.get);
  route.post("/challenges", validateData.challengeValidate, ChallengeController.save);
  route.put("/challenges/:id", validateData.challengeValidate, ChallengeController.update);
  route.delete("/challenges/:id", ChallengeController.delete);


   route.get(
    "/mapping/:id",ProjectController.getCategoryMapping);
  return route;

};
