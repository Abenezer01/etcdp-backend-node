const ProjectStatusController = require("../../../controllers/project/ProjectStatusController.js");
const ProjectController = require("../../../controllers/project/ProjectController.js");
const ProjectStakeholderController = require("../../../controllers/project/ProjectStakeholderController.js");
const ProjectPlanController = require("../../../controllers/project/ProjectPlanController.js");
const ProjectReportController = require("../../../controllers/project/ProjectReportController.js");
const ProjectDocumentController = require("../../../controllers/project/ProjectDocumentController.js");
const ConstructionResourceController = require("../../../controllers/project/ConstructionResourceController.js");
const BuildingEnvelopMaterialController = require("../../../controllers/project/BuildingEnvelopMaterialController.js");
const BuildingDimensionDetailsController = require("../../../controllers/project/BuildingDimensionDetailsController.js");
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
const TelecomInfrastructureController = require("../../../controllers/projects/TelecomInfrastructureController.js");
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
const BridgeComponentAndAncillaryController = require("../../../controllers/projects/BridgeComponentAndAncillaryController.js");
const ThermalBiomassIncinerationDataController = require("../../../controllers/projects/ThermalBiomassIncinerationDataController.js");
const TelecomInfrastructureManufacturerController = require("../../../controllers/projects/TelecomInfrastructureManufacturerController.js");
const MobileNetworkComponentManufacturerController = require("../../../controllers/projects/MobileNetworkComponentManufacturerController.js");
const SatelliteInfrastructureManufacturerController = require("../../../controllers/projects/SatelliteInfrastructureManufacturerController.js");
const MobileNetworkCapacityController = require("../../../controllers/projects/MobileNetworkCapacityController.js");
const MobileNetworkCoverageController = require("../../../controllers/projects/MobileNetworkCoverageController.js");
const MachineryInformationController = require("../../../controllers/project/MachineryInformationController.js");
const DesignStandardController = require("../../../controllers/projects/DesignStandardController.js");
const RoadSafetyFeatureController = require("../../../controllers/projects/RoadSafetyFeatureController.js");
const SatelliteNetworkCoverageController = require("../../../controllers/projects/SatelliteNetworkCoverageController.js")
const SatelliteNetworkComponentAgeController = require("../../../controllers/projects/SatelliteNetworkComponentAgeController.js")
const SatelliteNetworkCapacityController = require("../../../controllers/projects/SatelliteNetworkCapacityController.js")
const BroadcastingNetworkCapacityController = require("../../../controllers/projects/BroadcastingNetworkCapacityController.js")
const BroadcastingNetworkCoverageController = require("../../../controllers/projects/BroadcastingNetworkCoverageController.js")
const CulvertConditionAssessmentController = require("../../../controllers/projects/CulvertConditionAssessmentController.js") 
const DrainageMaintenanceController = require("../../../controllers/projects/DrainageMaintenanceController.js") 
const ProjectFileController = require("../../../controllers/projects/ProjectFileController.js")

const hasPermission = require("../../../middleware/hasPermission.js");

const validateData = require("../../../middleware/validate/module/project/validate");

