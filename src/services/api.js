export default async function articles(value, page = 1) {
  const baseURL = 'https://pixabay.com/api/';
  const API_KEY = '40921400-16e67c90d6d4404c43b5f3edb';

  return await fetch(
    `${baseURL}?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(Response => Response.json());
}
