export async function Fetch({ url, query }) {
  try {
    if (query)
      url =
        url +
        new URLSearchParams(query).toString();

    console.log(url);
    

    const data = await fetch(url, {
      method: "GET",
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await data.json();

    if (body.error) {
      throw body.errors[0];
    }

    return {
      status: data.status,
      body,
    };
  } catch (error) {
    throw error;
  }
}