module.exports = function (express) {
  const route = express.Router();

  //project outcomes
  route.get("/project-outcomes", hasPermission('view_projectoutcome'), ProjectOutcomeController.getAll);
  route.get("/project-outcomes/:id", hasPermission('view_projectoutcome'), ProjectOutcomeController.get);
  // route.get("/project/project-outcomes/:id", ProjectOutcomeController.getByProjectId);
  route.post("/project-outcomes", hasPermission('create_projectoutcome'), validateData.railWayValidate, ProjectOutcomeController.save);
  route.put(
    "/project-outcomes/:id",
    hasPermission('update_projectoutcome'),
    validateData.railWayValidate,
    ProjectOutcomeController.update
  );
  route.delete("/project-outcomes/:id", hasPermission('delete_projectoutcome'), ProjectAdditionalInfoController.delete);

  //project outcomes
  route.get("/project-additional-infos", hasPermission('view_projectadditionalinfo'), ProjectAdditionalInfoController.getAll);
  route.get("/project-additional-infos/:id", hasPermission('view_projectadditionalinfo'), ProjectAdditionalInfoController.get);
  route.post("/project-additional-infos", hasPermission('create_projectadditionalinfo'), validateData.railWayValidate, ProjectAdditionalInfoController.save);
  route.put(
    "/project-additional-infos/:id",
    hasPermission('update_projectadditionalinfo'),
    validateData.railWayValidate,
    ProjectAdditionalInfoController.update
  );
  route.delete("/project-additional-infos/:id", hasPermission('delete_projectadditionalinfo'), ProjectAdditionalInfoController.delete);
  //project outcomes
  route.get("/project-outcomes", hasPermission('view_projectoutcome'), ProjectOutcomeController.getAll);
  route.get("/project-outcomes/:id", hasPermission('view_projectoutcome'), ProjectOutcomeController.get);
  route.post("/project-outcomes", hasPermission('create_projectoutcome'), validateData.railWayValidate, ProjectOutcomeController.save);
  route.put(
    "/project-outcomes/:id",
    hasPermission('update_projectoutcome'),
    validateData.railWayValidate,
    ProjectOutcomeController.update
  );
  route.delete("/project-outcomes/:id", hasPermission('delete_projectoutcome'), ProjectAdditionalInfoController.delete);

  //project outcomes
  // route.get("/project-additional-infos", ProjectAdditionalInfoController.getAll);
  // route.get("/project-additional-infos/:id", ProjectAdditionalInfoController.get);
  // route.post("/project-additional-infos", validateData.railWayValidate, ProjectAdditionalInfoController.save);
  // route.put(
  //   "/project-additional-infos/:id",
  //   validateData.railWayValidate,
  //   ProjectAdditionalInfoController.update
  // );
  // route.delete("/project-additional-infos/:id", ProjectAdditionalInfoController.delete);

  //Project status
  route.get("/project-statuses", hasPermission('view_projectstatus'), ProjectStatusController.getAll);
  route.get("/project-statuses/:id", hasPermission('view_projectstatus'), ProjectStatusController.get);
  route.get(
    "/project/project-statuses/:id",
    ProjectStatusController.getByProjectId
  );
  route.post(
    "/project-statuses",
    hasPermission('create_projectstatus'),
    validateData.projectStatusValidate,
    ProjectStatusController.save
  );
  route.put(
    "/project-statuses/:id",
    hasPermission('update_projectstatus'),
    validateData.projectStatusValidate,
    ProjectStatusController.update
  );
  route.delete("/project-statuses/:id", hasPermission('delete_projectstatus'), ProjectStatusController.delete);
  // //Project registration
  // route.get("/project", ProjectController.getAll);
  // route.get("/project/:id", ProjectController.get);
  // route.get("/project-searches", ProjectController.search);
  // route.post("/project", validateData.projectValidate, ProjectController.save);
  // route.put("/project/:id", validateData.projectValidate, ProjectController.update);
  // route.delete("/project/:id", ProjectController.delete);
  //Project stakeholder
  route.get("/project-stakeholders", hasPermission('view_projectstakeholder'), ProjectStakeholderController.getAll);
  route.get("/project-stakeholders/:id", hasPermission('view_projectstakeholder'), ProjectStakeholderController.get);
  route.get(
    "/project/project-stakeholders/:id",
    ProjectStakeholderController.getByProjectId
  );
  route.get(
    "/stakeholder/project-stakeholders/:id",
    ProjectStakeholderController.getByStakeholderId
  );
  route.post(
    "/project-stakeholders",
    hasPermission('create_projectstakeholder'),
    validateData.projectStakeholderValidate,
    ProjectStakeholderController.save
  );
  route.put(
    "/project-stakeholders/:id",
    hasPermission('update_projectstakeholder'),
    validateData.projectStakeholderValidate,
    ProjectStakeholderController.update
  );
  route.delete("/project-stakeholders/:id", hasPermission('delete_projectstakeholder'), ProjectStakeholderController.delete);
  //Project plan
  route.get("/project-plans", hasPermission('view_projectplan'), ProjectPlanController.getAll);
  route.get("/project-plans/:id", hasPermission('view_projectplan'), ProjectPlanController.get);
  route.get("/project/project-plans/:id", ProjectPlanController.getByProjectId);
  route.post(
    "/project-plans",
    hasPermission('create_projectplan'),
    validateData.projectPlanValidate,
    ProjectPlanController.save
  );
  route.put(
    "/project-plans/:id",
    hasPermission('update_projectplan'),
    validateData.projectPlanValidate,
    ProjectPlanController.update
  );
  route.delete("/project-plans/:id", hasPermission('delete_projectplan'), ProjectPlanController.delete);
  route.get(
    "/project-yearly-plans/:id/:year",
    ProjectPlanController.getProjectYearlyPlans
  );

  //project report

  route.get("/project-reports", hasPermission('view_projectreport'), ProjectReportController.getAll);
  route.get("/project-reports/:id", hasPermission('view_projectreport'), ProjectReportController.get);
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
    hasPermission('create_projectreport'),
    validateData.projectReportValidate,
    ProjectReportController.save
  );
  route.put(
    "/project-reports/:id",
    hasPermission('update_projectreport'),
    validateData.projectReportValidate,
    ProjectReportController.update
  );
  route.delete("/project-reports/:id", hasPermission('delete_projectreport'), ProjectReportController.delete);

  route.get(
    "/monthly-project-report/:id",
    ProjectReportController.getMonthlyProjectReport
  );

  route.get(
    "/project-yearly-reports/:id/:year",
    ProjectReportController.getProjectYearlyReports
  );

  //Project document
  route.get("/project-documents", hasPermission('view_projectdocument'), ProjectDocumentController.getAll);
  route.get("/project-documents/:id", hasPermission('view_projectdocument'), ProjectDocumentController.get);
  route.get(
    "/project/project-documents/:id",
    ProjectDocumentController.getByProjectId
  );
  route.post(
    "/project-documents",
    hasPermission('create_projectdocument'),
    validateData.projectDocumentValidate,
    ProjectDocumentController.save
  );
  route.put(
    "/project-documents/:id",
    hasPermission('update_projectdocument'),
    validateData.projectDocumentValidate,
    ProjectDocumentController.update
  );
  route.delete("/project-documents/:id", hasPermission('delete_projectdocument'), ProjectDocumentController.delete);
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
    hasPermission('view_buildingenvelopmaterial'),
    BuildingEnvelopMaterialController.getAll
  );
  route.get(
    "/buildingenvelopmaterials/:id",
    hasPermission('view_buildingenvelopmaterial'),
    BuildingEnvelopMaterialController.get
  );
  route.get(
    "/project/buildingenvelopmaterials/:id",
    BuildingEnvelopMaterialController.getByProjectId
  );
  route.post(
    "/buildingenvelopmaterials",
    hasPermission('create_buildingenvelopmaterial'),
    validateData.buildingEnvelopMaterialValidate,
    BuildingEnvelopMaterialController.save
  );
  route.put(
    "/buildingenvelopmaterials/:id",
    hasPermission('update_buildingenvelopmaterial'),
    validateData.buildingEnvelopMaterialValidate,
    BuildingEnvelopMaterialController.update
  );
  route.delete(
    "/buildingenvelopmaterials/:id",
    hasPermission('delete_buildingenvelopmaterial'),
    BuildingEnvelopMaterialController.delete
  );
  //Building dimension details
  route.get(
    "/buildingdimensiondetails",
    hasPermission('view_buildingdimensiondetail'),
    BuildingDimensionDetailsController.getAll
  );
  route.get(
    "/buildingdimensiondetails/:id",
    hasPermission('view_buildingdimensiondetail'),
    BuildingDimensionDetailsController.get
  );
  route.get(
    "/project/buildingdimensiondetails/:id",
    BuildingDimensionDetailsController.getByProjectId
  );
  route.post(
    "/buildingdimensiondetails",
    hasPermission('create_buildingdimensiondetail'),
    validateData.buildingDimensionDetailValidate,
    BuildingDimensionDetailsController.save
  );
  route.put(
    "/buildingdimensiondetails/:id",
    hasPermission('update_buildingdimensiondetail'),
    validateData.buildingDimensionDetailValidate,
    BuildingDimensionDetailsController.update
  );
  route.delete(
    "/building-dimension-detail/:id",
    hasPermission('delete_buildingdimensiondetail'),
    BuildingDimensionDetailsController.delete
  );

  //Generating capacity
  route.get("/generatingcapacitys", hasPermission('view_generatingcapacity'), GeneratingCapacityController.getAll);
  route.get("/generatingcapacitys/:id", hasPermission('view_generatingcapacity'), GeneratingCapacityController.get);
  route.get(
    "/project/generatingcapacitys/:id",
    GeneratingCapacityController.getByProjectId
  );
  route.post(
    "/generatingcapacitys",
    hasPermission('create_generatingcapacity'),
    validateData.generatingCapacityValidate,
    GeneratingCapacityController.save
  );
  route.put(
    "/generatingcapacitys/:id",
    hasPermission('update_generatingcapacity'),
    validateData.generatingCapacityValidate,
    GeneratingCapacityController.update
  );
  route.delete("/generatingcapacitys/:id", hasPermission('delete_generatingcapacity'), GeneratingCapacityController.delete);
  //Turbine detail
  route.get("/turbineinfos", hasPermission('view_turbineinfo'), TurbineDetailController.getAll);
  route.get("/turbineinfos/:id", hasPermission('view_turbineinfo'), TurbineDetailController.get);
  route.get(
    "/project/turbineinfos/:id",
    TurbineDetailController.getByProjectId
  );
  route.post(
    "/turbineinfos",
    hasPermission('create_turbineinfo'),
    validateData.turbineInfoValidate,
    TurbineDetailController.save
  );
  route.put(
    "/turbineinfos/:id",
    hasPermission('update_turbineinfo'),
    validateData.turbineInfoValidate,
    TurbineDetailController.update
  );
  route.delete("/turbineinfos/:id", hasPermission('delete_turbineinfo'), TurbineDetailController.delete);
  //Hydrolectric dam
  route.get("/hydroelectricdams", hasPermission('view_hydroelectricdam'), HydroElectricDamController.getAll);
  route.get("/hydroelectricdams/:id", hasPermission('view_hydroelectricdam'), HydroElectricDamController.get);
  route.get(
    "/project/hydroelectricdams/:id",
    HydroElectricDamController.getByProjectId
  );
  route.post(
    "/hydroelectricdams",
    hasPermission('create_hydroelectricdam'),
    validateData.hydroElectricDamValidate,
    HydroElectricDamController.save
  );
  route.put(
    "/hydroelectricdams/:id",
    hasPermission('update_hydroelectricdam'),
    validateData.hydroElectricDamValidate,
    HydroElectricDamController.update
  );
  route.delete("/hydroelectricdams/:id", hasPermission('delete_hydroelectricdam'), HydroElectricDamController.delete);
  //Spillways detailf
  route.get("/spillwayinfos", hasPermission('view_spillwayinfo'), SpillWaysDetailController.getAll);
  route.get("/spillwayinfos/:id", hasPermission('view_spillwayinfo'), SpillWaysDetailController.get);
  route.get(
    "/project/spillwayinfos/:id",
    SpillWaysDetailController.getByProjectId
  );
  route.post(
    "/spillwayinfos",
    hasPermission('create_spillwayinfo'),
    validateData.spillWayInfoValidate,
    SpillWaysDetailController.save
  );
  route.put(
    "/spillwayinfos/:id",
    hasPermission('update_spillwayinfo'),
    validateData.spillWayInfoValidate,
    SpillWaysDetailController.update
  );
  route.delete("/spillwayinfos/:id", hasPermission('delete_spillwayinfo'), SpillWaysDetailController.delete);
  //Reservoir detail
  route.get("/reservoirinfos", hasPermission('view_reservoirinfo'), ReservoirDetailsController.getAll);
  route.get("/reservoirinfos/:id", hasPermission('view_reservoirinfo'), ReservoirDetailsController.get);
  route.get(
    "/project/reservoirinfos/:id",
    ReservoirDetailsController.getByProjectId
  );
  route.post(
    "/reservoirinfos",
    hasPermission('create_reservoirinfo'),
    validateData.reserviorDetailValidate,
    ReservoirDetailsController.save
  );
  route.put(
    "/reservoirinfos/:id",
    hasPermission('update_reservoirinfo'),
    validateData.reserviorDetailValidate,
    ReservoirDetailsController.update
  );
  route.delete("/reservoirinfos/:id", hasPermission('delete_reservoirinfo'), ReservoirDetailsController.delete);
  //Irrigation capacity
  route.get("/irrigationcapacities", hasPermission('view_irrigationcapacity'), IrrigationCapacityController.getAll);
  route.get("/irrigationcapacities/:id", hasPermission('view_irrigationcapacity'), IrrigationCapacityController.get);
  route.get(
    "/project/irrigationcapacities/:id",
    IrrigationCapacityController.getByProjectId
  );
  route.post(
    "/irrigationcapacities",
    hasPermission('create_irrigationcapacity'),
    validateData.irrigationCapacityValidate,
    IrrigationCapacityController.save
  );
  route.put(
    "/irrigationcapacities/:id",
    hasPermission('update_irrigationcapacity'),
    validateData.irrigationCapacityValidate,
    IrrigationCapacityController.update
  );
  route.delete("/irrigationcapacities/:id", hasPermission('delete_irrigationcapacity'), IrrigationCapacityController.delete);


  // route.get("/projects/cpm", ProjectController.getAllCPMProject);
  route.get("/projects/", hasPermission('view_project'), ProjectController.getAll);
  route.get("/projects/:id", hasPermission('view_project'), ProjectController.get);
  route.post("/projects", hasPermission('create_project'), validateData.projectValidate, ProjectController.save);
  route.get("/project-analysis/:id", ProjectController.getProjectAnalysis);

  route.put(
    "/projects/:id",
    hasPermission('update_project'),
    validateData.projectValidate,
    ProjectController.update
  );
  route.delete("/projects/:id", hasPermission('delete_project'), ProjectController.delete);
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
  route.get("/project-finances/", hasPermission('view_projectfinance'), ProjectFinanceController.getAll);
  route.get("/project-finances/:id", hasPermission('view_projectfinance'), ProjectFinanceController.get);
  route.get(
    "/project-finances/project/:id",
    ProjectFinanceController.getByProjectId
  );
  route.post(
    "/project-finances",
    hasPermission('create_projectfinance'),
    validateData.projectFinanceValidate,
    ProjectFinanceController.save
  );
  route.put(
    "/project-finances/:id",
    hasPermission('update_projectfinance'),
    validateData.projectFinanceValidate,
    ProjectFinanceController.update
  );
  route.delete("/project-finances/:id", hasPermission('delete_projectfinance'), ProjectFinanceController.delete);

  //project variation route
  route.get("/project-variations/", hasPermission('view_projectvariation'), ProjectVariationController.getAll);
  route.get("/project-variations/:id", hasPermission('view_projectvariation'), ProjectVariationController.get);
  route.get(
    "/project/project-variations/:id",
    ProjectVariationController.getByProjectId
  );
  route.get(
    "/type/project-variations",
    hasPermission('view_projectvariation'),
    ProjectVariationController.getByProjectType
  );
  route.post(
    "/project-variations",
    hasPermission('create_projectvariation'),
    validateData.projectVariationValidate,
    ProjectVariationController.save
  );
  route.put(
    "/project-variations/:id",
    hasPermission('update_projectvariation'),
    validateData.projectVariationValidate,
    ProjectVariationController.update
  );
  route.delete("/project-variations/:id", hasPermission('delete_projectvariation'), ProjectVariationController.delete);

  //extensions
  route.get("/project-extension-times/", hasPermission('view_projectextensiontime'), ProjectExtensionTimeController.getAll);
  route.get("/project-extension-times/:id", hasPermission('view_projectextensiontime'), ProjectExtensionTimeController.get);
  route.get(
    "/project/project-extension-times/:id",
    ProjectExtensionTimeController.getByProjectId
  );
  route.post(
    "/project-extension-times",
    hasPermission('create_projectextensiontime'),
    validateData.projectExtensionTimeValidate,
    ProjectExtensionTimeController.save
  );
  route.put(
    "/project-extension-times/:id",
    hasPermission('update_projectextensiontime'),
    validateData.projectExtensionTimeValidate,
    ProjectExtensionTimeController.update
  );
  route.delete(
    "/project-extension-times/:id",
    hasPermission('delete_projectextensiontime'),
    ProjectExtensionTimeController.delete
  );

  //project time
  route.get("/project-times", hasPermission('view_projecttime'), ProjectTimeController.getAll);
  route.get("/project-times/:id", hasPermission('view_projecttime'), ProjectTimeController.get);
  route.get("/project/project-times/:id", hasPermission('view_projecttime'), ProjectTimeController.getByProjectId); 
  route.post(
    "/project-times",
    hasPermission('create_projecttime'),
    validateData.projectTimeValidate,
    ProjectTimeController.save
  );
  route.put(
    "/project-times/:id",
    hasPermission('update_projecttime'),
    validateData.projectTimeValidate,
    ProjectTimeController.update
  );
  route.delete("/project-times/:id", hasPermission('delete_projecttime'), ProjectTimeController.delete);

  route.get("/project-time-analysis/:id", hasPermission('view_projecttime'), ProjectController.getContractTimeAnalysis);

  //project bond
  route.get("/project-bonds/", hasPermission('view_projectbond'), ProjectBondController.getAll);
  route.get("/project-bonds/:id", hasPermission('view_projectbond'), ProjectBondController.get);
  route.get("/project/project-bonds/:id", hasPermission('view_projectbond'), ProjectBondController.getByProjectId);
  route.get("/type/project-bonds", hasPermission('view_projectbond'), ProjectBondController.getByProjectType);
  route.post(
    "/project-bonds",
    hasPermission('create_projectbond'),
    validateData.projectBondValidate,
    ProjectBondController.save
  );
  route.put(
    "/project-bonds/:id",
    hasPermission('update_projectbond'),
    validateData.projectBondValidate,
    ProjectBondController.update
  );
  route.delete("/project-bonds/:id", hasPermission('delete_projectbond'), ProjectBondController.delete);

  //road info
  route.get("/roadinfos/", hasPermission('view_roadinfo'), RoadInfoController.getAll);
  route.get("/roadinfos/:id", hasPermission('view_roadinfo'), RoadInfoController.get);
  route.get("/project/roadinfos/:id", hasPermission('view_roadinfo'), RoadInfoController.getByProjectId);
  route.post(
    "/roadinfos",
    hasPermission('create_roadinfo'),
    validateData.roadDetailValidate,
    RoadInfoController.save
  );
  route.put(
    "/roadinfos/:id",
    hasPermission('update_roadinfo'),
    validateData.roadDetailValidate,
    RoadInfoController.update
  );
  route.delete("/roadinfos/:id", hasPermission('delete_roadinfo'), RoadInfoController.delete);

  //road segment
  route.get("/roadsegments/", hasPermission('view_roadsegment'), RoadSegmentController.getAll);
  route.get("/roadsegments/:id", hasPermission('view_roadsegment'), RoadSegmentController.get);
  route.get("/project/roadsegments/:id", hasPermission('view_roadsegment'), RoadSegmentController.getByProjectId);
  route.post(
    "/roadsegments",
    hasPermission('create_roadsegment'),
    validateData.roadSegmentValidate,
    RoadSegmentController.save
  );
  route.put(
    "/roadsegments/:id",
    hasPermission('update_roadsegment'),
    validateData.roadSegmentValidate,
    RoadSegmentController.update
  );
  route.delete("/roadsegments/:id", hasPermission('delete_roadsegment'), RoadSegmentController.delete);

  //road layer
  route.get("/roadlayers/", hasPermission('view_roadlayer'), RoadLayerController.getAll);
  route.get("/roadlayers/:id", hasPermission('view_roadlayer'), RoadLayerController.get);
  route.get("/project/roadlayers/:id", hasPermission('view_roadlayer'), RoadLayerController.getByProjectId);
  route.post(
    "/roadlayers",
    hasPermission('create_roadlayer'),
    validateData.roadLayerValidate,
    RoadLayerController.save
  );
  route.put(
    "/roadlayers/:id",
    hasPermission('update_roadlayer'),
    validateData.roadLayerValidate,
    RoadLayerController.update
  );
  route.delete("/roadlayers/:id", hasPermission('delete_roadlayer'), RoadLayerController.delete);

  //solar energy
  route.get("/solarenergys", hasPermission('view_solarenergy'), SolarEnergyController.getAll);
  route.get("/solarenergys/:id", hasPermission('view_solarenergy'), SolarEnergyController.get);
  route.get("/project/solarenergys/:id", hasPermission('view_solarenergy'), SolarEnergyController.getByProjectId);
  route.post(
    "/solarenergys",
    hasPermission('create_solarenergy'),
    validateData.solarEnergyValidate,
    SolarEnergyController.save
  );
  route.put(
    "/solarenergys/:id",
    hasPermission('update_solarenergy'),
    validateData.solarEnergyValidate,
    SolarEnergyController.update
  );
  route.delete("/solarenergys/:id", hasPermission('delete_solarenergy'), SolarEnergyController.delete);

  //wind energy
  route.get("/windenergys", hasPermission('view_windenergy'), WindEnergyController.getAll);
  route.get("/windenergys/:id", hasPermission('view_windenergy'), WindEnergyController.get);
  route.get("/project/windenergys/:id", hasPermission('view_windenergy'), WindEnergyController.getByProjectId);
  route.post(
    "/windenergys",
    hasPermission('create_windenergy'),
    validateData.windEnergyValidate,
    WindEnergyController.save
  );
  route.put(
    "/windenergys/:id",
    hasPermission('update_windenergy'),
    validateData.windEnergyValidate,
    WindEnergyController.update
  );
  route.delete("/windenergys/:id", hasPermission('delete_windenergy'), WindEnergyController.delete);

  //transformer
  route.get("/transformers", hasPermission('view_transformer'), TransformerController.getAll);
  route.get("/transformers/:id", hasPermission('view_transformer'), TransformerController.get);
  route.get("/project/transformers/:id", hasPermission('view_transformer'), TransformerController.getByProjectId);
  route.post(
    "/transformers",
    hasPermission('create_transformer'),
    validateData.transformerValidate,
    TransformerController.save
  );
  route.put(
    "/transformers/:id",
    hasPermission('update_transformer'),
    validateData.transformerValidate,
    TransformerController.update
  );
  route.delete("/transformers/:id", hasPermission('delete_transformer'), TransformerController.delete);

  //transformer type
  route.get("/transformertypes", hasPermission('view_transformertype'), TransformerTypeController.getAll);
  route.get("/transformertypes/:id", hasPermission('view_transformertype'), TransformerTypeController.get);
  route.get(
    "/project/transformertypes/:id",
    hasPermission('view_transformertype'),
    TransformerTypeController.getByProjectId
  );
  route.post(
    "/transformertypes",
    hasPermission('create_transformertype'),
    validateData.transformerTypeValidate,
    TransformerTypeController.save
  );
  route.put(
    "/transformertypes/:id",
    hasPermission('update_transformertype'),
    validateData.transformerTypeValidate,
    TransformerTypeController.update
  );
  route.delete("/transformertypes/:id", hasPermission('delete_transformertype'), TransformerTypeController.delete);

  //transmission lines
  route.get("/transmissionlines", hasPermission('view_transmissionline'), TransmissionLineController.getAll);
  route.get("/transmissionlines/:id", hasPermission('view_transmissionline'), TransmissionLineController.get);
  route.get(
    "/project/transmissionlines/:id",
    hasPermission('view_transmissionline'),
    TransmissionLineController.getByProjectId
  );
  route.post(
    "/transmissionlines",
    hasPermission('create_transmissionline'),
    validateData.transmissionLineValidate,
    TransmissionLineController.save
  );
  route.put(
    "/transmissionlines/:id",
    hasPermission('update_transmissionline'),
    validateData.transmissionLineValidate,
    TransmissionLineController.update
  );
  route.delete("/transmissionlines/:id", hasPermission('delete_transmissionline'), TransmissionLineController.delete);

  //electric tower
  route.get("/electrictowers", hasPermission('view_electrictower'), ElectricTowerController.getAll);
  route.get("/electrictowers/:id", hasPermission('view_electrictower'), ElectricTowerController.get);
  route.get(
    "/project/electrictowers/:id",
    hasPermission('view_electrictower'),
    ElectricTowerController.getByProjectId
  );
  route.post(
    "/electrictowers",
    hasPermission('create_electrictower'),
    validateData.electricTowerValidate,
    ElectricTowerController.save
  );
  route.put(
    "/electrictowers/:id",
    hasPermission('update_electrictower'),
    validateData.electricTowerValidate,
    ElectricTowerController.update
  );
  route.delete("/electrictowers/:id", hasPermission('delete_electrictower'), ElectricTowerController.delete);

  //railway
  route.get("/railways", hasPermission('view_railway'), RailwayController.getAll);
  route.get("/railways/:id", hasPermission('view_railway'), RailwayController.get);
  route.get("/project/railways/:id", hasPermission('view_railway'), RailwayController.getByProjectId);
  route.post("/railways", hasPermission('create_railway'), validateData.railWayValidate, RailwayController.save);
  route.put(
    "/railways/:id",
    hasPermission('update_railway'),
    validateData.railWayValidate,
    RailwayController.update
  );
  route.delete("/railways/:id", hasPermission('delete_railway'), RailwayController.delete);

  //railway station
  route.get("/railwaystations", hasPermission('view_railwaystation'), RailwayStationController.getAll);
  route.get("/railwaystations/:id", hasPermission('view_railwaystation'), RailwayStationController.get);
  route.get(
    "/project/railwaystations/:id",
    hasPermission('view_railwaystation'),
    RailwayStationController.getByProjectId
  );
  route.post(
    "/railwaystations",
    hasPermission('create_railwaystation'),
    validateData.railWayStationValidate,
    RailwayStationController.save
  );
  route.put(
    "/railwaystations/:id",
    hasPermission('update_railwaystation'),
    validateData.railWayStationValidate,
    RailwayStationController.update
  );
  route.delete("/railwaystations/:id", hasPermission('delete_railwaystation'), RailwayStationController.delete);

  //water irrigation dam
  route.get("/waterirrigationdams", hasPermission('view_waterirrigationdam'), WaterIrrigationDamController.getAll);
  route.get("/waterirrigationdams/:id", hasPermission('view_waterirrigationdam'), WaterIrrigationDamController.get);
  route.get(
    "/project/waterirrigationdams/:id",
    hasPermission('view_waterirrigationdam'),
    WaterIrrigationDamController.getByProjectId
  );
  route.post(
    "/waterirrigationdams",
    hasPermission('create_waterirrigationdam'),
    validateData.waterIrrigationValidate,
    WaterIrrigationDamController.save
  );
  route.put(
    "/waterirrigationdams/:id",
    hasPermission('update_waterirrigationdam'),
    validateData.waterIrrigationValidate,
    WaterIrrigationDamController.update
  );
  route.delete(
    "/waterirrigationdams/:id",
    hasPermission('delete_waterirrigationdam'),
    WaterIrrigationDamController.delete
  );

  //port
  route.get("/ports", hasPermission('view_port'), PortController.getAll);
  route.get("/ports/:id", hasPermission('view_port'), PortController.get);
  route.get("/project/ports/:id", hasPermission('view_port'), PortController.getByProjectId);
  route.post("/ports", hasPermission('create_port'), validateData.portValidate, PortController.save);
  route.put("/ports/:id", hasPermission('update_port'), validateData.portValidate, PortController.update);
  route.delete("/ports/:id", hasPermission('delete_port'), PortController.delete);

  //payment
  route.get("/payments", hasPermission('view_payment'), PaymentController.getAll);
  route.get("/payments/:id", hasPermission('view_payment'), PaymentController.get);
  route.get("/type/project/payments", hasPermission('view_payment'), PaymentController.getByProjectIdAndType);
  route.get("/project/payments/:id", hasPermission('view_payment'), PaymentController.getByProjectId);
  route.post("/payments", hasPermission('create_payment'), validateData.paymentValidate, PaymentController.save);
  route.put(
    "/payments/:id",
    hasPermission('update_payment'),
    validateData.paymentValidate,
    PaymentController.update
  );
  route.delete("/payments/:id", hasPermission('delete_payment'), PaymentController.delete);

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
  route.get("/project-managers", hasPermission('view_projectmanager'), ProjectManagerController.getAll);
  route.get("/project-managers/:id", hasPermission('view_projectmanager'), ProjectManagerController.get);
  route.post("/project-managers", hasPermission('create_projectmanager'), validateData.railWayValidate, ProjectManagerController.save);
  route.put(
    "/project-managers/:id",
    hasPermission('update_projectmanager'),
    validateData.railWayValidate,
    ProjectManagerController.update
  );
  route.delete("/project-managers/:id", hasPermission('delete_projectmanager'), ProjectManagerController.delete);

  // ProjectContactPerson routes with validation
  route.get("/project-contact-people", hasPermission('view_projectcontactperson'), ProjectContactPersonController.getAll);
  route.get("/project-contact-people/:id", hasPermission('view_projectcontactperson'), ProjectContactPersonController.get);
  route.post("/project-contact-people", hasPermission('create_projectcontactperson'), validateData.projectContactPersonValidate, ProjectContactPersonController.save);
  route.put("/project-contact-people/:id", hasPermission('update_projectcontactperson'), validateData.projectContactPersonValidate, ProjectContactPersonController.update);
  route.delete("/project-contact-people/:id", hasPermission('delete_projectcontactperson'), ProjectContactPersonController.delete);

  // ProjectSafetyStatus routes with validation
  route.get("/project-safety-statuses", hasPermission('view_projectsafetystatus'), ProjectSafetyStatusController.getAll);
  route.get("/project-safety-statuses/:id", hasPermission('view_projectsafetystatus'), ProjectSafetyStatusController.get);
  route.post("/project-safety-statuses", hasPermission('create_projectsafetystatus'), validateData.projectSafetyStatusValidate, ProjectSafetyStatusController.save);
  route.put("/project-safety-statuses/:id", hasPermission('update_projectsafetystatus'), validateData.projectSafetyStatusValidate, ProjectSafetyStatusController.update);
  route.delete("/project-safety-statuses/:id", hasPermission('delete_projectsafetystatus'), ProjectSafetyStatusController.delete);

  // ProjectQuality routes with validation  
  route.get("/project-qualities", hasPermission('view_projectquality'), ProjectQualityController.getAll);
  route.get("/project-qualities/:id", hasPermission('view_projectquality'), ProjectQualityController.get);
  route.post("/project-qualities", hasPermission('create_projectquality'), validateData.projectQualityValidate, ProjectQualityController.save);
  route.put("/project-qualities/:id", hasPermission('update_projectquality'), validateData.projectQualityValidate, ProjectQualityController.update);
  route.delete("/project-qualities/:id", hasPermission('delete_projectquality'), ProjectQualityController.delete);

  // WeatherCondition routes with validation
  route.get("/weather-conditions", hasPermission('view_weathercondition'), WeatherConditionController.getAll);
  route.get("/weather-conditions/:id", hasPermission('view_weathercondition'), WeatherConditionController.get);
  route.post("/weather-conditions", hasPermission('create_weathercondition'), validateData.weatherConditionValidate, WeatherConditionController.save);
  route.put("/weather-conditions/:id", hasPermission('update_weathercondition'), validateData.weatherConditionValidate, WeatherConditionController.update);
  route.delete("/weather-conditions/:id", hasPermission('delete_weathercondition'), WeatherConditionController.delete);

  // ProjectConstructionType routes with validation
  route.get("/project-construction-types", hasPermission('view_projectconstructiontype'), ProjectConstructionTypeController.getAll);
  route.get("/project-construction-types/:id", hasPermission('view_projectconstructiontype'), ProjectConstructionTypeController.get);
  route.post("/project-construction-types", hasPermission('create_projectconstructiontype'), validateData.projectConstructionTypeValidate, ProjectConstructionTypeController.save);
  route.put("/project-construction-types/:id", hasPermission('update_projectconstructiontype'), validateData.projectConstructionTypeValidate, ProjectConstructionTypeController.update);
  route.delete("/project-construction-types/:id", hasPermission('delete_projectconstructiontype'), ProjectConstructionTypeController.delete);

  // SegmentGeometry routes with validation
  route.get("/segment-geometries", hasPermission('view_segmentgeometry'), SegmentGeometryController.getAll);
  route.get("/segment-geometries/:id", hasPermission('view_segmentgeometry'), SegmentGeometryController.get);
  route.post("/segment-geometries", hasPermission('post_segmentgeometry'), validateData.segmentGeometryValidate, SegmentGeometryController.save);
  route.put("/segment-geometries/:id", hasPermission('update_segmentgeometry'), validateData.segmentGeometryValidate, SegmentGeometryController.update);
  route.delete("/segment-geometries/:id", hasPermission('delete_segmentgeometry'), SegmentGeometryController.delete);

  // IntersectionAndDriveway routes with validation
  route.get("/intersection-and-driveways", hasPermission('view_intersectionanddriveway'), IntersectionAndDrivewayController.getAll);
  route.get("/intersection-and-driveways/:id", hasPermission('view_intersectionanddriveway'), IntersectionAndDrivewayController.get);
  route.post("/intersection-and-driveways", hasPermission('post_intersectionanddriveway'), validateData.intersectionAndDrivewayValidate, IntersectionAndDrivewayController.save);
  route.put("/intersection-and-driveways/:id", hasPermission('update_intersectionanddriveway'), validateData.intersectionAndDrivewayValidate, IntersectionAndDrivewayController.update);
  route.delete("/intersection-and-driveways/:id", hasPermission('delete_intersectionanddriveway'), IntersectionAndDrivewayController.delete);



  // TrafficParameter routes with validation
  route.get("/traffic-parameters", hasPermission('view_trafficparameter'), TrafficParameterController.getAll);
  route.get("/traffic-parameters/:id", hasPermission('view_trafficparameter'), TrafficParameterController.get);
  route.post("/traffic-parameters", hasPermission('create_trafficparameter'), validateData.trafficParameterValidate, TrafficParameterController.save);
  route.put("/traffic-parameters/:id", hasPermission('update_trafficparameter'), validateData.trafficParameterValidate, TrafficParameterController.update);
  route.delete("/traffic-parameters/:id", hasPermission('delete_trafficparameter'), TrafficParameterController.delete);

  // Accessory routes with validation
  route.get("/accessories", hasPermission('view_accessory'), AccessoryController.getAll);
  route.get("/accessories/:id", hasPermission('view_accessory'), AccessoryController.get);
  route.post("/accessories", hasPermission('create_accessory'), validateData.accessoryValidate, AccessoryController.save);
  route.put("/accessories/:id", hasPermission('update_accessory'), validateData.accessoryValidate, AccessoryController.update);
  route.delete("/accessories/:id", hasPermission('delete_accessory'), AccessoryController.delete);

  // Pavement routes with validation
  route.get("/pavements", hasPermission('view_pavement'), PavementController.getAll);
  route.get("/pavements/:id", hasPermission('view_pavement'), PavementController.get);
  route.post("/pavements", hasPermission('create_pavement'), validateData.pavementValidate, PavementController.save);
  route.put("/pavements/:id", hasPermission('update_pavement'), validateData.pavementValidate, PavementController.update);
  route.delete("/pavements/:id", hasPermission('delete_pavement'), PavementController.delete);

  // CulvertBasicData routes with validation
  route.get("/culvert-basic-datas", hasPermission('view_culvertbasicdata'), CulvertBasicDataController.getAll);
  route.get("/culvert-basic-datas/:id", hasPermission('view_culvertbasicdata'), CulvertBasicDataController.get);
  route.post("/culvert-basic-datas", hasPermission('create_culvertbasicdata'), validateData.culvertBasicDataValidate, CulvertBasicDataController.save);
  route.put("/culvert-basic-datas/:id", hasPermission('update_culvertbasicdata'), validateData.culvertBasicDataValidate, CulvertBasicDataController.update);
  route.delete("/culvert-basic-datas/:id", hasPermission('delete_culvertbasicdata'), CulvertBasicDataController.delete);

  // CulvertStructuralInformation routes with validation
  route.get("/culvert-structural-informations", hasPermission('view_culvertstructuralinformation'), CulvertStructuralInformationController.getAll);
  route.get("/culvert-structural-informations/:id", hasPermission('view_culvertstructuralinformation'), CulvertStructuralInformationController.get);
  route.post("/culvert-structural-informations", hasPermission('create_culvertstructuralinformation'), validateData.culvertStructuralInformationValidate, CulvertStructuralInformationController.save);
  route.put("/culvert-structural-informations/:id", hasPermission('update_culvertstructuralinformation'), validateData.culvertStructuralInformationValidate, CulvertStructuralInformationController.update);
  route.delete("/culvert-structural-informations/:id", hasPermission('delete_culvertstructuralinformation'), CulvertStructuralInformationController.delete);

  // CulvertRoadOverInformation routes with validation
  route.get("/culvert-road-over-informations", hasPermission('view_culvertroadoverinformation'), CulvertRoadOverInformationController.getAll);
  route.get("/culvert-road-over-informations/:id", hasPermission('view_culvertroadoverinformation'), CulvertRoadOverInformationController.get);
  route.post("/culvert-road-over-informations", hasPermission('create_culvertroadoverinformation'), validateData.culvertRoadOverInformationValidate, CulvertRoadOverInformationController.save);
  route.put("/culvert-road-over-informations/:id", hasPermission('update_culvertroadoverinformation'), validateData.culvertRoadOverInformationValidate, CulvertRoadOverInformationController.update);
  route.delete("/culvert-road-over-informations/:id", hasPermission('delete_culvertroadoverinformation'), CulvertRoadOverInformationController.delete);

  // BridgeBasicData routes with validation
  route.get("/bridge-basic-datas", hasPermission('view_bridgebasicdata'), BridgeBasicDataController.getAll);
  route.get("/bridge-basic-datas/:id", hasPermission('view_bridgebasicdata'), BridgeBasicDataController.get);
  route.post("/bridge-basic-datas", hasPermission('create_bridgebasicdata'), validateData.bridgeBasicDataValidate, BridgeBasicDataController.save);
  route.put("/bridge-basic-datas/:id", hasPermission('update_bridgebasicdata'), validateData.bridgeBasicDataValidate, BridgeBasicDataController.update);
  route.delete("/bridge-basic-datas/:id", hasPermission('delete_bridgebasicdata'), BridgeBasicDataController.delete);


  // BridgeAreaData routes with validation
  route.get("/bridge-area-datas", hasPermission('view_bridgeareadata'), BridgeAreaDataController.getAll);
  route.get("/bridge-area-datas/:id", hasPermission('view_bridgeareadata'), BridgeAreaDataController.get);
  route.post("/bridge-area-datas", hasPermission('create_bridgeareadata'), validateData.bridgeAreaDataValidate, BridgeAreaDataController.save);
  route.put("/bridge-area-datas/:id", hasPermission('update_bridgeareadata'), validateData.bridgeAreaDataValidate, BridgeAreaDataController.update);
  route.delete("/bridge-area-datas/:id", hasPermission('delete_bridgeareadata'), BridgeAreaDataController.delete);



  // BridgeSuperStructure routes with validation
  route.get("/bridge-super-structures", hasPermission('view_bridgesuperstructure'), BridgeSuperStructureController.getAll);
  route.get("/bridge-super-structures/:id", hasPermission('view_bridgesuperstructure'), BridgeSuperStructureController.get);
  route.post("/bridge-super-structures", hasPermission('create_bridgesuperstructure'), validateData.bridgeSuperStructureValidate, BridgeSuperStructureController.save);
  route.put("/bridge-super-structures/:id", hasPermission('update_bridgesuperstructure'), validateData.bridgeSuperStructureValidate, BridgeSuperStructureController.update);
  route.delete("/bridge-super-structures/:id", hasPermission('delete_bridgesuperstructure'), BridgeSuperStructureController.delete);


  // BridgeSuperStructure routes with validation
  route.get("/bridge-sub-structures", hasPermission('view_bridgesubstructure'), BridgeSubStructureController.getAll);
  route.get("/bridge-sub-structures/:id", hasPermission('view_bridgesubstructure'), BridgeSubStructureController.get);
  route.post("/bridge-sub-structures", hasPermission('create_bridgesubstructure'), validateData.bridgeSubStructureValidate, BridgeSubStructureController.save);
  route.put("/bridge-sub-structures/:id", hasPermission('update_bridgesubstructure'), validateData.bridgeSubStructureValidate, BridgeSubStructureController.update);
  route.delete("/bridge-sub-structures/:id", hasPermission('delete_bridgesubstructure'), BridgeSubStructureController.delete);

  // BridgeFoundation routes with validation
  route.get("/bridge-foundations", hasPermission('view_bridgefoundation'), BridgeFoundationController.getAll);
  route.get("/bridge-foundations/:id", hasPermission('view_bridgefoundation'), BridgeFoundationController.get);
  route.post("/bridge-foundations", hasPermission('create_bridgefoundation'), validateData.bridgeFoundationValidate, BridgeFoundationController.save);
  route.put("/bridge-foundations/:id", hasPermission('update_bridgefoundation'), validateData.bridgeFoundationValidate, BridgeFoundationController.update);
  route.delete("/bridge-foundations/:id", hasPermission('delete_bridgefoundation'), BridgeFoundationController.delete);



  // BridgeInspection routes with validation
  route.get("/bridge-inspections", hasPermission('view_bridgeinspection'), BridgeInspectionController.getAll);
  route.get("/bridge-inspections/:id", hasPermission('view_bridgeinspection'), BridgeInspectionController.get);
  route.post("/bridge-inspections", hasPermission('create_bridgeinspection'), validateData.bridgeInspectionValidate, BridgeInspectionController.save);
  route.put("/bridge-inspections/:id", hasPermission('update_bridgeinspection'), validateData.bridgeInspectionValidate, BridgeInspectionController.update);
  route.delete("/bridge-inspections/:id", hasPermission('delete_bridgeinspection'), BridgeInspectionController.delete);


  // BridgeStructureInformation routes with validation
  route.get("/bridge-structure-informations", hasPermission('view_bridgestructureinformation'), BridgeStructureInformationController.getAll);
  route.get("/bridge-structure-informations/:id",  hasPermission('view_bridgestructureinformation'), BridgeStructureInformationController.get);
  route.post("/bridge-structure-informations",  hasPermission('create_bridgestructureinformation'), validateData.bridgeStructureInformationValidate, BridgeStructureInformationController.save);
  route.put("/bridge-structure-informations/:id",  hasPermission('update_bridgestructureinformation'), validateData.bridgeStructureInformationValidate, BridgeStructureInformationController.update);
  route.delete("/bridge-structure-informations/:id",  hasPermission('delete_bridgestructureinformation'), BridgeStructureInformationController.delete);

  route.get("/bridge-component-and-ancillaries",  hasPermission('view_bridgecomponentandancillary'), BridgeComponentAndAncillaryController.getAll);
  route.get("/bridge-component-and-ancillaries/:id", hasPermission('view_bridgecomponentandancillary'), BridgeComponentAndAncillaryController.get);
  route.post("/bridge-component-and-ancillaries", hasPermission('create_bridgecomponentandancillary'), validateData.bridgeComponentAndAncillaryValidate, BridgeComponentAndAncillaryController.save);
  route.put("/bridge-component-and-ancillaries/:id", hasPermission('update_bridgecomponentandancillary'), validateData.bridgeComponentAndAncillaryValidate, BridgeComponentAndAncillaryController.update);
  route.delete("/bridge-component-and-ancillaries/:id", hasPermission('delete_bridgecomponentandancillary'), BridgeComponentAndAncillaryController.delete);


  // TrafficVolume routes with validation
  route.get("/traffic-volumes", hasPermission('view_trafficvolume'), TrafficVolumeController.getAll);
  route.get("/traffic-volumes/:id", hasPermission('view_trafficvolume'), TrafficVolumeController.get);
  route.post("/traffic-volumes", hasPermission('create_trafficvolume'), validateData.trafficVolumeValidate, TrafficVolumeController.save);
  route.put("/traffic-volumes/:id", hasPermission('update_trafficvolume'), validateData.trafficVolumeValidate, TrafficVolumeController.update);
  route.delete("/traffic-volumes/:id", hasPermission('delete_trafficvolume'), TrafficVolumeController.delete);

  // RoadProjectQualityControl routes with validation
  route.get("/road-project-quality-controls", hasPermission('view_roadprojectqualitycontrol'), RoadProjectQualityControlController.getAll);
  route.get("/road-project-quality-controls/:id", hasPermission('view_roadprojectqualitycontrol'), RoadProjectQualityControlController.get);
  route.post("/road-project-quality-controls", hasPermission('create_roadprojectqualitycontrol'), validateData.roadProjectQualityControlValidate, RoadProjectQualityControlController.save);
  route.put("/road-project-quality-controls/:id", hasPermission('update_roadprojectqualitycontrol'), validateData.roadProjectQualityControlValidate, RoadProjectQualityControlController.update);
  route.delete("/road-project-quality-controls/:id", hasPermission('delete_roadprojectqualitycontrol'), RoadProjectQualityControlController.delete);


  // RoadDrainage routes with validation
  route.get("/road-drainages", hasPermission('view_roaddrainage'), RoadDrainageController.getAll);
  route.get("/road-drainages/:id", hasPermission('view_roaddrainage'), RoadDrainageController.get);
  route.post("/road-drainages", hasPermission('create_roaddrainage'), validateData.roadDrainageValidate, RoadDrainageController.save);
  route.put("/road-drainages/:id", hasPermission('update_roaddrainage'), validateData.roadDrainageValidate, RoadDrainageController.update);
  route.delete("/road-drainages/:id", hasPermission('delete_roaddrainage'), RoadDrainageController.delete);


 // GeotechnicalInformation routes with validation
  route.get("/geotechnical-informations", hasPermission('view_geotechnicalinformation'), GeotechnicalInformationController.getAll);
  route.get("/geotechnical-informations/:id", hasPermission('view_geotechnicalinformation'), GeotechnicalInformationController.get);
  route.post("/geotechnical-informations", hasPermission('create_geotechnicalinformation'), validateData.geotechnicalInformationValidate, GeotechnicalInformationController.save);
  route.put("/geotechnical-informations/:id", hasPermission('update_geotechnicalinformation'), validateData.geotechnicalInformationValidate, GeotechnicalInformationController.update);
  route.delete("/geotechnical-informations/:id", hasPermission('delete_geotechnicalinformation'), GeotechnicalInformationController.delete);

