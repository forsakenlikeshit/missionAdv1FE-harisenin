import './Loading.css';

export default Loading;

function Loading({ variant = 'overlay' }) {
  return (
    <div className={variant === 'overlay' ? 'loading-overlay' : 'loading-inline'}>
      <div className="spinner"></div>
    </div>
  );
}