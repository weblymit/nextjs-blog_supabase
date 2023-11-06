export function redirectWithRefreshPage(router, url) {
	router.refresh();
	router.push(url);
}
