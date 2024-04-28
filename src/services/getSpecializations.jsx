"use server";

export const getSpecializations = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/specializations`, {
    next: {
      revalidate: 24 * 60 * 60,
      tags: ["specializations"],
    },
  });
  const {data} = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};