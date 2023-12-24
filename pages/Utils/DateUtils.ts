export const getCurrentDateTimeLocal = () => {
  const now = new Date();
  const localDateTime = new Date(
    now.getTime() - now.getTimezoneOffset() * 60000
  ).toISOString();
  return localDateTime.substring(0, localDateTime.length - 1); // Remove 'Z' from the end
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleString();
};

export const formatDateTime = (dateString: string): string => {
  return dateString ? new Date(dateString).toISOString() : "";
};
