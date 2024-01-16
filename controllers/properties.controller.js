const Property = require("../models/property.js");
const cloudinary = require("cloudinary").v2;

// Create a property Listing to the DataBase //
const createProperty = async (req, res, next) => {
  try {
    const {
      title,
      description,
      price,
      bedrooms,
      area,
      propertyType,
      areaCode,
      year,
      availability,
    } = req.body;

    const property = await Property.create({
      title,
      description,
      price,
      bedrooms,
      area,
      propertyType,
      areaCode,
      year,
      image: req.images[0],
      images: req.images,
      owner: req.user.id,
      availability,
    });

    res.status(201).json(property);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get and display all properties from the DataBase //
const getProperties = async (req, res, next) => {
  try {
    const { query } = req;
    const { page = 0 } = query;
    const limit = 6;

    if (query.price) {
      query.price = { $lte: query.price };
    }
    if (query.area) {
      query.area = { $lte: query.area };
    }
    if (query.year) {
      query.year = { $lte: query.year };
    }

    if (query.page) delete query.page;
    const property = await Property.find(query)
      .skip(page * limit)
      .limit(limit);

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

const deletePropertiesByUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    await Property.deleteMany({ owner: id });
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Upload file to server (testing) //
const testUpload = (req, res) => {
  console.log(req.body);
  console.log(req.file);
};

module.exports = {
  createProperty,
  getProperties,
  getProperty,
  testUpload,
  deletePropertiesByUser,
};
