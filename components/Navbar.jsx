import Link from "next/link";

export default function Navbar() {
	return (
		<nav className='bg-gray-800 text-white flex justify-between items-center px-32 py-8 text-lg'>
			<Link href='/' className='font-black text-2xl'>
				Blog.
			</Link>
			<div className='space-x-8'>
				<Link href='/create'>Create post</Link>
				<Link href='/'>Login</Link>
				<Link href='/'>Logout</Link>
			</div>
		</nav>
	);
}
