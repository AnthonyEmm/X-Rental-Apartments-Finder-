const Property = require("../models/property.js");

// Create a property Listing to the DataBase //
const createProperty = async (req, res, next) => {
  try {
    const {
      title,
      description,
      price,
      bedrooms,
      area,
      image,
      images,
      owner,
      availability,
    } = req.body;
    const property = await Property.create({
      title,
      description,
      price,
      bedrooms,
      area,
      image,
      images,
      owner,
      availability,
    });

    const foundProperty = await Property.findOne({ title });
    if (foundProperty) throw new Error("Property Already Exists");

    res.status(201).json(property);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get and display all properties from the DataBase //
const getProperties = async (req, res, next) => {
  try {
    const property = await Property.find({});

    res.json(property);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get a property from the DataBase by ID //
const getProperty = async (req, res, next) => {
  try {
    const { id } = req.params;
    const OneProperty = await Property.findById(id).populate("owner");
    res.json(OneProperty);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createProperty,
  getProperties,
  getProperty,
};
