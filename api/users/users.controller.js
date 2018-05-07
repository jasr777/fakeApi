var users = [];

module.exports = {
    getAll : getAll,
    getUser : getUser,
    createUser : createUser
}

function getAll(req,res) {
    console.log("getting all users...");
    res.json(users);
}

function getUser(req,res) {
        const userToFind = req.params.username;
        const user = users.find(usr => usr.username === userToFind);

        if (user) {
            res.json(user);

        } else {
            return res.status(400).send("User doesn't exist");
        }

}

function createUser ( req, res ) {
    const newUser = req.body
    console.log('Created user : ');
    console.log(newUser)
    users.push(newUser);
    res.json(newUser);
}