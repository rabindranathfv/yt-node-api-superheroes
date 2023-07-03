import SuperHeroeService from "../services/superheroe.service.js";

const superHeroeService = new SuperHeroeService();

export const getAllSuperHeroes = async (req, res) => {
  try {
    const data = await superHeroeService.getAllSuperHeroes();
    return res.json({ message: `get request` });
  } catch (error) {}
};

export const getSuperHeroesById = async (req, res) => {
  try {
    const { sid } = req.params;
    const { type, age } = req.query;
    const data = await superHeroeService.getSuperHeroesById(sid);
    return res.json({ message: `get request by Id`, sid, type });
  } catch (error) {}
};

export const createSuperHeroe = async (req, res) => {
  try {
    const bodyHeroe = req.body;
    console.log(
      "🚀 ~ file: superheroes.routes.js:11 ~ router.post ~ bodyHeroe:",
      bodyHeroe
    );
    const data = await superHeroeService.createSuperHeroe(bodyHeroe);
    return res.json({ message: `post request`, body });
  } catch (error) {}
};

export const updateSuperHeroeById = async (req, res) => {
  try {
    const updBodyHeroe = req.body;
    const { sid } = req.params;
    const data = await superHeroeService.updateSuperHeroeById(
      sid,
      updBodyHeroe
    );
    return res.json({ message: `put request by Id` });
  } catch (error) {}
};

export const deleteSuperHeroeById = async (req, res) => {
  try {
    const { sid } = req.params;
    const data = await superHeroeService.deleteSuperHeroeById(sid);
    return res.json({ message: `delete request by Id` });
  } catch (error) {}
};
