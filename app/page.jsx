import Post from "@/components/Post";
import { getAllPosts, getUserPosts } from "@/utils/requests";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// async function getPosts() {
// 	// create client supabase
// 	const supabase = createServerComponentClient({ cookies });
// 	const { data: posts, error } = await supabase.from("posts").select("*");
// 	if (error) {
// 		console.log(error.message);
// 		throw error;
// 	}
// 	return posts;
// }

export default async function Home() {
	// const supabase = createServerComponentClient({ cookies });

	// const {
	// 	data: { user },
	// } = await supabase.auth.getSession();

	const posts = await getAllPosts();
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
