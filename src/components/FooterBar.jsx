export default function FooterBar() {
  return (
    <div style={styles.footer}>
      스타일 적용
    </div>
  )
}

const styles = {
  footer: {
    // position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '60px',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#333',
    fontSize: '1.2rem',
  },
};