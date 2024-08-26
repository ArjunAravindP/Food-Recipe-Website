import PropTypes from 'prop-types';
export default function PostDetails({ label, value }) {
  return (
    <p>
      <span className="font-bold">{label}: </span>
      {value}
    </p>
  );
}
PostDetails.propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
};
