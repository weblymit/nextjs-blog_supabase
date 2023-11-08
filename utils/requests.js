export async function getAllPosts(supabase) {
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

export async function getUserPosts(supabase, userId) {
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

export async function getPost(supabase, id) {
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
