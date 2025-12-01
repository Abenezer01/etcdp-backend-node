const { Permission, PositionPermission, RolePermission, Position, Sequelize } = require("../../models");
const paginationHelper = require("../utils/pagination-helper");
const usrData = require("../../utils/userDataFromToken");

const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");

const Op = Sequelize.Op;
const master = require("../../config/master");
const { parseParams } = require("../../utils/request/param-hanlder");
const { where } = require("sequelize");
const e = require("cors");

let self = {};


self.getRolePermissions = async (req, res) => {
  try {
    let id = req.params.id;
    const params = parseParams(req);
    const filter = params.filter
    let permissions = await Permission.findAll({
      where: {
        ...filter
      }
    });

    // Fetch all role permissions related to the role in one query
    let rolePermissions = await RolePermission.findAll({
      where: { role_id: id },
      attributes: ["permission_id"],
    });

    // Create a Set for faster lookup
    let selectedPermissions = new Set(rolePermissions.map(rp => rp.permission_id));

    // Map permissions efficiently
    let permArray = permissions.map(per => ({
      id: per.id,
      name: per.name,
      model: per.model,
      module: per.module,
      type: per.type,
      description: per.description,
      selected: selectedPermissions.has(per.id),
    }));

    res.apiSuccess({
      data: permArray
    });


  } catch (error) {
    res.apiError(error);
  }
}

self.assignRolePermissions = async (req, res) => {

  try {
    let body = req.body
    let id = body.id
    let permissions = body.permissions

    for (let per of permissions) {
        let exist = await RolePermission.findOne({
          where: {
            role_id: id,
            permission_id: per.id
          }
        })
      
        if(!exist && per.is_selected) {
          await RolePermission.create({
            permission_id: per.id,
            role_id: id 
          })

        }

        if (exist && !per.is_selected) {
            await RolePermission.destroy({
              where: {
                role_id: id,
                permission_id: per.id
              }
            });
        }
    }

    return res.status(200).json({
        message: "Successfully Assigned"
      }); // No Content

    } catch (error) {
    res.apiError(error);
  }
}

