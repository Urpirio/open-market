"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Sectionhero() {
  return (
    <section className="bg-gray-100  py-4 px-4 text-center">
      <Carousel>
        <CarouselContent className="flex grow">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className=" min-h-[600px] border rounded-2xl overflow-hidden flex justify-center items-center"
            >
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex items-center flex-col justify-center grow">
                <h2 className="text-2xl font-bold mb-4">Slide {index + 1}</h2>
                <p className="text-gray-600">
                  This is the content for slide {index + 1}. You can add any
                  content you like here.
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
