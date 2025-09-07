// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import Box from '../components/Box';

export function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}

      <Box 
        backgroundColor="#7ecffe" 
        border="2px solid #20372d" 
        borderRadius={16}
        padding={20}
      >
        <h4>Market</h4>
        <p>Example</p>
      </Box>

      <Box 
        backgroundColor="#fecbeb" 
        border="2px solid #20372d " 
        borderRadius={16}
        padding={20}
      >
        <h4>Product</h4>
        <p>Example</p>
      </Box>


      <Box 
        backgroundColor="#a4e5b9" 
        border="2px solid #20372d" 
        borderRadius={16}
        padding={20}
      >
        <h4>Business</h4>
        <p>Example</p>
      </Box>

    </div>
  );
}

export default App;
