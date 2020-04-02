const users = [];
const init = async () => {
  const data = await fetch('https://randomuser.me/api?results=200&nat=us').then(
    (response) => {
      return response.json();
    }
  );

  data.results.forEach((user) => {
    users.push({
      avatar: user.picture.large,
      city: user.location.city,
      state: user.location.state,
      username: user.login.username,
    });
  });
};

init();

export default users;
