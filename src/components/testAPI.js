const testYouTubeAPI = async () => {
    const url = "https://youtube-search-and-download.p.rapidapi.com/channel/about?id=UCE_M8A5yxnLfW0KghEeajjw";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
        "x-rapidapi-key": "1114f331ebmsh68cfd47e295d54cp1cfeabjsn9eb88a05cab5",
      },
    };
  
    try {
      const res = await fetch(url, options);
      if (res.ok) {
        console.log("API is valid:", await res.json());
      } else {
        console.log(`API test failed with status: ${res.status}`);
      }
    } catch (error) {
      console.error("Error testing API:", error);
    }
  };
  
  testYouTubeAPI();
  