// EnvironmentalData routes with validation
  route.get("/environmental-datas", hasPermission('view_environmentaldata'), EnvironmentalDataController.getAll);
  route.get("/environmental-datas/:id", hasPermission('view_environmentaldata'), EnvironmentalDataController.get);
  route.post("/environmental-datas", hasPermission('create_environmentaldata'), validateData.environmentalDataValidate, EnvironmentalDataController.save);
  route.put("/environmental-datas/:id", hasPermission('update_environmentaldata'), validateData.environmentalDataValidate, EnvironmentalDataController.update);
  route.delete("/environmental-datas/:id", hasPermission('delete_environmentaldata'), EnvironmentalDataController.delete);

// RoadMaintenanceData routes with validation
  route.get("/road-maintenance-datas", hasPermission('view_roadmaintenancedata'), RoadMaintenanceDataController.getAll);
  route.get("/road-maintenance-datas/:id", hasPermission('view_roadmaintenancedata'), RoadMaintenanceDataController.get);
  route.post("/road-maintenance-datas", hasPermission('create_roadmaintenancedata'), validateData.roadMaintenanceDataValidate, RoadMaintenanceDataController.save);
  route.put("/road-maintenance-datas/:id", hasPermission('update_roadmaintenancedata'), validateData.roadMaintenanceDataValidate, RoadMaintenanceDataController.update);
  route.delete("/road-maintenance-datas/:id", hasPermission('delete_roadmaintenancedata'), RoadMaintenanceDataController.delete);


// RoadMaintenanceActivity routes with validation
  route.get("/road-maintenance-activities", hasPermission('view_roadmaintenanceactivity'), RoadMaintenanceActivityController.getAll);
  route.get("/road-maintenance-activities/:id", hasPermission('view_roadmaintenanceactivity'), RoadMaintenanceActivityController.get);
  route.post("/road-maintenance-activities", hasPermission('create_roadmaintenanceactivity'), validateData.roadMaintenanceActivityValidate, RoadMaintenanceActivityController.save);
  route.put("/road-maintenance-activities/:id", hasPermission('update_roadmaintenanceactivity'), validateData.roadMaintenanceActivityValidate, RoadMaintenanceActivityController.update);
  route.delete("/road-maintenance-activities/:id", hasPermission('delete_roadmaintenanceactivity'), RoadMaintenanceActivityController.delete);


// DrainageAssessment routes with validation
  route.get("/drainage-assessments", hasPermission('view_drainageassessment'), DrainageAssessmentController.getAll);
  route.get("/drainage-assessments/:id", hasPermission('view_drainageassessment'), DrainageAssessmentController.get);
  route.post("/drainage-assessments", hasPermission('create_drainageassessment'), validateData.drainageAssessmentValidate, DrainageAssessmentController.save);
  route.put("/drainage-assessments/:id", hasPermission('update_drainageassessment'), validateData.drainageAssessmentValidate, DrainageAssessmentController.update);
  route.delete("/drainage-assessments/:id", hasPermission('delete_drainageassessment'), DrainageAssessmentController.delete);


// RoadSurfaceCondition routes with validation
  route.get("/road-surface-conditions", hasPermission('view_roadsurfacecondition'), RoadSurfaceConditionController.getAll);
  route.get("/road-surface-conditions/:id", hasPermission('view_roadsurfacecondition'), RoadSurfaceConditionController.get);
  route.post("/road-surface-conditions", hasPermission('create_roadsurfacecondition'), validateData.roadSurfaceConditionValidate, RoadSurfaceConditionController.save);
  route.put("/road-surface-conditions/:id", hasPermission('update_roadsurfacecondition'), validateData.roadSurfaceConditionValidate, RoadSurfaceConditionController.update);
  route.delete("/road-surface-conditions/:id", hasPermission('delete_roadsurfacecondition'), RoadSurfaceConditionController.delete);

// MaintenanceHistory routes with validation
  route.get("/maintenance-histories", hasPermission('view_maintenancehistory'), MaintenanceHistoryController.getAll);
  route.get("/maintenance-histories/:id", hasPermission('view_maintenancehistory'), MaintenanceHistoryController.get);
  route.post("/maintenance-histories", hasPermission('create_maintenancehistory'), validateData.maintenanceHistoryValidate, MaintenanceHistoryController.save);
  route.put("/maintenance-histories/:id", hasPermission('update_maintenancehistory'), validateData.maintenanceHistoryValidate, MaintenanceHistoryController.update);
  route.delete("/maintenance-histories/:id", hasPermission('delete_maintenancehistory'), MaintenanceHistoryController.delete);


// SafetyAndHealth routes with validation
  route.get("/safety-and-healths", hasPermission('view_safetyandhealth'), SafetyAndHealthController.getAll);
  route.get("/safety-and-healths/:id", hasPermission('view_safetyandhealth'), SafetyAndHealthController.get);
  route.post("/safety-and-healths", hasPermission('create_safetyandhealth'), validateData.safetyAndHealthValidate, SafetyAndHealthController.save);
  route.put("/safety-and-healths/:id", hasPermission('update_safetyandhealth'), validateData.safetyAndHealthValidate, SafetyAndHealthController.update);
  route.delete("/safety-and-healths/:id", hasPermission('delete_safetyandhealth'), SafetyAndHealthController.delete);

// TelecomInfrastructureComponent routes with validation
  route.get("/telecom-infrastructures", hasPermission('view_telecominfrastructure'), TelecomInfrastructureController.getAll);
  route.get("/telecom-infrastructures/:id", hasPermission('view_telecominfrastructure'), TelecomInfrastructureController.get);
  route.post("/telecom-infrastructures", hasPermission('create_telecominfrastructure'), validateData.telecomInfrastructureValidate, TelecomInfrastructureController.save);
  route.put("/telecom-infrastructures/:id", hasPermission('update_telecominfrastructure'), validateData.telecomInfrastructureValidate, TelecomInfrastructureController.update);
  route.delete("/telecom-infrastructures/:id", hasPermission('delete_telecominfrastructure'), TelecomInfrastructureController.delete);


// TelecomInfrastructureAge routes with validation
  route.get("/telecom-infrastructure-ages", hasPermission('view_telecominfrastructureage'), TelecomInfrastructureAgeController.getAll);
  route.get("/telecom-infrastructure-ages/:id", hasPermission('view_telecominfrastructureage'), TelecomInfrastructureAgeController.get);
  route.post("/telecom-infrastructure-ages", hasPermission('create_telecominfrastructureage'), validateData.telecomInfrastructureAgeValidate, TelecomInfrastructureAgeController.save);
  route.put("/telecom-infrastructure-ages/:id", hasPermission('update_telecominfrastructureage'), validateData.telecomInfrastructureAgeValidate, TelecomInfrastructureAgeController.update);
  route.delete("/telecom-infrastructure-ages/:id", hasPermission('delete_telecominfrastructureage'), TelecomInfrastructureAgeController.delete);

// Maintenance routes with validation
  route.get("/maintenances", hasPermission('view_maintenance'), MaintenanceController.getAll);
  route.get("/maintenances/:id", hasPermission('view_maintenance'), MaintenanceController.get);
  route.post("/maintenances", hasPermission('create_maintenance'), validateData.maintenanceValidate, MaintenanceController.save);
  route.put("/maintenances/:id", hasPermission('update_maintenance'), validateData.maintenanceValidate, MaintenanceController.update);
  route.delete("/maintenances/:id", hasPermission('delete_maintenance'), MaintenanceController.delete);

// NetworkCapacity routes with validation
  route.get("/network-capacities", hasPermission('view_networkcapacity'), NetworkCapacityController.getAll);
  route.get("/network-capacities/:id", hasPermission('view_networkcapacity'), NetworkCapacityController.get);
  route.post("/network-capacities", hasPermission('create_networkcapacity'), validateData.networkCapacityValidate, NetworkCapacityController.save);
  route.put("/network-capacities/:id", hasPermission('update_networkcapacity'), validateData.networkCapacityValidate, NetworkCapacityController.update);
  route.delete("/network-capacities/:id", hasPermission('delete_networkcapacity'), NetworkCapacityController.delete);

// MobileNetwork routes with validation
  route.get("/mobile-networks", hasPermission('view_mobilenetwork'), MobileNetworkController.getAll);
  route.get("/mobile-networks/:id", hasPermission('view_mobilenetwork'), MobileNetworkController.get);
  route.post("/mobile-networks", hasPermission('create_mobilenetwork'), validateData.mobileNetworkValidate, MobileNetworkController.save);
  route.put("/mobile-networks/:id", hasPermission('update_mobilenetwork'), validateData.mobileNetworkValidate, MobileNetworkController.update);
  route.delete("/mobile-networks/:id", hasPermission('delete_mobilenetwork'), MobileNetworkController.delete);


// MobileNetworkComponentAge routes with validation
  route.get("/mobile-network-component-ages", hasPermission('view_mobilenetworkcomponentage'), MobileNetworkComponentAgeController.getAll);
  route.get("/mobile-network-component-ages/:id", hasPermission('view_mobilenetworkcomponentage'), MobileNetworkComponentAgeController.get);
  route.post("/mobile-network-component-ages", hasPermission('create_mobilenetworkcomponentage'), validateData.mobileNetworkComponentAgeValidate, MobileNetworkComponentAgeController.save);
  route.put("/mobile-network-component-ages/:id", hasPermission('update_mobilenetworkcomponentage'), validateData.mobileNetworkComponentAgeValidate, MobileNetworkComponentAgeController.update);
  route.delete("/mobile-network-component-ages/:id", hasPermission('delete_mobilenetworkcomponentage'), MobileNetworkComponentAgeController.delete);


// NetworkCoverage routes with validation
  route.get("/network-coverages", hasPermission('view_networkcoverage'), NetworkCoverageController.getAll);
  route.get("/network-coverages/:id", hasPermission('view_networkcoverage'), NetworkCoverageController.get);
  route.post("/network-coverages", hasPermission('create_networkcoverage'), validateData.networkCoverageValidate, NetworkCoverageController.save);
  route.put("/network-coverages/:id", hasPermission('update_networkcoverage'), validateData.networkCoverageValidate, NetworkCoverageController.update);
  route.delete("/network-coverages/:id", hasPermission('delete_networkcoverage'), NetworkCoverageController.delete);

// SatelliteNetwork routes with validation
  route.get("/satellite-networks", hasPermission('view_satellitenetwork'), SatelliteNetworkController.getAll);
  route.get("/satellite-networks/:id", hasPermission('view_satellitenetwork'), SatelliteNetworkController.get);
  route.post("/satellite-networks", hasPermission('create_satellitenetwork'), validateData.satelliteNetworkValidate, SatelliteNetworkController.save);
  route.put("/satellite-networks/:id", hasPermission('update_satellitenetwork'), validateData.satelliteNetworkValidate, SatelliteNetworkController.update);
  route.delete("/satellite-networks/:id", hasPermission('delete_satellitenetwork'), SatelliteNetworkController.delete);


// SatelliteInfrastructureAge routes with validation
  route.get("/satellite-infrastructure-ages", hasPermission('view_satelliteinfrastructureage'), SatelliteInfrastructureAgeController.getAll);
  route.get("/satellite-infrastructure-ages/:id", hasPermission('view_satelliteinfrastructureage'), SatelliteInfrastructureAgeController.get);
  route.post("/satellite-infrastructure-ages", hasPermission('create_satelliteinfrastructureage'), validateData.satelliteInfrastructureAgeValidate, SatelliteInfrastructureAgeController.save);
  route.put("/satellite-infrastructure-ages/:id", hasPermission('update_satelliteinfrastructureage'), validateData.satelliteInfrastructureAgeValidate, SatelliteInfrastructureAgeController.update);
  route.delete("/satellite-infrastructure-ages/:id", hasPermission('delete_satelliteinfrastructureage'), SatelliteInfrastructureAgeController.delete);


// SatelliteNetworkComponentManufacturer routes with validation
  route.get("/satellite-network-component-manufacturers", hasPermission('view_satellitenetworkcomponentmanufacturer'), SatelliteNetworkComponentManufacturerController.getAll);
  route.get("/satellite-network-component-manufacturers/:id", hasPermission('view_satellitenetworkcomponentmanufacturer'), SatelliteNetworkComponentManufacturerController.get);
  route.post("/satellite-network-component-manufacturers", hasPermission('create_satellitenetworkcomponentmanufacturer'), validateData.satelliteNetworkComponentManufacturerValidate, SatelliteNetworkComponentManufacturerController.save);
  route.put("/satellite-network-component-manufacturers/:id", hasPermission('update_satellitenetworkcomponentmanufacturer'), validateData.satelliteNetworkComponentManufacturerValidate, SatelliteNetworkComponentManufacturerController.update);
  route.delete("/satellite-network-component-manufacturers/:id", hasPermission('delete_satellitenetworkcomponentmanufacturer'), SatelliteNetworkComponentManufacturerController.delete);

// InternetConnection routes with validation
  route.get("/internet-connections", hasPermission('view_internetconnection'), InternetConnectionController.getAll);
  route.get("/internet-connections/:id", hasPermission('view_internetconnection'), InternetConnectionController.get);
  route.post("/internet-connections", hasPermission('create_internetconnection'), InternetConnectionController.save);
// route.post("/internet-connections", validateData.internetConnectionValidate, InternetConnectionController.save);
  route.put("/internet-connections/:id", hasPermission('update_internetconnection'), validateData.internetConnectionValidate, InternetConnectionController.update);
  route.delete("/internet-connections/:id", hasPermission('delete_internetconnection'), InternetConnectionController.delete);


// InternetConnectionInfrastructureAge routes with validation
  route.get("/internet-connection-infrastructure-ages", hasPermission('view_internetconnectioninfrastructureage'), InternetConnectionInfrastructureAgeController.getAll);
  route.get("/internet-connection-infrastructure-ages/:id", hasPermission('view_internetconnectioninfrastructureage'), InternetConnectionInfrastructureAgeController.get);
  route.post("/internet-connection-infrastructure-ages", hasPermission('create_internetconnectioninfrastructureage'), InternetConnectionInfrastructureAgeController.save);
// route.post("/internet-connection-infrastructure-ages", validateData.internetConnectionInfrastructureAgeValidate, InternetConnectionInfrastructureAgeController.save);
  route.put("/internet-connection-infrastructure-ages/:id", hasPermission('update_internetconnectioninfrastructureage'), validateData.internetConnectionInfrastructureAgeValidate, InternetConnectionInfrastructureAgeController.update);
  route.delete("/internet-connection-infrastructure-ages/:id", hasPermission('delete_internetconnectioninfrastructureage'), InternetConnectionInfrastructureAgeController.delete);

// InternetConnectionInfrastructureManufacturer routes with validation
  route.get("/internet-connection-infrastructure-manufacturers", hasPermission('view_internetconnectioninfrastructuremanufacturer'), InternetConnectionInfrastructureManufacturerController.getAll);
  route.get("/internet-connection-infrastructure-manufacturers/:id", hasPermission('view_internetconnectioninfrastructuremanufacturer'), InternetConnectionInfrastructureManufacturerController.get);
  route.post("/internet-connection-infrastructure-manufacturers", hasPermission('create_internetconnectioninfrastructuremanufacturer'), validateData.internetConnectionInfrastructureManufacturerValidate, InternetConnectionInfrastructureManufacturerController.save);
  route.put("/internet-connection-infrastructure-manufacturers/:id", hasPermission('update_internetconnectioninfrastructuremanufacturer'), validateData.internetConnectionInfrastructureManufacturerValidate, InternetConnectionInfrastructureManufacturerController.update);
  route.delete("/internet-connection-infrastructure-manufacturers/:id", hasPermission('delete_internetconnectioninfrastructuremanufacturer'), InternetConnectionInfrastructureManufacturerController.delete);

// BroadcastingInfrastructure routes with validation
  route.get("/broadcasting-infrastructures", hasPermission('view_broadcastinginfrastructure'), BroadcastingInfrastructureController.getAll);
  route.get("/broadcasting-infrastructures/:id", hasPermission('view_broadcastinginfrastructure'), BroadcastingInfrastructureController.get);
  route.post("/broadcasting-infrastructures", hasPermission('create_broadcastinginfrastructure'), validateData.broadcastingInfrastructureValidate, BroadcastingInfrastructureController.save);
  route.put("/broadcasting-infrastructures/:id", hasPermission('update_broadcastinginfrastructure'), validateData.broadcastingInfrastructureValidate, BroadcastingInfrastructureController.update);
  route.delete("/broadcasting-infrastructures/:id", hasPermission('delete_broadcastinginfrastructure'), BroadcastingInfrastructureController.delete);

// BroadcastingInfrastructureAge routes with validation
  route.get("/broadcasting-infrastructure-ages", hasPermission('view_broadcastinginfrastructureage'), BroadcastingInfrastructureAgeController.getAll);
  route.get("/broadcasting-infrastructure-ages/:id", hasPermission('view_broadcastinginfrastructureage'), BroadcastingInfrastructureAgeController.get);
  route.post("/broadcasting-infrastructure-ages", hasPermission('create_broadcastinginfrastructureage'), validateData.broadcastingInfrastructureAgeValidate, BroadcastingInfrastructureAgeController.save);
  route.put("/broadcasting-infrastructure-ages/:id", hasPermission('update_broadcastinginfrastructureage'), validateData.broadcastingInfrastructureAgeValidate, BroadcastingInfrastructureAgeController.update);
  route.delete("/broadcasting-infrastructure-ages/:id", hasPermission('delete_broadcastinginfrastructureage'), BroadcastingInfrastructureAgeController.delete);

// BroadcastingInfrastructureManufacturer routes with validation
  route.get("/broadcasting-infrastructure-manufacturers", hasPermission('view_broadcastinginfrastructuremanufacturer'), BroadcastingInfrastructureManufacturerController.getAll);
  route.get("/broadcasting-infrastructure-manufacturers/:id", hasPermission('view_broadcastinginfrastructuremanufacturer'), BroadcastingInfrastructureManufacturerController.get);
  route.post("/broadcasting-infrastructure-manufacturers", hasPermission('create_broadcastinginfrastructuremanufacturer'), validateData.broadcastingInfrastructureManufacturerValidate, BroadcastingInfrastructureManufacturerController.save);
  route.put("/broadcasting-infrastructure-manufacturers/:id", hasPermission('update_broadcastinginfrastructuremanufacturer'), validateData.broadcastingInfrastructureManufacturerValidate, BroadcastingInfrastructureManufacturerController.update);
  route.delete("/broadcasting-infrastructure-manufacturers/:id", hasPermission('delete_broadcastinginfrastructuremanufacturer'), BroadcastingInfrastructureManufacturerController.delete);

// DataCenter routes with validation
  route.get("/data-centers", hasPermission('view_datacenter'), DataCenterController.getAll);
  route.get("/data-centers/:id", hasPermission('view_datacenter'), DataCenterController.get);
  route.post("/data-centers", hasPermission('create_datacenter'), validateData.dataCenterValidate, DataCenterController.save);
  route.put("/data-centers/:id", hasPermission('update_datacenter'), validateData.dataCenterValidate, DataCenterController.update);
  route.delete("/data-centers/:id", hasPermission('delete_datacenter'), DataCenterController.delete);

// DataCenterComponentAge routes with validation
  route.get("/data-center-component-ages", hasPermission('view_datacentercomponentage'), DataCenterComponentAgeController.getAll);
  route.get("/data-center-component-ages/:id", hasPermission('view_datacentercomponentage'), DataCenterComponentAgeController.get);
  route.post("/data-center-component-ages", hasPermission('create_datacentercomponentage'), validateData.dataCenterComponentAgeValidate, DataCenterComponentAgeController.save);
  route.put("/data-center-component-ages/:id", hasPermission('update_datacentercomponentage'), validateData.dataCenterComponentAgeValidate, DataCenterComponentAgeController.update);
  route.delete("/data-center-component-ages/:id", hasPermission('delete_datacentercomponentage'), DataCenterComponentAgeController.delete);

