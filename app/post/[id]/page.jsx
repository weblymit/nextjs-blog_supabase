import { BtnDelete, BtnEdit } from "@/components/BtnAction";
import { getPost } from "@/utils/requests";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ShowPost({ params }) {
	const supabase = createServerComponentClient({ cookies });

	const { id } = params;
	const post = await getPost(supabase, id);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div>
			{/* timestamp to date */}
			<p className='text-gray-700 text-lg pt-3 '>{post?.created_at}</p>
			<h1 className='text-4xl font-black text-teal-500'>{post?.title}</h1>
			<p className='text-gray-700 text-lg pt-3 '>{post?.content}</p>

			<div className='mt-16 space-x-6'>
				{user?.id === post?.user_id && (
					<>
						<BtnEdit id={id} />
						<BtnDelete id={id} />
					</>
				)}
			</div>
		</div>
	);
}
