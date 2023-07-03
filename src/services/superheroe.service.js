export default class SuperHeroeService {
  getAllSuperHeroes = async () => {
    try {
      console.log(`method GET ALL  FROM SERVICE`);
    } catch (error) {}
  };

  getSuperHeroesById = async (sid) => {
    try {
      console.log(`method GET BY ID FROM SERVICE`);
    } catch (error) {}
  };

  createSuperHeroe = async (bodySuperheroe) => {
    try {
      console.log(`method POST  FROM SERVICE`);
    } catch (error) {}
  };

  updateSuperHeroeById = async (sid, updateBodySuperheroe) => {
    try {
      console.log(`method PUT BY ID FROM SERVICE`);
    } catch (error) {}
  };

  deleteSuperHeroeById = async (sid) => {
    try {
      console.log(`method DELETE BY ID FROM SERVICE`);
    } catch (error) {}
  };
}
