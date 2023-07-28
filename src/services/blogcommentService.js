import { generateApiEndpoint } from "../utils";
import restApiClient from "./client";

/**
 * GET: /blog-comments'
 */
export async function getBlogComments(query) {
  const endpoint = generateApiEndpoint(`blog-comments?${query ?? ""}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}
/**
 * GET: /blog-comments/{id}'
 */
export async function getBlogComment(id, query) {
  console.log(id, query);
  const endpoint = generateApiEndpoint(`blog-comments/${id}?${query ?? ""}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}

/**
 * POST: /blog-comments/{id}'
 */
export async function createBlogComment(id, data) {
  const endpoint = generateApiEndpoint(`blog-comments/${id}`);
  const response = await restApiClient.post(endpoint, data);

  return response.data;
}

/**
 * PATCH: /blog-comments/{id}'
 */
export async function updateBlogComment(data, id) {
  const endpoint = generateApiEndpoint(`blog-comments/${id}`);
  const response = await restApiClient.patch(endpoint, data);

  return response.data;
}

/**
 * DELETE: /blog-comments/{id}'
 */
export async function deleteBlogComment(id) {
  const endpoint = generateApiEndpoint(`blog-comments/${id}`);
  const response = await restApiClient.delete(endpoint);

  return response.data;
}
