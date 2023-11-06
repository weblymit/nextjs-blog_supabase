import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirectWithRefreshPage } from "./redirectWithRefreshPage";

const supabase = createClientComponentClient();

// UPDATE post
export async function updatePost(id, updatedData, router) {
	// create client supabase
	const { error } = await supabase
		.from("posts")
		.update(updatedData)
		.eq("id", id);
	if (error) {
		console.log(error.message);
		throw error;
	}
	redirectWithRefreshPage(router, `/`);
}

//  Create post
export async function createPost(postData, router) {
	const { error } = await supabase.from("posts").insert(postData);
	if (error) {
		console.log(error.message);
		throw error;
	}
	redirectWithRefreshPage(router, "/");
}
