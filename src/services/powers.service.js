import PowerModel from "../schemas/powers.schema.js";

export default class PowersService {
  constructor() {
    this.powersModel = PowerModel;
  }
  getAllPowers = async () => {
    try {
      console.log(`method GET ALL  FROM SERVICE`);
      const Powers = await this.powersModel.find();

      return Powers;
    } catch (error) {}
  };

  getPowersById = async (pid) => {
    try {
      console.log(`method GET BY ID FROM SERVICE`);
      const heroe = await this.powersModel.findById(pid);

      return heroe;
    } catch (error) {
      console.log(
        "🚀 ~ file: superheroe.service.js:20 ~ Powerservice ~ getPowersById= ~ error:",
        error
      );
    }
  };

  createPower = async (bodySuperheroe) => {
    try {
      console.log(`method POST  FROM SERVICE`);
      const newHeroe = await this.powersModel.create(bodySuperheroe);
      console.log(
        "🚀 ~ file: superheroe.service.js:31 ~ Powerservice ~ createSuperHeroe= ~ newHeroe:",
        newHeroe
      );

      return newHeroe;
    } catch (error) {
      console.log(
        "🚀 ~ file: superheroe.service.js:26 ~ Powerservice ~ createSuperHeroe= ~ error:",
        error
      );
    }
  };

  updatePowerById = async (pid, updateBodySuperheroe) => {
    try {
      console.log(`method PUT BY ID FROM SERVICE`);
      // const updHeroe = await this.powersModel.updateOne(
      //   { _id: pid },
      //   updateBodySuperheroe
      // );
      const updHeroe = await this.powersModel.findByIdAndUpdate(
        pid,
        updateBodySuperheroe,
        { new: true }
      );

      return updHeroe;
    } catch (error) {}
  };

  deletePowerById = async (pid) => {
    try {
      console.log(`method DELETE BY ID FROM SERVICE`);
      // const deletedHeroe = await this.powersModel.findByIdAndDelete(pid);
      const deletedHeroe = await this.powersModel.deleteOne({ _id: pid });

      return deletedHeroe;
    } catch (error) {}
  };
}
