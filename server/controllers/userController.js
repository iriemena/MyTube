import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Video from "../models/videoModel.js";

export const updateUser = asyncHandler(async (req, res) => {
  if (req.user.id === req.params.id) {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } else {
    res.status(401);
    throw new Error("You are not allowed to update!");
  }
});

export const deleteUser = asyncHandler(async (req, res) => {
  if (req.user.id === req.params.id) {
    await User.findByIdAndDelete(req.params.id);
    res.json("User deleted");
  } else {
    res.status(401);
    throw new Error("You are not allowed to delete!");
  }
});

export const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
});

export const subscribe = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, {
    $push: { subscribedUsers: req.params.id },
  });
  await User.findByIdAndUpdate(req.params.id, {
    $inc: { subscribers: 1 },
  });
  res.status(200).json("Subscription successfull.");
});

export const unsubscribe = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, {
    $pull: { subscribedUsers: req.params.id },
  });
  await User.findByIdAndUpdate(req.params.id, {
    $inc: { subscribers: -1 },
  });
  res.status(200).json("Unsubscription successfull.");
});

export const like = asyncHandler(async (req, res) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  await Video.findByIdAndUpdate(videoId, {
    $addToSet: { likes: id },
    $pull: { dislikes: id },
  });
  res.status(200).json("The video has been liked.");
});
export const dislike = asyncHandler(async (req, res) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  await Video.findByIdAndUpdate(videoId, {
    $addToSet: { dislikes: id },
    $pull: { likes: id },
  });
  res.status(200).json("The video has been disliked.");
});
