export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // Same key as ExerciseDB
  },
};

// Function to fetch data from any API
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

// Function to test ExerciseDB API
export const testExerciseAPI = async () => {
  const url = "https://exercisedb.p.rapidapi.com/status"; // ExerciseDB status URL
  try {
    const res = await fetch(url, exerciseOptions);
    if (res.ok) {
      console.log("ExerciseDB API is valid:", await res.json());
    } else {
      console.log(`ExerciseDB API test failed with status: ${res.status}`);
    }
  } catch (error) {
    console.error("Error testing ExerciseDB API:", error);
  }
};

// Function to test YouTube API
export const testYouTubeAPI = async () => {
  const url = "https://youtube-search-and-download.p.rapidapi.com/channel/about?id=UCE_M8A5yxnLfW0KghEeajjw"; // YouTube channel about endpoint
  try {
    const res = await fetch(url, youtubeOptions);
    if (res.ok) {
      console.log("YouTube API is valid:", await res.json());
    } else {
      console.log(`YouTube API test failed with status: ${res.status}`);
    }
  } catch (error) {
    console.error("Error testing YouTube API:", error);
  }
};

// Call the functions to test both APIs
testExerciseAPI();
testYouTubeAPI();
