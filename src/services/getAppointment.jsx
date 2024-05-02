
export const getAppointment = async (id) => {
  const res = await fetch(`${process.env.BACKEND_URL}/appointments/${id}`, {
    cache: "no-cache"
    // next: {
    //   revalidate: 24 * 60 * 60,
    //   tags: ["specializations"],
    // },
  });
  const {data} = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};