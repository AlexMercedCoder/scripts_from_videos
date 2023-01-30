const url = new URL("http://www.xyz.com/?cheese=gouda")
console.log(url.searchParams.get("cheese"))