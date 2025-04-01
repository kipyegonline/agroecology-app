function setAnalytics({
  eventType,
  category,
  label,
}: {
  eventType: string;
  category: string;
  label: string;
}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventType, {
      // Event name: customize this!
      event_name: label,
      event_category: category, // Category: customize this!
      event_label: label, // Label: customize this!
      value: 1, // Value (optional): customize this!
    });
    console.log("principle event....");
  }
}
export default setAnalytics;