self.getAll = async (req, res) => {
  try {
    const paginatedResult = await paginationHelper(Permission, req);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};


self.get = async (req, res) => {
  getRecordById(Permission, req, res);
};

self.save = async (req, res) => {
  saveRecord(Permission, req, res);
};

self.update = async (req, res) => {
  updateRecord(Permission, req, res);
};

self.delete = async (req, res) => {
  deleteRecord(Permission, req, res);
};

self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await Permission.findAll({
      where: {
        name: {
          [Op.like]: "%" + text + "%",
        },
      },
    });
    return res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.getModels = async (req, res) => {
  try {
    let models = master.models;
    return res.json(models);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

self.getPermissionsByModule = async (req, res) => {
  const { module } = req.params;
  try {
    const whereCondition = { module: module, };
    const paginatedResult = await paginationHelper(Permission, req, whereCondition);

    // Use the response formatter to send the success response
    res.apiSuccess({
      data: paginatedResult.data,
      total: paginatedResult.total,
    }, paginatedResult.pagination);

  } catch (error) {
    res.apiError(error);
  }
};
self.getGroupedPermissions = async (req, res) => {
  let id = req.params.id;
  let module = req.params.module;

  try {
    const [rolePos, ePermissions] = await Promise.all([
      PositionPermission.findAll({ where: { position_id: id } }),
      Permission.findAll({ where: { module: module } }),
    ]);

    if (ePermissions.length === 0) {
      //if no Permission under this module doesnt exist
      //return empty array []
      return res.json([]);
    }

    let permissions = rolePos
      .filter((pos) => pers.some((per) => per.id === pos.permission_id))
      .map((pos) => pers.find((per) => per.id === pos.permission_id).name);

    let newArray = [];
    for (let per of ePermissions) {
      if (permissions.includes(per.name)) {
        newArray.push({
          id: per.id,
          name: per.name,
          model: per.model,
          module: per.module,
          type: per.type,
          description: per.description,
          is_selected: true,
          createdAt: per.createdAt,
          updatedAt: per.updatedAt,
        });
      } else {
        newArray.push({
          id: per.id,
          name: per.name,
          model: per.model,
          module: per.module,
          type: per.type,
          is_selected: false,
          createdAt: per.createdAt,
          updatedAt: per.updatedAt,
        });
      }
    }

    let arr = [];

    let pers = await Permission.findAll({
      where: {
        module: module,
      },
    });

    let model = master.models;

    for (let mod of model) {
      let x = pers.filter((item) => item.model === mod);
      if (x.length !== 0) {
        let newArray = [];
        for (let per of x) {
          if (permissions.includes(per.name)) {
            newArray.push({
              id: per.id,
              name: per.name,
              model: per.model,
              module: per.module,
              type: per.type,
              is_selected: true,
              createdAt: per.createdAt,
              updatedAt: per.updatedAt,
            });
          } else {
            newArray.push({
              id: per.id,
              name: per.name,
              model: per.model,
              module: per.module,
              type: per.type,
              is_selected: false,
              createdAt: per.createdAt,
              updatedAt: per.updatedAt,
            });
          }
        }

        // return res.json(newArray)
        if (newArray.length !== 0) {
          let ele = {
            model: mod,
            permissions: newArray,
          };
          // ele[mod] =newArray
          arr.push(ele);
        }
      }
    }

    return res.json(arr);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
self.getPermissionModules = async (req, res) => {
  try {
    let modules = master.permissionModules;
    return res.json(modules);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

self.getPermissionsByAction = async (req, res) => {
  const { id, action } = req.params;

  try {
    const ePermissions = await Permission.findAll({
      where: {
        name: {
          [Op.like]: `%${action}%`,
        },
      },
    });

    const newObj = {};

    const modules = master.modules;

    await Promise.all(
      modules.map(async (cat) => {
        const newArr = await Promise.all(
          ePermissions
            .filter((per) => per.category === cat)
            .map(async (per) => {
              const pos = await PositionPermission.findOne({
                where: {
                  position_id: id,
                  permission_id: per.id,
                },
              });

              return {
                id: per.id,
                name: per.name,
                module: per.module,
                model: per.model,
                category: per.category,
                is_selected: Boolean(pos),
                createdAt: per.createdAt,
                updatedAt: per.updatedAt,
              };
            })
        );
        newObj[cat] = newArr;
      })
    );

    return res.json(newObj);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

self.assignPositionPermissions = async (req, res) => {
  try {
    //optimize it one more
    const { permissions } = req.body;
    let data = [];
    for (let per of permissions) {
      if (per.is_selected) {
        let exists = await PositionPermission.findOne({
          where: {
            position_id: per.position_id,
            permission_id: per.id,
          },
        });
        if (!exists) {
          let temp = await PositionPermission.create({
            position_id: per.position_id,
            permission_id: per.id,
          });
          data.push(temp);
        }
      } else {
        let exists = await PositionPermission.findOne({
          where: {
            position_id: per.position_id,
            permission_id: per.id,
          },
        });
        if (exists) {
          let temp = await PositionPermission.delete({
            where: {
              id: exists.id,
            },
          });
          data.push(temp);
        }
      }
    }

    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

self.getUserPermission = async (req, res) => {
  try {
    const usr = await usrData.userData(req, res);

    const pos = await Position.findOne({
      where: {
        id: usr.position_id,
      },
    });



    if (pos) {
      const rolepermissions = await RolePermission.findAll({
        where: {
          role_id: pos.role_id
        },
      });



      const perArr = await Promise.all(
        rolepermissions.map(async (posper) => {
          const data = await Permission.findOne({
            where: {
              id: posper.permission_id,
            },
          });
          let obj = {
            action: data ? (data.name).split("_")[0] : null,
            subject: data ? data.model : null
          };
          return obj;
        })
      );

      // Remove any null values from the array
      const filteredArr = perArr.filter(Boolean);

      res.apiSuccess({
        data: filteredArr,
      });
    } else {  
      return res.json([]);
    }



    
  } catch (error) {
    res.apiError(error);
  }
};
self.initPermission = async (req, res) => {
  try {
    const { permissionModules, actions } = master;
    const permissionPromises = [];

    for (const action of actions) {
      for (const module of permissionModules) {
        permissionPromises.push(
          Permission.create({
            name: `${action}_${module}`,
            module: module,
            category: "CENTER",
          })
        );
      }
    }

    await Promise.all(permissionPromises.flatMap((p) => p));

    return res.json({
      message: "Permission successfully initialized!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

self.generate = async (req, res) => {
  try {
    // const modelNames = [
    //   "stakeholdercategory",
    //   "stakeholdersubcategory",
    //   "user",
    //   "abutmenttype",
    //   "accessory",
    //   "actionstate",
    //   "address",
    //   "agelevel",
    //   "areatopography",
    //   "assessmentcondition",
    //   "branchadditionalinformation",
    //   "branchaddress",
    //   "branchcontactperson",
    //   "branchmanager",
    //   "bridgeareadata",
    //   "bridgebasicdata",
    //   "bridgefoundation",
    //   "bridgeinspection",
    //   "bridgeinventory",
    //   "bridgepartdefect",
    //   "bridgestructureinformation",
    //   "bridgestructuretype",
    //   "bridgesubstructure",
    //   "bridgesuperstructure",
    //   "broadcastinginfrastructure",
    //   "broadcastinginfrastructureage",
    //   "broadcastinginfrastructuremanufacturer",
    //   "buildingdimensiondetail",
    //   "buildingenvelopmaterial",
    //   "businessfield",
    //   "constructionrelatedservice",
    //   "constructionresource",
    //   "contactperson",
    //   "counttype",
    //   "culvertbasicdata",
    //   "culvertroadoverinformation",
    //   "culvertstructuralinformation",
    //   "currentcondition",
    //   "dam",
    //   "damagecondition",
    //   "damagetype",
    //   "datacenter",
    //   "datacentercomponentage",
    //   "datacentercomponentmanufacturer",
    //   "datacenterfacilitycapacity",
    //   "deckslabtype",
    //   "department",
    //   "designclassification",
    //   "designstandard",
    //   "designtrafficflow",
    //   "detailresourcetype",
    //   "document",
    //   "documentcategory",
    //   "documentsubcategory",
    //   "documenttype",
    //   "drainageassessment",
    //   "drainagecondition",
    //   "drainagesystem",
    //   "drainagetype",
    //   "drainagewatermanagement",
    //   "drivewayaccesspoint",
    //   "educationstatus",
    //   "electricdistributiontransformer",
    //   "electricdistributiontransformertype",
    //   "electrictower",
    //   "employeeage",
    //   "employeeeducation",
    //   "environmentalandimpact",
    //   "environmentalconsiderations",
    //   "environmentalcontrol",
    //   "environmentalcontrols",
    //   "environmentaldata",
    //   "environmentalfactor",
    //   "environmentalsocialimpact",
    //   "equipmentandtools",
    //   "experiencelevel",
    //   "familystatus",
    //   "file",
    //   "generatingcapacity",
    //   "geotechnicalinformation",
    //   "geothermalpowerinfrastructure",
    //   "geothermalpowerwell",
    //   "graduate",
    //   "gridcontrolcenterinformation",
    //   "groundwaterimpact",
    //   "hazardtype",
    //   "horizontalalignment",
    //   "hydroelectricdam",
    //   "hydrologicalinformation",
    //   "hydrologydefect",
    //   "image",
    //   "incidenttime",
    //   "incidenttype",
    //   "infrastructureandutilities",
    //   "infrastructurecategory",
    //   "infrastructuresubcategory",
    //   "inspectiontype",
    //   "internetconnection",
    //   "intersectionanddriveway",
    //   "intersectiontype",
    //   "irrigationcapacity",
    //   "jobexperience",
    //   "jointventurecompany",
    //   "landscapeinformation",
    //   "maintenance",
    //   "maintenancefrequency",
    //   "maintenancehistory",
    //   "maintenanceinformation",
    //   "maintenanceschedule",
    //   "maintenanceworkforce",
    //   "manufacturedconstructionmaterialquality",
    //   "materialcategory",
    //   "materialtype",
    //   "measurementunit",
    //   "mobilenetwork",
    //   "modelmenu",
    //   "moduletype",
    //   "monthlyreport",
    //   "networkcapacity",
    //   "networkcoverage",
    //   "note",
    //   "notification",
    //   "operationlocation",
    //   "ownership",
    //   "pavedwaterwaytype",
    //   "pavement",
    //   "payment",
    //   "pedestrianfacility",
    //   "photo",
    //   "pierType",
    //   "port",
    //   "position",
    //   "positionpermission",
    //   "potentialimpact",
    //   "pressurizedsystem",
    //   "privacyandsecurity",
    //   "professional",
    //   "professionaladditionalinformation",
    //   "professionaladdress",
    //   "professionalassociationmembership",
    //   "professionalcertification",
    //   "professionalcompetencycertification",
    //   "professionalcontact",
    //   "professionalcontactperson",
    //   "professionaleducation",
    //   "professionalrank",
    //   "professionalreferences",
    //   "professionaltrainingprogram",
    //   "professionalworkexperience",
    //   "project",
    //   "projectaddress",
    //   "projectbond",
    //   "projectcategory",
    //   "projectconstructiontype",
    //   "projectcontactperson",
    //   "projectdetail",
    //   "projectdocument",
    //   "projectextensiontime",
    //   "projectfinance",
    //   "projectmasterdata",
    //   "projectmilestone",
    //   "projectoutcome",
    //   "projectphase",
    //   "projectplan",
    //   "projectquality",
    //   "projectreport",
    //   "projectsafetystatus",
    //   "projectstaff",
    //   "projectstafftraining",
    //   "projectstakeholder",
    //   "projectstatus",
    //   "projectsubcategory",
    //   "projecttime",
    //   "projecttype",
    //   "projectusedresource",
    //   "projectvariation",
    //   "protectionandcontrol",
    //   "qualitycontrol",
    //   "railway",
    //   "railwaystation",
    //   "recomendedactionurgency",
    //   "referencedocument",
    //   "regulation",
    //   "regulationandpolicy",
    //   "regulationdocument",
    //   "reliabilityandmaintenance",
    //   "reply",
    //   "researchdocument",
    //   "reservoirinfo",
    //   "resource",
    //   "resourcebrand",
    //   "resourcecategory",
    //   "resourcequantityandprice",
    //   "resourcespecification",
    //   "resourcestudyfield",
    //   "resourcestudylevel",
    //   "resourcesubcategory",
    //   "resourcetype",
    //   "resourceworkexperience",
    //   "risklevel",
    //   "roaddrainage",
    //   "roadinfo",
    //   "roadlayer",
    //   "roadlengthtype",
    //   "roadmaintenanceactivity",
    //   "roadmaintenancedata",
    //   "roadprojectqualitycontrol",
    //   "roadsafetyfeature",
    //   "roadsegment",
    //   "roadsurfacecondition",
    //   "role",
    //   "rolepermission",
    //   "safetyandhealth",
    //   "safetyequipment",
    //   "salary",
    //   "satelliteinfrastructureage",
    //   "satellitenetwork",
    //   "satellitenetworkcomponentmanufacturer",
    //   "segmentgeometry",
    //   "severitylevel",
    //   "slopestability",
    //   "soiltype",
    //   "solarenergy",
    //   "solarpanel",
    //   "solarresourceinformation",
    //   "spansupporttype",
    //   "spillwayinfo",
    //   "stakeholder",
    //   "stakeholderadditionalinformation",
    //   "stakeholderbranch",
    //   "stakeholdercontactperson",
    //   "stakeholderdepartment",
    //   "stakeholderemail",
    //   "stakeholderemployee",
    //   "stakeholderinfo",
    //   "stakeholdermachinery",
    //   "stakeholdermaterial",
    //   "stakeholderphone",
    //   "stakeholderposition",
    //   "stakeholderservice",
    //   "stakeholderstudyfield",
    //   "stakeholdertype",
    //   "status",
    //   "studyfield",
    //   "studylevel",
    //   "studyperiodcost",
    //   "studyprogram",
    //   "substationlayoutandcommunicationdata",
    //   "substationtransformerandswitchgeardata",
    //   "suggestedrepair",
    //   "surfacetype",
    //   "telecom",
    //   "telecominfrastructureage",
    //   "telecominfrastructurecomponent",
    //   "totalemployee",
    //   "trafficparameter",
    //   "trafficvolume",
    //   "training",
    //   "transformer",
    //   "transformertype",
    //   "transmission",
    //   "transmissionline",
    //   "transmissionlineconductorandtowerdata",
    //   "transmissionlineequipmentdata",
    //   "transmissionlineinformation",
    //   "turbineinfo",
    //   "useremail",
    //   "userphone",
    //   "userposition",
    //   "waterirrigationdam",
    //   "weathercondition",
    //   "windenergy",
    //   "windresource",
    //   "windturbine",
    //   "workexperience"
    // ];

  let modelNames =  [
  "activitylog",
  "addressmasterdata",
  "buildingdimensiondetails",
  "canalandpipesystem",
  "certificate",
  "child",
  "constructionresourcecategory",
  "constructionresourcesubcategory",
  "constructionresourcetype",
  "crosssectiontype",
  "dammonitoringandinstrumentation",
  "damoutletandenergydissipationsystem",
  "damreservoircharacteristic",
  "electricgridcontrolcentercybersecuritydata",
  "electricgridcontrolcenterdata",
  "electricgridcontrolcenterperformanceandmaintenance",
  "electricsmartmetersdata",
  "electricsmartmetersperformancedata",
  "electricsmartmetersprivacyandsecuritydata",
  "electricsmartmetersratingsdata",
  "environmentalandsocialimpact",
  "generalairportinformation",
  "generaldaminformation",
  "internetconnectioninfrastructureage",
  "internetconnectioninfrastructuremanufacturer",
  "irrigationanddrainagedata",
  "license",
  "minigridstation",
  "minigridstationbackuppowersource",
  "minigridstationconsumer",
  "minigridstationdistributionline",
  "minigridstationdistributionlineinfrastructure",
  "mobilenetworkcomponentage",
  "ownershiptype",
  "permission",
  "piertype",
  "powergenerationcapacity",
  "professionalcontactpeople",
  "projectadditionalinfo48a1",
  "projectmanager65a1",
  "projectoutcome45c3",
  "pumpingsystemanddrainage",
  "railwayballast",
  "railwayballastconditionassessment",
  "railwayballastdrainageandwatermanagement",
  "railwayballastenvironmentalandotherfactor",
  "railwayballastmaintenanceandrenewal",
  "railwayballastmaterialdata",
  "railwayballastmaterialspecification",
  "railwaycommunicationsystem",
  "railwaycommunicationsystemmaintenanceandtesting",
  "railwaycommunicationsystemsafetyandcompliance",
  "railwayenvironmentalandotherfactor",
  "railwayfasteningsystemcharacteristic",
  "railwayfasteningsystemconditionassessment",
  "railwayfasteningsystemenvironmentalfactor",
  "railwayfasteningsystemmaintenanceandreplacement",
  "railwaypowersupplyconfiguration",
  "railwaysignalingsystem",
  "railwaysleepercharacteristic",
  "railwaysleeperconditionassessment",
  "railwaysleeperenvironmentalandotherfactor",
  "railwaysleeperfasteningsystem",
  "railwaysleepermaintenanceandreplacement",
  "railwaystationplatformenvironmentalandotherfactor",
  "railwaystationplatformfacility",
  "railwaystationplatformlayout",
  "railwaystationplatformpassengerflowandcapacity",
  "railwaystationplatformsafetyandsecurity",
  "railwaystationplatformsignageandwayfinding",
  "railwaystationplatformstructuralelement",
  "railwaystationplatformsurfaceandfinish",
  "railwaysubballastconditionassessment",
  "railwaysubballastdrainageandwatermanagement",
  "railwaysubballastenvironmentalandotherfactor",
  "railwaysubballastmaintenanceandrenewal",
  "railwaysubballastmaterial",
  "railwaysubballastmaterialtest",
  "railwaysystemconditionassessment",
  "railwaytrackconditionassessment",
  "railwaytrackdata",
  "railwaytrackgeometrydata",
  "railwaytrackmaintenanceandinspection",
  "railwaytrackrehabilitationorrenewal",
  "railwaytracksafety",
  "railwayvehicleidentification",
  "railwayvehicleinteriorandpassengeramenity",
  "railwayvehicleloadandcargospecification",
  "railwayvehiclemaintenanceandinspection",
  "railwayvehicleoperationalperformance",
  "railwayvehiclesafetyandcompliance",
  "railwayvehiclespecification",
  "reservoirdetails",
  "resourcemasterdata",
  "resourceprice",
  "resourcequantity",
  "runwayandapproachdata",
  "spillwaysdetail",
  "stakeholdertraining",
  "telecominfrastructure",
  "terminalandfacilitydata",
  "turbinedetail",
  "upgrade",
  "vehicle",
  "watertreatment",
  "workexperiencelevel"
];

    let action = ['create', 'view', 'update', 'delete', 'check', 'approve', 'authorize']

    // Outer loop to iterate over the x array
    for (let i = 0; i < modelNames.length; i++) {
      // Inner loop to iterate over the action array
      for (let j = 0; j < action.length; j++) {

        const data = await Permission.create({
          name: `${action[j]}_${modelNames[i]}`,
          model: `${modelNames[i]}`,
          module: "project",
          type: "RAILWAY",
          description: "desc"
        });
      }

    }
    return res.json("hello")

  } catch (error) {
    return res.json(error) 
  }
}

self.assignRolePermissionsGenerate = async (req, res) => {
  try { 

    let pro = "professional"
    let permissions = await Permission.findAll({
        where: {
          module: "resource",
          model: {
            [Op.like]: `%${pro}%`,
          }
        }
    });

    for(per of permissions){
        per.type = "PROFESSIONAL";
        await per.save();
    }

    // let RoleId = "123451ce-44a8-462b-a07d-3d55ed3ab089";

    // let permissions = await Permission.findAll();

    // for (let x of permissions) {
    //   const data = await RolePermission.create({
    //     role_id: `${RoleId}`,
    //     permission_id: `${x.id}`,
    //   });
    // }
    // return res.json("hell")
  } catch (error) {
    return res.json(error)
  }
}

self.test = async (req, res) => {
  try {


//     let modelWithoutPermission = [
//   "activitylog",
//   "addressmasterdata",
//   "buildingdimensiondetails",
//   "canalandpipesystem",
//   "certificate",
//   "child",
//   "constructionresourcecategory",
//   "constructionresourcesubcategory",
//   "constructionresourcetype",
//   "crosssectiontype",
//   "dammonitoringandinstrumentation",
//   "damoutletandenergydissipationsystem",
//   "damreservoircharacteristic",
//   "electricgridcontrolcentercybersecuritydata",
//   "electricgridcontrolcenterdata",
//   "electricgridcontrolcenterperformanceandmaintenance",
//   "electricsmartmetersdata",
//   "electricsmartmetersperformancedata",
//   "electricsmartmetersprivacyandsecuritydata",
//   "electricsmartmetersratingsdata",
//   "environmentalandsocialimpact",
//   "generalairportinformation",
//   "generaldaminformation",
//   "internetconnectioninfrastructureage",
//   "internetconnectioninfrastructuremanufacturer",
//   "irrigationanddrainagedata",
//   "license",
//   "minigridstation",
//   "minigridstationbackuppowersource",
//   "minigridstationconsumer",
//   "minigridstationdistributionline",
//   "minigridstationdistributionlineinfrastructure",
//   "mobilenetworkcomponentage",
//   "ownershiptype",
//   "permission",
//   "piertype",
//   "powergenerationcapacity",
//   "professionalcontactpeople",
//   "projectadditionalinfo48a1",
//   "projectmanager65a1",
//   "projectoutcome45c3",
//   "pumpingsystemanddrainage",
//   "railwayballast",
//   "railwayballastconditionassessment",
//   "railwayballastdrainageandwatermanagement",
//   "railwayballastenvironmentalandotherfactor",
//   "railwayballastmaintenanceandrenewal",
//   "railwayballastmaterialdata",
//   "railwayballastmaterialspecification",
//   "railwaycommunicationsystem",
//   "railwaycommunicationsystemmaintenanceandtesting",
//   "railwaycommunicationsystemsafetyandcompliance",
//   "railwayenvironmentalandotherfactor",
//   "railwayfasteningsystemcharacteristic",
//   "railwayfasteningsystemconditionassessment",
//   "railwayfasteningsystemenvironmentalfactor",
//   "railwayfasteningsystemmaintenanceandreplacement",
//   "railwaypowersupplyconfiguration",
//   "railwaysignalingsystem",
//   "railwaysleepercharacteristic",
//   "railwaysleeperconditionassessment",
//   "railwaysleeperenvironmentalandotherfactor",
//   "railwaysleeperfasteningsystem",
//   "railwaysleepermaintenanceandreplacement",
//   "railwaystationplatformenvironmentalandotherfactor",
//   "railwaystationplatformfacility",
//   "railwaystationplatformlayout",
//   "railwaystationplatformpassengerflowandcapacity",
//   "railwaystationplatformsafetyandsecurity",
//   "railwaystationplatformsignageandwayfinding",
//   "railwaystationplatformstructuralelement",
//   "railwaystationplatformsurfaceandfinish",
//   "railwaysubballastconditionassessment",
//   "railwaysubballastdrainageandwatermanagement",
//   "railwaysubballastenvironmentalandotherfactor",
//   "railwaysubballastmaintenanceandrenewal",
//   "railwaysubballastmaterial",
//   "railwaysubballastmaterialtest",
//   "railwaysystemconditionassessment",
//   "railwaytrackconditionassessment",
//   "railwaytrackdata",
//   "railwaytrackgeometrydata",
//   "railwaytrackmaintenanceandinspection",
//   "railwaytrackrehabilitationorrenewal",
//   "railwaytracksafety",
//   "railwayvehicleidentification",
//   "railwayvehicleinteriorandpassengeramenity",
//   "railwayvehicleloadandcargospecification",
//   "railwayvehiclemaintenanceandinspection",
//   "railwayvehicleoperationalperformance",
//   "railwayvehiclesafetyandcompliance",
//   "railwayvehiclespecification",
//   "reservoirdetails",
//   "resourcemasterdata",
//   "resourceprice",
//   "resourcequantity",
//   "runwayandapproachdata",
//   "spillwaysdetail",
//   "stakeholdertraining",
//   "telecominfrastructure",
//   "terminalandfacilitydata",
//   "turbinedetail",
//   "upgrade",
//   "vehicle",
//   "watertreatment",
//   "workexperiencelevel"
// ];

//     let modelWithoutPermission = [
//   "activitylog",
//   "addressmasterdata",
//   "buildingdimensiondetails",
//   "canalandpipesystem",
//   "certificate",
//   "child",
//   "constructionresourcecategory",
//   "constructionresourcesubcategory",
//   "constructionresourcetype",
//   "crosssectiontype",
//   "dammonitoringandinstrumentation",
//   "damoutletandenergydissipationsystem",
//   "damreservoircharacteristic",
//   "electricgridcontrolcentercybersecuritydata",
//   "electricgridcontrolcenterdata",
//   "electricgridcontrolcenterperformanceandmaintenance",
//   "electricsmartmetersdata",
//   "electricsmartmetersperformancedata",
//   "electricsmartmetersprivacyandsecuritydata",
//   "electricsmartmetersratingsdata",
//   "endwalltypeinlet",
//   "endwalltypeoutlet",
//   "environmentalandsocialimpact",
//   "expansionjointtype",
//   "functionalclassification",
//   "generalairportinformation",
//   "generaldaminformation",
//   "guardrailtype",
//   "internetconnectioninfrastructureage",
//   "internetconnectioninfrastructuremanufacturer",
//   "irrigationanddrainagedata",
//   "license",
//   "maintenancetype",
//   "minigridstation",
//   "minigridstationbackuppowersource",
//   "minigridstationconsumer",
//   "minigridstationdistributionline",
//   "minigridstationdistributionlineinfrastructure",
//   "mobilenetworkcomponentage",
//   "ownershiptype",
//   "permission",
//   "piertype",
//   "powergenerationcapacity",
//   "professionalcontactpeople",
//   "projectadditionalinfo48a1",
//   "projectmanager65a1",
//   "projectoutcome45c3",
//   "pumpingsystemanddrainage",
//   "railwayballast",
//   "railwayballastconditionassessment",
//   "railwayballastdrainageandwatermanagement",
//   "railwayballastenvironmentalandotherfactor",
//   "railwayballastmaintenanceandrenewal",
//   "railwayballastmaterialdata",
//   "railwayballastmaterialspecification",
//   "railwaycommunicationsystem",
//   "railwaycommunicationsystemmaintenanceandtesting",
//   "railwaycommunicationsystemsafetyandcompliance",
//   "railwayenvironmentalandotherfactor",
//   "railwayfasteningsystemcharacteristic",
//   "railwayfasteningsystemconditionassessment",
//   "railwayfasteningsystemenvironmentalfactor",
//   "railwayfasteningsystemmaintenanceandreplacement",
//   "railwaypowersupplyconfiguration",
//   "railwaysignalingsystem",
//   "railwaysleepercharacteristic",
//   "railwaysleeperconditionassessment",
//   "railwaysleeperenvironmentalandotherfactor",
//   "railwaysleeperfasteningsystem",
//   "railwaysleepermaintenanceandreplacement",
//   "railwaystationplatformenvironmentalandotherfactor",
//   "railwaystationplatformfacility",
//   "railwaystationplatformlayout",
//   "railwaystationplatformpassengerflowandcapacity",
//   "railwaystationplatformsafetyandsecurity",
//   "railwaystationplatformsignageandwayfinding",
//   "railwaystationplatformstructuralelement",
//   "railwaystationplatformsurfaceandfinish",
//   "railwaysubballastconditionassessment",
//   "railwaysubballastdrainageandwatermanagement",
//   "railwaysubballastenvironmentalandotherfactor",
//   "railwaysubballastmaintenanceandrenewal",
//   "railwaysubballastmaterial",
//   "railwaysubballastmaterialtest",
//   "railwaysystemconditionassessment",
//   "railwaytrackconditionassessment",
//   "railwaytrackdata",
//   "railwaytrackgeometrydata",
//   "railwaytrackmaintenanceandinspection",
//   "railwaytrackrehabilitationorrenewal",
//   "railwaytracksafety",
//   "railwayvehicleidentification",
//   "railwayvehicleinteriorandpassengeramenity",
//   "railwayvehicleloadandcargospecification",
//   "railwayvehiclemaintenanceandinspection",
//   "railwayvehicleoperationalperformance",
//   "railwayvehiclesafetyandcompliance",
//   "railwayvehiclespecification",
//   "recommendedactionurgency",
//   "reservoirdetails",
//   "resourcemasterdata",
//   "resourceprice",
//   "resourcequantity",
//   "runwayandapproachdata",
//   "spillwaysdetail",
//   "stakeholdertraining",
//   "telecominfrastructure",
//   "terminalandfacilitydata",
//   "turbinedetail",
//   "upgrade",
//   "vehicle",
//   "watertreatment",
//   "workexperiencelevel"
// ];

    // let permissions = await Permission.findAll();

    // const uniqueModels = [...new Set(permissions.map(item => item.model))];
    // return res.json(uniqueModels);

//     let allModels = [
//   "user",
//   "role",
//   "permission",
//   "position",
//   "department",
//   "educationstatus",
//   "child",
//   "familystatus",
//   "contactperson",
//   "jobexperience",
//   "activitylog",
//   "ownershiptype",
//   "studylevel",
//   "businessfield",
//   "studyprogram",
//   "studyfield",
//   "agelevel",
//   "workexperience",
//   "status",
//   "stakeholdercategory",
//   "stakeholdersubcategory",
//   "stakeholdertype",
//   "projecttype",
//   "projectcategory",
//   "projectsubcategory",
//   "functionalclassification",
//   "designclassification",
//   "designstandard",
//   "designtrafficflow",
//   "surfacetype",
//   "crosssectiontype",
//   "intersectiontype",
//   "drivewayaccesspoint",
//   "pedestrianfacility",
//   "roadlengthtype",
//   "areatopography",
//   "piertype",
//   "abutmenttype",
//   "endwalltypeinlet",
//   "endwalltypeoutlet",
//   "pavedwaterwaytype",
//   "soiltype",
//   "guardrailtype",
//   "bridgestructuretype",
//   "spansupporttype",
//   "deckslabtype",
//   "expansionjointtype",
//   "bridgepartdefect",
//   "damagetype",
//   "damagecondition",
//   "hydrologydefect",
//   "roadsafetyfeature",
//   "counttype",
//   "projectphase",
//   "inspectiontype",
//   "currentcondition",
//   "groundwaterimpact",
//   "slopestability",
//   "maintenancefrequency",
//   "maintenancetype",
//   "drainagetype",
//   "drainagecondition",
//   "assessmentcondition",
//   "severitylevel",
//   "suggestedrepair",
//   "recommendedactionurgency",
//   "hazardtype",
//   "potentialimpact",
//   "risklevel",
//   "incidenttype",
//   "incidenttime",
//   "projectmasterdata",
//   "constructionresourcetype",
//   "constructionresourcecategory",
//   "constructionresourcesubcategory",
//   "documenttype",
//   "documentcategory",
//   "documentsubcategory",
//   "moduletype",
//   "infrastructurecategory",
//   "infrastructuresubcategory",
//   "resourcemasterdata",
//   "addressmasterdata",
//   "resource",
//   "resourcebrand",
//   "resourcespecification",
//   "resourceprice",
//   "resourcequantity",
//   "professional",
//   "professionaladdress",
//   "professionalcontact",
//   "professionalcontactpeople",
//   "professionaladditionalinformation",
//   "professionaleducation",
//   "professionalworkexperience",
//   "professionalassociationmembership",
//   "professionalcertification",
//   "stakeholderinfo",
//   "stakeholder",
//   "stakeholdercontactperson",
//   "certificate",
//   "totalemployee",
//   "employeeage",
//   "employeeeducation",
//   "workexperiencelevel",
//   "stakeholdertraining",
//   "regulation",
//   "stakeholderstudyfield",
//   "studyperiodcost",
//   "graduate",
//   "constructionrelatedservice",
//   "stakeholderservice",
//   "operationlocation",
//   "stakeholderemail",
//   "stakeholderphone",
//   "jointventurecompany",
//   "stakeholderadditionalinformation",
//   "stakeholderbranch",
//   "branchmanager",
//   "branchcontactperson",
//   "branchaddress",
//   "branchadditionalinformation",
//   "stakeholderdepartment",
//   "stakeholderposition",
//   "stakeholdermachinery",
//   "safetyequipment",
//   "stakeholdermaterial",
//   "stakeholderemployee",
//   "upgrade",
//   "vehicle",
//   "license",
//   "generatingcapacity",
//   "turbinedetail",
//   "solarenergy",
//   "windenergy",
//   "transformer",
//   "transformertype",
//   "transmissionline",
//   "electrictower",
//   "powergenerationcapacity",
//   "transmission",
//   "windresource",
//   "windturbine",
//   "solarresourceinformation",
//   "solarpanel",
//   "geothermalpowerwell",
//   "geothermalpowerinfrastructure",
//   "transmissionlineinformation",
//   "transmissionlineconductorandtowerdata",
//   "transmissionlineequipmentdata",
//   "substationtransformerandswitchgeardata",
//   "substationlayoutandcommunicationdata",
//   "minigridstation",
//   "minigridstationdistributionline",
//   "minigridstationconsumer",
//   "minigridstationbackuppowersource",
//   "minigridstationdistributionlineinfrastructure",
//   "electricdistributiontransformer",
//   "electricgridcontrolcenterperformanceandmaintenance",
//   "electricdistributiontransformertype",
//   "electricsmartmetersdata",
//   "electricsmartmetersratingsdata",
//   "electricsmartmetersperformancedata",
//   "electricsmartmetersprivacyandsecuritydata",
//   "electricgridcontrolcenterdata",
//   "electricgridcontrolcentercybersecuritydata",
//   "buildingenvelopmaterial",
//   "buildingdimensiondetails",
//   "environmentalcontrol",
//   "projectstatus",
//   "project",
//   "projectstakeholder",
//   "projectplan",
//   "projectreport",
//   "projectdocument",
//   "constructionresource",
//   "projectfinance",
//   "projectvariation",
//   "projectextensiontime",
//   "projecttime",
//   "projectbond",
//   "payment",
//   "projectoutcome45c3",
//   "projectadditionalinfo48a1",
//   "projectmanager65a1",
//   "projectcontactperson",
//   "projectsafetystatus",
//   "projectquality",
//   "weathercondition",
//   "projectconstructiontype",
//   "geotechnicalinformation",
//   "environmentaldata",
//   "maintenancehistory",
//   "safetyandhealth",
//   "reliabilityandmaintenance",
//   "environmentalandsocialimpact",
//   "regulationandpolicy",
//   "generalairportinformation",
//   "runwayandapproachdata",
//   "terminalandfacilitydata",
//   "railway",
//   "railwaystation",
//   "railwaytrackdata",
//   "railwaytrackgeometrydata",
//   "railwaytrackconditionassessment",
//   "railwaytrackmaintenanceandinspection",
//   "railwaytrackrehabilitationorrenewal",
//   "railwaytracksafety",
//   "railwayballast",
//   "railwayballastmaterialdata",
//   "railwayballastmaterialspecification",
//   "railwayballastconditionassessment",
//   "railwayballastmaintenanceandrenewal",
//   "railwayballastdrainageandwatermanagement",
//   "railwayballastenvironmentalandotherfactor",
//   "railwaysubballastmaterial",
//   "railwaysubballastmaterialtest",
//   "railwaysubballastconditionassessment",
//   "railwaysubballastmaintenanceandrenewal",
//   "railwaysubballastdrainageandwatermanagement",
//   "railwaysubballastenvironmentalandotherfactor",
//   "railwaysleepercharacteristic",
//   "railwaysleeperconditionassessment",
//   "railwaysleepermaintenanceandreplacement",
//   "railwaysleeperfasteningsystem",
//   "railwaysleeperenvironmentalandotherfactor",
//   "railwayfasteningsystemcharacteristic",
//   "railwayfasteningsystemconditionassessment",
//   "railwayfasteningsystemmaintenanceandreplacement",
//   "railwayfasteningsystemenvironmentalfactor",
//   "railwaysignalingsystem",
//   "railwaycommunicationsystem",
//   "railwaysystemconditionassessment",
//   "railwaycommunicationsystemmaintenanceandtesting",
//   "railwaycommunicationsystemsafetyandcompliance",
//   "railwayenvironmentalandotherfactor",
//   "railwayvehicleidentification",
//   "railwayvehiclespecification",
//   "railwayvehiclemaintenanceandinspection",
//   "railwayvehicleoperationalperformance",
//   "railwayvehiclesafetyandcompliance",
//   "railwayvehicleinteriorandpassengeramenity",
//   "railwayvehicleloadandcargospecification",
//   "railwaystationplatformlayout",
//   "railwaystationplatformfacility",
//   "railwaystationplatformstructuralelement",
//   "railwaystationplatformsignageandwayfinding",
//   "railwaystationplatformsafetyandsecurity",
//   "railwaystationplatformsurfaceandfinish",
//   "railwaystationplatformpassengerflowandcapacity",
//   "railwaystationplatformenvironmentalandotherfactor",
//   "railwaypowersupplyconfiguration",
//   "telecominfrastructure",
//   "telecominfrastructurecomponent",
//   "telecominfrastructureage",
//   "networkcapacity",
//   "mobilenetwork",
//   "mobilenetworkcomponentage",
//   "networkcoverage",
//   "satellitenetwork",
//   "satelliteinfrastructureage",
//   "satellitenetworkcomponentmanufacturer",
//   "internetconnection",
//   "internetconnectioninfrastructureage",
//   "internetconnectioninfrastructuremanufacturer",
//   "broadcastinginfrastructure",
//   "broadcastinginfrastructureage",
//   "broadcastinginfrastructuremanufacturer",
//   "datacenter",
//   "datacentercomponentage",
//   "datacentercomponentmanufacturer",
//   "datacenterfacilitycapacity",
//   "roadinfo",
//   "roadsegment",
//   "roadlayer",
//   "segmentgeometry",
//   "intersectionanddriveway",
//   "trafficparameter",
//   "accessory",
//   "pavement",
//   "culvertbasicdata",
//   "roadprojectqualitycontrol",
//   "culvertstructuralinformation",
//   "culvertroadoverinformation",
//   "bridgebasicdata",
//   "bridgeareadata",
//   "bridgesuperstructure",
//   "bridgesubstructure",
//   "bridgefoundation",
//   "bridgeinspection",
//   "bridgestructureinformation",
//   "trafficvolume",
//   "roaddrainage",
//   "roadmaintenancedata",
//   "roadmaintenanceactivity",
//   "roadsurfacecondition",
//   "drainageassessment",
//   "hydroelectricdam",
//   "spillwaysdetail",
//   "reservoirdetails",
//   "irrigationcapacity",
//   "waterirrigationdam",
//   "port",
//   "hydrologicalinformation",
//   "dam",
//   "generaldaminformation",
//   "damreservoircharacteristic",
//   "damoutletandenergydissipationsystem",
//   "dammonitoringandinstrumentation",
//   "irrigationanddrainagedata",
//   "canalandpipesystem",
//   "pumpingsystemanddrainage",
//   "watertreatment"
// ];
    
let department = {
  "user": "USER",
  "educationstatus":"USER",
  "child":"USER",
  "familystatus": "USER",
  "contactperson": "USER",
  "jobexperience": "USER",
  "activitylog": "USER",
  "role" : "ROLE",
  "permission": "ROLE",
  "position": "POSITION",
  "department": "DEPARTMENT"
};


for (const model in department) {
  // Get the value (type) associated with the current key (model)
  const type = department[model];
  
  let per = await Permission.findAll({
    where: {
      model: model
    }
  });



  if(per.length > 0){
        for(let p of per){
          p.module = "center";
          p.type = type;
          await p.save()
        }

      }
}




    let masterdata = {
          
          "stakeholdercategory": "STAKEHOLDER",
          "stakeholdersubcategory": "STAKEHOLDER",
          "stakeholdertype": "STAKEHOLDER",
          "projecttype": "PROJECT",
          "projectcategory": "PROJECT",
          "projectsubcategory": "PROJECT",
          "resourcetype" : "RESOURCE",
          "resourcecategory" : "RESOURCE",
          "resourcesubcategory" : "RESOURCE",
          "documenttype": "DOCUMENT",
          "documentcategory": "DOCUMENT",
          "documentsubcategory": "DOCUMENT",
          "moduletype": "INFRASTRUCTURE",
          "infrastructurecategory" : "INFRASTRUCTURE",
          "infrastructuresubcategory": "INFRASTRUCTURE",
          "projectmasterdata": "GENERAL",
          "resourcemasterdata": "GENERAL",
          "stakeholdermasterdata": "GENERAL"
        
    };


    for (const model in masterdata) {
      // Get the value (type) associated with the current key (model)
      const type = masterdata[model];
      
      let per = await Permission.findAll({
        where: {
          model: model
        }
      });



      if(per.length > 0){
            for(let p of per){
              p.module = "masterdata";
              p.type = type;
              await p.save()
            }

          }
    }

 return res.json("done")
    //resource raleted models
   let resource =  [
  "resource",
  "resourcebrand",
  "resourcespecification",
  "resourceprice",
  "resourcequantity",
  "professional",
  "professionaladdress",
  "professionalcontact",
  "professionalcontactpeople",
  "professionaladditionalinformation",
  "professionaleducation",
  "professionalworkexperience",
  "professionalassociationmembership",
  "professionalcertification"
]


for (let m of resource) { 
      let per = await Permission.findAll({
        where: {
          model: m
        }
      });

      if(per.length > 0){
        for(let p of per){
          p.module = "resource";
          p.type = "RESOURCE";
          await p.save()
        }

      }

     
    }

    // stakeholder related models
  let stakeholder =  [
  "stakeholderinfo",
  "stakeholder",
  "stakeholdercontactperson",
  "certificate",
  "totalemployee",
  "employeeage",
  "employeeeducation",
  "workexperiencelevel",
  "stakeholdertraining",
  "regulation",
  "stakeholderstudyfield",
  "studyperiodcost",
  "graduate",
  "constructionrelatedservice",
  "stakeholderservice",
  "operationlocation",
  "stakeholderemail",
  "stakeholderphone",
  "jointventurecompany",
  "stakeholderadditionalinformation",
  "stakeholderbranch",
  "branchmanager",
  "branchcontactperson",
  "branchaddress",
  "branchadditionalinformation",
  "stakeholderdepartment",
  "stakeholderposition",
  "stakeholdermachinery",
  "safetyequipment",
  "stakeholdermaterial",
  "stakeholderemployee",
  "upgrade",
  "vehicle",
  "license"
];

for (let m of stakeholder) { 
      let per = await Permission.findAll({
        where: {
          model: m
        }
      });

      if(per.length > 0){
        for(let p of per){
          p.module = "stakeholder";
          p.type = "CONTRACTOR";
          await p.save()
        }

      }
      
      
    }

    

    // to classify model to type
    // the type will be used to group permissions
    // example ELECTRIC, BUILDING, RAILWAY, AIRFIELD_AIRPORT, WATER_INFRASTRUCTURE
    
   let modelTypeMap =  {
  "generatingcapacity": "ELECTRIC",
  "turbinedetail": "ELECTRIC",
  "solarenergy": "ELECTRIC",
  "windenergy": "ELECTRIC",
  "transformer": "ELECTRIC",
  "transformertype": "ELECTRIC",
  "transmissionline": "ELECTRIC",
  "electrictower": "ELECTRIC",
  "powergenerationcapacity": "ELECTRIC",
  "transmission": "ELECTRIC",
  "windresource": "ELECTRIC",
  "windturbine": "ELECTRIC",
  "solarresourceinformation": "ELECTRIC",
  "solarpanel": "ELECTRIC",
  "geothermalpowerwell": "ELECTRIC",
  "geothermalpowerinfrastructure": "ELECTRIC",
  "transmissionlineinformation": "ELECTRIC",
  "transmissionlineconductorandtowerdata": "ELECTRIC",
  "transmissionlineequipmentdata": "ELECTRIC",
  "substationtransformerandswitchgeardata": "ELECTRIC",
  "substationlayoutandcommunicationdata": "ELECTRIC",
  "minigridstation": "ELECTRIC",
  "minigridstationdistributionline": "ELECTRIC",
  "minigridstationconsumer": "ELECTRIC",
  "minigridstationbackuppowersource": "ELECTRIC",
  "minigridstationdistributionlineinfrastructure": "ELECTRIC",
  "electricdistributiontransformer": "ELECTRIC",
  "electricgridcontrolcenterperformanceandmaintenance": "ELECTRIC",
  "electricdistributiontransformertype": "ELECTRIC",
  "electricsmartmetersdata": "ELECTRIC",
  "electricsmartmetersratingsdata": "ELECTRIC",
  "electricsmartmetersperformancedata": "ELECTRIC",
  "electricsmartmetersprivacyandsecuritydata": "ELECTRIC",
  "electricgridcontrolcenterdata": "ELECTRIC",
  "electricgridcontrolcentercybersecuritydata": "ELECTRIC",
  "buildingenvelopmaterial": "BUILDING",
  "buildingdimensiondetails": "BUILDING",
  "environmentalcontrol": "BUILDING",
  "projectstatus": "BUILDING",
  "project": "BUILDING",
  "projectstakeholder": "BUILDING",
  "projectplan": "BUILDING",
  "projectreport": "BUILDING",
  "projectdocument": "BUILDING",
  "constructionresource": "BUILDING",
  "projectfinance": "BUILDING",
  "projectvariation": "BUILDING",
  "projectextensiontime": "BUILDING",
  "projecttime": "BUILDING",
  "projectbond": "BUILDING",
  "payment": "BUILDING",
  "projectoutcome": "BUILDING",
  "projectadditionalinfo48a1": "BUILDING",
  "projectmanager65a1": "BUILDING",
  "projectcontactperson": "BUILDING",
  "projectsafetystatus": "BUILDING",
  "projectquality": "BUILDING",
  "weathercondition": "BUILDING",
  "projectconstructiontype": "BUILDING",
  "geotechnicalinformation": "BUILDING",
  "environmentaldata": "BUILDING",
  "maintenancehistory": "BUILDING",
  "safetyandhealth": "BUILDING",
  "reliabilityandmaintenance": "BUILDING",
  "environmentalandsocialimpact": "BUILDING",
  "regulationandpolicy": "BUILDING",
  "generalairportinformation": "AIRFIELD_AIRPORT",
  "runwayandapproachdata": "AIRFIELD_AIRPORT",
  "terminalandfacilitydata": "AIRFIELD_AIRPORT",
  "railway": "RAILWAY",
  "railwaystation": "RAILWAY",
  "railwaytrackdata": "RAILWAY",
  "railwaytrackgeometrydata": "RAILWAY",
  "railwaytrackconditionassessment": "RAILWAY",
  "railwaytrackmaintenanceandinspection": "RAILWAY",
  "railwaytrackrehabilitationorrenewal": "RAILWAY",
  "railwaytracksafety": "RAILWAY",
  "railwayballast": "RAILWAY",
  "railwayballastmaterialdata": "RAILWAY",
  "railwayballastmaterialspecification": "RAILWAY",
  "railwayballastconditionassessment": "RAILWAY",
  "railwayballastmaintenanceandrenewal": "RAILWAY",
  "railwayballastdrainageandwatermanagement": "RAILWAY",
  "railwayballastenvironmentalandotherfactor": "RAILWAY",
  "railwaysubballastmaterial": "RAILWAY",
  "railwaysubballastmaterialtest": "RAILWAY",
  "railwaysubballastconditionassessment": "RAILWAY",
  "railwaysubballastmaintenanceandrenewal": "RAILWAY",
  "railwaysubballastdrainageandwatermanagement": "RAILWAY",
  "railwaysubballastenvironmentalandotherfactor": "RAILWAY",
  "railwaysleepercharacteristic": "RAILWAY",
  "railwaysleeperconditionassessment": "RAILWAY",
  "railwaysleepermaintenanceandreplacement": "RAILWAY",
  "railwaysleeperfasteningsystem": "RAILWAY",
  "railwaysleeperenvironmentalandotherfactor": "RAILWAY",
  "railwayfasteningsystemcharacteristic": "RAILWAY",
  "railwayfasteningsystemconditionassessment": "RAILWAY",
  "railwayfasteningsystemmaintenanceandreplacement": "RAILWAY",
  "railwayfasteningsystemenvironmentalfactor": "RAILWAY",
  "railwaysignalingsystem": "RAILWAY",
  "railwaycommunicationsystem": "RAILWAY",
  "railwaysystemconditionassessment": "RAILWAY",
  "railwaycommunicationsystemmaintenanceandtesting": "RAILWAY",
  "railwaycommunicationsystemsafetyandcompliance": "RAILWAY",
  "railwayenvironmentalandotherfactor": "RAILWAY",
  "railwayvehicleidentification": "RAILWAY",
  "railwayvehiclespecification": "RAILWAY",
  "railwayvehiclemaintenanceandinspection": "RAILWAY",
  "railwayvehicleoperationalperformance": "RAILWAY",
  "railwayvehiclesafetyandcompliance": "RAILWAY",
  "railwayvehicleinteriorandpassengeramenity": "RAILWAY",
  "railwayvehicleloadandcargospecification": "RAILWAY",
  "railwaystationplatformlayout": "RAILWAY",
  "railwaystationplatformfacility": "RAILWAY",
  "railwaystationplatformstructuralelement": "RAILWAY",
  "railwaystationplatformsignageandwayfinding": "RAILWAY",
  "railwaystationplatformsafetyandsecurity": "RAILWAY",
  "railwaystationplatformsurfaceandfinish": "RAILWAY",
  "railwaystationplatformpassengerflowandcapacity": "RAILWAY",
  "railwaystationplatformenvironmentalandotherfactor": "RAILWAY",
  "railwaypowersupplyconfiguration": "RAILWAY",
  "telecominfrastructure": "TELECOMMUNICATION",
  "telecominfrastructurecomponent": "TELECOMMUNICATION",
  "telecominfrastructureage": "TELECOMMUNICATION",
  "networkcapacity": "TELECOMMUNICATION",
  "mobilenetwork": "TELECOMMUNICATION",
  "mobilenetworkcomponentage": "TELECOMMUNICATION",
  "networkcoverage": "TELECOMMUNICATION",
  "satellitenetwork": "TELECOMMUNICATION",
  "satelliteinfrastructureage": "TELECOMMUNICATION",
  "satellitenetworkcomponentmanufacturer": "TELECOMMUNICATION",
  "internetconnection": "TELECOMMUNICATION",
  "internetconnectioninfrastructureage": "TELECOMMUNICATION",
  "internetconnectioninfrastructuremanufacturer": "TELECOMMUNICATION",
  "broadcastinginfrastructure": "TELECOMMUNICATION",
  "broadcastinginfrastructureage": "TELECOMMUNICATION",
  "broadcastinginfrastructuremanufacturer": "TELECOMMUNICATION",
  "datacenter": "TELECOMMUNICATION",
  "datacentercomponentage": "TELECOMMUNICATION",
  "datacentercomponentmanufacturer": "TELECOMMUNICATION",
  "datacenterfacilitycapacity": "TELECOMMUNICATION",
  "roadinfo": "ROAD",
  "roadsegment": "ROAD",
  "roadlayer": "ROAD",
  "segmentgeometry": "ROAD",
  "intersectionanddriveway": "ROAD",
  "trafficparameter": "ROAD",
  "accessory": "ROAD",
  "pavement": "ROAD",
  "culvertbasicdata": "ROAD",
  "roadprojectqualitycontrol": "ROAD",
  "culvertstructuralinformation": "ROAD",
  "culvertroadoverinformation": "ROAD",
  "bridgebasicdata": "ROAD",
  "bridgeareadata": "ROAD",
  "bridgesuperstructure": "ROAD",
  "bridgesubstructure": "ROAD",
  "bridgefoundation": "ROAD",
  "bridgeinspection": "ROAD",
  "bridgestructureinformation": "ROAD",
  "trafficvolume": "ROAD",
  "roaddrainage": "ROAD",
  "roadmaintenancedata": "ROAD",
  "roadmaintenanceactivity": "ROAD",
  "roadsurfacecondition": "ROAD",
  "drainageassessment": "ROAD",
  "hydroelectricdam": "WATER_INFRASTRUCTURE",
  "spillwaysdetail": "WATER_INFRASTRUCTURE",
  "reservoirdetails": "WATER_INFRASTRUCTURE",
  "irrigationcapacity": "WATER_INFRASTRUCTURE",
  "waterirrigationdam": "WATER_INFRASTRUCTURE",
  "port": "WATER_INFRASTRUCTURE",
  "hydrologicalinformation": "WATER_INFRASTRUCTURE",
  "dam": "WATER_INFRASTRUCTURE",
  "generaldaminformation": "WATER_INFRASTRUCTURE",
  "damreservoircharacteristic": "WATER_INFRASTRUCTURE",
  "damoutletandenergydissipationsystem": "WATER_INFRASTRUCTURE",
  "dammonitoringandinstrumentation": "WATER_INFRASTRUCTURE",
  "irrigationanddrainagedata": "WATER_INFRASTRUCTURE",
  "canalandpipesystem": "WATER_INFRASTRUCTURE",
  "pumpingsystemanddrainage": "WATER_INFRASTRUCTURE",
  "watertreatment": "WATER_INFRASTRUCTURE"
};
for (const model in modelTypeMap) {
  // Get the value (type) associated with the current key (model)
  const type = modelTypeMap[model];
  
  let per = await Permission.findAll({
    where: {
      model: model
    }
  });

  if(per.length > 0){
        for(let p of per){
          p.module = "project";
          p.type = type;
          await p.save()
        }

      }
  
  
}

return res.json("done");
  } catch (error) {
    return res.json(error)
  }
} 

self.changeModulePermissons = async (req, res) => {

  try {

    // let action = ['create', 'view', 'update', 'delete', 'check', 'approve', 'authorize'];

    // let modelNames = ["infrastructuremasterdata", "stakeholdermasterdata", "generalmasterdata"];

    // // Outer loop to iterate over the x array
    // for (let i = 0; i < modelNames.length; i++) {
    //   // Inner loop to iterate over the action array
    //   for (let j = 0; j < action.length; j++) {

    //     const data = await Permission.create({
    //       name: `${action[j]}_${modelNames[i]}`,
    //       model: `${modelNames[i]}`,
    //       module: "masterdata",
    //       type: "GENERAL",
    //       description: "desc"
    //     });

    //     if(action[j] === "view"){
    //       await RolePermission.create({
    //         permission_id: data.id,
    //         role_id: "80c6c0a4-e407-4396-8e28-abf15f863f8e"
    //       })
    //     }
    //   }

    // }

    // return res.json("done")


    let data = await Permission.findAll({
      where: {
        module: "project",
        type: {
          [Op.ne]: "BUILDING"
        }
      }
    })

    // return res.json(data)

    for(per of data){
      per.module = "infrastructure";
      await per.save();
    }

    return res.json(done)
  } catch (error) {
    res.json(error)
  }
};

module.exports = self;
