import { generateApiEndpoint } from "../utils";
import restApiClient from "./client";

/**
 * GET: /blogs'
 */
export async function getBlogs(query) {
  const endpoint = generateApiEndpoint(`blogs?${query ?? ""}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}

/**
 * GET: /blogs/{id}'
 */
export async function getBlog(id) {
  const endpoint = generateApiEndpoint(`blogs/${id}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}

/**
 * POST: /blogs'
 */
export async function createBlog(data) {
  const endpoint = generateApiEndpoint(`blogs`);
  const response = await restApiClient.post(endpoint, data);

  return response.data;
}

/**
 * PATCH: /blogs/{id}'
 */
export async function updateBlog(data, id) {
  const endpoint = generateApiEndpoint(`blogs/${id}`);
  const response = await restApiClient.patch(endpoint, data);

  return response.data;
}

/**
 * DELETE: /blogs/{id}'
 */
export async function deleteBlog(id) {
  const endpoint = generateApiEndpoint(`blogs/${id}`);
  const response = await restApiClient.delete(endpoint);

  return response.data;
}
