import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Unauthenticated() {
	const supabase = createServerComponentClient({ cookies });
	// get session from supabase
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (session) {
		redirect("/");
	}
	return (
		<div>
			<p>Connecte toi pour voir les posts</p>
			<Link
				href='/login'
				className='underline underline-offset-4 text-teal-600'
			>
				Login
			</Link>
		</div>
	);
}
