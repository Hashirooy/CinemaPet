export const getFilm = async (title: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzJlMDFlZTVkNWI3OTExNzQ2YTA0NmYwYTM2NjhmMCIsIm5iZiI6MTczMTM0MTM2My45MTg4NzI4LCJzdWIiOiI2NzMwZTM3ZGFjOTcwYWFkMmE4ZGEwYjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8IAte27iPKcMtHDz857vADVhuSVKzJLWF1jHMVhKxgk",
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`,
    options
  );
  const data = await res.json();
  return data;
};
