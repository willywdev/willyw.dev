const url = Astro.request.url;
const urlArray = url.split("/");
const currentSlug = urlArray[urlArray.length - 1];
