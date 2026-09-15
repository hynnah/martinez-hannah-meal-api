const express = require("express")

const app = express();
const PORT = 3000;

const meals = [
    {
        id: 1,
        name: "Adobo",
        price: 65
    },

    {
        id: 2,
        name: "Fried Chicken",
        price: 75
    },

    {
        id: 3,
        name: "Burger",
        price: 15
    },

    {
        id: 4,
        name: "Fries",
        price: 40
    }
];
// retrieve all meals
app.get("/api/meals", (req, res) => {
    res.json(meals);
});

// retrieve individual data
app.get("/api/meals/:id", (req, res) => {
    const id = Number(req.params.id);
    const meal = meals.find((meal) => 
        meal.id === id);
    if (!meal){
        return res.status(404).json({
            message: "Meal not found"
        });
    }

    res.json(meal);
});

app.use(express.static(__dirname));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});