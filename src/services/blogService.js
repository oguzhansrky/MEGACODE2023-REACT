import { generateApiEndpoint } from "../utils";
import axios from "axios";

/**
 * GET: /blogs'
 */
export async function getBlogs(query) {
  const endpoint = generateApiEndpoint(`blogs?${query ?? ""}`);
  const response = await axios.get(endpoint);

  return response.data;
}

/**
 * GET: /categories'
 */
export async function getCategories(query) {
  const endpoint = generateApiEndpoint(`categories?${query ?? ""}`);
  const response = await axios.get(endpoint);

  return response.data;
}
