export default async function articles( value, page = 1 ) {
  const baseURL = 'https://pixabay.com/api/';
  const API_KEY = '40925294-1286bb755e1bdf5717fd8e824';

  return await fetch(
    `${baseURL}?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(Response => Response.json());
}