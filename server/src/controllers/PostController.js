const Post = require('../models/Post.js');
const PostService = require('../services/PostService.js');
class PostController {
  async create(req, res) {
    console.log('5555555555')
    try {
      console.log(' 123123 req', req.body, req.files)
      const post = await PostService.create(req.body, req.files.picture);
      res.json(post);
    } catch (e) {
      console.log('123123')
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async update(req, res) {
    try {
      const post = req.body;
      const updatedPost = await PostService.update(post);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.delete(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

module.exports = new PostController();