import { generateApiEndpoint } from "../utils";
import restApiClient from "./client";

/**
 * GET: /users'
 */
export async function getUsers(query) {
  const endpoint = generateApiEndpoint(`users?${query ?? ""}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}

/**
 * POST: /users'
 */
export async function createUser(data) {
  const endpoint = generateApiEndpoint(`users`);
  const response = await restApiClient.post(endpoint, data);

  return response.data;
}

/**
 * PATCH: /users'
 */
export async function updateUser(data, id) {
  const endpoint = generateApiEndpoint(`users/${id}`);
  const response = await restApiClient.patch(endpoint, data);

  return response.data;
}
/**
 * DELETE: /users'
 */
export async function deleteUser(id) {
  const endpoint = generateApiEndpoint(`users/${id}`);
  const response = await restApiClient.delete(endpoint);

  return response.data;
}
