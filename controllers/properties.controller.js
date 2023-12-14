const Property = require("../models/property.js");

// Create a property in DB //
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
      availability,
    });

    const foundProperty = await Property.findOne(id);
    if (foundProperty) throw new Error("Property Already Exists");

    res.status(201).json(property);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get all properties from the DB //
const getProperties = async (req, res, next) => {
  try {
    const property = await Property.find({});
    res.json(property);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createProperty,
  getProperties,
};
