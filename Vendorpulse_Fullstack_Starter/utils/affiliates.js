// utils/affiliates.js
export async function fetchAmazonSample() {
  return [{ source: "amazon", sourceId: "AMZ-1", title: "Sample Amazon Product", url: "#", price: 19.99, currency: "USD" }];
}
export async function fetchEbaySample() {
  return [{ source: "ebay", sourceId: "EBY-1", title: "Sample eBay Product", url: "#", price: 14.49, currency: "USD" }];
}
export async function fetchTemuSample() {
  return [{ source: "temu", sourceId: "TMU-1", title: "Sample Temu Product", url: "#", price: 7.99, currency: "USD" }];
}
