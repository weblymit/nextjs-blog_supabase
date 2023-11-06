"use client";
import { redirectWithRefreshPage } from "@/utils/redirectWithRefreshPage";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const supabase = createClientComponentClient();

export function BtnDelete({ id }) {
	const router = useRouter();
	async function deletePost(id) {
		// create client supabase
		const { error } = await supabase.from("posts").delete().eq("id", id);
		if (error) {
			console.log(error.message);
			throw error;
		}
		redirectWithRefreshPage(router, "/");
	}
	return (
		<button
			className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
			onClick={() => deletePost(id)}
		>
			Delete
		</button>
	);
}

export function BtnUpdate({ id }) {
	const router = useRouter();
	async function updatePost(id) {
		// create client supabase
		const { error } = await supabase.from("posts").delete().eq("id", id);
		if (error) {
			console.log(error.message);
			throw error;
		}
		redirectWithRefreshPage(router, "/");
	}
	return (
		<button
			className='bg-teal-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
			onClick={() => updatePost(id)}
		>
			Edit
		</button>
	);
}