// DataCenterComponentManufacturer routes with validation
  route.get("/data-center-component-manufacturers", hasPermission('view_datacentercomponentmanufacturer'), DataCenterComponentManufacturerController.getAll);
  route.get("/data-center-component-manufacturers/:id", hasPermission('view_datacentercomponentmanufacturer'), DataCenterComponentManufacturerController.get);
  route.post("/data-center-component-manufacturers", hasPermission('create_datacentercomponentmanufacturer'), validateData.dataCenterComponentManufacturerValidate, DataCenterComponentManufacturerController.save);
  route.put("/data-center-component-manufacturers/:id", hasPermission('update_datacentercomponentmanufacturer'), validateData.dataCenterComponentManufacturerValidate, DataCenterComponentManufacturerController.update);
  route.delete("/data-center-component-manufacturers/:id", hasPermission('delete_datacentercomponentmanufacturer'), DataCenterComponentManufacturerController.delete);

// DataCenterFacilityCapacity routes with validation
  route.get("/data-center-facility-capacities", hasPermission('view_datacenterfacilitycapacity'), DataCenterFacilityCapacityController.getAll);
  route.get("/data-center-facility-capacities/:id", hasPermission('view_datacenterfacilitycapacity'), DataCenterFacilityCapacityController.get);
  route.post("/data-center-facility-capacities", hasPermission('create_datacenterfacilitycapacity'), validateData.dataCenterFacilityCapacityValidate, DataCenterFacilityCapacityController.save);
  route.put("/data-center-facility-capacities/:id", hasPermission('update_datacenterfacilitycapacity'), validateData.dataCenterFacilityCapacityValidate, DataCenterFacilityCapacityController.update);
  route.delete("/data-center-facility-capacities/:id", hasPermission('delete_datacenterfacilitycapacity'), DataCenterFacilityCapacityController.delete);

// EnvironmentalControl routes with validation
  route.get("/environmental-controls", hasPermission('view_environmentalcontrol'), EnvironmentalControlController.getAll);
  route.get("/environmental-controls/:id", hasPermission('view_environmentalcontrol'), EnvironmentalControlController.get);
  route.post("/environmental-controls", hasPermission('create_environmentalcontrol'), validateData.environmentalControlValidate, EnvironmentalControlController.save);
  route.put("/environmental-controls/:id", hasPermission('update_environmentalcontrol'), validateData.environmentalControlValidate, EnvironmentalControlController.update);
  route.delete("/environmental-controls/:id", hasPermission('delete_environmentalcontrol'), EnvironmentalControlController.delete);

// PowerGenerationCapacity routes with validation
  route.get("/power-generation-capacities", hasPermission('view_powergenerationcapacity'), PowerGenerationCapacityController.getAll);
  route.get("/power-generation-capacities/:id", hasPermission('view_powergenerationcapacity'), PowerGenerationCapacityController.get);
  route.post("/power-generation-capacities", hasPermission('create_powergenerationcapacity'), validateData.powerGenerationCapacityValidate, PowerGenerationCapacityController.save);
  route.put("/power-generation-capacities/:id", hasPermission('update_powergenerationcapacity'), validateData.powerGenerationCapacityValidate, PowerGenerationCapacityController.update);
  route.delete("/power-generation-capacities/:id", hasPermission('delete_powergenerationcapacity'), PowerGenerationCapacityController.delete);


// HydrologicalInformation routes with validation
  route.get("/hydrological-informations", hasPermission('view_hydrologicalinformation'), HydrologicalInformationController.getAll);
  route.get("/hydrological-informations/:id", hasPermission('view_hydrologicalinformation'), HydrologicalInformationController.get);
  route.post("/hydrological-informations", hasPermission('create_hydrologicalinformation'), validateData.hydrologicalInformationValidate, HydrologicalInformationController.save);
  route.put("/hydrological-informations/:id", hasPermission('update_hydrologicalinformation'), validateData.hydrologicalInformationValidate, HydrologicalInformationController.update);
  route.delete("/hydrological-informations/:id", hasPermission('delete_hydrologicalinformation'), HydrologicalInformationController.delete);

// Dam routes with validation
  route.get("/dams", hasPermission('view_dam'), DamController.getAll);
  route.get("/dams/:id", hasPermission('view_dam'), DamController.get);
  route.post("/dams", hasPermission('create_dam'), validateData.damValidate, DamController.save);
  route.put("/dams/:id", hasPermission('update_dam'), validateData.damValidate, DamController.update);
  route.delete("/dams/:id", hasPermission('delete_dam'), DamController.delete);

// Transmission routes with validation
  route.get("/transmissions", hasPermission('view_transmission'), TransmissionController.getAll);
  route.get("/transmissions/:id", hasPermission('view_transmission'), TransmissionController.get);
  route.post("/transmissions", hasPermission('create_transmission'), validateData.transmissionValidate, TransmissionController.save);
  route.put("/transmissions/:id", hasPermission('update_transmission'), validateData.transmissionValidate, TransmissionController.update);
  route.delete("/transmissions/:id", hasPermission('delete_transmission'), TransmissionController.delete);

// ReliabilityAndMaintenance routes with validation
  route.get("/reliability-and-maintenance", hasPermission('view_reliabilityandmaintenance'), ReliabilityAndMaintenanceController.getAll);
  route.get("/reliability-and-maintenance/:id", hasPermission('view_reliabilityandmaintenance'), ReliabilityAndMaintenanceController.get);
  route.post("/reliability-and-maintenance", hasPermission('create_reliabilityandmaintenance'), validateData.reliabilityAndMaintenanceValidate, ReliabilityAndMaintenanceController.save);
  route.put("/reliability-and-maintenance/:id", hasPermission('update_reliabilityandmaintenance'), validateData.reliabilityAndMaintenanceValidate, ReliabilityAndMaintenanceController.update);
  route.delete("/reliability-and-maintenance/:id", hasPermission('delete_reliabilityandmaintenance'), ReliabilityAndMaintenanceController.delete);

// EnvironmentalAndSocialImpact routes with validation
  route.get("/environmental-and-social-impacts", hasPermission('view_environmentalandsocialimpact'), EnvironmentalAndSocialImpactController.getAll);
  route.get("/environmental-and-social-impacts/:id", hasPermission('view_environmentalandsocialimpact'), EnvironmentalAndSocialImpactController.get);
  route.post("/environmental-and-social-impacts", hasPermission('create_environmentalandsocialimpact'), validateData.environmentalAndSocialImpactValidate, EnvironmentalAndSocialImpactController.save);
  route.put("/environmental-and-social-impacts/:id", hasPermission('update_environmentalandsocialimpact'), validateData.environmentalAndSocialImpactValidate, EnvironmentalAndSocialImpactController.update);
  route.delete("/environmental-and-social-impacts/:id", hasPermission('delete_environmentalandsocialimpact'), EnvironmentalAndSocialImpactController.delete);


// RegulationAndPolicy routes with validation
  route.get("/regulation-and-policies", hasPermission('view_regulationandpolicy'), RegulationAndPolicyController.getAll);
  route.get("/regulation-and-policies/:id", hasPermission('view_regulationandpolicy'), RegulationAndPolicyController.get);
  route.post("/regulation-and-policies", hasPermission('create_regulationandpolicy'), validateData.regulationAndPolicyValidate, RegulationAndPolicyController.save);
  route.put("/regulation-and-policies/:id", hasPermission('update_regulationandpolicy'), validateData.regulationAndPolicyValidate, RegulationAndPolicyController.update);
  route.delete("/regulation-and-policies/:id", hasPermission('delete_regulationandpolicy'), RegulationAndPolicyController.delete);

// WindResource routes with validation
  route.get("/wind-resources", hasPermission('view_windresource'), WindResourceController.getAll);
  route.get("/wind-resources/:id", hasPermission('view_windresource'), WindResourceController.get);
  route.post("/wind-resources", hasPermission('create_windresource'), validateData.windResourceValidate, WindResourceController.save);
  route.put("/wind-resources/:id", hasPermission('update_windresource'), validateData.windResourceValidate, WindResourceController.update);
  route.delete("/wind-resources/:id", hasPermission('delete_windresource'), WindResourceController.delete);


// WindTurbine routes with validation
  route.get("/wind-turbines", hasPermission('view_windturbine'), WindTurbineController.getAll);
  route.get("/wind-turbines/:id", hasPermission('view_windturbine'), WindTurbineController.get);
  route.post("/wind-turbines", hasPermission('create_windturbine'), validateData.windTurbineValidate, WindTurbineController.save);
  route.put("/wind-turbines/:id", hasPermission('update_windturbine'), validateData.windTurbineValidate, WindTurbineController.update);
  route.delete("/wind-turbines/:id", hasPermission('delete_windturbine'), WindTurbineController.delete);

// SolarResourceInformation routes with validation
  route.get("/solar-resource-informations", hasPermission('view_solarresourceinformation'), SolarResourceInformationController.getAll);
  route.get("/solar-resource-informations/:id", hasPermission('view_solarresourceinformation'), SolarResourceInformationController.get);
  route.post("/solar-resource-informations", hasPermission('create_solarresourceinformation'), validateData.solarResourceInformationValidate, SolarResourceInformationController.save);
  route.put("/solar-resource-informations/:id", hasPermission('update_solarresourceinformation'), validateData.solarResourceInformationValidate, SolarResourceInformationController.update);
  route.delete("/solar-resource-informations/:id", hasPermission('delete_solarresourceinformation'), SolarResourceInformationController.delete);

// SolarPanel routes with validation
  route.get("/solar-panels", hasPermission('view_solarpanel'), SolarPanelController.getAll);
  route.get("/solar-panels/:id", hasPermission('view_solarpanel'), SolarPanelController.get);
  route.post("/solar-panels", hasPermission('create_solarpanel'), validateData.solarPanelValidate, SolarPanelController.save);
  route.put("/solar-panels/:id", hasPermission('update_solarpanel'), validateData.solarPanelValidate, SolarPanelController.update);
  route.delete("/solar-panels/:id", hasPermission('delete_solarpanel'), SolarPanelController.delete);


// GeothermalPowerWell routes with validation
  route.get("/geothermal-power-wells", hasPermission('view_geothermalpowerwell'), GeothermalPowerWellController.getAll);
  route.get("/geothermal-power-wells/:id", hasPermission('view_geothermalpowerwell'), GeothermalPowerWellController.get);
  route.post("/geothermal-power-wells", hasPermission('create_geothermalpowerwell'), validateData.geothermalPowerWellValidate, GeothermalPowerWellController.save);
  route.put("/geothermal-power-wells/:id", hasPermission('update_geothermalpowerwell'), validateData.geothermalPowerWellValidate, GeothermalPowerWellController.update);
  route.delete("/geothermal-power-wells/:id", hasPermission('delete_geothermalpowerwell'), GeothermalPowerWellController.delete);

// GeothermalPowerInfrastructure routes with validation
  route.get("/geothermal-power-infrastructures", hasPermission('view_geothermalpowerinfrastructure'), GeothermalPowerInfrastructureController.getAll);
  route.get("/geothermal-power-infrastructures/:id", hasPermission('view_geothermalpowerinfrastructure'), GeothermalPowerInfrastructureController.get);
  route.post("/geothermal-power-infrastructures", hasPermission('create_geothermalpowerinfrastructure'), validateData.geothermalPowerInfrastructureValidate, GeothermalPowerInfrastructureController.save);
  route.put("/geothermal-power-infrastructures/:id", hasPermission('update_geothermalpowerinfrastructure'), validateData.geothermalPowerInfrastructureValidate, GeothermalPowerInfrastructureController.update);
  route.delete("/geothermal-power-infrastructures/:id", hasPermission('delete_geothermalpowerinfrastructure'), GeothermalPowerInfrastructureController.delete);

// TransmissionLineInformation routes with validation
  route.get("/transmission-line-informations", hasPermission('view_transmissionlineinformation'), TransmissionLineInformationController.getAll);
  route.get("/transmission-line-informations/:id", hasPermission('view_transmissionlineinformation'), TransmissionLineInformationController.get);
  route.post("/transmission-line-informations", hasPermission('create_transmissionlineinformation'), validateData.transmissionLineInformationValidate, TransmissionLineInformationController.save);
  route.put("/transmission-line-informations/:id", hasPermission('update_transmissionlineinformation'), validateData.transmissionLineInformationValidate, TransmissionLineInformationController.update);
  route.delete("/transmission-line-informations/:id", hasPermission('delete_transmissionlineinformation'), TransmissionLineInformationController.delete);

// TransmissionLineConductorAndTowerData routes with validation
  route.get("/transmission-line-conductor-and-tower-datas", hasPermission('view_transmissionlineconductorandtowerdata'), TransmissionLineConductorAndTowerDataController.getAll);
  route.get("/transmission-line-conductor-and-tower-datas/:id", hasPermission('view_transmissionlineconductorandtowerdata'), TransmissionLineConductorAndTowerDataController.get);
  route.post("/transmission-line-conductor-and-tower-datas", hasPermission('create_transmissionlineconductorandtowerdata'), validateData.transmissionLineConductorAndTowerDataValidate, TransmissionLineConductorAndTowerDataController.save);
  route.put("/transmission-line-conductor-and-tower-datas/:id", hasPermission('update_transmissionlineconductorandtowerdata'), validateData.transmissionLineConductorAndTowerDataValidate, TransmissionLineConductorAndTowerDataController.update);
  route.delete("/transmission-line-conductor-and-tower-datas/:id", hasPermission('delete_transmissionlineconductorandtowerdata'), TransmissionLineConductorAndTowerDataController.delete);


// TransmissionLineEquipmentData routes with validation
  route.get("/transmission-line-equipment-datas", hasPermission('view_transmissionlineequipmentdata'), TransmissionLineEquipmentDataController.getAll);
  route.get("/transmission-line-equipment-datas/:id", hasPermission('view_transmissionlineequipmentdata'), TransmissionLineEquipmentDataController.get);
  route.post("/transmission-line-equipment-datas", hasPermission('create_transmissionlineequipmentdata'), validateData.transmissionLineEquipmentDataValidate, TransmissionLineEquipmentDataController.save);
  route.put("/transmission-line-equipment-datas/:id", hasPermission('update_transmissionlineequipmentdata'), validateData.transmissionLineEquipmentDataValidate, TransmissionLineEquipmentDataController.update);
  route.delete("/transmission-line-equipment-datas/:id", hasPermission('delete_transmissionlineequipmentdata'), TransmissionLineEquipmentDataController.delete);

// SubstationTransformerAndSwitchGearData routes with validation
  route.get("/substation-transformer-and-switchgear-datas", hasPermission('view_substationtransformerandswitchgeardata'), SubstationTransformerAndSwitchGearDataController.getAll);
  route.get("/substation-transformer-and-switchgear-datas/:id", hasPermission('view_substationtransformerandswitchgeardata'), SubstationTransformerAndSwitchGearDataController.get);
  route.post("/substation-transformer-and-switchgear-datas", hasPermission('create_substationtransformerandswitchgeardata'), validateData.substationTransformerAndSwitchGearDataValidate, SubstationTransformerAndSwitchGearDataController.save);
  route.put("/substation-transformer-and-switchgear-datas/:id", hasPermission('update_substationtransformerandswitchgeardata'), validateData.substationTransformerAndSwitchGearDataValidate, SubstationTransformerAndSwitchGearDataController.update);
  route.delete("/substation-transformer-and-switchgear-datas/:id", hasPermission('delete_substationtransformerandswitchgeardata'), SubstationTransformerAndSwitchGearDataController.delete);

// SubstationLayoutAndCommunicationData routes with validation
  route.get("/substation-layout-and-communication-datas", hasPermission('view_substationlayoutandcommunicationdata'), SubstationLayoutAndCommunicationDataController.getAll);
  route.get("/substation-layout-and-communication-datas/:id", hasPermission('view_substationlayoutandcommunicationdata'), SubstationLayoutAndCommunicationDataController.get);
  route.post("/substation-layout-and-communication-datas", hasPermission('create_substationlayoutandcommunicationdata'), validateData.substationLayoutAndCommunicationDataValidate, SubstationLayoutAndCommunicationDataController.save);
  route.put("/substation-layout-and-communication-datas/:id", hasPermission('update_substationlayoutandcommunicationdata'), validateData.substationLayoutAndCommunicationDataValidate, SubstationLayoutAndCommunicationDataController.update);
  route.delete("/substation-layout-and-communication-datas/:id", hasPermission('delete_substationlayoutandcommunicationdata'), SubstationLayoutAndCommunicationDataController.delete);

// MiniGridStation routes with validation
  route.get("/mini-grid-stations", hasPermission('view_minigridstation'), MiniGridStationController.getAll);
  route.get("/mini-grid-stations/:id", hasPermission('view_minigridstation'), MiniGridStationController.get);
  route.post("/mini-grid-stations", hasPermission('create_minigridstation'), validateData.miniGridStationValidate, MiniGridStationController.save);
  route.put("/mini-grid-stations/:id", hasPermission('update_minigridstation'), validateData.miniGridStationValidate, MiniGridStationController.update);
  route.delete("/mini-grid-stations/:id", hasPermission('delete_minigridstation'), MiniGridStationController.delete);

// MiniGridStationDistributionLine routes with validation
  route.get("/mini-grid-station-distribution-lines", hasPermission('view_minigridstationdistributionline'), MiniGridStationDistributionLineController.getAll);
  route.get("/mini-grid-station-distribution-lines/:id", hasPermission('view_minigridstationdistributionline'), MiniGridStationDistributionLineController.get);
  route.post("/mini-grid-station-distribution-lines", hasPermission('create_minigridstationdistributionline'), validateData.miniGridStationDistributionLineValidate, MiniGridStationDistributionLineController.save);
  route.put("/mini-grid-station-distribution-lines/:id", hasPermission('update_minigridstationdistributionline'), validateData.miniGridStationDistributionLineValidate, MiniGridStationDistributionLineController.update);
  route.delete("/mini-grid-station-distribution-lines/:id", hasPermission('delete_minigridstationdistributionline'), MiniGridStationDistributionLineController.delete);


// MiniGridStationConsumer routes with validation
  route.get("/mini-grid-station-consumers", hasPermission('view_minigridstationconsumer'), MiniGridStationConsumerController.getAll);
  route.get("/mini-grid-station-consumers/:id", hasPermission('view_minigridstationconsumer'), MiniGridStationConsumerController.get);
  route.post("/mini-grid-station-consumers", hasPermission('create_minigridstationconsumer'), validateData.miniGridStationConsumerValidate, MiniGridStationConsumerController.save);
  route.put("/mini-grid-station-consumers/:id", hasPermission('update_minigridstationconsumer'), validateData.miniGridStationConsumerValidate, MiniGridStationConsumerController.update);
  route.delete("/mini-grid-station-consumers/:id", hasPermission('delete_minigridstationconsumer'), MiniGridStationConsumerController.delete);

// MiniGridStationBackupPowerSource routes with validation
  route.get("/mini-grid-station-backup-power-sources", hasPermission('view_minigridstationbackuppowersource'), MiniGridStationBackupPowerSourceController.getAll);
  route.get("/mini-grid-station-backup-power-sources/:id", hasPermission('view_minigridstationbackuppowersource'), MiniGridStationBackupPowerSourceController.get);
  route.post("/mini-grid-station-backup-power-sources", hasPermission('create_minigridstationbackuppowersource'), validateData.miniGridStationBackupPowerSourceValidate, MiniGridStationBackupPowerSourceController.save);
  route.put("/mini-grid-station-backup-power-sources/:id", hasPermission('update_minigridstationbackuppowersource'), validateData.miniGridStationBackupPowerSourceValidate, MiniGridStationBackupPowerSourceController.update);
  route.delete("/mini-grid-station-backup-power-sources/:id", hasPermission('delete_minigridstationbackuppowersource'), MiniGridStationBackupPowerSourceController.delete);


// MiniGridStationDistributionLineInfrastructure routes with validation
  route.get("/mini-grid-station-distribution-line-infrastructures", hasPermission('view_minigridstationdistributionlineinfrastructure'), MiniGridStationDistributionLineInfrastructureController.getAll);
  route.get("/mini-grid-station-distribution-line-infrastructures/:id", hasPermission('view_minigridstationdistributionlineinfrastructure'), MiniGridStationDistributionLineInfrastructureController.get);
  route.post("/mini-grid-station-distribution-line-infrastructures", hasPermission('create_minigridstationdistributionlineinfrastructure'), validateData.miniGridStationDistributionLineInfrastructureValidate, MiniGridStationDistributionLineInfrastructureController.save);
  route.put("/mini-grid-station-distribution-line-infrastructures/:id", hasPermission('update_minigridstationdistributionlineinfrastructure'), validateData.miniGridStationDistributionLineInfrastructureValidate, MiniGridStationDistributionLineInfrastructureController.update);
  route.delete("/mini-grid-station-distribution-line-infrastructures/:id", hasPermission('delete_minigridstationdistributionlineinfrastructure'), MiniGridStationDistributionLineInfrastructureController.delete);

// ElectricDistributionTransformer routes with validation
  route.get("/electric-distribution-transformers", hasPermission('view_electricdistributiontransformer'), ElectricDistributionTransformerController.getAll);
  route.get("/electric-distribution-transformers/:id", hasPermission('view_electricdistributiontransformer'), ElectricDistributionTransformerController.get);
  route.post("/electric-distribution-transformers", hasPermission('create_electricdistributiontransformer'), validateData.electricDistributionTransformerValidate, ElectricDistributionTransformerController.save);
  route.put("/electric-distribution-transformers/:id", hasPermission('update_electricdistributiontransformer'), validateData.electricDistributionTransformerValidate, ElectricDistributionTransformerController.update);
  route.delete("/electric-distribution-transformers/:id", hasPermission('delete_electricdistributiontransformer'), ElectricDistributionTransformerController.delete);

// ElectricDistributionTransformerType routes with validation
  route.get("/electric-distribution-transformer-types", hasPermission('view_electricdistributiontransformertype'), ElectricDistributionTransformerTypeController.getAll);
  route.get("/electric-distribution-transformer-types/:id", hasPermission('view_electricdistributiontransformertype'), ElectricDistributionTransformerTypeController.get);
  route.post("/electric-distribution-transformer-types", hasPermission('create_electricdistributiontransformertype'), validateData.electricDistributionTransformerTypeValidate, ElectricDistributionTransformerTypeController.save);
  route.put("/electric-distribution-transformer-types/:id", hasPermission('update_electricdistributiontransformertype'), validateData.electricDistributionTransformerTypeValidate, ElectricDistributionTransformerTypeController.update);
  route.delete("/electric-distribution-transformer-types/:id", hasPermission('delete_electricdistributiontransformertype'), ElectricDistributionTransformerTypeController.delete);

// ElectricSmartMetersData routes with validation
  route.get("/electric-smart-meters-data", hasPermission('view_electricsmartmetersdata'), ElectricSmartMetersDataController.getAll);
  route.get("/electric-smart-meters-data/:id", hasPermission('view_electricsmartmetersdata'), ElectricSmartMetersDataController.get);
  route.post("/electric-smart-meters-data", hasPermission('create_electricsmartmetersdata'), validateData.electricSmartMetersDataValidate, ElectricSmartMetersDataController.save);
  route.put("/electric-smart-meters-data/:id", hasPermission('update_electricsmartmetersdata'), validateData.electricSmartMetersDataValidate, ElectricSmartMetersDataController.update);
  route.delete("/electric-smart-meters-data/:id", hasPermission('delete_electricsmartmetersdata'), ElectricSmartMetersDataController.delete);

