import { generateApiEndpoint } from "../utils";
import restApiClient from "./client";

/**
 * GET: /services'
 */
export async function getServices(query) {
  const endpoint = generateApiEndpoint(`services?${query ?? ""}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}

/**
 * GET: /services/{slug}'
 */
export async function getService(slug) {
  const endpoint = generateApiEndpoint(`services/${slug}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}

/**
 * POST: /services'
 */
export async function createService(data) {
  const endpoint = generateApiEndpoint(`services`);
  const response = await restApiClient.post(endpoint, data);

  return response.data;
}

/**
 * PATCH: /blogs/{id}'
 */
export async function updateService(data, id) {
  const endpoint = generateApiEndpoint(`services/${id}`);
  const response = await restApiClient.patch(endpoint, data);

  return response.data;
}

/**
 * DELETE: /services/{id}'
 */
export async function deleteService(id) {
  const endpoint = generateApiEndpoint(`services/${id}`);
  const response = await restApiClient.delete(endpoint);

  return response.data;
}
