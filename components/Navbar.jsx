"use client";
import { logout } from "@/utils/reqAuth";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default async function Navbar() {
	const router = useRouter();
	const supabase = createClientComponentClient();
	// get session from supabase
	const {
		data: { session },
	} = await supabase.auth.getSession();

	return (
		<nav className='bg-gray-800 text-white flex justify-between items-center px-32 py-8 text-lg'>
			<Link href='/' className='font-black text-2xl'>
				Blog.
			</Link>
			<div className='space-x-8'>
				{session && <Link href='/create'>Create post</Link>}
				{!session && <Link href='/login'>Login</Link>}
				{session && (
					<a
						onClick={() => logout(router)}
						className='cursor-pointer bg-red-500 p-3'
					>
						Logout
					</a>
				)}
			</div>
		</nav>
	);
}
