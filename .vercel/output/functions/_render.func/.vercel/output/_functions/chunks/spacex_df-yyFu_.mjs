const API_URL = "https://api.spacexdata.com/v5/launches";
const getLaunchById = async ({
  id
}) => {
  const res = await fetch(`${API_URL}/${id}`);
  const launch = await res.json();
  return launch;
};
const getLatestLaunches = async () => {
  const res = await fetch(`${API_URL}/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc"
        },
        limit: 12
      }
    })
  });
  const {
    docs: launches
  } = await res.json();
  return launches;
};

export { getLatestLaunches as a, getLaunchById as g };
