import React from "react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Alice Johnson",
    profilePic: "https://randomuser.me/api/portraits/men/78.jpg",
    rating: 5,
    purchasedItem: "Custom Photo Frame",
    review:
      "The photo frame is beautiful and exactly what I wanted. Highly recommend!",
  },
  {
    name: "Bob Smith",
    profilePic: "https://randomuser.me/api/portraits/women/83.jpg",
    rating: 4,
    purchasedItem: "Personalized Mug",
    review: "Great quality and fast delivery. The mug looks amazing!",
  },
  {
    name: "Charlie Brown",
    profilePic: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 3,
    purchasedItem: "Engraved Keychain",
    review: "Good product, but the engraving could have been clearer.",
  },
  {
    name: "Diana Prince",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 5,
    purchasedItem: "Handmade Candle",
    review: "The candle smells divine and looks elegant. Perfect gift!",
  },
  {
    name: "Evan Wright",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4,
    purchasedItem: "Custom T-Shirt",
    review:
      "Fits perfectly and the design is awesome. Very happy with my purchase.",
  },
];

const Testimonials = () => {
  return (
    <div className="main_ctr flex items-center justify-center flex-col py-10 gap-6">
      <div className="text_ctr flex items-center justify-center flex-col">
        <div className="heading_ctr text-4xl font-semibold text-center">
          What Our{" "}
          <span className="bg-[#111827] text-white px-2 rounded-sm">
            Customers
          </span>{" "}
          Are Saying
        </div>
        <div className="subheading_ctr text-lg mt-1 text-center">
          Join thousands of happy customers who found the perfect gift with us!
        </div>
      </div>
      <div className="w-full">
        <Marquee speed={20} pauseOnHover className="cursor-pointer">
        <div className="testimonials_ctr flex items-center justify-center w-full py-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimonial_card h-[175px] w-[350px] flex-shrink-0 rounded-lg bg-[#e0e0e0]/50 shadow-md p-6 flex flex-col gap-4 relative mr-4 border border-black"
            >
              <div className="flex items-center justify-start gap-3 w-full">
                <img
                  className="h-12 w-12 rounded-full bg-[#111827] object-cover object-center border border-[#111827]"
                  src={item.profilePic}
                />
                <div className="flex flex-col">
                  <div className="text-xl font-semibold -mb-1">{item.name}</div>
                  <div className="text-sm">{item.purchasedItem}</div>
                </div>
              </div>
              <div className="font-normal leading-snug w-full">
                {item.review}
              </div>
              <div className="bg-[#111827] absolute top-0 right-0 rounded-tr-lg text-center p-2 items-center justify-center text-white px-3">
                {item.rating}⭐
              </div>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee direction="right" speed={20}  pauseOnHover className="cursor-pointer">
        <div className="testimonials_ctr flex items-center justify-center w-full py-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimonial_card h-[175px] w-[350px] flex-shrink-0 rounded-lg bg-[#e0e0e0]/50 shadow-md p-6 flex flex-col gap-4 relative mr-4 border border-black"
            >
              <div className="flex items-center justify-start gap-3 w-full">
                <img
                  className="h-12 w-12 rounded-full bg-[#111827] object-cover object-center border border-[#111827]"
                  src={item.profilePic}
                />
                <div className="flex flex-col">
                  <div className="text-xl font-semibold -mb-1">{item.name}</div>
                  <div className="text-sm">{item.purchasedItem}</div>
                </div>
              </div>
              <div className="font-normal leading-snug w-full">
                {item.review}
              </div>
              <div className="bg-[#111827] absolute top-0 right-0 rounded-tr-lg text-center p-2 items-center justify-center text-white px-3">
                {item.rating}⭐
              </div>
            </div>
          ))}
        </div>
      </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
