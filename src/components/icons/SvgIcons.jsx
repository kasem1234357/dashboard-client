export const Download = (props)=>{
 const {color ,...otherProps} = props
 return <svg {...otherProps}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
 <g fill={color}><path d="M19 10c-.8-.8-2.1-.8-2.8 0L14 12.1V4c0-1.1-.9-2-2-2s-2 .9-2 2v8.2L7.8 10c-.7-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l5.6 5.6c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l5.5-5.5c.9-.8.9-2.1.1-2.9zM21 16c-.5 0-1 .5-1 1v3H4v-3c0-.5-.5-1-1-1s-1 .5-1 1v4c0 .5.5 1 1 1h18c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1z"></path>
</g>
     </svg>
}
export const Print = (props)=>{
 const {color ,...otherProps} = props
 return  <svg {...otherProps}  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
 viewBox="0 0 512 512" style={{enableBackground:"new 0 0 38.273 38.273"}}  >
<g>
<g>
 <path fill={color} d="M495.304,144.696h-83.478v-128C411.826,7.475,404.351,0,395.13,0H116.87c-9.22,0-16.696,7.475-16.696,16.696v128H16.696
  C7.475,144.696,0,152.171,0,161.391V395.13c0,9.22,7.475,16.696,16.696,16.696h83.478v83.478c0,9.22,7.475,16.696,16.696,16.696
  H395.13c9.22,0,16.696-7.475,16.696-16.696v-83.478h83.478c9.22,0,16.696-7.475,16.696-16.696V161.391
  C512,152.171,504.525,144.696,495.304,144.696z M133.565,33.391h244.87v111.304h-244.87V33.391z M378.435,478.609h-244.87V311.652
  h244.87V478.609z M478.609,378.435h-66.783v-83.478c0-9.22-7.475-16.696-16.696-16.696H116.87c-9.22,0-16.696,7.475-16.696,16.696
  v83.478H33.391V178.087h83.478H395.13h83.478V378.435z"/>
</g>
</g>
<g>
<g>
 <path fill={color} d="M329.461,346.156H184.765c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h144.696
  c9.22,0,16.696-7.475,16.696-16.696S338.681,346.156,329.461,346.156z"/>
</g>
</g>
<g>
<g>
 <path fill={color} d="M262.678,412.939h-77.913c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h77.913
  c9.22,0,16.696-7.475,16.696-16.696S271.899,412.939,262.678,412.939z"/>
</g>
</g>
<g>
<g>
 <circle fill={color} cx="362.852" cy="229.287" r="16.696"/>
</g>
</g>
<g>
<g>
 <circle fill={color} cx="429.635" cy="229.287" r="16.696"/>
</g>
</g>

</svg>
}
export const BackArrow =(props)=>{
 const {color,...otherProps} = props
 return <svg {...otherProps} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
 viewBox="0 0 38.273 38.273" style={{enableBackground:"new 0 0 38.273 38.273"}} >
<g>
<path fill={color} d="M20.621,10.484V5.84c0-0.808-0.458-1.548-1.181-1.909c-0.722-0.359-1.589-0.279-2.236,0.206
 l-9.486,7.147c-0.677,0.292-1.117,0.67-1.401,1.058l-5.468,4.119C0.312,16.866-0.003,17.501,0,18.173
 c0.002,0.673,0.322,1.305,0.862,1.706l16.355,12.133c0.646,0.48,1.51,0.554,2.23,0.191c0.72-0.362,1.174-1.1,1.174-1.905v-5.517
 c0.013,0,0.025,0,0.038,0c3.842,0,10.687,1.089,13.366,8.386c0.311,0.846,1.116,1.397,2.001,1.397c0.079,0,0.157-0.004,0.236-0.013
 c0.975-0.108,1.751-0.868,1.88-1.84c0.052-0.394,1.208-9.682-4.461-16.23C30.621,12.948,26.235,10.935,20.621,10.484z
  M20.659,20.515c-1.443,0-2.379,0.132-2.482,0.146c-1.046,0.154-1.822,1.053-1.822,2.111v3.287l-10.66-7.907l3.555-2.678
 c0.136-0.104,0.259-0.222,0.365-0.351c0.155-0.068,0.301-0.152,0.437-0.254l6.303-4.75v2.401c0,1.168,0.939,2.119,2.108,2.134
 c5.345,0.063,9.374,1.61,11.975,4.6c1.442,1.658,2.314,3.602,2.835,5.469C28.923,21.038,23.424,20.515,20.659,20.515z"/>
</g>
     </svg>
}
export const Delete = (props) =>{
  const {color,...otherProps} = props
 return (
 <svg {...otherProps} color={color} viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Stock_cut" version="1.1" xmlns="http://www.w3.org/2000/svg" >
  <desc/>
  <g>
   <g>
    <line fill="none" stroke={'inherit'} strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="16" x2="16" y1="0" y2="6"/><line fill="none" stroke={'inherit'} strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="16" x2="16" y1="8" y2="10"/><line fill="none" stroke={'inherit'} strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="12" x2="12" y1="8" y2="2"/><line fill="none" stroke={'inherit'} strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="20" x2="20" y1="8" y2="2"/></g><polygon fill="none" points="25,13 7,13 9,31    23,31  " stroke={color} strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><line fill="none" stroke={color} strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="4" x2="28" y1="13" y2="13"/><line fill="none" stroke={color} strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="13" x2="13" y1="31" y2="16"/><line fill="none" stroke={color} strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="19" x2="19" y1="31" y2="16"/></g></svg>)
}
export const ReturnBack = (props)=>{
 const {color,...otherProps}=props
 return (
  <svg {...otherProps} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
 viewBox="0 0 956.199 956.199" enableBackground="new 0 0 956.199 956.199"
	 >
<g>
	<path fill={color} d="M859.649,385.6h-255.2L680.05,310c35.1-35.1,35.1-92.1,0-127.3c-35.101-35.1-92.101-35.1-127.3,0L323.449,412
		c-21.6,22.6-32.199,55.3-23.6,85.9c2.3,8.299,5.8,17.5,10.5,24.799c3.9,6,8.4,11.201,13.1,16.602l234.2,234.199
		c17.601,17.6,40.601,26.4,63.601,26.4s46.1-8.801,63.6-26.4c35.1-35.1,35.1-92.1,0-127.301l-80.6-80.6h255.1
		c49.7,0,90-40.299,90-90C949.35,425.9,909.35,385.6,859.649,385.6z"/>
	<path fill={color} d="M96.85,0c-49.7,0-90,40.3-90,90v776.199c0,49.701,40.3,90,90,90s90-40.299,90-90V90C186.85,40.3,146.55,0,96.85,0z"/>
</g>
</svg>
 )
}
export const Add = (props)=>{
  const {color,viewBox,...otherProps}=props
  return (
  <svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox ||"0 0 28 28"}><g fill={color || ''}><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm4 10h-3v3.13c0 .48-.39.88-.88.88h-.25c-.48-.01-.87-.4-.87-.88V13H8c-.55 0-1-.45-1-1s.45-1 1-1h3V7.88c0-.49.39-.88.88-.88h.25c.48 0 .87.39.87.88V11h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></g></svg>
  )
  
}
export const Board = (props)=>{
  /*
   {
    color:'red,
    
   } 
   color = red
  otherProps = {
   width :24px,
    height:20px
   
  }
  {...otherProps}

  */
  const {color,...otherProps}=props
  return (
    <svg  viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path fill={color || ''} d="M10 7h4v4h-4zm6 0h4v4h-4zM4 7h4v4H4zm6 6h4v4h-4zm6 0h4v4h-4zM4 13h4v4H4z"/></svg>
  )
}
export const Bulb = (props)=>{
  const {color,...otherProps}=props
  return(
    <svg {...otherProps} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 00-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24M224 480h64M208 432h96M256 384V256" fill={color || "none"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M294 240s-21.51 16-38 16-38-16-38-16" fill={color ||'none'} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}
export const Sort = (props)=>{
  const {color,...otherProps}=props
  return (
  <svg {...otherProps} fill={color || 'none'} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512;"}} >
<g>
	<g>
		<path d="M166.724,361.898V223.265l25.164,25.164l58.915-58.916L125.402,64.112L0,189.514l58.916,58.915l25.164-25.164v221.277
			h177.626v-82.645H166.724z M245.547,428.384H100.238V184.256l-41.322,41.322l-36.064-36.064L125.402,86.963l102.551,102.551
			l-36.064,36.064l-41.322-41.322v193.8h94.981V428.384z"/>
	</g>
</g>
<g>
	<g>
		
			<rect x="39.415" y="145.815" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -82.5219 108.5625)" width="100.741" height="16.158"/>
	</g>
</g>
<g>
	<g>
		<path d="M453.084,263.571l-25.164,25.164V67.458H250.295v82.645h94.981v138.632l-25.164-25.164l-58.916,58.916l125.402,125.402
			L512,322.486L453.084,263.571z M284.048,322.486l36.064-36.065l41.322,41.322V133.944h-94.981V83.616h145.309v244.128
			l41.322-41.322l36.064,36.064L386.598,425.038L284.048,322.486z"/>
	</g>
</g>
<g>
	<g>
		
			<rect x="371.844" y="350.021" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -129.5516 403.4356)" width="100.741" height="16.158"/>
	</g>
  </g>
</svg>
  )
}
export const AddProductIcon =(props)=>{
  const {color,...otherProps}=props
  return(
    <svg {...otherProps} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 185 185"  >
<path fill={color || ''} d="M15,60.46H0V0h60.46v15H15V60.46z M170,170h-45.46v15H185v-60.46h-15V170z M124.54,15H170v45.46h15V0h-60.46V15z M15,124.54
	H0V185h60.46v-15H15V124.54z M138.906,85H100V46.093H85V85H46.094v15H85v38.907h15V100h38.906V85z"/>
</svg>
  )
}
export const Menu = (props)=>{
  const {color,...otherProps}=props
  return (
<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color || ''}><circle cx="7" cy="7" r="4"></circle><circle cx="17" cy="7" r="4"></circle><circle cx="7" cy="17" r="4"></circle><circle cx="17" cy="17" r="4"></circle></g></svg>

  )
}
export const Close = (props)=>{
  const {color,...otherProps}=props
  return ( 
<svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color || ''}><path d="M19.5 4.5c-.8-.8-2.2-.8-3 0L12 9 7.5 4.5c-.8-.8-2.2-.8-3 0-.8.8-.8 2.2 0 3L9 12l-4.5 4.5c-.8.8-.8 2.2 0 3 .8.8 2.2.8 3 0L12 15l4.5 4.5c.8.8 2.2.8 3 0 .8-.8.8-2.2 0-3L15 12l4.5-4.5c.8-.8.8-2.2 0-3z"></path></g></svg>

  )
}
export const Drag =(props)=>{
  const {color,...otherProps}=props
  return (
    <svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color || ''}><path d="M22 8l-6-6c-.5.5-1 1-.5 2L8 9.5C7 9 6 9 5 10l4 4-5 5-2 3 3-2 5-5 4 4c1-1 1-2 .5-3L20 8.5c1 .5 1.5 0 2-.5z"></path></g></svg>

  )
}
export const Sheets = (props)=>{
  const {color,...otherProps}=props
  return (
    <svg {...otherProps} viewBox="0 0 20 20">
							<path fill={color || ''} d="M17.222,5.041l-4.443-4.414c-0.152-0.151-0.356-0.235-0.571-0.235h-8.86c-0.444,0-0.807,0.361-0.807,0.808v17.602c0,0.448,0.363,0.808,0.807,0.808h13.303c0.448,0,0.808-0.36,0.808-0.808V5.615C17.459,5.399,17.373,5.192,17.222,5.041zM15.843,17.993H4.157V2.007h7.72l3.966,3.942V17.993z"></path>
							<path fill={color || ''} d="M5.112,7.3c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808c0-0.447-0.363-0.808-0.808-0.808H5.92C5.475,6.492,5.112,6.853,5.112,7.3z"></path>
							<path fill={color || ''} d="M5.92,5.331h4.342c0.445,0,0.808-0.361,0.808-0.808c0-0.446-0.363-0.808-0.808-0.808H5.92c-0.444,0-0.808,0.361-0.808,0.808C5.112,4.97,5.475,5.331,5.92,5.331z"></path>
							<path fill={color || ''} d="M13.997,9.218H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,9.58,14.442,9.218,13.997,9.218z"></path>
							<path fill={color || ''} d="M13.997,11.944H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,12.306,14.442,11.944,13.997,11.944z"></path>
							<path fill={color || ''} d="M13.997,14.67H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.447,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,15.032,14.442,14.67,13.997,14.67z"></path>
						</svg>
  )
}
export const Send = (props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps} id='Email_Send_24' width='24' height='24' viewBox='0 0 24 24'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>
  <g transform="matrix(0.83 0 0 0.83 12 12)" >
  <path fill={color || ''} stroke="none" style={{strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: 0, strokeLinejoin: "miter", strokeMiterlimit: 4,  fillRule: "nonzero", opacity: 1}} transform=" translate(-15, -15)" d="M 26 3 C 25.904026142042714 3.0006583581949826 25.80864687942315 3.0151297178191654 25.716797 3.0429688 C 25.68976046237127 3.050306917202327 25.663044228078622 3.0587779232018644 25.636719 3.0683594000000003 L 3.6503906 10.060547 L 3.6503906 10.064453 C 3.2597585643776337 10.210219758159939 3.0005624088856773 10.583057535461814 3 11 C 3.0007408225869683 11.349224834461092 3.1836114229399137 11.672765252777186 3.4824218999999994 11.853516 L 10.164062 17.154297 L 23.373047 6.6269531 L 12.845703 19.835938 L 18.142578 26.513672 C 18.323084316844625 26.815171933439384 18.648596100047126 26.99980154931267 19 27 C 19.416942566116045 26.999437528711955 19.789780373159353 26.740241193134263 19.935547 26.349609 L 19.939453 26.349609 L 26.9375 4.34375 C 26.94465083777267 4.323779951047257 26.951164466503297 4.303587435180673 26.957031 4.2832031 C 26.984870159411347 4.191353198395892 26.999341586528 4.095973901208165 27 4 C 27 3.4477152501692068 26.552284749830793 3 26 3 z" stroke-linecap="round" />
  </g>
  </svg>
}
export const Extend = (props)=>{
 const {color,...otherProps}=props
  return (
    <svg {...otherProps}  height="24" width="24"  id="Capa_1"  viewBox="0 0 304.751 304.751"  fill={color || '#f7f7f7'} stroke="#f7f7f7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon style={{fill:color || '#f7f7f7'}} points="278.241,181.322 278.241,259.492 171.113,152.375 278.105,45.389 278.105,123.543 304.604,123.543 304.615,0.136 181.208,0.141 181.202,26.635 259.356,26.646 152.37,133.627 45.253,26.515 123.407,26.515 123.407,0 0,0 0,123.401 26.515,123.429 26.515,45.253 133.632,152.375 26.646,259.362 26.646,181.208 0.136,181.208 0.136,304.626 123.532,304.604 123.548,278.11 45.389,278.11 152.375,171.124 259.492,278.241 181.338,278.241 181.338,304.751 304.751,304.751 304.751,181.349 "></polygon> </g> </g> </g></svg>
  )
}
export const ExportImage = (props)=>{
  const {color,...otherProps}=props
return (
  <svg {...otherProps} fill={color || "#f7f7f7"} height="24" width="24" version="1.1" id="Layer_1"  viewBox="0 0 485 485"  stroke={color || "#f7f7f7"}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon points="30,30 106,30 106,0 0,0 0,106 30,106 "></polygon> <polygon points="379,0 379,30 455,30 455,106 485,106 485,0 "></polygon> <polygon points="455,455 379,455 379,485 485,485 485,379 455,379 "></polygon> <polygon points="30,379 0,379 0,485 106,485 106,455 30,455 "></polygon> <path d="M274.405,175c26.191,0,47.5-21.309,47.5-47.5S300.597,80,274.405,80s-47.5,21.309-47.5,47.5S248.214,175,274.405,175z"></path> <polygon points="80,405 405,405 405,308.18 346.358,246.304 275.241,287.672 176.238,216.922 80,318.465 "></polygon> </g> </g></svg>
)


}