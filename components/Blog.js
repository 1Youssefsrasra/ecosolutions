import React from 'react'

const Blog = () => {
    const testimonials =[
        {
            img:'/assets/IMG_blog1.jpg',
            name:'Jhon Duo',
            date:'21 Aug 2022',
            title:'Gréve steg est résolu',
            sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.'
        },
        {
            img:'/assets/IMG_blog4.jpg',
            name:'Anna Joly ',
            date:'21 Aug 2022',
            title:'Plannification du projet de couverture du désert par les panneaux solaires',
            sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.'
        },
        {
            img:'/assets/IMG_blog3.jpg',
            name:'Sofiya',
            date:'21 Aug 2022',
            title:'L`ecologie et la Tunisie: les défis ?',
            sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.'
        },
    ] 
  return (
    <div className='container mx-auto '>

    <div className='block grid md:grid-cols-2'>
        <div>
          <p className='block text-5xl font-semibold text-black py-5'>Nos Articles <br />
            Articles & News</p>
            <button className="btn btn-primary rounded-full w-44 bg-[#eeeee4] border-[#000000] capitalize text-black">
                Tous les articles
            </button>
            </div>

          <p className='text-base text-black my-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum <br /> nulla, ut commodo diam libero.</p>
          
          </div>

        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            {testimonials.map((tes,i)=>{
                return(
                    <div key={i} className='bg-[#9C9C9C]/10 rounded-xl overflow-hidden pb-10 '>
                    <div className="relative">
                    <img className='w-full' src={tes.img} alt="person" />
                    
                    </div>
                            
                            
                        
                            <div className="flex flex-col gap-4 px-6 py-6 items-start">
                            <p className='text-2xl text-black  font-medium'>{tes.title}</p>
                            <p className='text-sm text-black '>{tes.sub}</p>
                            <img src="/assets/star.png" alt="" />
                            <p className="btn btn-primary rounded-full w-32 bg-[#09A79D] border-[#09A79D] capitalize text-white">
                                Lire
                            </p>
                            </div>
                    
                    </div>
                )
            })}
        </div>
          
         
    </div>
  )
}

export default Blog