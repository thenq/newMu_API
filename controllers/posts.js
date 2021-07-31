import { PostModel } from '../models/PostModel.js';

export const getPosts = async (req, res) => {
	try {
		// const post = new PostModel({
		// 	title: 'test',
		// 	content: 'test',
		// 	attachment: 'https://www.google.com/search?q=lamborghini+urus&rlz=1C5CHFA_enVN939VN939&sxsrf=ALeKk02UO4FcIH-6JBMWDukOKIuATNG01Q:1625996999585&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj4mcPs3trxAhXRBN4KHVcICosQ_AUoAXoECAEQAw&biw=1440&bih=789#imgrc=UyQeI0n1tS2w3M'
		// })
		// post.save();
		const posts = await PostModel.find();

		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json({error: err})
	}
}

export const createPost = async(req, res) => {
	try {
		const newPost = req.body;
		const post = new PostModel(newPost);
		post.save();
		res.status(200).json(post);
	} catch(err) {
		res.status(500).json({status: 'create new post failt', error: err})
	}
}

export const updatePost = async(req, res) => {
	try {
		const updatePost = req.body;
		const post = await PostModel.findOneAndUpdate({ _id: updatePost }, updatePost, {new: true});
		res.status(200).json({status: 'update post success'});
	} catch (err) {
		res.status(500).json({error: err})
	}
}