// ElectricSmartMetersRatingsData routes with validation
  route.get("/electric-smart-meters-ratings-data", hasPermission('view_electricsmartmetersratingsdata'), ElectricSmartMetersRatingsDataController.getAll);
  route.get("/electric-smart-meters-ratings-data/:id", hasPermission('view_electricsmartmetersratingsdata'), ElectricSmartMetersRatingsDataController.get);
  route.post("/electric-smart-meters-ratings-data", hasPermission('create_electricsmartmetersratingsdata'), validateData.electricSmartMetersRatingsDataValidate, ElectricSmartMetersRatingsDataController.save);
  route.put("/electric-smart-meters-ratings-data/:id", hasPermission('update_electricsmartmetersratingsdata'), validateData.electricSmartMetersRatingsDataValidate, ElectricSmartMetersRatingsDataController.update);
  route.delete("/electric-smart-meters-ratings-data/:id", hasPermission('delete_electricsmartmetersratingsdata'), ElectricSmartMetersRatingsDataController.delete);

// ElectricSmartMetersPerformanceData routes with validation
  route.get("/electric-smart-meters-performance-data", hasPermission('view_electricsmartmetersperformancedata'), ElectricSmartMetersPerformanceDataController.getAll);
  route.get("/electric-smart-meters-performance-data/:id", hasPermission('view_electricsmartmetersperformancedata'), ElectricSmartMetersPerformanceDataController.get);
  route.post("/electric-smart-meters-performance-data", hasPermission('create_electricsmartmetersperformancedata'), validateData.electricSmartMetersPerformanceDataValidate, ElectricSmartMetersPerformanceDataController.save);
  route.put("/electric-smart-meters-performance-data/:id", hasPermission('update_electricsmartmetersperformancedata'), validateData.electricSmartMetersPerformanceDataValidate, ElectricSmartMetersPerformanceDataController.update);
  route.delete("/electric-smart-meters-performance-data/:id", hasPermission('delete_electricsmartmetersperformancedata'), ElectricSmartMetersPerformanceDataController.delete);

// ElectricSmartMetersPrivacyAndSecurityData routes with validation
  route.get("/electric-smart-meters-privacy-and-security-data", hasPermission('view_electricsmartmetersprivacyandsecuritydata'), ElectricSmartMetersPrivacyAndSecurityDataController.getAll);
  route.get("/electric-smart-meters-privacy-and-security-data/:id", hasPermission('view_electricsmartmetersprivacyandsecuritydata'), ElectricSmartMetersPrivacyAndSecurityDataController.get);
  route.post("/electric-smart-meters-privacy-and-security-data", hasPermission('create_electricsmartmetersprivacyandsecuritydata'), validateData.electricSmartMetersPrivacyAndSecurityDataValidate, ElectricSmartMetersPrivacyAndSecurityDataController.save);
  route.put("/electric-smart-meters-privacy-and-security-data/:id", hasPermission('update_electricsmartmetersprivacyandsecuritydata'), validateData.electricSmartMetersPrivacyAndSecurityDataValidate, ElectricSmartMetersPrivacyAndSecurityDataController.update);
  route.delete("/electric-smart-meters-privacy-and-security-data/:id", hasPermission('delete_electricsmartmetersprivacyandsecuritydata'), ElectricSmartMetersPrivacyAndSecurityDataController.delete);

// ElectricGridControlCenterData routes with validation
  route.get("/electric-grid-control-center-data", hasPermission('view_electricgridcontrolcenterdata'), ElectricGridControlCenterDataController.getAll);
  route.get("/electric-grid-control-center-data/:id", hasPermission('view_electricgridcontrolcenterdata'), ElectricGridControlCenterDataController.get);
  route.post("/electric-grid-control-center-data", hasPermission('create_electricgridcontrolcenterdata'), validateData.electricGridControlCenterDataValidate, ElectricGridControlCenterDataController.save);
  route.put("/electric-grid-control-center-data/:id", hasPermission('update_electricgridcontrolcenterdata'), validateData.electricGridControlCenterDataValidate, ElectricGridControlCenterDataController.update);
  route.delete("/electric-grid-control-center-data/:id", hasPermission('delete_electricgridcontrolcenterdata'), ElectricGridControlCenterDataController.delete);

// ElectricGridControlCenterPerformanceAndMaintenance routes with validation
  route.get("/electric-grid-control-center-performance-and-maintenance", hasPermission('view_electricgridcontrolcenterperformanceandmaintenance'), ElectricGridControlCenterPerformanceAndMaintenanceController.getAll);
  route.get("/electric-grid-control-center-performance-and-maintenance/:id", hasPermission('view_electricgridcontrolcenterperformanceandmaintenance'), ElectricGridControlCenterPerformanceAndMaintenanceController.get);
  route.post("/electric-grid-control-center-performance-and-maintenance", hasPermission('create_electricgridcontrolcenterperformanceandmaintenance'), validateData.electricGridControlCenterPerformanceAndMaintenanceValidate, ElectricGridControlCenterPerformanceAndMaintenanceController.save);
  route.put("/electric-grid-control-center-performance-and-maintenance/:id", hasPermission('update_electricgridcontrolcenterperformanceandmaintenance'), validateData.electricGridControlCenterPerformanceAndMaintenanceValidate, ElectricGridControlCenterPerformanceAndMaintenanceController.update);
  route.delete("/electric-grid-control-center-performance-and-maintenance/:id", hasPermission('delete_electricgridcontrolcenterperformanceandmaintenance'), ElectricGridControlCenterPerformanceAndMaintenanceController.delete);

// ElectricGridControlCenterCyberSecurityData routes with validation
  route.get("/electric-grid-control-center-cyber-security-data", hasPermission('view_electricgridcontrolcentercybersecuritydata'), ElectricGridControlCenterCyberSecurityDataController.getAll);
  route.get("/electric-grid-control-center-cyber-security-data/:id", hasPermission('view_electricgridcontrolcentercybersecuritydata'), ElectricGridControlCenterCyberSecurityDataController.get);
  route.post("/electric-grid-control-center-cyber-security-data", hasPermission('create_electricgridcontrolcentercybersecuritydata'), validateData.electricGridControlCenterCyberSecurityDataValidate, ElectricGridControlCenterCyberSecurityDataController.save);
  route.put("/electric-grid-control-center-cyber-security-data/:id", hasPermission('update_electricgridcontrolcentercybersecuritydata'), validateData.electricGridControlCenterCyberSecurityDataValidate, ElectricGridControlCenterCyberSecurityDataController.update);
  route.delete("/electric-grid-control-center-cyber-security-data/:id", hasPermission('delete_electricgridcontrolcentercybersecuritydata'), ElectricGridControlCenterCyberSecurityDataController.delete);

// GeneralAirportInformation routes with validation
  route.get("/general-airport-informations", hasPermission('view_generalairportinformation'), GeneralAirportInformationController.getAll);
  route.get("/general-airport-informations/:id", hasPermission('view_generalairportinformation'), GeneralAirportInformationController.get);
  route.post("/general-airport-informations", hasPermission('create_generalairportinformation'), validateData.generalAirportInformationValidate, GeneralAirportInformationController.save);
  route.put("/general-airport-informations/:id", hasPermission('update_generalairportinformation'), validateData.generalAirportInformationValidate, GeneralAirportInformationController.update);
  route.delete("/general-airport-informations/:id", hasPermission('delete_generalairportinformation'), GeneralAirportInformationController.delete);

// RunwayAndApproachData routes with validation
  route.get("/runway-and-approach-datas", hasPermission('view_runwayandapproachdata'), RunwayAndApproachDataController.getAll);
  route.get("/runway-and-approach-datas/:id", hasPermission('view_runwayandapproachdata'), RunwayAndApproachDataController.get);
  route.post("/runway-and-approach-datas", hasPermission('create_runwayandapproachdata'), validateData.runwayAndApproachDataValidate, RunwayAndApproachDataController.save);
  route.put("/runway-and-approach-datas/:id", hasPermission('update_runwayandapproachdata'), validateData.runwayAndApproachDataValidate, RunwayAndApproachDataController.update);
  route.delete("/runway-and-approach-datas/:id", hasPermission('delete_runwayandapproachdata'), RunwayAndApproachDataController.delete);

// TerminalAndFacilityData routes with validation
  route.get("/terminal-and-facility-datas", hasPermission('view_terminalandfacilitydata'), TerminalAndFacilityDataController.getAll);
  route.get("/terminal-and-facility-datas/:id", hasPermission('view_terminalandfacilitydata'), TerminalAndFacilityDataController.get);
  route.post("/terminal-and-facility-datas", hasPermission('create_terminalandfacilitydata'), validateData.terminalAndFacilityDataValidate, TerminalAndFacilityDataController.save);
  route.put("/terminal-and-facility-datas/:id", hasPermission('update_terminalandfacilitydata'), validateData.terminalAndFacilityDataValidate, TerminalAndFacilityDataController.update);
  route.delete("/terminal-and-facility-datas/:id", hasPermission('delete_terminalandfacilitydata'), TerminalAndFacilityDataController.delete);

//water dam type
// GeneralDamInformation routes with validation
  route.get("/general-dam-informations", hasPermission('view_generaldaminformation'), GeneralDamInformationController.getAll);
  route.get("/general-dam-informations/:id", hasPermission('view_generaldaminformation'), GeneralDamInformationController.get);
  route.post("/general-dam-informations", hasPermission('create_generaldaminformation'), validateData.generalDamInformationValidate, GeneralDamInformationController.save);
  route.put("/general-dam-informations/:id", hasPermission('update_generaldaminformation'), validateData.generalDamInformationValidate, GeneralDamInformationController.update);
  route.delete("/general-dam-informations/:id", hasPermission('delete_generaldaminformation'), GeneralDamInformationController.delete);

// RailwayTrackData routes with validation
  route.get("/railway-track-data", hasPermission('view_railwaytrackdata'), RailwayTrackDataController.getAll);
  route.get("/railway-track-data/:id", hasPermission('view_railwaytrackdata'), RailwayTrackDataController.get);
  route.post("/railway-track-data", hasPermission('create_railwaytrackdata'), validateData.railwayTrackDataValidate, RailwayTrackDataController.save);
  route.put("/railway-track-data/:id", hasPermission('update_railwaytrackdata'), validateData.railwayTrackDataValidate, RailwayTrackDataController.update);
  route.delete("/railway-track-data/:id", hasPermission('delete_railwaytrackdata'), RailwayTrackDataController.delete);

// RailwayTrackGeometryData routes with validation
  route.get("/railway-track-geometry-data", hasPermission('view_railwaytrackgeometrydata'), RailwayTrackGeometryDataController.getAll);
  route.get("/railway-track-geometry-data/:id", hasPermission('view_railwaytrackgeometrydata'), RailwayTrackGeometryDataController.get);
  route.post("/railway-track-geometry-data", hasPermission('create_railwaytrackgeometrydata'), validateData.railwayTrackGeometryDataValidate, RailwayTrackGeometryDataController.save);
  route.put("/railway-track-geometry-data/:id", hasPermission('update_railwaytrackgeometrydata'), validateData.railwayTrackGeometryDataValidate, RailwayTrackGeometryDataController.update);
  route.delete("/railway-track-geometry-data/:id", hasPermission('delete_railwaytrackgeometrydata'), RailwayTrackGeometryDataController.delete);

// RailwayTrackConditionAssessment routes with validation
  route.get("/railway-track-condition-assessments", hasPermission('view_railwaytrackconditionassessment'), RailwayTrackConditionAssessmentController.getAll);
  route.get("/railway-track-condition-assessments/:id", hasPermission('view_railwaytrackconditionassessment'), RailwayTrackConditionAssessmentController.get);
  route.post("/railway-track-condition-assessments", hasPermission('create_railwaytrackconditionassessment'), validateData.railwayTrackConditionAssessmentValidate, RailwayTrackConditionAssessmentController.save);
  route.put("/railway-track-condition-assessments/:id", hasPermission('update_railwaytrackconditionassessment'), validateData.railwayTrackConditionAssessmentValidate, RailwayTrackConditionAssessmentController.update);
  route.delete("/railway-track-condition-assessments/:id", hasPermission('delete_railwaytrackconditionassessment'), RailwayTrackConditionAssessmentController.delete);

// RailwayTrackMaintenanceAndInspection routes with validation
  route.get("/railway-track-maintenance-and-inspections", hasPermission('view_railwaytrackmaintenanceandinspection'), RailwayTrackMaintenanceAndInspectionController.getAll);
  route.get("/railway-track-maintenance-and-inspections/:id", hasPermission('view_railwaytrackmaintenanceandinspection'), RailwayTrackMaintenanceAndInspectionController.get);
  route.post("/railway-track-maintenance-and-inspections", hasPermission('create_railwaytrackmaintenanceandinspection'), validateData.railwayTrackMaintenanceAndInspectionValidate, RailwayTrackMaintenanceAndInspectionController.save);
  route.put("/railway-track-maintenance-and-inspections/:id", hasPermission('update_railwaytrackmaintenanceandinspection'), validateData.railwayTrackMaintenanceAndInspectionValidate, RailwayTrackMaintenanceAndInspectionController.update);
  route.delete("/railway-track-maintenance-and-inspections/:id", hasPermission('delete_railwaytrackmaintenanceandinspection'), RailwayTrackMaintenanceAndInspectionController.delete);


// RailwayTrackRehabilitationOrRenewal routes with validation
  route.get("/railway-track-rehabilitation-or-renewals", hasPermission('view_railwaytrackrehabilitationorrenewal'), RailwayTrackRehabilitationOrRenewalController.getAll);
  route.get("/railway-track-rehabilitation-or-renewals/:id", hasPermission('view_railwaytrackrehabilitationorrenewal'), RailwayTrackRehabilitationOrRenewalController.get);
  route.post("/railway-track-rehabilitation-or-renewals", hasPermission('create_railwaytrackrehabilitationorrenewal'), validateData.railwayTrackRehabilitationOrRenewalValidate, RailwayTrackRehabilitationOrRenewalController.save);
  route.put("/railway-track-rehabilitation-or-renewals/:id", hasPermission('update_railwaytrackrehabilitationorrenewal'), validateData.railwayTrackRehabilitationOrRenewalValidate, RailwayTrackRehabilitationOrRenewalController.update);
  route.delete("/railway-track-rehabilitation-or-renewals/:id", hasPermission('delete_railwaytrackrehabilitationorrenewal'), RailwayTrackRehabilitationOrRenewalController.delete);
// RailwayTrackSafety routes with validation
  route.get("/railway-track-safeties", hasPermission('view_railwaytracksafety'), RailwayTrackSafetyController.getAll);
  route.get("/railway-track-safeties/:id", hasPermission('view_railwaytracksafety'), RailwayTrackSafetyController.get);
  route.post("/railway-track-safeties", hasPermission('create_railwaytracksafety'), validateData.railwayTrackSafetyValidate, RailwayTrackSafetyController.save);
  route.put("/railway-track-safeties/:id", hasPermission('update_railwaytracksafety'), validateData.railwayTrackSafetyValidate, RailwayTrackSafetyController.update);
  route.delete("/railway-track-safeties/:id", hasPermission('delete_railwaytracksafety'), RailwayTrackSafetyController.delete);

// RailwayBallast routes with validation
  route.get("/railway-ballasts", hasPermission('view_railwayballast'), RailwayBallastController.getAll);
  route.get("/railway-ballasts/:id", hasPermission('view_railwayballast'), RailwayBallastController.get);
  route.post("/railway-ballasts", hasPermission('create_railwayballast'), validateData.railwayBallastValidate, RailwayBallastController.save);
  route.put("/railway-ballasts/:id", hasPermission('update_railwayballast'), validateData.railwayBallastValidate, RailwayBallastController.update);
  route.delete("/railway-ballasts/:id", hasPermission('delete_railwayballast'), RailwayBallastController.delete);

// RailwayBallastMaterialData routes with validation
  route.get("/railway-ballast-material-data", hasPermission('view_railwayballastmaterialdata'), RailwayBallastMaterialDataController.getAll);
  route.get("/railway-ballast-material-data/:id", hasPermission('view_railwayballastmaterialdata'), RailwayBallastMaterialDataController.get);
  route.post("/railway-ballast-material-data", hasPermission('create_railwayballastmaterialdata'), validateData.railwayBallastMaterialDataValidate, RailwayBallastMaterialDataController.save);
  route.put("/railway-ballast-material-data/:id", hasPermission('update_railwayballastmaterialdata'), validateData.railwayBallastMaterialDataValidate, RailwayBallastMaterialDataController.update);
  route.delete("/railway-ballast-material-data/:id", hasPermission('delete_railwayballastmaterialdata'), RailwayBallastMaterialDataController.delete);

// RailwayBallastMaterialSpecification routes with validation
  route.get("/railway-ballast-material-specifications", hasPermission('view_railwayballastmaterialspecification'), RailwayBallastMaterialSpecificationController.getAll);
  route.get("/railway-ballast-material-specifications/:id", hasPermission('view_railwayballastmaterialspecification'), RailwayBallastMaterialSpecificationController.get);
  route.post("/railway-ballast-material-specifications", hasPermission('create_railwayballastmaterialspecification'), validateData.railwayBallastMaterialSpecificationValidate, RailwayBallastMaterialSpecificationController.save);
  route.put("/railway-ballast-material-specifications/:id", hasPermission('update_railwayballastmaterialspecification'), validateData.railwayBallastMaterialSpecificationValidate, RailwayBallastMaterialSpecificationController.update);
  route.delete("/railway-ballast-material-specifications/:id", hasPermission('delete_railwayballastmaterialspecification'), RailwayBallastMaterialSpecificationController.delete);

// RailwayBallastConditionAssessment routes with validation
  route.get("/railway-ballast-condition-assessments", hasPermission('view_railwayballastconditionassessment'), RailwayBallastConditionAssessmentController.getAll);
  route.get("/railway-ballast-condition-assessments/:id", hasPermission('view_railwayballastconditionassessment'), RailwayBallastConditionAssessmentController.get);
  route.post("/railway-ballast-condition-assessments", hasPermission('create_railwayballastconditionassessment'), validateData.railwayBallastConditionAssessmentValidate, RailwayBallastConditionAssessmentController.save);
  route.put("/railway-ballast-condition-assessments/:id", hasPermission('update_railwayballastconditionassessment'), validateData.railwayBallastConditionAssessmentValidate, RailwayBallastConditionAssessmentController.update);
  route.delete("/railway-ballast-condition-assessments/:id", hasPermission('delete_railwayballastconditionassessment'), RailwayBallastConditionAssessmentController.delete);

// RailwayBallastMaintenanceAndRenewal routes with validation
  route.get("/railway-ballast-maintenance-and-renewals", hasPermission('view_railwayballastmaintenanceandrenewal'), RailwayBallastMaintenanceAndRenewalController.getAll);
  route.get("/railway-ballast-maintenance-and-renewals/:id", hasPermission('view_railwayballastmaintenanceandrenewal'), RailwayBallastMaintenanceAndRenewalController.get);
  route.post("/railway-ballast-maintenance-and-renewals", hasPermission('create_railwayballastmaintenanceandrenewal'), validateData.railwayBallastMaintenanceAndRenewalValidate, RailwayBallastMaintenanceAndRenewalController.save);
  route.put("/railway-ballast-maintenance-and-renewals/:id", hasPermission('update_railwayballastmaintenanceandrenewal'), validateData.railwayBallastMaintenanceAndRenewalValidate, RailwayBallastMaintenanceAndRenewalController.update);
  route.delete("/railway-ballast-maintenance-and-renewals/:id", hasPermission('delete_railwayballastmaintenanceandrenewal'), RailwayBallastMaintenanceAndRenewalController.delete);

// RailwayBallastDrainageAndWaterManagement routes with validation
  route.get("/railway-ballast-drainage-and-water-managements", hasPermission('view_railwayballastdrainageandwatermanagement'), RailwayBallastDrainageAndWaterManagementController.getAll);
  route.get("/railway-ballast-drainage-and-water-managements/:id", hasPermission('view_railwayballastdrainageandwatermanagement'), RailwayBallastDrainageAndWaterManagementController.get);
  route.post("/railway-ballast-drainage-and-water-managements", hasPermission('create_railwayballastdrainageandwatermanagement'), validateData.railwayBallastDrainageAndWaterManagementValidate, RailwayBallastDrainageAndWaterManagementController.save);
  route.put("/railway-ballast-drainage-and-water-managements/:id", hasPermission('update_railwayballastdrainageandwatermanagement'), validateData.railwayBallastDrainageAndWaterManagementValidate, RailwayBallastDrainageAndWaterManagementController.update);
  route.delete("/railway-ballast-drainage-and-water-managements/:id", hasPermission('delete_railwayballastdrainageandwatermanagement'), RailwayBallastDrainageAndWaterManagementController.delete);


// RailwayBallastEnvironmentalAndOtherFactor routes with validation
  route.get("/railway-ballast-environmental-and-other-factors", hasPermission('view_railwayballastenvironmentalandotherfactor'), RailwayBallastEnvironmentalAndOtherFactorController.getAll);
  route.get("/railway-ballast-environmental-and-other-factors/:id", hasPermission('view_railwayballastenvironmentalandotherfactor'), RailwayBallastEnvironmentalAndOtherFactorController.get);
  route.post("/railway-ballast-environmental-and-other-factors", hasPermission('create_railwayballastenvironmentalandotherfactor'), validateData.railwayBallastEnvironmentalAndOtherFactorValidate, RailwayBallastEnvironmentalAndOtherFactorController.save);
  route.put("/railway-ballast-environmental-and-other-factors/:id", hasPermission('update_railwayballastenvironmentalandotherfactor'), validateData.railwayBallastEnvironmentalAndOtherFactorValidate, RailwayBallastEnvironmentalAndOtherFactorController.update);
  route.delete("/railway-ballast-environmental-and-other-factors/:id", hasPermission('delete_railwayballastenvironmentalandotherfactor'), RailwayBallastEnvironmentalAndOtherFactorController.delete);

// RailwaySubBallastMaterial routes with validation
  route.get("/railway-sub-ballast-materials", hasPermission('view_railwaysubballastmaterial'), RailwaySubBallastMaterialController.getAll);
  route.get("/railway-sub-ballast-materials/:id", hasPermission('view_railwaysubballastmaterial'), RailwaySubBallastMaterialController.get);
  route.post("/railway-sub-ballast-materials", hasPermission('create_railwaysubballastmaterial'), validateData.railwaySubBallastMaterialValidate, RailwaySubBallastMaterialController.save);
  route.put("/railway-sub-ballast-materials/:id", hasPermission('update_railwaysubballastmaterial'), validateData.railwaySubBallastMaterialValidate, RailwaySubBallastMaterialController.update);
  route.delete("/railway-sub-ballast-materials/:id", hasPermission('delete_railwaysubballastmaterial'), RailwaySubBallastMaterialController.delete);

// RailwaySubBallastMaterialTest routes with validation
  route.get("/railway-sub-ballast-material-tests", hasPermission('view_railwaysubballastmaterialtest'), RailwaySubBallastMaterialTestController.getAll);
  route.get("/railway-sub-ballast-material-tests/:id", hasPermission('view_railwaysubballastmaterialtest'), RailwaySubBallastMaterialTestController.get);
  route.post("/railway-sub-ballast-material-tests", hasPermission('create_railwaysubballastmaterialtest'), validateData.railwaySubBallastMaterialTestValidate, RailwaySubBallastMaterialTestController.save);
  route.put("/railway-sub-ballast-material-tests/:id", hasPermission('update_railwaysubballastmaterialtest'), validateData.railwaySubBallastMaterialTestValidate, RailwaySubBallastMaterialTestController.update);
  route.delete("/railway-sub-ballast-material-tests/:id", hasPermission('delete_railwaysubballastmaterialtest'), RailwaySubBallastMaterialTestController.delete);

