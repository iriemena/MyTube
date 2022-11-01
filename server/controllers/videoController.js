import asyncHandler from "express-async-handler";
import Video from "../models/videoModel.js";
import User from "../models/userModel.js";

export const postVideo = asyncHandler(async (req, res) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });

  const savedVideo = await newVideo.save();
  res.status(200).json(savedVideo);
});

export const updateVideo = asyncHandler(async (req, res) => {
  const video = await Video.findById(req.params.id);
  if (!video) {
    res.status(404);
    throw new Error("Video not found");
  }
  if (req.user.id === video.userId) {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedVideo);
  } else {
    res.status(403);
    throw new Error("You are not authorized to update this video!");
  }
});

export const deleteVideo = asyncHandler(async (req, res) => {
  const video = await Video.findById(req.params.id);
  if (!video) {
    res.status(404);
    throw new Error("Video not found");
  }
  if (req.user.id === video.userId) {
    await Video.findByIdAndDelete(req.params.id);
    res.status(200).json("Video deleted!");
  } else {
    res.status(403);
    throw new Error("You are not authorized to delete this video!");
  }
});
export const getVideo = asyncHandler(async (req, res) => {
  const video = await Video.findById(req.params.id);
  res.status(200).json(video);
});
// VIDEO VIEWS
export const addView = asyncHandler(async (req, res) => {
  const viewed = await Video.findByIdAndUpdate(
    req.params.id,
    {
      $inc: { views: 1 },
    },
    { new: true }
  );
  res.status(200).json(viewed);
});
// RANDOM VIDEOS
export const random = asyncHandler(async (req, res) => {
  const video = await Video.aggregate([{ $sample: { size: 40 } }]);
  res.status(200).json(video);
});

// TREND VIDEOS
export const trend = asyncHandler(async (req, res) => {
  const videos = await Video.find().sort({ views: -1 });
  res.status(200).json(videos);
});

// GET BY TAGS
export const getByTags = asyncHandler(async (req, res) => {
  const Tags = req.query.Tags.split(",");
  const videos = await Video.find({ tags: { $in: Tags } }).limit(20);
  res.status(200).json(videos);
});

// SEARCH
export const search = asyncHandler(async (req, res) => {
  const query = req.query.q;
  const videos = await Video.find({
    title: { $regex: query, $options: "i" },
  }).limit(20);
  res.status(200).json(videos);
});

// GET SUBSCRIBED CHANNELS
export const sub = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  const subscribedChannels = user.subscribedUsers;

  const list = await Promise.all(
    subscribedChannels.map(async (channelId) => {
      return await Video.find({ userId: channelId });
    })
  );
  res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
});
