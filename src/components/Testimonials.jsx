"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    quote:
      "Pyramid Talent brings value to our partnership by providing hard-to-find skills and resources. Their flexible delivery models bring significant value to the table. We achieve a close, intimate relationship by having them as our local partner.",
    name: "Vice President - Information Technology",
    role: "Insurance Underwriting Company",
    type: "Client",
    image: "/testimonial1.jpg",
  },
  {
    quote:
      "Pyramid Talent provides job opportunities with technology giants. Apart from excellent communication, supportive teams, and growth opportunities, the organization offers competitive compensation and ensures a fair and unbiased work culture.",
    name: "Xiangyu W.",
    role: "Consultant",
    type: "Consultant",
    image: "/testimonial2.jpg",
  },
  {
    quote:
      "Pyramid Talent has a strong reputation as a partner for high-quality technology and talent solutions. We consider them a valued supplier due to their ability to meet our requirements across various technologies and locations.",
    name: "Vice President - Procurement",
    role: "Logistics Company (Healthcare)",
    type: "Client",
    image: "/testimonial3.jpg",
  },
  {
    quote:
      "Working with Pyramid Talent has been one of the best experiences ever. People here are highly professional and ensure seamless communication. I would recommend everyone to work with Pyramid Talent.",
    name: "Nancy P.",
    role: "Consultant",
    type: "Consultant",
    image: "/testimonial1.jpg",
  },
  {
    quote:
      "Pyramid Talent helped us create one of the best development teams I have been associated with. The productive, competent, and professional attitude of the consultants boosted our development efforts.",
    name: "Project Manager - Software Development",
    role: "Technology Company",
    type: "Client",
    image: "/testimonial2.jpg",
  },
  {
    quote:
      "Pyramid Talent helped me with an opportunity at a forward-thinking organization and found a role that complemented my skills. While flexible hours, company culture, and rewards are some great benefits, working with a genuinely supportive team tops it all.",
    name: "Aftab T.",
    role: "Consultant",
    type: "Consultant",
    image: "/testimonial3.jpg",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 25,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const updateSlide = useCallback((api) => {
    setCurrentSlide(api.selectedScrollSnap());
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateSlide(emblaApi);

    emblaApi.on("select", updateSlide);
    emblaApi.on("reInit", updateSlide);

    return () => {
      emblaApi.off("select", updateSlide);
      emblaApi.off("reInit", updateSlide);
    };
  }, [emblaApi, updateSlide]);

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#080d1f] px-6 py-20 text-white sm:px-8 md:py-24 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader currentSlide={currentSlide} />

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div
                key={`${testimonial.name}-${testimonial.role}`}
                className="min-w-0 flex-[0_0_100%]"
              >
                <TestimonialSlide testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center lg:justify-end">
          <CarouselControls onPrev={scrollPrev} onNext={scrollNext} />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ currentSlide }) {
  return (
    <div className="mb-12 flex items-center justify-between gap-6">
      
         <SectionTitle>  Client & Consultant Testimonials</SectionTitle>

      <p className="hidden text-sm text-white/45 md:block">
        {currentSlide + 1} / {testimonials.length}
      </p>
    </div>
  );
}

function TestimonialSlide({ testimonial }) {
  return (
    <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-0">
      <div className="relative z-10 w-full text-center lg:w-[58%] lg:text-left px-10 lg:pl-0 lg:pr-20">
        <div className="mx-auto max-w-3xl bg-[url('https://alcs-slider.netlify.app/images/pattern-quotes.svg')] bg-[length:72px] bg-top bg-no-repeat pt-12 lg:mx-0 lg:translate-x-16 lg:bg-[position:80px_0] lg:bg-[length:88px]">
          <span className="mb-6 inline-flex rounded-full border border-violet-400/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet-300">
            {testimonial.type}
          </span>

          <blockquote className="text-base font-light leading-6 text-white/80 md:text-lg md:leading-8">
            “ {testimonial.quote} ”
          </blockquote>

          <div className="mt-8 flex flex-col justify-center gap-1 text-base md:flex-row md:gap-3 lg:justify-start">
            <p className="font-semibold text-white">{testimonial.name}</p>
            <p className="text-white/45">{testimonial.role}</p>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-md lg:w-[42%] lg:max-w-none">
        <div className="absolute inset-0 rounded-3xl bg-violet-500/20 blur-3xl" />

        <div className="relative bg-[url('https://alcs-slider.netlify.app/images/pattern-bg.svg')] bg-contain bg-center bg-no-repeat p-8 md:p-12">
          <img
            src={testimonial.image}
            alt="testimonial"
            width = {450}
            height = {675}
            className="mx-auto h-[280px] w-[280px] rounded-2xl object-cover shadow-2xl md:h-[350px] md:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

function CarouselControls({ onPrev, onNext }) {
  return (
    <div className="flex overflow-hidden rounded-full border border-white/10 bg-[#0c1228] shadow-xl">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous testimonial"
        className="flex h-12 w-14 items-center justify-center text-white/65 transition hover:bg-white/10 hover:text-violet-300"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next testimonial"
        className="flex h-12 w-14 items-center justify-center text-white/65 transition hover:bg-white/10 hover:text-violet-300"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}