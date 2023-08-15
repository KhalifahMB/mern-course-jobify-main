import { BadRequestError } from "../errors/index.js";
import Job from "../models/Job.js";

const isJobCreator = async (req, res, next) => {
  const { id: jobId } = req.params;
  const job = await Job.findOne({ _id: jobId });
  try {
    if (job.createdBy.toString() === req.user.userId) {
      console.log(job.createdBy.toString() === req.user.userId);
      next();
    }
  } catch (error) {
    throw new BadRequestError("you are not the author");
  }
};

export default isJobCreator;
