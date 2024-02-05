// Importando o modelo 'Property' e a biblioteca 'cloudinary'
const Property = require("../models/property.js");
const cloudinary = require("cloudinary").v2;

// Função para criar uma propriedade no banco de dados
const createProperty = async (req, res, next) => {
  try {
    // Extrai os dados necessários do corpo da requisição
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

    // Cria uma nova propriedade usando o modelo 'Property'
    const property = await Property.create({
      title,
      description,
      price,
      bedrooms,
      area,
      propertyType,
      areaCode,
      year,
      image: req.images[0], // Usa a primeira imagem como imagem principal
      images: req.images, // Todas as imagens
      owner: req.user.id, // ID do proprietário (extraído do token de autenticação)
      availability,
    });

    // Responde com o objeto da propriedade criada (status 201 - Created)
    res.status(201).json(property);
  } catch (error) {
    console.log(error);
    next(error); // Passa o erro para o próximo middleware de tratamento de erros
  }
};

// Função para obter e exibir todas as propriedades do banco de dados
const getProperties = async (req, res, next) => {
  try {
    const { query } = req;
    const { page = 0 } = query;
    const limit = 6;

    // Condições opcionais de filtro para preço, área e ano
    if (query.price) {
      query.price = { $lte: query.price };
    }
    if (query.area) {
      query.area = { $lte: query.area };
    }
    if (query.year) {
      query.year = { $lte: query.year };
    }

    // Removendo a propriedade 'page' do objeto de consulta
    if (query.page) delete query.page;

    // Consulta no banco de dados usando o modelo 'Property', aplicando a paginação
    const property = await Property.find(query)
      .skip(page * limit)
      .limit(limit);

    // Responde com a lista de propriedades encontradas
    res.json(property);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Função para obter uma propriedade do banco de dados por ID
const getProperty = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Consulta no banco de dados usando o modelo 'Property' e populando o campo 'owner' com os detalhes do proprietário
    const OneProperty = await Property.findById(id).populate("owner");
    
    // Responde com o objeto da propriedade encontrada
    res.json(OneProperty);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Função para deletar propriedades de um usuário no banco de dados
const deletePropertiesByUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    
    // Deleta todas as propriedades associadas ao ID do usuário
    await Property.deleteMany({ owner: id });
    
    next(); // Chama o próximo middleware
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Função de teste para upload de arquivo no servidor
const testUpload = (req, res) => {
  console.log(req.body);
  console.log(req.file);
};

// Exporta todas as funções como métodos do controlador
module.exports = {
  createProperty,
  getProperties,
  getProperty,
  testUpload,
  deletePropertiesByUser,
};
