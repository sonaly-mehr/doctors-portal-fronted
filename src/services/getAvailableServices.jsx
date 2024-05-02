"use server";

export const getAvailableServices = async (query) => {
  const queryParams = ["slotDate"];

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

  const res = await fetch(`${process.env.BACKEND_URL}/available-services?${queryString}`, {
    cache: "no-cache"
    // next: {
    //   revalidate: 24 * 60 * 60,
    //   tags: ["specializations"],
    // },
  });
  const data = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
