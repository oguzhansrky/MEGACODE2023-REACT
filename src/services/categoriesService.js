import { generateApiEndpoint } from "../utils";
import restApiClient from "./client";

/**
 * GET: /categories'
 */
export async function getCategories(query) {
  const endpoint = generateApiEndpoint(`categories?${query ?? ""}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}

/**
 * POST: /categories'
 */
export async function createCategory(data) {
  const endpoint = generateApiEndpoint(`categories`);
  const response = await restApiClient.post(endpoint, data);

  return response.data;
}

/**
 * PATCH: /categories'
 */
export async function updateCategory(data, id) {
  const endpoint = generateApiEndpoint(`categories/${id}`);
  const response = await restApiClient.patch(endpoint, data);

  return response.data;
}

/**
 * DELETE: /categories'
 */
export async function deleteCategory(id) {
  const endpoint = generateApiEndpoint(`categories/${id}`);
  const response = await restApiClient.delete(endpoint);

  return response.data;
}
