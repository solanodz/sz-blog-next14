"use server"

import { Post } from "./models";
import connectToDb from "./mongodb";
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {

    // const image = formData.get("image");
    const title = formData.get("title");
    const description = formData.get("description");
    const slug = title.toLowerCase().replace(/ /g, "-");
    const userId = formData.get("userId");

    try {
        connectToDb();
        const newPost = new Post({
            title,
            description,
            slug,
            userId,
        });
        await newPost.save();
        revalidatePath('/blog')
        console.log("Post added successfully ✅");
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb()
        await Post.findByIdAndDelete(id);
        console.log("Post deleted successfully ✅");
        revalidatePath('/blog')
    } catch (error) {
        console.log(error);
        return error;
    }
}