import Post from "@/components/Post";
// import { getAllPosts } from "@/utils/requests";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
	const supabase = createServerComponentClient({ cookies });
	const { data: posts, error } = await supabase
		.from("posts")
		.select("*")
		.order("created_at", { ascending: false });
	if (error) {
		console.log(error.message);
		throw error;
	}

	// const posts = await getAllPosts(supabase);
	return (
		<div>
			<h1 className='text-4xl font-black text-teal-500'>Latest Posts</h1>
			<p className='text-gray-700 text-lg pt-3 '>
				A blog created with Next.js, Supabase and Tailwind.css
			</p>
			<div className='mt-16'>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}
