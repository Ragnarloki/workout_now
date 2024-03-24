export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    headers: {
    
      'X-RapidAPI-Key': '50810e21damshe5cdbabe09cb515p11a138jsnfec4fc23f06b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' }
  };

export const fetchData =async (url,options) =>{
    const response=await fetch(ur,option);

    return data;
}