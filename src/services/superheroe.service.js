import SuperHeroeModel from "../schemas/superheroes.schema.js";

export default class SuperHeroeService {
  getAllSuperHeroes = async () => {
    try {
      console.log(`method GET ALL  FROM SERVICE`);
      const superHeroes = await SuperHeroeModel.find();

      return superHeroes;
    } catch (error) {}
  };

  getSuperHeroesById = async (sid) => {
    try {
      console.log(`method GET BY ID FROM SERVICE`);
      const heroe = await SuperHeroeModel.findById(sid);

      return heroe;
    } catch (error) {
      console.log(
        "🚀 ~ file: superheroe.service.js:20 ~ SuperHeroeService ~ getSuperHeroesById= ~ error:",
        error
      );
    }
  };

  createSuperHeroe = async (bodySuperheroe) => {
    try {
      console.log(`method POST  FROM SERVICE`);
      const newHeroe = await SuperHeroeModel.create(bodySuperheroe);
      console.log(
        "🚀 ~ file: superheroe.service.js:31 ~ SuperHeroeService ~ createSuperHeroe= ~ newHeroe:",
        newHeroe
      );

      return newHeroe;
    } catch (error) {
      console.log(
        "🚀 ~ file: superheroe.service.js:26 ~ SuperHeroeService ~ createSuperHeroe= ~ error:",
        error
      );
    }
  };

  updateSuperHeroeById = async (sid, updateBodySuperheroe) => {
    try {
      console.log(`method PUT BY ID FROM SERVICE`);
      // const updHeroe = await SuperHeroeModel.updateOne(
      //   { _id: sid },
      //   updateBodySuperheroe
      // );
      const updHeroe = await SuperHeroeModel.findByIdAndUpdate(
        sid,
        updateBodySuperheroe,
        { new: true }
      );

      return updHeroe;
    } catch (error) {}
  };

  deleteSuperHeroeById = async (sid) => {
    try {
      console.log(`method DELETE BY ID FROM SERVICE`);
      // const deletedHeroe = await SuperHeroeModel.findByIdAndDelete(sid);
      const deletedHeroe = await SuperHeroeModel.deleteOne({ _id: sid });

      return deletedHeroe;
    } catch (error) {}
  };
}
