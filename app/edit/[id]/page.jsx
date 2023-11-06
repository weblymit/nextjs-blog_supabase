import PostEdit from "@/components/form/PostEdit";
import { getPost } from "@/utils/requests";
import React from "react";

export default async function EditPage({ params }) {
	const { id } = params;
	const post = await getPost(id);

	return (
		<div>
			<PostEdit post={post} id={id} />
		</div>
	);
}
