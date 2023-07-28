import axios from "axios";
import { generateApiEndpoint } from "../utils";
import restApiClient from "./client";

/**
 * GET: /job-posts'
 */
export async function getJobPosts(query) {
  const endpoint = generateApiEndpoint(`job-posts?${query ?? ""}`);
  const response = await axios.get(endpoint);

  return response.data;
}

/**
 * GET: /job-posts/{slug}'
 */
export async function getJobPost(slug) {
  const endpoint = generateApiEndpoint(`job-posts/${slug}`);
  const response = await axios.get(endpoint);

  return response.data;
}

/**
 * POST: /job-posts'
 */
export async function createJobPost(data) {
  const endpoint = generateApiEndpoint(`job-posts`);
  const response = await restApiClient.post(endpoint, data);

  return response.data;
}

/**
 * PATCH: /job-posts/{id}'
 */
export async function updateJobPost(data, id) {
  const endpoint = generateApiEndpoint(`job-posts/${id}`);
  const response = await restApiClient.patch(endpoint, data);

  return response.data;
}

/**
 * DELETE: /job-posts/{id}'
 */
export async function deleteJobPost(id) {
  const endpoint = generateApiEndpoint(`job-posts/${id}`);
  const response = await restApiClient.delete(endpoint);

  return response.data;
}