// RailwaySubBallastConditionAssessment routes with validation
  route.get("/railway-sub-ballast-condition-assessments", hasPermission('view_railwaysubballastconditionassessment'), RailwaySubBallastConditionAssessmentController.getAll);
  route.get("/railway-sub-ballast-condition-assessments/:id", hasPermission('view_railwaysubballastconditionassessment'), RailwaySubBallastConditionAssessmentController.get);
  route.post("/railway-sub-ballast-condition-assessments", hasPermission('create_railwaysubballastconditionassessment'), validateData.railwaySubBallastConditionAssessmentValidate, RailwaySubBallastConditionAssessmentController.save);
  route.put("/railway-sub-ballast-condition-assessments/:id", hasPermission('update_railwaysubballastconditionassessment'), validateData.railwaySubBallastConditionAssessmentValidate, RailwaySubBallastConditionAssessmentController.update);
  route.delete("/railway-sub-ballast-condition-assessments/:id", hasPermission('delete_railwaysubballastconditionassessment'), RailwaySubBallastConditionAssessmentController.delete);

// RailwaySubBallastMaintenanceAndRenewal routes with validation
  route.get("/railway-sub-ballast-maintenance-and-renewals", hasPermission('view_railwaysubballastmaintenanceandrenewal'), RailwaySubBallastMaintenanceAndRenewalController.getAll);
  route.get("/railway-sub-ballast-maintenance-and-renewals/:id", hasPermission('view_railwaysubballastmaintenanceandrenewal'), RailwaySubBallastMaintenanceAndRenewalController.get);
  route.post("/railway-sub-ballast-maintenance-and-renewals", hasPermission('create_railwaysubballastmaintenanceandrenewal'), validateData.railwaySubBallastMaintenanceAndRenewalValidate, RailwaySubBallastMaintenanceAndRenewalController.save);
  route.put("/railway-sub-ballast-maintenance-and-renewals/:id", hasPermission('update_railwaysubballastmaintenanceandrenewal'), validateData.railwaySubBallastMaintenanceAndRenewalValidate, RailwaySubBallastMaintenanceAndRenewalController.update);
  route.delete("/railway-sub-ballast-maintenance-and-renewals/:id", hasPermission('delete_railwaysubballastmaintenanceandrenewal'), RailwaySubBallastMaintenanceAndRenewalController.delete);

// RailwaySubBallastDrainageAndWaterManagement routes with validation
  route.get("/railway-sub-ballast-drainage-and-water-managements", hasPermission('view_railwaysubballastdrainageandwatermanagement'), RailwaySubBallastDrainageAndWaterManagementController.getAll);
  route.get("/railway-sub-ballast-drainage-and-water-managements/:id", hasPermission('view_railwaysubballastdrainageandwatermanagement'), RailwaySubBallastDrainageAndWaterManagementController.get);
  route.post("/railway-sub-ballast-drainage-and-water-managements", hasPermission('create_railwaysubballastdrainageandwatermanagement'), validateData.railwaySubBallastDrainageAndWaterManagementValidate, RailwaySubBallastDrainageAndWaterManagementController.save);
  route.put("/railway-sub-ballast-drainage-and-water-managements/:id", hasPermission('update_railwaysubballastdrainageandwatermanagement'), validateData.railwaySubBallastDrainageAndWaterManagementValidate, RailwaySubBallastDrainageAndWaterManagementController.update);
  route.delete("/railway-sub-ballast-drainage-and-water-managements/:id", hasPermission('delete_railwaysubballastdrainageandwatermanagement'), RailwaySubBallastDrainageAndWaterManagementController.delete);


// RailwaySubBallastEnvironmentalAndOtherFactor routes with validation
  route.get("/railway-sub-ballast-environmental-and-other-factors", hasPermission('view_railwaysubballastenvironmentalandotherfactor'), RailwaySubBallastEnvironmentalAndOtherFactorController.getAll);
  route.get("/railway-sub-ballast-environmental-and-other-factors/:id", hasPermission('view_railwaysubballastenvironmentalandotherfactor'), RailwaySubBallastEnvironmentalAndOtherFactorController.get);
  route.post("/railway-sub-ballast-environmental-and-other-factors", hasPermission('create_railwaysubballastenvironmentalandotherfactor'), validateData.railwaySubBallastEnvironmentalAndOtherFactorValidate, RailwaySubBallastEnvironmentalAndOtherFactorController.save);
  route.put("/railway-sub-ballast-environmental-and-other-factors/:id", hasPermission('update_railwaysubballastenvironmentalandotherfactor'), validateData.railwaySubBallastEnvironmentalAndOtherFactorValidate, RailwaySubBallastEnvironmentalAndOtherFactorController.update);
  route.delete("/railway-sub-ballast-environmental-and-other-factors/:id", hasPermission('delete_railwaysubballastenvironmentalandotherfactor'), RailwaySubBallastEnvironmentalAndOtherFactorController.delete);

// RailwaySleeperCharacteristic routes with validation
  route.get("/railway-sleeper-characteristics", hasPermission('view_railwaysleepercharacteristic'), RailwaySleeperCharacteristicController.getAll);
  route.get("/railway-sleeper-characteristics/:id", hasPermission('view_railwaysleepercharacteristic'), RailwaySleeperCharacteristicController.get);
  route.post("/railway-sleeper-characteristics", hasPermission('create_railwaysleepercharacteristic'), validateData.railwaySleeperCharacteristicValidate, RailwaySleeperCharacteristicController.save);
  route.put("/railway-sleeper-characteristics/:id", hasPermission('update_railwaysleepercharacteristic'), validateData.railwaySleeperCharacteristicValidate, RailwaySleeperCharacteristicController.update);
  route.delete("/railway-sleeper-characteristics/:id", hasPermission('delete_railwaysleepercharacteristic'), RailwaySleeperCharacteristicController.delete);

// RailwaySleeperConditionAssessment routes with validation
  route.get("/railway-sleeper-condition-assessments", hasPermission('view_railwaysleeperconditionassessment'), RailwaySleeperConditionAssessmentController.getAll);
  route.get("/railway-sleeper-condition-assessments/:id", hasPermission('view_railwaysleeperconditionassessment'), RailwaySleeperConditionAssessmentController.get);
  route.post("/railway-sleeper-condition-assessments", hasPermission('create_railwaysleeperconditionassessment'), validateData.railwaySleeperConditionAssessmentValidate, RailwaySleeperConditionAssessmentController.save);
  route.put("/railway-sleeper-condition-assessments/:id", hasPermission('update_railwaysleeperconditionassessment'), validateData.railwaySleeperConditionAssessmentValidate, RailwaySleeperConditionAssessmentController.update);
  route.delete("/railway-sleeper-condition-assessments/:id", hasPermission('delete_railwaysleeperconditionassessment'), RailwaySleeperConditionAssessmentController.delete);

// RailwaySleeperMaintenanceAndReplacement routes with validation
  route.get("/railway-sleeper-maintenance-and-replacements", hasPermission('view_railwaysleepermaintenanceandreplacement'), RailwaySleeperMaintenanceAndReplacementController.getAll);
  route.get("/railway-sleeper-maintenance-and-replacements/:id", hasPermission('view_railwaysleepermaintenanceandreplacement'), RailwaySleeperMaintenanceAndReplacementController.get);
  route.post("/railway-sleeper-maintenance-and-replacements", hasPermission('create_railwaysleepermaintenanceandreplacement'), validateData.railwaySleeperMaintenanceAndReplacementValidate, RailwaySleeperMaintenanceAndReplacementController.save);
  route.put("/railway-sleeper-maintenance-and-replacements/:id", hasPermission('update_railwaysleepermaintenanceandreplacement'), validateData.railwaySleeperMaintenanceAndReplacementValidate, RailwaySleeperMaintenanceAndReplacementController.update);
  route.delete("/railway-sleeper-maintenance-and-replacements/:id", hasPermission('delete_railwaysleepermaintenanceandreplacement'), RailwaySleeperMaintenanceAndReplacementController.delete);

// RailwaySleeperFasteningSystem routes with validation
  route.get("/railway-sleeper-fastening-systems", hasPermission('view_railwaysleeperfasteningsystem'), RailwaySleeperFasteningSystemController.getAll);
  route.get("/railway-sleeper-fastening-systems/:id", hasPermission('view_railwaysleeperfasteningsystem'), RailwaySleeperFasteningSystemController.get);
  route.post("/railway-sleeper-fastening-systems", hasPermission('create_railwaysleeperfasteningsystem'), validateData.railwaySleeperFasteningSystemValidate, RailwaySleeperFasteningSystemController.save);
  route.put("/railway-sleeper-fastening-systems/:id", hasPermission('update_railwaysleeperfasteningsystem'), validateData.railwaySleeperFasteningSystemValidate, RailwaySleeperFasteningSystemController.update);
  route.delete("/railway-sleeper-fastening-systems/:id", hasPermission('delete_railwaysleeperfasteningsystem'), RailwaySleeperFasteningSystemController.delete);

// RailwaySleeperEnvironmentalAndOtherFactor routes with validation
  route.get("/railway-sleeper-environmental-and-other-factors", hasPermission('view_railwaysleeperenvironmentalandotherfactor'), RailwaySleeperEnvironmentalAndOtherFactorController.getAll);
  route.get("/railway-sleeper-environmental-and-other-factors/:id", hasPermission('view_railwaysleeperenvironmentalandotherfactor'), RailwaySleeperEnvironmentalAndOtherFactorController.get);
  route.post("/railway-sleeper-environmental-and-other-factors", hasPermission('create_railwaysleeperenvironmentalandotherfactor'), validateData.railwaySleeperEnvironmentalAndOtherFactorValidate, RailwaySleeperEnvironmentalAndOtherFactorController.save);
  route.put("/railway-sleeper-environmental-and-other-factors/:id", hasPermission('update_railwaysleeperenvironmentalandotherfactor'), validateData.railwaySleeperEnvironmentalAndOtherFactorValidate, RailwaySleeperEnvironmentalAndOtherFactorController.update);
  route.delete("/railway-sleeper-environmental-and-other-factors/:id", hasPermission('delete_railwaysleeperenvironmentalandotherfactor'), RailwaySleeperEnvironmentalAndOtherFactorController.delete);

// RailwayFasteningSystemCharacteristic routes with validation
  route.get("/railway-fastening-system-characteristics", hasPermission('view_railwayfasteningsystemcharacteristic'), RailwayFasteningSystemCharacteristicController.getAll);
  route.get("/railway-fastening-system-characteristics/:id", hasPermission('view_railwayfasteningsystemcharacteristic'), RailwayFasteningSystemCharacteristicController.get);
  route.post("/railway-fastening-system-characteristics", hasPermission('create_railwayfasteningsystemcharacteristic'), validateData.railwayFasteningSystemCharacteristicValidate, RailwayFasteningSystemCharacteristicController.save);
  route.put("/railway-fastening-system-characteristics/:id", hasPermission('update_railwayfasteningsystemcharacteristic'), validateData.railwayFasteningSystemCharacteristicValidate, RailwayFasteningSystemCharacteristicController.update);
  route.delete("/railway-fastening-system-characteristics/:id", hasPermission('delete_railwayfasteningsystemcharacteristic'), RailwayFasteningSystemCharacteristicController.delete);

// RailwayFasteningSystemConditionAssessment routes with validation
  route.get("/railway-fastening-system-condition-assessments", hasPermission('view_railwayfasteningsystemconditionassessment'), RailwayFasteningSystemConditionAssessmentController.getAll);
  route.get("/railway-fastening-system-condition-assessments/:id", hasPermission('view_railwayfasteningsystemconditionassessment'), RailwayFasteningSystemConditionAssessmentController.get);
  route.post("/railway-fastening-system-condition-assessments", hasPermission('create_railwayfasteningsystemconditionassessment'), validateData.railwayFasteningSystemConditionAssessmentValidate, RailwayFasteningSystemConditionAssessmentController.save);
  route.put("/railway-fastening-system-condition-assessments/:id", hasPermission('update_railwayfasteningsystemconditionassessment'), validateData.railwayFasteningSystemConditionAssessmentValidate, RailwayFasteningSystemConditionAssessmentController.update);
  route.delete("/railway-fastening-system-condition-assessments/:id", hasPermission('delete_railwayfasteningsystemconditionassessment'), RailwayFasteningSystemConditionAssessmentController.delete);


// RailwayFasteningSystemMaintenanceAndReplacement routes with validation
  route.get("/railway-fastening-system-maintenance-and-replacements", hasPermission('view_railwayfasteningsystemmaintenanceandreplacement'), RailwayFasteningSystemMaintenanceAndReplacementController.getAll);
  route.get("/railway-fastening-system-maintenance-and-replacements/:id", hasPermission('view_railwayfasteningsystemmaintenanceandreplacement'), RailwayFasteningSystemMaintenanceAndReplacementController.get);
  route.post("/railway-fastening-system-maintenance-and-replacements", hasPermission('create_railwayfasteningsystemmaintenanceandreplacement'), validateData.railwayFasteningSystemMaintenanceAndReplacementValidate, RailwayFasteningSystemMaintenanceAndReplacementController.save);
  route.put("/railway-fastening-system-maintenance-and-replacements/:id", hasPermission('update_railwayfasteningsystemmaintenanceandreplacement'), validateData.railwayFasteningSystemMaintenanceAndReplacementValidate, RailwayFasteningSystemMaintenanceAndReplacementController.update);
  route.delete("/railway-fastening-system-maintenance-and-replacements/:id", hasPermission('delete_railwayfasteningsystemmaintenanceandreplacement'), RailwayFasteningSystemMaintenanceAndReplacementController.delete);

// RailwayFasteningSystemEnvironmentalFactor routes with validation
  route.get("/railway-fastening-system-environmental-factors", hasPermission('view_railwayfasteningsystemenvironmentalfactor'), RailwayFasteningSystemEnvironmentalFactorController.getAll);
  route.get("/railway-fastening-system-environmental-factors/:id", hasPermission('view_railwayfasteningsystemenvironmentalfactor'), RailwayFasteningSystemEnvironmentalFactorController.get);
  route.post("/railway-fastening-system-environmental-factors", hasPermission('create_railwayfasteningsystemenvironmentalfactor'), validateData.railwayFasteningSystemEnvironmentalFactorValidate, RailwayFasteningSystemEnvironmentalFactorController.save);
  route.put("/railway-fastening-system-environmental-factors/:id", hasPermission('update_railwayfasteningsystemenvironmentalfactor'), validateData.railwayFasteningSystemEnvironmentalFactorValidate, RailwayFasteningSystemEnvironmentalFactorController.update);
  route.delete("/railway-fastening-system-environmental-factors/:id", hasPermission('delete_railwayfasteningsystemenvironmentalfactor'), RailwayFasteningSystemEnvironmentalFactorController.delete);

// RailwaySignalingSystem routes with validation
  route.get("/railway-signaling-systems", hasPermission('view_railwaysignalingsystem'), RailwaySignalingSystemController.getAll);
  route.get("/railway-signaling-systems/:id", hasPermission('view_railwaysignalingsystem'), RailwaySignalingSystemController.get);
  route.post("/railway-signaling-systems", hasPermission('create_railwaysignalingsystem'), validateData.railwaySignalingSystemValidate, RailwaySignalingSystemController.save);
  route.put("/railway-signaling-systems/:id", hasPermission('update_railwaysignalingsystem'), validateData.railwaySignalingSystemValidate, RailwaySignalingSystemController.update);
  route.delete("/railway-signaling-systems/:id", hasPermission('delete_railwaysignalingsystem'), RailwaySignalingSystemController.delete);

// RailwayCommunicationSystem routes with validation
  route.get("/railway-communication-systems", hasPermission('view_railwaycommunicationsystem'), RailwayCommunicationSystemController.getAll);
  route.get("/railway-communication-systems/:id", hasPermission('view_railwaycommunicationsystem'), RailwayCommunicationSystemController.get);
  route.post("/railway-communication-systems", hasPermission('create_railwaycommunicationsystem'), validateData.railwayCommunicationSystemValidate, RailwayCommunicationSystemController.save);
  route.put("/railway-communication-systems/:id", hasPermission('update_railwaycommunicationsystem'), validateData.railwayCommunicationSystemValidate, RailwayCommunicationSystemController.update);
  route.delete("/railway-communication-systems/:id", hasPermission('delete_railwaycommunicationsystem'), RailwayCommunicationSystemController.delete);

// RailwaySystemConditionAssessment routes with validation
  route.get("/railway-system-condition-assessments", hasPermission('view_railwaysystemconditionassessment'), RailwaySystemConditionAssessmentController.getAll);
  route.get("/railway-system-condition-assessments/:id", hasPermission('view_railwaysystemconditionassessment'), RailwaySystemConditionAssessmentController.get);
  route.post("/railway-system-condition-assessments", hasPermission('create_railwaysystemconditionassessment'), validateData.railwaySystemConditionAssessmentValidate, RailwaySystemConditionAssessmentController.save);
  route.put("/railway-system-condition-assessments/:id", hasPermission('update_railwaysystemconditionassessment'), validateData.railwaySystemConditionAssessmentValidate, RailwaySystemConditionAssessmentController.update);
  route.delete("/railway-system-condition-assessments/:id", hasPermission('delete_railwaysystemconditionassessment'), RailwaySystemConditionAssessmentController.delete);


// RailwayCommunicationSystemMaintenanceAndTesting routes with validation
  route.get("/railway-communication-system-maintenance-and-testings", hasPermission('view_railwaycommunicationsystemmaintenanceandtesting'), RailwayCommunicationSystemMaintenanceAndTestingController.getAll);
  route.get("/railway-communication-system-maintenance-and-testings/:id", hasPermission('view_railwaycommunicationsystemmaintenanceandtesting'), RailwayCommunicationSystemMaintenanceAndTestingController.get);
  route.post("/railway-communication-system-maintenance-and-testings", hasPermission('create_railwaycommunicationsystemmaintenanceandtesting'), validateData.railwayCommunicationSystemMaintenanceAndTestingValidate, RailwayCommunicationSystemMaintenanceAndTestingController.save);
  route.put("/railway-communication-system-maintenance-and-testings/:id", hasPermission('update_railwaycommunicationsystemmaintenanceandtesting'), validateData.railwayCommunicationSystemMaintenanceAndTestingValidate, RailwayCommunicationSystemMaintenanceAndTestingController.update);
  route.delete("/railway-communication-system-maintenance-and-testings/:id", hasPermission('delete_railwaycommunicationsystemmaintenanceandtesting'), RailwayCommunicationSystemMaintenanceAndTestingController.delete);


// RailwayCommunicationSystemSafetyAndCompliance routes with validation
  route.get("/railway-communication-system-safety-and-compliances", hasPermission('view_railwaycommunicationsystemsafetyandcompliance'), RailwayCommunicationSystemSafetyAndComplianceController.getAll);
  route.get("/railway-communication-system-safety-and-compliances/:id", hasPermission('view_railwaycommunicationsystemsafetyandcompliance'), RailwayCommunicationSystemSafetyAndComplianceController.get);
  route.post("/railway-communication-system-safety-and-compliances", hasPermission('create_railwaycommunicationsystemsafetyandcompliance'), validateData.railwayCommunicationSystemSafetyAndComplianceValidate, RailwayCommunicationSystemSafetyAndComplianceController.save);
  route.put("/railway-communication-system-safety-and-compliances/:id", hasPermission('update_railwaycommunicationsystemsafetyandcompliance'), validateData.railwayCommunicationSystemSafetyAndComplianceValidate, RailwayCommunicationSystemSafetyAndComplianceController.update);
  route.delete("/railway-communication-system-safety-and-compliances/:id", hasPermission('delete_railwaycommunicationsystemsafetyandcompliance'), RailwayCommunicationSystemSafetyAndComplianceController.delete);

// RailwayEnvironmentalAndOtherFactor routes with validation
  route.get("/railway-environmental-and-other-factors", hasPermission('view_railwayenvironmentalandotherfactor'), RailwayEnvironmentalAndOtherFactorController.getAll);
  route.get("/railway-environmental-and-other-factors/:id", hasPermission('view_railwayenvironmentalandotherfactor'), RailwayEnvironmentalAndOtherFactorController.get);
  route.post("/railway-environmental-and-other-factors", hasPermission('create_railwayenvironmentalandotherfactor'), validateData.railwayEnvironmentalAndOtherFactorValidate, RailwayEnvironmentalAndOtherFactorController.save);
  route.put("/railway-environmental-and-other-factors/:id", hasPermission('update_railwayenvironmentalandotherfactor'), validateData.railwayEnvironmentalAndOtherFactorValidate, RailwayEnvironmentalAndOtherFactorController.update);
  route.delete("/railway-environmental-and-other-factors/:id", hasPermission('delete_railwayenvironmentalandotherfactor'), RailwayEnvironmentalAndOtherFactorController.delete);

// RailwayVehicleIdentification routes with validation
  route.get("/railway-vehicle-identifications", hasPermission('view_railwayvehicleidentification'), RailwayVehicleIdentificationController.getAll);
  route.get("/railway-vehicle-identifications/:id", hasPermission('view_railwayvehicleidentification'), RailwayVehicleIdentificationController.get);
  route.post("/railway-vehicle-identifications", hasPermission('create_railwayvehicleidentification'), validateData.railwayVehicleIdentificationValidate, RailwayVehicleIdentificationController.save);
  route.put("/railway-vehicle-identifications/:id", hasPermission('update_railwayvehicleidentification'), validateData.railwayVehicleIdentificationValidate, RailwayVehicleIdentificationController.update);
  route.delete("/railway-vehicle-identifications/:id", hasPermission('delete_railwayvehicleidentification'), RailwayVehicleIdentificationController.delete);

// RailwayVehicleSpecification routes with validation
  route.get("/railway-vehicle-specifications", hasPermission('view_railwayvehiclespecification'), RailwayVehicleSpecificationController.getAll);
  route.get("/railway-vehicle-specifications/:id", hasPermission('view_railwayvehiclespecification'), RailwayVehicleSpecificationController.get);
  route.post("/railway-vehicle-specifications", hasPermission('create_railwayvehiclespecification'), validateData.railwayVehicleSpecificationValidate, RailwayVehicleSpecificationController.save);
  route.put("/railway-vehicle-specifications/:id", hasPermission('update_railwayvehiclespecification'), validateData.railwayVehicleSpecificationValidate, RailwayVehicleSpecificationController.update);
  route.delete("/railway-vehicle-specifications/:id", hasPermission('delete_railwayvehiclespecification'), RailwayVehicleSpecificationController.delete);


