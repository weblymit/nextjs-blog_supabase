import Link from "next/link";
import React from "react";

export default function Post({ post }) {
	const { created_at, title, content } = post;
	return (
		<div className='border-t border-gray-200 py-10 flex space-x-20'>
			<div className=''>
				<p className='text-xl'>{created_at}</p>
				{/* <p className='text-xl'>25.01.2022</p> */}
			</div>
			<div className=''>
				<Link href={`/post/${post.id}`}>
					<h2 className='font-bold text-2xl pb-6'>{title?.slice(0, 60)}</h2>
					<p className='text-gray-700 text-lg font-light'>
						{content?.slice(0, 300)}...
					</p>
				</Link>
			</div>
		</div>
	);
}
