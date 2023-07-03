import SuperHeroeService from "../services/superheroe.service.js";

const superHeroeService = new SuperHeroeService();

export const getAllSuperHeroes = async (req, res) => {
  try {
    const data = await superHeroeService.getAllSuperHeroes();
    return res.json({ message: `get request`, heroes: data });
  } catch (error) {}
};

export const getSuperHeroesById = async (req, res) => {
  try {
    const { sid } = req.params;
    const { type, age } = req.query;
    const data = await superHeroeService.getSuperHeroesById(sid);

    if (!data) {
      return res.status(404).json({ message: `this superheroe doesn't exist` });
    }

    return res.json({ message: `get request by Id`, heroe: data });
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
    return res.json({ message: `post request`, heroe: data });
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

    if (!data) {
      return res.status(404).json({ message: `this superheroe doesn't exist` });
    }

    return res.json({ message: `put request by Id`, heroe: data });
  } catch (error) {}
};

export const deleteSuperHeroeById = async (req, res) => {
  try {
    const { sid } = req.params;
    const data = await superHeroeService.deleteSuperHeroeById(sid);

    if (!data.deletedCount) {
      return res.status(404).json({ message: `this superHeroe doesn't exist` });
    }

    return res.json({ message: `delete request by Id ${sid}`, heroe: data });
  } catch (error) {}
};
