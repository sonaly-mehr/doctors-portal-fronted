"use server";

export const getAllServices = async (query) => {
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

  const res = await fetch(
    `${process.env.BACKEND_URL}/services?${queryString}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      // next: {
      //   revalidate: 24 * 60 * 60,
      //   tags: ["services"],
      // },
      cache: "no-cache",
    }
  );
  const  data  = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};

export const getSingleServices = (id) => {
  const res = fetch(`${process.env.BACKEND_URL}/available-services/${id}`, {
    next: {
      revalidate: 24 * 60 * 60,
      tags: ["available-services"],
    },
  });
  const { data } = res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};

export const getAvailableServices = () => {
  const res = fetch(`${process.env.BACKEND_URL}/available-services`, {
    cache: "no-cache"
    // next: {
    //   revalidate: 24 * 60 * 60,
    //   tags: ["available-services"],
    // },
  });
  const data  = res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
