export function generateApiEndpoint(url) {
  return `${process.env.NEXT_PUBLIC_API_URL}/api/${url}`;
}

export const formatCount = (count) => {
  if (!count) return "0";
  if (count >= 1000000) {
    // Convert to millions format (e.g., 1.5M)
    return _.round(count / 1000000, 1) + "M";
  } else if (count >= 1000) {
    // Convert to thousands format (e.g., 500K)
    return _.round(count / 1000, 1) + "K";
  } else {
    return count.toString();
  }
};
