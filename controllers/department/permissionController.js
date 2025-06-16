const { Permission, PositionPermission, RolePermission, Sequelize, } = require("../../models");
const paginationHelper = require("../utils/pagination-helper");
const usrData = require("../../utils/userDataFromToken");

const { getRecordById, saveRecord, updateRecord, deleteRecord } = require("../utils/format-helper");

const Op = Sequelize.Op;
const master = require("../../config/master");
const { parseParams } = require("../../utils/request/param-hanlder");

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
      if (!exist) {
        await RolePermission.create({
          role_id: id,
          permission_id: per.id
        })

      }
      else{
        // return res.json(exist)
        if(!per.is_selected){
          await RolePermission.destroy({
            where: {
              role_id: id,
              permission_id: per.id
            }
          })
        }
      }

      return res.status(200).json({
        message: "Successfully Assigned"
      }); // No Content

    }
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
    const positionpermissions = await PositionPermission.findAll({
      where: {
        position_id: usr.position_id,
      },
    });

    // return res.json(positionpermissions)

    const perArr = await Promise.all(
      positionpermissions.map(async (posper) => {
        const data = await Permission.findOne({
          where: {
            id: posper.permission_id,
          },
        });
        let obj = {
          action: data ? (data.name).split("_")[0] : null,
          subject: data ? data.module : null
        };
        return obj;
      })
    );

    // Remove any null values from the array
    const filteredArr = perArr.filter(Boolean);

    res.apiSuccess({
      data: filteredArr,
    });
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
    const modelNames = [
      "stakeholdercategory",
      "stakeholdersubcategory",
      "user",
      "abutmenttype",
      "accessory",
      "actionstate",
      "address",
      "agelevel",
      "areatopography",
      "assessmentcondition",
      "branchadditionalinformation",
      "branchaddress",
      "branchcontactperson",
      "branchmanager",
      "bridgeareadata",
      "bridgebasicdata",
      "bridgefoundation",
      "bridgeinspection",
      "bridgeinventory",
      "bridgepartdefect",
      "bridgestructureinformation",
      "bridgestructuretype",
      "bridgesubstructure",
      "bridgesuperstructure",
      "broadcastinginfrastructure",
      "broadcastinginfrastructureage",
      "broadcastinginfrastructuremanufacturer",
      "buildingdimensiondetail",
      "buildingenvelopmaterial",
      "businessfield",
      "constructionrelatedservice",
      "constructionresource",
      "contactperson",
      "counttype",
      "culvertbasicdata",
      "culvertroadoverinformation",
      "culvertstructuralinformation",
      "currentcondition",
      "dam",
      "damagecondition",
      "damagetype",
      "datacenter",
      "datacentercomponentage",
      "datacentercomponentmanufacturer",
      "datacenterfacilitycapacity",
      "deckslabtype",
      "department",
      "designclassification",
      "designstandard",
      "designtrafficflow",
      "detailresourcetype",
      "document",
      "documentcategory",
      "documentsubcategory",
      "documenttype",
      "drainageassessment",
      "drainagecondition",
      "drainagesystem",
      "drainagetype",
      "drainagewatermanagement",
      "drivewayaccesspoint",
      "educationstatus",
      "electricdistributiontransformer",
      "electricdistributiontransformertype",
      "electrictower",
      "employeeage",
      "employeeeducation",
      "environmentalandimpact",
      "environmentalconsiderations",
      "environmentalcontrol",
      "environmentalcontrols",
      "environmentaldata",
      "environmentalfactor",
      "environmentalsocialimpact",
      "equipmentandtools",
      "experiencelevel",
      "familystatus",
      "file",
      "generatingcapacity",
      "geotechnicalinformation",
      "geothermalpowerinfrastructure",
      "geothermalpowerwell",
      "graduate",
      "gridcontrolcenterinformation",
      "groundwaterimpact",
      "hazardtype",
      "horizontalalignment",
      "hydroelectricdam",
      "hydrologicalinformation",
      "hydrologydefect",
      "image",
      "incidenttime",
      "incidenttype",
      "infrastructureandutilities",
      "infrastructurecategory",
      "infrastructuresubcategory",
      "inspectiontype",
      "internetconnection",
      "intersectionanddriveway",
      "intersectiontype",
      "irrigationcapacity",
      "jobexperience",
      "jointventurecompany",
      "landscapeinformation",
      "maintenance",
      "maintenancefrequency",
      "maintenancehistory",
      "maintenanceinformation",
      "maintenanceschedule",
      "maintenanceworkforce",
      "manufacturedconstructionmaterialquality",
      "materialcategory",
      "materialtype",
      "measurementunit",
      "mobilenetwork",
      "modelmenu",
      "moduletype",
      "monthlyreport",
      "networkcapacity",
      "networkcoverage",
      "note",
      "notification",
      "operationlocation",
      "ownership",
      "pavedwaterwaytype",
      "pavement",
      "payment",
      "pedestrianfacility",
      "photo",
      "pierType",
      "port",
      "position",
      "positionpermission",
      "potentialimpact",
      "pressurizedsystem",
      "privacyandsecurity",
      "professional",
      "professionaladditionalinformation",
      "professionaladdress",
      "professionalassociationmembership",
      "professionalcertification",
      "professionalcompetencycertification",
      "professionalcontact",
      "professionalcontactperson",
      "professionaleducation",
      "professionalrank",
      "professionalreferences",
      "professionaltrainingprogram",
      "professionalworkexperience",
      "project",
      "projectaddress",
      "projectbond",
      "projectcategory",
      "projectconstructiontype",
      "projectcontactperson",
      "projectdetail",
      "projectdocument",
      "projectextensiontime",
      "projectfinance",
      "projectmasterdata",
      "projectmilestone",
      "projectoutcome",
      "projectphase",
      "projectplan",
      "projectquality",
      "projectreport",
      "projectsafetystatus",
      "projectstaff",
      "projectstafftraining",
      "projectstakeholder",
      "projectstatus",
      "projectsubcategory",
      "projecttime",
      "projecttype",
      "projectusedresource",
      "projectvariation",
      "protectionandcontrol",
      "qualitycontrol",
      "railway",
      "railwaystation",
      "recomendedactionurgency",
      "referencedocument",
      "regulation",
      "regulationandpolicy",
      "regulationdocument",
      "reliabilityandmaintenance",
      "reply",
      "researchdocument",
      "reservoirinfo",
      "resource",
      "resourcebrand",
      "resourcecategory",
      "resourcequantityandprice",
      "resourcespecification",
      "resourcestudyfield",
      "resourcestudylevel",
      "resourcesubcategory",
      "resourcetype",
      "resourceworkexperience",
      "risklevel",
      "roaddrainage",
      "roadinfo",
      "roadlayer",
      "roadlengthtype",
      "roadmaintenanceactivity",
      "roadmaintenancedata",
      "roadprojectqualitycontrol",
      "roadsafetyfeature",
      "roadsegment",
      "roadsurfacecondition",
      "role",
      "rolepermission",
      "safetyandhealth",
      "safetyequipment",
      "salary",
      "satelliteinfrastructureage",
      "satellitenetwork",
      "satellitenetworkcomponentmanufacturer",
      "segmentgeometry",
      "severitylevel",
      "slopestability",
      "soiltype",
      "solarenergy",
      "solarpanel",
      "solarresourceinformation",
      "spansupporttype",
      "spillwayinfo",
      "stakeholder",
      "stakeholderadditionalinformation",
      "stakeholderbranch",
      "stakeholdercontactperson",
      "stakeholderdepartment",
      "stakeholderemail",
      "stakeholderemployee",
      "stakeholderinfo",
      "stakeholdermachinery",
      "stakeholdermaterial",
      "stakeholderphone",
      "stakeholderposition",
      "stakeholderservice",
      "stakeholderstudyfield",
      "stakeholdertype",
      "status",
      "studyfield",
      "studylevel",
      "studyperiodcost",
      "studyprogram",
      "substationlayoutandcommunicationdata",
      "substationtransformerandswitchgeardata",
      "suggestedrepair",
      "surfacetype",
      "telecom",
      "telecominfrastructureage",
      "telecominfrastructurecomponent",
      "totalemployee",
      "trafficparameter",
      "trafficvolume",
      "training",
      "transformer",
      "transformertype",
      "transmission",
      "transmissionline",
      "transmissionlineconductorandtowerdata",
      "transmissionlineequipmentdata",
      "transmissionlineinformation",
      "turbineinfo",
      "useremail",
      "userphone",
      "userposition",
      "waterirrigationdam",
      "weathercondition",
      "windenergy",
      "windresource",
      "windturbine",
      "workexperience"
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
          description: "desc"
        });
      }

    }
    return res.json("hello")

  } catch (error) {

  }
}

self.assignRolePermissionsGenerate = async (req, res) => {
  try {
    let RoleId = "123451ce-44a8-462b-a07d-3d55ed3ab089";

    let permissions = await Permission.findAll();

    for (let x of permissions) {
      const data = await RolePermission.create({
        role_id: `${RoleId}`,
        permission_id: `${x.id}`,
      });
    }
    return res.json("hell")
  } catch (error) {
    return res.json(error)
  }
}


module.exports = self;
