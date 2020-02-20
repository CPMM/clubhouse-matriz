import config from "../config";
const getStories = async function(query) {
  const { URL, CLUBHOUSE_API_TOKEN } = config;
  const url = `${URL}/search/stories?token=${CLUBHOUSE_API_TOKEN}&query=${query}&page_size=25`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

const getMembers = async function() {
  const { URL, CLUBHOUSE_API_TOKEN } = config;
  const url = `${URL}/members?token=${CLUBHOUSE_API_TOKEN}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getStories, getMembers };
