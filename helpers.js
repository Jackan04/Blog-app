function formatPost(post) {
  const formattedDate = post.createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return {
    ...post._doc,
    createdAt: formattedDate,
  };
}

export { formatPost };
