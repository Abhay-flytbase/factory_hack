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
        <div style={{ display: 'flex', gap: '30px' }}>
          <Box backgroundColor="#0ca4fd" border="1px solid #20372d" borderRadius={8} padding={10}>
            <p>1. Market Segmentation</p>
          </Box>
          <Box backgroundColor="#0ca4fd" border="1px solid #20372d" borderRadius={8} padding={10}>
            <p>2. Beachhead Market</p>
          </Box>
          <Box backgroundColor="#0ca4fd" border="1px solid #20372d" borderRadius={8} padding={10}>
            <p>3. End User Profile</p>
          </Box>
          <Box backgroundColor="#0ca4fd" border="1px solid #20372d" borderRadius={8} padding={10}>
            <p>4. Persona</p>
          </Box>
        </div>
      </Box>

      <Box
        backgroundColor="#fecbeb"
        border="2px solid #20372d"
        borderRadius={16}
        padding={20}
      >
        <h4>Product</h4>
        <div style={{ display: 'flex', gap: '30px' }}>
          <Box backgroundColor="#fb44b7" border="1px solid #20372d" borderRadius={8} padding={10}>
            <p>5. High Level Specs</p>
          </Box>
          <Box backgroundColor="#fb44b7" border="1px solid #20372d" borderRadius={8} padding={10}>
            <p>6. Value Prop</p>
          </Box>
          <Box backgroundColor="#fb44b7" border="1px solid #20372d" borderRadius={8} padding={10}>
            <p>7. Competitive position</p>
          </Box>
          <Box backgroundColor="#fb44b7" border="1px solid #20372d" borderRadius={8} padding={10}>
            <p>8. Define Core</p>
          </Box>
        </div>
      </Box>

      <Box
        backgroundColor="#a4e5b9"
        border="2px solid #20372d"
        borderRadius={16}
        padding={20}
      >
        <h4>Business</h4>
        <div style={{ display: 'flex', gap: '30px' }}>
          <Box backgroundColor="#48ca72" border="1px solid #20372d" borderRadius={8} padding={10}>
            <p>9. Business Model</p>
          </Box>
          <Box backgroundColor="#48ca72" border="1px solid #20372d" borderRadius={8} padding={10}>
            <p>10. Pricing Framework</p>
          </Box>
          <Box backgroundColor="#48ca72" border="1px solid #20372d" borderRadius={8} padding={10}>
            <p>11. Life Time Value</p>
          </Box>
          <Box backgroundColor="#48ca72" border="1px solid #20372d" borderRadius={8} padding={10}>
            <p>12. Customer Acquisition Cost</p>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default App;
