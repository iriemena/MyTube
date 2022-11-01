import asyncHandler from "express-async-handler";
import Comment from "../models/commentsModel.js";
import Video from "../models/videoModel.js";

export const addComment = asyncHandler(async (req, res) => {
  const comment = await Comment.create({ userId: req.user.id, ...req.body });
  res.status(200).json(comment);
});

export const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({ videoId: req.params.id });
  res.status(200).json(comments);
});

export const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  const video = await Video.findById(req.params.id);
  if (req.user.id === comment.userId || req.user.id === video.userId) {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("The comment has been deleted");
  } else {
    res.status(403);
    throw new Error("You are not allowed to delete this comment!");
  }
});