// RailwayVehicleMaintenanceAndInspection routes with validation
  route.get("/railway-vehicle-maintenance-and-inspections", hasPermission('view_railwayvehiclemaintenanceandinspection'), RailwayVehicleMaintenanceAndInspectionController.getAll);
  route.get("/railway-vehicle-maintenance-and-inspections/:id", hasPermission('view_railwayvehiclemaintenanceandinspection'), RailwayVehicleMaintenanceAndInspectionController.get);
  route.post("/railway-vehicle-maintenance-and-inspections", hasPermission('create_railwayvehiclemaintenanceandinspection'), validateData.railwayVehicleMaintenanceAndInspectionValidate, RailwayVehicleMaintenanceAndInspectionController.save);
  route.put("/railway-vehicle-maintenance-and-inspections/:id", hasPermission('update_railwayvehiclemaintenanceandinspection'), validateData.railwayVehicleMaintenanceAndInspectionValidate, RailwayVehicleMaintenanceAndInspectionController.update);
  route.delete("/railway-vehicle-maintenance-and-inspections/:id", hasPermission('delete_railwayvehiclemaintenanceandinspection'), RailwayVehicleMaintenanceAndInspectionController.delete);

// RailwayVehicleOperationalPerformance routes with validation
  route.get("/railway-vehicle-operational-performances", hasPermission('view_railwayvehicleoperationalperformance'), RailwayVehicleOperationalPerformanceController.getAll);
  route.get("/railway-vehicle-operational-performances/:id", hasPermission('view_railwayvehicleoperationalperformance'), RailwayVehicleOperationalPerformanceController.get);
  route.post("/railway-vehicle-operational-performances", hasPermission('create_railwayvehicleoperationalperformance'), validateData.railwayVehicleOperationalPerformanceValidate, RailwayVehicleOperationalPerformanceController.save);
  route.put("/railway-vehicle-operational-performances/:id", hasPermission('update_railwayvehicleoperationalperformance'), validateData.railwayVehicleOperationalPerformanceValidate, RailwayVehicleOperationalPerformanceController.update);
  route.delete("/railway-vehicle-operational-performances/:id", hasPermission('delete_railwayvehicleoperationalperformance'), RailwayVehicleOperationalPerformanceController.delete);

// RailwayVehicleSafetyAndCompliance routes with validation
  route.get("/railway-vehicle-safety-and-compliances", hasPermission('view_railwayvehiclesafetyandcompliance'), RailwayVehicleSafetyAndComplianceController.getAll);
  route.get("/railway-vehicle-safety-and-compliances/:id", hasPermission('view_railwayvehiclesafetyandcompliance'), RailwayVehicleSafetyAndComplianceController.get);
  route.post("/railway-vehicle-safety-and-compliances", hasPermission('create_railwayvehiclesafetyandcompliance'), validateData.railwayVehicleSafetyAndComplianceValidate, RailwayVehicleSafetyAndComplianceController.save);
  route.put("/railway-vehicle-safety-and-compliances/:id", hasPermission('update_railwayvehiclesafetyandcompliance'), validateData.railwayVehicleSafetyAndComplianceValidate, RailwayVehicleSafetyAndComplianceController.update);
  route.delete("/railway-vehicle-safety-and-compliances/:id", hasPermission('delete_railwayvehiclesafetyandcompliance'), RailwayVehicleSafetyAndComplianceController.delete);

// RailwayVehicleInteriorAndPassengerAmenity routes with validation
  route.get("/railway-vehicle-interior-and-passenger-amenities", hasPermission('view_railwayvehicleinteriorandpassengeramenity'), RailwayVehicleInteriorAndPassengerAmenityController.getAll);
  route.get("/railway-vehicle-interior-and-passenger-amenities/:id", hasPermission('view_railwayvehicleinteriorandpassengeramenity'), RailwayVehicleInteriorAndPassengerAmenityController.get);
  route.post("/railway-vehicle-interior-and-passenger-amenities", hasPermission('create_railwayvehicleinteriorandpassengeramenity'), validateData.railwayVehicleInteriorAndPassengerAmenityValidate, RailwayVehicleInteriorAndPassengerAmenityController.save);
  route.put("/railway-vehicle-interior-and-passenger-amenities/:id", hasPermission('update_railwayvehicleinteriorandpassengeramenity'), validateData.railwayVehicleInteriorAndPassengerAmenityValidate, RailwayVehicleInteriorAndPassengerAmenityController.update);
  route.delete("/railway-vehicle-interior-and-passenger-amenities/:id", hasPermission('delete_railwayvehicleinteriorandpassengeramenity'), RailwayVehicleInteriorAndPassengerAmenityController.delete);

// RailwayVehicleLoadAndCargoSpecification routes with validation
  route.get("/railway-vehicle-load-and-cargo-specifications", hasPermission('view_railwayvehicleloadandcargospecification'), RailwayVehicleLoadAndCargoSpecificationController.getAll);
  route.get("/railway-vehicle-load-and-cargo-specifications/:id", hasPermission('view_railwayvehicleloadandcargospecification'), RailwayVehicleLoadAndCargoSpecificationController.get);
  route.post("/railway-vehicle-load-and-cargo-specifications", hasPermission('create_railwayvehicleloadandcargospecification'), validateData.railwayVehicleLoadAndCargoSpecificationValidate, RailwayVehicleLoadAndCargoSpecificationController.save);
  route.put("/railway-vehicle-load-and-cargo-specifications/:id", hasPermission('update_railwayvehicleloadandcargospecification'), validateData.railwayVehicleLoadAndCargoSpecificationValidate, RailwayVehicleLoadAndCargoSpecificationController.update);
  route.delete("/railway-vehicle-load-and-cargo-specifications/:id", hasPermission('delete_railwayvehicleloadandcargospecification'), RailwayVehicleLoadAndCargoSpecificationController.delete);


// RailwayStationPlatformLayout routes with validation
  route.get("/railway-station-platform-layouts", hasPermission('view_railwaystationplatformlayout'), RailwayStationPlatformLayoutController.getAll);
  route.get("/railway-station-platform-layouts/:id", hasPermission('view_railwaystationplatformlayout'), RailwayStationPlatformLayoutController.get);
  route.post("/railway-station-platform-layouts", hasPermission('create_railwaystationplatformlayout'), validateData.railwayStationPlatformLayoutValidate, RailwayStationPlatformLayoutController.save);
  route.put("/railway-station-platform-layouts/:id", hasPermission('update_railwaystationplatformlayout'), validateData.railwayStationPlatformLayoutValidate, RailwayStationPlatformLayoutController.update);
  route.delete("/railway-station-platform-layouts/:id", hasPermission('delete_railwaystationplatformlayout'), RailwayStationPlatformLayoutController.delete);

// RailwayStationPlatformFacility routes with validation
  route.get("/railway-station-platform-facilities", hasPermission('view_railwaystationplatformfacility'), RailwayStationPlatformFacilityController.getAll);
  route.get("/railway-station-platform-facilities/:id", hasPermission('view_railwaystationplatformfacility'), RailwayStationPlatformFacilityController.get);
  route.post("/railway-station-platform-facilities", hasPermission('create_railwaystationplatformfacility'), validateData.railwayStationPlatformFacilityValidate, RailwayStationPlatformFacilityController.save);
  route.put("/railway-station-platform-facilities/:id", hasPermission('update_railwaystationplatformfacility'), validateData.railwayStationPlatformFacilityValidate, RailwayStationPlatformFacilityController.update);
  route.delete("/railway-station-platform-facilities/:id", hasPermission('delete_railwaystationplatformfacility'), RailwayStationPlatformFacilityController.delete);


// RailwayStationPlatformStructuralElement routes with validation
  route.get("/railway-station-platform-structural-elements", hasPermission('view_railwaystationplatformstructuralelement'), RailwayStationPlatformStructuralElementController.getAll);
  route.get("/railway-station-platform-structural-elements/:id", hasPermission('view_railwaystationplatformstructuralelement'), RailwayStationPlatformStructuralElementController.get);
  route.post("/railway-station-platform-structural-elements", hasPermission('create_railwaystationplatformstructuralelement'), validateData.railwayStationPlatformStructuralElementValidate, RailwayStationPlatformStructuralElementController.save);
  route.put("/railway-station-platform-structural-elements/:id", hasPermission('update_railwaystationplatformstructuralelement'), validateData.railwayStationPlatformStructuralElementValidate, RailwayStationPlatformStructuralElementController.update);
  route.delete("/railway-station-platform-structural-elements/:id", hasPermission('delete_railwaystationplatformstructuralelement'), RailwayStationPlatformStructuralElementController.delete);

// RailwayStationPlatformSignageAndWayFinding routes with validation
  route.get("/railway-station-platform-signage-and-way-findings", hasPermission('view_railwaystationplatformsignageandwayfinding'), RailwayStationPlatformSignageAndWayFindingController.getAll);
  route.get("/railway-station-platform-signage-and-way-findings/:id", hasPermission('view_railwaystationplatformsignageandwayfinding'), RailwayStationPlatformSignageAndWayFindingController.get);
  route.post("/railway-station-platform-signage-and-way-findings", hasPermission('create_railwaystationplatformsignageandwayfinding'), validateData.railwayStationPlatformSignageAndWayFindingValidate, RailwayStationPlatformSignageAndWayFindingController.save);
  route.put("/railway-station-platform-signage-and-way-findings/:id", hasPermission('update_railwaystationplatformsignageandwayfinding'), validateData.railwayStationPlatformSignageAndWayFindingValidate, RailwayStationPlatformSignageAndWayFindingController.update);
  route.delete("/railway-station-platform-signage-and-way-findings/:id", hasPermission('delete_railwaystationplatformsignageandwayfinding'), RailwayStationPlatformSignageAndWayFindingController.delete);


// RailwayStationPlatformSafetyAndSecurity routes with validation
  route.get("/railway-station-platform-safety-and-securities", hasPermission('view_railwaystationplatformsafetyandsecurity'), RailwayStationPlatformSafetyAndSecurityController.getAll);
  route.get("/railway-station-platform-safety-and-securities/:id", hasPermission('view_railwaystationplatformsafetyandsecurity'), RailwayStationPlatformSafetyAndSecurityController.get);
  route.post("/railway-station-platform-safety-and-securities", hasPermission('create_railwaystationplatformsafetyandsecurity'), validateData.railwayStationPlatformSafetyAndSecurityValidate, RailwayStationPlatformSafetyAndSecurityController.save);
  route.put("/railway-station-platform-safety-and-securities/:id", hasPermission('update_railwaystationplatformsafetyandsecurity'), validateData.railwayStationPlatformSafetyAndSecurityValidate, RailwayStationPlatformSafetyAndSecurityController.update);
  route.delete("/railway-station-platform-safety-and-securities/:id", hasPermission('delete_railwaystationplatformsafetyandsecurity'), RailwayStationPlatformSafetyAndSecurityController.delete);

// RailwayStationPlatformSurfaceAndFinish routes with validation
  route.get("/railway-station-platform-surface-and-finishes", hasPermission('view_railwaystationplatformsurfaceandfinish'), RailwayStationPlatformSurfaceAndFinishController.getAll);
  route.get("/railway-station-platform-surface-and-finishes/:id", hasPermission('view_railwaystationplatformsurfaceandfinish'), RailwayStationPlatformSurfaceAndFinishController.get);
  route.post("/railway-station-platform-surface-and-finishes", hasPermission('create_railwaystationplatformsurfaceandfinish'), validateData.railwayStationPlatformSurfaceAndFinishValidate, RailwayStationPlatformSurfaceAndFinishController.save);
  route.put("/railway-station-platform-surface-and-finishes/:id", hasPermission('update_railwaystationplatformsurfaceandfinish'), validateData.railwayStationPlatformSurfaceAndFinishValidate, RailwayStationPlatformSurfaceAndFinishController.update);
  route.delete("/railway-station-platform-surface-and-finishes/:id", hasPermission('delete_railwaystationplatformsurfaceandfinish'), RailwayStationPlatformSurfaceAndFinishController.delete);


// RailwayStationPlatformPassengerFlowAndCapacity routes with validation
  route.get("/railway-station-platform-passenger-flow-and-capacities", hasPermission('view_railwaystationplatformpassengerflowandcapacity'), RailwayStationPlatformPassengerFlowAndCapacityController.getAll);
  route.get("/railway-station-platform-passenger-flow-and-capacities/:id", hasPermission('view_railwaystationplatformpassengerflowandcapacity'), RailwayStationPlatformPassengerFlowAndCapacityController.get);
  route.post("/railway-station-platform-passenger-flow-and-capacities", hasPermission('create_railwaystationplatformpassengerflowandcapacity'), validateData.railwayStationPlatformPassengerFlowAndCapacityValidate, RailwayStationPlatformPassengerFlowAndCapacityController.save);
  route.put("/railway-station-platform-passenger-flow-and-capacities/:id", hasPermission('update_railwaystationplatformpassengerflowandcapacity'), validateData.railwayStationPlatformPassengerFlowAndCapacityValidate, RailwayStationPlatformPassengerFlowAndCapacityController.update);
  route.delete("/railway-station-platform-passenger-flow-and-capacities/:id", hasPermission('delete_railwaystationplatformpassengerflowandcapacity'), RailwayStationPlatformPassengerFlowAndCapacityController.delete);


