import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners | SRIYOG Consulting",
};
export default function Page() {
  const partner = [
    {
      name: "IME-PAY",
      des: "IME Digital Solution Ltd. introduced “IME Pay,” Nepal’s first licensed digital payment platform, under its financial services initiative. Since its launch in 2017, IME Pay has provided a fast, secure, and easy-to-use solution for digital transactions.",
      img: "/assets/images/partners/1.jpg",
      path: "https://www.imepay.com.np/#/",
    },
    {
      name: "MAW-Skills-Academy",
      des: "MAW Skills Academy is an initiative by MAW Enterprises under its subsidiary MAW Earthmovers Pvt. Ltd. (MEPL), the authorized distributor of JCB and other premium brands in Nepal’s heavy equipment sector since 1964.",
      img: "/assets/images/partners/2.jpeg",
      path: "https://www.mawacademy.com/",
    },
    {
      name: "Islington-College",
      des: "Islington College is a leading modern college in Nepal dedicated to academic excellence and practical-based education. With a long-standing history, it has nurtured numerous leaders and entrepreneurs. ",
      img: "/assets/images/partners/islington-college-logo.svg",
      path: "https://islington.edu.np/",
    },
  ];
  return (
    <>
      <Ribbon name="Partner Organizations" des="" />
      <section className="w-[1180px] mx-auto max-lg:container max-lg:px-3 text-center mb-[45px]">
        <h1 className="text-[32px] text-[#0D5D59] font-semibold mb-3">
          Drive your own revolution with SRIYOG
        </h1>
        <p className="max-w-[800px] mx-auto">
          arties. Instead of imposing a one-size-fits-all plan, we build a
          flexible roadmap together—empowering your organization to scale at its
          own pace while we grow alongside you through meaningful collaboration.
        </p>
      </section>

      <section className="w-[1180px] mx-auto max-lg:container gap-8 max-lg:px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between mb-[45px]">
        {partner.map((item, idx) => (
          <div
            key={idx + 1}
            className="relative border px-4    border-[#dbdbdb] rounded-lg  lg:h-[460px] sm:h-[480px] h-[480px]  hover:shadow-lg transition duration-300 ease-in-out"
          >
            <section className=" relative h-36 w-full   border-b border-[#dbdbdb]">
              <Image
                src={item.img}
                alt={item.name}
                className="object-contain py-4"
                fill
              />
            </section>

            <p className="text-gray-500 mb-2   h-[200px]  mt-12 ">{item.des}</p>
            <Link
              target="_blank"
              className="absolute my-2 bottom-0 rounded-md border-[#dbdbdb] text-gray-500 font-medium border px-4 py-2 hover:bg-[#055d59] hover:text-white transition-all duration-300 ease-in-out"
              href={item.path}
            >
              Browse More
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
