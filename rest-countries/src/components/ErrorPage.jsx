const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <h2 style={styles.subheading}>Page Not Found</h2>
      <p style={styles.text}>
        Oops! The page you are looking for does not exist, has been removed, or is temporarily unavailable.
      </p>
      <a href="/" style={styles.button}>
        Go Back Home
      </a>
    </div>
  );
};

// Simple inline styles for a clean layout
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    fontFamily: 'system-ui, sans-serif',
    color: '#333',
    padding: '20px',
  },
  heading: {
    fontSize: '72px',
    margin: '0',
    color: '#dc3545',
  },
  subheading: {
    fontSize: '24px',
    margin: '10px 0',
  },
  text: {
    fontSize: '16px',
    color: '#6c757d',
    maxWidth: '400px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.2s',
  },
};

export default NotFoundPage;