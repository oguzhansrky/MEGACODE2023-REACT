import { data } from "autoprefixer";
import axios from "axios";
import { generateApiEndpoint } from "../utils";
import restApiClient from "./client";

/**
 * GET: /applications'
 */
export async function getJobApplications(query) {
  const endpoint = generateApiEndpoint(`applications?${query ?? ""}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}
/**
 * GET: /applications/{id}'
 */
export async function getJobApplication(id) {
  const endpoint = generateApiEndpoint(`applications/${id}`);
  const response = await restApiClient.get(endpoint);

  return response.data;
}

/**
 * POST: /applications'
 */
export async function createJobApplication(data) {
  const endpoint = generateApiEndpoint(`applications`);
  const response = await axios.post(endpoint, data);

  return response.data;
}

/**
 * DELETE: /applications/{id}'
 */
export async function deleteJobApplication(id) {
  const endpoint = generateApiEndpoint(`applications/${id}`);
  const response = await restApiClient.delete(endpoint);

  return response.data;
}
