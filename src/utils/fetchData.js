export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':'6c83837238msh62f7329572cb9bfp103ea2jsn83cf41fce60d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':'6c83837238msh62f7329572cb9bfp103ea2jsn83cf41fce60d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const BMIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':'6c83837238msh62f7329572cb9bfp103ea2jsn83cf41fce60d',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};



export const fetchData = async (url, options) => {
    const response  = await fetch(url, options);
    const data = await response.json();
    return data;
};
