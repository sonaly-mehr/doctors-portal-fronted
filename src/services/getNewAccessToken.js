"use server";
export const getNewAccessToken = async (token) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/auth/refresh-token`, {
      method: "POST",
      body: JSON.stringify({ refreshToken: token }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};