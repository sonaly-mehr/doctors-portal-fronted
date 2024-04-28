"use server";

export const getAvailableDoctors = async (
  query
) => {
  // const res = await fetch("${process.env.BACKEND_URL}/doctors", {
  //     next: {
  //         revalidate: 24 * 60 * 60,
  //         tags: ["all-doctors"],
  //     },
  // });
  const queryParams = ["page", "limit"];
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
  const res = await fetch(`${process.env.BACKEND_URL}/available-doctors?${queryString}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache"
    // next: {
    //   revalidate: 24 * 60 * 60,
    //   tags: ["all-doctors"],
    // },
  });
  const data = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};