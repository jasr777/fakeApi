var zones = [
    {
        nombre: 'Gran Canaria',
        value : 0
    },
    {
        nombre:'Tenerife',
        value:1
    }
];

var subZones = [
    {
        nombre:'Las Palmas de Gran Canaria',
        parent : 0,
        value:0
    },
    {
        nombre: 'Telde',
        parent: 0,
        value:1
    },

    {
        nombre:'Ingenio',
        parent:0,
        value:2
    },
    {
        nombre:'Santa Cruz de Tenerife',
        parent:1,
        value:3
    },
    {
        nombre:'La Laguna',
        parent:1,
        value:4

    },
    {
        nombre:'El Rosario',
        parent:'1',
        value:5

    }
]



module.exports = {
    getAll: getAll,
    getZone: getZoneByParent,
}

function getAll(req, res) {
    console.log("getting all users...");
    res.json(zones);
}

function getZoneByParent(req, res) {
    console.log(req.params.value)
    console.log(typeof req.params.value)
    const parentZoneValue =parseInt( req.params.value)
    const children = subZones.filter(zne => zne.parent === parentZoneValue);

    if (children) {
        res.json(children);

    } else {
        return res.status(400).send("Parent Zonedoesn't exist");
    }

}
/*
function createUser(req, res) {
    const newUser = req.body
    console.log('Created user : ');
    console.log(newUser)
    users.push(newUser);
    res.json(newUser);
}*/