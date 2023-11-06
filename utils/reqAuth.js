import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirectWithRefreshPage } from "./redirectWithRefreshPage";

const supabase = createClientComponentClient();
// logout user with supabase
export async function logout(router) {
	try {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error.message);
			throw error;
		}
		// redirect to home
		redirectWithRefreshPage(router, "/login");
		// router.push("/login");
	} catch (error) {
		console.log("Error creating user:", error.message);
		// Handle error, show error message
	}
}

// login user with supabase
export async function login(email, password, router) {
	try {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) {
			console.log(error.message);
			throw error;
		}
		// redirect to home
		redirectWithRefreshPage(router, "/");
	} catch (error) {
		console.log("Error creating user:", error.message);
		// Handle error, show error message
	}
}
