import PostCreate from "@/components/form/PostCreate";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function page() {
	const supabase = createServerComponentClient({ cookies });
	// get session from supabase
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (!session) {
		redirect("/login");
	}
	return (
		<div>
			<PostCreate />
		</div>
	);
}
