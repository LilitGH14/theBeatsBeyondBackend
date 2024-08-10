const splitTags = (res) => {
  if (!res.tags) return [];

  res.tags = res.tags.split(",").map((tag) => +tag);

  return res;
};

export { splitTags };
