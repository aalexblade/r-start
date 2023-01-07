import PropTypes from 'prop-types';

import images from '../../assets/images.json';

export const UserAvatar= ({ src, alt = 'test' }) => {
     // return src ? <img width='150px' src={src || images[1]} alt={alt} /> : <p>No image</p>;
     // return src && <img width='150px' src={src || images[0]} alt={alt} />;
    return  <img width='150px' src={src || images[3]} alt={alt} />
};


//опис пропсів для UserAvatar
UserAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}