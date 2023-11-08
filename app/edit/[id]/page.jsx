import PostEdit from "@/components/form/PostEdit";
import { getPost } from "@/utils/requests";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function EditPage({ params }) {
	const supabase = createServerComponentClient({ cookies });
	// get session from supabase
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (!session) {
		redirect("/login");
	}

	const { id } = params;
	const post = await getPost(supabase, id);

	return (
		<div>
			<PostEdit post={post} id={id} />
		</div>
	);
}
