

var claims = [
    {   
    	_id:"der231dq",
        czone:1,
        creator:1,
        title : 'Estoy harta del vecino',
        receiver : 'Asesino a sueldo',
        resume : 'Mi vecino pasa por delante de mi casa todos los dias y me pisa las flores, puedo matarlo?',
        body: 'Mira yo ya no puedo mas, todos los dias mi vecino sale de casa, pasa por delante del jardin y me pisa las flores'+
              'Me dejan matarlo? Un poquito solo, para ver si se asusta y pilla el mensaje',
        votes : 0,
        resources:['http://i0.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg','https://i.redd.it/gyoipjj9d60z.jpg','http://epicpix.com/wp-content/uploads/2014/06/ff_1296.jpg']

    },
    {	_id:"der231dq",
        title: 'La calle está llena de mierda',
        receiver: 'Don Saltarin',
        resume: 'Los perritos me dejan las cacas delante de casa, estoy por ir a cagarle a sus dueños en la boca a ver',
        body: 'La gente es super guarra, todos los dias me encuentro por la calle cacas de perro por todos lado y estoy hartandome' +
              ' Estoy por poner una camara para identificar a los dueños de los perros, ir  sus casas y cagarles en la boca mientras duermen',
        votes: 10,
        resources:['http://i0.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg','https://i.redd.it/gyoipjj9d60z.jpg','http://epicpix.com/wp-content/uploads/2014/06/ff_1296.jpg']

        },
        {
        _id:"der231dq",
        title: 'La calle está llena de mierda',
        receiver: 'Don Saltarin',
        resume: 'Los perritos me dejan las cacas delante de casa, estoy por ir a cagarle a sus dueños en la boca a ver',
        body: 'La gente es super guarra, todos los dias me encuentro por la calle cacas de perro por todos lado y estoy hartandome' +
              ' Estoy por poner una camara para identificar a los dueños de los perros, ir  sus casas y cagarles en la boca mientras duermen',
        votes: 10,
        resources:['http://i0.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg','https://i.redd.it/gyoipjj9d60z.jpg','http://epicpix.com/wp-content/uploads/2014/06/ff_1296.jpg']

        },
        {
        id:"der231dq",
        title: 'La calle está llena de mierda',
        receiver: 'Don Saltarin',
        resume: 'Los perritos me dejan las cacas delante de casa, estoy por ir a cagarle a sus dueños en la boca a ver',
        body: 'La gente es super guarra, todos los dias me encuentro por la calle cacas de perro por todos lado y estoy hartandome' +
              ' Estoy por poner una camara para identificar a los dueños de los perros, ir  sus casas y cagarles en la boca mientras duermen',
        votes: 10,
        resources:['http://i0.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg','https://i.redd.it/gyoipjj9d60z.jpg','http://epicpix.com/wp-content/uploads/2014/06/ff_1296.jpg']

        },
]

module.exports = {
    getAll : getAll,
    getClaim : getClaim,
    createClaim : createClaim
}


function getAll(req, res ) {
    console.log('Requesting all claims...')
    res.json(claims)
}


function getClaim(req, res) {
    const claimToFind = req.params.id
    const claim = claims.find(claim => claim.id === claimToFind)

    if (claim) {
        res.json(claim)
    } else {
        return res.status(400).send('Claim wasnt found')
    }
}


function createClaim(req, res, next){


    // parsing multipart : 
    console.log(req)   
    console.log(req.files)    
    const newClaim = req.body;
    claims.push(newClaim);
    console.log('Created claim : ');
    console.log(newClaim);
    res.json(newClaim)
}