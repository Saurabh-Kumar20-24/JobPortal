import React, { useDebugValue } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",

]

const CategoryCarousal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (query) =>{
      dispatch(setSearchedQuery(query));
      navigate('/browse');
    }
  return (
    <div>
      <Carousel className='w-full max-w-xl mx-auto my-20'>
        <CarouselContent>
            {
                category.map((cat,idx)=>(
                   <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3 flex justify-center">
                    <Button onClick={()=>handleClick(cat)} variant="outline" className="rounded-full">{cat}</Button>
                  </CarouselItem>
                ))
            }
           
        </CarouselContent>
        <CarouselPrevious className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10'/>
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"/>
      </Carousel>
    </div>
  )
}

export default CategoryCarousal
