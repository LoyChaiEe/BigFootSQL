const BaseController = require("./baseController");

class SightingsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Retrieve specific sighting
  async getOne(req, res) {
    const { sightingId } = req.params;
    try {
      const sighting = await this.model.findByPk(sightingId);
      return res.json(sighting);
    } catch (err) {
      //ask robert what is this (just return a null instead of error 400)
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Post sightings
  async createSightings(req, res) {
    const {date, location, notes} = req.body
    try{
      const newSightings = await this.model.create({
        date: date,
        location: location,
        notes: notes,
        created_at: new Date(),
        updated_at: new Date()
      })
      return res.json(newSightings)
    }
    catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = SightingsController;
