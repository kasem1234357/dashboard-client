import parse from 'html-react-parser';
import { useEffect, useRef } from 'react';

const test = `
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cum iure. Sed nulla dolores incidunt. Reprehenderit possimus facilis vel tempore, repellendus dignissimos, autem nesciunt molestias hic neque deleniti, placeat quia?</p>
     <br />
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quaerat fugit, omnis, et ullam animi, earum explicabo officia accusamus quis dolorem laborum commodi minus. Suscipit qui aliquid eligendi dolorum sapiente.</p>
     <br />
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cum iure. Sed nulla dolores incidunt. Reprehenderit possimus facilis vel tempore, repellendus dignissimos, autem nesciunt molestias hic neque deleniti, placeat quia?</p>
     <br />
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quaerat fugit, omnis, et ullam animi, earum explicabo officia accusamus quis dolorem laborum commodi minus. Suscipit qui aliquid eligendi dolorum sapiente.</p>
     <img src="https://source.unsplash.com/random/1600x900?desktop" alt="" srcset="" />
`
const MassegeArea = ({setPrintContent}) => {
 

  const contentRef = useRef("")
useEffect(()=>{
 setPrintContent(contentRef)
},[])
  return (
    <>
    <div className='Massege__Area' ref={contentRef} >
     {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cum iure. Sed nulla dolores incidunt. Reprehenderit possimus facilis vel tempore, repellendus dignissimos, autem nesciunt molestias hic neque deleniti, placeat quia?</p>
     <br />
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quaerat fugit, omnis, et ullam animi, earum explicabo officia accusamus quis dolorem laborum commodi minus. Suscipit qui aliquid eligendi dolorum sapiente.</p>
     <br />
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cum iure. Sed nulla dolores incidunt. Reprehenderit possimus facilis vel tempore, repellendus dignissimos, autem nesciunt molestias hic neque deleniti, placeat quia?</p>
     <br />
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quaerat fugit, omnis, et ullam animi, earum explicabo officia accusamus quis dolorem laborum commodi minus. Suscipit qui aliquid eligendi dolorum sapiente.</p> */}
     {parse(test)}
     
    </div>
    </>
  )
}

export default MassegeArea