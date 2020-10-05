const renderBackground = (url) => {
  return {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgb(0, 0, 0)), url(${url})`,
    height: '500px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
};

export default renderBackground;
