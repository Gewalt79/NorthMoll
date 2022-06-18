import Service from './Service.js';

class Controller {
  async getIssue(req, res) {
    try {
      const issues = await Service.getIssues(req.body);
      res.json(issues);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new Controller();
