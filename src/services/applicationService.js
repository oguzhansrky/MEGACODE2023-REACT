import { data } from "autoprefixer";
import { generateApiEndpoint } from "../utils";
import restApiClient from "./client";

/**
 * GET: /application'
 */
export async function getJobApplications(query) {
  const endpoint = generateApiEndpoint(`application?${query ?? ""}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}
/**
 * GET: /application/{id}'
 */
export async function getJobApplication(id) {
  const endpoint = generateApiEndpoint(`application/${id}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}

/**
 * POST: /application'
 */
export async function createJobApplication(query) {
  const endpoint = generateApiEndpoint(`application/${query}`);
  const response = await restApiClient.post(endpoint, data);

  return response.data;
}

/**
 * DELETE: /blog-comments/{id}'
 */
export async function deleteJobApplication(id) {
  const endpoint = generateApiEndpoint(`application/${id}`);
  const response = await restApiClient.delete(endpoint);

  return response.data;
}
