"use client";
import { logout } from "@/utils/reqAuth";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import { MdClose } from "react-icons/md";

export default function Navbar() {
	const router = useRouter();
	const pathname = usePathname();
	const supabase = createClientComponentClient();
	// state
	const [session, setSession] = useState(null);
	const [show, setShow] = useState(false);

	const handleOpen = () => {
		setShow(!show);
	};

	useEffect(() => {
		async function getSession() {
			const { data: session, error } = await supabase.auth.getSession();
			if (error) {
				console.error(error);
			}

			setSession(session);
			setShow(false);
			if (!session) {
				router.push("/login");
			}
		}

		getSession();
	}, [pathname]);

	return (
		<nav className='bg-gray-800 text-white flex justify-between items-center px-5 lg:px-32 py-8 text-lg'>
			<Link href='/' className='font-black text-2xl'>
				Blog.
			</Link>
			<Hamburger handleOpen={handleOpen} className='lg:hidden' />
			<div className='space-x-8 hidden lg:block'>
				{session == null ? (
					<Link href='/login'>Login</Link>
				) : (
					<>
						<Link href='/create'>Create post</Link>
						<a
							onClick={() => logout(router)}
							className='cursor-pointer bg-red-500 p-3 rounded-lg'
						>
							Logout
						</a>
					</>
				)}
			</div>

			{show && (
				<div className='absolute right-0 top-0 bg-gray-900 w-screen h-screen p-10'>
					<div className='flex justify-end'>
						<MdClose className='text-4xl' onClick={handleOpen} />
					</div>
					<div className='flex flex-col items-center space-y-6 justify-center pt-[30vh]'>
						{session == null ? (
							<Link href='/login'>Login</Link>
						) : (
							<>
								<Link href='/create'>Create post</Link>
								<a
									onClick={() => logout(router)}
									className='cursor-pointer bg-red-500 p-3 rounded-lg'
								>
									Logout
								</a>
							</>
						)}
					</div>
				</div>
			)}
		</nav>
	);
}
