import PowersService from "../services/powers.service.js";

const powerService = new PowersService();

export const getAllPowers = async (req, res) => {
  try {
    const data = await powerService.getAllPowers();
    return res.json({ message: `get request`, powers: data });
  } catch (error) {}
};

export const getPowerById = async (req, res) => {
  try {
    const { pid } = req.params;
    const data = await powerService.getPowersById(pid);

    if (!data) {
      return res.status(404).json({ message: `this power doesn't exist` });
    }

    return res.json({ message: `get request by Id`, power: data });
  } catch (error) {}
};

export const createPower = async (req, res) => {
  try {
    const bodyPower = req.body;

    const data = await powerService.createPower(bodyPower);
    return res.json({ message: `post request`, power: data });
  } catch (error) {}
};

export const updatePowerById = async (req, res) => {
  try {
    const updBodyPower = req.body;
    const { pid } = req.params;
    const data = await powerService.updatePowerById(pid, updBodyPower);

    if (!data) {
      return res.status(404).json({ message: `this power doesn't exist` });
    }

    return res.json({ message: `put request by Id`, power: data });
  } catch (error) {}
};

export const deletePowerById = async (req, res) => {
  try {
    const { pid } = req.params;
    const data = await powerService.deletePowerById(pid);

    if (!data.deletedCount) {
      return res.status(404).json({ message: `this power doesn't exist` });
    }

    return res.json({ message: `delete request by Id ${pid}`, heroe: data });
  } catch (error) {}
};
