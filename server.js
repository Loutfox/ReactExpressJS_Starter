const express = require("express");

const app = express();

app.get("/api/fighters", (req, res) => {
    const Fighters = [{
        "id": 1,
        "fullName": "Jon Jones",
        "nickName": "Bones"
    },
    {
        "id": 2,
        "fullName": "Dominick Reyes",
        "nickName": "The Devastator",
    },
    {
        "id": 2,
        "fullName": "Anderson Silva",
        "nickName": "The Spider"
    }];

    res.json(Fighters);

})

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});