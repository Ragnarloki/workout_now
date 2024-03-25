export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    headers: {
      'X-RapidAPI-Key': 'faf288fcdamsh47d67746677463ep17d5f4jsnef9170c0d002',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData =async (url,options) =>{
    const response=await fetch(ur,option);

    return data;
}