import PostEdit from "@/components/form/PostEdit";
import { getPost } from "@/utils/requests";
import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function EditPage({ params }) {
	const supabase = createServerComponentClient({ cookies });

	const { id } = params;
	const post = await getPost(supabase, id);

	return (
		<div>
			<PostEdit post={post} id={id} />
		</div>
	);
}