// RailwayStationPlatformEnvironmentalAndOtherFactor routes with validation
  route.get("/project-overviews", RailwayStationPlatformEnvironmentalAndOtherFactorController.getAl);

  route.get("/railway-station-platform-environmental-and-other-factors", hasPermission('view_railwaystationplatformenvironmentalandotherfactor'), RailwayStationPlatformEnvironmentalAndOtherFactorController.getAll);
  route.get("/railway-station-platform-environmental-and-other-factors/:id", hasPermission('view_railwaystationplatformenvironmentalandotherfactor'), RailwayStationPlatformEnvironmentalAndOtherFactorController.get);
  route.post("/railway-station-platform-environmental-and-other-factors", hasPermission('create_railwaystationplatformenvironmentalandotherfactor'), validateData.railwayStationPlatformEnvironmentalAndOtherFactorValidate, RailwayStationPlatformEnvironmentalAndOtherFactorController.save);
  route.put("/railway-station-platform-environmental-and-other-factors/:id", hasPermission('update_railwaystationplatformenvironmentalandotherfactor'), validateData.railwayStationPlatformEnvironmentalAndOtherFactorValidate, RailwayStationPlatformEnvironmentalAndOtherFactorController.update);
  route.delete("/railway-station-platform-environmental-and-other-factors/:id", hasPermission('delete_railwaystationplatformenvironmentalandotherfactor'), RailwayStationPlatformEnvironmentalAndOtherFactorController.delete);

  /// habte

  // RailwayPowerSupplyConfiguration routes with validation and permissions
  route.get("/railway-power-supply-configurations", hasPermission('view_railwaypowersupplyconfiguration'), RailwayPowerSupplyConfigurationController.getAll);
  route.get("/railway-power-supply-configurations/:id", hasPermission('view_railwaypowersupplyconfiguration'), RailwayPowerSupplyConfigurationController.get);
  route.post("/railway-power-supply-configurations", hasPermission('create_railwaypowersupplyconfiguration'), validateData.railwayPowerSupplyConfigurationValidate, RailwayPowerSupplyConfigurationController.save);
  route.put("/railway-power-supply-configurations/:id", hasPermission('update_railwaypowersupplyconfiguration'), validateData.railwayPowerSupplyConfigurationValidate, RailwayPowerSupplyConfigurationController.update);
  route.delete("/railway-power-supply-configurations/:id", hasPermission('delete_railwaypowersupplyconfiguration'), RailwayPowerSupplyConfigurationController.delete);

  // RailwayPowerSubstationsAndEquipment routes with validation and permissions
  route.get("/railway-power-substations-and-equipments", hasPermission('view_railwaypowersubstationsandequipment'), RailwayPowerSubstationsAndEquipmentController.getAll);
  route.get("/railway-power-substations-and-equipments/:id", hasPermission('view_railwaypowersubstationsandequipment'), RailwayPowerSubstationsAndEquipmentController.get);
  route.post("/railway-power-substations-and-equipments", hasPermission('create_railwaypowersubstationsandequipment'), validateData.railwayPowerSubstationsAndEquipmentValidate, RailwayPowerSubstationsAndEquipmentController.save);
  route.put("/railway-power-substations-and-equipments/:id", hasPermission('update_railwaypowersubstationsandequipment'), validateData.railwayPowerSubstationsAndEquipmentValidate, RailwayPowerSubstationsAndEquipmentController.update);
  route.delete("/railway-power-substations-and-equipments/:id", hasPermission('delete_railwaypowersubstationsandequipment'), RailwayPowerSubstationsAndEquipmentController.delete);

  // RailwayPowerDistribution routes with validation and permissions
  route.get("/railway-power-distributions", hasPermission('view_railwaypowerdistribution'), RailwayPowerDistributionController.getAll);
  route.get("/railway-power-distributions/:id", hasPermission('view_railwaypowerdistribution'), RailwayPowerDistributionController.get);
  route.post("/railway-power-distributions", hasPermission('create_railwaypowerdistribution'), validateData.railwayPowerDistributionValidate, RailwayPowerDistributionController.save);
  route.put("/railway-power-distributions/:id", hasPermission('update_railwaypowerdistribution'), validateData.railwayPowerDistributionValidate, RailwayPowerDistributionController.update);
  route.delete("/railway-power-distributions/:id", hasPermission('delete_railwaypowerdistribution'), RailwayPowerDistributionController.delete);

  // RailwayPowerSupplyMaintenanceAndTesting routes with validation and permissions
  route.get("/railway-power-supply-maintenance-and-testings", hasPermission('view_railwaypowersupplymaintenanceandtesting'), RailwayPowerSupplyMaintenanceAndTestingController.getAll);
  route.get("/railway-power-supply-maintenance-and-testings/:id", hasPermission('view_railwaypowersupplymaintenanceandtesting'), RailwayPowerSupplyMaintenanceAndTestingController.get);
  route.post("/railway-power-supply-maintenance-and-testings", hasPermission('create_railwaypowersupplymaintenanceandtesting'), validateData.railwayPowerSupplyMaintenanceAndTestingValidate, RailwayPowerSupplyMaintenanceAndTestingController.save);
  route.put("/railway-power-supply-maintenance-and-testings/:id", hasPermission('update_railwaypowersupplymaintenanceandtesting'), validateData.railwayPowerSupplyMaintenanceAndTestingValidate, RailwayPowerSupplyMaintenanceAndTestingController.update);
  route.delete("/railway-power-supply-maintenance-and-testings/:id", hasPermission('delete_railwaypowersupplymaintenanceandtesting'), RailwayPowerSupplyMaintenanceAndTestingController.delete);

  // RailwayPowerSupplySafetyAndCompliance routes with validation and permissions
  route.get("/railway-power-supply-safety-and-compliances", hasPermission('view_railwaypowersupplysafetyandcompliance'), RailwayPowerSupplySafetyAndComplianceController.getAll);
  route.get("/railway-power-supply-safety-and-compliances/:id", hasPermission('view_railwaypowersupplysafetyandcompliance'), RailwayPowerSupplySafetyAndComplianceController.get);
  route.post("/railway-power-supply-safety-and-compliances", hasPermission('create_railwaypowersupplysafetyandcompliance'), validateData.railwayPowerSupplySafetyAndComplianceValidate, RailwayPowerSupplySafetyAndComplianceController.save);
  route.put("/railway-power-supply-safety-and-compliances/:id", hasPermission('update_railwaypowersupplysafetyandcompliance'), validateData.railwayPowerSupplySafetyAndComplianceValidate, RailwayPowerSupplySafetyAndComplianceController.update);
  route.delete("/railway-power-supply-safety-and-compliances/:id", hasPermission('delete_railwaypowersupplysafetyandcompliance'), RailwayPowerSupplySafetyAndComplianceController.delete);

  // RailwayPowerSupplyEnvironmentalAndOtherFactor routes with validation and permissions
  route.get("/railway-power-supply-environmental-and-other-factors", hasPermission('view_railwaypowersupplyenvironmentalandotherfactor'), RailwayPowerSupplyEnvironmentalAndOtherFactorController.getAll);
  route.get("/railway-power-supply-environmental-and-other-factors/:id", hasPermission('view_railwaypowersupplyenvironmentalandotherfactor'), RailwayPowerSupplyEnvironmentalAndOtherFactorController.get);
  route.post("/railway-power-supply-environmental-and-other-factors", hasPermission('create_railwaypowersupplyenvironmentalandotherfactor'), validateData.railwayPowerSupplyEnvironmentalAndOtherFactorValidate, RailwayPowerSupplyEnvironmentalAndOtherFactorController.save);
  route.put("/railway-power-supply-environmental-and-other-factors/:id", hasPermission('update_railwaypowersupplyenvironmentalandotherfactor'), validateData.railwayPowerSupplyEnvironmentalAndOtherFactorValidate, RailwayPowerSupplyEnvironmentalAndOtherFactorController.update);
  route.delete("/railway-power-supply-environmental-and-other-factors/:id", hasPermission('delete_railwaypowersupplyenvironmentalandotherfactor'), RailwayPowerSupplyEnvironmentalAndOtherFactorController.delete);

  // RailwayMaintenanceFacilityTypeAndPurpose routes with validation and permissions
  route.get("/railway-maintenance-facility-type-and-purposes", hasPermission('view_railwaymaintenancefacilitytypeandpurpose'), RailwayMaintenanceFacilityTypeAndPurposeController.getAll);
  route.get("/railway-maintenance-facility-type-and-purposes/:id", hasPermission('view_railwaymaintenancefacilitytypeandpurpose'), RailwayMaintenanceFacilityTypeAndPurposeController.get);
  route.post("/railway-maintenance-facility-type-and-purposes", hasPermission('create_railwaymaintenancefacilitytypeandpurpose'), validateData.railwayMaintenanceFacilityTypeAndPurposeValidate, RailwayMaintenanceFacilityTypeAndPurposeController.save);
  route.put("/railway-maintenance-facility-type-and-purposes/:id", hasPermission('update_railwaymaintenancefacilitytypeandpurpose'), validateData.railwayMaintenanceFacilityTypeAndPurposeValidate, RailwayMaintenanceFacilityTypeAndPurposeController.update);
  route.delete("/railway-maintenance-facility-type-and-purposes/:id", hasPermission('delete_railwaymaintenancefacilitytypeandpurpose'), RailwayMaintenanceFacilityTypeAndPurposeController.delete);

  // RailwayMaintenanceFacilityLayoutAndDesign routes with validation and permissions
  route.get("/railway-maintenance-facility-layout-and-designs", hasPermission('view_railwaymaintenancefacilitylayoutanddesign'), RailwayMaintenanceFacilityLayoutAndDesignController.getAll);
  route.get("/railway-maintenance-facility-layout-and-designs/:id", hasPermission('view_railwaymaintenancefacilitylayoutanddesign'), RailwayMaintenanceFacilityLayoutAndDesignController.get);
  route.post("/railway-maintenance-facility-layout-and-designs", hasPermission('create_railwaymaintenancefacilitylayoutanddesign'), validateData.railwayMaintenanceFacilityLayoutAndDesignValidate, RailwayMaintenanceFacilityLayoutAndDesignController.save);
  route.put("/railway-maintenance-facility-layout-and-designs/:id", hasPermission('update_railwaymaintenancefacilitylayoutanddesign'), validateData.railwayMaintenanceFacilityLayoutAndDesignValidate, RailwayMaintenanceFacilityLayoutAndDesignController.update);
  route.delete("/railway-maintenance-facility-layout-and-designs/:id", hasPermission('delete_railwaymaintenancefacilitylayoutanddesign'), RailwayMaintenanceFacilityLayoutAndDesignController.delete);

  // RailwayMaintenanceFacilityEquipmentAndTool routes with validation and permissions
  route.get("/railway-maintenance-facility-equipment-and-tools", hasPermission('view_railwaymaintenancefacilityequipmentandtool'), RailwayMaintenanceFacilityEquipmentAndToolController.getAll);
  route.get("/railway-maintenance-facility-equipment-and-tools/:id", hasPermission('view_railwaymaintenancefacilityequipmentandtool'), RailwayMaintenanceFacilityEquipmentAndToolController.get);
  route.post("/railway-maintenance-facility-equipment-and-tools", hasPermission('create_railwaymaintenancefacilityequipmentandtool'), validateData.railwayMaintenanceFacilityEquipmentAndToolValidate, RailwayMaintenanceFacilityEquipmentAndToolController.save);
  route.put("/railway-maintenance-facility-equipment-and-tools/:id", hasPermission('update_railwaymaintenancefacilityequipmentandtool'), validateData.railwayMaintenanceFacilityEquipmentAndToolValidate, RailwayMaintenanceFacilityEquipmentAndToolController.update);
  route.delete("/railway-maintenance-facility-equipment-and-tools/:id", hasPermission('delete_railwaymaintenancefacilityequipmentandtool'), RailwayMaintenanceFacilityEquipmentAndToolController.delete);

  // RailwayMaintenanceFacilityInfrastructureAndUtility routes with validation and permissions
  route.get("/railway-maintenance-facility-infrastructure-and-utilities", hasPermission('view_railwaymaintenancefacilityinfrastructureandutility'), RailwayMaintenanceFacilityInfrastructureAndUtilityController.getAll);
  route.get("/railway-maintenance-facility-infrastructure-and-utilities/:id", hasPermission('view_railwaymaintenancefacilityinfrastructureandutility'), RailwayMaintenanceFacilityInfrastructureAndUtilityController.get);
  route.post("/railway-maintenance-facility-infrastructure-and-utilities", hasPermission('create_railwaymaintenancefacilityinfrastructureandutility'), validateData.railwayMaintenanceFacilityInfrastructureAndUtilityValidate, RailwayMaintenanceFacilityInfrastructureAndUtilityController.save);
  route.put("/railway-maintenance-facility-infrastructure-and-utilities/:id", hasPermission('update_railwaymaintenancefacilityinfrastructureandutility'), validateData.railwayMaintenanceFacilityInfrastructureAndUtilityValidate, RailwayMaintenanceFacilityInfrastructureAndUtilityController.update);
  route.delete("/railway-maintenance-facility-infrastructure-and-utilities/:id", hasPermission('delete_railwaymaintenancefacilityinfrastructureandutility'), RailwayMaintenanceFacilityInfrastructureAndUtilityController.delete);

  // RailwayMaintenanceWorkforceAndFacilityStaff routes with validation and permissions
  route.get("/railway-maintenance-workforce-and-facility-staffs", hasPermission('view_railwaymaintenanceworkforceandfacilitystaff'), RailwayMaintenanceWorkforceAndFacilityStaffController.getAll);
  route.get("/railway-maintenance-workforce-and-facility-staffs/:id", hasPermission('view_railwaymaintenanceworkforceandfacilitystaff'), RailwayMaintenanceWorkforceAndFacilityStaffController.get);
  route.post("/railway-maintenance-workforce-and-facility-staffs", hasPermission('create_railwaymaintenanceworkforceandfacilitystaff'), validateData.railwayMaintenanceWorkforceAndFacilityStaffValidate, RailwayMaintenanceWorkforceAndFacilityStaffController.save);
  route.put("/railway-maintenance-workforce-and-facility-staffs/:id", hasPermission('update_railwaymaintenanceworkforceandfacilitystaff'), validateData.railwayMaintenanceWorkforceAndFacilityStaffValidate, RailwayMaintenanceWorkforceAndFacilityStaffController.update);
  route.delete("/railway-maintenance-workforce-and-facility-staffs/:id", hasPermission('delete_railwaymaintenanceworkforceandfacilitystaff'), RailwayMaintenanceWorkforceAndFacilityStaffController.delete);

  // RailwayMaintenanceFacilityScheduleAndProcedure routes with validation and permissions
  route.get("/railway-maintenance-facility-schedule-and-procedures", hasPermission('view_railwaymaintenancefacilityscheduleandprocedure'), RailwayMaintenanceFacilityScheduleAndProcedureController.getAll);
  route.get("/railway-maintenance-facility-schedule-and-procedures/:id", hasPermission('view_railwaymaintenancefacilityscheduleandprocedure'), RailwayMaintenanceFacilityScheduleAndProcedureController.get);
  route.post("/railway-maintenance-facility-schedule-and-procedures", hasPermission('create_railwaymaintenancefacilityscheduleandprocedure'), validateData.railwayMaintenanceFacilityScheduleAndProcedureValidate, RailwayMaintenanceFacilityScheduleAndProcedureController.save);
  route.put("/railway-maintenance-facility-schedule-and-procedures/:id", hasPermission('update_railwaymaintenancefacilityscheduleandprocedure'), validateData.railwayMaintenanceFacilityScheduleAndProcedureValidate, RailwayMaintenanceFacilityScheduleAndProcedureController.update);
  route.delete("/railway-maintenance-facility-schedule-and-procedures/:id", hasPermission('delete_railwaymaintenancefacilityscheduleandprocedure'), RailwayMaintenanceFacilityScheduleAndProcedureController.delete);

  // RailwayMaintenanceFacilityAndSecurity routes with validation and permissions
  route.get("/railway-maintenance-facility-and-securities", hasPermission('view_railwaymaintenancefacilityandsecurity'), RailwayMaintenanceFacilityAndSecurityController.getAll);
  route.get("/railway-maintenance-facility-and-securities/:id", hasPermission('view_railwaymaintenancefacilityandsecurity'), RailwayMaintenanceFacilityAndSecurityController.get);
  route.post("/railway-maintenance-facility-and-securities", hasPermission('create_railwaymaintenancefacilityandsecurity'), validateData.railwayMaintenanceFacilityAndSecurityValidate, RailwayMaintenanceFacilityAndSecurityController.save);
  route.put("/railway-maintenance-facility-and-securities/:id", hasPermission('update_railwaymaintenancefacilityandsecurity'), validateData.railwayMaintenanceFacilityAndSecurityValidate, RailwayMaintenanceFacilityAndSecurityController.update);
  route.delete("/railway-maintenance-facility-and-securities/:id", hasPermission('delete_railwaymaintenancefacilityandsecurity'), RailwayMaintenanceFacilityAndSecurityController.delete);

  // RailwayMaintenanceEnvironmentalAndOtherFactor routes with validation and permissions
  route.get("/railway-maintenance-environmental-and-other-factors", hasPermission('view_railwaymaintenanceenvironmentalandotherfactor'), RailwayMaintenanceEnvironmentalAndOtherFactorController.getAll);
  route.get("/railway-maintenance-environmental-and-other-factors/:id", hasPermission('view_railwaymaintenanceenvironmentalandotherfactor'), RailwayMaintenanceEnvironmentalAndOtherFactorController.get);
  route.post("/railway-maintenance-environmental-and-other-factors", hasPermission('create_railwaymaintenanceenvironmentalandotherfactor'), validateData.railwayMaintenanceEnvironmentalAndOtherFactorValidate, RailwayMaintenanceEnvironmentalAndOtherFactorController.save);
  route.put("/railway-maintenance-environmental-and-other-factors/:id", hasPermission('update_railwaymaintenanceenvironmentalandotherfactor'), validateData.railwayMaintenanceEnvironmentalAndOtherFactorValidate, RailwayMaintenanceEnvironmentalAndOtherFactorController.update);
  route.delete("/railway-maintenance-environmental-and-other-factors/:id", hasPermission('delete_railwaymaintenanceenvironmentalandotherfactor'), RailwayMaintenanceEnvironmentalAndOtherFactorController.delete);

  // ConstructionMethod routes with validation and permissions
  route.get("/construction-methods", hasPermission('view_constructionmethod'), ConstructionMethodController.getAll);
  route.get("/construction-methods/:id", hasPermission('view_constructionmethod'), ConstructionMethodController.get);
  route.post("/construction-methods", hasPermission('create_constructionmethod'), validateData.constructionMethodValidate, ConstructionMethodController.save);
  route.put("/construction-methods/:id", hasPermission('update_constructionmethod'), validateData.constructionMethodValidate, ConstructionMethodController.update);
  route.delete("/construction-methods/:id", hasPermission('delete_constructionmethod'), ConstructionMethodController.delete);

  // Claim routes with validation and permissions
  route.get("/claims", hasPermission('view_claim'), ClaimController.getAll);
  route.get("/claims/:id", hasPermission('view_claim'), ClaimController.get);
  route.post("/claims", hasPermission('create_claim'), validateData.claimValidate, ClaimController.save);
  route.put("/claims/:id", hasPermission('update_claim'), validateData.claimValidate, ClaimController.update);
  route.delete("/claims/:id", hasPermission('delete_claim'), ClaimController.delete);

  // Challenge routes with validation and permissions
  route.get("/challenges", hasPermission('view_challenge'), ChallengeController.getAll);
  route.get("/challenges/:id", hasPermission('view_challenge'), ChallengeController.get);
  route.post("/challenges", hasPermission('create_challenge'), validateData.challengeValidate, ChallengeController.save);
  route.put("/challenges/:id", hasPermission('update_challenge'), validateData.challengeValidate, ChallengeController.update);
  route.delete("/challenges/:id", hasPermission('delete_challenge'), ChallengeController.delete);

  // ThermalBiomassIncinerationData routes with validation and permissions
  route.get("/thermal-biomass-incineration-data", hasPermission('view_thermalbiomassincinerationdata'), ThermalBiomassIncinerationDataController.getAll);
  route.get("/thermal-biomass-incineration-data/:id", hasPermission('view_thermalbiomassincinerationdata'), ThermalBiomassIncinerationDataController.get);
  route.post("/thermal-biomass-incineration-data", hasPermission('create_thermalbiomassincinerationdata'), validateData.thermalBiomassIncinerationDataValidate, ThermalBiomassIncinerationDataController.save);
  route.put("/thermal-biomass-incineration-data/:id", hasPermission('update_thermalbiomassincinerationdata'), validateData.thermalBiomassIncinerationDataValidate, ThermalBiomassIncinerationDataController.update);
  route.delete("/thermal-biomass-incineration-data/:id", hasPermission('delete_thermalbiomassincinerationdata'), ThermalBiomassIncinerationDataController.delete);

  // TelecomInfrastructureManufacturer routes with validation and permissions
  route.get("/telecom-infrastructure-manufacturers", hasPermission('view_telecominfrastructuremanufacturer'), TelecomInfrastructureManufacturerController.getAll);
  route.get("/telecom-infrastructure-manufacturers/:id", hasPermission('view_telecominfrastructuremanufacturer'), TelecomInfrastructureManufacturerController.get);
  route.post("/telecom-infrastructure-manufacturers", hasPermission('create_telecominfrastructuremanufacturer'), validateData.telecomInfrastructureManufacturerValidate, TelecomInfrastructureManufacturerController.save);
  route.put("/telecom-infrastructure-manufacturers/:id", hasPermission('update_telecominfrastructuremanufacturer'), validateData.telecomInfrastructureManufacturerValidate, TelecomInfrastructureManufacturerController.update);
  route.delete("/telecom-infrastructure-manufacturers/:id", hasPermission('delete_telecominfrastructuremanufacturer'), TelecomInfrastructureManufacturerController.delete);

  // MobileNetworkComponentManufacturer routes with validation and permissions
  route.get("/mobile-network-component-manufacturers", hasPermission('view_mobilenetworkcomponentmanufacturer'), MobileNetworkComponentManufacturerController.getAll);
  route.get("/mobile-network-component-manufacturers/:id", hasPermission('view_mobilenetworkcomponentmanufacturer'), MobileNetworkComponentManufacturerController.get);
  route.post("/mobile-network-component-manufacturers", hasPermission('create_mobilenetworkcomponentmanufacturer'), validateData.mobileNetworkComponentManufacturerValidate, MobileNetworkComponentManufacturerController.save);
  route.put("/mobile-network-component-manufacturers/:id", hasPermission('update_mobilenetworkcomponentmanufacturer'), validateData.mobileNetworkComponentManufacturerValidate, MobileNetworkComponentManufacturerController.update);
  route.delete("/mobile-network-component-manufacturers/:id", hasPermission('delete_mobilenetworkcomponentmanufacturer'), MobileNetworkComponentManufacturerController.delete);

  // SatelliteInfrastructureManufacturer routes with validation and permissions
  route.get("/satellite-infrastructure-manufacturers", hasPermission('view_satelliteinfrastructuremanufacturer'), SatelliteInfrastructureManufacturerController.getAll);
  route.get("/satellite-infrastructure-manufacturers/:id", hasPermission('view_satelliteinfrastructuremanufacturer'), SatelliteInfrastructureManufacturerController.get);
  route.post("/satellite-infrastructure-manufacturers", hasPermission('create_satelliteinfrastructuremanufacturer'), validateData.satelliteInfrastructureManufacturerValidate, SatelliteInfrastructureManufacturerController.save);
  route.put("/satellite-infrastructure-manufacturers/:id", hasPermission('update_satelliteinfrastructuremanufacturer'), validateData.satelliteInfrastructureManufacturerValidate, SatelliteInfrastructureManufacturerController.update);
  route.delete("/satellite-infrastructure-manufacturers/:id", hasPermission('delete_satelliteinfrastructuremanufacturer'), SatelliteInfrastructureManufacturerController.delete);

  // MobileNetworkCapacity routes with validation and permissions
  route.get("/mobile-network-capacities", hasPermission('view_mobilenetworkcapacity'), MobileNetworkCapacityController.getAll);
  route.get("/mobile-network-capacities/:id", hasPermission('view_mobilenetworkcapacity'), MobileNetworkCapacityController.get);
  route.post("/mobile-network-capacities", hasPermission('create_mobilenetworkcapacity'), validateData.mobileNetworkCapacityValidate, MobileNetworkCapacityController.save);
  route.put("/mobile-network-capacities/:id", hasPermission('update_mobilenetworkcapacity'), validateData.mobileNetworkCapacityValidate, MobileNetworkCapacityController.update);
  route.delete("/mobile-network-capacities/:id", hasPermission('delete_mobilenetworkcapacity'), MobileNetworkCapacityController.delete);

  // MobileNetworkCoverage routes with validation and permissions
  route.get("/mobile-network-coverages", hasPermission('view_mobilenetworkcoverage'), MobileNetworkCoverageController.getAll);
  route.get("/mobile-network-coverages/:id", hasPermission('view_mobilenetworkcoverage'), MobileNetworkCoverageController.get);
  route.post("/mobile-network-coverages", hasPermission('create_mobilenetworkcoverage'), validateData.mobileNetworkCoverageValidate, MobileNetworkCoverageController.save);
  route.put("/mobile-network-coverages/:id", hasPermission('update_mobilenetworkcoverage'), validateData.mobileNetworkCoverageValidate, MobileNetworkCoverageController.update);
  route.delete("/mobile-network-coverages/:id", hasPermission('delete_mobilenetworkcoverage'), MobileNetworkCoverageController.delete);

  // MachineryInformation routes with permissions
  route.get("/machinery-informations", hasPermission('view_machineryinformation'), MachineryInformationController.getAll);
  route.get("/machinery-informations/:id", hasPermission('view_machineryinformation'), MachineryInformationController.get);
  route.post("/machinery-informations", hasPermission('create_machineryinformation'), MachineryInformationController.save);
  route.delete("/machinery-informations/:id", hasPermission('delete_machineryinformation'), MachineryInformationController.delete);

  // DesignStandard routes with validation and permissions
  route.get("/design-standards", hasPermission('view_designstandard'), DesignStandardController.getAll);
  route.get("/design-standards/:id", hasPermission('view_designstandard'), DesignStandardController.get);
  route.post("/design-standards", hasPermission('create_designstandard'), validateData.designStandardValidate, DesignStandardController.save);
  route.put("/design-standards/:id", hasPermission('update_designstandard'), validateData.designStandardValidate, DesignStandardController.update);
  route.delete("/design-standards/:id", hasPermission('delete_designstandard'), DesignStandardController.delete);

  // RoadSafetyFeature routes with validation and permissions
  route.get("/road-safety-features", hasPermission('view_roadsafetyfeature'), RoadSafetyFeatureController.getAll);
  route.get("/road-safety-features/:id", hasPermission('view_roadsafetyfeature'), RoadSafetyFeatureController.get);
  route.post("/road-safety-features", hasPermission('create_roadsafetyfeature'), validateData.roadSafetyFeatureValidate, RoadSafetyFeatureController.save);
  route.put("/road-safety-features/:id", hasPermission('update_roadsafetyfeature'), validateData.roadSafetyFeatureValidate, RoadSafetyFeatureController.update);
  route.delete("/road-safety-features/:id", hasPermission('delete_roadsafetyfeature'), RoadSafetyFeatureController.delete);

  // SatelliteNetworkCoverage routes with validation and permissions
  route.get("/satellite-network-coverages", hasPermission('view_satellitenetworkcoverage'), SatelliteNetworkCoverageController.getAll);
  route.get("/satellite-network-coverages/:id", hasPermission('view_satellitenetworkcoverage'), SatelliteNetworkCoverageController.get);
  route.post("/satellite-network-coverages", hasPermission('create_satellitenetworkcoverage'), validateData.satelliteNetworkCoverageValidate, SatelliteNetworkCoverageController.save);
  route.put("/satellite-network-coverages/:id", hasPermission('update_satellitenetworkcoverage'), validateData.satelliteNetworkCoverageValidate, SatelliteNetworkCoverageController.update);
  route.delete("/satellite-network-coverages/:id", hasPermission('delete_satellitenetworkcoverage'), SatelliteNetworkCoverageController.delete);

  // SatelliteNetworkComponentAge routes with validation and permissions
  route.get("/satellite-network-component-ages", hasPermission('view_satellitenetworkcomponentage'), SatelliteNetworkComponentAgeController.getAll);
  route.get("/satellite-network-component-ages/:id", hasPermission('view_satellitenetworkcomponentage'), SatelliteNetworkComponentAgeController.get);
  route.post("/satellite-network-component-ages", hasPermission('create_satellitenetworkcomponentage'), validateData.SatelliteNetworkComponentAgeValidate, SatelliteNetworkComponentAgeController.save);
  route.put("/satellite-network-component-ages/:id", hasPermission('update_satellitenetworkcomponentage'), validateData.SatelliteNetworkComponentAgeValidate, SatelliteNetworkComponentAgeController.update);
  route.delete("/satellite-network-component-ages/:id", hasPermission('delete_satellitenetworkcomponentage'), SatelliteNetworkComponentAgeController.delete);
  
  // SatelliteNetworkCapacity routes with validation and permissions
  route.get("/satellite-network-capacities", hasPermission('view_satellitenetworkcapacity'), SatelliteNetworkCapacityController.getAll);
  route.get("/satellite-network-capacities/:id", hasPermission('view_satellitenetworkcapacity'), SatelliteNetworkCapacityController.get);
  route.post("/satellite-network-capacities", hasPermission('create_satellitenetworkcapacity'), validateData.SatelliteNetworkCapacityValidate, SatelliteNetworkCapacityController.save);
  route.put("/satellite-network-capacities/:id", hasPermission('update_satellitenetworkcapacity'), validateData.SatelliteNetworkCapacityValidate, SatelliteNetworkCapacityController.update);
  route.delete("/satellite-network-capacities/:id", hasPermission('delete_satellitenetworkcapacity'), SatelliteNetworkCapacityController.delete);

  // BroadcastingNetworkCoverage routes with validation and permissions
  route.get("/broadcasting-network-coverages", hasPermission('view_broadcastingnetworkcoverage'), BroadcastingNetworkCoverageController.getAll);
  route.get("/broadcasting-network-coverages/:id", hasPermission('view_broadcastingnetworkcoverage'), BroadcastingNetworkCoverageController.get);
  route.post("/broadcasting-network-coverages", hasPermission('create_broadcastingnetworkcoverage'), validateData.broadcastingNetworkCoverageValidate, BroadcastingNetworkCoverageController.save);
  route.put("/broadcasting-network-coverages/:id", hasPermission('update_broadcastingnetworkcoverage'), validateData.broadcastingNetworkCoverageValidate, BroadcastingNetworkCoverageController.update);
  route.delete("/broadcasting-network-coverages/:id", hasPermission('delete_broadcastingnetworkcoverage'), BroadcastingNetworkCoverageController.delete);

  // BroadcastingNetworkCapacity routes with validation and permissions
  route.get("/broadcasting-network-capacities", hasPermission('view_broadcastingnetworkcapacity'), BroadcastingNetworkCapacityController.getAll);
  route.get("/broadcasting-network-capacities/:id", hasPermission('view_broadcastingnetworkcapacity'), BroadcastingNetworkCapacityController.get);
  route.post("/broadcasting-network-capacities", hasPermission('create_broadcastingnetworkcapacity'), validateData.broadcastingNetworkCapacityValidate, BroadcastingNetworkCapacityController.save);
  route.put("/broadcasting-network-capacities/:id", hasPermission('update_broadcastingnetworkcapacity'), validateData.broadcastingNetworkCapacityValidate, BroadcastingNetworkCapacityController.update);
  route.delete("/broadcasting-network-capacities/:id", hasPermission('delete_broadcastingnetworkcapacity'), BroadcastingNetworkCapacityController.delete);

  // CulvertConditionAssessment routes with validation and permissions
  route.get("/culvert-condition-assessments", hasPermission('view_culvertconditionassessment'), CulvertConditionAssessmentController.getAll);
  route.get("/culvert-condition-assessments/:id", hasPermission('view_culvertconditionassessment'), CulvertConditionAssessmentController.get);
  route.post("/culvert-condition-assessments", hasPermission('create_culvertconditionassessment'), validateData.culvertConditionAssessmentValidate, CulvertConditionAssessmentController.save);
  route.put("/culvert-condition-assessments/:id", hasPermission('update_culvertconditionassessment'), validateData.culvertConditionAssessmentValidate, CulvertConditionAssessmentController.update);
  route.delete("/culvert-condition-assessments/:id", hasPermission('delete_culvertconditionassessment'), CulvertConditionAssessmentController.delete);

  // DrainageMaintenance routes with validation and permissions
  route.get("/drainage-maintenances", hasPermission('view_drainagemaintenance'), DrainageMaintenanceController.getAll);
  route.get("/drainage-maintenances/:id", hasPermission('view_drainagemaintenance'), DrainageMaintenanceController.get);
  route.post("/drainage-maintenances", hasPermission('create_drainagemaintenance'), validateData.drainageMaintenanceValidate, DrainageMaintenanceController.save);
  route.put("/drainage-maintenances/:id", hasPermission('update_drainagemaintenance'), validateData.drainageMaintenanceValidate, DrainageMaintenanceController.update);
  route.delete("/drainage-maintenances/:id", hasPermission('delete_drainagemaintenance'), DrainageMaintenanceController.delete);

  // ProjectFile routes with validation and permissions
  route.get("/project-files", hasPermission('view_projectfile'), ProjectFileController.getAll);
  route.get("/project-files/:id", hasPermission('view_projectfile'), ProjectFileController.get);
  route.post("/project-files", hasPermission('create_projectfile'), validateData.projectFileValidate, ProjectFileController.save);
  route.put("/project-files/:id", hasPermission('update_projectfile'), validateData.projectFileValidate, ProjectFileController.update);
  route.delete("/project-files/:id", hasPermission('delete_projectfile'), ProjectFileController.delete);

  route.get(
    "/mapping/:id", ProjectController.getCategoryMapping);
  return route;

};
