// Importando 'Schema' e 'model' do mongoose
const { Schema, model } = require("mongoose");

// Definindo o Schema para as propriedades
const propertySchema = new Schema({
  title: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true, min: 1 },
  area: { type: Number, required: true },
  propertyType: { type: String, required: true },
  areaCode: { type: Number, required: true },
  year: { type: Number, required: true },
  image: { type: String, required: true }, // Caminho da imagem principal
  images: { type: [String] }, // Array de caminhos de imagens adicionais
  owner: { type: Schema.Types.ObjectId, ref: "User" }, // Referência ao dono da propriedade (relacionamento com o modelo 'User')
  availability: {
    type: String,
    enum: ["vacant", "rented"],
    default: "vacant",
  },
  createdAt: { type: Date, default: Date.now() }, // Data de criação da propriedade
});

// Criando o modelo 'Property' baseado no Schema definido
const Property = model("Property", propertySchema);

// Exportando o modelo 'Property'
module.exports = Property;
