let models = [
    "actionstate",
    "address",
    "agelevel",
    "buildingdimensiondetail",
    "buildingenvelopmaterial",
    "businessfield",
    "certificate",
    "child",
    "constructionrelatedservice",
    "constructionresource",
    "construtionresourcequantityprice",
    "contactperson",
    "department",
    "educationstatus",
"electrictower",
    "employeeage",
    "employeeeducation",
    "experiencelevel",
    "familystatus",
    "file",
    "generatingcapacity",
    "graduate",
    "hydroelectricdam",
    "irrigationcapacity",
    "jobexperience",
    "ownership",
    "permission",
    "photo",
    "port",
    "position",
    "project",
    "projectbond",
    "projectcategory",
    "projectdocument",
    "projectfinance",
    "projectplan",
    "projectstakeholder",
    "projectstatus",
    "projectsubcategory",
    "projecttime",
    "projecttype",
    "projectusedresource",
    "projectvariation",
    "railway",
    "railwaystation",
    "referencedocument",
    "regulation",
    "regulationdocument",
    "researchdocument",
    "reservoirinfo",
    "resource",
    "resourcecategory",
    "resourcesubcategory",
    "resourcetype",
    "roadinfo",
    "roadlayer",
    "roadsegment",
    "role",
    "rolepermission",
    "solarenergy",
    "spillwayinfo",
    "stakecategory",
    "stakeholder",
    "stakeholderinfo",
    "stakeholderservice",
    "stakeholderstudyfield",
    "stakeholdertype",
    "stakesubcategory",
    "status",
    "studyfield",
    "studylevel",
    "studyperiodcost",
    "studyprogram",
    "telecom",
    "totalemployee",
    "training",
    "transformer",
    "transformertype",
    "transmissiontype",
    "transmissionline",
    "turbineinfo",
    "user",
    "useremai",
    "userphone",
    "userposition",
    "waterirrigationdam",
    "windenergy",
    "workexperience",
    "modelmenu",
    "note",
    "reply"

]

let modules = [
    "MASTER",
    "PROJECT",
    "STAKEHOLDER",
    "DOCUMENT",
    "RESOURCE",
    "CENTER"
    // "analysis"
     // analysis can be further classified as project, stakeholder...
]

let permissionModules = [
    "stakeholderinfo",
    "stakeholderemployee",
    "stakeholderspecific",
    "stakeholderproject",
    "stakeholderfile",
    "projectinfo",
    "projecttime",
    "projectfinance",
    "projectstakeholder",
    "projectfile",
    "projectplan",
    "projectresource",
    "projectreport",
    "other",
    "resources",
    "document",
    "center"
]
let roleName = [
    "Admin", 
    "Register", 
    "Checker", 
    "Approver", 
    "Authorizer", 
    "Viewer"
]

let actions = [
    "register",
    "check",
    "approve",
    "authorize",
    "view"
]

const modulemodels = {
    'project':[    
        "buildingdimensiondetail",    
        "buildingenvelopmaterial",    
        "electrictower",    
        "generatingcapacity",    
        "hydroelectricdam",    
        "irrigationcapacity",    
        "port",    
        "railway",    
        "railwaystation",    
        "reservoirinfo",    
        "roadinfo",    
        "roadlayer",    
        "roadsegment",    
        "solarenergy",    
        "spillwayinfo",    
        "transformer",    
        "transformertype",    
        "transmissionline",     
        "turbineinfo",    
        "waterirrigationdam",    
        "windenergy",
        "telecom"
    ],
    
    'stakeholder': [
        'studyfield',
        'studyperiodcost',
        'graduate',
        'stakeholderservice',
        "constructionrelatedservice"
    ],
    'resource': [
        'contracttimeinformation',
        'extensiontime'
    ],
    'document': [
        'stakeholder',
        'professional',
        'responsibility',
        'stakeholderpermission',
        'projectprofessionalrole'
    ],
    'center': [
        
    ]
    
}

module.exports = {
    models,
    modules,
    roleName,
    permissionModules,
    actions,
    modulemodels
}