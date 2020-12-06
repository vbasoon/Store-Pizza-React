import React from 'react'
import ContentLoader from "react-content-loader"

const LoadingBlock = () => {
   return (
      <ContentLoader
         speed={5}
         width={280}
         height={600}
         viewBox="0 0 280 600"
         backgroundColor="#e2e4e9"
         foregroundColor="#ffffff"

      >
         <rect x="0" y="300" rx="3" ry="3" width="280" height="26" />
         <circle cx="143" cy="173" r="100" />
         <rect x="0" y="340" rx="3" ry="3" width="280" height="84" />
         <rect x="149" y="439" rx="23" ry="23" width="130" height="44" />
         <rect x="0" y="450" rx="4" ry="4" width="90" height="30" />
      </ContentLoader>
   )
}

export default LoadingBlock

