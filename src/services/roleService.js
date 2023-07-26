import { generateApiEndpoint } from "../utils";
import restApiClient from "./client";

/**
 * GET: /roles'
 */
export async function getRoles(query) {
  const endpoint = generateApiEndpoint(`roles?${query ?? ""}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}

/**
 * POST: /roles'
 */
export async function createRole(data) {
  const endpoint = generateApiEndpoint(`roles`);
  const response = await restApiClient.post(endpoint, data);

  return response.data;
}

/**
 * PATCH: /roles'
 */
export async function updateRole(data, id) {
  const endpoint = generateApiEndpoint(`roles/${id}`);
  const response = await restApiClient.patch(endpoint, data);

  return response.data;
}

/**
 * DELETE: /roles'
 */
export async function deleteRole(id) {
  const endpoint = generateApiEndpoint(`roles/${id}`);
  const response = await restApiClient.delete(endpoint);

  return response.data;
}
