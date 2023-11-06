import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabase = createServerComponentClient({ cookies });

export async function getAllPosts() {
	// create client supabase
	const { data: posts, error } = await supabase
		.from("posts")
		.select("*")
		.order("created_at", { ascending: false });
	if (error) {
		console.log(error.message);
		throw error;
	}
	return posts;
}

export async function getUserPosts(userId) {
	// create client supabase
	const { data: posts, error } = await supabase
		.from("posts")
		.select("*")
		.eq("user_id", userId);
	if (error) {
		console.log(error.message);
		throw error;
	}
	return posts;
}

export async function getPost(id) {
	// create client supabase
	const { data, error } = await supabase
		.from("posts")
		.select()
		.eq("id", id)
		.single();
	if (error) {
		console.log(error.message);
		throw error;
	}
	return data;
}
