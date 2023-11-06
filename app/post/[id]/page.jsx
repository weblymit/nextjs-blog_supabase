import { BtnDelete } from "@/components/BtnAction";
import { getPost } from "@/utils/requests";
import Link from "next/link";

export default async function ShowPost({ params }) {
	const { id } = params;
	const post = await getPost(id);

	return (
		<div>
			{/* timestamp to date */}
			<p className='text-gray-700 text-lg pt-3 '>{post?.created_at}</p>
			<h1 className='text-4xl font-black text-teal-500'>{post?.title}</h1>
			<p className='text-gray-700 text-lg pt-3 '>{post?.content}</p>

			<div className='mt-16 space-x-6'>
				<Link
					href={`/edit/${id}`}
					className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'
				>
					Edit
				</Link>
				<BtnDelete id={id} />
			</div>
		</div>
	);
}
