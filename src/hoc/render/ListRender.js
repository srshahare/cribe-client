import React from "react"
import ContentLoader from "react-content-loader"

const ListRender = (props) => (
  <ContentLoader 
    speed={1}
    width="100%"
    height={200}
    viewBox="0 0 800 200"
    backgroundColor="#e8e8e8"
    foregroundColor="#f5f5f5"
    {...props}
  >
    <rect x="8" y="1" rx="5" ry="5" width="150" height="130" /> 
    <rect x="170" y="4" rx="10" ry="10" width="520" height="15" /> 
    <rect x="170" y="28" rx="10" ry="10" width="400" height="15" /> 
    <rect x="170" y="115" rx="5" ry="5" width="100" height="10" /> 
    <rect x="170" y="93" rx="5" ry="5" width="200" height="10" /> 
    <rect x="170" y="52" rx="10" ry="10" width="400" height="15" />
  </ContentLoader>
)

export default ListRender;