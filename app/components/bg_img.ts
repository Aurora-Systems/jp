export const BgImg=(image_src:string)=>{
    return(
        {
            backgroundImage:`url(${image_src})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            width:"100%",
            height:"100%"
        }
    )
}