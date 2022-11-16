import Menu from "../models/MenuModel.js";
import Dish from "../models/DishModel.js";
import Rating from "../models/RatingModel.js";
import Restaurant from "../models/RestaurantModel.js";

export const getMenu = async (req, res) => {
  // Create an open endpoint to fetch the menu of a particular restaurant with the dishes and the ratings of those dishes. (A sample response is attached herewith)
  try {
    const menu = await Menu.findAll({
      where: { restaurantId: 1 },
      include: [
        {
          model: Dish,
          as: "dishes",
          include: [
            {
              model: Rating,
              as: "ratings",
            },
          ],
        },
      ],
    });
    res.json(menu);
  } catch (error) {
    console.log(error);
  }
};

export const getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      where: { id: 1 },
    });
    console.log("TEST MEN", restaurant);
    res.json(restaurant);
  } catch (error) {
    console.log(error);
  }
};

export const getOnlyMenu = async (req, res) => {
  try {
    const menu = await Menu.findAll({
      where: { restaurantId: 1 },
    });
    res.json(menu);
  } catch (error) {
    console.log(error);
  }
};

export const getDishes = async (req, res) => {
  try {
    const menu = await Dish.findAll({
      where: { menuId: 1 },
    });
    res.json(menu);
  } catch (error) {
    console.log(error);
  }
};
