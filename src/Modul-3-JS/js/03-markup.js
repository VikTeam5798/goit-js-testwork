const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://i.pinimg.com/564x/c8/db/26/c8db264211d6168a0c5eaaefeafece9d.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const cardWrapper = document.querySelector('.card')

const makeProfileMarkup = function (userProfile) {
  const {
    avatar = 'https://i.pinimg.com/564x/0d/18/9e/0d189e1499657bde8282ffa20ee6cefb.jpg',
    name,
    tag,
    location = 'Planet Earth',
    stats: { followers, views, likes },
  } = userProfile;

  return `<div style="background-color: white">
    <img src="${avatar}" alt="user avatar" width="200" height="300">
    <p>${name}<span>@${tag}</span></p>
    <p>Location: ${location}</p>
    <ul>
      <li>Followers: ${followers}</li>
      <li>Views: ${views}</li>
      <li>Likes: ${likes}</li>
    </ul>
  </div>`;
};

console.log(cardWrapper);

const markup = makeProfileMarkup(profile);

console.log(markup);

cardWrapper.insertAdjacentHTML('afterbegin', markup);