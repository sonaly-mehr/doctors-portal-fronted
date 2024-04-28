"use server";

export const getPatientData = async (
  query
) => {
  const queryParams = ["page", "limit", "searchTerm"];
  const filteredQuery = Object.keys(query).reduce((acc, key) => {
    if (queryParams.includes(key)) {
      acc[key] = query[key];
    }
    return acc;
  }, {});
  const queryString = Object.keys(filteredQuery)
    .reduce((acc, key) => {
      acc.push(`${key}=${filteredQuery[key]}`);
      return acc;
    }, [])
    .join("&");
  const res = await fetch(`${process.env.BACKEND_URL}/patients?${queryString}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache"
    // next: {
    //   revalidate: 24 * 60 * 60,
    //   tags: ["all-doctors"],
    // },
  });
  const data  = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};