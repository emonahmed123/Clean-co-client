import React from 'react';
import BucketGril from '../../assets/Images/bucketgirl.png'
const Landing = () => {
    return (
             <div>
            <div class="hero h-full lg:h-[60vh] bg-accent mt-16 z-0 ">
  <div class="hero-content flex-col lg:flex-row">
  <div >
        <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"  className>Best Quality</p>
      <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" class="text-5xl font-bold">Professional Cleaning Service!</h1>
      <p data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="600" class="py-6 max-w-xl">Lorem ipsum dolor sit amet consectetur,laboriosam excepturiuptatem totconsequatur numquam id!</p>
      <button data-aos="zoom-in" data-aos-delay="1300"  class="btn btn-primary">Get Started</button>
    </div>  
         <div className='h-[60vh] shrink-0'>
         
         <img src={ BucketGril } class="h-full" alt='' />

         </div>
   
  </div>
</div>
    
   <div className='rounded-2xl mx-auto mt-[-20px] relative z-20 shadow-lg bg-base-300 p-10 w-5/6 ' >
    <h1 className='text-2xl mb-4 text-primary' >Get Free Estimate</h1>
     <div className='grid gird-col-1  md:grid-cols-2   lg:grid-cols-4 gap-5' >
     <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
     <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />


     </div>
     <button className='btn btn-primary mt-5'>Get A Open</button>
   </div>


</div>


       
    );
};

export default Landing;